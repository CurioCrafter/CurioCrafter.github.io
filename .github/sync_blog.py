"""Rebuilds blog/ and demos/ from the Job Desk's public export (published posts and approved demos only).

Run by .github/workflows/blog.yml. Standard library only. If the export can't be fetched, nothing is
changed. Every path is checked so the export can only ever write inside blog/ and demos/.
"""
import json, os, re, shutil, sys, urllib.request

BASE = 'https://job-finder.andrewrainsberger.workers.dev'
SAFE = re.compile(r'^(blog|demos)/[A-Za-z0-9._-]+(/[A-Za-z0-9._-]+)*$')


def get(path):
    req = urllib.request.Request(BASE + path, headers={'User-Agent': 'curiocrafter-blog-sync'})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def safe(path):
    if not SAFE.match(path) or '..' in path.split('/'):
        sys.exit(f'Refusing unsafe path from export: {path!r}')
    return path


def main():
    export = json.loads(get('/public/andrew/export.json'))
    out = {}
    for page in export['pages']:
        out[safe(page['path'])] = page['html'].encode('utf-8')
    for f in export['files']:
        if not f['url'].startswith('/public/andrew/files/'):
            sys.exit(f'Refusing file URL: {f["url"]!r}')
        out[safe(f['path'])] = get(f['url'])
    for path in export['assets']:
        out[safe(path)] = get('/' + path)
    # Everything fetched fine: replace the old copies, so unpublished posts disappear too.
    for d in ('blog', 'demos'):
        shutil.rmtree(d, ignore_errors=True)
    for path, data in out.items():
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'wb') as fh:
            fh.write(data)
    print(f'Wrote {len(out)} files.')


if __name__ == '__main__':
    main()
