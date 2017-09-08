(function(b,a,e){var d=window.jQuery,c=window.$;
window.$=window.jQuery=a;
(function(g,f,j){var i=window.jQuery,h=window.$;
window.$=window.jQuery=f;
(function(l,k){k("util/main",["kendo.core"],l);
}(function(){(function(){var A=Math,x=window.kendo,p=x.deepExtend;
var s=A.PI/180,B=Number.MAX_VALUE,D=-Number.MAX_VALUE,W="undefined";
function q(Y){return typeof Y!==W;
}function P(aa,Z){var Y=G(Z);
return A.round(aa*Y)/Y;
}function G(Y){if(Y){return A.pow(10,Y);
}else{return 1;
}}function z(aa,Z,Y){return A.max(A.min(aa,Y),Z);
}function H(Y){return Y*s;
}function r(Y){return Y/s;
}function v(Y){return typeof Y==="number"&&!isNaN(Y);
}function X(Z,Y){return q(Z)?Z:Y;
}function T(Y){return Y*Y;
}function F(Z){var aa=[];
for(var Y in Z){aa.push(Y+Z[Y]);
}return aa.sort().join("");
}function t(aa){var Y=2166136261;
for(var Z=0;
Z<aa.length;
++Z){Y+=(Y<<1)+(Y<<4)+(Y<<7)+(Y<<8)+(Y<<24);
Y^=aa.charCodeAt(Z);
}return Y>>>0;
}function u(Y){return t(F(Y));
}var E=Date.now;
if(!E){E=function(){return new Date().getTime();
};
}function m(Y){var aa=Y.length,Z,ac=B,ab=D;
for(Z=0;
Z<aa;
Z++){ab=A.max(ab,Y[Z]);
ac=A.min(ac,Y[Z]);
}return{min:ac,max:ab};
}function o(Y){return m(Y).min;
}function n(Y){return m(Y).max;
}function S(Y){return Q(Y).min;
}function R(Y){return Q(Y).max;
}function Q(Y){var ac=B,ab=D;
for(var Z=0,aa=Y.length;
Z<aa;
Z++){var ad=Y[Z];
if(ad!==null&&isFinite(ad)){ac=A.min(ac,ad);
ab=A.max(ab,ad);
}}return{min:ac===B?j:ac,max:ab===D?j:ab};
}function y(Y){if(Y){return Y[Y.length-1];
}}function k(Y,Z){Y.push.apply(Y,Z);
return Y;
}function N(Y){return x.template(Y,{useWithBlock:false,paramName:"d"});
}function J(Y,Z){return q(Z)&&Z!==null?" "+Y+"='"+Z+"' ":"";
}function I(Y){var aa="";
for(var Z=0;
Z<Y.length;
Z++){aa+=J(Y[Z][0],Y[Z][1]);
}return aa;
}function M(Y){var aa="";
for(var Z=0;
Z<Y.length;
Z++){var ab=Y[Z][1];
if(q(ab)){aa+=Y[Z][0]+":"+ab+";";
}}if(aa!==""){return aa;
}}function L(Y){if(typeof Y!=="string"){Y+="px";
}return Y;
}function K(aa){var ab=[];
if(aa){var Z=x.toHyphens(aa).split("-");
for(var Y=0;
Y<Z.length;
Y++){ab.push("k-pos-"+Z[Y]);
}}return ab.join(" ");
}function w(Y){return Y===""||Y===null||Y==="none"||Y==="transparent"||!q(Y);
}function l(Z){var Y={1:"i",10:"x",100:"c",2:"ii",20:"xx",200:"cc",3:"iii",30:"xxx",300:"ccc",4:"iv",40:"xl",400:"cd",5:"v",50:"l",500:"d",6:"vi",60:"lx",600:"dc",7:"vii",70:"lxx",700:"dcc",8:"viii",80:"lxxx",800:"dccc",9:"ix",90:"xc",900:"cm",1000:"m"};
var ab=[1000,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1];
var aa="";
while(Z>0){if(Z<ab[0]){ab.shift();
}else{aa+=Y[ab[0]];
Z-=ab[0];
}}return aa;
}function O(ab){ab=ab.toLowerCase();
var Y={i:1,v:5,x:10,l:50,c:100,d:500,m:1000};
var ad=0,aa=0;
for(var Z=0;
Z<ab.length;
++Z){var ac=Y[ab.charAt(Z)];
if(!ac){return null;
}ad+=ac;
if(ac>aa){ad-=2*aa;
}aa=ac;
}return ad;
}function C(Z){var Y=Object.create(null);
return function(){var ab="";
for(var aa=arguments.length;
--aa>=0;
){ab+=":"+arguments[aa];
}if(ab in Y){return Y[ab];
}return Z.apply(this,arguments);
};
}function U(ac){var ab=[],Y=0,aa=ac.length,ad,Z;
while(Y<aa){ad=ac.charCodeAt(Y++);
if(ad>=55296&&ad<=56319&&Y<aa){Z=ac.charCodeAt(Y++);
if((Z&64512)==56320){ab.push(((ad&1023)<<10)+(Z&1023)+65536);
}else{ab.push(ad);
Y--;
}}else{ab.push(ad);
}}return ab;
}function V(Y){return Y.map(function(aa){var Z="";
if(aa>65535){aa-=65536;
Z+=String.fromCharCode(aa>>>10&1023|55296);
aa=56320|aa&1023;
}Z+=String.fromCharCode(aa);
return Z;
}).join("");
}p(x,{util:{MAX_NUM:B,MIN_NUM:D,append:k,arrayLimits:m,arrayMin:o,arrayMax:n,defined:q,deg:r,hashKey:t,hashObject:u,isNumber:v,isTransparent:w,last:y,limitValue:z,now:E,objectKey:F,round:P,rad:H,renderAttr:J,renderAllAttr:I,renderPos:K,renderSize:L,renderStyle:M,renderTemplate:N,sparseArrayLimits:Q,sparseArrayMin:S,sparseArrayMax:R,sqr:T,valueOrDefault:X,romanToArabic:O,arabicToRoman:l,memoize:C,ucs2encode:V,ucs2decode:U}});
x.drawing.util=x.util;
x.dataviz.util=x.util;
}());
return window.kendo;
},typeof define=="function"&&define.amd?define:function(k,l,m){(m||l)();
}));
(function(l,k){k("util/text-metrics",["kendo.core","util/main"],l);
}(function(){(function(k){var o=document,p=window.kendo,l=p.Class,u=p.util,n=u.defined;
var r=l.extend({init:function(w){this._size=w;
this._length=0;
this._map={};
},put:function(x,A){var y=this,z=y._map,w={key:x,value:A};
z[x]=w;
if(!y._head){y._head=y._tail=w;
}else{y._tail.newer=w;
w.older=y._tail;
y._tail=w;
}if(y._length>=y._size){z[y._head.key]=null;
y._head=y._head.newer;
y._head.older=null;
}else{y._length++;
}},get:function(x){var y=this,w=y._map[x];
if(w){if(w===y._head&&w!==y._tail){y._head=w.newer;
y._head.older=null;
}if(w!==y._tail){if(w.older){w.older.newer=w.newer;
w.newer.older=w.older;
}w.older=y._tail;
w.newer=null;
y._tail.newer=w;
y._tail=w;
}return w.value;
}}});
var m=k("<div style='position: absolute !important; top: -4000px !important; width: auto !important; height: auto !important;padding: 0 !important; margin: 0 !important; border: 0 !important;line-height: normal !important; visibility: hidden !important; white-space: nowrap!important;' />")[0];
function v(){return{width:0,height:0,baseline:0};
}var t=l.extend({init:function(w){this._cache=new r(1000);
this._initOptions(w);
},options:{baselineMarkerSize:1},measure:function(F,D,x){if(!F){return v();
}var E=u.objectKey(D),z=u.hashKey(F+E),y=this._cache.get(z);
if(y){return y;
}var C=v();
var B=x?x:m;
var w=this._baselineMarker().cloneNode(false);
for(var A in D){var G=D[A];
if(n(G)){B.style[A]=G;
}}k(B).text(F);
B.appendChild(w);
o.body.appendChild(B);
if((F+"").length){C.width=B.offsetWidth-this.options.baselineMarkerSize;
C.height=B.offsetHeight;
C.baseline=w.offsetTop+this.options.baselineMarkerSize;
}if(C.width>0&&C.height>0){this._cache.put(z,C);
}B.parentNode.removeChild(B);
return C;
},_baselineMarker:function(){return k("<div class='k-baseline-marker' style='display: inline-block; vertical-align: baseline;width: "+this.options.baselineMarkerSize+"px; height: "+this.options.baselineMarkerSize+"px;overflow: hidden;' />")[0];
}});
t.current=new t();
function s(y,x,w){return t.current.measure(y,x,w);
}function q(y,w){var z=[];
if(y.length>0&&document.fonts){try{z=y.map(function(A){return document.fonts.load(A);
});
}catch(x){p.logToConsole(x);
}Promise.all(z).then(w,w);
}else{w();
}}p.util.TextMetrics=t;
p.util.LRUCache=r;
p.util.loadFonts=q;
p.util.measureText=s;
}(window.kendo.jQuery));
},typeof define=="function"&&define.amd?define:function(k,l,m){(m||l)();
}));
(function(l,k){k("util/base64",["util/main"],l);
}(function(){(function(){var o=window.kendo,k=o.deepExtend,n=String.fromCharCode;
var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function l(y){var z="";
var q,r,s,t,u,v,w;
var x=0;
y=m(y);
while(x<y.length){q=y.charCodeAt(x++);
r=y.charCodeAt(x++);
s=y.charCodeAt(x++);
t=q>>2;
u=(q&3)<<4|r>>4;
v=(r&15)<<2|s>>6;
w=s&63;
if(isNaN(r)){v=w=64;
}else{if(isNaN(s)){w=64;
}}z=z+p.charAt(t)+p.charAt(u)+p.charAt(v)+p.charAt(w);
}return z;
}function m(s){var t="";
for(var r=0;
r<s.length;
r++){var q=s.charCodeAt(r);
if(q<128){t+=n(q);
}else{if(q<2048){t+=n(192|q>>>6);
t+=n(128|q&63);
}else{if(q<65536){t+=n(224|q>>>12);
t+=n(128|q>>>6&63);
t+=n(128|q&63);
}}}}return t;
}k(o.util,{encodeBase64:l,encodeUTF8:m});
}());
return window.kendo;
},typeof define=="function"&&define.amd?define:function(k,l,m){(m||l)();
}));
(function(l,k){k("mixins/observers",["kendo.core"],l);
}(function(){(function(k){var o=Math,n=window.kendo,l=n.deepExtend,m=k.inArray;
var p={observers:function(){this._observers=this._observers||[];
return this._observers;
},addObserver:function(q){if(!this._observers){this._observers=[q];
}else{this._observers.push(q);
}return this;
},removeObserver:function(q){var s=this.observers();
var r=m(q,s);
if(r!=-1){s.splice(r,1);
}return this;
},trigger:function(s,q){var u=this._observers;
var t;
var r;
if(u&&!this._suspended){for(r=0;
r<u.length;
r++){t=u[r];
if(t[s]){t[s](q);
}}}return this;
},optionsChange:function(q){this.trigger("optionsChange",q);
},geometryChange:function(q){this.trigger("geometryChange",q);
},suspend:function(){this._suspended=(this._suspended||0)+1;
return this;
},resume:function(){this._suspended=o.max((this._suspended||0)-1,0);
return this;
},_observerField:function(q,r){if(this[q]){this[q].removeObserver(this);
}this[q]=r;
r.addObserver(this);
}};
l(n,{mixins:{ObserversMixin:p}});
}(window.kendo.jQuery));
return window.kendo;
},typeof define=="function"&&define.amd?define:function(k,l,m){(m||l)();
}));
(function(l,k){k("kendo.dataviz.sparkline",["kendo.dataviz.chart"],l);
}(function(){var k={id:"dataviz.sparkline",name:"Sparkline",category:"dataviz",description:"Sparkline widgets.",depends:["dataviz.chart"]};
(function(l,G){var w=window.kendo,q=w.dataviz,o=q.ui.Chart,A=w.data.ObservableArray,D=q.SharedTooltip,t=w.deepExtend,v=l.isArray,C=l.proxy,u=q.inArray,y=Math;
var p="k-",r=150,s=150,m="bar",n="bullet",B="pie",x="leave",z=[m,n];
var E=o.extend({init:function(J,M){var I=this,L=I.stage=l("<span />"),K=M||{};
J=l(J).addClass(p+"sparkline").empty().append(L);
I._initialWidth=y.floor(J.width());
K=H(K);
if(v(K)||K instanceof A){K={seriesDefaults:{data:K}};
}if(!K.series){K.series=[{data:H(K.data)}];
}t(K,{seriesDefaults:{type:K.type}});
if(u(K.series[0].type,z)||u(K.seriesDefaults.type,z)){K=t({},{categoryAxis:{crosshair:{visible:false}}},K);
}o.fn.init.call(I,J,K);
},options:{name:"Sparkline",chartArea:{margin:2},axisDefaults:{visible:false,majorGridLines:{visible:false},valueAxis:{narrowRange:true}},seriesDefaults:{type:"line",area:{line:{width:0.5}},bar:{stack:true},padding:2,width:0.5,overlay:{gradient:null},highlight:{visible:false},border:{width:0},markers:{size:2,visible:false}},tooltip:{visible:true,shared:true},categoryAxis:{crosshair:{visible:true,tooltip:{visible:false}}},legend:{visible:false},transitions:false,pointWidth:5,panes:[{clip:false}]},_modelOptions:function(){var I=this,J=I.options,K,N=I._initialWidth,M=I.stage;
I.stage.children().hide();
var L=l("<span>&nbsp;</span>");
I.stage.append(L);
K=t({width:N?N:I._autoWidth(),height:M.height(),transitions:J.transitions},J.chartArea,{inline:true,align:false});
M.css({width:K.width,height:K.height});
L.remove();
I.stage.children().show();
I.surface.resize();
return K;
},_createTooltip:function(){var I=this,K=I.options,J=I.element,L;
if(I._sharedTooltip()){L=new F(J,I._plotArea,K.tooltip);
}else{L=o.fn._createTooltip.call(I);
}L.bind(x,C(I._tooltipleave,I));
return L;
},_surfaceWrap:function(){return this.stage;
},_autoWidth:function(){var I=this,N=I.options,M=q.getSpacing(N.chartArea.margin),O=N.series,K=I.dataSource.total(),P=0,Q,L,J;
for(L=0;
L<O.length;
L++){J=O[L];
if(J.type===m){return r;
}if(J.type===n){return s;
}if(J.type===B){return I.stage.height();
}if(J.data){P=y.max(P,J.data.length);
}}Q=y.max(K,P)*N.pointWidth;
if(Q>0){Q+=M.left+M.right;
}return Q;
}});
var F=D.extend({options:{animation:{duration:0}},_anchor:function(J,L){var I=D.fn._anchor.call(this,J,L);
var K=this._measure();
I.y=-K.height-this.options.offset;
return I;
},_hideElement:function(){if(this.element){this.element.hide().remove();
}}});
function H(I){return typeof I==="number"?[I]:I;
}q.ui.plugin(E);
t(q,{SparklineSharedTooltip:F});
}(window.kendo.jQuery));
return window.kendo;
},typeof define=="function"&&define.amd?define:function(k,l,m){(m||l)();
}));
window.$=h;
window.jQuery=i;
})($telerik.$,$telerik.$);
window.$=c;
window.jQuery=d;
})($telerik.$,$telerik.$);