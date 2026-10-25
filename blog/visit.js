(function(){try{if(localStorage.getItem('notrack'))return;}catch(e){}if(navigator.globalPrivacyControl||navigator.doNotTrack==='1')return;
var u=(/elisabethbailey.net$/.test(location.hostname)?'https://jobs.elisabethbailey.net':'https://job-finder.andrewrainsberger.workers.dev')+'/api/visit';
function send(o){o.path=location.pathname;o.wd=navigator.webdriver?1:0;try{navigator.sendBeacon(u,JSON.stringify(o));}catch(e){}}
send({kind:'view',ref:document.referrer});
var t=Date.now(),d=false;function e(){if(d||Date.now()-t<1500)return;d=true;send({kind:'engaged'});}
['scroll','pointerdown','keydown','touchstart'].forEach(function(x){addEventListener(x,e,{capture:true,passive:true});});
var secs=0,depth=0,parts={},act=Date.now();
['scroll','pointermove','pointerdown','keydown','touchstart'].forEach(function(x){addEventListener(x,function(){act=Date.now();},{capture:true,passive:true});});
setInterval(function(){if(document.visibilityState!=='visible'||Date.now()-act>30000)return;secs++;
depth=Math.max(depth,Math.min(100,Math.round((scrollY+innerHeight)/document.documentElement.scrollHeight*100)));
var el=document.elementFromPoint(innerWidth/2,innerHeight/2),s=el&&el.closest('section[id],header[id],footer[id],article[id]');if(s)parts[s.id]=(parts[s.id]||0)+1;},1000);
function flush(){if(!secs)return;send({kind:'leave',secs:secs,depth:depth,parts:parts});secs=0;parts={};}
addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')flush();});addEventListener('pagehide',flush);})();
