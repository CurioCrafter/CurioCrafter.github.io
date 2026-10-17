(()=>{var BW="178";var _W=0,tQ=1,CW=2;var eQ=1,wW=2,k8=3,n8=0,f0=1,$8=2,s8=0,C6=1,JZ=2,QZ=3,ZZ=4,IW=5,d9=100,PW=101,TW=102,AW=103,SW=104,jW=200,vW=201,yW=202,fW=203,hW=204,xW=205,bW=206,gW=207,pW=208,lW=209,dW=210,mW=211,uW=212,cW=213,nW=214,w7=0,m9=1,I7=2,w6=3,P7=4,T7=5,A7=6,S7=7,sW=0,iW=1,oW=2,A8=0,aW=1,rW=2,tW=3,eW=4,JH=5,j7=6,QH=7;var u9=301,E9=302,v7=303,y7=304,I6=306,c9=1000,f7=1001,h7=1002,O8=1003,x7=1004;var q9=1005;var i0=1006,n9=1007;var S8=1008;var i8=1009,ZH=1010,$H=1011,P6=1012,$Z=1013,s9=1014,o8=1015,T6=1016,WZ=1017,HZ=1018,i9=1020,WH=35902,HH=1021,YH=1022,W8=1023,b7=1026,A6=1027,XH=1028,YZ=1029,KH=1030,XZ=1031;var KZ=1033,g7=33776,p7=33777,l7=33778,d7=33779,UZ=35840,GZ=35841,EZ=35842,qZ=35843,NZ=36196,OZ=37492,FZ=37496,RZ=37808,kZ=37809,DZ=37810,MZ=37811,LZ=37812,VZ=37813,zZ=37814,BZ=37815,_Z=37816,CZ=37817,wZ=37818,IZ=37819,PZ=37820,TZ=37821,m7=36492,AZ=36494,SZ=36495,UH=36283,jZ=36284,vZ=36285,yZ=36286;var fZ=2300,u7=2301;var hZ=0,S6=1,o9=2;var GH=3201;var EH=0,qH=1,j8="",H8="srgb",h0="srgb-linear",xZ="linear",X0="srgb";var NH=512,OH=513,FH=514,bZ=515,RH=516,kH=517,DH=518,MH=519;var gZ="300 es",LH=2000;class v8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let $=Z[J];if($!==void 0){let W=$.indexOf(Q);if(W!==-1)$.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let $=Z.slice(0);for(let W=0,H=$.length;W<H;W++)$[W].call(this,J);J.target=null}}}var I0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],g$=1234567,B6=Math.PI/180,K9=180/Math.PI;function N8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,$=Math.random()*4294967295|0;return(I0[J&255]+I0[J>>8&255]+I0[J>>16&255]+I0[J>>24&255]+"-"+I0[Q&255]+I0[Q>>8&255]+"-"+I0[Q>>16&15|64]+I0[Q>>24&255]+"-"+I0[Z&63|128]+I0[Z>>8&255]+"-"+I0[Z>>16&255]+I0[Z>>24&255]+I0[$&255]+I0[$>>8&255]+I0[$>>16&255]+I0[$>>24&255]).toLowerCase()}function pJ(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function pZ(J,Q){return(J%Q+Q)%Q}function DX(J,Q,Z,$,W){return $+(J-Q)*(W-$)/(Z-Q)}function MX(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function _6(J,Q,Z){return(1-Z)*J+Z*Q}function LX(J,Q,Z,$){return _6(J,Q,1-Math.exp(-Z*$))}function VX(J,Q=1){return Q-Math.abs(pZ(J,Q*2)-Q)}function zX(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function BX(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function _X(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function CX(J,Q){return J+Math.random()*(Q-J)}function wX(J){return J*(0.5-Math.random())}function IX(J){if(J!==void 0)g$=J;let Q=g$+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function PX(J){return J*B6}function TX(J){return J*K9}function AX(J){return(J&J-1)===0&&J!==0}function SX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function jX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function vX(J,Q,Z,$,W){let{cos:H,sin:Y}=Math,X=H(Z/2),K=Y(Z/2),U=H((Q+$)/2),G=Y((Q+$)/2),E=H((Q-$)/2),q=Y((Q-$)/2),F=H(($-Q)/2),D=Y(($-Q)/2);switch(W){case"XYX":J.set(X*G,K*E,K*q,X*U);break;case"YZY":J.set(K*q,X*G,K*E,X*U);break;case"ZXZ":J.set(K*E,K*q,X*G,X*U);break;case"XZX":J.set(X*G,K*D,K*F,X*U);break;case"YXY":J.set(K*F,X*G,K*D,X*U);break;case"ZYZ":J.set(K*D,K*F,X*G,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function q8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function eJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var y8={DEG2RAD:B6,RAD2DEG:K9,generateUUID:N8,clamp:pJ,euclideanModulo:pZ,mapLinear:DX,inverseLerp:MX,lerp:_6,damp:LX,pingpong:VX,smoothstep:zX,smootherstep:BX,randInt:_X,randFloat:CX,randFloatSpread:wX,seededRandom:IX,degToRad:PX,radToDeg:TX,isPowerOfTwo:AX,ceilPowerOfTwo:SX,floorPowerOfTwo:jX,setQuaternionFromProperEuler:vX,normalize:eJ,denormalize:q8};class wJ{constructor(J=0,Q=0){wJ.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6],this.y=$[1]*Q+$[4]*Z+$[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=pJ(this.x,J.x,Q.x),this.y=pJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=pJ(this.x,J,Q),this.y=pJ(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(pJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(pJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*Z-H*$+J.x,this.y=W*$+H*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class T0{constructor(J=0,Q=0,Z=0,$=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=$}static slerpFlat(J,Q,Z,$,W,H,Y){let X=Z[$+0],K=Z[$+1],U=Z[$+2],G=Z[$+3],E=W[H+0],q=W[H+1],F=W[H+2],D=W[H+3];if(Y===0){J[Q+0]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G;return}if(Y===1){J[Q+0]=E,J[Q+1]=q,J[Q+2]=F,J[Q+3]=D;return}if(G!==D||X!==E||K!==q||U!==F){let k=1-Y,O=X*E+K*q+U*F+G*D,N=O>=0?1:-1,B=1-O*O;if(B>Number.EPSILON){let I=Math.sqrt(B),P=Math.atan2(I,O*N);k=Math.sin(k*P)/I,Y=Math.sin(Y*P)/I}let M=Y*N;if(X=X*k+E*M,K=K*k+q*M,U=U*k+F*M,G=G*k+D*M,k===1-Y){let I=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=I,K*=I,U*=I,G*=I}}J[Q]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,Z,$,W,H){let Y=Z[$],X=Z[$+1],K=Z[$+2],U=Z[$+3],G=W[H],E=W[H+1],q=W[H+2],F=W[H+3];return J[Q]=Y*F+U*G+X*q-K*E,J[Q+1]=X*F+U*E+K*G-Y*q,J[Q+2]=K*F+U*q+Y*E-X*G,J[Q+3]=U*F-Y*G-X*E-K*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,$){return this._x=J,this._y=Q,this._z=Z,this._w=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:$,_z:W,_order:H}=J,Y=Math.cos,X=Math.sin,K=Y(Z/2),U=Y($/2),G=Y(W/2),E=X(Z/2),q=X($/2),F=X(W/2);switch(H){case"XYZ":this._x=E*U*G+K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G-E*q*F;break;case"YXZ":this._x=E*U*G+K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G+E*q*F;break;case"ZXY":this._x=E*U*G-K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G-E*q*F;break;case"ZYX":this._x=E*U*G-K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G+E*q*F;break;case"YZX":this._x=E*U*G+K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G-E*q*F;break;case"XZY":this._x=E*U*G-K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G+E*q*F;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,$=Math.sin(Z);return this._x=J.x*$,this._y=J.y*$,this._z=J.z*$,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],$=Q[4],W=Q[8],H=Q[1],Y=Q[5],X=Q[9],K=Q[2],U=Q[6],G=Q[10],E=Z+Y+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-X)*q,this._y=(W-K)*q,this._z=(H-$)*q}else if(Z>Y&&Z>G){let q=2*Math.sqrt(1+Z-Y-G);this._w=(U-X)/q,this._x=0.25*q,this._y=($+H)/q,this._z=(W+K)/q}else if(Y>G){let q=2*Math.sqrt(1+Y-Z-G);this._w=(W-K)/q,this._x=($+H)/q,this._y=0.25*q,this._z=(X+U)/q}else{let q=2*Math.sqrt(1+G-Z-Y);this._w=(H-$)/q,this._x=(W+K)/q,this._y=(X+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(pJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let $=Math.min(1,Q/Z);return this.slerp(J,$),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:$,_z:W,_w:H}=J,Y=Q._x,X=Q._y,K=Q._z,U=Q._w;return this._x=Z*U+H*Y+$*K-W*X,this._y=$*U+H*X+W*Y-Z*K,this._z=W*U+H*K+Z*X-$*Y,this._w=H*U-Z*Y-$*X-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let Z=this._x,$=this._y,W=this._z,H=this._w,Y=H*J._w+Z*J._x+$*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=H,this._x=Z,this._y=$,this._z=W,this;let X=1-Y*Y;if(X<=Number.EPSILON){let q=1-Q;return this._w=q*H+Q*this._w,this._x=q*Z+Q*this._x,this._y=q*$+Q*this._y,this._z=q*W+Q*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),G=Math.sin((1-Q)*U)/K,E=Math.sin(Q*U)/K;return this._w=H*G+this._w*E,this._x=Z*G+this._x*E,this._y=$*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),$=Math.sqrt(1-Z),W=Math.sqrt(Z);return this.set($*Math.sin(J),$*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(J=0,Q=0,Z=0){A.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(p$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(p$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*Z+W[6]*$,this.y=W[1]*Q+W[4]*Z+W[7]*$,this.z=W[2]*Q+W[5]*Z+W[8]*$,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*Z+W[11]*$+W[15]);return this.x=(W[0]*Q+W[4]*Z+W[8]*$+W[12])*H,this.y=(W[1]*Q+W[5]*Z+W[9]*$+W[13])*H,this.z=(W[2]*Q+W[6]*Z+W[10]*$+W[14])*H,this}applyQuaternion(J){let Q=this.x,Z=this.y,$=this.z,W=J.x,H=J.y,Y=J.z,X=J.w,K=2*(H*$-Y*Z),U=2*(Y*Q-W*$),G=2*(W*Z-H*Q);return this.x=Q+X*K+H*G-Y*U,this.y=Z+X*U+Y*K-W*G,this.z=$+X*G+W*U-H*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*$,this.y=W[1]*Q+W[5]*Z+W[9]*$,this.z=W[2]*Q+W[6]*Z+W[10]*$,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=pJ(this.x,J.x,Q.x),this.y=pJ(this.y,J.y,Q.y),this.z=pJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=pJ(this.x,J,Q),this.y=pJ(this.y,J,Q),this.z=pJ(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(pJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:$,z:W}=J,H=Q.x,Y=Q.y,X=Q.z;return this.x=$*X-W*Y,this.y=W*H-Z*X,this.z=Z*Y-$*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return BQ.copy(this).projectOnVector(J),this.sub(BQ)}reflect(J){return this.sub(BQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(pJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,$=this.z-J.z;return Q*Q+Z*Z+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let $=Math.sin(Q)*J;return this.x=$*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=$*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),$=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=$,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var BQ=new A,p$=new T0;class yJ{constructor(J,Q,Z,$,W,H,Y,X,K){if(yJ.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,H,Y,X,K)}set(J,Q,Z,$,W,H,Y,X,K){let U=this.elements;return U[0]=J,U[1]=$,U[2]=Y,U[3]=Q,U[4]=W,U[5]=X,U[6]=Z,U[7]=H,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,H=Z[0],Y=Z[3],X=Z[6],K=Z[1],U=Z[4],G=Z[7],E=Z[2],q=Z[5],F=Z[8],D=$[0],k=$[3],O=$[6],N=$[1],B=$[4],M=$[7],I=$[2],P=$[5],_=$[8];return W[0]=H*D+Y*N+X*I,W[3]=H*k+Y*B+X*P,W[6]=H*O+Y*M+X*_,W[1]=K*D+U*N+G*I,W[4]=K*k+U*B+G*P,W[7]=K*O+U*M+G*_,W[2]=E*D+q*N+F*I,W[5]=E*k+q*B+F*P,W[8]=E*O+q*M+F*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return Q*H*U-Q*Y*K-Z*W*U+Z*Y*X+$*W*K-$*H*X}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=U*H-Y*K,E=Y*X-U*W,q=K*W-H*X,F=Q*G+Z*E+$*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let D=1/F;return J[0]=G*D,J[1]=($*K-U*Z)*D,J[2]=(Y*Z-$*H)*D,J[3]=E*D,J[4]=(U*Q-$*X)*D,J[5]=($*W-Y*Q)*D,J[6]=q*D,J[7]=(Z*X-K*Q)*D,J[8]=(H*Q-Z*W)*D,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,$,W,H,Y){let X=Math.cos(W),K=Math.sin(W);return this.set(Z*X,Z*K,-Z*(X*H+K*Y)+H+J,-$*K,$*X,-$*(-K*H+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(_Q.makeScale(J,Q)),this}rotate(J){return this.premultiply(_Q.makeRotation(-J)),this}translate(J,Q){return this.premultiply(_Q.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<9;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var _Q=new yJ;function lZ(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function p9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function VH(){let J=p9("canvas");return J.style.display="block",J}var l$={};function U9(J){if(J in l$)return;l$[J]=!0,console.warn(J)}function zH(J,Q,Z){return new Promise(function($,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,Z);break;default:$()}}setTimeout(H,Z)})}function BH(J){let Q=J.elements;Q[2]=0.5*Q[2]+0.5*Q[3],Q[6]=0.5*Q[6]+0.5*Q[7],Q[10]=0.5*Q[10]+0.5*Q[11],Q[14]=0.5*Q[14]+0.5*Q[15]}function _H(J){let Q=J.elements;if(Q[11]===-1)Q[10]=-Q[10]-1,Q[14]=-Q[14];else Q[10]=-Q[10],Q[14]=-Q[14]+1}var d$=new yJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),m$=new yJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function yX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return W;if(this.spaces[H].transfer==="srgb")W.r=I8(W.r),W.g=I8(W.g),W.b=I8(W.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=g9(W.r),W.g=g9(W.g),W.b=g9(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,Y){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,H){return U9("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,H)},toWorkingColorSpace:function(W,H){return U9("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],$=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:$,transfer:"linear",toXYZ:d$,fromXYZ:m$,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:$,transfer:"srgb",toXYZ:d$,fromXYZ:m$,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var uJ=yX();function I8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function g9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var C9;class dZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(C9===void 0)C9=p9("canvas");C9.width=J.width,C9.height=J.height;let $=C9.getContext("2d");if(J instanceof ImageData)$.putImageData(J,0,0);else $.drawImage(J,0,0,J.width,J.height);Z=C9}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=p9("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let $=Z.getImageData(0,0,J.width,J.height),W=$.data;for(let H=0;H<W.length;H++)W[H]=I8(W[H]/255)*255;return Z.putImageData($,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(I8(Q[Z]/255)*255);else Q[Z]=I8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var fX=0;class j6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fX++}),this.uuid=N8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},$=this.data;if($!==null){let W;if(Array.isArray($)){W=[];for(let H=0,Y=$.length;H<Y;H++)if($[H].isDataTexture)W.push(CQ($[H].image));else W.push(CQ($[H]))}else W=CQ($);Z.url=W}if(!Q)J.images[this.uuid]=Z;return Z}}function CQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return dZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var hX=0,wQ=new A;class k0 extends v8{constructor(J=k0.DEFAULT_IMAGE,Q=k0.DEFAULT_MAPPING,Z=1001,$=1001,W=1006,H=1008,Y=1023,X=1009,K=k0.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:hX++}),this.uuid=N8(),this.name="",this.source=new j6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=$,this.magFilter=W,this.minFilter=H,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new wJ(0,0),this.repeat=new wJ(1,1),this.center=new wJ(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(wQ).x}get height(){return this.source.getSize(wQ).y}get depth(){return this.source.getSize(wQ).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let $=this[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if($&&Z&&($.isVector2&&Z.isVector2))$.copy(Z);else if($&&Z&&($.isVector3&&Z.isVector3))$.copy(Z);else if($&&Z&&($.isMatrix3&&Z.isMatrix3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}k0.DEFAULT_IMAGE=null;k0.DEFAULT_MAPPING=300;k0.DEFAULT_ANISOTROPY=1;class iJ{constructor(J=0,Q=0,Z=0,$=1){iJ.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=Z,this.w=$}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,$){return this.x=J,this.y=Q,this.z=Z,this.w=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*Z+H[8]*$+H[12]*W,this.y=H[1]*Q+H[5]*Z+H[9]*$+H[13]*W,this.z=H[2]*Q+H[6]*Z+H[10]*$+H[14]*W,this.w=H[3]*Q+H[7]*Z+H[11]*$+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,$,W,H=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],G=X[8],E=X[1],q=X[5],F=X[9],D=X[2],k=X[6],O=X[10];if(Math.abs(U-E)<0.01&&Math.abs(G-D)<0.01&&Math.abs(F-k)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+D)<0.1&&Math.abs(F+k)<0.1&&Math.abs(K+q+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let B=(K+1)/2,M=(q+1)/2,I=(O+1)/2,P=(U+E)/4,_=(G+D)/4,w=(F+k)/4;if(B>M&&B>I)if(B<0.01)Z=0,$=0.707106781,W=0.707106781;else Z=Math.sqrt(B),$=P/Z,W=_/Z;else if(M>I)if(M<0.01)Z=0.707106781,$=0,W=0.707106781;else $=Math.sqrt(M),Z=P/$,W=w/$;else if(I<0.01)Z=0.707106781,$=0.707106781,W=0;else W=Math.sqrt(I),Z=_/W,$=w/W;return this.set(Z,$,W,Q),this}let N=Math.sqrt((k-F)*(k-F)+(G-D)*(G-D)+(E-U)*(E-U));if(Math.abs(N)<0.001)N=1;return this.x=(k-F)/N,this.y=(G-D)/N,this.z=(E-U)/N,this.w=Math.acos((K+q+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=pJ(this.x,J.x,Q.x),this.y=pJ(this.y,J.y,Q.y),this.z=pJ(this.z,J.z,Q.z),this.w=pJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=pJ(this.x,J,Q),this.y=pJ(this.y,J,Q),this.z=pJ(this.z,J,Q),this.w=pJ(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(pJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mZ extends v8{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new iJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new iJ(0,0,J,Q);let $={width:J,height:Q,depth:Z.depth},W=new k0($);this.textures=[];let H=Z.count;for(let Y=0;Y<H;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let $=0,W=this.textures.length;$<W;$++)this.textures[$].image.width=J,this.textures[$].image.height=Q,this.textures[$].image.depth=Z,this.textures[$].isArrayTexture=this.textures[$].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let $=Object.assign({},J.textures[Q].image);this.textures[Q].source=new j6($)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class f8 extends mZ{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class c7 extends k0{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class uZ extends k0{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class l0{constructor(J=new A(1/0,1/0,1/0),Q=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(K8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(K8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=K8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let W=Z.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=W.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,K8);else K8.fromBufferAttribute(W,H);K8.applyMatrix4(J.matrixWorld),this.expandByPoint(K8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();J7.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();J7.copy(Z.boundingBox)}J7.applyMatrix4(J.matrixWorld),this.union(J7)}}let $=J.children;for(let W=0,H=$.length;W<H;W++)this.expandByObject($[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,K8),K8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(F6),Q7.subVectors(this.max,F6),w9.subVectors(J.a,F6),I9.subVectors(J.b,F6),P9.subVectors(J.c,F6),p8.subVectors(I9,w9),l8.subVectors(P9,I9),W9.subVectors(w9,P9);let Q=[0,-p8.z,p8.y,0,-l8.z,l8.y,0,-W9.z,W9.y,p8.z,0,-p8.x,l8.z,0,-l8.x,W9.z,0,-W9.x,-p8.y,p8.x,0,-l8.y,l8.x,0,-W9.y,W9.x,0];if(!IQ(Q,w9,I9,P9,Q7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!IQ(Q,w9,I9,P9,Q7))return!1;return Z7.crossVectors(p8,l8),Q=[Z7.x,Z7.y,Z7.z],IQ(Q,w9,I9,P9,Q7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,K8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(K8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return V8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),V8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),V8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),V8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),V8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),V8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),V8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),V8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(V8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var V8=[new A,new A,new A,new A,new A,new A,new A,new A],K8=new A,J7=new l0,w9=new A,I9=new A,P9=new A,p8=new A,l8=new A,W9=new A,F6=new A,Q7=new A,Z7=new A,H9=new A;function IQ(J,Q,Z,$,W){for(let H=0,Y=J.length-3;H<=Y;H+=3){H9.fromArray(J,H);let X=W.x*Math.abs(H9.x)+W.y*Math.abs(H9.y)+W.z*Math.abs(H9.z),K=Q.dot(H9),U=Z.dot(H9),G=$.dot(H9);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var xX=new l0,R6=new A,PQ=new A;class o0{constructor(J=new A,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else xX.setFromPoints(J).getCenter(Z);let $=0;for(let W=0,H=J.length;W<H;W++)$=Math.max($,Z.distanceToSquared(J[W]));return this.radius=Math.sqrt($),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;R6.subVectors(J,this.center);let Q=R6.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),$=(Z-this.radius)*0.5;this.center.addScaledVector(R6,$/Z),this.radius+=$}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else PQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(R6.copy(J.center).add(PQ)),this.expandByPoint(R6.copy(J.center).sub(PQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var z8=new A,TQ=new A,$7=new A,d8=new A,AQ=new A,W7=new A,SQ=new A;class N9{constructor(J=new A,Q=new A(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,z8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=z8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return z8.copy(this.origin).addScaledVector(this.direction,Q),z8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,$){TQ.copy(J).add(Q).multiplyScalar(0.5),$7.copy(Q).sub(J).normalize(),d8.copy(this.origin).sub(TQ);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot($7),Y=d8.dot(this.direction),X=-d8.dot($7),K=d8.lengthSq(),U=Math.abs(1-H*H),G,E,q,F;if(U>0)if(G=H*X-Y,E=H*Y-X,F=W*U,G>=0)if(E>=-F)if(E<=F){let D=1/U;G*=D,E*=D,q=G*(G+H*E+2*Y)+E*(H*G+E+2*X)+K}else E=W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else E=-W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else if(E<=-F)G=Math.max(0,-(-H*W+Y)),E=G>0?-W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else if(E<=F)G=0,E=Math.min(Math.max(-W,-X),W),q=E*(E+2*X)+K;else G=Math.max(0,-(H*W+Y)),E=G>0?W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else E=H>0?-W:W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;if(Z)Z.copy(this.origin).addScaledVector(this.direction,G);if($)$.copy(TQ).addScaledVector($7,E);return q}intersectSphere(J,Q){z8.subVectors(J.center,this.origin);let Z=z8.dot(this.direction),$=z8.dot(z8)-Z*Z,W=J.radius*J.radius;if($>W)return null;let H=Math.sqrt(W-$),Y=Z-H,X=Z+H;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,$,W,H,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(K>=0)Z=(J.min.x-E.x)*K,$=(J.max.x-E.x)*K;else Z=(J.max.x-E.x)*K,$=(J.min.x-E.x)*K;if(U>=0)W=(J.min.y-E.y)*U,H=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,H=(J.min.y-E.y)*U;if(Z>H||W>$)return null;if(W>Z||isNaN(Z))Z=W;if(H<$||isNaN($))$=H;if(G>=0)Y=(J.min.z-E.z)*G,X=(J.max.z-E.z)*G;else Y=(J.max.z-E.z)*G,X=(J.min.z-E.z)*G;if(Z>X||Y>$)return null;if(Y>Z||Z!==Z)Z=Y;if(X<$||$!==$)$=X;if($<0)return null;return this.at(Z>=0?Z:$,Q)}intersectsBox(J){return this.intersectBox(J,z8)!==null}intersectTriangle(J,Q,Z,$,W){AQ.subVectors(Q,J),W7.subVectors(Z,J),SQ.crossVectors(AQ,W7);let H=this.direction.dot(SQ),Y;if(H>0){if($)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;d8.subVectors(this.origin,J);let X=Y*this.direction.dot(W7.crossVectors(d8,W7));if(X<0)return null;let K=Y*this.direction.dot(AQ.cross(d8));if(K<0)return null;if(X+K>H)return null;let U=-Y*d8.dot(SQ);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class AJ{constructor(J,Q,Z,$,W,H,Y,X,K,U,G,E,q,F,D,k){if(AJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,H,Y,X,K,U,G,E,q,F,D,k)}set(J,Q,Z,$,W,H,Y,X,K,U,G,E,q,F,D,k){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=Z,O[12]=$,O[1]=W,O[5]=H,O[9]=Y,O[13]=X,O[2]=K,O[6]=U,O[10]=G,O[14]=E,O[3]=q,O[7]=F,O[11]=D,O[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new AJ().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,Z=J.elements,$=1/T9.setFromMatrixColumn(J,0).length(),W=1/T9.setFromMatrixColumn(J,1).length(),H=1/T9.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*$,Q[1]=Z[1]*$,Q[2]=Z[2]*$,Q[3]=0,Q[4]=Z[4]*W,Q[5]=Z[5]*W,Q[6]=Z[6]*W,Q[7]=0,Q[8]=Z[8]*H,Q[9]=Z[9]*H,Q[10]=Z[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z,H=Math.cos(Z),Y=Math.sin(Z),X=Math.cos($),K=Math.sin($),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=H*U,q=H*G,F=Y*U,D=Y*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=K,Q[1]=q+F*K,Q[5]=E-D*K,Q[9]=-Y*X,Q[2]=D-E*K,Q[6]=F+q*K,Q[10]=H*X}else if(J.order==="YXZ"){let E=X*U,q=X*G,F=K*U,D=K*G;Q[0]=E+D*Y,Q[4]=F*Y-q,Q[8]=H*K,Q[1]=H*G,Q[5]=H*U,Q[9]=-Y,Q[2]=q*Y-F,Q[6]=D+E*Y,Q[10]=H*X}else if(J.order==="ZXY"){let E=X*U,q=X*G,F=K*U,D=K*G;Q[0]=E-D*Y,Q[4]=-H*G,Q[8]=F+q*Y,Q[1]=q+F*Y,Q[5]=H*U,Q[9]=D-E*Y,Q[2]=-H*K,Q[6]=Y,Q[10]=H*X}else if(J.order==="ZYX"){let E=H*U,q=H*G,F=Y*U,D=Y*G;Q[0]=X*U,Q[4]=F*K-q,Q[8]=E*K+D,Q[1]=X*G,Q[5]=D*K+E,Q[9]=q*K-F,Q[2]=-K,Q[6]=Y*X,Q[10]=H*X}else if(J.order==="YZX"){let E=H*X,q=H*K,F=Y*X,D=Y*K;Q[0]=X*U,Q[4]=D-E*G,Q[8]=F*G+q,Q[1]=G,Q[5]=H*U,Q[9]=-Y*U,Q[2]=-K*U,Q[6]=q*G+F,Q[10]=E-D*G}else if(J.order==="XZY"){let E=H*X,q=H*K,F=Y*X,D=Y*K;Q[0]=X*U,Q[4]=-G,Q[8]=K*U,Q[1]=E*G+D,Q[5]=H*U,Q[9]=q*G-F,Q[2]=F*G-q,Q[6]=Y*U,Q[10]=D*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(bX,J,gX)}lookAt(J,Q,Z){let $=this.elements;if(c0.subVectors(J,Q),c0.lengthSq()===0)c0.z=1;if(c0.normalize(),m8.crossVectors(Z,c0),m8.lengthSq()===0){if(Math.abs(Z.z)===1)c0.x+=0.0001;else c0.z+=0.0001;c0.normalize(),m8.crossVectors(Z,c0)}return m8.normalize(),H7.crossVectors(c0,m8),$[0]=m8.x,$[4]=H7.x,$[8]=c0.x,$[1]=m8.y,$[5]=H7.y,$[9]=c0.y,$[2]=m8.z,$[6]=H7.z,$[10]=c0.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,H=Z[0],Y=Z[4],X=Z[8],K=Z[12],U=Z[1],G=Z[5],E=Z[9],q=Z[13],F=Z[2],D=Z[6],k=Z[10],O=Z[14],N=Z[3],B=Z[7],M=Z[11],I=Z[15],P=$[0],_=$[4],w=$[8],f=$[12],V=$[1],z=$[5],j=$[9],g=$[13],c=$[2],u=$[6],o=$[10],d=$[14],t=$[3],p=$[7],KJ=$[11],UJ=$[15];return W[0]=H*P+Y*V+X*c+K*t,W[4]=H*_+Y*z+X*u+K*p,W[8]=H*w+Y*j+X*o+K*KJ,W[12]=H*f+Y*g+X*d+K*UJ,W[1]=U*P+G*V+E*c+q*t,W[5]=U*_+G*z+E*u+q*p,W[9]=U*w+G*j+E*o+q*KJ,W[13]=U*f+G*g+E*d+q*UJ,W[2]=F*P+D*V+k*c+O*t,W[6]=F*_+D*z+k*u+O*p,W[10]=F*w+D*j+k*o+O*KJ,W[14]=F*f+D*g+k*d+O*UJ,W[3]=N*P+B*V+M*c+I*t,W[7]=N*_+B*z+M*u+I*p,W[11]=N*w+B*j+M*o+I*KJ,W[15]=N*f+B*g+M*d+I*UJ,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],$=J[8],W=J[12],H=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],G=J[6],E=J[10],q=J[14],F=J[3],D=J[7],k=J[11],O=J[15];return F*(+W*X*G-$*K*G-W*Y*E+Z*K*E+$*Y*q-Z*X*q)+D*(+Q*X*q-Q*K*E+W*H*E-$*H*q+$*K*U-W*X*U)+k*(+Q*K*G-Q*Y*q-W*H*G+Z*H*q+W*Y*U-Z*K*U)+O*(-$*Y*U-Q*X*G+Q*Y*E+$*H*G-Z*H*E+Z*X*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let $=this.elements;if(J.isVector3)$[12]=J.x,$[13]=J.y,$[14]=J.z;else $[12]=J,$[13]=Q,$[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=J[9],E=J[10],q=J[11],F=J[12],D=J[13],k=J[14],O=J[15],N=G*k*K-D*E*K+D*X*q-Y*k*q-G*X*O+Y*E*O,B=F*E*K-U*k*K-F*X*q+H*k*q+U*X*O-H*E*O,M=U*D*K-F*G*K+F*Y*q-H*D*q-U*Y*O+H*G*O,I=F*G*X-U*D*X-F*Y*E+H*D*E+U*Y*k-H*G*k,P=Q*N+Z*B+$*M+W*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/P;return J[0]=N*_,J[1]=(D*E*W-G*k*W-D*$*q+Z*k*q+G*$*O-Z*E*O)*_,J[2]=(Y*k*W-D*X*W+D*$*K-Z*k*K-Y*$*O+Z*X*O)*_,J[3]=(G*X*W-Y*E*W-G*$*K+Z*E*K+Y*$*q-Z*X*q)*_,J[4]=B*_,J[5]=(U*k*W-F*E*W+F*$*q-Q*k*q-U*$*O+Q*E*O)*_,J[6]=(F*X*W-H*k*W-F*$*K+Q*k*K+H*$*O-Q*X*O)*_,J[7]=(H*E*W-U*X*W+U*$*K-Q*E*K-H*$*q+Q*X*q)*_,J[8]=M*_,J[9]=(F*G*W-U*D*W-F*Z*q+Q*D*q+U*Z*O-Q*G*O)*_,J[10]=(H*D*W-F*Y*W+F*Z*K-Q*D*K-H*Z*O+Q*Y*O)*_,J[11]=(U*Y*W-H*G*W-U*Z*K+Q*G*K+H*Z*q-Q*Y*q)*_,J[12]=I*_,J[13]=(U*D*$-F*G*$+F*Z*E-Q*D*E-U*Z*k+Q*G*k)*_,J[14]=(F*Y*$-H*D*$-F*Z*X+Q*D*X+H*Z*k-Q*Y*k)*_,J[15]=(H*G*$-U*Y*$+U*Z*X-Q*G*X-H*Z*E+Q*Y*E)*_,this}scale(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z;return Q[0]*=Z,Q[4]*=$,Q[8]*=W,Q[1]*=Z,Q[5]*=$,Q[9]*=W,Q[2]*=Z,Q[6]*=$,Q[10]*=W,Q[3]*=Z,Q[7]*=$,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],$=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,$))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=1-Z,H=J.x,Y=J.y,X=J.z,K=W*H,U=W*Y;return this.set(K*H+Z,K*Y-$*X,K*X+$*Y,0,K*Y+$*X,U*Y+Z,U*X-$*H,0,K*X-$*Y,U*X+$*H,W*X*X+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,$,W,H){return this.set(1,Z,W,0,J,1,H,0,Q,$,1,0,0,0,0,1),this}compose(J,Q,Z){let $=this.elements,W=Q._x,H=Q._y,Y=Q._z,X=Q._w,K=W+W,U=H+H,G=Y+Y,E=W*K,q=W*U,F=W*G,D=H*U,k=H*G,O=Y*G,N=X*K,B=X*U,M=X*G,I=Z.x,P=Z.y,_=Z.z;return $[0]=(1-(D+O))*I,$[1]=(q+M)*I,$[2]=(F-B)*I,$[3]=0,$[4]=(q-M)*P,$[5]=(1-(E+O))*P,$[6]=(k+N)*P,$[7]=0,$[8]=(F+B)*_,$[9]=(k-N)*_,$[10]=(1-(E+D))*_,$[11]=0,$[12]=J.x,$[13]=J.y,$[14]=J.z,$[15]=1,this}decompose(J,Q,Z){let $=this.elements,W=T9.set($[0],$[1],$[2]).length(),H=T9.set($[4],$[5],$[6]).length(),Y=T9.set($[8],$[9],$[10]).length();if(this.determinant()<0)W=-W;J.x=$[12],J.y=$[13],J.z=$[14],U8.copy(this);let K=1/W,U=1/H,G=1/Y;return U8.elements[0]*=K,U8.elements[1]*=K,U8.elements[2]*=K,U8.elements[4]*=U,U8.elements[5]*=U,U8.elements[6]*=U,U8.elements[8]*=G,U8.elements[9]*=G,U8.elements[10]*=G,Q.setFromRotationMatrix(U8),Z.x=W,Z.y=H,Z.z=Y,this}makePerspective(J,Q,Z,$,W,H,Y=2000){let X=this.elements,K=2*W/(Q-J),U=2*W/(Z-$),G=(Q+J)/(Q-J),E=(Z+$)/(Z-$),q,F;if(Y===2000)q=-(H+W)/(H-W),F=-2*H*W/(H-W);else if(Y===2001)q=-H/(H-W),F=-H*W/(H-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return X[0]=K,X[4]=0,X[8]=G,X[12]=0,X[1]=0,X[5]=U,X[9]=E,X[13]=0,X[2]=0,X[6]=0,X[10]=q,X[14]=F,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,Z,$,W,H,Y=2000){let X=this.elements,K=1/(Q-J),U=1/(Z-$),G=1/(H-W),E=(Q+J)*K,q=(Z+$)*U,F,D;if(Y===2000)F=(H+W)*G,D=-2*G;else if(Y===2001)F=W*G,D=-1*G;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return X[0]=2*K,X[4]=0,X[8]=0,X[12]=-E,X[1]=0,X[5]=2*U,X[9]=0,X[13]=-q,X[2]=0,X[6]=0,X[10]=D,X[14]=-F,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<16;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var T9=new A,U8=new AJ,bX=new A(0,0,0),gX=new A(1,1,1),m8=new A,H7=new A,c0=new A,u$=new AJ,c$=new T0;class y0{constructor(J=0,Q=0,Z=0,$=y0.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=$}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,$=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let $=J.elements,W=$[0],H=$[4],Y=$[8],X=$[1],K=$[5],U=$[9],G=$[2],E=$[6],q=$[10];switch(Q){case"XYZ":if(this._y=Math.asin(pJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-pJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,q),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(pJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-H,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-pJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-H,K);break;case"YZX":if(this._z=Math.asin(pJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,q);break;case"XZY":if(this._z=Math.asin(-pJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return u$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(u$,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return c$.setFromEuler(this),this.setFromQuaternion(c$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}y0.DEFAULT_ORDER="XYZ";class v6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var pX=0,n$=new A,A9=new T0,B8=new AJ,Y7=new A,k6=new A,lX=new A,dX=new T0,s$=new A(1,0,0),i$=new A(0,1,0),o$=new A(0,0,1),a$={type:"added"},mX={type:"removed"},S9={type:"childadded",child:null},jQ={type:"childremoved",child:null};class Y0 extends v8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:pX++}),this.uuid=N8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Y0.DEFAULT_UP.clone();let J=new A,Q=new y0,Z=new T0,$=new A(1,1,1);function W(){Z.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange(W),Z._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:$},modelViewMatrix:{value:new AJ},normalMatrix:{value:new yJ}}),this.matrix=new AJ,this.matrixWorld=new AJ,this.matrixAutoUpdate=Y0.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Y0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return A9.setFromAxisAngle(J,Q),this.quaternion.multiply(A9),this}rotateOnWorldAxis(J,Q){return A9.setFromAxisAngle(J,Q),this.quaternion.premultiply(A9),this}rotateX(J){return this.rotateOnAxis(s$,J)}rotateY(J){return this.rotateOnAxis(i$,J)}rotateZ(J){return this.rotateOnAxis(o$,J)}translateOnAxis(J,Q){return n$.copy(J).applyQuaternion(this.quaternion),this.position.add(n$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(s$,J)}translateY(J){return this.translateOnAxis(i$,J)}translateZ(J){return this.translateOnAxis(o$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(B8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)Y7.copy(J);else Y7.set(J,Q,Z);let $=this.parent;if(this.updateWorldMatrix(!0,!1),k6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)B8.lookAt(k6,Y7,this.up);else B8.lookAt(Y7,k6,this.up);if(this.quaternion.setFromRotationMatrix(B8),$)B8.extractRotation($.matrixWorld),A9.setFromRotationMatrix(B8),this.quaternion.premultiply(A9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(a$),S9.child=J,this.dispatchEvent(S9),S9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(mX),jQ.child=J,this.dispatchEvent(jQ),jQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),B8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),B8.multiply(J.parent.matrixWorld);return J.applyMatrix4(B8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(a$),S9.child=J,this.dispatchEvent(S9),S9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,$=this.children.length;Z<$;Z++){let H=this.children[Z].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let $=this.children;for(let W=0,H=$.length;W<H;W++)$[W].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(k6,J,lX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(k6,dX,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let $=this.children;for(let W=0,H=$.length;W<H;W++)$[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let $={};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.castShadow===!0)$.castShadow=!0;if(this.receiveShadow===!0)$.receiveShadow=!0;if(this.visible===!1)$.visible=!1;if(this.frustumCulled===!1)$.frustumCulled=!1;if(this.renderOrder!==0)$.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)$.userData=this.userData;if($.layers=this.layers.mask,$.matrix=this.matrix.toArray(),$.up=this.up.toArray(),this.matrixAutoUpdate===!1)$.matrixAutoUpdate=!1;if(this.isInstancedMesh){if($.type="InstancedMesh",$.count=this.count,$.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)$.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if($.type="BatchedMesh",$.perObjectFrustumCulled=this.perObjectFrustumCulled,$.sortObjects=this.sortObjects,$.drawRanges=this._drawRanges,$.reservedRanges=this._reservedRanges,$.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),$.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),$.availableInstanceIds=this._availableInstanceIds.slice(),$.availableGeometryIds=this._availableGeometryIds.slice(),$.nextIndexStart=this._nextIndexStart,$.nextVertexStart=this._nextVertexStart,$.geometryCount=this._geometryCount,$.maxInstanceCount=this._maxInstanceCount,$.maxVertexCount=this._maxVertexCount,$.maxIndexCount=this._maxIndexCount,$.geometryInitialized=this._geometryInitialized,$.matricesTexture=this._matricesTexture.toJSON(J),$.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)$.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)$.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)$.boundingBox=this.boundingBox.toJSON()}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)$.background=this.background.toJSON();else if(this.background.isTexture)$.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)$.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){$.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];W(J.shapes,G)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if($.bindMode=this.bindMode,$.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),$.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(J.materials,this.material[X]));$.material=Y}else $.material=W(J.materials,this.material);if(this.children.length>0){$.children=[];for(let Y=0;Y<this.children.length;Y++)$.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){$.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];$.animations.push(W(J.animations,X))}}if(Q){let Y=H(J.geometries),X=H(J.materials),K=H(J.textures),U=H(J.images),G=H(J.shapes),E=H(J.skeletons),q=H(J.animations),F=H(J.nodes);if(Y.length>0)Z.geometries=Y;if(X.length>0)Z.materials=X;if(K.length>0)Z.textures=K;if(U.length>0)Z.images=U;if(G.length>0)Z.shapes=G;if(E.length>0)Z.skeletons=E;if(q.length>0)Z.animations=q;if(F.length>0)Z.nodes=F}return Z.object=$,Z;function H(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let $=J.children[Z];this.add($.clone())}return this}}Y0.DEFAULT_UP=new A(0,1,0);Y0.DEFAULT_MATRIX_AUTO_UPDATE=!0;Y0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var G8=new A,_8=new A,vQ=new A,C8=new A,j9=new A,v9=new A,r$=new A,yQ=new A,fQ=new A,hQ=new A,xQ=new iJ,bQ=new iJ,gQ=new iJ;class Z8{constructor(J=new A,Q=new A,Z=new A){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,$){$.subVectors(Z,Q),G8.subVectors(J,Q),$.cross(G8);let W=$.lengthSq();if(W>0)return $.multiplyScalar(1/Math.sqrt(W));return $.set(0,0,0)}static getBarycoord(J,Q,Z,$,W){G8.subVectors($,Q),_8.subVectors(Z,Q),vQ.subVectors(J,Q);let H=G8.dot(G8),Y=G8.dot(_8),X=G8.dot(vQ),K=_8.dot(_8),U=_8.dot(vQ),G=H*K-Y*Y;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(K*X-Y*U)*E,F=(H*U-Y*X)*E;return W.set(1-q-F,F,q)}static containsPoint(J,Q,Z,$){if(this.getBarycoord(J,Q,Z,$,C8)===null)return!1;return C8.x>=0&&C8.y>=0&&C8.x+C8.y<=1}static getInterpolation(J,Q,Z,$,W,H,Y,X){if(this.getBarycoord(J,Q,Z,$,C8)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,C8.x),X.addScaledVector(H,C8.y),X.addScaledVector(Y,C8.z),X}static getInterpolatedAttribute(J,Q,Z,$,W,H){return xQ.setScalar(0),bQ.setScalar(0),gQ.setScalar(0),xQ.fromBufferAttribute(J,Q),bQ.fromBufferAttribute(J,Z),gQ.fromBufferAttribute(J,$),H.setScalar(0),H.addScaledVector(xQ,W.x),H.addScaledVector(bQ,W.y),H.addScaledVector(gQ,W.z),H}static isFrontFacing(J,Q,Z,$){return G8.subVectors(Z,Q),_8.subVectors(J,Q),G8.cross(_8).dot($)<0?!0:!1}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,$){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[$]),this}setFromAttributeAndIndices(J,Q,Z,$){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,$),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return G8.subVectors(this.c,this.b),_8.subVectors(this.a,this.b),G8.cross(_8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return Z8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return Z8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,$,W){return Z8.getInterpolation(J,this.a,this.b,this.c,Q,Z,$,W)}containsPoint(J){return Z8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return Z8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,$=this.b,W=this.c,H,Y;j9.subVectors($,Z),v9.subVectors(W,Z),yQ.subVectors(J,Z);let X=j9.dot(yQ),K=v9.dot(yQ);if(X<=0&&K<=0)return Q.copy(Z);fQ.subVectors(J,$);let U=j9.dot(fQ),G=v9.dot(fQ);if(U>=0&&G<=U)return Q.copy($);let E=X*G-U*K;if(E<=0&&X>=0&&U<=0)return H=X/(X-U),Q.copy(Z).addScaledVector(j9,H);hQ.subVectors(J,W);let q=j9.dot(hQ),F=v9.dot(hQ);if(F>=0&&q<=F)return Q.copy(W);let D=q*K-X*F;if(D<=0&&K>=0&&F<=0)return Y=K/(K-F),Q.copy(Z).addScaledVector(v9,Y);let k=U*F-q*G;if(k<=0&&G-U>=0&&q-F>=0)return r$.subVectors(W,$),Y=(G-U)/(G-U+(q-F)),Q.copy($).addScaledVector(r$,Y);let O=1/(k+D+E);return H=D*O,Y=E*O,Q.copy(Z).addScaledVector(j9,H).addScaledVector(v9,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var CH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},u8={h:0,s:0,l:0},X7={h:0,s:0,l:0};function pQ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class VJ{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let $=J;if($&&$.isColor)this.copy($);else if(typeof $==="number")this.setHex($);else if(typeof $==="string")this.setStyle($)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,uJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,$=uJ.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,uJ.colorSpaceToWorking(this,$),this}setHSL(J,Q,Z,$=uJ.workingColorSpace){if(J=pZ(J,1),Q=pJ(Q,0,1),Z=pJ(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let W=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,H=2*Z-W;this.r=pQ(H,W,J+0.3333333333333333),this.g=pQ(H,W,J),this.b=pQ(H,W,J-0.3333333333333333)}return uJ.colorSpaceToWorking(this,$),this}setStyle(J,Q="srgb"){function Z(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let $;if($=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=$[1],Y=$[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if($=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=$[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=CH[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=I8(J.r),this.g=I8(J.g),this.b=I8(J.b),this}copyLinearToSRGB(J){return this.r=g9(J.r),this.g=g9(J.g),this.b=g9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return uJ.workingToColorSpace(P0.copy(this),J),Math.round(pJ(P0.r*255,0,255))*65536+Math.round(pJ(P0.g*255,0,255))*256+Math.round(pJ(P0.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=uJ.workingColorSpace){uJ.workingToColorSpace(P0.copy(this),Q);let{r:Z,g:$,b:W}=P0,H=Math.max(Z,$,W),Y=Math.min(Z,$,W),X,K,U=(Y+H)/2;if(Y===H)X=0,K=0;else{let G=H-Y;switch(K=U<=0.5?G/(H+Y):G/(2-H-Y),H){case Z:X=($-W)/G+($<W?6:0);break;case $:X=(W-Z)/G+2;break;case W:X=(Z-$)/G+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,Q=uJ.workingColorSpace){return uJ.workingToColorSpace(P0.copy(this),Q),J.r=P0.r,J.g=P0.g,J.b=P0.b,J}getStyle(J="srgb"){uJ.workingToColorSpace(P0.copy(this),J);let{r:Q,g:Z,b:$}=P0;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${$.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round($*255)})`}offsetHSL(J,Q,Z){return this.getHSL(u8),this.setHSL(u8.h+J,u8.s+Q,u8.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(u8),J.getHSL(X7);let Z=_6(u8.h,X7.h,Q),$=_6(u8.s,X7.s,Q),W=_6(u8.l,X7.l,Q);return this.setHSL(Z,$,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,$=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*Z+W[6]*$,this.g=W[1]*Q+W[4]*Z+W[7]*$,this.b=W[2]*Q+W[5]*Z+W[8]*$,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var P0=new VJ;VJ.NAMES=CH;var uX=0;class x0 extends v8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:uX++}),this.uuid=N8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new VJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let $=this[Q];if($===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if($&&$.isColor)$.set(Z);else if($&&$.isVector3&&(Z&&Z.isVector3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function $(W){let H=[];for(let Y in W){let X=W[Y];delete X.metadata,H.push(X)}return H}if(Q){let W=$(J.textures),H=$(J.images);if(W.length>0)Z.textures=W;if(H.length>0)Z.images=H}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let $=Q.length;Z=Array($);for(let W=0;W!==$;++W)Z[W]=Q[W].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class D8 extends x0{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new VJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new y0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var R0=new A,K7=new wJ,cX=0;class O0{constructor(J,Q,Z=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cX++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let $=0,W=this.itemSize;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)K7.fromBufferAttribute(this,Q),K7.applyMatrix3(J),this.setXY(Q,K7.x,K7.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)R0.fromBufferAttribute(this,Q),R0.applyMatrix3(J),this.setXYZ(Q,R0.x,R0.y,R0.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)R0.fromBufferAttribute(this,Q),R0.applyMatrix4(J),this.setXYZ(Q,R0.x,R0.y,R0.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)R0.fromBufferAttribute(this,Q),R0.applyNormalMatrix(J),this.setXYZ(Q,R0.x,R0.y,R0.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)R0.fromBufferAttribute(this,Q),R0.transformDirection(J),this.setXYZ(Q,R0.x,R0.y,R0.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=q8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=eJ(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=q8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=eJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=q8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=eJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=q8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=eJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=q8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=eJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=eJ(Q,this.array),Z=eJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J*=this.itemSize,this.normalized)Q=eJ(Q,this.array),Z=eJ(Z,this.array),$=eJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J*=this.itemSize,this.normalized)Q=eJ(Q,this.array),Z=eJ(Z,this.array),$=eJ($,this.array),W=eJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class n7 extends O0{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class s7 extends O0{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class B0 extends O0{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var nX=0,Q8=new AJ,lQ=new Y0,y9=new A,n0=new l0,D6=new l0,z0=new A;class C0 extends v8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nX++}),this.uuid=N8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((lZ(J))?s7:n7)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let W=new yJ().getNormalMatrix(J);Z.applyNormalMatrix(W),Z.needsUpdate=!0}let $=this.attributes.tangent;if($!==void 0)$.transformDirection(J),$.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return Q8.makeRotationFromQuaternion(J),this.applyMatrix4(Q8),this}rotateX(J){return Q8.makeRotationX(J),this.applyMatrix4(Q8),this}rotateY(J){return Q8.makeRotationY(J),this.applyMatrix4(Q8),this}rotateZ(J){return Q8.makeRotationZ(J),this.applyMatrix4(Q8),this}translate(J,Q,Z){return Q8.makeTranslation(J,Q,Z),this.applyMatrix4(Q8),this}scale(J,Q,Z){return Q8.makeScale(J,Q,Z),this.applyMatrix4(Q8),this}lookAt(J){return lQ.lookAt(J),lQ.updateMatrix(),this.applyMatrix4(lQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(y9).negate(),this.translate(y9.x,y9.y,y9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let $=0,W=J.length;$<W;$++){let H=J[$];Z.push(H.x,H.y,H.z||0)}this.setAttribute("position",new B0(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let $=0;$<Z;$++){let W=J[$];Q.setXYZ($,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new l0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(n0.setFromBufferAttribute(W),this.morphTargetsRelative)z0.addVectors(this.boundingBox.min,n0.min),this.boundingBox.expandByPoint(z0),z0.addVectors(this.boundingBox.max,n0.max),this.boundingBox.expandByPoint(z0);else this.boundingBox.expandByPoint(n0.min),this.boundingBox.expandByPoint(n0.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new o0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(J){let Z=this.boundingSphere.center;if(n0.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W];if(D6.setFromBufferAttribute(Y),this.morphTargetsRelative)z0.addVectors(n0.min,D6.min),n0.expandByPoint(z0),z0.addVectors(n0.max,D6.max),n0.expandByPoint(z0);else n0.expandByPoint(D6.min),n0.expandByPoint(D6.max)}n0.getCenter(Z);let $=0;for(let W=0,H=J.count;W<H;W++)z0.fromBufferAttribute(J,W),$=Math.max($,Z.distanceToSquared(z0));if(Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(z0.fromBufferAttribute(Y,K),X)y9.fromBufferAttribute(J,K),z0.add(y9);$=Math.max($,Z.distanceToSquared(z0))}}if(this.boundingSphere.radius=Math.sqrt($),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:$,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new O0(new Float32Array(4*Z.count),4));let H=this.getAttribute("tangent"),Y=[],X=[];for(let w=0;w<Z.count;w++)Y[w]=new A,X[w]=new A;let K=new A,U=new A,G=new A,E=new wJ,q=new wJ,F=new wJ,D=new A,k=new A;function O(w,f,V){K.fromBufferAttribute(Z,w),U.fromBufferAttribute(Z,f),G.fromBufferAttribute(Z,V),E.fromBufferAttribute(W,w),q.fromBufferAttribute(W,f),F.fromBufferAttribute(W,V),U.sub(K),G.sub(K),q.sub(E),F.sub(E);let z=1/(q.x*F.y-F.x*q.y);if(!isFinite(z))return;D.copy(U).multiplyScalar(F.y).addScaledVector(G,-q.y).multiplyScalar(z),k.copy(G).multiplyScalar(q.x).addScaledVector(U,-F.x).multiplyScalar(z),Y[w].add(D),Y[f].add(D),Y[V].add(D),X[w].add(k),X[f].add(k),X[V].add(k)}let N=this.groups;if(N.length===0)N=[{start:0,count:J.count}];for(let w=0,f=N.length;w<f;++w){let V=N[w],z=V.start,j=V.count;for(let g=z,c=z+j;g<c;g+=3)O(J.getX(g+0),J.getX(g+1),J.getX(g+2))}let B=new A,M=new A,I=new A,P=new A;function _(w){I.fromBufferAttribute($,w),P.copy(I);let f=Y[w];B.copy(f),B.sub(I.multiplyScalar(I.dot(f))).normalize(),M.crossVectors(P,f);let z=M.dot(X[w])<0?-1:1;H.setXYZW(w,B.x,B.y,B.z,z)}for(let w=0,f=N.length;w<f;++w){let V=N[w],z=V.start,j=V.count;for(let g=z,c=z+j;g<c;g+=3)_(J.getX(g+0)),_(J.getX(g+1)),_(J.getX(g+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new O0(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let E=0,q=Z.count;E<q;E++)Z.setXYZ(E,0,0,0);let $=new A,W=new A,H=new A,Y=new A,X=new A,K=new A,U=new A,G=new A;if(J)for(let E=0,q=J.count;E<q;E+=3){let F=J.getX(E+0),D=J.getX(E+1),k=J.getX(E+2);$.fromBufferAttribute(Q,F),W.fromBufferAttribute(Q,D),H.fromBufferAttribute(Q,k),U.subVectors(H,W),G.subVectors($,W),U.cross(G),Y.fromBufferAttribute(Z,F),X.fromBufferAttribute(Z,D),K.fromBufferAttribute(Z,k),Y.add(U),X.add(U),K.add(U),Z.setXYZ(F,Y.x,Y.y,Y.z),Z.setXYZ(D,X.x,X.y,X.z),Z.setXYZ(k,K.x,K.y,K.z)}else for(let E=0,q=Q.count;E<q;E+=3)$.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),U.subVectors(H,W),G.subVectors($,W),U.cross(G),Z.setXYZ(E+0,U.x,U.y,U.z),Z.setXYZ(E+1,U.x,U.y,U.z),Z.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)z0.fromBufferAttribute(J,Q),z0.normalize(),J.setXYZ(Q,z0.x,z0.y,z0.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:G}=Y,E=new K.constructor(X.length*U),q=0,F=0;for(let D=0,k=X.length;D<k;D++){if(Y.isInterleavedBufferAttribute)q=X[D]*Y.data.stride+Y.offset;else q=X[D]*U;for(let O=0;O<U;O++)E[F++]=K[q++]}return new O0(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new C0,Z=this.index.array,$=this.attributes;for(let Y in $){let X=$[Y],K=J(X,Z);Q.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,G=K.length;U<G;U++){let E=K[U],q=J(E,Z);X.push(q)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,X=H.length;Y<X;Y++){let K=H[Y];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let X in Z){let K=Z[X];J.data.attributes[X]=K.toJSON(J.data)}let $={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,E=K.length;G<E;G++){let q=K[G];U.push(q.toJSON(J.data))}if(U.length>0)$[X]=U,W=!0}if(W)J.data.morphAttributes=$,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let $=J.attributes;for(let K in $){let U=$[K];this.setAttribute(K,U.clone(Q))}let W=J.morphAttributes;for(let K in W){let U=[],G=W[K];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(Q));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let K=0,U=H.length;K<U;K++){let G=H[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var t$=new AJ,Y9=new N9,U7=new o0,e$=new A,G7=new A,E7=new A,q7=new A,dQ=new A,N7=new A,JW=new A,O7=new A;class F0 extends Y0{constructor(J=new C0,Q=new D8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let Y=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let Z=this.geometry,$=Z.attributes.position,W=Z.morphAttributes.position,H=Z.morphTargetsRelative;Q.fromBufferAttribute($,J);let Y=this.morphTargetInfluences;if(W&&Y){N7.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],G=W[X];if(U===0)continue;if(dQ.fromBufferAttribute(G,J),H)N7.addScaledVector(dQ,U);else N7.addScaledVector(dQ.sub(Q),U)}Q.add(N7)}return Q}raycast(J,Q){let Z=this.geometry,$=this.material,W=this.matrixWorld;if($===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(U7.copy(Z.boundingSphere),U7.applyMatrix4(W),Y9.copy(J.ray).recast(J.near),U7.containsPoint(Y9.origin)===!1){if(Y9.intersectSphere(U7,e$)===null)return;if(Y9.origin.distanceToSquared(e$)>(J.far-J.near)**2)return}if(t$.copy(W).invert(),Y9.copy(J.ray).applyMatrix4(t$),Z.boundingBox!==null){if(Y9.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,Y9)}_computeIntersections(J,Q,Z){let $,W=this.geometry,H=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(Y!==null)if(Array.isArray(H))for(let F=0,D=E.length;F<D;F++){let k=E[F],O=H[k.materialIndex],N=Math.max(k.start,q.start),B=Math.min(Y.count,Math.min(k.start+k.count,q.start+q.count));for(let M=N,I=B;M<I;M+=3){let P=Y.getX(M),_=Y.getX(M+1),w=Y.getX(M+2);if($=F7(this,O,J,Z,K,U,G,P,_,w),$)$.faceIndex=Math.floor(M/3),$.face.materialIndex=k.materialIndex,Q.push($)}}else{let F=Math.max(0,q.start),D=Math.min(Y.count,q.start+q.count);for(let k=F,O=D;k<O;k+=3){let N=Y.getX(k),B=Y.getX(k+1),M=Y.getX(k+2);if($=F7(this,H,J,Z,K,U,G,N,B,M),$)$.faceIndex=Math.floor(k/3),Q.push($)}}else if(X!==void 0)if(Array.isArray(H))for(let F=0,D=E.length;F<D;F++){let k=E[F],O=H[k.materialIndex],N=Math.max(k.start,q.start),B=Math.min(X.count,Math.min(k.start+k.count,q.start+q.count));for(let M=N,I=B;M<I;M+=3){let P=M,_=M+1,w=M+2;if($=F7(this,O,J,Z,K,U,G,P,_,w),$)$.faceIndex=Math.floor(M/3),$.face.materialIndex=k.materialIndex,Q.push($)}}else{let F=Math.max(0,q.start),D=Math.min(X.count,q.start+q.count);for(let k=F,O=D;k<O;k+=3){let N=k,B=k+1,M=k+2;if($=F7(this,H,J,Z,K,U,G,N,B,M),$)$.faceIndex=Math.floor(k/3),Q.push($)}}}}function sX(J,Q,Z,$,W,H,Y,X){let K;if(Q.side===1)K=$.intersectTriangle(Y,H,W,!0,X);else K=$.intersectTriangle(W,H,Y,Q.side===0,X);if(K===null)return null;O7.copy(X),O7.applyMatrix4(J.matrixWorld);let U=Z.ray.origin.distanceTo(O7);if(U<Z.near||U>Z.far)return null;return{distance:U,point:O7.clone(),object:J}}function F7(J,Q,Z,$,W,H,Y,X,K,U){J.getVertexPosition(X,G7),J.getVertexPosition(K,E7),J.getVertexPosition(U,q7);let G=sX(J,Q,Z,$,G7,E7,q7,JW);if(G){let E=new A;if(Z8.getBarycoord(JW,G7,E7,q7,E),W)G.uv=Z8.getInterpolatedAttribute(W,X,K,U,E,new wJ);if(H)G.uv1=Z8.getInterpolatedAttribute(H,X,K,U,E,new wJ);if(Y){if(G.normal=Z8.getInterpolatedAttribute(Y,X,K,U,E,new A),G.normal.dot($.direction)>0)G.normal.multiplyScalar(-1)}let q={a:X,b:K,c:U,normal:new A,materialIndex:0};Z8.getNormal(G7,E7,q7,q.normal),G.face=q,G.barycoord=E}return G}class a9 extends C0{constructor(J=1,Q=1,Z=1,$=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:$,heightSegments:W,depthSegments:H};let Y=this;$=Math.floor($),W=Math.floor(W),H=Math.floor(H);let X=[],K=[],U=[],G=[],E=0,q=0;F("z","y","x",-1,-1,Z,Q,J,H,W,0),F("z","y","x",1,-1,Z,Q,-J,H,W,1),F("x","z","y",1,1,J,Z,Q,$,H,2),F("x","z","y",1,-1,J,Z,-Q,$,H,3),F("x","y","z",1,-1,J,Q,Z,$,W,4),F("x","y","z",-1,-1,J,Q,-Z,$,W,5),this.setIndex(X),this.setAttribute("position",new B0(K,3)),this.setAttribute("normal",new B0(U,3)),this.setAttribute("uv",new B0(G,2));function F(D,k,O,N,B,M,I,P,_,w,f){let V=M/_,z=I/w,j=M/2,g=I/2,c=P/2,u=_+1,o=w+1,d=0,t=0,p=new A;for(let KJ=0;KJ<o;KJ++){let UJ=KJ*z-g;for(let jJ=0;jJ<u;jJ++){let dJ=jJ*V-j;p[D]=dJ*N,p[k]=UJ*B,p[O]=c,K.push(p.x,p.y,p.z),p[D]=0,p[k]=0,p[O]=P>0?1:-1,U.push(p.x,p.y,p.z),G.push(jJ/_),G.push(1-KJ/w),d+=1}}for(let KJ=0;KJ<w;KJ++)for(let UJ=0;UJ<_;UJ++){let jJ=E+UJ+u*KJ,dJ=E+UJ+u*(KJ+1),n=E+(UJ+1)+u*(KJ+1),ZJ=E+(UJ+1)+u*KJ;X.push(jJ,dJ,ZJ),X.push(dJ,n,ZJ),t+=6}Y.addGroup(q,t,f),q+=t,E+=d}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function O9(J){let Q={};for(let Z in J){Q[Z]={};for(let $ in J[Z]){let W=J[Z][$];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][$]=null;else Q[Z][$]=W.clone();else if(Array.isArray(W))Q[Z][$]=W.slice();else Q[Z][$]=W}}return Q}function A0(J){let Q={};for(let Z=0;Z<J.length;Z++){let $=O9(J[Z]);for(let W in $)Q[W]=$[W]}return Q}function iX(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function cZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return uJ.workingColorSpace}var wH={clone:O9,merge:A0},oX=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aX=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class a0 extends x0{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oX,this.fragmentShader=aX,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=O9(J.uniforms),this.uniformsGroups=iX(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let $ in this.uniforms){let H=this.uniforms[$].value;if(H&&H.isTexture)Q.uniforms[$]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[$]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[$]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[$]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[$]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[$]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[$]={type:"m4",value:H.toArray()};else Q.uniforms[$]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let $ in this.extensions)if(this.extensions[$]===!0)Z[$]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}}class r9 extends Y0{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new AJ,this.projectionMatrix=new AJ,this.projectionMatrixInverse=new AJ,this.coordinateSystem=2000}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var c8=new A,QW=new wJ,ZW=new wJ;class M0 extends r9{constructor(J=50,Q=1,Z=0.1,$=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=$,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=K9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(B6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return K9*2*Math.atan(Math.tan(B6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){c8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(c8.x,c8.y).multiplyScalar(-J/c8.z),c8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(c8.x,c8.y).multiplyScalar(-J/c8.z)}getViewSize(J,Q){return this.getViewBounds(J,QW,ZW),Q.subVectors(ZW,QW)}setViewOffset(J,Q,Z,$,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(B6*0.5*this.fov)/this.zoom,Z=2*Q,$=this.aspect*Z,W=-0.5*$,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=H;W+=H.offsetX*$/X,Q-=H.offsetY*Z/K,$*=H.width/X,Z*=H.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+$,Q,Q-Z,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var f9=-90,h9=1;class nZ extends Y0{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let $=new M0(f9,h9,J,Q);$.layers=this.layers,this.add($);let W=new M0(f9,h9,J,Q);W.layers=this.layers,this.add(W);let H=new M0(f9,h9,J,Q);H.layers=this.layers,this.add(H);let Y=new M0(f9,h9,J,Q);Y.layers=this.layers,this.add(Y);let X=new M0(f9,h9,J,Q);X.layers=this.layers,this.add(X);let K=new M0(f9,h9,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,$,W,H,Y,X]=Q;for(let K of Q)this.remove(K);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),$.up.set(0,1,0),$.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),$.up.set(0,-1,0),$.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:$}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,Y,X,K,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let D=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,$),J.render(Q,W),J.setRenderTarget(Z,1,$),J.render(Q,H),J.setRenderTarget(Z,2,$),J.render(Q,Y),J.setRenderTarget(Z,3,$),J.render(Q,X),J.setRenderTarget(Z,4,$),J.render(Q,K),Z.texture.generateMipmaps=D,J.setRenderTarget(Z,5,$),J.render(Q,U),J.setRenderTarget(G,E,q),J.xr.enabled=F,Z.texture.needsPMREMUpdate=!0}}class i7 extends k0{constructor(J=[],Q=301,Z,$,W,H,Y,X,K,U){super(J,Q,Z,$,W,H,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class sZ extends f8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},$=[Z,Z,Z,Z,Z,Z];this.texture=new i7($),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},$=new a9(5,5,5),W=new a0({name:"CubemapFromEquirect",uniforms:O9(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new F0($,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new nZ(1,10,this).update(J,H),Q.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,Z=!0,$=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,Z,$);J.setRenderTarget(W)}}class s0 extends Y0{constructor(){super();this.isGroup=!0,this.type="Group"}}var rX={type:"move"};class y6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new s0,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new s0,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new s0,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let $=null,W=null,H=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){H=!0;for(let D of J.hand.values()){let k=Q.getJointPose(D,Z),O=this._getHandJoint(K,D);if(k!==null)O.matrix.fromArray(k.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=k.radius;O.visible=k!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,F=0.005;if(K.inputState.pinching&&E>q+F)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&E<=q-F)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,Z),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if($=Q.getPose(J.targetRaySpace,Z),$===null&&W!==null)$=W;if($!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(rX)}}}if(Y!==null)Y.visible=$!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new s0;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}class f6{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new VJ(J),this.near=Q,this.far=Z}clone(){return new f6(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class t9 extends Y0{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new y0,this.environmentIntensity=1,this.environmentRotation=new y0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class h6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=N8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let $=0,W=this.stride;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=N8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=N8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var v0=new A;class e9{constructor(J,Q,Z,$=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=$}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)v0.fromBufferAttribute(this,Q),v0.applyMatrix4(J),this.setXYZ(Q,v0.x,v0.y,v0.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)v0.fromBufferAttribute(this,Q),v0.applyNormalMatrix(J),this.setXYZ(Q,v0.x,v0.y,v0.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)v0.fromBufferAttribute(this,Q),v0.transformDirection(J),this.setXYZ(Q,v0.x,v0.y,v0.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=q8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=eJ(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=eJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=eJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=eJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=eJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=q8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=q8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=q8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=q8(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=eJ(Q,this.array),Z=eJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=eJ(Q,this.array),Z=eJ(Z,this.array),$=eJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=eJ(Q,this.array),Z=eJ(Z,this.array),$=eJ($,this.array),W=eJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return new O0(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new e9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var $W=new A,WW=new iJ,HW=new iJ,tX=new A,YW=new AJ,R7=new A,mQ=new o0,XW=new AJ,uQ=new N9;class o7 extends F0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new AJ,this.bindMatrixInverse=new AJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new l0;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,R7),this.boundingBox.expandByPoint(R7)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new o0;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,R7),this.boundingSphere.expandByPoint(R7)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let Z=this.material,$=this.matrixWorld;if(Z===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(mQ.copy(this.boundingSphere),mQ.applyMatrix4($),J.ray.intersectsSphere(mQ)===!1)return;if(XW.copy($).invert(),uQ.copy(J.ray).applyMatrix4(XW),this.boundingBox!==null){if(uQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,uQ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new iJ,Q=this.geometry.attributes.skinWeight;for(let Z=0,$=Q.count;Z<$;Z++){J.fromBufferAttribute(Q,Z);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW(Z,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let Z=this.skeleton,$=this.geometry;WW.fromBufferAttribute($.attributes.skinIndex,J),HW.fromBufferAttribute($.attributes.skinWeight,J),$W.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let H=HW.getComponent(W);if(H!==0){let Y=WW.getComponent(W);YW.multiplyMatrices(Z.bones[Y].matrixWorld,Z.boneInverses[Y]),Q.addScaledVector(tX.copy($W).applyMatrix4(YW),H)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class x6 extends Y0{constructor(){super();this.isBone=!0,this.type="Bone"}}class J6 extends k0{constructor(J=null,Q=1,Z=1,$,W,H,Y,X,K=1003,U=1003,G,E){super(null,H,Y,X,K,U,$,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var KW=new AJ,eX=new AJ;class b6{constructor(J=[],Q=[]){this.uuid=N8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Z=0,$=this.bones.length;Z<$;Z++)this.boneInverses.push(new AJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let Z=new AJ;if(this.bones[J])Z.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Z)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z)Z.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z){if(Z.parent&&Z.parent.isBone)Z.matrix.copy(Z.parent.matrixWorld).invert(),Z.matrix.multiply(Z.matrixWorld);else Z.matrix.copy(Z.matrixWorld);Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)}}}update(){let J=this.bones,Q=this.boneInverses,Z=this.boneMatrices,$=this.boneTexture;for(let W=0,H=J.length;W<H;W++){let Y=J[W]?J[W].matrixWorld:eX;KW.multiplyMatrices(Y,Q[W]),KW.toArray(Z,W*16)}if($!==null)$.needsUpdate=!0}clone(){return new b6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let Z=new J6(Q,J,J,1023,1015);return Z.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=Z,this}getBoneByName(J){for(let Q=0,Z=this.bones.length;Q<Z;Q++){let $=this.bones[Q];if($.name===J)return $}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let Z=0,$=J.bones.length;Z<$;Z++){let W=J.bones[Z],H=Q[W];if(H===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),H=new x6;this.bones.push(H),this.boneInverses.push(new AJ().fromArray(J.boneInverses[Z]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,Z=this.boneInverses;for(let $=0,W=Q.length;$<W;$++){let H=Q[$];J.bones.push(H.uuid);let Y=Z[$];J.boneInverses.push(Y.toArray())}return J}}class G9 extends O0{constructor(J,Q,Z,$=1){super(J,Q,Z);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var x9=new AJ,UW=new AJ,k7=[],GW=new l0,JK=new AJ,M6=new F0,L6=new o0;class a7 extends F0{constructor(J,Q,Z){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new G9(new Float32Array(Z*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Z,this.boundingBox=null,this.boundingSphere=null;for(let $=0;$<Z;$++)this.setMatrixAt($,JK)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new l0;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,x9),GW.copy(J.boundingBox).applyMatrix4(x9),this.boundingBox.union(GW)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new o0;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,x9),L6.copy(J.boundingSphere).applyMatrix4(x9),this.boundingSphere.union(L6)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=this.morphTexture.source.data.data,W=Z.length+1,H=J*W+1;for(let Y=0;Y<Z.length;Y++)Z[Y]=$[H+Y]}raycast(J,Q){let Z=this.matrixWorld,$=this.count;if(M6.geometry=this.geometry,M6.material=this.material,M6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(L6.copy(this.boundingSphere),L6.applyMatrix4(Z),J.ray.intersectsSphere(L6)===!1)return;for(let W=0;W<$;W++){this.getMatrixAt(W,x9),UW.multiplyMatrices(Z,x9),M6.matrixWorld=UW,M6.raycast(J,k7);for(let H=0,Y=k7.length;H<Y;H++){let X=k7[H];X.instanceId=W,X.object=this,Q.push(X)}k7.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new G9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=Z.length+1;if(this.morphTexture===null)this.morphTexture=new J6(new Float32Array($*this.count),$,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let K=0;K<Z.length;K++)H+=Z[K];let Y=this.geometry.morphTargetsRelative?1:1-H,X=$*J;W[X]=Y,W.set(Z,X+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var cQ=new A,QK=new A,ZK=new yJ;class E8{constructor(J=new A(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,$){return this.normal.set(J,Q,Z),this.constant=$,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let $=cQ.subVectors(Z,Q).cross(QK.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint($,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let Z=J.delta(cQ),$=this.normal.dot(Z);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||ZK.getNormalMatrix(J),$=this.coplanarPoint(cQ).applyMatrix4(J),W=this.normal.applyMatrix3(Z).normalize();return this.constant=-$.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var X9=new o0,$K=new wJ(0.5,0.5),D7=new A;class g6{constructor(J=new E8,Q=new E8,Z=new E8,$=new E8,W=new E8,H=new E8){this.planes=[J,Q,Z,$,W,H]}set(J,Q,Z,$,W,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy(Z),Y[3].copy($),Y[4].copy(W),Y[5].copy(H),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000){let Z=this.planes,$=J.elements,W=$[0],H=$[1],Y=$[2],X=$[3],K=$[4],U=$[5],G=$[6],E=$[7],q=$[8],F=$[9],D=$[10],k=$[11],O=$[12],N=$[13],B=$[14],M=$[15];if(Z[0].setComponents(X-W,E-K,k-q,M-O).normalize(),Z[1].setComponents(X+W,E+K,k+q,M+O).normalize(),Z[2].setComponents(X+H,E+U,k+F,M+N).normalize(),Z[3].setComponents(X-H,E-U,k-F,M-N).normalize(),Z[4].setComponents(X-Y,E-G,k-D,M-B).normalize(),Q===2000)Z[5].setComponents(X+Y,E+G,k+D,M+B).normalize();else if(Q===2001)Z[5].setComponents(Y,G,D,B).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();X9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();X9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(X9)}intersectsSprite(J){X9.center.set(0,0,0);let Q=$K.distanceTo(J.center);return X9.radius=0.7071067811865476+Q,X9.applyMatrix4(J.matrixWorld),this.intersectsSphere(X9)}intersectsSphere(J){let Q=this.planes,Z=J.center,$=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint(Z)<$)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let $=Q[Z];if(D7.x=$.normal.x>0?J.max.x:J.min.x,D7.y=$.normal.y>0?J.max.y:J.min.y,D7.z=$.normal.z>0?J.max.z:J.min.z,$.distanceToPoint(D7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p6 extends x0{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new VJ(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var _7=new A,C7=new A,EW=new AJ,V6=new N9,M7=new o0,nQ=new A,qW=new A;class Q6 extends Y0{constructor(J=new C0,Q=new p6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[0];for(let $=1,W=Q.count;$<W;$++)_7.fromBufferAttribute(Q,$-1),C7.fromBufferAttribute(Q,$),Z[$]=Z[$-1],Z[$]+=_7.distanceTo(C7);J.setAttribute("lineDistance",new B0(Z,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Line.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(M7.copy(Z.boundingSphere),M7.applyMatrix4($),M7.radius+=W,J.ray.intersectsSphere(M7)===!1)return;EW.copy($).invert(),V6.copy(J.ray).applyMatrix4(EW);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=Z.index,E=Z.attributes.position;if(U!==null){let q=Math.max(0,H.start),F=Math.min(U.count,H.start+H.count);for(let D=q,k=F-1;D<k;D+=K){let O=U.getX(D),N=U.getX(D+1),B=L7(this,J,V6,X,O,N,D);if(B)Q.push(B)}if(this.isLineLoop){let D=U.getX(F-1),k=U.getX(q),O=L7(this,J,V6,X,D,k,F-1);if(O)Q.push(O)}}else{let q=Math.max(0,H.start),F=Math.min(E.count,H.start+H.count);for(let D=q,k=F-1;D<k;D+=K){let O=L7(this,J,V6,X,D,D+1,D);if(O)Q.push(O)}if(this.isLineLoop){let D=L7(this,J,V6,X,F-1,q,F-1);if(D)Q.push(D)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let Y=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function L7(J,Q,Z,$,W,H,Y){let X=J.geometry.attributes.position;if(_7.fromBufferAttribute(X,W),C7.fromBufferAttribute(X,H),Z.distanceSqToSegment(_7,C7,nQ,qW)>$)return;nQ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(nQ);if(U<Q.near||U>Q.far)return;return{distance:U,point:qW.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var NW=new A,OW=new A;class r7 extends Q6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[];for(let $=0,W=Q.count;$<W;$+=2)NW.fromBufferAttribute(Q,$),OW.fromBufferAttribute(Q,$+1),Z[$]=$===0?0:Z[$-1],Z[$+1]=Z[$]+NW.distanceTo(OW);J.setAttribute("lineDistance",new B0(Z,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class t7 extends Q6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class F9 extends x0{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new VJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var FW=new AJ,aQ=new N9,V7=new o0,z7=new A;class Z6 extends Y0{constructor(J=new C0,Q=new F9){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Points.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(V7.copy(Z.boundingSphere),V7.applyMatrix4($),V7.radius+=W,J.ray.intersectsSphere(V7)===!1)return;FW.copy($).invert(),aQ.copy(J.ray).applyMatrix4(FW);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=Z.index,G=Z.attributes.position;if(K!==null){let E=Math.max(0,H.start),q=Math.min(K.count,H.start+H.count);for(let F=E,D=q;F<D;F++){let k=K.getX(F);z7.fromBufferAttribute(G,k),RW(z7,k,X,$,J,Q,this)}}else{let E=Math.max(0,H.start),q=Math.min(G.count,H.start+H.count);for(let F=E,D=q;F<D;F++)z7.fromBufferAttribute(G,F),RW(z7,F,X,$,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let Y=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function RW(J,Q,Z,$,W,H,Y){let X=aQ.distanceSqToPoint(J);if(X<Z){let K=new A;aQ.closestPointToPoint(J,K),K.applyMatrix4($);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;H.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class e7 extends k0{constructor(J,Q,Z=1014,$,W,H,Y=1003,X=1003,K,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,$,W,H,Y,X,U,Z,K);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new j6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class JQ extends C0{constructor(J=[],Q=[],Z=1,$=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:Z,detail:$};let W=[],H=[];if(Y($),K(Z),U(),this.setAttribute("position",new B0(W,3)),this.setAttribute("normal",new B0(W.slice(),3)),this.setAttribute("uv",new B0(H,2)),$===0)this.computeVertexNormals();else this.normalizeNormals();function Y(N){let B=new A,M=new A,I=new A;for(let P=0;P<Q.length;P+=3)q(Q[P+0],B),q(Q[P+1],M),q(Q[P+2],I),X(B,M,I,N)}function X(N,B,M,I){let P=I+1,_=[];for(let w=0;w<=P;w++){_[w]=[];let f=N.clone().lerp(M,w/P),V=B.clone().lerp(M,w/P),z=P-w;for(let j=0;j<=z;j++)if(j===0&&w===P)_[w][j]=f;else _[w][j]=f.clone().lerp(V,j/z)}for(let w=0;w<P;w++)for(let f=0;f<2*(P-w)-1;f++){let V=Math.floor(f/2);if(f%2===0)E(_[w][V+1]),E(_[w+1][V]),E(_[w][V]);else E(_[w][V+1]),E(_[w+1][V+1]),E(_[w+1][V])}}function K(N){let B=new A;for(let M=0;M<W.length;M+=3)B.x=W[M+0],B.y=W[M+1],B.z=W[M+2],B.normalize().multiplyScalar(N),W[M+0]=B.x,W[M+1]=B.y,W[M+2]=B.z}function U(){let N=new A;for(let B=0;B<W.length;B+=3){N.x=W[B+0],N.y=W[B+1],N.z=W[B+2];let M=k(N)/2/Math.PI+0.5,I=O(N)/Math.PI+0.5;H.push(M,1-I)}F(),G()}function G(){for(let N=0;N<H.length;N+=6){let B=H[N+0],M=H[N+2],I=H[N+4],P=Math.max(B,M,I),_=Math.min(B,M,I);if(P>0.9&&_<0.1){if(B<0.2)H[N+0]+=1;if(M<0.2)H[N+2]+=1;if(I<0.2)H[N+4]+=1}}}function E(N){W.push(N.x,N.y,N.z)}function q(N,B){let M=N*3;B.x=J[M+0],B.y=J[M+1],B.z=J[M+2]}function F(){let N=new A,B=new A,M=new A,I=new A,P=new wJ,_=new wJ,w=new wJ;for(let f=0,V=0;f<W.length;f+=9,V+=6){N.set(W[f+0],W[f+1],W[f+2]),B.set(W[f+3],W[f+4],W[f+5]),M.set(W[f+6],W[f+7],W[f+8]),P.set(H[V+0],H[V+1]),_.set(H[V+2],H[V+3]),w.set(H[V+4],H[V+5]),I.copy(N).add(B).add(M).divideScalar(3);let z=k(I);D(P,V+0,N,z),D(_,V+2,B,z),D(w,V+4,M,z)}}function D(N,B,M,I){if(I<0&&N.x===1)H[B]=N.x-1;if(M.x===0&&M.z===0)H[B]=I/2/Math.PI+0.5}function k(N){return Math.atan2(N.z,-N.x)}function O(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new JQ(J.vertices,J.indices,J.radius,J.details)}}class l6 extends JQ{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,$=[-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,0,0,-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,Z,0,-1,Z,0,1,-Z,0,-1,-Z,0,1],W=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super($,W,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new l6(J.radius,J.detail)}}class R9 extends C0{constructor(J=1,Q=1,Z=1,$=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:$};let W=J/2,H=Q/2,Y=Math.floor(Z),X=Math.floor($),K=Y+1,U=X+1,G=J/Y,E=Q/X,q=[],F=[],D=[],k=[];for(let O=0;O<U;O++){let N=O*E-H;for(let B=0;B<K;B++){let M=B*G-W;F.push(M,-N,0),D.push(0,0,1),k.push(B/Y),k.push(1-O/X)}}for(let O=0;O<X;O++)for(let N=0;N<Y;N++){let B=N+K*O,M=N+K*(O+1),I=N+1+K*(O+1),P=N+1+K*O;q.push(B,M,P),q.push(M,I,P)}this.setIndex(q),this.setAttribute("position",new B0(F,3)),this.setAttribute("normal",new B0(D,3)),this.setAttribute("uv",new B0(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new R9(J.width,J.height,J.widthSegments,J.heightSegments)}}class $6 extends C0{constructor(J=1,Q=32,Z=16,$=0,W=Math.PI*2,H=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:Z,phiStart:$,phiLength:W,thetaStart:H,thetaLength:Y},Q=Math.max(3,Math.floor(Q)),Z=Math.max(2,Math.floor(Z));let X=Math.min(H+Y,Math.PI),K=0,U=[],G=new A,E=new A,q=[],F=[],D=[],k=[];for(let O=0;O<=Z;O++){let N=[],B=O/Z,M=0;if(O===0&&H===0)M=0.5/Q;else if(O===Z&&X===Math.PI)M=-0.5/Q;for(let I=0;I<=Q;I++){let P=I/Q;G.x=-J*Math.cos($+P*W)*Math.sin(H+B*Y),G.y=J*Math.cos(H+B*Y),G.z=J*Math.sin($+P*W)*Math.sin(H+B*Y),F.push(G.x,G.y,G.z),E.copy(G).normalize(),D.push(E.x,E.y,E.z),k.push(P+M,1-B),N.push(K++)}U.push(N)}for(let O=0;O<Z;O++)for(let N=0;N<Q;N++){let B=U[O][N+1],M=U[O][N],I=U[O+1][N],P=U[O+1][N+1];if(O!==0||H>0)q.push(B,M,P);if(O!==Z-1||X<Math.PI)q.push(M,I,P)}this.setIndex(q),this.setAttribute("position",new B0(F,3)),this.setAttribute("normal",new B0(D,3)),this.setAttribute("uv",new B0(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new $6(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class W6 extends x0{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new VJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new VJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new wJ(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new y0,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class r0 extends W6{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wJ(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new VJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new VJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new VJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class QQ extends x0{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new VJ(16777215),this.specular=new VJ(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new VJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new wJ(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new y0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class ZQ extends x0{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new VJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new VJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new wJ(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new y0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class iZ extends x0{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class oZ extends x0{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function B7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function WK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function HK(J){function Q(W,H){return J[W]-J[H]}let Z=J.length,$=Array(Z);for(let W=0;W!==Z;++W)$[W]=W;return $.sort(Q),$}function kW(J,Q,Z){let $=J.length,W=new J.constructor($);for(let H=0,Y=0;Y!==$;++H){let X=Z[H]*Q;for(let K=0;K!==Q;++K)W[Y++]=J[X+K]}return W}function IH(J,Q,Z,$){let W=1,H=J[0];while(H!==void 0&&H[$]===void 0)H=J[W++];if(H===void 0)return;let Y=H[$];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=H[$],Y!==void 0)Q.push(H.time),Z.push(...Y);H=J[W++]}while(H!==void 0);else if(Y.toArray!==void 0)do{if(Y=H[$],Y!==void 0)Q.push(H.time),Y.toArray(Z,Z.length);H=J[W++]}while(H!==void 0);else do{if(Y=H[$],Y!==void 0)Q.push(H.time),Z.push(Y);H=J[W++]}while(H!==void 0)}class a8{constructor(J,Q,Z,$){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=$!==void 0?$:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,$=Q[Z],W=Q[Z-1];J:{Q:{let H;Z:{$:if(!(J<$)){for(let Y=Z+2;;){if($===void 0){if(J<W)break $;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===Y)break;if(W=$,$=Q[++Z],J<$)break Q}H=Q.length;break Z}if(!(J>=W)){let Y=Q[1];if(J<Y)Z=2,W=Y;for(let X=Z-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===X)break;if($=W,W=Q[--Z-1],J>=W)break Q}H=Z,Z=0;break Z}break J}while(Z<H){let Y=Z+H>>>1;if(J<Q[Y])H=Y;else Z=Y+1}if($=Q[Z],W=Q[Z-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,W,$)}return this.interpolate_(Z,W,J,$)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$;for(let H=0;H!==$;++H)Q[H]=Z[W+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class aZ extends a8{constructor(J,Q,Z,$){super(J,Q,Z,$);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let $=this.parameterPositions,W=J-2,H=J+1,Y=$[W],X=$[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-Z;break;case 2402:W=$.length-2,Y=Q+$[W]-$[W+1];break;default:W=J,Y=Z}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*Z-Q;break;case 2402:H=1,X=Z+$[1]-$[0];break;default:H=J-1,X=Q}let K=(Z-Q)*0.5,U=this.valueSize;this._weightPrev=K/(Q-Y),this._weightNext=K/(X-Z),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,F=(Z-Q)/($-Q),D=F*F,k=D*F,O=-E*k+2*E*D-E*F,N=(1+E)*k+(-1.5-2*E)*D+(-0.5+E)*F+1,B=(-1-q)*k+(1.5+q)*D+0.5*F,M=q*k-q*D;for(let I=0;I!==Y;++I)W[I]=O*H[U+I]+N*H[K+I]+B*H[X+I]+M*H[G+I];return W}}class $Q extends a8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=(Z-Q)/($-Q),G=1-U;for(let E=0;E!==Y;++E)W[E]=H[K+E]*G+H[X+E]*U;return W}}class rZ extends a8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J){return this.copySampleValue_(J-1)}}class t0{constructor(J,Q,Z,$){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=B7(Q,this.TimeBufferType),this.values=B7(Z,this.ValueBufferType),this.setInterpolation($||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:B7(J.times,Array),values:B7(J.values,Array)};let $=J.getInterpolation();if($!==J.DefaultInterpolation)Z.interpolation=$}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new rZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new $Q(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new aZ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Z);return console.warn("THREE.KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]*=J}return this}trim(J,Q){let Z=this.times,$=Z.length,W=0,H=$-1;while(W!==$&&Z[W]<J)++W;while(H!==-1&&Z[H]>Q)--H;if(++H,W!==0||H!==$){if(W>=H)H=Math.max(H,1),W=H-1;let Y=this.getValueSize();this.times=Z.slice(W,H),this.values=this.values.slice(W*Y,H*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,$=this.values,W=Z.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==W;Y++){let X=Z[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,H),J=!1;break}H=X}if($!==void 0){if(WK($))for(let Y=0,X=$.length;Y!==X;++Y){let K=$[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),$=this.getInterpolation()===2302,W=J.length-1,H=1;for(let Y=1;Y<W;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!$){let G=Y*Z,E=G-Z,q=G+Z;for(let F=0;F!==Z;++F){let D=Q[G+F];if(D!==Q[E+F]||D!==Q[q+F]){X=!0;break}}}else X=!0;if(X){if(Y!==H){J[H]=J[Y];let G=Y*Z,E=H*Z;for(let q=0;q!==Z;++q)Q[E+q]=Q[G+q]}++H}}if(W>0){J[H]=J[W];for(let Y=W*Z,X=H*Z,K=0;K!==Z;++K)Q[X+K]=Q[Y+K];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),$=new this.constructor(this.name,J,Q);return $.createInterpolant=this.createInterpolant,$}}t0.prototype.ValueTypeName="";t0.prototype.TimeBufferType=Float32Array;t0.prototype.ValueBufferType=Float32Array;t0.prototype.DefaultInterpolation=2301;class r8 extends t0{constructor(J,Q,Z){super(J,Q,Z)}}r8.prototype.ValueTypeName="bool";r8.prototype.ValueBufferType=Array;r8.prototype.DefaultInterpolation=2300;r8.prototype.InterpolantFactoryMethodLinear=void 0;r8.prototype.InterpolantFactoryMethodSmooth=void 0;class WQ extends t0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}WQ.prototype.ValueTypeName="color";class P8 extends t0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}P8.prototype.ValueTypeName="number";class tZ extends a8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=(Z-Q)/($-Q),K=J*Y;for(let U=K+Y;K!==U;K+=4)T0.slerpFlat(W,0,H,K-Y,H,K,X);return W}}class h8 extends t0{constructor(J,Q,Z,$){super(J,Q,Z,$)}InterpolantFactoryMethodLinear(J){return new tZ(this.times,this.values,this.getValueSize(),J)}}h8.prototype.ValueTypeName="quaternion";h8.prototype.InterpolantFactoryMethodSmooth=void 0;class t8 extends t0{constructor(J,Q,Z){super(J,Q,Z)}}t8.prototype.ValueTypeName="string";t8.prototype.ValueBufferType=Array;t8.prototype.DefaultInterpolation=2300;t8.prototype.InterpolantFactoryMethodLinear=void 0;t8.prototype.InterpolantFactoryMethodSmooth=void 0;class T8 extends t0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}T8.prototype.ValueTypeName="vector";class l9{constructor(J="",Q=-1,Z=[],$=2500){if(this.name=J,this.tracks=Z,this.duration=Q,this.blendMode=$,this.uuid=N8(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],Z=J.tracks,$=1/(J.fps||1);for(let H=0,Y=Z.length;H!==Y;++H)Q.push(XK(Z[H]).scale($));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let Q=[],Z=J.tracks,$={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,H=Z.length;W!==H;++W)Q.push(t0.toJSON(Z[W]));return $}static CreateFromMorphTargetSequence(J,Q,Z,$){let W=Q.length,H=[];for(let Y=0;Y<W;Y++){let X=[],K=[];X.push((Y+W-1)%W,Y,(Y+1)%W),K.push(0,1,0);let U=HK(X);if(X=kW(X,1,U),K=kW(K,1,U),!$&&X[0]===0)X.push(W),K.push(K[0]);H.push(new P8(".morphTargetInfluences["+Q[Y].name+"]",X,K).scale(1/Z))}return new this(J,-1,H)}static findByName(J,Q){let Z=J;if(!Array.isArray(J)){let $=J;Z=$.geometry&&$.geometry.animations||$.animations}for(let $=0;$<Z.length;$++)if(Z[$].name===Q)return Z[$];return null}static CreateClipsFromMorphTargetSequences(J,Q,Z){let $={},W=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=K.name.match(W);if(U&&U.length>1){let G=U[1],E=$[G];if(!E)$[G]=E=[];E.push(K)}}let H=[];for(let Y in $)H.push(this.CreateFromMorphTargetSequence(Y,$[Y],Q,Z));return H}static parseAnimation(J,Q){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Z=function(G,E,q,F,D){if(q.length!==0){let k=[],O=[];if(IH(q,k,O,F),k.length!==0)D.push(new G(E,k,O))}},$=[],W=J.name||"default",H=J.fps||30,Y=J.blendMode,X=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let E=K[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},F;for(F=0;F<E.length;F++)if(E[F].morphTargets)for(let D=0;D<E[F].morphTargets.length;D++)q[E[F].morphTargets[D]]=-1;for(let D in q){let k=[],O=[];for(let N=0;N!==E[F].morphTargets.length;++N){let B=E[F];k.push(B.time),O.push(B.morphTarget===D?1:0)}$.push(new P8(".morphTargetInfluence["+D+"]",k,O))}X=q.length*H}else{let q=".bones["+Q[G].name+"]";Z(T8,q+".position",E,"pos",$),Z(h8,q+".quaternion",E,"rot",$),Z(T8,q+".scale",E,"scl",$)}}if($.length===0)return null;return new this(W,X,$,Y)}resetDuration(){let J=this.tracks,Q=0;for(let Z=0,$=J.length;Z!==$;++Z){let W=this.tracks[Z];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function YK(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return P8;case"vector":case"vector2":case"vector3":case"vector4":return T8;case"color":return WQ;case"quaternion":return h8;case"bool":case"boolean":return r8;case"string":return t8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function XK(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=YK(J.type);if(J.times===void 0){let Z=[],$=[];IH(J.keys,Z,$,"value"),J.times=Z,J.values=$}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var R8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class eZ{constructor(J,Q,Z){let $=this,W=!1,H=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this.itemStart=function(U){if(Y++,W===!1){if($.onStart!==void 0)$.onStart(U,H,Y)}W=!0},this.itemEnd=function(U){if(H++,$.onProgress!==void 0)$.onProgress(U,H,Y);if(H===Y){if(W=!1,$.onLoad!==void 0)$.onLoad()}},this.itemError=function(U){if($.onError!==void 0)$.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=K.length;G<E;G+=2){let q=K[G],F=K[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return F}return null}}}var PH=new eZ;class x8{constructor(J){this.manager=J!==void 0?J:PH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let Z=this;return new Promise(function($,W){Z.load(J,$,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}x8.DEFAULT_MATERIAL_NAME="__DEFAULT";var w8={};class TH extends Error{constructor(J,Q){super(J);this.response=Q}}class d6 extends x8{constructor(J){super(J);this.mimeType="",this.responseType=""}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=R8.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(w8[J]!==void 0){w8[J].push({onLoad:Q,onProgress:Z,onError:$});return}w8[J]=[],w8[J].push({onLoad:Q,onProgress:Z,onError:$});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),Y=this.mimeType,X=this.responseType;fetch(H).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let U=w8[J],G=K.body.getReader(),E=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),q=E?parseInt(E):0,F=q!==0,D=0,k=new ReadableStream({start(O){N();function N(){G.read().then(({done:B,value:M})=>{if(B)O.close();else{D+=M.byteLength;let I=new ProgressEvent("progress",{lengthComputable:F,loaded:D,total:q});for(let P=0,_=U.length;P<_;P++){let w=U[P];if(w.onProgress)w.onProgress(I)}O.enqueue(M),N()}},(B)=>{O.error(B)})}}});return new Response(k)}else throw new TH(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(X){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return K.json();default:if(Y==="")return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(Y),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return K.arrayBuffer().then((F)=>q.decode(F))}}}).then((K)=>{R8.add(`file:${J}`,K);let U=w8[J];delete w8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(K)}}).catch((K)=>{let U=w8[J];if(U===void 0)throw this.manager.itemError(J),K;delete w8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}var b9=new WeakMap;class J$ extends x8{constructor(J){super(J)}load(J,Q,Z,$){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=R8.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0);else{let G=b9.get(H);if(G===void 0)G=[],b9.set(H,G);G.push({onLoad:Q,onError:$})}return H}let Y=p9("img");function X(){if(U(),Q)Q(this);let G=b9.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}b9.delete(this),W.manager.itemEnd(J)}function K(G){if(U(),$)$(G);R8.remove(`image:${J}`);let E=b9.get(this)||[];for(let q=0;q<E.length;q++){let F=E[q];if(F.onError)F.onError(G)}b9.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return R8.add(`image:${J}`,Y),W.manager.itemStart(J),Y.src=J,Y}}class k9 extends x8{constructor(J){super(J)}load(J,Q,Z,$){let W=new k0,H=new J$(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,Q!==void 0)Q(W)},Z,$),W}}class H6 extends Y0{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new VJ(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}class HQ extends H6{constructor(J,Q,Z){super(J,Z);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Y0.DEFAULT_UP),this.updateMatrix(),this.groundColor=new VJ(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}}var sQ=new AJ,DW=new A,MW=new A;class YQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wJ(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new AJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new g6,this._frameExtents=new wJ(1,1),this._viewportCount=1,this._viewports=[new iJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,Z=this.matrix;DW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(DW),MW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(MW),Q.updateMatrixWorld(),sQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sQ),Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Z.multiply(sQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class AH extends YQ{constructor(){super(new M0(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,Z=K9*2*J.angle*this.focus,$=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if(Z!==Q.fov||$!==Q.aspect||W!==Q.far)Q.fov=Z,Q.aspect=$,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class XQ extends H6{constructor(J,Q,Z=0,$=Math.PI/3,W=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Y0.DEFAULT_UP),this.updateMatrix(),this.target=new Y0,this.distance=Z,this.angle=$,this.penumbra=W,this.decay=H,this.map=null,this.shadow=new AH}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var LW=new AJ,z6=new A,iQ=new A;class SH extends YQ{constructor(){super(new M0(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new wJ(4,2),this._viewportCount=6,this._viewports=[new iJ(2,1,1,1),new iJ(0,1,1,1),new iJ(3,1,1,1),new iJ(1,1,1,1),new iJ(3,0,1,1),new iJ(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(J,Q=0){let Z=this.camera,$=this.matrix,W=J.distance||Z.far;if(W!==Z.far)Z.far=W,Z.updateProjectionMatrix();z6.setFromMatrixPosition(J.matrixWorld),Z.position.copy(z6),iQ.copy(Z.position),iQ.add(this._cubeDirections[Q]),Z.up.copy(this._cubeUps[Q]),Z.lookAt(iQ),Z.updateMatrixWorld(),$.makeTranslation(-z6.x,-z6.y,-z6.z),LW.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(LW)}}class KQ extends H6{constructor(J,Q,Z=0,$=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=$,this.shadow=new SH}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class Y6 extends r9{constructor(J=-1,Q=1,Z=1,$=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=$,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,$,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,$=(this.top+this.bottom)/2,W=Z-J,H=Z+J,Y=$+Q,X=$-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,H=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,Y,X,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class jH extends YQ{constructor(){super(new Y6(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class X6 extends H6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Y0.DEFAULT_UP),this.updateMatrix(),this.target=new Y0,this.shadow=new jH}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class e8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var oQ=new WeakMap;class UQ extends x8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=R8.get(`image-bitmap:${J}`);if(H!==void 0){if(W.manager.itemStart(J),H.then){H.then((K)=>{if(oQ.has(H)===!0){if($)$(oQ.get(H));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(K);return W.manager.itemEnd(J),K}});return}return setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader;let X=fetch(J,Y).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(R8.add(`image-bitmap:${J}`,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if($)$(K);oQ.set(X,K),R8.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});R8.add(`image-bitmap:${J}`,X),W.manager.itemStart(J)}}class Q$ extends M0{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class GQ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class Z${constructor(J,Q,Z){this.binding=J,this.valueSize=Z;let $,W,H;switch(Q){case"quaternion":$=this._slerp,W=this._slerpAdditive,H=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(Z*6),this._workIndex=5;break;case"string":case"bool":$=this._select,W=this._select,H=this._setAdditiveIdentityOther,this.buffer=Array(Z*5);break;default:$=this._lerp,W=this._lerpAdditive,H=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(Z*5)}this._mixBufferRegion=$,this._mixBufferRegionAdditive=W,this._setIdentity=H,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let Z=this.buffer,$=this.valueSize,W=J*$+$,H=this.cumulativeWeight;if(H===0){for(let Y=0;Y!==$;++Y)Z[W+Y]=Z[Y];H=Q}else{H+=Q;let Y=Q/H;this._mixBufferRegion(Z,W,0,Y,$)}this.cumulativeWeight=H}accumulateAdditive(J){let Q=this.buffer,Z=this.valueSize,$=Z*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,$,0,J,Z),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,Z=this.buffer,$=J*Q+Q,W=this.cumulativeWeight,H=this.cumulativeWeightAdditive,Y=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,W<1){let X=Q*this._origIndex;this._mixBufferRegion(Z,$,X,1-W,Q)}if(H>0)this._mixBufferRegionAdditive(Z,$,this._addIndex*Q,1,Q);for(let X=Q,K=Q+Q;X!==K;++X)if(Z[X]!==Z[X+Q]){Y.setValue(Z,$);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,Z=this.valueSize,$=Z*this._origIndex;J.getValue(Q,$);for(let W=Z,H=$;W!==H;++W)Q[W]=Q[$+W%Z];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let Z=J;Z<Q;Z++)this.buffer[Z]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let Z=0;Z<this.valueSize;Z++)this.buffer[Q+Z]=this.buffer[J+Z]}_select(J,Q,Z,$,W){if($>=0.5)for(let H=0;H!==W;++H)J[Q+H]=J[Z+H]}_slerp(J,Q,Z,$){T0.slerpFlat(J,Q,J,Q,J,Z,$)}_slerpAdditive(J,Q,Z,$,W){let H=this._workIndex*W;T0.multiplyQuaternionsFlat(J,H,J,Q,J,Z),T0.slerpFlat(J,Q,J,Q,J,H,$)}_lerp(J,Q,Z,$,W){let H=1-$;for(let Y=0;Y!==W;++Y){let X=Q+Y;J[X]=J[X]*H+J[Z+Y]*$}}_lerpAdditive(J,Q,Z,$,W){for(let H=0;H!==W;++H){let Y=Q+H;J[Y]=J[Y]+J[Z+H]*$}}}var $$="\\[\\]\\.:\\/",KK=new RegExp("["+$$+"]","g"),W$="[^"+$$+"]",UK="[^"+$$.replace("\\.","")+"]",GK=/((?:WC+[\/:])*)/.source.replace("WC",W$),EK=/(WCOD+)?/.source.replace("WCOD",UK),qK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",W$),NK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",W$),OK=new RegExp("^"+GK+EK+qK+NK+"$"),FK=["material","materials","bones","map"];class vH{constructor(J,Q,Z){let $=Z||sJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,$)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,$=this._bindings[Z];if($!==void 0)$.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let $=this._targetGroup.nCachedObjects_,W=Z.length;$!==W;++$)Z[$].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class sJ{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||sJ.parseTrackName(Q),this.node=sJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new sJ(J,Q,Z);else return new sJ.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(KK,"")}static parseTrackName(J){let Q=OK.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},$=Z.nodeName&&Z.nodeName.lastIndexOf(".");if($!==void 0&&$!==-1){let W=Z.nodeName.substring($+1);if(FK.indexOf(W)!==-1)Z.nodeName=Z.nodeName.substring(0,$),Z.objectName=W}if(Z.propertyName===null||Z.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function(W){for(let H=0;H<W.length;H++){let Y=W[H];if(Y.name===Q||Y.uuid===Q)return Y;let X=Z(Y.children);if(X)return X}return null},$=Z(J.children);if($)return $}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)J[Q++]=Z[$]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,$=Q.propertyName,W=Q.propertyIndex;if(!J)J=sJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let K=Q.objectIndex;switch(Z){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let H=J[$];if(H===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+$+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if($==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=$;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}sJ.Composite=vH;sJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sJ.prototype.GetterByBindingType=[sJ.prototype._getValue_direct,sJ.prototype._getValue_array,sJ.prototype._getValue_arrayElement,sJ.prototype._getValue_toArray];sJ.prototype.SetterByBindingTypeAndVersioning=[[sJ.prototype._setValue_direct,sJ.prototype._setValue_direct_setNeedsUpdate,sJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sJ.prototype._setValue_array,sJ.prototype._setValue_array_setNeedsUpdate,sJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sJ.prototype._setValue_arrayElement,sJ.prototype._setValue_arrayElement_setNeedsUpdate,sJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sJ.prototype._setValue_fromArray,sJ.prototype._setValue_fromArray_setNeedsUpdate,sJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class H${constructor(J,Q,Z=null,$=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=Z,this.blendMode=$;let W=Q.tracks,H=W.length,Y=Array(H),X={endingStart:2400,endingEnd:2400};for(let K=0;K!==H;++K){let U=W[K].createInterpolant(null);Y[K]=U,U.settings=X}this._interpolantSettings=X,this._interpolants=Y,this._propertyBindings=Array(H),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,Z=!1){if(J.fadeOut(Q),this.fadeIn(Q),Z===!0){let $=this._clip.duration,W=J._clip.duration,H=W/$,Y=$/W;J.warp(1,H,Q),this.warp(Y,1,Q)}return this}crossFadeTo(J,Q,Z=!1){return J.crossFadeFrom(this,Q,Z)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,Z){let $=this._mixer,W=$.time,H=this.timeScale,Y=this._timeScaleInterpolant;if(Y===null)Y=$._lendControlInterpolant(),this._timeScaleInterpolant=Y;let{parameterPositions:X,sampleValues:K}=Y;return X[0]=W,X[1]=W+Z,K[0]=J/H,K[1]=Q/H,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,Z,$){if(!this.enabled){this._updateWeight(J);return}let W=this._startTime;if(W!==null){let X=(J-W)*Z;if(X<0||Z===0)Q=0;else this._startTime=null,Q=Z*X}Q*=this._updateTimeScale(J);let H=this._updateTime(Q),Y=this._updateWeight(J);if(Y>0){let X=this._interpolants,K=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=X.length;U!==G;++U)X[U].evaluate(H),K[U].accumulateAdditive(Y);break;case 2500:default:for(let U=0,G=X.length;U!==G;++U)X[U].evaluate(H),K[U].accumulate($,Y)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let Z=this._weightInterpolant;if(Z!==null){let $=Z.evaluate(J)[0];if(Q*=$,J>Z.parameterPositions[1]){if(this.stopFading(),$===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let Z=this._timeScaleInterpolant;if(Z!==null){let $=Z.evaluate(J)[0];if(Q*=$,J>Z.parameterPositions[1])if(this.stopWarping(),Q===0)this.paused=!0;else this.timeScale=Q}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,Z=this.loop,$=this.time+J,W=this._loopCount,H=Z===2202;if(J===0){if(W===-1)return $;return H&&(W&1)===1?Q-$:$}if(Z===2200){if(W===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if($>=Q)$=Q;else if($<0)$=0;else{this.time=$;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=$,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(W===-1)if(J>=0)W=0,this._setEndings(!0,this.repetitions===0,H);else this._setEndings(this.repetitions===0,!0,H);if($>=Q||$<0){let Y=Math.floor($/Q);$-=Q*Y,W+=Math.abs(Y);let X=this.repetitions-W;if(X<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;$=J>0?Q:0,this.time=$,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(X===1){let K=J<0;this._setEndings(K,!K,H)}else this._setEndings(!1,!1,H);this._loopCount=W,this.time=$,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:Y})}}else this.time=$;if(H&&(W&1)===1)return Q-$}return $}_setEndings(J,Q,Z){let $=this._interpolantSettings;if(Z)$.endingStart=2401,$.endingEnd=2401;else{if(J)$.endingStart=this.zeroSlopeAtStart?2401:2400;else $.endingStart=2402;if(Q)$.endingEnd=this.zeroSlopeAtEnd?2401:2400;else $.endingEnd=2402}}_scheduleFading(J,Q,Z){let $=this._mixer,W=$.time,H=this._weightInterpolant;if(H===null)H=$._lendControlInterpolant(),this._weightInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=W,X[0]=Q,Y[1]=W+J,X[1]=Z,this}}var RK=new Float32Array(1);class EQ extends v8{constructor(J){super();this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(J,Q){let Z=J._localRoot||this._root,$=J._clip.tracks,W=$.length,H=J._propertyBindings,Y=J._interpolants,X=Z.uuid,K=this._bindingsByRootAndName,U=K[X];if(U===void 0)U={},K[X]=U;for(let G=0;G!==W;++G){let E=$[G],q=E.name,F=U[q];if(F!==void 0)++F.referenceCount,H[G]=F;else{if(F=H[G],F!==void 0){if(F._cacheIndex===null)++F.referenceCount,this._addInactiveBinding(F,X,q);continue}let D=Q&&Q._propertyBindings[G].binding.parsedPath;F=new Z$(sJ.create(Z,q,D),E.ValueTypeName,E.getValueSize()),++F.referenceCount,this._addInactiveBinding(F,X,q),H[G]=F}Y[G].resultBuffer=F.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let Z=(J._localRoot||this._root).uuid,$=J._clip.uuid,W=this._actionsByClip[$];this._bindAction(J,W&&W.knownActions[0]),this._addInactiveAction(J,$,Z)}let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(W.useCount++===0)this._lendBinding(W),W.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(--W.useCount===0)W.restoreOriginalState(),this._takeBackBinding(W)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,Z){let $=this._actions,W=this._actionsByClip,H=W[Q];if(H===void 0)H={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,W[Q]=H;else{let Y=H.knownActions;J._byClipCacheIndex=Y.length,Y.push(J)}J._cacheIndex=$.length,$.push(J),H.actionByRoot[Z]=J}_removeInactiveAction(J){let Q=this._actions,Z=Q[Q.length-1],$=J._cacheIndex;Z._cacheIndex=$,Q[$]=Z,Q.pop(),J._cacheIndex=null;let W=J._clip.uuid,H=this._actionsByClip,Y=H[W],X=Y.knownActions,K=X[X.length-1],U=J._byClipCacheIndex;K._byClipCacheIndex=U,X[U]=K,X.pop(),J._byClipCacheIndex=null;let G=Y.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete G[E],X.length===0)delete H[W];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(--W.referenceCount===0)this._removeInactiveBinding(W)}}_lendAction(J){let Q=this._actions,Z=J._cacheIndex,$=this._nActiveActions++,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_takeBackAction(J){let Q=this._actions,Z=J._cacheIndex,$=--this._nActiveActions,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_addInactiveBinding(J,Q,Z){let $=this._bindingsByRootAndName,W=this._bindings,H=$[Q];if(H===void 0)H={},$[Q]=H;H[Z]=J,J._cacheIndex=W.length,W.push(J)}_removeInactiveBinding(J){let Q=this._bindings,Z=J.binding,$=Z.rootNode.uuid,W=Z.path,H=this._bindingsByRootAndName,Y=H[$],X=Q[Q.length-1],K=J._cacheIndex;if(X._cacheIndex=K,Q[K]=X,Q.pop(),delete Y[W],Object.keys(Y).length===0)delete H[$]}_lendBinding(J){let Q=this._bindings,Z=J._cacheIndex,$=this._nActiveBindings++,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_takeBackBinding(J){let Q=this._bindings,Z=J._cacheIndex,$=--this._nActiveBindings,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,Z=J[Q];if(Z===void 0)Z=new $Q(new Float32Array(2),new Float32Array(2),1,RK),Z.__cacheIndex=Q,J[Q]=Z;return Z}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,Z=J.__cacheIndex,$=--this._nActiveControlInterpolants,W=Q[$];J.__cacheIndex=$,Q[$]=J,W.__cacheIndex=Z,Q[Z]=W}clipAction(J,Q,Z){let $=Q||this._root,W=$.uuid,H=typeof J==="string"?l9.findByName($,J):J,Y=H!==null?H.uuid:J,X=this._actionsByClip[Y],K=null;if(Z===void 0)if(H!==null)Z=H.blendMode;else Z=2500;if(X!==void 0){let G=X.actionByRoot[W];if(G!==void 0&&G.blendMode===Z)return G;if(K=X.knownActions[0],H===null)H=K._clip}if(H===null)return null;let U=new H$(this,H,Q,Z);return this._bindAction(U,K),this._addInactiveAction(U,Y,W),U}existingAction(J,Q){let Z=Q||this._root,$=Z.uuid,W=typeof J==="string"?l9.findByName(Z,J):J,H=W?W.uuid:J,Y=this._actionsByClip[H];if(Y!==void 0)return Y.actionByRoot[$]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let Z=Q-1;Z>=0;--Z)J[Z].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,Z=this._nActiveActions,$=this.time+=J,W=Math.sign(J),H=this._accuIndex^=1;for(let K=0;K!==Z;++K)Q[K]._update($,J,W,H);let Y=this._bindings,X=this._nActiveBindings;for(let K=0;K!==X;++K)Y[K].apply(H);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,Z=J.uuid,$=this._actionsByClip,W=$[Z];if(W!==void 0){let H=W.knownActions;for(let Y=0,X=H.length;Y!==X;++Y){let K=H[Y];this._deactivateAction(K);let U=K._cacheIndex,G=Q[Q.length-1];K._cacheIndex=null,K._byClipCacheIndex=null,G._cacheIndex=U,Q[U]=G,Q.pop(),this._removeInactiveBindingsForAction(K)}delete $[Z]}}uncacheRoot(J){let Q=J.uuid,Z=this._actionsByClip;for(let H in Z){let Y=Z[H].actionByRoot,X=Y[Q];if(X!==void 0)this._deactivateAction(X),this._removeInactiveAction(X)}let $=this._bindingsByRootAndName,W=$[Q];if(W!==void 0)for(let H in W){let Y=W[H];Y.restoreOriginalState(),this._removeInactiveBinding(Y)}}uncacheAction(J,Q){let Z=this.existingAction(J,Q);if(Z!==null)this._deactivateAction(Z),this._removeInactiveAction(Z)}}var VW=new AJ;class qQ{constructor(J,Q,Z=0,$=1/0){this.ray=new N9(J,Q),this.near=Z,this.far=$,this.camera=null,this.layers=new v6,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q;else console.error("THREE.Raycaster: Unsupported camera type: "+Q.type)}setFromXRController(J){return VW.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(VW),this}intersectObject(J,Q=!0,Z=[]){return rQ(J,this,Z,Q),Z.sort(zW),Z}intersectObjects(J,Q=!0,Z=[]){for(let $=0,W=J.length;$<W;$++)rQ(J[$],this,Z,Q);return Z.sort(zW),Z}}function zW(J,Q){return J.distance-Q.distance}function rQ(J,Q,Z,$){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,Z)===!1)W=!1}if(W===!0&&$===!0){let H=J.children;for(let Y=0,X=H.length;Y<X;Y++)rQ(H[Y],Q,Z,!0)}}function Y$(J,Q,Z,$){let W=kK($);switch(Z){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${Z} format.`)}function kK(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="178";function $Y(){let J=null,Q=!1,Z=null,$=null;function W(H,Y){Z(H,Y),$=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if(Z===null)return;$=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame($),Q=!1},setAnimationLoop:function(H){Z=H},setContext:function(H){J=H}}}function DK(J){let Q=new WeakMap;function Z(X,K){let{array:U,usage:G}=X,E=U.byteLength,q=J.createBuffer();J.bindBuffer(K,q),J.bufferData(K,U,G),X.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:E}}function $(X,K,U){let{array:G,updateRanges:E}=K;if(J.bindBuffer(U,X),E.length===0)J.bufferSubData(U,0,G);else{E.sort((F,D)=>F.start-D.start);let q=0;for(let F=1;F<E.length;F++){let D=E[q],k=E[F];if(k.start<=D.start+D.count+1)D.count=Math.max(D.count,k.start+k.count-D.start);else++q,E[q]=k}E.length=q+1;for(let F=0,D=E.length;F<D;F++){let k=E[F];J.bufferSubData(U,k.start*G.BYTES_PER_ELEMENT,G,k.start,k.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function H(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=Q.get(X);if(K)J.deleteBuffer(K.buffer),Q.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,Z(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");$(U.buffer,X,K),U.version=X.version}}return{get:W,remove:H,update:Y}}var MK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LK=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_K=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CK=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IK=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SK=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jK=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vK=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yK=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dK=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mK=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uK=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oK="gl_FragColor = linearToOutputTexel( gl_FragColor );",aK=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rK=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eK=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,JU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$U=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,EU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kU=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DU=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VU=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zU=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BU=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_U=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wU=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IU=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PU=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TU=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AU=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jU=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yU=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xU=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JG=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,QG=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZG=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$G=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,WG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HG=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YG=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XG=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UG=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GG=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EG=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qG=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NG=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,DG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MG=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VG=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_G=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CG=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wG=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IG=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AG=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SG=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jG=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vG=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yG=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fG=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hG=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xG=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bG=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gG=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pG=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lG=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dG=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mG=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uG=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cG=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nG=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iG=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oG=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aG=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xJ={alphahash_fragment:MK,alphahash_pars_fragment:LK,alphamap_fragment:VK,alphamap_pars_fragment:zK,alphatest_fragment:BK,alphatest_pars_fragment:_K,aomap_fragment:CK,aomap_pars_fragment:wK,batching_pars_vertex:IK,batching_vertex:PK,begin_vertex:TK,beginnormal_vertex:AK,bsdfs:SK,iridescence_fragment:jK,bumpmap_pars_fragment:vK,clipping_planes_fragment:yK,clipping_planes_pars_fragment:fK,clipping_planes_pars_vertex:hK,clipping_planes_vertex:xK,color_fragment:bK,color_pars_fragment:gK,color_pars_vertex:pK,color_vertex:lK,common:dK,cube_uv_reflection_fragment:mK,defaultnormal_vertex:uK,displacementmap_pars_vertex:cK,displacementmap_vertex:nK,emissivemap_fragment:sK,emissivemap_pars_fragment:iK,colorspace_fragment:oK,colorspace_pars_fragment:aK,envmap_fragment:rK,envmap_common_pars_fragment:tK,envmap_pars_fragment:eK,envmap_pars_vertex:JU,envmap_physical_pars_fragment:EU,envmap_vertex:QU,fog_vertex:ZU,fog_pars_vertex:$U,fog_fragment:WU,fog_pars_fragment:HU,gradientmap_pars_fragment:YU,lightmap_pars_fragment:XU,lights_lambert_fragment:KU,lights_lambert_pars_fragment:UU,lights_pars_begin:GU,lights_toon_fragment:qU,lights_toon_pars_fragment:NU,lights_phong_fragment:OU,lights_phong_pars_fragment:FU,lights_physical_fragment:RU,lights_physical_pars_fragment:kU,lights_fragment_begin:DU,lights_fragment_maps:MU,lights_fragment_end:LU,logdepthbuf_fragment:VU,logdepthbuf_pars_fragment:zU,logdepthbuf_pars_vertex:BU,logdepthbuf_vertex:_U,map_fragment:CU,map_pars_fragment:wU,map_particle_fragment:IU,map_particle_pars_fragment:PU,metalnessmap_fragment:TU,metalnessmap_pars_fragment:AU,morphinstance_vertex:SU,morphcolor_vertex:jU,morphnormal_vertex:vU,morphtarget_pars_vertex:yU,morphtarget_vertex:fU,normal_fragment_begin:hU,normal_fragment_maps:xU,normal_pars_fragment:bU,normal_pars_vertex:gU,normal_vertex:pU,normalmap_pars_fragment:lU,clearcoat_normal_fragment_begin:dU,clearcoat_normal_fragment_maps:mU,clearcoat_pars_fragment:uU,iridescence_pars_fragment:cU,opaque_fragment:nU,packing:sU,premultiplied_alpha_fragment:iU,project_vertex:oU,dithering_fragment:aU,dithering_pars_fragment:rU,roughnessmap_fragment:tU,roughnessmap_pars_fragment:eU,shadowmap_pars_fragment:JG,shadowmap_pars_vertex:QG,shadowmap_vertex:ZG,shadowmask_pars_fragment:$G,skinbase_vertex:WG,skinning_pars_vertex:HG,skinning_vertex:YG,skinnormal_vertex:XG,specularmap_fragment:KG,specularmap_pars_fragment:UG,tonemapping_fragment:GG,tonemapping_pars_fragment:EG,transmission_fragment:qG,transmission_pars_fragment:NG,uv_pars_fragment:OG,uv_pars_vertex:FG,uv_vertex:RG,worldpos_vertex:kG,background_vert:DG,background_frag:MG,backgroundCube_vert:LG,backgroundCube_frag:VG,cube_vert:zG,cube_frag:BG,depth_vert:_G,depth_frag:CG,distanceRGBA_vert:wG,distanceRGBA_frag:IG,equirect_vert:PG,equirect_frag:TG,linedashed_vert:AG,linedashed_frag:SG,meshbasic_vert:jG,meshbasic_frag:vG,meshlambert_vert:yG,meshlambert_frag:fG,meshmatcap_vert:hG,meshmatcap_frag:xG,meshnormal_vert:bG,meshnormal_frag:gG,meshphong_vert:pG,meshphong_frag:lG,meshphysical_vert:dG,meshphysical_frag:mG,meshtoon_vert:uG,meshtoon_frag:cG,points_vert:nG,points_frag:sG,shadow_vert:iG,shadow_frag:oG,sprite_vert:aG,sprite_frag:rG},WJ={common:{diffuse:{value:new VJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yJ},alphaMap:{value:null},alphaMapTransform:{value:new yJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yJ}},envmap:{envMap:{value:null},envMapRotation:{value:new yJ},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yJ},normalScale:{value:new wJ(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new VJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new VJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yJ},alphaTest:{value:0},uvTransform:{value:new yJ}},sprite:{diffuse:{value:new VJ(16777215)},opacity:{value:1},center:{value:new wJ(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yJ},alphaMap:{value:null},alphaMapTransform:{value:new yJ},alphaTest:{value:0}}},M8={basic:{uniforms:A0([WJ.common,WJ.specularmap,WJ.envmap,WJ.aomap,WJ.lightmap,WJ.fog]),vertexShader:xJ.meshbasic_vert,fragmentShader:xJ.meshbasic_frag},lambert:{uniforms:A0([WJ.common,WJ.specularmap,WJ.envmap,WJ.aomap,WJ.lightmap,WJ.emissivemap,WJ.bumpmap,WJ.normalmap,WJ.displacementmap,WJ.fog,WJ.lights,{emissive:{value:new VJ(0)}}]),vertexShader:xJ.meshlambert_vert,fragmentShader:xJ.meshlambert_frag},phong:{uniforms:A0([WJ.common,WJ.specularmap,WJ.envmap,WJ.aomap,WJ.lightmap,WJ.emissivemap,WJ.bumpmap,WJ.normalmap,WJ.displacementmap,WJ.fog,WJ.lights,{emissive:{value:new VJ(0)},specular:{value:new VJ(1118481)},shininess:{value:30}}]),vertexShader:xJ.meshphong_vert,fragmentShader:xJ.meshphong_frag},standard:{uniforms:A0([WJ.common,WJ.envmap,WJ.aomap,WJ.lightmap,WJ.emissivemap,WJ.bumpmap,WJ.normalmap,WJ.displacementmap,WJ.roughnessmap,WJ.metalnessmap,WJ.fog,WJ.lights,{emissive:{value:new VJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xJ.meshphysical_vert,fragmentShader:xJ.meshphysical_frag},toon:{uniforms:A0([WJ.common,WJ.aomap,WJ.lightmap,WJ.emissivemap,WJ.bumpmap,WJ.normalmap,WJ.displacementmap,WJ.gradientmap,WJ.fog,WJ.lights,{emissive:{value:new VJ(0)}}]),vertexShader:xJ.meshtoon_vert,fragmentShader:xJ.meshtoon_frag},matcap:{uniforms:A0([WJ.common,WJ.bumpmap,WJ.normalmap,WJ.displacementmap,WJ.fog,{matcap:{value:null}}]),vertexShader:xJ.meshmatcap_vert,fragmentShader:xJ.meshmatcap_frag},points:{uniforms:A0([WJ.points,WJ.fog]),vertexShader:xJ.points_vert,fragmentShader:xJ.points_frag},dashed:{uniforms:A0([WJ.common,WJ.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xJ.linedashed_vert,fragmentShader:xJ.linedashed_frag},depth:{uniforms:A0([WJ.common,WJ.displacementmap]),vertexShader:xJ.depth_vert,fragmentShader:xJ.depth_frag},normal:{uniforms:A0([WJ.common,WJ.bumpmap,WJ.normalmap,WJ.displacementmap,{opacity:{value:1}}]),vertexShader:xJ.meshnormal_vert,fragmentShader:xJ.meshnormal_frag},sprite:{uniforms:A0([WJ.sprite,WJ.fog]),vertexShader:xJ.sprite_vert,fragmentShader:xJ.sprite_frag},background:{uniforms:{uvTransform:{value:new yJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xJ.background_vert,fragmentShader:xJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yJ}},vertexShader:xJ.backgroundCube_vert,fragmentShader:xJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xJ.cube_vert,fragmentShader:xJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xJ.equirect_vert,fragmentShader:xJ.equirect_frag},distanceRGBA:{uniforms:A0([WJ.common,WJ.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:xJ.distanceRGBA_vert,fragmentShader:xJ.distanceRGBA_frag},shadow:{uniforms:A0([WJ.lights,WJ.fog,{color:{value:new VJ(0)},opacity:{value:1}}]),vertexShader:xJ.shadow_vert,fragmentShader:xJ.shadow_frag}};M8.physical={uniforms:A0([M8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yJ},clearcoatNormalScale:{value:new wJ(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yJ},sheen:{value:0},sheenColor:{value:new VJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yJ},transmissionSamplerSize:{value:new wJ},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yJ},attenuationDistance:{value:0},attenuationColor:{value:new VJ(0)},specularColor:{value:new VJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yJ},anisotropyVector:{value:new wJ},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yJ}}]),vertexShader:xJ.meshphysical_vert,fragmentShader:xJ.meshphysical_frag};var NQ={r:0,b:0,g:0},D9=new y0,tG=new AJ;function eG(J,Q,Z,$,W,H,Y){let X=new VJ(0),K=H===!0?0:1,U,G,E=null,q=0,F=null;function D(M){let I=M.isScene===!0?M.background:null;if(I&&I.isTexture)I=(M.backgroundBlurriness>0?Z:Q).get(I);return I}function k(M){let I=!1,P=D(M);if(P===null)N(X,K);else if(P&&P.isColor)N(P,1),I=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")$.buffers.color.setClear(0,0,0,1,Y);else if(_==="alpha-blend")$.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||I)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function O(M,I){let P=D(I);if(P&&(P.isCubeTexture||P.mapping===I6)){if(G===void 0)G=new F0(new a9(1,1,1),new a0({name:"BackgroundCubeMaterial",uniforms:O9(M8.backgroundCube.uniforms),vertexShader:M8.backgroundCube.vertexShader,fragmentShader:M8.backgroundCube.fragmentShader,side:f0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(_,w,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(D9.copy(I.backgroundRotation),D9.x*=-1,D9.y*=-1,D9.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1)D9.y*=-1,D9.z*=-1;if(G.material.uniforms.envMap.value=P,G.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(tG.makeRotationFromEuler(D9)),G.material.toneMapped=uJ.getTransfer(P.colorSpace)!==X0,E!==P||q!==P.version||F!==J.toneMapping)G.material.needsUpdate=!0,E=P,q=P.version,F=J.toneMapping;G.layers.enableAll(),M.unshift(G,G.geometry,G.material,0,0,null)}else if(P&&P.isTexture){if(U===void 0)U=new F0(new R9(2,2),new a0({name:"BackgroundMaterial",uniforms:O9(M8.background.uniforms),vertexShader:M8.background.vertexShader,fragmentShader:M8.background.fragmentShader,side:n8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=P,U.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,U.material.toneMapped=uJ.getTransfer(P.colorSpace)!==X0,P.matrixAutoUpdate===!0)P.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(P.matrix),E!==P||q!==P.version||F!==J.toneMapping)U.material.needsUpdate=!0,E=P,q=P.version,F=J.toneMapping;U.layers.enableAll(),M.unshift(U,U.geometry,U.material,0,0,null)}}function N(M,I){M.getRGB(NQ,cZ(J)),$.buffers.color.setClear(NQ.r,NQ.g,NQ.b,I,Y)}function B(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(M,I=1){X.set(M),K=I,N(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(M){K=M,N(X,K)},render:k,addToRenderList:O,dispose:B}}function JE(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),$={},W=q(null),H=W,Y=!1;function X(z,j,g,c,u){let o=!1,d=E(c,g,j);if(H!==d)H=d,U(H.object);if(o=F(z,c,g,u),o)D(z,c,g,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(o||Y){if(Y=!1,I(z,j,g,c),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function K(){return J.createVertexArray()}function U(z){return J.bindVertexArray(z)}function G(z){return J.deleteVertexArray(z)}function E(z,j,g){let c=g.wireframe===!0,u=$[z.id];if(u===void 0)u={},$[z.id]=u;let o=u[j.id];if(o===void 0)o={},u[j.id]=o;let d=o[c];if(d===void 0)d=q(K()),o[c]=d;return d}function q(z){let j=[],g=[],c=[];for(let u=0;u<Z;u++)j[u]=0,g[u]=0,c[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:g,attributeDivisors:c,object:z,attributes:{},index:null}}function F(z,j,g,c){let u=H.attributes,o=j.attributes,d=0,t=g.getAttributes();for(let p in t)if(t[p].location>=0){let UJ=u[p],jJ=o[p];if(jJ===void 0){if(p==="instanceMatrix"&&z.instanceMatrix)jJ=z.instanceMatrix;if(p==="instanceColor"&&z.instanceColor)jJ=z.instanceColor}if(UJ===void 0)return!0;if(UJ.attribute!==jJ)return!0;if(jJ&&UJ.data!==jJ.data)return!0;d++}if(H.attributesNum!==d)return!0;if(H.index!==c)return!0;return!1}function D(z,j,g,c){let u={},o=j.attributes,d=0,t=g.getAttributes();for(let p in t)if(t[p].location>=0){let UJ=o[p];if(UJ===void 0){if(p==="instanceMatrix"&&z.instanceMatrix)UJ=z.instanceMatrix;if(p==="instanceColor"&&z.instanceColor)UJ=z.instanceColor}let jJ={};if(jJ.attribute=UJ,UJ&&UJ.data)jJ.data=UJ.data;u[p]=jJ,d++}H.attributes=u,H.attributesNum=d,H.index=c}function k(){let z=H.newAttributes;for(let j=0,g=z.length;j<g;j++)z[j]=0}function O(z){N(z,0)}function N(z,j){let{newAttributes:g,enabledAttributes:c,attributeDivisors:u}=H;if(g[z]=1,c[z]===0)J.enableVertexAttribArray(z),c[z]=1;if(u[z]!==j)J.vertexAttribDivisor(z,j),u[z]=j}function B(){let{newAttributes:z,enabledAttributes:j}=H;for(let g=0,c=j.length;g<c;g++)if(j[g]!==z[g])J.disableVertexAttribArray(g),j[g]=0}function M(z,j,g,c,u,o,d){if(d===!0)J.vertexAttribIPointer(z,j,g,u,o);else J.vertexAttribPointer(z,j,g,c,u,o)}function I(z,j,g,c){k();let u=c.attributes,o=g.getAttributes(),d=j.defaultAttributeValues;for(let t in o){let p=o[t];if(p.location>=0){let KJ=u[t];if(KJ===void 0){if(t==="instanceMatrix"&&z.instanceMatrix)KJ=z.instanceMatrix;if(t==="instanceColor"&&z.instanceColor)KJ=z.instanceColor}if(KJ!==void 0){let{normalized:UJ,itemSize:jJ}=KJ,dJ=Q.get(KJ);if(dJ===void 0)continue;let{buffer:n,type:ZJ,bytesPerElement:zJ}=dJ,PJ=ZJ===J.INT||ZJ===J.UNSIGNED_INT||KJ.gpuType===$Z;if(KJ.isInterleavedBufferAttribute){let XJ=KJ.data,fJ=XJ.stride,gJ=KJ.offset;if(XJ.isInstancedInterleavedBuffer){for(let cJ=0;cJ<p.locationSize;cJ++)N(p.location+cJ,XJ.meshPerAttribute);if(z.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=XJ.meshPerAttribute*XJ.count}else for(let cJ=0;cJ<p.locationSize;cJ++)O(p.location+cJ);J.bindBuffer(J.ARRAY_BUFFER,n);for(let cJ=0;cJ<p.locationSize;cJ++)M(p.location+cJ,jJ/p.locationSize,ZJ,UJ,fJ*zJ,(gJ+jJ/p.locationSize*cJ)*zJ,PJ)}else{if(KJ.isInstancedBufferAttribute){for(let XJ=0;XJ<p.locationSize;XJ++)N(p.location+XJ,KJ.meshPerAttribute);if(z.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=KJ.meshPerAttribute*KJ.count}else for(let XJ=0;XJ<p.locationSize;XJ++)O(p.location+XJ);J.bindBuffer(J.ARRAY_BUFFER,n);for(let XJ=0;XJ<p.locationSize;XJ++)M(p.location+XJ,jJ/p.locationSize,ZJ,UJ,jJ*zJ,jJ/p.locationSize*XJ*zJ,PJ)}}else if(d!==void 0){let UJ=d[t];if(UJ!==void 0)switch(UJ.length){case 2:J.vertexAttrib2fv(p.location,UJ);break;case 3:J.vertexAttrib3fv(p.location,UJ);break;case 4:J.vertexAttrib4fv(p.location,UJ);break;default:J.vertexAttrib1fv(p.location,UJ)}}}}B()}function P(){f();for(let z in $){let j=$[z];for(let g in j){let c=j[g];for(let u in c)G(c[u].object),delete c[u];delete j[g]}delete $[z]}}function _(z){if($[z.id]===void 0)return;let j=$[z.id];for(let g in j){let c=j[g];for(let u in c)G(c[u].object),delete c[u];delete j[g]}delete $[z.id]}function w(z){for(let j in $){let g=$[j];if(g[z.id]===void 0)continue;let c=g[z.id];for(let u in c)G(c[u].object),delete c[u];delete g[z.id]}}function f(){if(V(),Y=!0,H===W)return;H=W,U(H.object)}function V(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:f,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:_,releaseStatesOfProgram:w,initAttributes:k,enableAttribute:O,disableUnusedAttributes:B}}function QE(J,Q,Z){let $;function W(U){$=U}function H(U,G){J.drawArrays($,U,G),Z.update(G,$,1)}function Y(U,G,E){if(E===0)return;J.drawArraysInstanced($,U,G,E),Z.update(G,$,E)}function X(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL($,U,0,G,0,E);let F=0;for(let D=0;D<E;D++)F+=G[D];Z.update(F,$,1)}function K(U,G,E,q){if(E===0)return;let F=Q.get("WEBGL_multi_draw");if(F===null)for(let D=0;D<U.length;D++)Y(U[D],G[D],q[D]);else{F.multiDrawArraysInstancedWEBGL($,U,0,G,0,q,0,E);let D=0;for(let k=0;k<E;k++)D+=G[k]*q[k];Z.update(D,$,1)}}this.setMode=W,this.render=H,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function ZE(J,Q,Z,$){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(w){if(w!==W8&&$.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(w){let f=w===T6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==i8&&$.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==o8&&!f)return!1;return!0}function K(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Z.precision!==void 0?Z.precision:"highp",G=K(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=Z.logarithmicDepthBuffer===!0,q=Z.reverseDepthBuffer===!0&&Q.has("EXT_clip_control"),F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),N=J.getParameter(J.MAX_VERTEX_ATTRIBS),B=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),I=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),P=D>0,_=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:E,reverseDepthBuffer:q,maxTextures:F,maxVertexTextures:D,maxTextureSize:k,maxCubemapSize:O,maxAttributes:N,maxVertexUniforms:B,maxVaryings:M,maxFragmentUniforms:I,vertexTextures:P,maxSamples:_}}function $E(J){let Q=this,Z=null,$=0,W=!1,H=!1,Y=new E8,X=new yJ,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let F=E.length!==0||q||$!==0||W;return W=q,$=E.length,F},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,q){Z=G(E,q,0)},this.setState=function(E,q,F){let{clippingPlanes:D,clipIntersection:k,clipShadows:O}=E,N=J.get(E);if(!W||D===null||D.length===0||H&&!O)if(H)G(null);else U();else{let B=H?0:$,M=B*4,I=N.clippingState||null;K.value=I,I=G(D,q,M,F);for(let P=0;P!==M;++P)I[P]=Z[P];N.clippingState=I,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=B}};function U(){if(K.value!==Z)K.value=Z,K.needsUpdate=$>0;Q.numPlanes=$,Q.numIntersection=0}function G(E,q,F,D){let k=E!==null?E.length:0,O=null;if(k!==0){if(O=K.value,D!==!0||O===null){let N=F+k*4,B=q.matrixWorldInverse;if(X.getNormalMatrix(B),O===null||O.length<N)O=new Float32Array(N);for(let M=0,I=F;M!==k;++M,I+=4)Y.copy(E[M]).applyMatrix4(B,X),Y.normal.toArray(O,I),O[I+3]=Y.constant}K.value=O,K.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,O}}function WE(J){let Q=new WeakMap;function Z(Y,X){if(X===v7)Y.mapping=u9;else if(X===y7)Y.mapping=E9;return Y}function $(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===v7||X===y7)if(Q.has(Y)){let K=Q.get(Y).texture;return Z(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new sZ(K.height);return U.fromEquirectangularTexture(J,Y),Q.set(Y,U),Y.addEventListener("dispose",W),Z(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=Q.get(X);if(K!==void 0)Q.delete(X),K.dispose()}function H(){Q=new WeakMap}return{get:$,dispose:H}}var U6=4,yH=[0.125,0.215,0.35,0.446,0.526,0.582],V9=20,X$=new Y6,fH=new VJ,K$=null,U$=0,G$=0,E$=!1,L9=(1+Math.sqrt(5))/2,K6=1/L9,hH=[new A(-L9,K6,0),new A(L9,K6,0),new A(-K6,0,L9),new A(K6,0,L9),new A(0,L9,-K6),new A(0,L9,K6),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],HE=new A;class c6{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,Z=0.1,$=100,W={}){let{size:H=256,position:Y=HE}=W;K$=this._renderer.getRenderTarget(),U$=this._renderer.getActiveCubeFace(),G$=this._renderer.getActiveMipmapLevel(),E$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,Z,$,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=gH(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=bH(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(K$,U$,G$),this._renderer.xr.enabled=E$,J.scissorTest=!1,OQ(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===u9||J.mapping===E9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);K$=this._renderer.getRenderTarget(),U$=this._renderer.getActiveCubeFace(),G$=this._renderer.getActiveMipmapLevel(),E$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:i0,minFilter:i0,generateMipmaps:!1,type:T6,format:W8,colorSpace:h0,depthBuffer:!1},$=xH(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=xH(J,Q,Z);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(W)),this._blurMaterial=XE(W,J,Q)}return $}_compileMaterial(J){let Q=new F0(this._lodPlanes[0],J);this._renderer.compile(Q,X$)}_sceneToCubeUV(J,Q,Z,$,W){let X=new M0(90,1,Q,Z),K=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;G.getClearColor(fH),G.toneMapping=A8,G.autoClear=!1;let F=new D8({name:"PMREM.Background",side:f0,depthWrite:!1,depthTest:!1}),D=new F0(new a9,F),k=!1,O=J.background;if(O){if(O.isColor)F.color.copy(O),J.background=null,k=!0}else F.color.copy(fH),k=!0;for(let N=0;N<6;N++){let B=N%3;if(B===0)X.up.set(0,K[N],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x+U[N],W.y,W.z);else if(B===1)X.up.set(0,0,K[N]),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y+U[N],W.z);else X.up.set(0,K[N],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y,W.z+U[N]);let M=this._cubeSize;if(OQ($,B*M,N>2?M:0,M,M),G.setRenderTarget($),k)G.render(D,X);G.render(J,X)}D.geometry.dispose(),D.material.dispose(),G.toneMapping=q,G.autoClear=E,J.background=O}_textureToCubeUV(J,Q){let Z=this._renderer,$=J.mapping===u9||J.mapping===E9;if($){if(this._cubemapMaterial===null)this._cubemapMaterial=gH();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=bH();let W=$?this._cubemapMaterial:this._equirectMaterial,H=new F0(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let X=this._cubeSize;OQ(Q,0,0,3*X,2*X),Z.setRenderTarget(Q),Z.render(H,X$)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let $=this._lodPlanes.length;for(let W=1;W<$;W++){let H=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=hH[($-W-1)%hH.length];this._blur(J,W-1,W,H,Y)}Q.autoClear=Z}_blur(J,Q,Z,$,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,Z,$,"latitudinal",W),this._halfBlur(H,J,Z,Z,$,"longitudinal",W)}_halfBlur(J,Q,Z,$,W,H,Y){let X=this._renderer,K=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new F0(this._lodPlanes[$],K),E=K.uniforms,q=this._sizeLods[Z]-1,F=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*V9-1),D=W/F,k=isFinite(W)?1+Math.floor(U*D):V9;if(k>V9)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${k} samples when the maximum is set to ${V9}`);let O=[],N=0;for(let _=0;_<V9;++_){let w=_/D,f=Math.exp(-w*w/2);if(O.push(f),_===0)N+=f;else if(_<k)N+=2*f}for(let _=0;_<O.length;_++)O[_]=O[_]/N;if(E.envMap.value=J.texture,E.samples.value=k,E.weights.value=O,E.latitudinal.value=H==="latitudinal",Y)E.poleAxis.value=Y;let{_lodMax:B}=this;E.dTheta.value=F,E.mipInt.value=B-Z;let M=this._sizeLods[$],I=3*M*($>B-U6?$-B+U6:0),P=4*(this._cubeSize-M);OQ(Q,I,P,3*M,2*M),X.setRenderTarget(Q),X.render(G,X$)}}function YE(J){let Q=[],Z=[],$=[],W=J,H=J-U6+1+yH.length;for(let Y=0;Y<H;Y++){let X=Math.pow(2,W);Z.push(X);let K=1/X;if(Y>J-U6)K=yH[Y-J+U6-1];else if(Y===0)K=0;$.push(K);let U=1/(X-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],F=6,D=6,k=3,O=2,N=1,B=new Float32Array(k*D*F),M=new Float32Array(O*D*F),I=new Float32Array(N*D*F);for(let _=0;_<F;_++){let w=_%3*2/3-1,f=_>2?0:-1,V=[w,f,0,w+0.6666666666666666,f,0,w+0.6666666666666666,f+1,0,w,f,0,w+0.6666666666666666,f+1,0,w,f+1,0];B.set(V,k*D*_),M.set(q,O*D*_);let z=[_,_,_,_,_,_];I.set(z,N*D*_)}let P=new C0;if(P.setAttribute("position",new O0(B,k)),P.setAttribute("uv",new O0(M,O)),P.setAttribute("faceIndex",new O0(I,N)),Q.push(P),W>U6)W--}return{lodPlanes:Q,sizeLods:Z,sigmas:$}}function xH(J,Q,Z){let $=new f8(J,Q,Z);return $.texture.mapping=I6,$.texture.name="PMREM.cubeUv",$.scissorTest=!0,$}function OQ(J,Q,Z,$,W){J.viewport.set(Q,Z,$,W),J.scissor.set(Q,Z,$,W)}function XE(J,Q,Z){let $=new Float32Array(V9),W=new A(0,1,0);return new a0({name:"SphericalGaussianBlur",defines:{n:V9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:$},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:O$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:s8,depthTest:!1,depthWrite:!1})}function bH(){return new a0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:O$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:s8,depthTest:!1,depthWrite:!1})}function gH(){return new a0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:O$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:s8,depthTest:!1,depthWrite:!1})}function O$(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KE(J){let Q=new WeakMap,Z=null;function $(X){if(X&&X.isTexture){let K=X.mapping,U=K===v7||K===y7,G=K===u9||K===E9;if(U||G){let E=Q.get(X),q=E!==void 0?E.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==q){if(Z===null)Z=new c6(J);return E=U?Z.fromEquirectangular(X,E):Z.fromCubemap(X,E),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),E.texture}else if(E!==void 0)return E.texture;else{let F=X.image;if(U&&F&&F.height>0||G&&F&&W(F)){if(Z===null)Z=new c6(J);return E=U?Z.fromEquirectangular(X):Z.fromCubemap(X),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),X.addEventListener("dispose",H),E.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function H(X){let K=X.target;K.removeEventListener("dispose",H);let U=Q.get(K);if(U!==void 0)Q.delete(K),U.dispose()}function Y(){if(Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:$,dispose:Y}}function UE(J){let Q={};function Z($){if(Q[$]!==void 0)return Q[$];let W;switch($){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension($)}return Q[$]=W,W}return{has:function($){return Z($)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function($){let W=Z($);if(W===null)U9("THREE.WebGLRenderer: "+$+" extension not supported.");return W}}}function GE(J,Q,Z,$){let W={},H=new WeakMap;function Y(E){let q=E.target;if(q.index!==null)Q.remove(q.index);for(let D in q.attributes)Q.remove(q.attributes[D]);q.removeEventListener("dispose",Y),delete W[q.id];let F=H.get(q);if(F)Q.remove(F),H.delete(q);if($.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;Z.memory.geometries--}function X(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",Y),W[q.id]=!0,Z.memory.geometries++,q}function K(E){let q=E.attributes;for(let F in q)Q.update(q[F],J.ARRAY_BUFFER)}function U(E){let q=[],F=E.index,D=E.attributes.position,k=0;if(F!==null){let B=F.array;k=F.version;for(let M=0,I=B.length;M<I;M+=3){let P=B[M+0],_=B[M+1],w=B[M+2];q.push(P,_,_,w,w,P)}}else if(D!==void 0){let B=D.array;k=D.version;for(let M=0,I=B.length/3-1;M<I;M+=3){let P=M+0,_=M+1,w=M+2;q.push(P,_,_,w,w,P)}}else return;let O=new((lZ(q))?s7:n7)(q,1);O.version=k;let N=H.get(E);if(N)Q.remove(N);H.set(E,O)}function G(E){let q=H.get(E);if(q){let F=E.index;if(F!==null){if(q.version<F.version)U(E)}}else U(E);return H.get(E)}return{get:X,update:K,getWireframeAttribute:G}}function EE(J,Q,Z){let $;function W(q){$=q}let H,Y;function X(q){H=q.type,Y=q.bytesPerElement}function K(q,F){J.drawElements($,F,H,q*Y),Z.update(F,$,1)}function U(q,F,D){if(D===0)return;J.drawElementsInstanced($,F,H,q*Y,D),Z.update(F,$,D)}function G(q,F,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL($,F,0,H,q,0,D);let O=0;for(let N=0;N<D;N++)O+=F[N];Z.update(O,$,1)}function E(q,F,D,k){if(D===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let N=0;N<q.length;N++)U(q[N]/Y,F[N],k[N]);else{O.multiDrawElementsInstancedWEBGL($,F,0,H,q,0,k,0,D);let N=0;for(let B=0;B<D;B++)N+=F[B]*k[B];Z.update(N,$,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function qE(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function $(H,Y,X){switch(Z.calls++,Y){case J.TRIANGLES:Z.triangles+=X*(H/3);break;case J.LINES:Z.lines+=X*(H/2);break;case J.LINE_STRIP:Z.lines+=X*(H-1);break;case J.LINE_LOOP:Z.lines+=X*H;break;case J.POINTS:Z.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:W,update:$}}function NE(J,Q,Z){let $=new WeakMap,W=new iJ;function H(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=G!==void 0?G.length:0,q=$.get(X);if(q===void 0||q.count!==E){let V=function(){w.dispose(),$.delete(X),X.removeEventListener("dispose",V)};if(q!==void 0)q.texture.dispose();let F=X.morphAttributes.position!==void 0,D=X.morphAttributes.normal!==void 0,k=X.morphAttributes.color!==void 0,O=X.morphAttributes.position||[],N=X.morphAttributes.normal||[],B=X.morphAttributes.color||[],M=0;if(F===!0)M=1;if(D===!0)M=2;if(k===!0)M=3;let I=X.attributes.position.count*M,P=1;if(I>Q.maxTextureSize)P=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let _=new Float32Array(I*P*4*E),w=new c7(_,I,P,E);w.type=o8,w.needsUpdate=!0;let f=M*4;for(let z=0;z<E;z++){let j=O[z],g=N[z],c=B[z],u=I*P*4*z;for(let o=0;o<j.count;o++){let d=o*f;if(F===!0)W.fromBufferAttribute(j,o),_[u+d+0]=W.x,_[u+d+1]=W.y,_[u+d+2]=W.z,_[u+d+3]=0;if(D===!0)W.fromBufferAttribute(g,o),_[u+d+4]=W.x,_[u+d+5]=W.y,_[u+d+6]=W.z,_[u+d+7]=0;if(k===!0)W.fromBufferAttribute(c,o),_[u+d+8]=W.x,_[u+d+9]=W.y,_[u+d+10]=W.z,_[u+d+11]=c.itemSize===4?W.w:1}}q={count:E,texture:w,size:new wJ(I,P)},$.set(X,q),X.addEventListener("dispose",V)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,Z);else{let F=0;for(let k=0;k<U.length;k++)F+=U[k];let D=X.morphTargetsRelative?1:1-F;K.getUniforms().setValue(J,"morphTargetBaseInfluence",D),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",q.texture,Z),K.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:H}}function OE(J,Q,Z,$){let W=new WeakMap;function H(K){let U=$.render.frame,G=K.geometry,E=Q.get(K,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if(Z.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)Z.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let q=K.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),Z.remove(U.instanceMatrix),U.instanceColor!==null)Z.remove(U.instanceColor)}return{update:H,dispose:Y}}var WY=new k0,pH=new e7(1,1),HY=new c7,YY=new uZ,XY=new i7,lH=[],dH=[],mH=new Float32Array(16),uH=new Float32Array(9),cH=new Float32Array(4);function G6(J,Q,Z){let $=J[0];if($<=0||$>0)return J;let W=Q*Z,H=lH[W];if(H===void 0)H=new Float32Array(W),lH[W]=H;if(Q!==0){$.toArray(H,0);for(let Y=1,X=0;Y!==Q;++Y)X+=Z,J[Y].toArray(H,X)}return H}function L0(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,$=J.length;Z<$;Z++)if(J[Z]!==Q[Z])return!1;return!0}function V0(J,Q){for(let Z=0,$=Q.length;Z<$;Z++)J[Z]=Q[Z]}function RQ(J,Q){let Z=dH[Q];if(Z===void 0)Z=new Int32Array(Q),dH[Q]=Z;for(let $=0;$!==Q;++$)Z[$]=J.allocateTextureUnit();return Z}function FE(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function RE(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(L0(Z,Q))return;J.uniform2fv(this.addr,Q),V0(Z,Q)}}function kE(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(L0(Z,Q))return;J.uniform3fv(this.addr,Q),V0(Z,Q)}}function DE(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(L0(Z,Q))return;J.uniform4fv(this.addr,Q),V0(Z,Q)}}function ME(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(L0(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),V0(Z,Q)}else{if(L0(Z,$))return;cH.set($),J.uniformMatrix2fv(this.addr,!1,cH),V0(Z,$)}}function LE(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(L0(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),V0(Z,Q)}else{if(L0(Z,$))return;uH.set($),J.uniformMatrix3fv(this.addr,!1,uH),V0(Z,$)}}function VE(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(L0(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),V0(Z,Q)}else{if(L0(Z,$))return;mH.set($),J.uniformMatrix4fv(this.addr,!1,mH),V0(Z,$)}}function zE(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function BE(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(L0(Z,Q))return;J.uniform2iv(this.addr,Q),V0(Z,Q)}}function _E(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(L0(Z,Q))return;J.uniform3iv(this.addr,Q),V0(Z,Q)}}function CE(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(L0(Z,Q))return;J.uniform4iv(this.addr,Q),V0(Z,Q)}}function wE(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function IE(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(L0(Z,Q))return;J.uniform2uiv(this.addr,Q),V0(Z,Q)}}function PE(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(L0(Z,Q))return;J.uniform3uiv(this.addr,Q),V0(Z,Q)}}function TE(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(L0(Z,Q))return;J.uniform4uiv(this.addr,Q),V0(Z,Q)}}function AE(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)pH.compareFunction=bZ,H=pH;else H=WY;Z.setTexture2D(Q||H,W)}function SE(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture3D(Q||YY,W)}function jE(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTextureCube(Q||XY,W)}function vE(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture2DArray(Q||HY,W)}function yE(J){switch(J){case 5126:return FE;case 35664:return RE;case 35665:return kE;case 35666:return DE;case 35674:return ME;case 35675:return LE;case 35676:return VE;case 5124:case 35670:return zE;case 35667:case 35671:return BE;case 35668:case 35672:return _E;case 35669:case 35673:return CE;case 5125:return wE;case 36294:return IE;case 36295:return PE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return AE;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return vE}}function fE(J,Q){J.uniform1fv(this.addr,Q)}function hE(J,Q){let Z=G6(Q,this.size,2);J.uniform2fv(this.addr,Z)}function xE(J,Q){let Z=G6(Q,this.size,3);J.uniform3fv(this.addr,Z)}function bE(J,Q){let Z=G6(Q,this.size,4);J.uniform4fv(this.addr,Z)}function gE(J,Q){let Z=G6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function pE(J,Q){let Z=G6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function lE(J,Q){let Z=G6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function dE(J,Q){J.uniform1iv(this.addr,Q)}function mE(J,Q){J.uniform2iv(this.addr,Q)}function uE(J,Q){J.uniform3iv(this.addr,Q)}function cE(J,Q){J.uniform4iv(this.addr,Q)}function nE(J,Q){J.uniform1uiv(this.addr,Q)}function sE(J,Q){J.uniform2uiv(this.addr,Q)}function iE(J,Q){J.uniform3uiv(this.addr,Q)}function oE(J,Q){J.uniform4uiv(this.addr,Q)}function aE(J,Q,Z){let $=this.cache,W=Q.length,H=RQ(Z,W);if(!L0($,H))J.uniform1iv(this.addr,H),V0($,H);for(let Y=0;Y!==W;++Y)Z.setTexture2D(Q[Y]||WY,H[Y])}function rE(J,Q,Z){let $=this.cache,W=Q.length,H=RQ(Z,W);if(!L0($,H))J.uniform1iv(this.addr,H),V0($,H);for(let Y=0;Y!==W;++Y)Z.setTexture3D(Q[Y]||YY,H[Y])}function tE(J,Q,Z){let $=this.cache,W=Q.length,H=RQ(Z,W);if(!L0($,H))J.uniform1iv(this.addr,H),V0($,H);for(let Y=0;Y!==W;++Y)Z.setTextureCube(Q[Y]||XY,H[Y])}function eE(J,Q,Z){let $=this.cache,W=Q.length,H=RQ(Z,W);if(!L0($,H))J.uniform1iv(this.addr,H),V0($,H);for(let Y=0;Y!==W;++Y)Z.setTexture2DArray(Q[Y]||HY,H[Y])}function J1(J){switch(J){case 5126:return fE;case 35664:return hE;case 35665:return xE;case 35666:return bE;case 35674:return gE;case 35675:return pE;case 35676:return lE;case 5124:case 35670:return dE;case 35667:case 35671:return mE;case 35668:case 35672:return uE;case 35669:case 35673:return cE;case 5125:return nE;case 36294:return sE;case 36295:return iE;case 36296:return oE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return eE}}class KY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=yE(Q.type)}}class UY{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=J1(Q.type)}}class GY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let $=this.seq;for(let W=0,H=$.length;W!==H;++W){let Y=$[W];Y.setValue(J,Q[Y.id],Z)}}}var q$=/(\w+)(\])?(\[|\.)?/g;function nH(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Q1(J,Q,Z){let $=J.name,W=$.length;q$.lastIndex=0;while(!0){let H=q$.exec($),Y=q$.lastIndex,X=H[1],K=H[2]==="]",U=H[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){nH(Z,U===void 0?new KY(X,J,Q):new UY(X,J,Q));break}else{let E=Z.map[X];if(E===void 0)E=new GY(X),nH(Z,E);Z=E}}}class u6{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let $=0;$<Z;++$){let W=J.getActiveUniform(Q,$),H=J.getUniformLocation(Q,W.name);Q1(W,H,this)}}setValue(J,Q,Z,$){let W=this.map[Q];if(W!==void 0)W.setValue(J,Z,$)}setOptional(J,Q,Z){let $=Q[Z];if($!==void 0)this.setValue(J,Z,$)}static upload(J,Q,Z,$){for(let W=0,H=Q.length;W!==H;++W){let Y=Q[W],X=Z[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,$)}}static seqWithValue(J,Q){let Z=[];for(let $=0,W=J.length;$!==W;++$){let H=J[$];if(H.id in Q)Z.push(H)}return Z}}function sH(J,Q,Z){let $=J.createShader(Q);return J.shaderSource($,Z),J.compileShader($),$}var Z1=37297,$1=0;function W1(J,Q){let Z=J.split(`
`),$=[],W=Math.max(Q-6,0),H=Math.min(Q+6,Z.length);for(let Y=W;Y<H;Y++){let X=Y+1;$.push(`${X===Q?">":" "} ${X}: ${Z[Y]}`)}return $.join(`
`)}var iH=new yJ;function H1(J){uJ._getMatrix(iH,uJ.workingColorSpace,J);let Q=`mat3( ${iH.elements.map((Z)=>Z.toFixed(4))} )`;switch(uJ.getTransfer(J)){case xZ:return[Q,"LinearTransferOETF"];case X0:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function oH(J,Q,Z){let $=J.getShaderParameter(Q,J.COMPILE_STATUS),W=J.getShaderInfoLog(Q).trim();if($&&W==="")return"";let H=/ERROR: 0:(\d+)/.exec(W);if(H){let Y=parseInt(H[1]);return Z.toUpperCase()+`

`+W+`

`+W1(J.getShaderSource(Q),Y)}else return W}function Y1(J,Q){let Z=H1(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}function X1(J,Q){let Z;switch(Q){case aW:Z="Linear";break;case rW:Z="Reinhard";break;case tW:Z="Cineon";break;case eW:Z="ACESFilmic";break;case j7:Z="AgX";break;case QH:Z="Neutral";break;case JH:Z="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var FQ=new A;function K1(){uJ.getLuminanceCoefficients(FQ);let J=FQ.x.toFixed(4),Q=FQ.y.toFixed(4),Z=FQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function U1(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(m6).join(`
`)}function G1(J){let Q=[];for(let Z in J){let $=J[Z];if($===!1)continue;Q.push("#define "+Z+" "+$)}return Q.join(`
`)}function E1(J,Q){let Z={},$=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<$;W++){let H=J.getActiveAttrib(Q,W),Y=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;Z[Y]={type:H.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return Z}function m6(J){return J!==""}function aH(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function rH(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function N$(J){return J.replace(q1,O1)}var N1=new Map;function O1(J,Q){let Z=xJ[Q];if(Z===void 0){let $=N1.get(Q);if($!==void 0)Z=xJ[$],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,$);else throw Error("Can not resolve #include <"+Q+">")}return N$(Z)}var F1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tH(J){return J.replace(F1,R1)}function R1(J,Q,Z,$){let W="";for(let H=parseInt(Q);H<parseInt(Z);H++)W+=$.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function eH(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function k1(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===eQ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===wW)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===k8)Q="SHADOWMAP_TYPE_VSM";return Q}function D1(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case u9:case E9:Q="ENVMAP_TYPE_CUBE";break;case I6:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function M1(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case E9:Q="ENVMAP_MODE_REFRACTION";break}return Q}function L1(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case sW:Q="ENVMAP_BLENDING_MULTIPLY";break;case iW:Q="ENVMAP_BLENDING_MIX";break;case oW:Q="ENVMAP_BLENDING_ADD";break}return Q}function V1(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,$=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:$,maxMip:Z}}function z1(J,Q,Z,$){let W=J.getContext(),H=Z.defines,Y=Z.vertexShader,X=Z.fragmentShader,K=k1(Z),U=D1(Z),G=M1(Z),E=L1(Z),q=V1(Z),F=U1(Z),D=G1(H),k=W.createProgram(),O,N,B=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,D].filter(m6).join(`
`),O.length>0)O+=`
`;if(N=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,D].filter(m6).join(`
`),N.length>0)N+=`
`}else O=[eH(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,D,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+K:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(m6).join(`
`),N=[eH(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,D,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+U:"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+K:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==A8?"#define TONE_MAPPING":"",Z.toneMapping!==A8?xJ.tonemapping_pars_fragment:"",Z.toneMapping!==A8?X1("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",xJ.colorspace_pars_fragment,Y1("linearToOutputTexel",Z.outputColorSpace),K1(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(m6).join(`
`);if(Y=N$(Y),Y=aH(Y,Z),Y=rH(Y,Z),X=N$(X),X=aH(X,Z),X=rH(X,Z),Y=tH(Y),X=tH(X),Z.isRawShaderMaterial!==!0)B=`#version 300 es
`,O=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,N=["#define varying in",Z.glslVersion===gZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===gZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+N;let M=B+O+Y,I=B+N+X,P=sH(W,W.VERTEX_SHADER,M),_=sH(W,W.FRAGMENT_SHADER,I);if(W.attachShader(k,P),W.attachShader(k,_),Z.index0AttributeName!==void 0)W.bindAttribLocation(k,0,Z.index0AttributeName);else if(Z.morphTargets===!0)W.bindAttribLocation(k,0,"position");W.linkProgram(k);function w(j){if(J.debug.checkShaderErrors){let g=W.getProgramInfoLog(k).trim(),c=W.getShaderInfoLog(P).trim(),u=W.getShaderInfoLog(_).trim(),o=!0,d=!0;if(W.getProgramParameter(k,W.LINK_STATUS)===!1)if(o=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,k,P,_);else{let t=oH(W,P,"vertex"),p=oH(W,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(k,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+g+`
`+t+`
`+p)}else if(g!=="")console.warn("THREE.WebGLProgram: Program Info Log:",g);else if(c===""||u==="")d=!1;if(d)j.diagnostics={runnable:o,programLog:g,vertexShader:{log:c,prefix:O},fragmentShader:{log:u,prefix:N}}}W.deleteShader(P),W.deleteShader(_),f=new u6(W,k),V=E1(W,k)}let f;this.getUniforms=function(){if(f===void 0)w(this);return f};let V;this.getAttributes=function(){if(V===void 0)w(this);return V};let z=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(z===!1)z=W.getProgramParameter(k,Z1);return z},this.destroy=function(){$.releaseStatesOfProgram(this),W.deleteProgram(k),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=$1++,this.cacheKey=Q,this.usedTimes=1,this.program=k,this.vertexShader=P,this.fragmentShader=_,this}var B1=0;class EY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:Z}=J,$=this._getShaderStage(Q),W=this._getShaderStage(Z),H=this._getShaderCacheForMaterial(J);if(H.has($)===!1)H.add($),$.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new qY(J),Q.set(J,Z);return Z}}class qY{constructor(J){this.id=B1++,this.code=J,this.usedTimes=0}}function _1(J,Q,Z,$,W,H,Y){let X=new v6,K=new EY,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,F=W.precision,D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(V){if(U.add(V),V===0)return"uv";return`uv${V}`}function O(V,z,j,g,c){let u=g.fog,o=c.geometry,d=V.isMeshStandardMaterial?g.environment:null,t=(V.isMeshStandardMaterial?Z:Q).get(V.envMap||d),p=!!t&&t.mapping===I6?t.image.height:null,KJ=D[V.type];if(V.precision!==null){if(F=W.getMaxPrecision(V.precision),F!==V.precision)console.warn("THREE.WebGLProgram.getParameters:",V.precision,"not supported, using",F,"instead.")}let UJ=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,jJ=UJ!==void 0?UJ.length:0,dJ=0;if(o.morphAttributes.position!==void 0)dJ=1;if(o.morphAttributes.normal!==void 0)dJ=2;if(o.morphAttributes.color!==void 0)dJ=3;let n,ZJ,zJ,PJ;if(KJ){let rJ=M8[KJ];n=rJ.vertexShader,ZJ=rJ.fragmentShader}else n=V.vertexShader,ZJ=V.fragmentShader,K.update(V),zJ=K.getVertexShaderID(V),PJ=K.getFragmentShaderID(V);let XJ=J.getRenderTarget(),fJ=J.state.buffers.depth.getReversed(),gJ=c.isInstancedMesh===!0,cJ=c.isBatchedMesh===!0,K0=!!V.map,oJ=!!V.matcap,T=!!t,S0=!!V.aoMap,aJ=!!V.lightMap,$0=!!V.bumpMap,kJ=!!V.normalMap,W0=!!V.displacementMap,NJ=!!V.emissiveMap,bJ=!!V.metalnessMap,w0=!!V.roughnessMap,D0=V.anisotropy>0,C=V.clearcoat>0,R=V.dispersion>0,h=V.iridescence>0,m=V.sheen>0,i=V.transmission>0,l=D0&&!!V.anisotropyMap,LJ=C&&!!V.clearcoatMap,QJ=C&&!!V.clearcoatNormalMap,RJ=C&&!!V.clearcoatRoughnessMap,DJ=h&&!!V.iridescenceMap,e=h&&!!V.iridescenceThicknessMap,GJ=m&&!!V.sheenColorMap,IJ=m&&!!V.sheenRoughnessMap,MJ=!!V.specularMap,HJ=!!V.specularColorMap,hJ=!!V.specularIntensityMap,S=i&&!!V.transmissionMap,JJ=i&&!!V.thicknessMap,$J=!!V.gradientMap,qJ=!!V.alphaMap,a=V.alphaTest>0,s=!!V.alphaHash,FJ=!!V.extensions,vJ=A8;if(V.toneMapped){if(XJ===null||XJ.isXRRenderTarget===!0)vJ=J.toneMapping}let H0={shaderID:KJ,shaderType:V.type,shaderName:V.name,vertexShader:n,fragmentShader:ZJ,defines:V.defines,customVertexShaderID:zJ,customFragmentShaderID:PJ,isRawShaderMaterial:V.isRawShaderMaterial===!0,glslVersion:V.glslVersion,precision:F,batching:cJ,batchingColor:cJ&&c._colorsTexture!==null,instancing:gJ,instancingColor:gJ&&c.instanceColor!==null,instancingMorph:gJ&&c.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:XJ===null?J.outputColorSpace:XJ.isXRRenderTarget===!0?XJ.texture.colorSpace:h0,alphaToCoverage:!!V.alphaToCoverage,map:K0,matcap:oJ,envMap:T,envMapMode:T&&t.mapping,envMapCubeUVHeight:p,aoMap:S0,lightMap:aJ,bumpMap:$0,normalMap:kJ,displacementMap:q&&W0,emissiveMap:NJ,normalMapObjectSpace:kJ&&V.normalMapType===qH,normalMapTangentSpace:kJ&&V.normalMapType===EH,metalnessMap:bJ,roughnessMap:w0,anisotropy:D0,anisotropyMap:l,clearcoat:C,clearcoatMap:LJ,clearcoatNormalMap:QJ,clearcoatRoughnessMap:RJ,dispersion:R,iridescence:h,iridescenceMap:DJ,iridescenceThicknessMap:e,sheen:m,sheenColorMap:GJ,sheenRoughnessMap:IJ,specularMap:MJ,specularColorMap:HJ,specularIntensityMap:hJ,transmission:i,transmissionMap:S,thicknessMap:JJ,gradientMap:$J,opaque:V.transparent===!1&&V.blending===C6&&V.alphaToCoverage===!1,alphaMap:qJ,alphaTest:a,alphaHash:s,combine:V.combine,mapUv:K0&&k(V.map.channel),aoMapUv:S0&&k(V.aoMap.channel),lightMapUv:aJ&&k(V.lightMap.channel),bumpMapUv:$0&&k(V.bumpMap.channel),normalMapUv:kJ&&k(V.normalMap.channel),displacementMapUv:W0&&k(V.displacementMap.channel),emissiveMapUv:NJ&&k(V.emissiveMap.channel),metalnessMapUv:bJ&&k(V.metalnessMap.channel),roughnessMapUv:w0&&k(V.roughnessMap.channel),anisotropyMapUv:l&&k(V.anisotropyMap.channel),clearcoatMapUv:LJ&&k(V.clearcoatMap.channel),clearcoatNormalMapUv:QJ&&k(V.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:RJ&&k(V.clearcoatRoughnessMap.channel),iridescenceMapUv:DJ&&k(V.iridescenceMap.channel),iridescenceThicknessMapUv:e&&k(V.iridescenceThicknessMap.channel),sheenColorMapUv:GJ&&k(V.sheenColorMap.channel),sheenRoughnessMapUv:IJ&&k(V.sheenRoughnessMap.channel),specularMapUv:MJ&&k(V.specularMap.channel),specularColorMapUv:HJ&&k(V.specularColorMap.channel),specularIntensityMapUv:hJ&&k(V.specularIntensityMap.channel),transmissionMapUv:S&&k(V.transmissionMap.channel),thicknessMapUv:JJ&&k(V.thicknessMap.channel),alphaMapUv:qJ&&k(V.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(kJ||D0),vertexColors:V.vertexColors,vertexAlphas:V.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:c.isPoints===!0&&!!o.attributes.uv&&(K0||qJ),fog:!!u,useFog:V.fog===!0,fogExp2:!!u&&u.isFogExp2,flatShading:V.flatShading===!0&&V.wireframe===!1,sizeAttenuation:V.sizeAttenuation===!0,logarithmicDepthBuffer:E,reverseDepthBuffer:fJ,skinning:c.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:jJ,morphTextureStride:dJ,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:V.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:vJ,decodeVideoTexture:K0&&V.map.isVideoTexture===!0&&uJ.getTransfer(V.map.colorSpace)===X0,decodeVideoTextureEmissive:NJ&&V.emissiveMap.isVideoTexture===!0&&uJ.getTransfer(V.emissiveMap.colorSpace)===X0,premultipliedAlpha:V.premultipliedAlpha,doubleSided:V.side===$8,flipSided:V.side===f0,useDepthPacking:V.depthPacking>=0,depthPacking:V.depthPacking||0,index0AttributeName:V.index0AttributeName,extensionClipCullDistance:FJ&&V.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(FJ&&V.extensions.multiDraw===!0||cJ)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:V.customProgramCacheKey()};return H0.vertexUv1s=U.has(1),H0.vertexUv2s=U.has(2),H0.vertexUv3s=U.has(3),U.clear(),H0}function N(V){let z=[];if(V.shaderID)z.push(V.shaderID);else z.push(V.customVertexShaderID),z.push(V.customFragmentShaderID);if(V.defines!==void 0)for(let j in V.defines)z.push(j),z.push(V.defines[j]);if(V.isRawShaderMaterial===!1)B(z,V),M(z,V),z.push(J.outputColorSpace);return z.push(V.customProgramCacheKey),z.join()}function B(V,z){V.push(z.precision),V.push(z.outputColorSpace),V.push(z.envMapMode),V.push(z.envMapCubeUVHeight),V.push(z.mapUv),V.push(z.alphaMapUv),V.push(z.lightMapUv),V.push(z.aoMapUv),V.push(z.bumpMapUv),V.push(z.normalMapUv),V.push(z.displacementMapUv),V.push(z.emissiveMapUv),V.push(z.metalnessMapUv),V.push(z.roughnessMapUv),V.push(z.anisotropyMapUv),V.push(z.clearcoatMapUv),V.push(z.clearcoatNormalMapUv),V.push(z.clearcoatRoughnessMapUv),V.push(z.iridescenceMapUv),V.push(z.iridescenceThicknessMapUv),V.push(z.sheenColorMapUv),V.push(z.sheenRoughnessMapUv),V.push(z.specularMapUv),V.push(z.specularColorMapUv),V.push(z.specularIntensityMapUv),V.push(z.transmissionMapUv),V.push(z.thicknessMapUv),V.push(z.combine),V.push(z.fogExp2),V.push(z.sizeAttenuation),V.push(z.morphTargetsCount),V.push(z.morphAttributeCount),V.push(z.numDirLights),V.push(z.numPointLights),V.push(z.numSpotLights),V.push(z.numSpotLightMaps),V.push(z.numHemiLights),V.push(z.numRectAreaLights),V.push(z.numDirLightShadows),V.push(z.numPointLightShadows),V.push(z.numSpotLightShadows),V.push(z.numSpotLightShadowsWithMaps),V.push(z.numLightProbes),V.push(z.shadowMapType),V.push(z.toneMapping),V.push(z.numClippingPlanes),V.push(z.numClipIntersection),V.push(z.depthPacking)}function M(V,z){if(X.disableAll(),z.supportsVertexTextures)X.enable(0);if(z.instancing)X.enable(1);if(z.instancingColor)X.enable(2);if(z.instancingMorph)X.enable(3);if(z.matcap)X.enable(4);if(z.envMap)X.enable(5);if(z.normalMapObjectSpace)X.enable(6);if(z.normalMapTangentSpace)X.enable(7);if(z.clearcoat)X.enable(8);if(z.iridescence)X.enable(9);if(z.alphaTest)X.enable(10);if(z.vertexColors)X.enable(11);if(z.vertexAlphas)X.enable(12);if(z.vertexUv1s)X.enable(13);if(z.vertexUv2s)X.enable(14);if(z.vertexUv3s)X.enable(15);if(z.vertexTangents)X.enable(16);if(z.anisotropy)X.enable(17);if(z.alphaHash)X.enable(18);if(z.batching)X.enable(19);if(z.dispersion)X.enable(20);if(z.batchingColor)X.enable(21);if(z.gradientMap)X.enable(22);if(V.push(X.mask),X.disableAll(),z.fog)X.enable(0);if(z.useFog)X.enable(1);if(z.flatShading)X.enable(2);if(z.logarithmicDepthBuffer)X.enable(3);if(z.reverseDepthBuffer)X.enable(4);if(z.skinning)X.enable(5);if(z.morphTargets)X.enable(6);if(z.morphNormals)X.enable(7);if(z.morphColors)X.enable(8);if(z.premultipliedAlpha)X.enable(9);if(z.shadowMapEnabled)X.enable(10);if(z.doubleSided)X.enable(11);if(z.flipSided)X.enable(12);if(z.useDepthPacking)X.enable(13);if(z.dithering)X.enable(14);if(z.transmission)X.enable(15);if(z.sheen)X.enable(16);if(z.opaque)X.enable(17);if(z.pointsUvs)X.enable(18);if(z.decodeVideoTexture)X.enable(19);if(z.decodeVideoTextureEmissive)X.enable(20);if(z.alphaToCoverage)X.enable(21);V.push(X.mask)}function I(V){let z=D[V.type],j;if(z){let g=M8[z];j=wH.clone(g.uniforms)}else j=V.uniforms;return j}function P(V,z){let j;for(let g=0,c=G.length;g<c;g++){let u=G[g];if(u.cacheKey===z){j=u,++j.usedTimes;break}}if(j===void 0)j=new z1(J,z,V,H),G.push(j);return j}function _(V){if(--V.usedTimes===0){let z=G.indexOf(V);G[z]=G[G.length-1],G.pop(),V.destroy()}}function w(V){K.remove(V)}function f(){K.dispose()}return{getParameters:O,getProgramCacheKey:N,getUniforms:I,acquireProgram:P,releaseProgram:_,releaseShaderCache:w,programs:G,dispose:f}}function C1(){let J=new WeakMap;function Q(Y){return J.has(Y)}function Z(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function $(Y){J.delete(Y)}function W(Y,X,K){J.get(Y)[X]=K}function H(){J=new WeakMap}return{has:Q,get:Z,remove:$,update:W,dispose:H}}function w1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function JY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function QY(){let J=[],Q=0,Z=[],$=[],W=[];function H(){Q=0,Z.length=0,$.length=0,W.length=0}function Y(E,q,F,D,k,O){let N=J[Q];if(N===void 0)N={id:E.id,object:E,geometry:q,material:F,groupOrder:D,renderOrder:E.renderOrder,z:k,group:O},J[Q]=N;else N.id=E.id,N.object=E,N.geometry=q,N.material=F,N.groupOrder=D,N.renderOrder=E.renderOrder,N.z=k,N.group=O;return Q++,N}function X(E,q,F,D,k,O){let N=Y(E,q,F,D,k,O);if(F.transmission>0)$.push(N);else if(F.transparent===!0)W.push(N);else Z.push(N)}function K(E,q,F,D,k,O){let N=Y(E,q,F,D,k,O);if(F.transmission>0)$.unshift(N);else if(F.transparent===!0)W.unshift(N);else Z.unshift(N)}function U(E,q){if(Z.length>1)Z.sort(E||w1);if($.length>1)$.sort(q||JY);if(W.length>1)W.sort(q||JY)}function G(){for(let E=Q,q=J.length;E<q;E++){let F=J[E];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:Z,transmissive:$,transparent:W,init:H,push:X,unshift:K,finish:G,sort:U}}function I1(){let J=new WeakMap;function Q($,W){let H=J.get($),Y;if(H===void 0)Y=new QY,J.set($,[Y]);else if(W>=H.length)Y=new QY,H.push(Y);else Y=H[W];return Y}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function P1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={direction:new A,color:new VJ};break;case"SpotLight":Z={position:new A,direction:new A,color:new VJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new A,color:new VJ,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new A,skyColor:new VJ,groundColor:new VJ};break;case"RectAreaLight":Z={color:new VJ,position:new A,halfWidth:new A,halfHeight:new A};break}return J[Q.id]=Z,Z}}}function T1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wJ};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wJ};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wJ,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var A1=0;function S1(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function j1(J){let Q=new P1,Z=T1(),$={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)$.probe.push(new A);let W=new A,H=new AJ,Y=new AJ;function X(U){let G=0,E=0,q=0;for(let V=0;V<9;V++)$.probe[V].set(0,0,0);let F=0,D=0,k=0,O=0,N=0,B=0,M=0,I=0,P=0,_=0,w=0;U.sort(S1);for(let V=0,z=U.length;V<z;V++){let j=U[V],g=j.color,c=j.intensity,u=j.distance,o=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)G+=g.r*c,E+=g.g*c,q+=g.b*c;else if(j.isLightProbe){for(let d=0;d<9;d++)$.probe[d].addScaledVector(j.sh.coefficients[d],c);w++}else if(j.isDirectionalLight){let d=Q.get(j);if(d.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let t=j.shadow,p=Z.get(j);p.shadowIntensity=t.intensity,p.shadowBias=t.bias,p.shadowNormalBias=t.normalBias,p.shadowRadius=t.radius,p.shadowMapSize=t.mapSize,$.directionalShadow[F]=p,$.directionalShadowMap[F]=o,$.directionalShadowMatrix[F]=j.shadow.matrix,B++}$.directional[F]=d,F++}else if(j.isSpotLight){let d=Q.get(j);d.position.setFromMatrixPosition(j.matrixWorld),d.color.copy(g).multiplyScalar(c),d.distance=u,d.coneCos=Math.cos(j.angle),d.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),d.decay=j.decay,$.spot[k]=d;let t=j.shadow;if(j.map){if($.spotLightMap[P]=j.map,P++,t.updateMatrices(j),j.castShadow)_++}if($.spotLightMatrix[k]=t.matrix,j.castShadow){let p=Z.get(j);p.shadowIntensity=t.intensity,p.shadowBias=t.bias,p.shadowNormalBias=t.normalBias,p.shadowRadius=t.radius,p.shadowMapSize=t.mapSize,$.spotShadow[k]=p,$.spotShadowMap[k]=o,I++}k++}else if(j.isRectAreaLight){let d=Q.get(j);d.color.copy(g).multiplyScalar(c),d.halfWidth.set(j.width*0.5,0,0),d.halfHeight.set(0,j.height*0.5,0),$.rectArea[O]=d,O++}else if(j.isPointLight){let d=Q.get(j);if(d.color.copy(j.color).multiplyScalar(j.intensity),d.distance=j.distance,d.decay=j.decay,j.castShadow){let t=j.shadow,p=Z.get(j);p.shadowIntensity=t.intensity,p.shadowBias=t.bias,p.shadowNormalBias=t.normalBias,p.shadowRadius=t.radius,p.shadowMapSize=t.mapSize,p.shadowCameraNear=t.camera.near,p.shadowCameraFar=t.camera.far,$.pointShadow[D]=p,$.pointShadowMap[D]=o,$.pointShadowMatrix[D]=j.shadow.matrix,M++}$.point[D]=d,D++}else if(j.isHemisphereLight){let d=Q.get(j);d.skyColor.copy(j.color).multiplyScalar(c),d.groundColor.copy(j.groundColor).multiplyScalar(c),$.hemi[N]=d,N++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)$.rectAreaLTC1=WJ.LTC_FLOAT_1,$.rectAreaLTC2=WJ.LTC_FLOAT_2;else $.rectAreaLTC1=WJ.LTC_HALF_1,$.rectAreaLTC2=WJ.LTC_HALF_2;$.ambient[0]=G,$.ambient[1]=E,$.ambient[2]=q;let f=$.hash;if(f.directionalLength!==F||f.pointLength!==D||f.spotLength!==k||f.rectAreaLength!==O||f.hemiLength!==N||f.numDirectionalShadows!==B||f.numPointShadows!==M||f.numSpotShadows!==I||f.numSpotMaps!==P||f.numLightProbes!==w)$.directional.length=F,$.spot.length=k,$.rectArea.length=O,$.point.length=D,$.hemi.length=N,$.directionalShadow.length=B,$.directionalShadowMap.length=B,$.pointShadow.length=M,$.pointShadowMap.length=M,$.spotShadow.length=I,$.spotShadowMap.length=I,$.directionalShadowMatrix.length=B,$.pointShadowMatrix.length=M,$.spotLightMatrix.length=I+P-_,$.spotLightMap.length=P,$.numSpotLightShadowsWithMaps=_,$.numLightProbes=w,f.directionalLength=F,f.pointLength=D,f.spotLength=k,f.rectAreaLength=O,f.hemiLength=N,f.numDirectionalShadows=B,f.numPointShadows=M,f.numSpotShadows=I,f.numSpotMaps=P,f.numLightProbes=w,$.version=A1++}function K(U,G){let E=0,q=0,F=0,D=0,k=0,O=G.matrixWorldInverse;for(let N=0,B=U.length;N<B;N++){let M=U[N];if(M.isDirectionalLight){let I=$.directional[E];I.direction.setFromMatrixPosition(M.matrixWorld),W.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(O),E++}else if(M.isSpotLight){let I=$.spot[F];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(O),I.direction.setFromMatrixPosition(M.matrixWorld),W.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(O),F++}else if(M.isRectAreaLight){let I=$.rectArea[D];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(O),Y.identity(),H.copy(M.matrixWorld),H.premultiply(O),Y.extractRotation(H),I.halfWidth.set(M.width*0.5,0,0),I.halfHeight.set(0,M.height*0.5,0),I.halfWidth.applyMatrix4(Y),I.halfHeight.applyMatrix4(Y),D++}else if(M.isPointLight){let I=$.point[q];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(O),q++}else if(M.isHemisphereLight){let I=$.hemi[k];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(O),k++}}}return{setup:X,setupView:K,state:$}}function ZY(J){let Q=new j1(J),Z=[],$=[];function W(G){U.camera=G,Z.length=0,$.length=0}function H(G){Z.push(G)}function Y(G){$.push(G)}function X(){Q.setup(Z)}function K(G){Q.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:$,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:H,pushShadow:Y}}function v1(J){let Q=new WeakMap;function Z(W,H=0){let Y=Q.get(W),X;if(Y===void 0)X=new ZY(J),Q.set(W,[X]);else if(H>=Y.length)X=new ZY(J),Y.push(X);else X=Y[H];return X}function $(){Q=new WeakMap}return{get:Z,dispose:$}}var y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h1(J,Q,Z){let $=new g6,W=new wJ,H=new wJ,Y=new iJ,X=new iZ({depthPacking:GH}),K=new oZ,U={},G=Z.maxTextureSize,E={[n8]:f0,[f0]:n8,[$8]:$8},q=new a0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wJ},radius:{value:4}},vertexShader:y1,fragmentShader:f1}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let D=new C0;D.setAttribute("position",new O0(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new F0(D,q),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eQ;let N=this.type;this.render=function(_,w,f){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(_.length===0)return;let V=J.getRenderTarget(),z=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),g=J.state;g.setBlending(s8),g.buffers.color.setClear(1,1,1,1),g.buffers.depth.setTest(!0),g.setScissorTest(!1);let c=N!==k8&&this.type===k8,u=N===k8&&this.type!==k8;for(let o=0,d=_.length;o<d;o++){let t=_[o],p=t.shadow;if(p===void 0){console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;W.copy(p.mapSize);let KJ=p.getFrameExtents();if(W.multiply(KJ),H.copy(p.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/KJ.x),W.x=H.x*KJ.x,p.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/KJ.y),W.y=H.y*KJ.y,p.mapSize.y=H.y}if(p.map===null||c===!0||u===!0){let jJ=this.type!==k8?{minFilter:O8,magFilter:O8}:{};if(p.map!==null)p.map.dispose();p.map=new f8(W.x,W.y,jJ),p.map.texture.name=t.name+".shadowMap",p.camera.updateProjectionMatrix()}J.setRenderTarget(p.map),J.clear();let UJ=p.getViewportCount();for(let jJ=0;jJ<UJ;jJ++){let dJ=p.getViewport(jJ);Y.set(H.x*dJ.x,H.y*dJ.y,H.x*dJ.z,H.y*dJ.w),g.viewport(Y),p.updateMatrices(t,jJ),$=p.getFrustum(),I(w,f,p.camera,t,this.type)}if(p.isPointLightShadow!==!0&&this.type===k8)B(p,f);p.needsUpdate=!1}N=this.type,O.needsUpdate=!1,J.setRenderTarget(V,z,j)};function B(_,w){let f=Q.update(k);if(q.defines.VSM_SAMPLES!==_.blurSamples)q.defines.VSM_SAMPLES=_.blurSamples,F.defines.VSM_SAMPLES=_.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new f8(W.x,W.y);q.uniforms.shadow_pass.value=_.map.texture,q.uniforms.resolution.value=_.mapSize,q.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(w,null,f,q,k,null),F.uniforms.shadow_pass.value=_.mapPass.texture,F.uniforms.resolution.value=_.mapSize,F.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(w,null,f,F,k,null)}function M(_,w,f,V){let z=null,j=f.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(j!==void 0)z=j;else if(z=f.isPointLight===!0?K:X,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let g=z.uuid,c=w.uuid,u=U[g];if(u===void 0)u={},U[g]=u;let o=u[c];if(o===void 0)o=z.clone(),u[c]=o,w.addEventListener("dispose",P);z=o}if(z.visible=w.visible,z.wireframe=w.wireframe,V===k8)z.side=w.shadowSide!==null?w.shadowSide:w.side;else z.side=w.shadowSide!==null?w.shadowSide:E[w.side];if(z.alphaMap=w.alphaMap,z.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,z.map=w.map,z.clipShadows=w.clipShadows,z.clippingPlanes=w.clippingPlanes,z.clipIntersection=w.clipIntersection,z.displacementMap=w.displacementMap,z.displacementScale=w.displacementScale,z.displacementBias=w.displacementBias,z.wireframeLinewidth=w.wireframeLinewidth,z.linewidth=w.linewidth,f.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let g=J.properties.get(z);g.light=f}return z}function I(_,w,f,V,z){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&z===k8)&&(!_.frustumCulled||$.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,_.matrixWorld);let c=Q.update(_),u=_.material;if(Array.isArray(u)){let o=c.groups;for(let d=0,t=o.length;d<t;d++){let p=o[d],KJ=u[p.materialIndex];if(KJ&&KJ.visible){let UJ=M(_,KJ,V,z);_.onBeforeShadow(J,_,w,f,c,UJ,p),J.renderBufferDirect(f,null,c,UJ,_,p),_.onAfterShadow(J,_,w,f,c,UJ,p)}}}else if(u.visible){let o=M(_,u,V,z);_.onBeforeShadow(J,_,w,f,c,o,null),J.renderBufferDirect(f,null,c,o,_,null),_.onAfterShadow(J,_,w,f,c,o,null)}}}let g=_.children;for(let c=0,u=g.length;c<u;c++)I(g[c],w,f,V,z)}function P(_){_.target.removeEventListener("dispose",P);for(let f in U){let V=U[f],z=_.target.uuid;if(z in V)V[z].dispose(),delete V[z]}}}var x1={[w7]:m9,[I7]:A7,[P7]:S7,[w6]:T7,[m9]:w7,[A7]:I7,[S7]:P7,[T7]:w6};function b1(J,Q){function Z(){let S=!1,JJ=new iJ,$J=null,qJ=new iJ(0,0,0,0);return{setMask:function(a){if($J!==a&&!S)J.colorMask(a,a,a,a),$J=a},setLocked:function(a){S=a},setClear:function(a,s,FJ,vJ,H0){if(H0===!0)a*=vJ,s*=vJ,FJ*=vJ;if(JJ.set(a,s,FJ,vJ),qJ.equals(JJ)===!1)J.clearColor(a,s,FJ,vJ),qJ.copy(JJ)},reset:function(){S=!1,$J=null,qJ.set(-1,0,0,0)}}}function $(){let S=!1,JJ=!1,$J=null,qJ=null,a=null;return{setReversed:function(s){if(JJ!==s){let FJ=Q.get("EXT_clip_control");if(s)FJ.clipControlEXT(FJ.LOWER_LEFT_EXT,FJ.ZERO_TO_ONE_EXT);else FJ.clipControlEXT(FJ.LOWER_LEFT_EXT,FJ.NEGATIVE_ONE_TO_ONE_EXT);JJ=s;let vJ=a;a=null,this.setClear(vJ)}},getReversed:function(){return JJ},setTest:function(s){if(s)XJ(J.DEPTH_TEST);else fJ(J.DEPTH_TEST)},setMask:function(s){if($J!==s&&!S)J.depthMask(s),$J=s},setFunc:function(s){if(JJ)s=x1[s];if(qJ!==s){switch(s){case w7:J.depthFunc(J.NEVER);break;case m9:J.depthFunc(J.ALWAYS);break;case I7:J.depthFunc(J.LESS);break;case w6:J.depthFunc(J.LEQUAL);break;case P7:J.depthFunc(J.EQUAL);break;case T7:J.depthFunc(J.GEQUAL);break;case A7:J.depthFunc(J.GREATER);break;case S7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}qJ=s}},setLocked:function(s){S=s},setClear:function(s){if(a!==s){if(JJ)s=1-s;J.clearDepth(s),a=s}},reset:function(){S=!1,$J=null,qJ=null,a=null,JJ=!1}}}function W(){let S=!1,JJ=null,$J=null,qJ=null,a=null,s=null,FJ=null,vJ=null,H0=null;return{setTest:function(rJ){if(!S)if(rJ)XJ(J.STENCIL_TEST);else fJ(J.STENCIL_TEST)},setMask:function(rJ){if(JJ!==rJ&&!S)J.stencilMask(rJ),JJ=rJ},setFunc:function(rJ,L8,F8){if($J!==rJ||qJ!==L8||a!==F8)J.stencilFunc(rJ,L8,F8),$J=rJ,qJ=L8,a=F8},setOp:function(rJ,L8,F8){if(s!==rJ||FJ!==L8||vJ!==F8)J.stencilOp(rJ,L8,F8),s=rJ,FJ=L8,vJ=F8},setLocked:function(rJ){S=rJ},setClear:function(rJ){if(H0!==rJ)J.clearStencil(rJ),H0=rJ},reset:function(){S=!1,JJ=null,$J=null,qJ=null,a=null,s=null,FJ=null,vJ=null,H0=null}}}let H=new Z,Y=new $,X=new W,K=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,F=[],D=null,k=!1,O=null,N=null,B=null,M=null,I=null,P=null,_=null,w=new VJ(0,0,0),f=0,V=!1,z=null,j=null,g=null,c=null,u=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,t=0,p=J.getParameter(J.VERSION);if(p.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(p)[1]),d=t>=1;else if(p.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(p)[1]),d=t>=2;let KJ=null,UJ={},jJ=J.getParameter(J.SCISSOR_BOX),dJ=J.getParameter(J.VIEWPORT),n=new iJ().fromArray(jJ),ZJ=new iJ().fromArray(dJ);function zJ(S,JJ,$J,qJ){let a=new Uint8Array(4),s=J.createTexture();J.bindTexture(S,s),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let FJ=0;FJ<$J;FJ++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D(JJ,0,J.RGBA,1,1,qJ,0,J.RGBA,J.UNSIGNED_BYTE,a);else J.texImage2D(JJ+FJ,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,a);return s}let PJ={};PJ[J.TEXTURE_2D]=zJ(J.TEXTURE_2D,J.TEXTURE_2D,1),PJ[J.TEXTURE_CUBE_MAP]=zJ(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),PJ[J.TEXTURE_2D_ARRAY]=zJ(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),PJ[J.TEXTURE_3D]=zJ(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),XJ(J.DEPTH_TEST),Y.setFunc(w6),$0(!1),kJ(tQ),XJ(J.CULL_FACE),S0(s8);function XJ(S){if(G[S]!==!0)J.enable(S),G[S]=!0}function fJ(S){if(G[S]!==!1)J.disable(S),G[S]=!1}function gJ(S,JJ){if(E[S]!==JJ){if(J.bindFramebuffer(S,JJ),E[S]=JJ,S===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=JJ;if(S===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=JJ;return!0}return!1}function cJ(S,JJ){let $J=F,qJ=!1;if(S){if($J=q.get(JJ),$J===void 0)$J=[],q.set(JJ,$J);let a=S.textures;if($J.length!==a.length||$J[0]!==J.COLOR_ATTACHMENT0){for(let s=0,FJ=a.length;s<FJ;s++)$J[s]=J.COLOR_ATTACHMENT0+s;$J.length=a.length,qJ=!0}}else if($J[0]!==J.BACK)$J[0]=J.BACK,qJ=!0;if(qJ)J.drawBuffers($J)}function K0(S){if(D!==S)return J.useProgram(S),D=S,!0;return!1}let oJ={[d9]:J.FUNC_ADD,[PW]:J.FUNC_SUBTRACT,[TW]:J.FUNC_REVERSE_SUBTRACT};oJ[AW]=J.MIN,oJ[SW]=J.MAX;let T={[jW]:J.ZERO,[vW]:J.ONE,[yW]:J.SRC_COLOR,[hW]:J.SRC_ALPHA,[dW]:J.SRC_ALPHA_SATURATE,[pW]:J.DST_COLOR,[bW]:J.DST_ALPHA,[fW]:J.ONE_MINUS_SRC_COLOR,[xW]:J.ONE_MINUS_SRC_ALPHA,[lW]:J.ONE_MINUS_DST_COLOR,[gW]:J.ONE_MINUS_DST_ALPHA,[mW]:J.CONSTANT_COLOR,[uW]:J.ONE_MINUS_CONSTANT_COLOR,[cW]:J.CONSTANT_ALPHA,[nW]:J.ONE_MINUS_CONSTANT_ALPHA};function S0(S,JJ,$J,qJ,a,s,FJ,vJ,H0,rJ){if(S===s8){if(k===!0)fJ(J.BLEND),k=!1;return}if(k===!1)XJ(J.BLEND),k=!0;if(S!==IW){if(S!==O||rJ!==V){if(N!==d9||I!==d9)J.blendEquation(J.FUNC_ADD),N=d9,I=d9;if(rJ)switch(S){case C6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case JZ:J.blendFunc(J.ONE,J.ONE);break;case QZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case ZZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case C6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case JZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case QZ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ZZ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}B=null,M=null,P=null,_=null,w.set(0,0,0),f=0,O=S,V=rJ}return}if(a=a||JJ,s=s||$J,FJ=FJ||qJ,JJ!==N||a!==I)J.blendEquationSeparate(oJ[JJ],oJ[a]),N=JJ,I=a;if($J!==B||qJ!==M||s!==P||FJ!==_)J.blendFuncSeparate(T[$J],T[qJ],T[s],T[FJ]),B=$J,M=qJ,P=s,_=FJ;if(vJ.equals(w)===!1||H0!==f)J.blendColor(vJ.r,vJ.g,vJ.b,H0),w.copy(vJ),f=H0;O=S,V=!1}function aJ(S,JJ){S.side===$8?fJ(J.CULL_FACE):XJ(J.CULL_FACE);let $J=S.side===f0;if(JJ)$J=!$J;$0($J),S.blending===C6&&S.transparent===!1?S0(s8):S0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),Y.setFunc(S.depthFunc),Y.setTest(S.depthTest),Y.setMask(S.depthWrite),H.setMask(S.colorWrite);let qJ=S.stencilWrite;if(X.setTest(qJ),qJ)X.setMask(S.stencilWriteMask),X.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),X.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);NJ(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?XJ(J.SAMPLE_ALPHA_TO_COVERAGE):fJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function $0(S){if(z!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);z=S}}function kJ(S){if(S!==_W){if(XJ(J.CULL_FACE),S!==j)if(S===tQ)J.cullFace(J.BACK);else if(S===CW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else fJ(J.CULL_FACE);j=S}function W0(S){if(S!==g){if(d)J.lineWidth(S);g=S}}function NJ(S,JJ,$J){if(S){if(XJ(J.POLYGON_OFFSET_FILL),c!==JJ||u!==$J)J.polygonOffset(JJ,$J),c=JJ,u=$J}else fJ(J.POLYGON_OFFSET_FILL)}function bJ(S){if(S)XJ(J.SCISSOR_TEST);else fJ(J.SCISSOR_TEST)}function w0(S){if(S===void 0)S=J.TEXTURE0+o-1;if(KJ!==S)J.activeTexture(S),KJ=S}function D0(S,JJ,$J){if($J===void 0)if(KJ===null)$J=J.TEXTURE0+o-1;else $J=KJ;let qJ=UJ[$J];if(qJ===void 0)qJ={type:void 0,texture:void 0},UJ[$J]=qJ;if(qJ.type!==S||qJ.texture!==JJ){if(KJ!==$J)J.activeTexture($J),KJ=$J;J.bindTexture(S,JJ||PJ[S]),qJ.type=S,qJ.texture=JJ}}function C(){let S=UJ[KJ];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function R(){try{J.compressedTexImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function h(){try{J.compressedTexImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function m(){try{J.texSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function i(){try{J.texSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function LJ(){try{J.compressedTexSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function QJ(){try{J.texStorage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function RJ(){try{J.texStorage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function DJ(){try{J.texImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function e(){try{J.texImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function GJ(S){if(n.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),n.copy(S)}function IJ(S){if(ZJ.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),ZJ.copy(S)}function MJ(S,JJ){let $J=U.get(JJ);if($J===void 0)$J=new WeakMap,U.set(JJ,$J);let qJ=$J.get(S);if(qJ===void 0)qJ=J.getUniformBlockIndex(JJ,S.name),$J.set(S,qJ)}function HJ(S,JJ){let qJ=U.get(JJ).get(S);if(K.get(JJ)!==qJ)J.uniformBlockBinding(JJ,qJ,S.__bindingPointIndex),K.set(JJ,qJ)}function hJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},KJ=null,UJ={},E={},q=new WeakMap,F=[],D=null,k=!1,O=null,N=null,B=null,M=null,I=null,P=null,_=null,w=new VJ(0,0,0),f=0,V=!1,z=null,j=null,g=null,c=null,u=null,n.set(0,0,J.canvas.width,J.canvas.height),ZJ.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),X.reset()}return{buffers:{color:H,depth:Y,stencil:X},enable:XJ,disable:fJ,bindFramebuffer:gJ,drawBuffers:cJ,useProgram:K0,setBlending:S0,setMaterial:aJ,setFlipSided:$0,setCullFace:kJ,setLineWidth:W0,setPolygonOffset:NJ,setScissorTest:bJ,activeTexture:w0,bindTexture:D0,unbindTexture:C,compressedTexImage2D:R,compressedTexImage3D:h,texImage2D:DJ,texImage3D:e,updateUBOMapping:MJ,uniformBlockBinding:HJ,texStorage2D:QJ,texStorage3D:RJ,texSubImage2D:m,texSubImage3D:i,compressedTexSubImage2D:l,compressedTexSubImage3D:LJ,scissor:GJ,viewport:IJ,reset:hJ}}function g1(J,Q,Z,$,W,H,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new wJ,G=new WeakMap,E,q=new WeakMap,F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function D(C,R){return F?new OffscreenCanvas(C,R):p9("canvas")}function k(C,R,h){let m=1,i=D0(C);if(i.width>h||i.height>h)m=h/Math.max(i.width,i.height);if(m<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let l=Math.floor(m*i.width),LJ=Math.floor(m*i.height);if(E===void 0)E=D(l,LJ);let QJ=R?D(l,LJ):E;return QJ.width=l,QJ.height=LJ,QJ.getContext("2d").drawImage(C,0,0,l,LJ),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+i.width+"x"+i.height+") to ("+l+"x"+LJ+")."),QJ}else{if("data"in C)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+i.width+"x"+i.height+").");return C}return C}function O(C){return C.generateMipmaps}function N(C){J.generateMipmap(C)}function B(C){if(C.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function M(C,R,h,m,i=!1){if(C!==null){if(J[C]!==void 0)return J[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let l=R;if(R===J.RED){if(h===J.FLOAT)l=J.R32F;if(h===J.HALF_FLOAT)l=J.R16F;if(h===J.UNSIGNED_BYTE)l=J.R8}if(R===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)l=J.R8UI;if(h===J.UNSIGNED_SHORT)l=J.R16UI;if(h===J.UNSIGNED_INT)l=J.R32UI;if(h===J.BYTE)l=J.R8I;if(h===J.SHORT)l=J.R16I;if(h===J.INT)l=J.R32I}if(R===J.RG){if(h===J.FLOAT)l=J.RG32F;if(h===J.HALF_FLOAT)l=J.RG16F;if(h===J.UNSIGNED_BYTE)l=J.RG8}if(R===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)l=J.RG8UI;if(h===J.UNSIGNED_SHORT)l=J.RG16UI;if(h===J.UNSIGNED_INT)l=J.RG32UI;if(h===J.BYTE)l=J.RG8I;if(h===J.SHORT)l=J.RG16I;if(h===J.INT)l=J.RG32I}if(R===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)l=J.RGB8UI;if(h===J.UNSIGNED_SHORT)l=J.RGB16UI;if(h===J.UNSIGNED_INT)l=J.RGB32UI;if(h===J.BYTE)l=J.RGB8I;if(h===J.SHORT)l=J.RGB16I;if(h===J.INT)l=J.RGB32I}if(R===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)l=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)l=J.RGBA16UI;if(h===J.UNSIGNED_INT)l=J.RGBA32UI;if(h===J.BYTE)l=J.RGBA8I;if(h===J.SHORT)l=J.RGBA16I;if(h===J.INT)l=J.RGBA32I}if(R===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)l=J.RGB9_E5}if(R===J.RGBA){let LJ=i?xZ:uJ.getTransfer(m);if(h===J.FLOAT)l=J.RGBA32F;if(h===J.HALF_FLOAT)l=J.RGBA16F;if(h===J.UNSIGNED_BYTE)l=LJ===X0?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)l=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)l=J.RGB5_A1}if(l===J.R16F||l===J.R32F||l===J.RG16F||l===J.RG32F||l===J.RGBA16F||l===J.RGBA32F)Q.get("EXT_color_buffer_float");return l}function I(C,R){let h;if(C){if(R===null||R===s9||R===i9)h=J.DEPTH24_STENCIL8;else if(R===o8)h=J.DEPTH32F_STENCIL8;else if(R===P6)h=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===s9||R===i9)h=J.DEPTH_COMPONENT24;else if(R===o8)h=J.DEPTH_COMPONENT32F;else if(R===P6)h=J.DEPTH_COMPONENT16;return h}function P(C,R){if(O(C)===!0||C.isFramebufferTexture&&C.minFilter!==O8&&C.minFilter!==i0)return Math.log2(Math.max(R.width,R.height))+1;else if(C.mipmaps!==void 0&&C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return R.mipmaps.length;else return 1}function _(C){let R=C.target;if(R.removeEventListener("dispose",_),f(R),R.isVideoTexture)G.delete(R)}function w(C){let R=C.target;R.removeEventListener("dispose",w),z(R)}function f(C){let R=$.get(C);if(R.__webglInit===void 0)return;let h=C.source,m=q.get(h);if(m){let i=m[R.__cacheKey];if(i.usedTimes--,i.usedTimes===0)V(C);if(Object.keys(m).length===0)q.delete(h)}$.remove(C)}function V(C){let R=$.get(C);J.deleteTexture(R.__webglTexture);let h=C.source,m=q.get(h);delete m[R.__cacheKey],Y.memory.textures--}function z(C){let R=$.get(C);if(C.depthTexture)C.depthTexture.dispose(),$.remove(C.depthTexture);if(C.isWebGLCubeRenderTarget)for(let m=0;m<6;m++){if(Array.isArray(R.__webglFramebuffer[m]))for(let i=0;i<R.__webglFramebuffer[m].length;i++)J.deleteFramebuffer(R.__webglFramebuffer[m][i]);else J.deleteFramebuffer(R.__webglFramebuffer[m]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[m])}else{if(Array.isArray(R.__webglFramebuffer))for(let m=0;m<R.__webglFramebuffer.length;m++)J.deleteFramebuffer(R.__webglFramebuffer[m]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let m=0;m<R.__webglColorRenderbuffer.length;m++)if(R.__webglColorRenderbuffer[m])J.deleteRenderbuffer(R.__webglColorRenderbuffer[m])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let h=C.textures;for(let m=0,i=h.length;m<i;m++){let l=$.get(h[m]);if(l.__webglTexture)J.deleteTexture(l.__webglTexture),Y.memory.textures--;$.remove(h[m])}$.remove(C)}let j=0;function g(){j=0}function c(){let C=j;if(C>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+W.maxTextures);return j+=1,C}function u(C){let R=[];return R.push(C.wrapS),R.push(C.wrapT),R.push(C.wrapR||0),R.push(C.magFilter),R.push(C.minFilter),R.push(C.anisotropy),R.push(C.internalFormat),R.push(C.format),R.push(C.type),R.push(C.generateMipmaps),R.push(C.premultiplyAlpha),R.push(C.flipY),R.push(C.unpackAlignment),R.push(C.colorSpace),R.join()}function o(C,R){let h=$.get(C);if(C.isVideoTexture)bJ(C);if(C.isRenderTargetTexture===!1&&C.version>0&&h.__version!==C.version){let m=C.image;if(m===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(m.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{PJ(h,C,R);return}}Z.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+R)}function d(C,R){let h=$.get(C);if(C.version>0&&h.__version!==C.version){PJ(h,C,R);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+R)}function t(C,R){let h=$.get(C);if(C.version>0&&h.__version!==C.version){PJ(h,C,R);return}Z.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+R)}function p(C,R){let h=$.get(C);if(C.version>0&&h.__version!==C.version){XJ(h,C,R);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+R)}let KJ={[c9]:J.REPEAT,[f7]:J.CLAMP_TO_EDGE,[h7]:J.MIRRORED_REPEAT},UJ={[O8]:J.NEAREST,[x7]:J.NEAREST_MIPMAP_NEAREST,[q9]:J.NEAREST_MIPMAP_LINEAR,[i0]:J.LINEAR,[n9]:J.LINEAR_MIPMAP_NEAREST,[S8]:J.LINEAR_MIPMAP_LINEAR},jJ={[NH]:J.NEVER,[MH]:J.ALWAYS,[OH]:J.LESS,[bZ]:J.LEQUAL,[FH]:J.EQUAL,[DH]:J.GEQUAL,[RH]:J.GREATER,[kH]:J.NOTEQUAL};function dJ(C,R){if(R.type===o8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===i0||R.magFilter===n9||R.magFilter===q9||R.magFilter===S8||R.minFilter===i0||R.minFilter===n9||R.minFilter===q9||R.minFilter===S8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(C,J.TEXTURE_WRAP_S,KJ[R.wrapS]),J.texParameteri(C,J.TEXTURE_WRAP_T,KJ[R.wrapT]),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,KJ[R.wrapR]);if(J.texParameteri(C,J.TEXTURE_MAG_FILTER,UJ[R.magFilter]),J.texParameteri(C,J.TEXTURE_MIN_FILTER,UJ[R.minFilter]),R.compareFunction)J.texParameteri(C,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(C,J.TEXTURE_COMPARE_FUNC,jJ[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===O8)return;if(R.minFilter!==q9&&R.minFilter!==S8)return;if(R.type===o8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||$.get(R).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(C,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),$.get(R).__currentAnisotropy=R.anisotropy}}}function n(C,R){let h=!1;if(C.__webglInit===void 0)C.__webglInit=!0,R.addEventListener("dispose",_);let m=R.source,i=q.get(m);if(i===void 0)i={},q.set(m,i);let l=u(R);if(l!==C.__cacheKey){if(i[l]===void 0)i[l]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,h=!0;i[l].usedTimes++;let LJ=i[C.__cacheKey];if(LJ!==void 0){if(i[C.__cacheKey].usedTimes--,LJ.usedTimes===0)V(R)}C.__cacheKey=l,C.__webglTexture=i[l].texture}return h}function ZJ(C,R,h){return Math.floor(Math.floor(C/h)/R)}function zJ(C,R,h,m){let l=C.updateRanges;if(l.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,h,m,R.data);else{l.sort((e,GJ)=>e.start-GJ.start);let LJ=0;for(let e=1;e<l.length;e++){let GJ=l[LJ],IJ=l[e],MJ=GJ.start+GJ.count,HJ=ZJ(IJ.start,R.width,4),hJ=ZJ(GJ.start,R.width,4);if(IJ.start<=MJ+1&&HJ===hJ&&ZJ(IJ.start+IJ.count-1,R.width,4)===HJ)GJ.count=Math.max(GJ.count,IJ.start+IJ.count-GJ.start);else++LJ,l[LJ]=IJ}l.length=LJ+1;let QJ=J.getParameter(J.UNPACK_ROW_LENGTH),RJ=J.getParameter(J.UNPACK_SKIP_PIXELS),DJ=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let e=0,GJ=l.length;e<GJ;e++){let IJ=l[e],MJ=Math.floor(IJ.start/4),HJ=Math.ceil(IJ.count/4),hJ=MJ%R.width,S=Math.floor(MJ/R.width),JJ=HJ,$J=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,hJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,S),Z.texSubImage2D(J.TEXTURE_2D,0,hJ,S,JJ,1,h,m,R.data)}C.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,QJ),J.pixelStorei(J.UNPACK_SKIP_PIXELS,RJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,DJ)}}function PJ(C,R,h){let m=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)m=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)m=J.TEXTURE_3D;let i=n(C,R),l=R.source;Z.bindTexture(m,C.__webglTexture,J.TEXTURE0+h);let LJ=$.get(l);if(l.version!==LJ.__version||i===!0){Z.activeTexture(J.TEXTURE0+h);let QJ=uJ.getPrimaries(uJ.workingColorSpace),RJ=R.colorSpace===j8?null:uJ.getPrimaries(R.colorSpace),DJ=R.colorSpace===j8||QJ===RJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,DJ);let e=k(R.image,!1,W.maxTextureSize);e=w0(R,e);let GJ=H.convert(R.format,R.colorSpace),IJ=H.convert(R.type),MJ=M(R.internalFormat,GJ,IJ,R.colorSpace,R.isVideoTexture);dJ(m,R);let HJ,hJ=R.mipmaps,S=R.isVideoTexture!==!0,JJ=LJ.__version===void 0||i===!0,$J=l.dataReady,qJ=P(R,e);if(R.isDepthTexture){if(MJ=I(R.format===A6,R.type),JJ)if(S)Z.texStorage2D(J.TEXTURE_2D,1,MJ,e.width,e.height);else Z.texImage2D(J.TEXTURE_2D,0,MJ,e.width,e.height,0,GJ,IJ,null)}else if(R.isDataTexture)if(hJ.length>0){if(S&&JJ)Z.texStorage2D(J.TEXTURE_2D,qJ,MJ,hJ[0].width,hJ[0].height);for(let a=0,s=hJ.length;a<s;a++)if(HJ=hJ[a],S){if($J)Z.texSubImage2D(J.TEXTURE_2D,a,0,0,HJ.width,HJ.height,GJ,IJ,HJ.data)}else Z.texImage2D(J.TEXTURE_2D,a,MJ,HJ.width,HJ.height,0,GJ,IJ,HJ.data);R.generateMipmaps=!1}else if(S){if(JJ)Z.texStorage2D(J.TEXTURE_2D,qJ,MJ,e.width,e.height);if($J)zJ(R,e,GJ,IJ)}else Z.texImage2D(J.TEXTURE_2D,0,MJ,e.width,e.height,0,GJ,IJ,e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(S&&JJ)Z.texStorage3D(J.TEXTURE_2D_ARRAY,qJ,MJ,hJ[0].width,hJ[0].height,e.depth);for(let a=0,s=hJ.length;a<s;a++)if(HJ=hJ[a],R.format!==W8)if(GJ!==null)if(S){if($J)if(R.layerUpdates.size>0){let FJ=Y$(HJ.width,HJ.height,R.format,R.type);for(let vJ of R.layerUpdates){let H0=HJ.data.subarray(vJ*FJ/HJ.data.BYTES_PER_ELEMENT,(vJ+1)*FJ/HJ.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,vJ,HJ.width,HJ.height,1,GJ,H0)}R.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,HJ.width,HJ.height,e.depth,GJ,HJ.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,a,MJ,HJ.width,HJ.height,e.depth,0,HJ.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S){if($J)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,HJ.width,HJ.height,e.depth,GJ,IJ,HJ.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,a,MJ,HJ.width,HJ.height,e.depth,0,GJ,IJ,HJ.data)}else{if(S&&JJ)Z.texStorage2D(J.TEXTURE_2D,qJ,MJ,hJ[0].width,hJ[0].height);for(let a=0,s=hJ.length;a<s;a++)if(HJ=hJ[a],R.format!==W8)if(GJ!==null)if(S){if($J)Z.compressedTexSubImage2D(J.TEXTURE_2D,a,0,0,HJ.width,HJ.height,GJ,HJ.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,a,MJ,HJ.width,HJ.height,0,HJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S){if($J)Z.texSubImage2D(J.TEXTURE_2D,a,0,0,HJ.width,HJ.height,GJ,IJ,HJ.data)}else Z.texImage2D(J.TEXTURE_2D,a,MJ,HJ.width,HJ.height,0,GJ,IJ,HJ.data)}else if(R.isDataArrayTexture)if(S){if(JJ)Z.texStorage3D(J.TEXTURE_2D_ARRAY,qJ,MJ,e.width,e.height,e.depth);if($J)if(R.layerUpdates.size>0){let a=Y$(e.width,e.height,R.format,R.type);for(let s of R.layerUpdates){let FJ=e.data.subarray(s*a/e.data.BYTES_PER_ELEMENT,(s+1)*a/e.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,s,e.width,e.height,1,GJ,IJ,FJ)}R.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,GJ,IJ,e.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,MJ,e.width,e.height,e.depth,0,GJ,IJ,e.data);else if(R.isData3DTexture)if(S){if(JJ)Z.texStorage3D(J.TEXTURE_3D,qJ,MJ,e.width,e.height,e.depth);if($J)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,GJ,IJ,e.data)}else Z.texImage3D(J.TEXTURE_3D,0,MJ,e.width,e.height,e.depth,0,GJ,IJ,e.data);else if(R.isFramebufferTexture){if(JJ)if(S)Z.texStorage2D(J.TEXTURE_2D,qJ,MJ,e.width,e.height);else{let{width:a,height:s}=e;for(let FJ=0;FJ<qJ;FJ++)Z.texImage2D(J.TEXTURE_2D,FJ,MJ,a,s,0,GJ,IJ,null),a>>=1,s>>=1}}else if(hJ.length>0){if(S&&JJ){let a=D0(hJ[0]);Z.texStorage2D(J.TEXTURE_2D,qJ,MJ,a.width,a.height)}for(let a=0,s=hJ.length;a<s;a++)if(HJ=hJ[a],S){if($J)Z.texSubImage2D(J.TEXTURE_2D,a,0,0,GJ,IJ,HJ)}else Z.texImage2D(J.TEXTURE_2D,a,MJ,GJ,IJ,HJ);R.generateMipmaps=!1}else if(S){if(JJ){let a=D0(e);Z.texStorage2D(J.TEXTURE_2D,qJ,MJ,a.width,a.height)}if($J)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,GJ,IJ,e)}else Z.texImage2D(J.TEXTURE_2D,0,MJ,GJ,IJ,e);if(O(R))N(m);if(LJ.__version=l.version,R.onUpdate)R.onUpdate(R)}C.__version=R.version}function XJ(C,R,h){if(R.image.length!==6)return;let m=n(C,R),i=R.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,C.__webglTexture,J.TEXTURE0+h);let l=$.get(i);if(i.version!==l.__version||m===!0){Z.activeTexture(J.TEXTURE0+h);let LJ=uJ.getPrimaries(uJ.workingColorSpace),QJ=R.colorSpace===j8?null:uJ.getPrimaries(R.colorSpace),RJ=R.colorSpace===j8||LJ===QJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,RJ);let DJ=R.isCompressedTexture||R.image[0].isCompressedTexture,e=R.image[0]&&R.image[0].isDataTexture,GJ=[];for(let s=0;s<6;s++){if(!DJ&&!e)GJ[s]=k(R.image[s],!0,W.maxCubemapSize);else GJ[s]=e?R.image[s].image:R.image[s];GJ[s]=w0(R,GJ[s])}let IJ=GJ[0],MJ=H.convert(R.format,R.colorSpace),HJ=H.convert(R.type),hJ=M(R.internalFormat,MJ,HJ,R.colorSpace),S=R.isVideoTexture!==!0,JJ=l.__version===void 0||m===!0,$J=i.dataReady,qJ=P(R,IJ);dJ(J.TEXTURE_CUBE_MAP,R);let a;if(DJ){if(S&&JJ)Z.texStorage2D(J.TEXTURE_CUBE_MAP,qJ,hJ,IJ.width,IJ.height);for(let s=0;s<6;s++){a=GJ[s].mipmaps;for(let FJ=0;FJ<a.length;FJ++){let vJ=a[FJ];if(R.format!==W8)if(MJ!==null)if(S){if($J)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ,0,0,vJ.width,vJ.height,MJ,vJ.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ,hJ,vJ.width,vJ.height,0,vJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if($J)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ,0,0,vJ.width,vJ.height,MJ,HJ,vJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ,hJ,vJ.width,vJ.height,0,MJ,HJ,vJ.data)}}}else{if(a=R.mipmaps,S&&JJ){if(a.length>0)qJ++;let s=D0(GJ[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,qJ,hJ,s.width,s.height)}for(let s=0;s<6;s++)if(e){if(S){if($J)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,GJ[s].width,GJ[s].height,MJ,HJ,GJ[s].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,hJ,GJ[s].width,GJ[s].height,0,MJ,HJ,GJ[s].data);for(let FJ=0;FJ<a.length;FJ++){let H0=a[FJ].image[s].image;if(S){if($J)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ+1,0,0,H0.width,H0.height,MJ,HJ,H0.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ+1,hJ,H0.width,H0.height,0,MJ,HJ,H0.data)}}else{if(S){if($J)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,MJ,HJ,GJ[s])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,hJ,MJ,HJ,GJ[s]);for(let FJ=0;FJ<a.length;FJ++){let vJ=a[FJ];if(S){if($J)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ+1,0,0,MJ,HJ,vJ.image[s])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ+1,hJ,MJ,HJ,vJ.image[s])}}}if(O(R))N(J.TEXTURE_CUBE_MAP);if(l.__version=i.version,R.onUpdate)R.onUpdate(R)}C.__version=R.version}function fJ(C,R,h,m,i,l){let LJ=H.convert(h.format,h.colorSpace),QJ=H.convert(h.type),RJ=M(h.internalFormat,LJ,QJ,h.colorSpace),DJ=$.get(R),e=$.get(h);if(e.__renderTarget=R,!DJ.__hasExternalTextures){let GJ=Math.max(1,R.width>>l),IJ=Math.max(1,R.height>>l);if(i===J.TEXTURE_3D||i===J.TEXTURE_2D_ARRAY)Z.texImage3D(i,l,RJ,GJ,IJ,R.depth,0,LJ,QJ,null);else Z.texImage2D(i,l,RJ,GJ,IJ,0,LJ,QJ,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,C),NJ(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,m,i,e.__webglTexture,0,W0(R));else if(i===J.TEXTURE_2D||i>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,m,i,e.__webglTexture,l);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function gJ(C,R,h){if(J.bindRenderbuffer(J.RENDERBUFFER,C),R.depthBuffer){let m=R.depthTexture,i=m&&m.isDepthTexture?m.type:null,l=I(R.stencilBuffer,i),LJ=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,QJ=W0(R);if(NJ(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,QJ,l,R.width,R.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,QJ,l,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,l,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,LJ,J.RENDERBUFFER,C)}else{let m=R.textures;for(let i=0;i<m.length;i++){let l=m[i],LJ=H.convert(l.format,l.colorSpace),QJ=H.convert(l.type),RJ=M(l.internalFormat,LJ,QJ,l.colorSpace),DJ=W0(R);if(h&&NJ(R)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,DJ,RJ,R.width,R.height);else if(NJ(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,DJ,RJ,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,RJ,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function cJ(C,R){if(R&&R.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,C),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let m=$.get(R.depthTexture);if(m.__renderTarget=R,!m.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;o(R.depthTexture,0);let i=m.__webglTexture,l=W0(R);if(R.depthTexture.format===b7)if(NJ(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,i,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,i,0);else if(R.depthTexture.format===A6)if(NJ(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,i,0,l);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,i,0);else throw Error("Unknown depthTexture format")}function K0(C){let R=$.get(C),h=C.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==C.depthTexture){let m=C.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(m){let i=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,m.removeEventListener("dispose",i)};m.addEventListener("dispose",i),R.__depthDisposeCallback=i}R.__boundDepthTexture=m}if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(h)throw Error("target.depthTexture not supported in Cube render targets");let m=C.texture.mipmaps;if(m&&m.length>0)cJ(R.__webglFramebuffer[0],C);else cJ(R.__webglFramebuffer,C)}else if(h){R.__webglDepthbuffer=[];for(let m=0;m<6;m++)if(Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[m]),R.__webglDepthbuffer[m]===void 0)R.__webglDepthbuffer[m]=J.createRenderbuffer(),gJ(R.__webglDepthbuffer[m],C,!1);else{let i=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,l=R.__webglDepthbuffer[m];J.bindRenderbuffer(J.RENDERBUFFER,l),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,l)}}else{let m=C.texture.mipmaps;if(m&&m.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),gJ(R.__webglDepthbuffer,C,!1);else{let i=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,l=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,l),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,l)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function oJ(C,R,h){let m=$.get(C);if(R!==void 0)fJ(m.__webglFramebuffer,C,C.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)K0(C)}function T(C){let R=C.texture,h=$.get(C),m=$.get(R);C.addEventListener("dispose",w);let i=C.textures,l=C.isWebGLCubeRenderTarget===!0,LJ=i.length>1;if(!LJ){if(m.__webglTexture===void 0)m.__webglTexture=J.createTexture();m.__version=R.version,Y.memory.textures++}if(l){h.__webglFramebuffer=[];for(let QJ=0;QJ<6;QJ++)if(R.mipmaps&&R.mipmaps.length>0){h.__webglFramebuffer[QJ]=[];for(let RJ=0;RJ<R.mipmaps.length;RJ++)h.__webglFramebuffer[QJ][RJ]=J.createFramebuffer()}else h.__webglFramebuffer[QJ]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){h.__webglFramebuffer=[];for(let QJ=0;QJ<R.mipmaps.length;QJ++)h.__webglFramebuffer[QJ]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(LJ)for(let QJ=0,RJ=i.length;QJ<RJ;QJ++){let DJ=$.get(i[QJ]);if(DJ.__webglTexture===void 0)DJ.__webglTexture=J.createTexture(),Y.memory.textures++}if(C.samples>0&&NJ(C)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let QJ=0;QJ<i.length;QJ++){let RJ=i[QJ];h.__webglColorRenderbuffer[QJ]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[QJ]);let DJ=H.convert(RJ.format,RJ.colorSpace),e=H.convert(RJ.type),GJ=M(RJ.internalFormat,DJ,e,RJ.colorSpace,C.isXRRenderTarget===!0),IJ=W0(C);J.renderbufferStorageMultisample(J.RENDERBUFFER,IJ,GJ,C.width,C.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+QJ,J.RENDERBUFFER,h.__webglColorRenderbuffer[QJ])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),C.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),gJ(h.__webglDepthRenderbuffer,C,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(l){Z.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture),dJ(J.TEXTURE_CUBE_MAP,R);for(let QJ=0;QJ<6;QJ++)if(R.mipmaps&&R.mipmaps.length>0)for(let RJ=0;RJ<R.mipmaps.length;RJ++)fJ(h.__webglFramebuffer[QJ][RJ],C,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+QJ,RJ);else fJ(h.__webglFramebuffer[QJ],C,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+QJ,0);if(O(R))N(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(LJ){for(let QJ=0,RJ=i.length;QJ<RJ;QJ++){let DJ=i[QJ],e=$.get(DJ);if(Z.bindTexture(J.TEXTURE_2D,e.__webglTexture),dJ(J.TEXTURE_2D,DJ),fJ(h.__webglFramebuffer,C,DJ,J.COLOR_ATTACHMENT0+QJ,J.TEXTURE_2D,0),O(DJ))N(J.TEXTURE_2D)}Z.unbindTexture()}else{let QJ=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)QJ=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(QJ,m.__webglTexture),dJ(QJ,R),R.mipmaps&&R.mipmaps.length>0)for(let RJ=0;RJ<R.mipmaps.length;RJ++)fJ(h.__webglFramebuffer[RJ],C,R,J.COLOR_ATTACHMENT0,QJ,RJ);else fJ(h.__webglFramebuffer,C,R,J.COLOR_ATTACHMENT0,QJ,0);if(O(R))N(QJ);Z.unbindTexture()}if(C.depthBuffer)K0(C)}function S0(C){let R=C.textures;for(let h=0,m=R.length;h<m;h++){let i=R[h];if(O(i)){let l=B(C),LJ=$.get(i).__webglTexture;Z.bindTexture(l,LJ),N(l),Z.unbindTexture()}}}let aJ=[],$0=[];function kJ(C){if(C.samples>0){if(NJ(C)===!1){let{textures:R,width:h,height:m}=C,i=J.COLOR_BUFFER_BIT,l=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,LJ=$.get(C),QJ=R.length>1;if(QJ)for(let DJ=0;DJ<R.length;DJ++)Z.bindFramebuffer(J.FRAMEBUFFER,LJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+DJ,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,LJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+DJ,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,LJ.__webglMultisampledFramebuffer);let RJ=C.texture.mipmaps;if(RJ&&RJ.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,LJ.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,LJ.__webglFramebuffer);for(let DJ=0;DJ<R.length;DJ++){if(C.resolveDepthBuffer){if(C.depthBuffer)i|=J.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)i|=J.STENCIL_BUFFER_BIT}if(QJ){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,LJ.__webglColorRenderbuffer[DJ]);let e=$.get(R[DJ]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,e,0)}if(J.blitFramebuffer(0,0,h,m,0,0,h,m,i,J.NEAREST),K===!0){if(aJ.length=0,$0.length=0,aJ.push(J.COLOR_ATTACHMENT0+DJ),C.depthBuffer&&C.resolveDepthBuffer===!1)aJ.push(l),$0.push(l),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,$0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,aJ)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),QJ)for(let DJ=0;DJ<R.length;DJ++){Z.bindFramebuffer(J.FRAMEBUFFER,LJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+DJ,J.RENDERBUFFER,LJ.__webglColorRenderbuffer[DJ]);let e=$.get(R[DJ]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,LJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+DJ,J.TEXTURE_2D,e,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,LJ.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&K){let R=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function W0(C){return Math.min(W.maxSamples,C.samples)}function NJ(C){let R=$.get(C);return C.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function bJ(C){let R=Y.render.frame;if(G.get(C)!==R)G.set(C,R),C.update()}function w0(C,R){let{colorSpace:h,format:m,type:i}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return R;if(h!==h0&&h!==j8)if(uJ.getTransfer(h)===X0){if(m!==W8||i!==i8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",h);return R}function D0(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)U.width=C.naturalWidth||C.width,U.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)U.width=C.displayWidth,U.height=C.displayHeight;else U.width=C.width,U.height=C.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=g,this.setTexture2D=o,this.setTexture2DArray=d,this.setTexture3D=t,this.setTextureCube=p,this.rebindTextures=oJ,this.setupRenderTarget=T,this.updateRenderTargetMipmap=S0,this.updateMultisampleRenderTarget=kJ,this.setupDepthRenderbuffer=K0,this.setupFrameBufferTexture=fJ,this.useMultisampledRTT=NJ}function p1(J,Q){function Z($,W=j8){let H,Y=uJ.getTransfer(W);if($===i8)return J.UNSIGNED_BYTE;if($===WZ)return J.UNSIGNED_SHORT_4_4_4_4;if($===HZ)return J.UNSIGNED_SHORT_5_5_5_1;if($===WH)return J.UNSIGNED_INT_5_9_9_9_REV;if($===ZH)return J.BYTE;if($===$H)return J.SHORT;if($===P6)return J.UNSIGNED_SHORT;if($===$Z)return J.INT;if($===s9)return J.UNSIGNED_INT;if($===o8)return J.FLOAT;if($===T6)return J.HALF_FLOAT;if($===HH)return J.ALPHA;if($===YH)return J.RGB;if($===W8)return J.RGBA;if($===b7)return J.DEPTH_COMPONENT;if($===A6)return J.DEPTH_STENCIL;if($===XH)return J.RED;if($===YZ)return J.RED_INTEGER;if($===KH)return J.RG;if($===XZ)return J.RG_INTEGER;if($===KZ)return J.RGBA_INTEGER;if($===g7||$===p7||$===l7||$===d7)if(Y===X0)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if($===g7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if($===p7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if($===l7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if($===d7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if($===g7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if($===p7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if($===l7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if($===d7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if($===UZ||$===GZ||$===EZ||$===qZ)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if($===UZ)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if($===GZ)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if($===EZ)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if($===qZ)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if($===NZ||$===OZ||$===FZ)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if($===NZ||$===OZ)return Y===X0?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if($===FZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if($===RZ||$===kZ||$===DZ||$===MZ||$===LZ||$===VZ||$===zZ||$===BZ||$===_Z||$===CZ||$===wZ||$===IZ||$===PZ||$===TZ)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if($===RZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if($===kZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if($===DZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if($===MZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if($===LZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if($===VZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if($===zZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if($===BZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if($===_Z)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if($===CZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if($===wZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if($===IZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if($===PZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if($===TZ)return Y===X0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if($===m7||$===AZ||$===SZ)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if($===m7)return Y===X0?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if($===AZ)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if($===SZ)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if($===UH||$===jZ||$===vZ||$===yZ)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if($===m7)return H.COMPRESSED_RED_RGTC1_EXT;if($===jZ)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if($===vZ)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if($===yZ)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if($===i9)return J.UNSIGNED_INT_24_8;return J[$]!==void 0?J[$]:null}return{convert:Z}}var l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q,Z){if(this.texture===null){let $=new k0,W=J.properties.get($);if(W.__webglTexture=Q.texture,Q.depthNear!==Z.depthNear||Q.depthFar!==Z.depthFar)this.depthNear=Q.depthNear,this.depthFar=Q.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new a0({vertexShader:l1,fragmentShader:d1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new F0(new R9(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OY extends v8{constructor(J,Q){super();let Z=this,$=null,W=1,H=null,Y="local-floor",X=1,K=null,U=null,G=null,E=null,q=null,F=null,D=new NY,k=Q.getContextAttributes(),O=null,N=null,B=[],M=[],I=new wJ,P=null,_=new M0;_.viewport=new iJ;let w=new M0;w.viewport=new iJ;let f=[_,w],V=new Q$,z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let ZJ=B[n];if(ZJ===void 0)ZJ=new y6,B[n]=ZJ;return ZJ.getTargetRaySpace()},this.getControllerGrip=function(n){let ZJ=B[n];if(ZJ===void 0)ZJ=new y6,B[n]=ZJ;return ZJ.getGripSpace()},this.getHand=function(n){let ZJ=B[n];if(ZJ===void 0)ZJ=new y6,B[n]=ZJ;return ZJ.getHandSpace()};function g(n){let ZJ=M.indexOf(n.inputSource);if(ZJ===-1)return;let zJ=B[ZJ];if(zJ!==void 0)zJ.update(n.inputSource,n.frame,K||H),zJ.dispatchEvent({type:n.type,data:n.inputSource})}function c(){$.removeEventListener("select",g),$.removeEventListener("selectstart",g),$.removeEventListener("selectend",g),$.removeEventListener("squeeze",g),$.removeEventListener("squeezestart",g),$.removeEventListener("squeezeend",g),$.removeEventListener("end",c),$.removeEventListener("inputsourceschange",u);for(let n=0;n<B.length;n++){let ZJ=M[n];if(ZJ===null)continue;M[n]=null,B[n].disconnect(ZJ)}z=null,j=null,D.reset(),J.setRenderTarget(O),q=null,E=null,G=null,$=null,N=null,dJ.stop(),Z.isPresenting=!1,J.setPixelRatio(P),J.setSize(I.width,I.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(W=n,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(Y=n,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||H},this.setReferenceSpace=function(n){K=n},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){return G},this.getFrame=function(){return F},this.getSession=function(){return $},this.setSession=async function(n){if($=n,$!==null){if(O=J.getRenderTarget(),$.addEventListener("select",g),$.addEventListener("selectstart",g),$.addEventListener("selectend",g),$.addEventListener("squeeze",g),$.addEventListener("squeezestart",g),$.addEventListener("squeezeend",g),$.addEventListener("end",c),$.addEventListener("inputsourceschange",u),k.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(I),!(typeof XRWebGLBinding<"u"&&("createProjectionLayer"in XRWebGLBinding.prototype))){let zJ={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer($,Q,zJ),$.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),N=new f8(q.framebufferWidth,q.framebufferHeight,{format:W8,type:i8,colorSpace:J.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let zJ=null,PJ=null,XJ=null;if(k.depth)XJ=k.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,zJ=k.stencil?A6:b7,PJ=k.stencil?i9:s9;let fJ={colorFormat:Q.RGBA8,depthFormat:XJ,scaleFactor:W};G=new XRWebGLBinding($,Q),E=G.createProjectionLayer(fJ),$.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),N=new f8(E.textureWidth,E.textureHeight,{format:W8,type:i8,depthTexture:new e7(E.textureWidth,E.textureHeight,PJ,void 0,void 0,void 0,void 0,void 0,void 0,zJ),stencilBuffer:k.stencil,colorSpace:J.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(X),K=null,H=await $.requestReferenceSpace(Y),dJ.setContext($),dJ.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if($!==null)return $.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function u(n){for(let ZJ=0;ZJ<n.removed.length;ZJ++){let zJ=n.removed[ZJ],PJ=M.indexOf(zJ);if(PJ>=0)M[PJ]=null,B[PJ].disconnect(zJ)}for(let ZJ=0;ZJ<n.added.length;ZJ++){let zJ=n.added[ZJ],PJ=M.indexOf(zJ);if(PJ===-1){for(let fJ=0;fJ<B.length;fJ++)if(fJ>=M.length){M.push(zJ),PJ=fJ;break}else if(M[fJ]===null){M[fJ]=zJ,PJ=fJ;break}if(PJ===-1)break}let XJ=B[PJ];if(XJ)XJ.connect(zJ)}}let o=new A,d=new A;function t(n,ZJ,zJ){o.setFromMatrixPosition(ZJ.matrixWorld),d.setFromMatrixPosition(zJ.matrixWorld);let PJ=o.distanceTo(d),XJ=ZJ.projectionMatrix.elements,fJ=zJ.projectionMatrix.elements,gJ=XJ[14]/(XJ[10]-1),cJ=XJ[14]/(XJ[10]+1),K0=(XJ[9]+1)/XJ[5],oJ=(XJ[9]-1)/XJ[5],T=(XJ[8]-1)/XJ[0],S0=(fJ[8]+1)/fJ[0],aJ=gJ*T,$0=gJ*S0,kJ=PJ/(-T+S0),W0=kJ*-T;if(ZJ.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(W0),n.translateZ(kJ),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),XJ[10]===-1)n.projectionMatrix.copy(ZJ.projectionMatrix),n.projectionMatrixInverse.copy(ZJ.projectionMatrixInverse);else{let NJ=gJ+kJ,bJ=cJ+kJ,w0=aJ-W0,D0=$0+(PJ-W0),C=K0*cJ/bJ*NJ,R=oJ*cJ/bJ*NJ;n.projectionMatrix.makePerspective(w0,D0,C,R,NJ,bJ),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function p(n,ZJ){if(ZJ===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(ZJ.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if($===null)return;let{near:ZJ,far:zJ}=n;if(D.texture!==null){if(D.depthNear>0)ZJ=D.depthNear;if(D.depthFar>0)zJ=D.depthFar}if(V.near=w.near=_.near=ZJ,V.far=w.far=_.far=zJ,z!==V.near||j!==V.far)$.updateRenderState({depthNear:V.near,depthFar:V.far}),z=V.near,j=V.far;_.layers.mask=n.layers.mask|2,w.layers.mask=n.layers.mask|4,V.layers.mask=_.layers.mask|w.layers.mask;let PJ=n.parent,XJ=V.cameras;p(V,PJ);for(let fJ=0;fJ<XJ.length;fJ++)p(XJ[fJ],PJ);if(XJ.length===2)t(V,_,w);else V.projectionMatrix.copy(_.projectionMatrix);KJ(n,V,PJ)};function KJ(n,ZJ,zJ){if(zJ===null)n.matrix.copy(ZJ.matrixWorld);else n.matrix.copy(zJ.matrixWorld),n.matrix.invert(),n.matrix.multiply(ZJ.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(ZJ.projectionMatrix),n.projectionMatrixInverse.copy(ZJ.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=K9*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return V},this.getFoveation=function(){if(E===null&&q===null)return;return X},this.setFoveation=function(n){if(X=n,E!==null)E.fixedFoveation=n;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=n},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(V)};let UJ=null;function jJ(n,ZJ){if(U=ZJ.getViewerPose(K||H),F=ZJ,U!==null){let zJ=U.views;if(q!==null)J.setRenderTargetFramebuffer(N,q.framebuffer),J.setRenderTarget(N);let PJ=!1;if(zJ.length!==V.cameras.length)V.cameras.length=0,PJ=!0;for(let gJ=0;gJ<zJ.length;gJ++){let cJ=zJ[gJ],K0=null;if(q!==null)K0=q.getViewport(cJ);else{let T=G.getViewSubImage(E,cJ);if(K0=T.viewport,gJ===0)J.setRenderTargetTextures(N,T.colorTexture,T.depthStencilTexture),J.setRenderTarget(N)}let oJ=f[gJ];if(oJ===void 0)oJ=new M0,oJ.layers.enable(gJ),oJ.viewport=new iJ,f[gJ]=oJ;if(oJ.matrix.fromArray(cJ.transform.matrix),oJ.matrix.decompose(oJ.position,oJ.quaternion,oJ.scale),oJ.projectionMatrix.fromArray(cJ.projectionMatrix),oJ.projectionMatrixInverse.copy(oJ.projectionMatrix).invert(),oJ.viewport.set(K0.x,K0.y,K0.width,K0.height),gJ===0)V.matrix.copy(oJ.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);if(PJ===!0)V.cameras.push(oJ)}let XJ=$.enabledFeatures;if(XJ&&XJ.includes("depth-sensing")&&$.depthUsage=="gpu-optimized"&&G){let gJ=G.getDepthInformation(zJ[0]);if(gJ&&gJ.isValid&&gJ.texture)D.init(J,gJ,$.renderState)}}for(let zJ=0;zJ<B.length;zJ++){let PJ=M[zJ],XJ=B[zJ];if(PJ!==null&&XJ!==void 0)XJ.update(PJ,ZJ,K||H)}if(UJ)UJ(n,ZJ);if(ZJ.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:ZJ});F=null}let dJ=new $Y;dJ.setAnimationLoop(jJ),this.setAnimationLoop=function(n){UJ=n},this.dispose=function(){}}}var M9=new y0,m1=new AJ;function u1(J,Q){function Z(O,N){if(O.matrixAutoUpdate===!0)O.updateMatrix();N.value.copy(O.matrix)}function $(O,N){if(N.color.getRGB(O.fogColor.value,cZ(J)),N.isFog)O.fogNear.value=N.near,O.fogFar.value=N.far;else if(N.isFogExp2)O.fogDensity.value=N.density}function W(O,N,B,M,I){if(N.isMeshBasicMaterial)H(O,N);else if(N.isMeshLambertMaterial)H(O,N);else if(N.isMeshToonMaterial)H(O,N),E(O,N);else if(N.isMeshPhongMaterial)H(O,N),G(O,N);else if(N.isMeshStandardMaterial){if(H(O,N),q(O,N),N.isMeshPhysicalMaterial)F(O,N,I)}else if(N.isMeshMatcapMaterial)H(O,N),D(O,N);else if(N.isMeshDepthMaterial)H(O,N);else if(N.isMeshDistanceMaterial)H(O,N),k(O,N);else if(N.isMeshNormalMaterial)H(O,N);else if(N.isLineBasicMaterial){if(Y(O,N),N.isLineDashedMaterial)X(O,N)}else if(N.isPointsMaterial)K(O,N,B,M);else if(N.isSpriteMaterial)U(O,N);else if(N.isShadowMaterial)O.color.value.copy(N.color),O.opacity.value=N.opacity;else if(N.isShaderMaterial)N.uniformsNeedUpdate=!1}function H(O,N){if(O.opacity.value=N.opacity,N.color)O.diffuse.value.copy(N.color);if(N.emissive)O.emissive.value.copy(N.emissive).multiplyScalar(N.emissiveIntensity);if(N.map)O.map.value=N.map,Z(N.map,O.mapTransform);if(N.alphaMap)O.alphaMap.value=N.alphaMap,Z(N.alphaMap,O.alphaMapTransform);if(N.bumpMap){if(O.bumpMap.value=N.bumpMap,Z(N.bumpMap,O.bumpMapTransform),O.bumpScale.value=N.bumpScale,N.side===f0)O.bumpScale.value*=-1}if(N.normalMap){if(O.normalMap.value=N.normalMap,Z(N.normalMap,O.normalMapTransform),O.normalScale.value.copy(N.normalScale),N.side===f0)O.normalScale.value.negate()}if(N.displacementMap)O.displacementMap.value=N.displacementMap,Z(N.displacementMap,O.displacementMapTransform),O.displacementScale.value=N.displacementScale,O.displacementBias.value=N.displacementBias;if(N.emissiveMap)O.emissiveMap.value=N.emissiveMap,Z(N.emissiveMap,O.emissiveMapTransform);if(N.specularMap)O.specularMap.value=N.specularMap,Z(N.specularMap,O.specularMapTransform);if(N.alphaTest>0)O.alphaTest.value=N.alphaTest;let B=Q.get(N),M=B.envMap,I=B.envMapRotation;if(M){if(O.envMap.value=M,M9.copy(I),M9.x*=-1,M9.y*=-1,M9.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1)M9.y*=-1,M9.z*=-1;O.envMapRotation.value.setFromMatrix4(m1.makeRotationFromEuler(M9)),O.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,O.reflectivity.value=N.reflectivity,O.ior.value=N.ior,O.refractionRatio.value=N.refractionRatio}if(N.lightMap)O.lightMap.value=N.lightMap,O.lightMapIntensity.value=N.lightMapIntensity,Z(N.lightMap,O.lightMapTransform);if(N.aoMap)O.aoMap.value=N.aoMap,O.aoMapIntensity.value=N.aoMapIntensity,Z(N.aoMap,O.aoMapTransform)}function Y(O,N){if(O.diffuse.value.copy(N.color),O.opacity.value=N.opacity,N.map)O.map.value=N.map,Z(N.map,O.mapTransform)}function X(O,N){O.dashSize.value=N.dashSize,O.totalSize.value=N.dashSize+N.gapSize,O.scale.value=N.scale}function K(O,N,B,M){if(O.diffuse.value.copy(N.color),O.opacity.value=N.opacity,O.size.value=N.size*B,O.scale.value=M*0.5,N.map)O.map.value=N.map,Z(N.map,O.uvTransform);if(N.alphaMap)O.alphaMap.value=N.alphaMap,Z(N.alphaMap,O.alphaMapTransform);if(N.alphaTest>0)O.alphaTest.value=N.alphaTest}function U(O,N){if(O.diffuse.value.copy(N.color),O.opacity.value=N.opacity,O.rotation.value=N.rotation,N.map)O.map.value=N.map,Z(N.map,O.mapTransform);if(N.alphaMap)O.alphaMap.value=N.alphaMap,Z(N.alphaMap,O.alphaMapTransform);if(N.alphaTest>0)O.alphaTest.value=N.alphaTest}function G(O,N){O.specular.value.copy(N.specular),O.shininess.value=Math.max(N.shininess,0.0001)}function E(O,N){if(N.gradientMap)O.gradientMap.value=N.gradientMap}function q(O,N){if(O.metalness.value=N.metalness,N.metalnessMap)O.metalnessMap.value=N.metalnessMap,Z(N.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=N.roughness,N.roughnessMap)O.roughnessMap.value=N.roughnessMap,Z(N.roughnessMap,O.roughnessMapTransform);if(N.envMap)O.envMapIntensity.value=N.envMapIntensity}function F(O,N,B){if(O.ior.value=N.ior,N.sheen>0){if(O.sheenColor.value.copy(N.sheenColor).multiplyScalar(N.sheen),O.sheenRoughness.value=N.sheenRoughness,N.sheenColorMap)O.sheenColorMap.value=N.sheenColorMap,Z(N.sheenColorMap,O.sheenColorMapTransform);if(N.sheenRoughnessMap)O.sheenRoughnessMap.value=N.sheenRoughnessMap,Z(N.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(N.clearcoat>0){if(O.clearcoat.value=N.clearcoat,O.clearcoatRoughness.value=N.clearcoatRoughness,N.clearcoatMap)O.clearcoatMap.value=N.clearcoatMap,Z(N.clearcoatMap,O.clearcoatMapTransform);if(N.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=N.clearcoatRoughnessMap,Z(N.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(N.clearcoatNormalMap){if(O.clearcoatNormalMap.value=N.clearcoatNormalMap,Z(N.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(N.clearcoatNormalScale),N.side===f0)O.clearcoatNormalScale.value.negate()}}if(N.dispersion>0)O.dispersion.value=N.dispersion;if(N.iridescence>0){if(O.iridescence.value=N.iridescence,O.iridescenceIOR.value=N.iridescenceIOR,O.iridescenceThicknessMinimum.value=N.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=N.iridescenceThicknessRange[1],N.iridescenceMap)O.iridescenceMap.value=N.iridescenceMap,Z(N.iridescenceMap,O.iridescenceMapTransform);if(N.iridescenceThicknessMap)O.iridescenceThicknessMap.value=N.iridescenceThicknessMap,Z(N.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(N.transmission>0){if(O.transmission.value=N.transmission,O.transmissionSamplerMap.value=B.texture,O.transmissionSamplerSize.value.set(B.width,B.height),N.transmissionMap)O.transmissionMap.value=N.transmissionMap,Z(N.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=N.thickness,N.thicknessMap)O.thicknessMap.value=N.thicknessMap,Z(N.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=N.attenuationDistance,O.attenuationColor.value.copy(N.attenuationColor)}if(N.anisotropy>0){if(O.anisotropyVector.value.set(N.anisotropy*Math.cos(N.anisotropyRotation),N.anisotropy*Math.sin(N.anisotropyRotation)),N.anisotropyMap)O.anisotropyMap.value=N.anisotropyMap,Z(N.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=N.specularIntensity,O.specularColor.value.copy(N.specularColor),N.specularColorMap)O.specularColorMap.value=N.specularColorMap,Z(N.specularColorMap,O.specularColorMapTransform);if(N.specularIntensityMap)O.specularIntensityMap.value=N.specularIntensityMap,Z(N.specularIntensityMap,O.specularIntensityMapTransform)}function D(O,N){if(N.matcap)O.matcap.value=N.matcap}function k(O,N){let B=Q.get(N).light;O.referencePosition.value.setFromMatrixPosition(B.matrixWorld),O.nearDistance.value=B.shadow.camera.near,O.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:$,refreshMaterialUniforms:W}}function c1(J,Q,Z,$){let W={},H={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(B,M){let I=M.program;$.uniformBlockBinding(B,I)}function U(B,M){let I=W[B.id];if(I===void 0)D(B),I=G(B),W[B.id]=I,B.addEventListener("dispose",O);let P=M.program;$.updateUBOMapping(B,P);let _=Q.render.frame;if(H[B.id]!==_)q(B),H[B.id]=_}function G(B){let M=E();B.__bindingPointIndex=M;let I=J.createBuffer(),P=B.__size,_=B.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,P,_),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,M,I),I}function E(){for(let B=0;B<X;B++)if(Y.indexOf(B)===-1)return Y.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(B){let M=W[B.id],I=B.uniforms,P=B.__cache;J.bindBuffer(J.UNIFORM_BUFFER,M);for(let _=0,w=I.length;_<w;_++){let f=Array.isArray(I[_])?I[_]:[I[_]];for(let V=0,z=f.length;V<z;V++){let j=f[V];if(F(j,_,V,P)===!0){let g=j.__offset,c=Array.isArray(j.value)?j.value:[j.value],u=0;for(let o=0;o<c.length;o++){let d=c[o],t=k(d);if(typeof d==="number"||typeof d==="boolean")j.__data[0]=d,J.bufferSubData(J.UNIFORM_BUFFER,g+u,j.__data);else if(d.isMatrix3)j.__data[0]=d.elements[0],j.__data[1]=d.elements[1],j.__data[2]=d.elements[2],j.__data[3]=0,j.__data[4]=d.elements[3],j.__data[5]=d.elements[4],j.__data[6]=d.elements[5],j.__data[7]=0,j.__data[8]=d.elements[6],j.__data[9]=d.elements[7],j.__data[10]=d.elements[8],j.__data[11]=0;else d.toArray(j.__data,u),u+=t.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,g,j.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(B,M,I,P){let _=B.value,w=M+"_"+I;if(P[w]===void 0){if(typeof _==="number"||typeof _==="boolean")P[w]=_;else P[w]=_.clone();return!0}else{let f=P[w];if(typeof _==="number"||typeof _==="boolean"){if(f!==_)return P[w]=_,!0}else if(f.equals(_)===!1)return f.copy(_),!0}return!1}function D(B){let M=B.uniforms,I=0,P=16;for(let w=0,f=M.length;w<f;w++){let V=Array.isArray(M[w])?M[w]:[M[w]];for(let z=0,j=V.length;z<j;z++){let g=V[z],c=Array.isArray(g.value)?g.value:[g.value];for(let u=0,o=c.length;u<o;u++){let d=c[u],t=k(d),p=I%P,KJ=p%t.boundary,UJ=p+KJ;if(I+=KJ,UJ!==0&&P-UJ<t.storage)I+=P-UJ;g.__data=new Float32Array(t.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=I,I+=t.storage}}}let _=I%P;if(_>0)I+=P-_;return B.__size=I,B.__cache={},this}function k(B){let M={boundary:0,storage:0};if(typeof B==="number"||typeof B==="boolean")M.boundary=4,M.storage=4;else if(B.isVector2)M.boundary=8,M.storage=8;else if(B.isVector3||B.isColor)M.boundary=16,M.storage=12;else if(B.isVector4)M.boundary=16,M.storage=16;else if(B.isMatrix3)M.boundary=48,M.storage=48;else if(B.isMatrix4)M.boundary=64,M.storage=64;else if(B.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B);return M}function O(B){let M=B.target;M.removeEventListener("dispose",O);let I=Y.indexOf(M.__bindingPointIndex);Y.splice(I,1),J.deleteBuffer(W[M.id]),delete W[M.id],delete H[M.id]}function N(){for(let B in W)J.deleteBuffer(W[B]);Y=[],W={},H={}}return{bind:K,update:U,dispose:N}}class F${constructor(J={}){let{canvas:Q=VH(),context:Z=null,depth:$=!0,stencil:W=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reverseDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let q;if(Z!==null){if(typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=Z.getContextAttributes().alpha}else q=H;let F=new Uint32Array(4),D=new Int32Array(4),k=null,O=null,N=[],B=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=A8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,I=!1;this._outputColorSpace=H8;let P=0,_=0,w=null,f=-1,V=null,z=new iJ,j=new iJ,g=null,c=new VJ(0),u=0,o=Q.width,d=Q.height,t=1,p=null,KJ=null,UJ=new iJ(0,0,o,d),jJ=new iJ(0,0,o,d),dJ=!1,n=new g6,ZJ=!1,zJ=!1,PJ=new AJ,XJ=new AJ,fJ=new A,gJ=new iJ,cJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K0=!1;function oJ(){return w===null?t:1}let T=Z;function S0(L,v){return Q.getContext(L,v)}try{let L={alpha:!0,depth:$,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${BW}`);if(Q.addEventListener("webglcontextlost",$J,!1),Q.addEventListener("webglcontextrestored",qJ,!1),Q.addEventListener("webglcontextcreationerror",a,!1),T===null){if(T=S0("webgl2",L),T===null)if(S0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let aJ,$0,kJ,W0,NJ,bJ,w0,D0,C,R,h,m,i,l,LJ,QJ,RJ,DJ,e,GJ,IJ,MJ,HJ,hJ;function S(){if(aJ=new UE(T),aJ.init(),MJ=new p1(T,aJ),$0=new ZE(T,aJ,J,MJ),kJ=new b1(T,aJ),$0.reverseDepthBuffer&&E)kJ.buffers.depth.setReversed(!0);W0=new qE(T),NJ=new C1,bJ=new g1(T,aJ,kJ,NJ,$0,MJ,W0),w0=new WE(M),D0=new KE(M),C=new DK(T),HJ=new JE(T,C),R=new GE(T,C,W0,HJ),h=new OE(T,R,C,W0),e=new NE(T,$0,bJ),QJ=new $E(NJ),m=new _1(M,w0,D0,aJ,$0,HJ,QJ),i=new u1(M,NJ),l=new I1,LJ=new v1(aJ),DJ=new eG(M,w0,D0,kJ,h,q,X),RJ=new h1(M,h,$0),hJ=new c1(T,W0,$0,kJ),GJ=new QE(T,aJ,W0),IJ=new EE(T,aJ,W0),W0.programs=m.programs,M.capabilities=$0,M.extensions=aJ,M.properties=NJ,M.renderLists=l,M.shadowMap=RJ,M.state=kJ,M.info=W0}S();let JJ=new OY(M,T);this.xr=JJ,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let L=aJ.get("WEBGL_lose_context");if(L)L.loseContext()},this.forceContextRestore=function(){let L=aJ.get("WEBGL_lose_context");if(L)L.restoreContext()},this.getPixelRatio=function(){return t},this.setPixelRatio=function(L){if(L===void 0)return;t=L,this.setSize(o,d,!1)},this.getSize=function(L){return L.set(o,d)},this.setSize=function(L,v,x=!0){if(JJ.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=L,d=v,Q.width=Math.floor(L*t),Q.height=Math.floor(v*t),x===!0)Q.style.width=L+"px",Q.style.height=v+"px";this.setViewport(0,0,L,v)},this.getDrawingBufferSize=function(L){return L.set(o*t,d*t).floor()},this.setDrawingBufferSize=function(L,v,x){o=L,d=v,t=x,Q.width=Math.floor(L*x),Q.height=Math.floor(v*x),this.setViewport(0,0,L,v)},this.getCurrentViewport=function(L){return L.copy(z)},this.getViewport=function(L){return L.copy(UJ)},this.setViewport=function(L,v,x,b){if(L.isVector4)UJ.set(L.x,L.y,L.z,L.w);else UJ.set(L,v,x,b);kJ.viewport(z.copy(UJ).multiplyScalar(t).round())},this.getScissor=function(L){return L.copy(jJ)},this.setScissor=function(L,v,x,b){if(L.isVector4)jJ.set(L.x,L.y,L.z,L.w);else jJ.set(L,v,x,b);kJ.scissor(j.copy(jJ).multiplyScalar(t).round())},this.getScissorTest=function(){return dJ},this.setScissorTest=function(L){kJ.setScissorTest(dJ=L)},this.setOpaqueSort=function(L){p=L},this.setTransparentSort=function(L){KJ=L},this.getClearColor=function(L){return L.copy(DJ.getClearColor())},this.setClearColor=function(){DJ.setClearColor(...arguments)},this.getClearAlpha=function(){return DJ.getClearAlpha()},this.setClearAlpha=function(){DJ.setClearAlpha(...arguments)},this.clear=function(L=!0,v=!0,x=!0){let b=0;if(L){let y=!1;if(w!==null){let r=w.texture.format;y=r===KZ||r===XZ||r===YZ}if(y){let r=w.texture.type,YJ=r===i8||r===s9||r===P6||r===i9||r===WZ||r===HZ,OJ=DJ.getClearColor(),EJ=DJ.getClearAlpha(),TJ=OJ.r,SJ=OJ.g,BJ=OJ.b;if(YJ)F[0]=TJ,F[1]=SJ,F[2]=BJ,F[3]=EJ,T.clearBufferuiv(T.COLOR,0,F);else D[0]=TJ,D[1]=SJ,D[2]=BJ,D[3]=EJ,T.clearBufferiv(T.COLOR,0,D)}else b|=T.COLOR_BUFFER_BIT}if(v)b|=T.DEPTH_BUFFER_BIT;if(x)b|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);T.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",$J,!1),Q.removeEventListener("webglcontextrestored",qJ,!1),Q.removeEventListener("webglcontextcreationerror",a,!1),DJ.dispose(),l.dispose(),LJ.dispose(),NJ.dispose(),w0.dispose(),D0.dispose(),h.dispose(),HJ.dispose(),hJ.dispose(),m.dispose(),JJ.dispose(),JJ.removeEventListener("sessionstart",F8),JJ.removeEventListener("sessionend",v$),Z9.stop()};function $J(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function qJ(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let L=W0.autoReset,v=RJ.enabled,x=RJ.autoUpdate,b=RJ.needsUpdate,y=RJ.type;S(),W0.autoReset=L,RJ.enabled=v,RJ.autoUpdate=x,RJ.needsUpdate=b,RJ.type=y}function a(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function s(L){let v=L.target;v.removeEventListener("dispose",s),FJ(v)}function FJ(L){vJ(L),NJ.remove(L)}function vJ(L){let v=NJ.get(L).programs;if(v!==void 0){if(v.forEach(function(x){m.releaseProgram(x)}),L.isShaderMaterial)m.releaseShaderCache(L)}}this.renderBufferDirect=function(L,v,x,b,y,r){if(v===null)v=cJ;let YJ=y.isMesh&&y.matrixWorld.determinant()<0,OJ=qX(L,v,x,b,y);kJ.setMaterial(b,YJ);let EJ=x.index,TJ=1;if(b.wireframe===!0){if(EJ=R.getWireframeAttribute(x),EJ===void 0)return;TJ=2}let SJ=x.drawRange,BJ=x.attributes.position,mJ=SJ.start*TJ,J0=(SJ.start+SJ.count)*TJ;if(r!==null)mJ=Math.max(mJ,r.start*TJ),J0=Math.min(J0,(r.start+r.count)*TJ);if(EJ!==null)mJ=Math.max(mJ,0),J0=Math.min(J0,EJ.count);else if(BJ!==void 0&&BJ!==null)mJ=Math.max(mJ,0),J0=Math.min(J0,BJ.count);let N0=J0-mJ;if(N0<0||N0===1/0)return;HJ.setup(y,b,OJ,x,EJ);let U0,Q0=GJ;if(EJ!==null)U0=C.get(EJ),Q0=IJ,Q0.setIndex(U0);if(y.isMesh)if(b.wireframe===!0)kJ.setLineWidth(b.wireframeLinewidth*oJ()),Q0.setMode(T.LINES);else Q0.setMode(T.TRIANGLES);else if(y.isLine){let _J=b.linewidth;if(_J===void 0)_J=1;if(kJ.setLineWidth(_J*oJ()),y.isLineSegments)Q0.setMode(T.LINES);else if(y.isLineLoop)Q0.setMode(T.LINE_LOOP);else Q0.setMode(T.LINE_STRIP)}else if(y.isPoints)Q0.setMode(T.POINTS);else if(y.isSprite)Q0.setMode(T.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)U9("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Q0.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(!aJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:_J,_multiDrawCounts:q0,_multiDrawCount:nJ}=y,m0=EJ?C.get(EJ).bytesPerElement:1,_9=NJ.get(b).currentProgram.getUniforms();for(let u0=0;u0<nJ;u0++)_9.setValue(T,"_gl_DrawID",u0),Q0.render(_J[u0]/m0,q0[u0])}else Q0.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)Q0.renderInstances(mJ,N0,y.count);else if(x.isInstancedBufferGeometry){let _J=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,q0=Math.min(x.instanceCount,_J);Q0.renderInstances(mJ,N0,q0)}else Q0.render(mJ,N0)};function H0(L,v,x){if(L.transparent===!0&&L.side===$8&&L.forceSinglePass===!1)L.side=f0,L.needsUpdate=!0,e6(L,v,x),L.side=n8,L.needsUpdate=!0,e6(L,v,x),L.side=$8;else e6(L,v,x)}this.compile=function(L,v,x=null){if(x===null)x=L;if(O=LJ.get(x),O.init(v),B.push(O),x.traverseVisible(function(y){if(y.isLight&&y.layers.test(v.layers)){if(O.pushLight(y),y.castShadow)O.pushShadow(y)}}),L!==x)L.traverseVisible(function(y){if(y.isLight&&y.layers.test(v.layers)){if(O.pushLight(y),y.castShadow)O.pushShadow(y)}});O.setupLights();let b=new Set;return L.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let r=y.material;if(r)if(Array.isArray(r))for(let YJ=0;YJ<r.length;YJ++){let OJ=r[YJ];H0(OJ,x,y),b.add(OJ)}else H0(r,x,y),b.add(r)}),O=B.pop(),b},this.compileAsync=function(L,v,x=null){let b=this.compile(L,v,x);return new Promise((y)=>{function r(){if(b.forEach(function(YJ){if(NJ.get(YJ).currentProgram.isReady())b.delete(YJ)}),b.size===0){y(L);return}setTimeout(r,10)}if(aJ.get("KHR_parallel_shader_compile")!==null)r();else setTimeout(r,10)})};let rJ=null;function L8(L){if(rJ)rJ(L)}function F8(){Z9.stop()}function v$(){Z9.start()}let Z9=new $Y;if(Z9.setAnimationLoop(L8),typeof self<"u")Z9.setContext(self);this.setAnimationLoop=function(L){rJ=L,JJ.setAnimationLoop(L),L===null?Z9.stop():Z9.start()},JJ.addEventListener("sessionstart",F8),JJ.addEventListener("sessionend",v$),this.render=function(L,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0)L.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(JJ.enabled===!0&&JJ.isPresenting===!0){if(JJ.cameraAutoUpdate===!0)JJ.updateCamera(v);v=JJ.getCamera()}if(L.isScene===!0)L.onBeforeRender(M,L,v,w);if(O=LJ.get(L,B.length),O.init(v),B.push(O),XJ.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),n.setFromProjectionMatrix(XJ),zJ=this.localClippingEnabled,ZJ=QJ.init(this.clippingPlanes,zJ),k=l.get(L,N.length),k.init(),N.push(k),JJ.enabled===!0&&JJ.isPresenting===!0){let r=M.xr.getDepthSensingMesh();if(r!==null)VQ(r,v,-1/0,M.sortObjects)}if(VQ(L,v,0,M.sortObjects),k.finish(),M.sortObjects===!0)k.sort(p,KJ);if(K0=JJ.enabled===!1||JJ.isPresenting===!1||JJ.hasDepthSensing()===!1,K0)DJ.addToRenderList(k,L);if(this.info.render.frame++,ZJ===!0)QJ.beginShadows();let x=O.state.shadowsArray;if(RJ.render(x,L,v),ZJ===!0)QJ.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:b,transmissive:y}=k;if(O.setupLights(),v.isArrayCamera){let r=v.cameras;if(y.length>0)for(let YJ=0,OJ=r.length;YJ<OJ;YJ++){let EJ=r[YJ];f$(b,y,L,EJ)}if(K0)DJ.render(L);for(let YJ=0,OJ=r.length;YJ<OJ;YJ++){let EJ=r[YJ];y$(k,L,EJ,EJ.viewport)}}else{if(y.length>0)f$(b,y,L,v);if(K0)DJ.render(L);y$(k,L,v)}if(w!==null&&_===0)bJ.updateMultisampleRenderTarget(w),bJ.updateRenderTargetMipmap(w);if(L.isScene===!0)L.onAfterRender(M,L,v);if(HJ.resetDefaultState(),f=-1,V=null,B.pop(),B.length>0){if(O=B[B.length-1],ZJ===!0)QJ.setGlobalState(M.clippingPlanes,O.state.camera)}else O=null;if(N.pop(),N.length>0)k=N[N.length-1];else k=null};function VQ(L,v,x,b){if(L.visible===!1)return;if(L.layers.test(v.layers)){if(L.isGroup)x=L.renderOrder;else if(L.isLOD){if(L.autoUpdate===!0)L.update(v)}else if(L.isLight){if(O.pushLight(L),L.castShadow)O.pushShadow(L)}else if(L.isSprite){if(!L.frustumCulled||n.intersectsSprite(L)){if(b)gJ.setFromMatrixPosition(L.matrixWorld).applyMatrix4(XJ);let YJ=h.update(L),OJ=L.material;if(OJ.visible)k.push(L,YJ,OJ,x,gJ.z,null)}}else if(L.isMesh||L.isLine||L.isPoints){if(!L.frustumCulled||n.intersectsObject(L)){let YJ=h.update(L),OJ=L.material;if(b){if(L.boundingSphere!==void 0){if(L.boundingSphere===null)L.computeBoundingSphere();gJ.copy(L.boundingSphere.center)}else{if(YJ.boundingSphere===null)YJ.computeBoundingSphere();gJ.copy(YJ.boundingSphere.center)}gJ.applyMatrix4(L.matrixWorld).applyMatrix4(XJ)}if(Array.isArray(OJ)){let EJ=YJ.groups;for(let TJ=0,SJ=EJ.length;TJ<SJ;TJ++){let BJ=EJ[TJ],mJ=OJ[BJ.materialIndex];if(mJ&&mJ.visible)k.push(L,YJ,mJ,x,gJ.z,BJ)}}else if(OJ.visible)k.push(L,YJ,OJ,x,gJ.z,null)}}}let r=L.children;for(let YJ=0,OJ=r.length;YJ<OJ;YJ++)VQ(r[YJ],v,x,b)}function y$(L,v,x,b){let{opaque:y,transmissive:r,transparent:YJ}=L;if(O.setupLightsView(x),ZJ===!0)QJ.setGlobalState(M.clippingPlanes,x);if(b)kJ.viewport(z.copy(b));if(y.length>0)t6(y,v,x);if(r.length>0)t6(r,v,x);if(YJ.length>0)t6(YJ,v,x);kJ.buffers.depth.setTest(!0),kJ.buffers.depth.setMask(!0),kJ.buffers.color.setMask(!0),kJ.setPolygonOffset(!1)}function f$(L,v,x,b){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[b.id]===void 0)O.state.transmissionRenderTarget[b.id]=new f8(1,1,{generateMipmaps:!0,type:aJ.has("EXT_color_buffer_half_float")||aJ.has("EXT_color_buffer_float")?T6:i8,minFilter:S8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:uJ.workingColorSpace});let r=O.state.transmissionRenderTarget[b.id],YJ=b.viewport||z;r.setSize(YJ.z*M.transmissionResolutionScale,YJ.w*M.transmissionResolutionScale);let OJ=M.getRenderTarget(),EJ=M.getActiveCubeFace(),TJ=M.getActiveMipmapLevel();if(M.setRenderTarget(r),M.getClearColor(c),u=M.getClearAlpha(),u<1)M.setClearColor(16777215,0.5);if(M.clear(),K0)DJ.render(x);let SJ=M.toneMapping;M.toneMapping=A8;let BJ=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(O.setupLightsView(b),ZJ===!0)QJ.setGlobalState(M.clippingPlanes,b);if(t6(L,x,b),bJ.updateMultisampleRenderTarget(r),bJ.updateRenderTargetMipmap(r),aJ.has("WEBGL_multisampled_render_to_texture")===!1){let mJ=!1;for(let J0=0,N0=v.length;J0<N0;J0++){let U0=v[J0],Q0=U0.object,_J=U0.geometry,q0=U0.material,nJ=U0.group;if(q0.side===$8&&Q0.layers.test(b.layers)){let m0=q0.side;q0.side=f0,q0.needsUpdate=!0,h$(Q0,x,b,_J,q0,nJ),q0.side=m0,q0.needsUpdate=!0,mJ=!0}}if(mJ===!0)bJ.updateMultisampleRenderTarget(r),bJ.updateRenderTargetMipmap(r)}if(M.setRenderTarget(OJ,EJ,TJ),M.setClearColor(c,u),BJ!==void 0)b.viewport=BJ;M.toneMapping=SJ}function t6(L,v,x){let b=v.isScene===!0?v.overrideMaterial:null;for(let y=0,r=L.length;y<r;y++){let YJ=L[y],OJ=YJ.object,EJ=YJ.geometry,TJ=YJ.group,SJ=YJ.material;if(SJ.allowOverride===!0&&b!==null)SJ=b;if(OJ.layers.test(x.layers))h$(OJ,v,x,EJ,SJ,TJ)}}function h$(L,v,x,b,y,r){if(L.onBeforeRender(M,v,x,b,y,r),L.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),y.onBeforeRender(M,v,x,b,L,r),y.transparent===!0&&y.side===$8&&y.forceSinglePass===!1)y.side=f0,y.needsUpdate=!0,M.renderBufferDirect(x,v,b,y,L,r),y.side=n8,y.needsUpdate=!0,M.renderBufferDirect(x,v,b,y,L,r),y.side=$8;else M.renderBufferDirect(x,v,b,y,L,r);L.onAfterRender(M,v,x,b,y,r)}function e6(L,v,x){if(v.isScene!==!0)v=cJ;let b=NJ.get(L),y=O.state.lights,r=O.state.shadowsArray,YJ=y.state.version,OJ=m.getParameters(L,y.state,r,v,x),EJ=m.getProgramCacheKey(OJ),TJ=b.programs;if(b.environment=L.isMeshStandardMaterial?v.environment:null,b.fog=v.fog,b.envMap=(L.isMeshStandardMaterial?D0:w0).get(L.envMap||b.environment),b.envMapRotation=b.environment!==null&&L.envMap===null?v.environmentRotation:L.envMapRotation,TJ===void 0)L.addEventListener("dispose",s),TJ=new Map,b.programs=TJ;let SJ=TJ.get(EJ);if(SJ!==void 0){if(b.currentProgram===SJ&&b.lightsStateVersion===YJ)return b$(L,OJ),SJ}else OJ.uniforms=m.getUniforms(L),L.onBeforeCompile(OJ,M),SJ=m.acquireProgram(OJ,EJ),TJ.set(EJ,SJ),b.uniforms=OJ.uniforms;let BJ=b.uniforms;if(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)BJ.clippingPlanes=QJ.uniform;if(b$(L,OJ),b.needsLights=OX(L),b.lightsStateVersion=YJ,b.needsLights)BJ.ambientLightColor.value=y.state.ambient,BJ.lightProbe.value=y.state.probe,BJ.directionalLights.value=y.state.directional,BJ.directionalLightShadows.value=y.state.directionalShadow,BJ.spotLights.value=y.state.spot,BJ.spotLightShadows.value=y.state.spotShadow,BJ.rectAreaLights.value=y.state.rectArea,BJ.ltc_1.value=y.state.rectAreaLTC1,BJ.ltc_2.value=y.state.rectAreaLTC2,BJ.pointLights.value=y.state.point,BJ.pointLightShadows.value=y.state.pointShadow,BJ.hemisphereLights.value=y.state.hemi,BJ.directionalShadowMap.value=y.state.directionalShadowMap,BJ.directionalShadowMatrix.value=y.state.directionalShadowMatrix,BJ.spotShadowMap.value=y.state.spotShadowMap,BJ.spotLightMatrix.value=y.state.spotLightMatrix,BJ.spotLightMap.value=y.state.spotLightMap,BJ.pointShadowMap.value=y.state.pointShadowMap,BJ.pointShadowMatrix.value=y.state.pointShadowMatrix;return b.currentProgram=SJ,b.uniformsList=null,SJ}function x$(L){if(L.uniformsList===null){let v=L.currentProgram.getUniforms();L.uniformsList=u6.seqWithValue(v.seq,L.uniforms)}return L.uniformsList}function b$(L,v){let x=NJ.get(L);x.outputColorSpace=v.outputColorSpace,x.batching=v.batching,x.batchingColor=v.batchingColor,x.instancing=v.instancing,x.instancingColor=v.instancingColor,x.instancingMorph=v.instancingMorph,x.skinning=v.skinning,x.morphTargets=v.morphTargets,x.morphNormals=v.morphNormals,x.morphColors=v.morphColors,x.morphTargetsCount=v.morphTargetsCount,x.numClippingPlanes=v.numClippingPlanes,x.numIntersection=v.numClipIntersection,x.vertexAlphas=v.vertexAlphas,x.vertexTangents=v.vertexTangents,x.toneMapping=v.toneMapping}function qX(L,v,x,b,y){if(v.isScene!==!0)v=cJ;bJ.resetTextureUnits();let r=v.fog,YJ=b.isMeshStandardMaterial?v.environment:null,OJ=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:h0,EJ=(b.isMeshStandardMaterial?D0:w0).get(b.envMap||YJ),TJ=b.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,SJ=!!x.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),BJ=!!x.morphAttributes.position,mJ=!!x.morphAttributes.normal,J0=!!x.morphAttributes.color,N0=A8;if(b.toneMapped){if(w===null||w.isXRRenderTarget===!0)N0=M.toneMapping}let U0=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,Q0=U0!==void 0?U0.length:0,_J=NJ.get(b),q0=O.state.lights;if(ZJ===!0){if(zJ===!0||L!==V){let j0=L===V&&b.id===f;QJ.setState(b,L,j0)}}let nJ=!1;if(b.version===_J.__version){if(_J.needsLights&&_J.lightsStateVersion!==q0.state.version)nJ=!0;else if(_J.outputColorSpace!==OJ)nJ=!0;else if(y.isBatchedMesh&&_J.batching===!1)nJ=!0;else if(!y.isBatchedMesh&&_J.batching===!0)nJ=!0;else if(y.isBatchedMesh&&_J.batchingColor===!0&&y.colorTexture===null)nJ=!0;else if(y.isBatchedMesh&&_J.batchingColor===!1&&y.colorTexture!==null)nJ=!0;else if(y.isInstancedMesh&&_J.instancing===!1)nJ=!0;else if(!y.isInstancedMesh&&_J.instancing===!0)nJ=!0;else if(y.isSkinnedMesh&&_J.skinning===!1)nJ=!0;else if(!y.isSkinnedMesh&&_J.skinning===!0)nJ=!0;else if(y.isInstancedMesh&&_J.instancingColor===!0&&y.instanceColor===null)nJ=!0;else if(y.isInstancedMesh&&_J.instancingColor===!1&&y.instanceColor!==null)nJ=!0;else if(y.isInstancedMesh&&_J.instancingMorph===!0&&y.morphTexture===null)nJ=!0;else if(y.isInstancedMesh&&_J.instancingMorph===!1&&y.morphTexture!==null)nJ=!0;else if(_J.envMap!==EJ)nJ=!0;else if(b.fog===!0&&_J.fog!==r)nJ=!0;else if(_J.numClippingPlanes!==void 0&&(_J.numClippingPlanes!==QJ.numPlanes||_J.numIntersection!==QJ.numIntersection))nJ=!0;else if(_J.vertexAlphas!==TJ)nJ=!0;else if(_J.vertexTangents!==SJ)nJ=!0;else if(_J.morphTargets!==BJ)nJ=!0;else if(_J.morphNormals!==mJ)nJ=!0;else if(_J.morphColors!==J0)nJ=!0;else if(_J.toneMapping!==N0)nJ=!0;else if(_J.morphTargetsCount!==Q0)nJ=!0}else nJ=!0,_J.__version=b.version;let m0=_J.currentProgram;if(nJ===!0)m0=e6(b,v,y);let _9=!1,u0=!1,O6=!1,G0=m0.getUniforms(),e0=_J.uniforms;if(kJ.useProgram(m0.program))_9=!0,u0=!0,O6=!0;if(b.id!==f)f=b.id,u0=!0;if(_9||V!==L){if(kJ.buffers.depth.getReversed())PJ.copy(L.projectionMatrix),BH(PJ),_H(PJ),G0.setValue(T,"projectionMatrix",PJ);else G0.setValue(T,"projectionMatrix",L.projectionMatrix);G0.setValue(T,"viewMatrix",L.matrixWorldInverse);let p0=G0.map.cameraPosition;if(p0!==void 0)p0.setValue(T,fJ.setFromMatrixPosition(L.matrixWorld));if($0.logarithmicDepthBuffer)G0.setValue(T,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)G0.setValue(T,"isOrthographic",L.isOrthographicCamera===!0);if(V!==L)V=L,u0=!0,O6=!0}if(y.isSkinnedMesh){G0.setOptional(T,y,"bindMatrix"),G0.setOptional(T,y,"bindMatrixInverse");let j0=y.skeleton;if(j0){if(j0.boneTexture===null)j0.computeBoneTexture();G0.setValue(T,"boneTexture",j0.boneTexture,bJ)}}if(y.isBatchedMesh){if(G0.setOptional(T,y,"batchingTexture"),G0.setValue(T,"batchingTexture",y._matricesTexture,bJ),G0.setOptional(T,y,"batchingIdTexture"),G0.setValue(T,"batchingIdTexture",y._indirectTexture,bJ),G0.setOptional(T,y,"batchingColorTexture"),y._colorsTexture!==null)G0.setValue(T,"batchingColorTexture",y._colorsTexture,bJ)}let J8=x.morphAttributes;if(J8.position!==void 0||J8.normal!==void 0||J8.color!==void 0)e.update(y,x,m0);if(u0||_J.receiveShadow!==y.receiveShadow)_J.receiveShadow=y.receiveShadow,G0.setValue(T,"receiveShadow",y.receiveShadow);if(b.isMeshGouraudMaterial&&b.envMap!==null)e0.envMap.value=EJ,e0.flipEnvMap.value=EJ.isCubeTexture&&EJ.isRenderTargetTexture===!1?-1:1;if(b.isMeshStandardMaterial&&b.envMap===null&&v.environment!==null)e0.envMapIntensity.value=v.environmentIntensity;if(u0){if(G0.setValue(T,"toneMappingExposure",M.toneMappingExposure),_J.needsLights)NX(e0,O6);if(r&&b.fog===!0)i.refreshFogUniforms(e0,r);i.refreshMaterialUniforms(e0,b,t,d,O.state.transmissionRenderTarget[L.id]),u6.upload(T,x$(_J),e0,bJ)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)u6.upload(T,x$(_J),e0,bJ),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)G0.setValue(T,"center",y.center);if(G0.setValue(T,"modelViewMatrix",y.modelViewMatrix),G0.setValue(T,"normalMatrix",y.normalMatrix),G0.setValue(T,"modelMatrix",y.matrixWorld),b.isShaderMaterial||b.isRawShaderMaterial){let j0=b.uniformsGroups;for(let p0=0,zQ=j0.length;p0<zQ;p0++){let $9=j0[p0];hJ.update($9,m0),hJ.bind($9,m0)}}return m0}function NX(L,v){L.ambientLightColor.needsUpdate=v,L.lightProbe.needsUpdate=v,L.directionalLights.needsUpdate=v,L.directionalLightShadows.needsUpdate=v,L.pointLights.needsUpdate=v,L.pointLightShadows.needsUpdate=v,L.spotLights.needsUpdate=v,L.spotLightShadows.needsUpdate=v,L.rectAreaLights.needsUpdate=v,L.hemisphereLights.needsUpdate=v}function OX(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,v,x){let b=NJ.get(L);if(b.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;NJ.get(L.texture).__webglTexture=v,NJ.get(L.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:x,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,v){let x=NJ.get(L);x.__webglFramebuffer=v,x.__useDefaultFramebuffer=v===void 0};let FX=T.createFramebuffer();this.setRenderTarget=function(L,v=0,x=0){w=L,P=v,_=x;let b=!0,y=null,r=!1,YJ=!1;if(L){let EJ=NJ.get(L);if(EJ.__useDefaultFramebuffer!==void 0)kJ.bindFramebuffer(T.FRAMEBUFFER,null),b=!1;else if(EJ.__webglFramebuffer===void 0)bJ.setupRenderTarget(L);else if(EJ.__hasExternalTextures)bJ.rebindTextures(L,NJ.get(L.texture).__webglTexture,NJ.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let BJ=L.depthTexture;if(EJ.__boundDepthTexture!==BJ){if(BJ!==null&&NJ.has(BJ)&&(L.width!==BJ.image.width||L.height!==BJ.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");bJ.setupDepthRenderbuffer(L)}}let TJ=L.texture;if(TJ.isData3DTexture||TJ.isDataArrayTexture||TJ.isCompressedArrayTexture)YJ=!0;let SJ=NJ.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget){if(Array.isArray(SJ[v]))y=SJ[v][x];else y=SJ[v];r=!0}else if(L.samples>0&&bJ.useMultisampledRTT(L)===!1)y=NJ.get(L).__webglMultisampledFramebuffer;else if(Array.isArray(SJ))y=SJ[x];else y=SJ;z.copy(L.viewport),j.copy(L.scissor),g=L.scissorTest}else z.copy(UJ).multiplyScalar(t).floor(),j.copy(jJ).multiplyScalar(t).floor(),g=dJ;if(x!==0)y=FX;if(kJ.bindFramebuffer(T.FRAMEBUFFER,y)&&b)kJ.drawBuffers(L,y);if(kJ.viewport(z),kJ.scissor(j),kJ.setScissorTest(g),r){let EJ=NJ.get(L.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+v,EJ.__webglTexture,x)}else if(YJ){let EJ=NJ.get(L.texture),TJ=v;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,EJ.__webglTexture,x,TJ)}else if(L!==null&&x!==0){let EJ=NJ.get(L.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,EJ.__webglTexture,x)}f=-1},this.readRenderTargetPixels=function(L,v,x,b,y,r,YJ,OJ=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let EJ=NJ.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&YJ!==void 0)EJ=EJ[YJ];if(EJ){kJ.bindFramebuffer(T.FRAMEBUFFER,EJ);try{let TJ=L.textures[OJ],SJ=TJ.format,BJ=TJ.type;if(!$0.textureFormatReadable(SJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$0.textureTypeReadable(BJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=L.width-b&&(x>=0&&x<=L.height-y)){if(L.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+OJ);T.readPixels(v,x,b,y,MJ.convert(SJ),MJ.convert(BJ),r)}}finally{let TJ=w!==null?NJ.get(w).__webglFramebuffer:null;kJ.bindFramebuffer(T.FRAMEBUFFER,TJ)}}},this.readRenderTargetPixelsAsync=async function(L,v,x,b,y,r,YJ,OJ=0){if(!(L&&L.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let EJ=NJ.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&YJ!==void 0)EJ=EJ[YJ];if(EJ)if(v>=0&&v<=L.width-b&&(x>=0&&x<=L.height-y)){kJ.bindFramebuffer(T.FRAMEBUFFER,EJ);let TJ=L.textures[OJ],SJ=TJ.format,BJ=TJ.type;if(!$0.textureFormatReadable(SJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$0.textureTypeReadable(BJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mJ=T.createBuffer();if(T.bindBuffer(T.PIXEL_PACK_BUFFER,mJ),T.bufferData(T.PIXEL_PACK_BUFFER,r.byteLength,T.STREAM_READ),L.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+OJ);T.readPixels(v,x,b,y,MJ.convert(SJ),MJ.convert(BJ),0);let J0=w!==null?NJ.get(w).__webglFramebuffer:null;kJ.bindFramebuffer(T.FRAMEBUFFER,J0);let N0=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await zH(T,N0,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,mJ),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,r),T.deleteBuffer(mJ),T.deleteSync(N0),r}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,v=null,x=0){let b=Math.pow(2,-x),y=Math.floor(L.image.width*b),r=Math.floor(L.image.height*b),YJ=v!==null?v.x:0,OJ=v!==null?v.y:0;bJ.setTexture2D(L,0),T.copyTexSubImage2D(T.TEXTURE_2D,x,0,0,YJ,OJ,y,r),kJ.unbindTexture()};let RX=T.createFramebuffer(),kX=T.createFramebuffer();if(this.copyTextureToTexture=function(L,v,x=null,b=null,y=0,r=null){if(r===null)if(y!==0)U9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),r=y,y=0;else r=0;let YJ,OJ,EJ,TJ,SJ,BJ,mJ,J0,N0,U0=L.isCompressedTexture?L.mipmaps[r]:L.image;if(x!==null)YJ=x.max.x-x.min.x,OJ=x.max.y-x.min.y,EJ=x.isBox3?x.max.z-x.min.z:1,TJ=x.min.x,SJ=x.min.y,BJ=x.isBox3?x.min.z:0;else{let J8=Math.pow(2,-y);if(YJ=Math.floor(U0.width*J8),OJ=Math.floor(U0.height*J8),L.isDataArrayTexture)EJ=U0.depth;else if(L.isData3DTexture)EJ=Math.floor(U0.depth*J8);else EJ=1;TJ=0,SJ=0,BJ=0}if(b!==null)mJ=b.x,J0=b.y,N0=b.z;else mJ=0,J0=0,N0=0;let Q0=MJ.convert(v.format),_J=MJ.convert(v.type),q0;if(v.isData3DTexture)bJ.setTexture3D(v,0),q0=T.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)bJ.setTexture2DArray(v,0),q0=T.TEXTURE_2D_ARRAY;else bJ.setTexture2D(v,0),q0=T.TEXTURE_2D;T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let nJ=T.getParameter(T.UNPACK_ROW_LENGTH),m0=T.getParameter(T.UNPACK_IMAGE_HEIGHT),_9=T.getParameter(T.UNPACK_SKIP_PIXELS),u0=T.getParameter(T.UNPACK_SKIP_ROWS),O6=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,U0.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,U0.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,TJ),T.pixelStorei(T.UNPACK_SKIP_ROWS,SJ),T.pixelStorei(T.UNPACK_SKIP_IMAGES,BJ);let G0=L.isDataArrayTexture||L.isData3DTexture,e0=v.isDataArrayTexture||v.isData3DTexture;if(L.isDepthTexture){let J8=NJ.get(L),j0=NJ.get(v),p0=NJ.get(J8.__renderTarget),zQ=NJ.get(j0.__renderTarget);kJ.bindFramebuffer(T.READ_FRAMEBUFFER,p0.__webglFramebuffer),kJ.bindFramebuffer(T.DRAW_FRAMEBUFFER,zQ.__webglFramebuffer);for(let $9=0;$9<EJ;$9++){if(G0)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,NJ.get(L).__webglTexture,y,BJ+$9),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,NJ.get(v).__webglTexture,r,N0+$9);T.blitFramebuffer(TJ,SJ,YJ,OJ,mJ,J0,YJ,OJ,T.DEPTH_BUFFER_BIT,T.NEAREST)}kJ.bindFramebuffer(T.READ_FRAMEBUFFER,null),kJ.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(y!==0||L.isRenderTargetTexture||NJ.has(L)){let J8=NJ.get(L),j0=NJ.get(v);kJ.bindFramebuffer(T.READ_FRAMEBUFFER,RX),kJ.bindFramebuffer(T.DRAW_FRAMEBUFFER,kX);for(let p0=0;p0<EJ;p0++){if(G0)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,J8.__webglTexture,y,BJ+p0);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,J8.__webglTexture,y);if(e0)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,j0.__webglTexture,r,N0+p0);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,j0.__webglTexture,r);if(y!==0)T.blitFramebuffer(TJ,SJ,YJ,OJ,mJ,J0,YJ,OJ,T.COLOR_BUFFER_BIT,T.NEAREST);else if(e0)T.copyTexSubImage3D(q0,r,mJ,J0,N0+p0,TJ,SJ,YJ,OJ);else T.copyTexSubImage2D(q0,r,mJ,J0,TJ,SJ,YJ,OJ)}kJ.bindFramebuffer(T.READ_FRAMEBUFFER,null),kJ.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(e0)if(L.isDataTexture||L.isData3DTexture)T.texSubImage3D(q0,r,mJ,J0,N0,YJ,OJ,EJ,Q0,_J,U0.data);else if(v.isCompressedArrayTexture)T.compressedTexSubImage3D(q0,r,mJ,J0,N0,YJ,OJ,EJ,Q0,U0.data);else T.texSubImage3D(q0,r,mJ,J0,N0,YJ,OJ,EJ,Q0,_J,U0);else if(L.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,r,mJ,J0,YJ,OJ,Q0,_J,U0.data);else if(L.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,r,mJ,J0,U0.width,U0.height,Q0,U0.data);else T.texSubImage2D(T.TEXTURE_2D,r,mJ,J0,YJ,OJ,Q0,_J,U0);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,nJ),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,m0),T.pixelStorei(T.UNPACK_SKIP_PIXELS,_9),T.pixelStorei(T.UNPACK_SKIP_ROWS,u0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,O6),r===0&&v.generateMipmaps)T.generateMipmap(q0);kJ.unbindTexture()},this.copyTextureToTexture3D=function(L,v,x=null,b=null,y=0){return U9('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,v,x,b,y)},this.initRenderTarget=function(L){if(NJ.get(L).__webglFramebuffer===void 0)bJ.setupRenderTarget(L)},this.initTexture=function(L){if(L.isCubeTexture)bJ.setTextureCube(L,0);else if(L.isData3DTexture)bJ.setTexture3D(L,0);else if(L.isDataArrayTexture||L.isCompressedArrayTexture)bJ.setTexture2DArray(L,0);else bJ.setTexture2D(L,0);kJ.unbindTexture()},this.resetState=function(){P=0,_=0,w=null,kJ.reset(),HJ.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return LH}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=uJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=uJ._getUnpackColorSpace()}}function R$(J,Q){if(Q===hZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===o9||Q===S6){let Z=J.getIndex();if(Z===null){let Y=[],X=J.getAttribute("position");if(X!==void 0){for(let K=0;K<X.count;K++)Y.push(K);J.setIndex(Y),Z=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let $=Z.count-2,W=[];if(Q===o9)for(let Y=1;Y<=$;Y++)W.push(Z.getX(0)),W.push(Z.getX(Y)),W.push(Z.getX(Y+1));else for(let Y=0;Y<$;Y++)if(Y%2===0)W.push(Z.getX(Y)),W.push(Z.getX(Y+1)),W.push(Z.getX(Y+2));else W.push(Z.getX(Y+2)),W.push(Z.getX(Y+1)),W.push(Z.getX(Y));if(W.length/3!==$)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let H=J.clone();return H.setIndex(W),H.clearGroups(),H}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class z$ extends x8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new zY(Q)}),this.register(function(Q){return new BY(Q)}),this.register(function(Q){return new jY(Q)}),this.register(function(Q){return new vY(Q)}),this.register(function(Q){return new yY(Q)}),this.register(function(Q){return new CY(Q)}),this.register(function(Q){return new wY(Q)}),this.register(function(Q){return new IY(Q)}),this.register(function(Q){return new PY(Q)}),this.register(function(Q){return new VY(Q)}),this.register(function(Q){return new TY(Q)}),this.register(function(Q){return new _Y(Q)}),this.register(function(Q){return new SY(Q)}),this.register(function(Q){return new AY(Q)}),this.register(function(Q){return new MY(Q)}),this.register(function(Q){return new fY(Q)}),this.register(function(Q){return new hY(Q)})}load(J,Q,Z,$){let W=this,H;if(this.resourcePath!=="")H=this.resourcePath;else if(this.path!==""){let K=e8.extractUrlBase(J);H=e8.resolveURL(K,this.path)}else H=e8.extractUrlBase(J);this.manager.itemStart(J);let Y=function(K){if($)$(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},X=new d6(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(K){try{W.parse(K,H,function(U){Q(U),W.manager.itemEnd(J)},Y)}catch(U){Y(U)}},Z,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,Z,$){let W,H={},Y={},X=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===xY){try{H[lJ.KHR_BINARY_GLTF]=new bY(J)}catch(G){if($)$(G);return}W=JSON.parse(H[lJ.KHR_BINARY_GLTF].content)}else W=JSON.parse(X.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if($)$(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new mY(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[G.name]=G,H[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case lJ.KHR_MATERIALS_UNLIT:H[G]=new LY;break;case lJ.KHR_DRACO_MESH_COMPRESSION:H[G]=new gY(W,this.dracoLoader);break;case lJ.KHR_TEXTURE_TRANSFORM:H[G]=new pY;break;case lJ.KHR_MESH_QUANTIZATION:H[G]=new lY;break;default:if(E.indexOf(G)>=0&&Y[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(H),K.setPlugins(Y),K.parse(Z,$)}parseAsync(J,Q){let Z=this;return new Promise(function($,W){Z.parse(J,Q,$,W)})}}function s1(){let J={};return{get:function(Q){return J[Q]},add:function(Q,Z){J[Q]=Z},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var lJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class MY{constructor(J){this.parser=J,this.name=lJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,Z="light:"+J,$=Q.cache.get(Z);if($)return $;let W=Q.json,X=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,U=new VJ(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],h0);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":K=new X6(U),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new KQ(U),K.distance=G;break;case"spot":K=new XQ(U),K.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,K.angle=X.spot.outerConeAngle,K.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(K.position.set(0,0,0),b8(K,X),X.intensity!==void 0)K.intensity=X.intensity;return K.name=Q.createUniqueName(X.name||"light_"+J),$=Promise.resolve(K),Q.cache.add(Z,$),$}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,Z=this.parser,W=Z.json.nodes[J],Y=(W.extensions&&W.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return Z._getNodeRef(Q.cache,Y,X)})}}class LY{constructor(){this.name=lJ.KHR_MATERIALS_UNLIT}getMaterialType(){return D8}extendParams(J,Q,Z){let $=[];J.color=new VJ(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let H=W.baseColorFactor;J.color.setRGB(H[0],H[1],H[2],h0),J.opacity=H[3]}if(W.baseColorTexture!==void 0)$.push(Z.assignTexture(J,"map",W.baseColorTexture,H8))}return Promise.all($)}}class VY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class zY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(H.clearcoatFactor!==void 0)Q.clearcoat=H.clearcoatFactor;if(H.clearcoatTexture!==void 0)W.push(Z.assignTexture(Q,"clearcoatMap",H.clearcoatTexture));if(H.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=H.clearcoatRoughnessFactor;if(H.clearcoatRoughnessTexture!==void 0)W.push(Z.assignTexture(Q,"clearcoatRoughnessMap",H.clearcoatRoughnessTexture));if(H.clearcoatNormalTexture!==void 0){if(W.push(Z.assignTexture(Q,"clearcoatNormalMap",H.clearcoatNormalTexture)),H.clearcoatNormalTexture.scale!==void 0){let Y=H.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new wJ(Y,Y)}}return Promise.all(W)}}class BY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class _Y{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(H.iridescenceFactor!==void 0)Q.iridescence=H.iridescenceFactor;if(H.iridescenceTexture!==void 0)W.push(Z.assignTexture(Q,"iridescenceMap",H.iridescenceTexture));if(H.iridescenceIor!==void 0)Q.iridescenceIOR=H.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(H.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=H.iridescenceThicknessMinimum;if(H.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=H.iridescenceThicknessMaximum;if(H.iridescenceThicknessTexture!==void 0)W.push(Z.assignTexture(Q,"iridescenceThicknessMap",H.iridescenceThicknessTexture));return Promise.all(W)}}class CY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_SHEEN}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new VJ(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let H=$.extensions[this.name];if(H.sheenColorFactor!==void 0){let Y=H.sheenColorFactor;Q.sheenColor.setRGB(Y[0],Y[1],Y[2],h0)}if(H.sheenRoughnessFactor!==void 0)Q.sheenRoughness=H.sheenRoughnessFactor;if(H.sheenColorTexture!==void 0)W.push(Z.assignTexture(Q,"sheenColorMap",H.sheenColorTexture,H8));if(H.sheenRoughnessTexture!==void 0)W.push(Z.assignTexture(Q,"sheenRoughnessMap",H.sheenRoughnessTexture));return Promise.all(W)}}class wY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(H.transmissionFactor!==void 0)Q.transmission=H.transmissionFactor;if(H.transmissionTexture!==void 0)W.push(Z.assignTexture(Q,"transmissionMap",H.transmissionTexture));return Promise.all(W)}}class IY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_VOLUME}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(Q.thickness=H.thicknessFactor!==void 0?H.thicknessFactor:0,H.thicknessTexture!==void 0)W.push(Z.assignTexture(Q,"thicknessMap",H.thicknessTexture));Q.attenuationDistance=H.attenuationDistance||1/0;let Y=H.attenuationColor||[1,1,1];return Q.attenuationColor=new VJ().setRGB(Y[0],Y[1],Y[2],h0),Promise.all(W)}}class PY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_IOR}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class TY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(Q.specularIntensity=H.specularFactor!==void 0?H.specularFactor:1,H.specularTexture!==void 0)W.push(Z.assignTexture(Q,"specularIntensityMap",H.specularTexture));let Y=H.specularColorFactor||[1,1,1];if(Q.specularColor=new VJ().setRGB(Y[0],Y[1],Y[2],h0),H.specularColorTexture!==void 0)W.push(Z.assignTexture(Q,"specularColorMap",H.specularColorTexture,H8));return Promise.all(W)}}class AY{constructor(J){this.parser=J,this.name=lJ.EXT_MATERIALS_BUMP}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(Q.bumpScale=H.bumpFactor!==void 0?H.bumpFactor:1,H.bumpTexture!==void 0)W.push(Z.assignTexture(Q,"bumpMap",H.bumpTexture));return Promise.all(W)}}class SY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return r0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(H.anisotropyStrength!==void 0)Q.anisotropy=H.anisotropyStrength;if(H.anisotropyRotation!==void 0)Q.anisotropyRotation=H.anisotropyRotation;if(H.anisotropyTexture!==void 0)W.push(Z.assignTexture(Q,"anisotropyMap",H.anisotropyTexture));return Promise.all(W)}}class jY{constructor(J){this.parser=J,this.name=lJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,Z=Q.json,$=Z.textures[J];if(!$.extensions||!$.extensions[this.name])return null;let W=$.extensions[this.name],H=Q.options.ktx2Loader;if(!H)if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,H)}}class vY{constructor(J){this.parser=J,this.name=lJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,Z=this.parser,$=Z.json,W=$.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=$.images[H.source],X=Z.textureLoader;if(Y.uri){let K=Z.options.manager.getHandler(Y.uri);if(K!==null)X=K}return Z.loadTextureImage(J,H.source,X)}}class yY{constructor(J){this.parser=J,this.name=lJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,Z=this.parser,$=Z.json,W=$.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=$.images[H.source],X=Z.textureLoader;if(Y.uri){let K=Z.options.manager.getHandler(Y.uri);if(K!==null)X=K}return Z.loadTextureImage(J,H.source,X)}}class fY{constructor(J){this.name=lJ.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,Z=Q.bufferViews[J];if(Z.extensions&&Z.extensions[this.name]){let $=Z.extensions[this.name],W=this.parser.getDependency("buffer",$.buffer),H=this.parser.options.meshoptDecoder;if(!H||!H.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(Y){let X=$.byteOffset||0,K=$.byteLength||0,U=$.count,G=$.byteStride,E=new Uint8Array(Y,X,K);if(H.decodeGltfBufferAsync)return H.decodeGltfBufferAsync(U,G,E,$.mode,$.filter).then(function(q){return q.buffer});else return H.ready.then(function(){let q=new ArrayBuffer(U*G);return H.decodeGltfBuffer(new Uint8Array(q),U,G,E,$.mode,$.filter),q})})}else return null}}class hY{constructor(J){this.name=lJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,Z=Q.nodes[J];if(!Z.extensions||!Z.extensions[this.name]||Z.mesh===void 0)return null;let $=Q.meshes[Z.mesh];for(let K of $.primitives)if(K.mode!==Y8.TRIANGLES&&K.mode!==Y8.TRIANGLE_STRIP&&K.mode!==Y8.TRIANGLE_FAN&&K.mode!==void 0)return null;let H=Z.extensions[this.name].attributes,Y=[],X={};for(let K in H)Y.push(this.parser.getDependency("accessor",H[K]).then((U)=>{return X[K]=U,X[K]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((K)=>{let U=K.pop(),G=U.isGroup?U.children:[U],E=K[0].count,q=[];for(let F of G){let D=new AJ,k=new A,O=new T0,N=new A(1,1,1),B=new a7(F.geometry,F.material,E);for(let M=0;M<E;M++){if(X.TRANSLATION)k.fromBufferAttribute(X.TRANSLATION,M);if(X.ROTATION)O.fromBufferAttribute(X.ROTATION,M);if(X.SCALE)N.fromBufferAttribute(X.SCALE,M);B.setMatrixAt(M,D.compose(k,O,N))}for(let M in X)if(M==="_COLOR_0"){let I=X[M];B.instanceColor=new G9(I.array,I.itemSize,I.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE")F.geometry.setAttribute(M,X[M]);Y0.prototype.copy.call(B,F),this.parser.assignFinalMaterial(B),q.push(B)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var xY="glTF",n6=12,FY={JSON:1313821514,BIN:5130562};class bY{constructor(J){this.name=lJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,n6),Z=new TextDecoder;if(this.header={magic:Z.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==xY)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let $=this.header.length-n6,W=new DataView(J,n6),H=0;while(H<$){let Y=W.getUint32(H,!0);H+=4;let X=W.getUint32(H,!0);if(H+=4,X===FY.JSON){let K=new Uint8Array(J,n6+H,Y);this.content=Z.decode(K)}else if(X===FY.BIN){let K=n6+H;this.body=J.slice(K,K+Y)}H+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class gY{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let Z=this.json,$=this.dracoLoader,W=J.extensions[this.name].bufferView,H=J.extensions[this.name].attributes,Y={},X={},K={};for(let U in H){let G=L$[U]||U.toLowerCase();Y[G]=H[U]}for(let U in J.attributes){let G=L$[U]||U.toLowerCase();if(H[U]!==void 0){let E=Z.accessors[J.attributes[U]],q=E6[E.componentType];K[G]=q.name,X[G]=E.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){$.decodeDracoFile(U,function(q){for(let F in q.attributes){let D=q.attributes[F],k=X[F];if(k!==void 0)D.normalized=k}G(q)},Y,K,h0,E)})})}}class pY{constructor(){this.name=lJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class lY{constructor(){this.name=lJ.KHR_MESH_QUANTIZATION}}class B$ extends a8{constructor(J,Q,Z,$){super(J,Q,Z,$)}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$*3+$;for(let H=0;H!==$;H++)Q[H]=Z[W+H];return Q}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=Y*2,K=Y*3,U=$-Q,G=(Z-Q)/U,E=G*G,q=E*G,F=J*K,D=F-K,k=-2*q+3*E,O=q-E,N=1-k,B=O-E+G;for(let M=0;M!==Y;M++){let I=H[D+M+Y],P=H[D+M+X]*U,_=H[F+M+Y],w=H[F+M]*U;W[M]=N*I+B*P+k*_+O*w}return W}}var i1=new T0;class dY extends B${interpolate_(J,Q,Z,$){let W=super.interpolate_(J,Q,Z,$);return i1.fromArray(W).normalize().toArray(W),W}}var Y8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},E6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},RY={9728:O8,9729:i0,9984:x7,9985:n9,9986:q9,9987:S8},kY={33071:f7,33648:h7,10497:c9},k$={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},L$={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},J9={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},o1={CUBICSPLINE:void 0,LINEAR:u7,STEP:fZ},D$={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function a1(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new W6({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:n8});return J.DefaultMaterial}function z9(J,Q,Z){for(let $ in Z.extensions)if(J[$]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[$]=Z.extensions[$]}function b8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function r1(J,Q,Z){let $=!1,W=!1,H=!1;for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(E.POSITION!==void 0)$=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)H=!0;if($&&W&&H)break}if(!$&&!W&&!H)return Promise.resolve(J);let Y=[],X=[],K=[];for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if($){let q=E.POSITION!==void 0?Z.getDependency("accessor",E.POSITION):J.attributes.position;Y.push(q)}if(W){let q=E.NORMAL!==void 0?Z.getDependency("accessor",E.NORMAL):J.attributes.normal;X.push(q)}if(H){let q=E.COLOR_0!==void 0?Z.getDependency("accessor",E.COLOR_0):J.attributes.color;K.push(q)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(K)]).then(function(U){let G=U[0],E=U[1],q=U[2];if($)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=E;if(H)J.morphAttributes.color=q;return J.morphTargetsRelative=!0,J})}function t1(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let Z=0,$=Q.weights.length;Z<$;Z++)J.morphTargetInfluences[Z]=Q.weights[Z];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let Z=Q.extras.targetNames;if(J.morphTargetInfluences.length===Z.length){J.morphTargetDictionary={};for(let $=0,W=Z.length;$<W;$++)J.morphTargetDictionary[Z[$]]=$}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function e1(J){let Q,Z=J.extensions&&J.extensions[lJ.KHR_DRACO_MESH_COMPRESSION];if(Z)Q="draco:"+Z.bufferView+":"+Z.indices+":"+M$(Z.attributes);else Q=J.indices+":"+M$(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let $=0,W=J.targets.length;$<W;$++)Q+=":"+M$(J.targets[$]);return Q}function M$(J){let Q="",Z=Object.keys(J).sort();for(let $=0,W=Z.length;$<W;$++)Q+=Z[$]+":"+J[Z[$]]+";";return Q}function V$(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jq(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var Qq=new AJ;class mY{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new s1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Z=!1,$=-1,W=!1,H=-1;if(typeof navigator<"u"){let Y=navigator.userAgent;Z=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);$=Z&&X?parseInt(X[1],10):-1,W=Y.indexOf("Firefox")>-1,H=W?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Z&&$<17||W&&H<98)this.textureLoader=new k9(this.options.manager);else this.textureLoader=new UQ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new d6(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let Z=this,$=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(H){return H._markDefs&&H._markDefs()}),Promise.all(this._invokeAll(function(H){return H.beforeRoot&&H.beforeRoot()})).then(function(){return Promise.all([Z.getDependencies("scene"),Z.getDependencies("animation"),Z.getDependencies("camera")])}).then(function(H){let Y={scene:H[0][$.scene||0],scenes:H[0],animations:H[1],cameras:H[2],asset:$.asset,parser:Z,userData:{}};return z9(W,Y,$),b8(Y,$),Promise.all(Z._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],Z=this.json.meshes||[];for(let $=0,W=Q.length;$<W;$++){let H=Q[$].joints;for(let Y=0,X=H.length;Y<X;Y++)J[H[Y]].isBone=!0}for(let $=0,W=J.length;$<W;$++){let H=J[$];if(H.mesh!==void 0){if(this._addNodeRef(this.meshCache,H.mesh),H.skin!==void 0)Z[H.mesh].isSkinnedMesh=!0}if(H.camera!==void 0)this._addNodeRef(this.cameraCache,H.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,Z){if(J.refs[Q]<=1)return Z;let $=Z.clone(),W=(H,Y)=>{let X=this.associations.get(H);if(X!=null)this.associations.set(Y,X);for(let[K,U]of H.children.entries())W(U,Y.children[K])};return W(Z,$),$.name+="_instance_"+J.uses[Q]++,$}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let Z=0;Z<Q.length;Z++){let $=J(Q[Z]);if($)return $}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let Z=[];for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)Z.push(W)}return Z}getDependency(J,Q){let Z=J+":"+Q,$=this.cache.get(Z);if(!$){switch(J){case"scene":$=this.loadScene(Q);break;case"node":$=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":$=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":$=this.loadAccessor(Q);break;case"bufferView":$=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":$=this.loadBuffer(Q);break;case"material":$=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":$=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":$=this.loadSkin(Q);break;case"animation":$=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":$=this.loadCamera(Q);break;default:if($=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!$)throw Error("Unknown type: "+J);break}this.cache.add(Z,$)}return $}getDependencies(J){let Q=this.cache.get(J);if(!Q){let Z=this,$=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all($.map(function(W,H){return Z.getDependency(J,H)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],Z=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[lJ.KHR_BINARY_GLTF].body);let $=this.options;return new Promise(function(W,H){Z.load(e8.resolveURL(Q.uri,$.path),W,void 0,function(){H(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function(Z){let $=Q.byteLength||0,W=Q.byteOffset||0;return Z.slice(W,W+$)})}loadAccessor(J){let Q=this,Z=this.json,$=this.json.accessors[J];if($.bufferView===void 0&&$.sparse===void 0){let H=k$[$.type],Y=E6[$.componentType],X=$.normalized===!0,K=new Y($.count*H);return Promise.resolve(new O0(K,H,X))}let W=[];if($.bufferView!==void 0)W.push(this.getDependency("bufferView",$.bufferView));else W.push(null);if($.sparse!==void 0)W.push(this.getDependency("bufferView",$.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",$.sparse.values.bufferView));return Promise.all(W).then(function(H){let Y=H[0],X=k$[$.type],K=E6[$.componentType],U=K.BYTES_PER_ELEMENT,G=U*X,E=$.byteOffset||0,q=$.bufferView!==void 0?Z.bufferViews[$.bufferView].byteStride:void 0,F=$.normalized===!0,D,k;if(q&&q!==G){let O=Math.floor(E/q),N="InterleavedBuffer:"+$.bufferView+":"+$.componentType+":"+O+":"+$.count,B=Q.cache.get(N);if(!B)D=new K(Y,O*q,$.count*q/U),B=new h6(D,q/U),Q.cache.add(N,B);k=new e9(B,X,E%q/U,F)}else{if(Y===null)D=new K($.count*X);else D=new K(Y,E,$.count*X);k=new O0(D,X,F)}if($.sparse!==void 0){let O=k$.SCALAR,N=E6[$.sparse.indices.componentType],B=$.sparse.indices.byteOffset||0,M=$.sparse.values.byteOffset||0,I=new N(H[1],B,$.sparse.count*O),P=new K(H[2],M,$.sparse.count*X);if(Y!==null)k=new O0(k.array.slice(),k.itemSize,k.normalized);k.normalized=!1;for(let _=0,w=I.length;_<w;_++){let f=I[_];if(k.setX(f,P[_*X]),X>=2)k.setY(f,P[_*X+1]);if(X>=3)k.setZ(f,P[_*X+2]);if(X>=4)k.setW(f,P[_*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}k.normalized=F}return k})}loadTexture(J){let Q=this.json,Z=this.options,W=Q.textures[J].source,H=Q.images[W],Y=this.textureLoader;if(H.uri){let X=Z.manager.getHandler(H.uri);if(X!==null)Y=X}return this.loadTextureImage(J,W,Y)}loadTextureImage(J,Q,Z){let $=this,W=this.json,H=W.textures[J],Y=W.images[Q],X=(Y.uri||Y.bufferView)+":"+H.sampler;if(this.textureCache[X])return this.textureCache[X];let K=this.loadImageSource(Q,Z).then(function(U){if(U.flipY=!1,U.name=H.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let E=(W.samplers||{})[H.sampler]||{};return U.magFilter=RY[E.magFilter]||i0,U.minFilter=RY[E.minFilter]||S8,U.wrapS=kY[E.wrapS]||c9,U.wrapT=kY[E.wrapT]||c9,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==O8&&U.minFilter!==i0,$.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=K,K}loadImageSource(J,Q){let Z=this,$=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let H=$.images[J],Y=self.URL||self.webkitURL,X=H.uri||"",K=!1;if(H.bufferView!==void 0)X=Z.getDependency("bufferView",H.bufferView).then(function(G){K=!0;let E=new Blob([G],{type:H.mimeType});return X=Y.createObjectURL(E),X});else if(H.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(G){return new Promise(function(E,q){let F=E;if(Q.isImageBitmapLoader===!0)F=function(D){let k=new k0(D);k.needsUpdate=!0,E(k)};Q.load(e8.resolveURL(G,W.path),F,void 0,q)})}).then(function(G){if(K===!0)Y.revokeObjectURL(X);return b8(G,H),G.userData.mimeType=H.mimeType||Jq(H.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,Z,$){let W=this;return this.getDependency("texture",Z.index).then(function(H){if(!H)return null;if(Z.texCoord!==void 0&&Z.texCoord>0)H=H.clone(),H.channel=Z.texCoord;if(W.extensions[lJ.KHR_TEXTURE_TRANSFORM]){let Y=Z.extensions!==void 0?Z.extensions[lJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=W.associations.get(H);H=W.extensions[lJ.KHR_TEXTURE_TRANSFORM].extendTexture(H,Y),W.associations.set(H,X)}}if($!==void 0)H.colorSpace=$;return J[Q]=H,H})}assignFinalMaterial(J){let{geometry:Q,material:Z}=J,$=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,H=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+Z.uuid,X=this.cache.get(Y);if(!X)X=new F9,x0.prototype.copy.call(X,Z),X.color.copy(Z.color),X.map=Z.map,X.sizeAttenuation=!1,this.cache.add(Y,X);Z=X}else if(J.isLine){let Y="LineBasicMaterial:"+Z.uuid,X=this.cache.get(Y);if(!X)X=new p6,x0.prototype.copy.call(X,Z),X.color.copy(Z.color),X.map=Z.map,this.cache.add(Y,X);Z=X}if($||W||H){let Y="ClonedMaterial:"+Z.uuid+":";if($)Y+="derivative-tangents:";if(W)Y+="vertex-colors:";if(H)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=Z.clone(),W)X.vertexColors=!0;if(H)X.flatShading=!0;if($){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get(Z))}Z=X}J.material=Z}getMaterialType(){return W6}loadMaterial(J){let Q=this,Z=this.json,$=this.extensions,W=Z.materials[J],H,Y={},X=W.extensions||{},K=[];if(X[lJ.KHR_MATERIALS_UNLIT]){let G=$[lJ.KHR_MATERIALS_UNLIT];H=G.getMaterialType(),K.push(G.extendParams(Y,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(Y.color=new VJ(1,1,1),Y.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;Y.color.setRGB(E[0],E[1],E[2],h0),Y.opacity=E[3]}if(G.baseColorTexture!==void 0)K.push(Q.assignTexture(Y,"map",G.baseColorTexture,H8));if(Y.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,Y.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(Y,"metalnessMap",G.metallicRoughnessTexture)),K.push(Q.assignTexture(Y,"roughnessMap",G.metallicRoughnessTexture));H=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,Y)})))}if(W.doubleSided===!0)Y.side=$8;let U=W.alphaMode||D$.OPAQUE;if(U===D$.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===D$.MASK)Y.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&H!==D8){if(K.push(Q.assignTexture(Y,"normalMap",W.normalTexture)),Y.normalScale=new wJ(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;Y.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&H!==D8){if(K.push(Q.assignTexture(Y,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)Y.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&H!==D8){let G=W.emissiveFactor;Y.emissive=new VJ().setRGB(G[0],G[1],G[2],h0)}if(W.emissiveTexture!==void 0&&H!==D8)K.push(Q.assignTexture(Y,"emissiveMap",W.emissiveTexture,H8));return Promise.all(K).then(function(){let G=new H(Y);if(W.name)G.name=W.name;if(b8(G,W),Q.associations.set(G,{materials:J}),W.extensions)z9($,G,W);return G})}createUniqueName(J){let Q=sJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,Z=this.extensions,$=this.primitiveCache;function W(Y){return Z[lJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return DY(X,Y,Q)})}let H=[];for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=e1(K),G=$[U];if(G)H.push(G.promise);else{let E;if(K.extensions&&K.extensions[lJ.KHR_DRACO_MESH_COMPRESSION])E=W(K);else E=DY(new C0,K,Q);$[U]={primitive:K,promise:E},H.push(E)}}return Promise.all(H)}loadMesh(J){let Q=this,Z=this.json,$=this.extensions,W=Z.meshes[J],H=W.primitives,Y=[];for(let X=0,K=H.length;X<K;X++){let U=H[X].material===void 0?a1(this.cache):this.getDependency("material",H[X].material);Y.push(U)}return Y.push(Q.loadGeometries(H)),Promise.all(Y).then(function(X){let K=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let q=0,F=U.length;q<F;q++){let D=U[q],k=H[q],O,N=K[q];if(k.mode===Y8.TRIANGLES||k.mode===Y8.TRIANGLE_STRIP||k.mode===Y8.TRIANGLE_FAN||k.mode===void 0){if(O=W.isSkinnedMesh===!0?new o7(D,N):new F0(D,N),O.isSkinnedMesh===!0)O.normalizeSkinWeights();if(k.mode===Y8.TRIANGLE_STRIP)O.geometry=R$(O.geometry,S6);else if(k.mode===Y8.TRIANGLE_FAN)O.geometry=R$(O.geometry,o9)}else if(k.mode===Y8.LINES)O=new r7(D,N);else if(k.mode===Y8.LINE_STRIP)O=new Q6(D,N);else if(k.mode===Y8.LINE_LOOP)O=new t7(D,N);else if(k.mode===Y8.POINTS)O=new Z6(D,N);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+k.mode);if(Object.keys(O.geometry.morphAttributes).length>0)t1(O,W);if(O.name=Q.createUniqueName(W.name||"mesh_"+J),b8(O,W),k.extensions)z9($,O,k);Q.assignFinalMaterial(O),G.push(O)}for(let q=0,F=G.length;q<F;q++)Q.associations.set(G[q],{meshes:J,primitives:q});if(G.length===1){if(W.extensions)z9($,G[0],W);return G[0]}let E=new s0;if(W.extensions)z9($,E,W);Q.associations.set(E,{meshes:J});for(let q=0,F=G.length;q<F;q++)E.add(G[q]);return E})}loadCamera(J){let Q,Z=this.json.cameras[J],$=Z[Z.type];if(!$){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Z.type==="perspective")Q=new M0(y8.radToDeg($.yfov),$.aspectRatio||1,$.znear||1,$.zfar||2000000);else if(Z.type==="orthographic")Q=new Y6(-$.xmag,$.xmag,$.ymag,-$.ymag,$.znear,$.zfar);if(Z.name)Q.name=this.createUniqueName(Z.name);return b8(Q,Z),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],Z=[];for(let $=0,W=Q.joints.length;$<W;$++)Z.push(this._loadNodeShallow(Q.joints[$]));if(Q.inverseBindMatrices!==void 0)Z.push(this.getDependency("accessor",Q.inverseBindMatrices));else Z.push(null);return Promise.all(Z).then(function($){let W=$.pop(),H=$,Y=[],X=[];for(let K=0,U=H.length;K<U;K++){let G=H[K];if(G){Y.push(G);let E=new AJ;if(W!==null)E.fromArray(W.array,K*16);X.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new b6(Y,X)})}loadAnimation(J){let Q=this.json,Z=this,$=Q.animations[J],W=$.name?$.name:"animation_"+J,H=[],Y=[],X=[],K=[],U=[];for(let G=0,E=$.channels.length;G<E;G++){let q=$.channels[G],F=$.samplers[q.sampler],D=q.target,k=D.node,O=$.parameters!==void 0?$.parameters[F.input]:F.input,N=$.parameters!==void 0?$.parameters[F.output]:F.output;if(D.node===void 0)continue;H.push(this.getDependency("node",k)),Y.push(this.getDependency("accessor",O)),X.push(this.getDependency("accessor",N)),K.push(F),U.push(D)}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(K),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],F=G[2],D=G[3],k=G[4],O=[];for(let N=0,B=E.length;N<B;N++){let M=E[N],I=q[N],P=F[N],_=D[N],w=k[N];if(M===void 0)continue;if(M.updateMatrix)M.updateMatrix();let f=Z._createAnimationTracks(M,I,P,_,w);if(f)for(let V=0;V<f.length;V++)O.push(f[V])}return new l9(W,void 0,O)})}createNodeMesh(J){let Q=this.json,Z=this,$=Q.nodes[J];if($.mesh===void 0)return null;return Z.getDependency("mesh",$.mesh).then(function(W){let H=Z._getNodeRef(Z.meshCache,$.mesh,W);if($.weights!==void 0)H.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,K=$.weights.length;X<K;X++)Y.morphTargetInfluences[X]=$.weights[X]});return H})}loadNode(J){let Q=this.json,Z=this,$=Q.nodes[J],W=Z._loadNodeShallow(J),H=[],Y=$.children||[];for(let K=0,U=Y.length;K<U;K++)H.push(Z.getDependency("node",Y[K]));let X=$.skin===void 0?Promise.resolve(null):Z.getDependency("skin",$.skin);return Promise.all([W,Promise.all(H),X]).then(function(K){let U=K[0],G=K[1],E=K[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,Qq)});for(let q=0,F=G.length;q<F;q++)U.add(G[q]);return U})}_loadNodeShallow(J){let Q=this.json,Z=this.extensions,$=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],H=W.name?$.createUniqueName(W.name):"",Y=[],X=$._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(X)Y.push(X);if(W.camera!==void 0)Y.push($.getDependency("camera",W.camera).then(function(K){return $._getNodeRef($.cameraCache,W.camera,K)}));return $._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){Y.push(K)}),this.nodeCache[J]=Promise.all(Y).then(function(K){let U;if(W.isBone===!0)U=new x6;else if(K.length>1)U=new s0;else if(K.length===1)U=K[0];else U=new Y0;if(U!==K[0])for(let G=0,E=K.length;G<E;G++)U.add(K[G]);if(W.name)U.userData.name=W.name,U.name=H;if(b8(U,W),W.extensions)z9(Z,U,W);if(W.matrix!==void 0){let G=new AJ;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!$.associations.has(U))$.associations.set(U,{});else if(W.mesh!==void 0&&$.meshCache.refs[W.mesh]>1){let G=$.associations.get(U);$.associations.set(U,{...G})}return $.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,Z=this.json.scenes[J],$=this,W=new s0;if(Z.name)W.name=$.createUniqueName(Z.name);if(b8(W,Z),Z.extensions)z9(Q,W,Z);let H=Z.nodes||[],Y=[];for(let X=0,K=H.length;X<K;X++)Y.push($.getDependency("node",H[X]));return Promise.all(Y).then(function(X){for(let U=0,G=X.length;U<G;U++)W.add(X[U]);let K=(U)=>{let G=new Map;for(let[E,q]of $.associations)if(E instanceof x0||E instanceof k0)G.set(E,q);return U.traverse((E)=>{let q=$.associations.get(E);if(q!=null)G.set(E,q)}),G};return $.associations=K(W),W})}_createAnimationTracks(J,Q,Z,$,W){let H=[],Y=J.name?J.name:J.uuid,X=[];if(J9[W.path]===J9.weights)J.traverse(function(E){if(E.morphTargetInfluences)X.push(E.name?E.name:E.uuid)});else X.push(Y);let K;switch(J9[W.path]){case J9.weights:K=P8;break;case J9.rotation:K=h8;break;case J9.translation:case J9.scale:K=T8;break;default:switch(Z.itemSize){case 1:K=P8;break;case 2:case 3:default:K=T8;break}break}let U=$.interpolation!==void 0?o1[$.interpolation]:u7,G=this._getArrayFromAccessor(Z);for(let E=0,q=X.length;E<q;E++){let F=new K(X[E]+"."+J9[W.path],Q.array,G,U);if($.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(F);H.push(F)}return H}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let Z=V$(Q.constructor),$=new Float32Array(Q.length);for(let W=0,H=Q.length;W<H;W++)$[W]=Q[W]*Z;Q=$}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function(Z){return new(this instanceof h8?dY:B$)(this.times,this.values,this.getValueSize()/3,Z)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Zq(J,Q,Z){let $=Q.attributes,W=new l0;if($.POSITION!==void 0){let X=Z.json.accessors[$.POSITION],K=X.min,U=X.max;if(K!==void 0&&U!==void 0){if(W.set(new A(K[0],K[1],K[2]),new A(U[0],U[1],U[2])),X.normalized){let G=V$(E6[X.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let H=Q.targets;if(H!==void 0){let X=new A,K=new A;for(let U=0,G=H.length;U<G;U++){let E=H[U];if(E.POSITION!==void 0){let q=Z.json.accessors[E.POSITION],F=q.min,D=q.max;if(F!==void 0&&D!==void 0){if(K.setX(Math.max(Math.abs(F[0]),Math.abs(D[0]))),K.setY(Math.max(Math.abs(F[1]),Math.abs(D[1]))),K.setZ(Math.max(Math.abs(F[2]),Math.abs(D[2]))),q.normalized){let k=V$(E6[q.componentType]);K.multiplyScalar(k)}X.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(X)}J.boundingBox=W;let Y=new o0;W.getCenter(Y.center),Y.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=Y}function DY(J,Q,Z){let $=Q.attributes,W=[];function H(Y,X){return Z.getDependency("accessor",Y).then(function(K){J.setAttribute(X,K)})}for(let Y in $){let X=L$[Y]||Y.toLowerCase();if(X in J.attributes)continue;W.push(H($[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=Z.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});W.push(Y)}if(uJ.workingColorSpace!==h0&&"COLOR_0"in $)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${uJ.workingColorSpace}" not supported.`);return b8(J,Q),Zq(J,Q,Z),Promise.all(W).then(function(){return Q.targets!==void 0?r1(J,Q.targets,Z):J})}function uY(J){let Q=new Map,Z=new Map,$=J.clone();return cY(J,$,function(W,H){Q.set(H,W),Z.set(W,H)}),$.traverse(function(W){if(!W.isSkinnedMesh)return;let H=W,Y=Q.get(W),X=Y.skeleton.bones;H.skeleton=Y.skeleton.clone(),H.bindMatrix.copy(Y.bindMatrix),H.skeleton.bones=X.map(function(K){return Z.get(K)}),H.bind(H.skeleton,H.bindMatrix)}),$}function cY(J,Q,Z){Z(J,Q);for(let $=0;$<J.children.length;$++)cY(J.children[$],Q.children[$],Z)}var{AQUARIUM_IMAGES:rY,AQUARIUM_SPECIES:Wq}=window,tJ=(J,Q)=>J+Math.random()*(Q-J),Hq=(J)=>J[Math.random()*J.length|0],q6=y8.clamp,b0={population:1,music:1,mouse:!0,showfps:!1};window.wallpaperPropertyListener={applyUserProperties(J){if(J.population)b0.population=J.population.value/100;if(J.musicstrength)b0.music=J.musicstrength.value/100;if(J.mouseinteraction)b0.mouse=J.mouseinteraction.value}};var Yq={atlantic_bumper:"school",blue_runner:"school",tomtate_grunt:"school",atlantic_creolefish:"school",lookdown:"school",lane_snapper:"school",red_snapper:"school",vermilion_snapper:"school",banded_rudderfish:"school",porkfish:"school",blue_angelfish:"reef",spotfin_butterflyfish:"reef",hogfish:"reef",gray_triggerfish:"reef",striped_burrfish:"reef",spotted_batfish:"reef",scamp_grouper:"reef",lionfish:"reef",stoplight_parrotfish:"reef",black_grouper:"reef",gulf_flounder:"bottom",southern_stingray:"bottom",spotted_moray:"bottom",great_hammerhead_shark:"predator",bigeye_thresher_shark:"predator",cobia:"predator",goliath_grouper:"predator",manta_ray:"cruiser",loggerhead_sea_turtle:"cruiser",green_sea_turtle:"cruiser",sperm_whale:"giant"},tY=(J,Q)=>Q==="giant"?22:Q==="predator"?Math.max(4.5,J*1.7):Q==="cruiser"?Math.max(3.5,J*2.2):q6(J*5.5,1.5,3.4),Xq=new Set(["blue_angelfish","gray_triggerfish","scamp_grouper","goliath_grouper","black_grouper","hogfish","stoplight_parrotfish"]),Kq=(J)=>J==="school"||J==="reef"||J==="bottom",X8=new F$({antialias:!0,powerPreference:"high-performance"});X8.setPixelRatio(Math.min(window.devicePixelRatio,1.5));X8.setSize(innerWidth,innerHeight);X8.outputColorSpace=H8;X8.autoClear=!1;document.body.appendChild(X8.domElement);var nY=2*Math.atan(0.6923076923076923),_0=new M0(45,1.7777777777777777,0.5,400);_0.position.set(0,5,30);_0.rotation.x=y8.degToRad(7);function eY(){if(!innerWidth||!innerHeight)return;_0.aspect=innerWidth/innerHeight;let J=2*Math.atan(Math.tan(nY/2)/1.7777777777777777);_0.fov=y8.radToDeg(_0.aspect>=1.7777777777777777?2*Math.atan(Math.tan(nY/2)/_0.aspect):J),_0.updateProjectionMatrix(),X8.setSize(innerWidth,innerHeight)}eY();addEventListener("resize",eY);var d0=new t9;d0.fog=new f6(new VJ().setRGB(...(window.AQUARIUM_FOG||[0.1,0.42,0.5]).map((J)=>J*0.62),H8),4,90);X8.toneMapping=j7;X8.toneMappingExposure=0.85;d0.add(new HQ(9427184,3947056,0.9));var S$=new X6(13628671,1.8);S$.position.set(-8,40,12);d0.add(S$);{let J=new t9;J.add(new F0(new $6(10,32,16),new a0({side:f0,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec3 vP; void main(){ float h = normalize(vP).y; gl_FragColor = vec4(mix(vec3(0.01,0.06,0.09), vec3(0.6,0.95,1.1), smoothstep(-0.3, 0.9, h)), 1.0); }"}))),d0.environment=new c6(X8).fromScene(J).texture,d0.environmentIntensity=0.35}var JX=`
  float causticAt(vec2 xz, float t) {
    vec2 p = mod(xz * 0.9, 6.28318) - 250.0;
    vec2 i = p; float c = 1.0;
    for (int n = 0; n < 4; n++) {
      float tt = t * (1.0 - (3.5 / float(n + 1)));
      i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
      c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / 0.005), p.y / (cos(i.y + tt) / 0.005)));
    }
    c /= 4.0; c = 1.17 - pow(c, 1.4);
    return clamp(pow(abs(c), 7.0), 0.0, 2.0);
  }`,j$={uCTime:{value:0},uCStrength:{value:0.3}};function Uq(J){J.onBeforeCompile=(Q)=>{Object.assign(Q.uniforms,j$),Q.vertexShader=`varying vec3 vCWorld;
`+Q.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
 vCWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Q.fragmentShader=`varying vec3 vCWorld; uniform float uCTime, uCStrength;
`+JX+`
`+Q.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
       { float up = clamp(dot(normal, normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz)), 0.0, 1.0);
         reflectedLight.directDiffuse += diffuseColor.rgb * causticAt(vCWorld.xz * 1.1, uCTime) * up * up * uCStrength; }`)}}var CJ={bass:0,mid:0,high:0,energy:0,beat:0,bassAvg:0.1,lastBeat:0,spectrum:new Float32Array(64),live:!1};function Gq(J){CJ.live=!0;for(let Z=0;Z<64;Z++)CJ.spectrum[Z]=Math.min(1,(J[Z]+J[Z+64])*0.5);let Q=(Z,$)=>{let W=0;for(let H=Z;H<$;H++)W+=CJ.spectrum[H];return W/($-Z)};CJ.bassRaw=Q(0,6),CJ.midRaw=Q(6,24),CJ.highRaw=Q(24,64)}if(window.wallpaperRegisterAudioListener)window.wallpaperRegisterAudioListener(Gq);var Eq=/demo/.test(location.search);function qq(J,Q){if(Eq&&!CJ.live){let W=Math.pow(Math.max(0,Math.sin(J*Math.PI*2*1.05)),16);CJ.bassRaw=0.15+W*0.8,CJ.midRaw=0.2+0.15*Math.sin(J*1.3),CJ.highRaw=0.15+0.1*Math.random();for(let H=0;H<64;H++)CJ.spectrum[H]=Math.max(0,(H<8?CJ.bassRaw:CJ.midRaw*(1-H/80))+0.1*Math.sin(J*3+H))}let Z=b0.music,$=(W,H,Y,X)=>W+((H||0)*Z-W)*Math.min(1,Q*((H||0)*Z>W?Y:X));if(CJ.bass=$(CJ.bass,CJ.bassRaw,25,6),CJ.mid=$(CJ.mid,CJ.midRaw,15,4),CJ.high=$(CJ.high,CJ.highRaw,30,8),CJ.energy=q6(CJ.bass*0.6+CJ.mid*0.6+CJ.high*0.3,0,1.5),CJ.bassAvg+=(CJ.bass-CJ.bassAvg)*Math.min(1,Q*1.2),CJ.beat=Math.max(0,CJ.beat-Q*4),CJ.bass>CJ.bassAvg*1.35+0.04&&CJ.bass>0.12&&J-CJ.lastBeat>0.28)CJ.lastBeat=J,CJ.beat=1,jq(J)}var Nq=new k9,Oq=(J)=>{let Q=Nq.load(J);return Q.colorSpace=H8,Q},T$=Array.from({length:8},()=>new A(0,0,-100)),_$=0,QX=(J,Q,Z)=>{T$[_$].set(J,Q,Z),_$=(_$+1)%T$.length},a6=new J6(new Uint8Array(256),64,1,W8);a6.magFilter=a6.minFilter=i0;var r6=new k9().load(rY.aux);r6.colorSpace=j8;r6.magFilter=r6.minFilter=O8;r6.generateMipmaps=!1;var Q9={tMap:{value:Oq(rY.bg)},tAux:{value:r6},uTime:{value:0},uBass:{value:0},uMid:{value:0},uHigh:{value:0},uBeat:{value:0},uRipples:{value:T$},uMouse:{value:new wJ(-1,-1)},uAspect:{value:1.7777777777777777},uSpectrum:{value:a6},uNearFar:{value:new wJ(_0.near,_0.far)},uCamPos:{value:_0.position},uPitch:{value:_0.rotation.x},uCTime:j$.uCTime},Fq="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Rq=`
  uniform sampler2D tMap, tAux, uSpectrum; uniform float uTime, uBass, uMid, uHigh, uBeat, uAspect, uPitch, uCTime;
  uniform vec3 uRipples[8], uCamPos; uniform vec2 uMouse, uNearFar; varying vec2 vUv;
  ${JX}
  // backdrop is 16:9; cover-fit to the screen
  vec2 cover(vec2 uv){ float s = uAspect / (16.0/9.0); return s > 1.0 ? vec2(uv.x, (uv.y - 0.5) / s + 0.5) : vec2((uv.x - 0.5) * s + 0.5, uv.y); }
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  void main(){
    vec2 uv = vUv;
    // music makes the water vibrate: fine shimmer that grows with the bass, stronger near the surface
    float surfaceW = smoothstep(0.3, 1.0, uv.y);
    float amp = 0.0004 + uBass * 0.0035 * (0.3 + surfaceW) + uBeat * 0.002;
    uv.x += sin(uv.y * 14.0 + uTime * 1.7) * amp + sin(uv.y * 31.0 - uTime * 3.1) * amp * 0.35 * uHigh;  // long, slow waves so straight lines bend instead of squiggling
    uv.y += cos(uv.x * 11.0 + uTime * 1.4) * amp * 0.6;
    // ripple rings from beats and clicks
    for (int i = 0; i < 8; i++) {
      float age = uTime - uRipples[i].z;
      if (age > 0.0 && age < 2.5) {
        vec2 d = (vUv - uRipples[i].xy) * vec2(uAspect, 1.0);
        float r = length(d), front = age * 0.45;
        float w = exp(-pow((r - front) * 18.0, 2.0)) * (1.0 - age / 2.5);
        uv += normalize(d + 1e-5) / vec2(uAspect, 1.0) * w * 0.01;
      }
    }
    vec2 tuv = cover(uv);
    vec3 col = texture2D(tMap, tuv).rgb;
    vec4 aux = texture2D(tAux, tuv);
    float depth = (floor(aux.r * 255.0 + 0.5) * 256.0 + floor(aux.g * 255.0 + 0.5)) / 65535.0 * 256.0;
    bool sky = depth > 255.0;
    // where this pixel is in the world (same camera as the Blender render)
    vec2 ndc = tuv * 2.0 - 1.0;
    vec3 v = vec3(ndc.x * 0.69231, ndc.y * 0.38942, -1.0) * depth;
    float cp = cos(uPitch), sp = sin(uPitch);
    vec3 wp = uCamPos + vec3(v.x, v.y * cp - v.z * sp, v.y * sp + v.z * cp);
    // sunlight caustics swimming over the sand, rocks and corals; stronger with the mids
    float c = sky ? 0.0 : causticAt(wp.xz * 1.1, uCTime) * aux.b;
    col += vec3(0.75, 0.97, 1.0) * c * (0.35 + uMid * 0.6);
    // god rays: more water in front of a pixel = more rays (near rocks stay crisp)
    vec2 sun = vec2(0.3, 1.3);
    vec2 d = vUv - sun; float ang = atan(d.x * uAspect, -d.y);
    float rays = pow(0.5 + 0.5 * sin(ang * 23.0 + uTime * 0.21), 7.0)
               + pow(0.5 + 0.5 * sin(ang * 41.0 - uTime * 0.15 + 1.7), 9.0) * 0.7
               + pow(0.5 + 0.5 * sin(ang * 13.0 + uTime * 0.09 + 4.0), 5.0) * 0.5;
    float water = sky ? 1.0 : 1.0 - exp(-depth * 0.03);
    float rayFade = smoothstep(0.0, 0.9, vUv.y) * water;
    col += vec3(0.5, 0.88, 1.0) * rays * rayFade * (0.045 + uBass * 0.13 + uBeat * 0.04);
    // the surface far above: soft moving brightness, its waves stirred by the music spectrum
    float spec = texture2D(uSpectrum, vec2(vUv.x, 0.5)).r;
    float top = smoothstep(0.7, 1.0, vUv.y);
    vec2 sp2 = vec2(vUv.x * uAspect * 3.0, 1.5 / (1.12 - vUv.y));
    float surf = causticAt(sp2 * (1.0 + spec * 0.15), uTime * 0.6 + spec);
    col += vec3(0.55, 0.92, 1.0) * top * top * (0.06 + surf * (0.12 + spec * 0.35) + uBass * 0.08);
    // soft light where the mouse is, like a dive torch on the glass
    vec2 md = (vUv - uMouse) * vec2(uAspect, 1.0);
    col += vec3(0.2, 0.35, 0.4) * exp(-dot(md, md) * 25.0) * 0.3;
    // grade: a touch more contrast and colour, vignette, fine grain against banding
    col = mix(vec3(dot(col, vec3(0.299, 0.587, 0.114))), col, 1.15);
    col = (col - 0.5) * 1.08 + 0.5;
    vec2 vg = vUv - 0.5; col *= 1.0 - dot(vg, vg) * 0.6;
    col += (hash(vUv * 1000.0 + uTime) - 0.5) / 255.0;
    gl_FragColor = vec4(col, 1.0);
    // write the backdrop's depth so creatures pass behind rocks and corals
    float n = uNearFar.x, f = uNearFar.y;
    gl_FragDepth = sky ? 1.0 : clamp(0.5 * ((f + n) / (f - n) - 2.0 * f * n / ((f - n) * max(depth, n))) + 0.5, 0.0, 1.0);
  }`,kq=new a0({uniforms:Q9,vertexShader:Fq,fragmentShader:Rq,depthTest:!0,depthWrite:!0,depthFunc:m9,toneMapped:!1}),ZX=new F0(new R9(2,2),kq);ZX.frustumCulled=!1;var $X=new t9;$X.add(ZX);var Dq=new r9,LQ=900,DQ=new C0,WX=new Float32Array(LQ*3),HX=new Float32Array(LQ);for(let J=0;J<LQ;J++)WX.set([tJ(-60,60),tJ(0,30),tJ(-40,14)],J*3),HX[J]=Math.random();DQ.setAttribute("position",new O0(WX,3));var YX=new F9({color:14218495,size:0.12,transparent:!0,opacity:0.55,depthWrite:!1,fog:!0}),Mq=new Z6(DQ,YX);d0.add(Mq);var i6=[],Lq=new $6(1,10,8),Vq=new QQ({color:14678783,transparent:!0,opacity:0.45,shininess:120,depthWrite:!1});function XX(J,Q,Z,$){for(let W=0;W<$&&i6.length<160;W++){let H=new F0(Lq,Vq);H.position.set(J+tJ(-0.4,0.4),Q+tJ(0,0.5),Z+tJ(-0.4,0.4)),H.scale.setScalar(tJ(0.05,0.16)),H.userData={vy:tJ(1.5,3),ph:Math.random()*6},d0.add(H),i6.push(H)}}var g8=[],zq=new l6(0.09,0),Bq=new ZQ({color:13140538,emissive:3809288});function _q(J){for(let Q=0;Q<7&&g8.length<60;Q++){let Z=new F0(zq,Bq);Z.position.copy(J).add(new A(tJ(-0.6,0.6),tJ(-0.2,0.4),tJ(-0.6,0.6))),Z.userData={age:0,ph:Math.random()*6},d0.add(Z),g8.push(Z)}}var N6={},Cq=new z$;function wq(J){let Q=atob(J),Z=new Uint8Array(Q.length);for(let $=0;$<Q.length;$++)Z[$]=Q.charCodeAt($);return Z.buffer}function Iq(J){return new Promise((Q)=>{let Z=document.createElement("script");Z.src=J.file,Z.onload=()=>{let $=window.AQUARIUM_GLB[J.name];delete window.AQUARIUM_GLB[J.name],Cq.parse(wq($),"",(W)=>{let H=W.scene;H.traverse((G)=>{if(G.isMesh)G.frustumCulled=!1,(Array.isArray(G.material)?G.material:[G.material]).forEach((q)=>{if(q.fog=!0,q.metalness!==void 0)q.metalness=Math.min(q.metalness,0.15);Uq(q)})});let Y=new l0().setFromObject(H),X=Y.getSize(new A),K=Yq[J.name]||"reef",U=X.z>0.3*Math.max(X.x,X.y)?X.z:Math.max(X.x,X.y,X.z);N6[J.name]={scene:H,clips:W.animations,role:K,length:J.length,scale:tY(J.length,K)/U,center:Y.getCenter(new A)},Q()},()=>Q())},Z.onerror=()=>Q(),document.head.appendChild(Z)})}var g0=[],C$=1,o6=new A,B9=new A,sY=new T0,dO=new AJ,mO=new A(0,1,0),MQ=(J)=>(_0.position.z-J)*Math.tan(y8.degToRad(_0.fov)/2)*_0.aspect,KX={school:{speed:4.5,yMin:3,yMax:17,zMin:-16,zMax:6,turn:2.4},reef:{speed:2,yMin:1.6,yMax:7,zMin:-9,zMax:7,turn:2},bottom:{speed:1.5,yMin:1,yMax:1.8,zMin:-6,zMax:6,turn:1},predator:{speed:4,yMin:4,yMax:16,zMin:-18,zMax:2,turn:1.1},cruiser:{speed:2.5,yMin:6,yMax:19,zMin:-18,zMax:2,turn:0.7},giant:{speed:3.2,yMin:14,yMax:22,zMin:-75,zMax:-65,turn:0.2}};function kQ(J,Q,Z,$){let W=N6[J],H=uY(W.scene);H.position.copy(W.center).multiplyScalar(-W.scale),H.scale.setScalar(W.scale),H.rotation.y=Math.PI;let Y=new s0,X=new s0;X.add(H),Y.add(X),Y.position.copy(Q),d0.add(Y);let K=new EQ(H),U={};for(let q of W.clips)U[q.name]=K.clipAction(q);let G=KX[W.role],E={name:J,tpl:W,role:W.role,cfg:G,holder:Y,bank:X,mixer:K,actions:U,current:null,vel:new A(Z*G.speed,0,0),group:$,size:tY(W.length,W.role),speedMul:tJ(0.85,1.15),phase:Math.random()*100,state:"travel",dir:Z,age:0,life:W.role==="reef"||W.role==="bottom"?tJ(45,110):tJ(25,60),home:null,fear:0,burst:0,hunt:0,curious:Xq.has(J),prevYaw:0,roll:0,depthZ:Q.z};if(E.role==="reef"||E.role==="bottom")E.home=new A(tJ(-0.8,0.8)*MQ(Q.z),tJ(G.yMin,G.yMax),Q.z),E.state="arrive";return s6(E,"Swim"),g0.push(E),E}function s6(J,Q,Z=0.35){let $=J.actions[Q]?Q:J.actions.Swim?"Swim":Object.keys(J.actions)[0];if(!$||J.current===$)return;let W=J.actions[$];if(W.reset().setEffectiveWeight(1).play(),J.current)J.actions[J.current].crossFadeTo(W,Z,!1);J.current=$}function Pq(J){d0.remove(J.holder),J.mixer.stopAllAction(),g0.splice(g0.indexOf(J),1)}var w$={school:3,reef:9,bottom:2,predator:1,cruiser:1,giant:1},iY={school:0,reef:0,bottom:4,predator:25,cruiser:12,giant:90},Tq={school:[5,12],reef:[3,9],bottom:[15,40],predator:[40,90],cruiser:[30,70],giant:[150,300]},Aq=(J)=>J==="school"?new Set(g0.filter((Q)=>Q.role===J).map((Q)=>Q.group)).size:g0.filter((Q)=>Q.role===J).length;function Sq(J){let Q=Object.keys(N6);for(let Z in w$){let $=Z==="giant"||Z==="predator"?w$[Z]:Math.round(w$[Z]*b0.population);if(J<iY[Z]||Aq(Z)>=$)continue;let W=Q.filter((E)=>N6[E].role===Z);if(!W.length)continue;iY[Z]=J+tJ(...Tq[Z]);let H=Hq(W),Y=KX[Z],X=Math.random()<0.5?1:-1,K=tJ(Y.zMin,Y.zMax),U=-X*(MQ(K)+4),G=tJ(Y.yMin,Y.yMax);if(Z==="school"){let E=Math.round(tJ(7,14)*Math.max(0.5,b0.population)),q=C$++;for(let F=0;F<E;F++)kQ(H,new A(U-X*tJ(0,5),G+tJ(-1.5,1.5),K+tJ(-2,2)),X,q)}else if(H==="spotfin_butterflyfish"){let E=C$++,q=kQ(H,new A(U,G,K),X,E),F=kQ(H,new A(U-X*0.8,G+0.3,K+0.4),X,E);F.home=q.home}else kQ(H,new A(U,G,K),X,C$++)}}var E0={ndc:new wJ(-9,-9),px:new wJ(-1e4,-1e4),speed:0,still:0,inside:!1,lastT:0},oY=new qQ;addEventListener("mousemove",(J)=>{let{clientX:Q,clientY:Z}=J,$=Math.hypot(Q-E0.px.x,Z-E0.px.y),W=performance.now(),H=Math.max(8,W-E0.lastT);if(E0.lastT=W,E0.inside)E0.speed=Math.max(E0.speed*0.6,Math.min($/H*1000,6000));E0.px.set(Q,Z),E0.inside=!0,E0.still=0,E0.ndc.set(Q/innerWidth*2-1,-(Z/innerHeight)*2+1)});addEventListener("mousedown",(J)=>{if(!b0.mouse)return;let Q=UX;QX(J.clientX/innerWidth,1-J.clientY/innerHeight,Q),oY.setFromCamera(new wJ(J.clientX/innerWidth*2-1,-(J.clientY/innerHeight)*2+1),_0);let Z=new A;if(oY.ray.intersectPlane(new E8(new A(0,0,1),4),Z))Z.y=q6(Z.y,1,22),_q(Z),XX(Z.x,Z.y,Z.z,6);for(let $ of g0){let W=A$($);if(Math.hypot(W.x-J.clientX,W.y-J.clientY)<220)$.fear=1,$.burst=0.6,$.fearFrom=new wJ(J.clientX,J.clientY)}});addEventListener("mouseout",()=>{E0.inside=!1,E0.px.set(-1e4,-1e4)});var A$=(J)=>{return o6.copy(J.holder.position).project(_0),{x:(o6.x+1)*0.5*innerWidth,y:(1-o6.y)*0.5*innerHeight}};function jq(J){if(QX(tJ(0.1,0.9),tJ(0.82,0.95),J),Math.random()<0.5)XX(tJ(-20,20),1,tJ(-14,2),4+(CJ.bass*8|0));let Q=new Set;for(let Z of g0)if(Z.role==="school"){if(!Q.has(Z.group)&&Math.random()<0.6*b0.music)Q.add(Z.group)}else if(Z.role==="reef"&&Math.random()<0.12*b0.music)Z.burst=0.35;for(let Z of g0)if(Q.has(Z.group))Z.burst=0.3,Z.pulse=0.5}var Z0=new A;function vq(J,Q,Z){let $=J.cfg,W=J.holder.position;Z0.set(0,0,0),J.age+=Q;let H=1+CJ.energy*0.35*b0.music,Y=$.speed*J.speedMul*H;if(J.role==="giant")Z0.x+=J.dir*2;else if(J.state==="arrive"||J.state==="linger"){if(J.state==="arrive"&&W.distanceTo(J.home)<3)J.state="linger";if(J.state==="linger"){let P=o6.set(Math.sin(Z*0.3+J.phase)*3,Math.sin(Z*0.47+J.phase)*0.8,Math.cos(Z*0.23+J.phase)*2);Z0.add(B9.copy(J.home).add(P).sub(W).multiplyScalar(0.6)),Y*=0.55+0.45*(0.5+0.5*Math.sin(Z*0.5+J.phase))}else Z0.add(B9.copy(J.home).sub(W).normalize().multiplyScalar(2));if(J.age>J.life)J.state="leave",J.dir=W.x>0?1:-1}else if(Z0.x+=J.dir*1.2,J.state==="travel"&&J.role!=="school"&&Math.random()<Q*0.02)J.dir*=-1;Z0.y+=Math.sin(Z*0.37+J.phase*3)*0.5,Z0.z+=Math.sin(Z*0.21+J.phase*5)*0.6;let X=o6.set(0,0,0),K=new A,U=new A,G=0;for(let P of g0){if(P===J)continue;let _=P.holder.position.x-W.x,w=P.holder.position.y-W.y,f=P.holder.position.z-W.z,V=_*_+w*w+f*f;if(V>400)continue;let z=Math.sqrt(V)+0.0001,j=(J.size+P.size)*0.55*(J.pulse>0?1.8:1);if(z<j)X.add(B9.set(-_,-w,-f).multiplyScalar((j-z)/(z*j)*4));if(J.role==="school"&&P.group===J.group&&z<7)K.add(P.vel),U.add(P.holder.position),G++;if(P.role==="predator"&&(J.role==="school"||J.role==="reef"||J.role==="bottom")&&z<10)Z0.add(B9.set(-_,-w*0.5,-f).multiplyScalar(8/(z*z))),J.fear=Math.max(J.fear,1-z/10),J.fearFrom=null;if(J.role==="predator"&&P.role==="school"&&J.hunt>0&&z<22&&(!J.target||z<J.targetD))J.target=P,J.targetD=z;if((P.role==="cruiser"||P.role==="predator")&&J.role==="reef"&&z<P.size*1.5)Z0.add(B9.set(-_,0,-f).multiplyScalar(1/z))}if(Z0.add(X),G)Z0.add(K.divideScalar(G).sub(J.vel).multiplyScalar(0.8)),Z0.add(U.divideScalar(G).sub(W).multiplyScalar(0.5));if(J.role==="predator"){if(J.hunt-=Q,J.hunt<-tJ(6,14))J.hunt=tJ(4,8);if(J.target&&g0.includes(J.target)&&J.hunt>0){if(Z0.add(B9.copy(J.target.holder.position).sub(W).normalize().multiplyScalar(3)),Y*=1.6,J.targetD<6)J.burst=Math.max(J.burst,0.2)}J.target=null,J.targetD=1e9}if(Kq(J.role)&&g8.length){let P=null,_=16;for(let w of g8){let f=w.position.distanceTo(W);if(f<_)_=f,P=w}if(P&&J.fear<0.5){if(Z0.add(B9.copy(P.position).sub(W).normalize().multiplyScalar(4)),Y*=_<3?0.8:1.4,_<Math.max(0.5,J.size*0.35))d0.remove(P),g8.splice(g8.indexOf(P),1),J.burst=0.15}}if(b0.mouse&&E0.inside&&J.role!=="giant"){let P=A$(J),_=P.x-E0.px.x,w=P.y-E0.px.y,f=Math.hypot(_,w),V=120+J.size*40+Math.min(E0.speed,4000)*0.05;if(f<V&&E0.speed>900&&J.role!=="predator"){if(Z0.x+=_/f*6*(1-f/V),Z0.y+=-w/f*6*(1-f/V),J.fear=Math.max(J.fear,0.8*(1-f/V)),J.fearFrom=null,J.fear>0.5)J.burst=Math.max(J.burst,0.25)}else if(J.curious&&E0.still>1.2&&f<450&&f>60&&J.fear<0.2)Z0.x-=_/f*1.2,Z0.y+=w/f*1.2,Y*=0.6}if(J.fearFrom){let P=A$(J),_=P.x-J.fearFrom.x,w=P.y-J.fearFrom.y,f=Math.hypot(_,w)+1;Z0.x+=_/f*5*J.fear,Z0.y-=w/f*5*J.fear}let{yMin:E,yMax:q}=$;if(W.y<E)Z0.y+=(E-W.y)*3;if(W.y>q)Z0.y-=(W.y-q)*2;if(W.z<$.zMin)Z0.z+=($.zMin-W.z)*1.5;if(W.z>$.zMax)Z0.z-=(W.z-$.zMax)*1.5;if(J.role==="bottom")Z0.y*=0.3;if(J.state!=="leave"&&J.state!=="travel"&&J.role!=="giant"){let P=MQ(W.z)*0.9;if(Math.abs(W.x)>P)Z0.x-=Math.sign(W.x)*(Math.abs(W.x)-P)*2}if(J.fear=Math.max(0,J.fear-Q*0.5),J.fear<0.05)J.fearFrom=null;J.burst=Math.max(0,J.burst-Q),J.pulse=Math.max(0,(J.pulse||0)-Q);let F=Y*(1+J.fear*1.2+(J.burst>0?0.8:0));J.vel.addScaledVector(Z0,Q*$.turn*(J.burst>0?2.5:1)),J.vel.y*=J.role==="bottom"?0.9:0.985;let D=J.vel.length();J.vel.multiplyScalar(y8.lerp(D,F,Math.min(1,Q*1.5))/(D||1)),W.addScaledVector(J.vel,Q);let k=Math.hypot(J.vel.x,J.vel.z)+0.0001,O=q6(Math.atan2(J.vel.y,k),-0.6,0.6),N=Math.atan2(J.vel.x,J.vel.z),B=N-J.prevYaw;B=Math.atan2(Math.sin(B),Math.cos(B)),J.prevYaw=N,J.roll+=(q6(-B/Math.max(Q,0.001)*0.25,-0.6,0.6)-J.roll)*Math.min(1,Q*4),sY.setFromEuler(new y0(-O,N,0,"YXZ")),J.holder.quaternion.slerp(sY,Math.min(1,Q*$.turn*2)),J.bank.rotation.z=J.roll;let M=J.vel.length()/($.speed*J.speedMul);if(J.burst>0||J.fear>0.6)s6(J,"Burst",0.15);else if(M<0.45&&(J.actions.Idle||J.actions.Hover||J.actions.Rest))s6(J,J.actions.Idle?"Idle":J.actions.Hover?"Hover":"Rest");else if(M<0.8&&J.actions.Glide&&J.role!=="school")s6(J,"Glide");else s6(J,"Swim");J.mixer.timeScale=q6(0.6+M*0.6,0.5,2.2)*(1+CJ.bass*0.35*b0.music),J.mixer.update(Q);let I=MQ(W.z)+J.size+6;if((J.state==="leave"||J.state==="travel")&&Math.abs(W.x)>I&&Math.sign(W.x)===Math.sign(J.vel.x)){if(J.role!=="school"||J.age>8)return"dead"}if(J.age>400)return"dead";return null}var yq=new GQ,aY=document.getElementById("fps"),I$=0,P$=0,UX=0;function GX(J){let Q=UX+=J;qq(Q,J),E0.speed*=Math.pow(0.02,J),E0.still+=J,Sq(Q);for(let W=g0.length-1;W>=0;W--)if(vq(g0[W],J,Q)==="dead")Pq(g0[W]);let Z=DQ.attributes.position.array;for(let W=0;W<LQ;W++){let H=HX[W],Y=W*3;if(Z[Y]+=Math.sin(Q*0.3+H*40)*0.01+CJ.high*Math.sin(Q*20+H*90)*0.02,Z[Y+1]-=(0.08+H*0.12)*J-CJ.bass*Math.sin(Q*9+H*50)*0.01,Z[Y+1]<0)Z[Y+1]=30,Z[Y]=tJ(-60,60)}DQ.attributes.position.needsUpdate=!0,YX.size=0.12+CJ.high*0.08;for(let W=i6.length-1;W>=0;W--){let H=i6[W];if(H.position.y+=H.userData.vy*J,H.position.x+=Math.sin(Q*6+H.userData.ph)*0.01,H.position.y>30)d0.remove(H),i6.splice(W,1)}for(let W=g8.length-1;W>=0;W--){let H=g8[W];if(H.userData.age+=J,H.position.y>0.8)H.position.y-=0.6*J,H.position.x+=Math.sin(Q*2+H.userData.ph)*0.005,H.rotation.x+=J;if(H.userData.age>25)d0.remove(H),g8.splice(W,1)}Q9.uTime.value=Q,j$.uCTime.value=Q*0.35,Q9.uBass.value=CJ.bass,Q9.uMid.value=CJ.mid,Q9.uHigh.value=CJ.high,Q9.uBeat.value=CJ.beat,Q9.uAspect.value=_0.aspect,Q9.uMouse.value.set(E0.inside&&b0.mouse?E0.px.x/innerWidth:-2,1-E0.px.y/innerHeight);let $=a6.image.data;for(let W=0;W<64;W++)$[W*4]=Math.min(255,CJ.spectrum[W]*255*b0.music);a6.needsUpdate=!0,S$.intensity=1.6+CJ.bass*0.8}function EX(){requestAnimationFrame(EX);let J=Math.min(yq.getDelta(),0.05);if(GX(J),X8.clear(),X8.render($X,Dq),X8.render(d0,_0),I$++,P$+=J,P$>1){if(aY&&/fps/.test(location.search))aY.textContent=`${I$} fps · ${g0.length} creatures · ${Object.keys(N6).length} species`;I$=0,P$=0}}EX();(async()=>{window.AQUARIUM_GLB=window.AQUARIUM_GLB||{};let J=[...Wq].sort(()=>Math.random()-0.5);for(let Q of J)await Iq(Q)})();window.__aquarium={creatures:g0,templates:N6,audio:CJ,settings:b0,advance:(J)=>{for(let Q=0;Q<J*30;Q++)GX(0.03333333333333333)}};})();
