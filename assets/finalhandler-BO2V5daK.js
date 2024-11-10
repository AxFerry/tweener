import{e as j}from"./encodeurl-DWuleksE.js";import{e as D}from"./escape-html-Ctoi4tIA.js";import{o as F}from"./on-finished-rdFJ_shf.js";import{p as P}from"./parseurl-Caiu84s2.js";import{s as $}from"./statuses-PShsQ8FC.js";import{u as I}from"./unpipe-4hUtEN2w.js";var S={exports:{}},A={exports:{}},h=1e3,m=h*60,v=m*60,y=v*24,T=y*365.25,U=function(n,e){e=e||{};var o=typeof n;if(o==="string"&&n.length>0)return z(n);if(o==="number"&&isNaN(n)===!1)return e.long?G(n):B(n);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(n))};function z(n){if(n=String(n),!(n.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(n);if(e){var o=parseFloat(e[1]),a=(e[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return o*T;case"days":case"day":case"d":return o*y;case"hours":case"hour":case"hrs":case"hr":case"h":return o*v;case"minutes":case"minute":case"mins":case"min":case"m":return o*m;case"seconds":case"second":case"secs":case"sec":case"s":return o*h;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}function B(n){return n>=y?Math.round(n/y)+"d":n>=v?Math.round(n/v)+"h":n>=m?Math.round(n/m)+"m":n>=h?Math.round(n/h)+"s":n+"ms"}function G(n){return E(n,y,"day")||E(n,v,"hour")||E(n,m,"minute")||E(n,h,"second")||n+" ms"}function E(n,e,o){if(!(n<e))return n<e*1.5?Math.floor(n/e)+" "+o:Math.ceil(n/e)+" "+o+"s"}(function(n,e){e=n.exports=i.debug=i.default=i,e.coerce=g,e.disable=c,e.enable=d,e.enabled=l,e.humanize=U,e.names=[],e.skips=[],e.formatters={};var o;function a(t){var r=0,s;for(s in t)r=(r<<5)-r+t.charCodeAt(s),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function i(t){function r(){if(r.enabled){var s=r,f=+new Date,p=f-(o||f);s.diff=p,s.prev=o,s.curr=f,o=f;for(var u=new Array(arguments.length),b=0;b<u.length;b++)u[b]=arguments[b];u[0]=e.coerce(u[0]),typeof u[0]!="string"&&u.unshift("%O");var w=0;u[0]=u[0].replace(/%([a-zA-Z%])/g,function(C,N){if(C==="%%")return C;w++;var H=e.formatters[N];if(typeof H=="function"){var R=u[w];C=H.call(s,R),u.splice(w,1),w--}return C}),e.formatArgs.call(s,u);var L=r.log||e.log||console.log.bind(console);L.apply(s,u)}}return r.namespace=t,r.enabled=e.enabled(t),r.useColors=e.useColors(),r.color=a(t),typeof e.init=="function"&&e.init(r),r}function d(t){e.save(t),e.names=[],e.skips=[];for(var r=(typeof t=="string"?t:"").split(/[\s,]+/),s=r.length,f=0;f<s;f++)r[f]&&(t=r[f].replace(/\*/g,".*?"),t[0]==="-"?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function c(){e.enable("")}function l(t){var r,s;for(r=0,s=e.skips.length;r<s;r++)if(e.skips[r].test(t))return!1;for(r=0,s=e.names.length;r<s;r++)if(e.names[r].test(t))return!0;return!1}function g(t){return t instanceof Error?t.stack||t.message:t}})(A,A.exports);var J=A.exports;(function(n,e){var o={};e=n.exports=J,e.log=d,e.formatArgs=i,e.save=c,e.load=l,e.useColors=a,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:g(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function a(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(t){try{return JSON.stringify(t)}catch(r){return"[UnexpectedJSONParseError]: "+r.message}};function i(t){var r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!!r){var s="color: "+this.color;t.splice(1,0,s,"color: inherit");var f=0,p=0;t[0].replace(/%[a-zA-Z%]/g,function(u){u!=="%%"&&(f++,u==="%c"&&(p=f))}),t.splice(p,0,s)}}function d(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function c(t){try{t==null?e.storage.removeItem("debug"):e.storage.debug=t}catch{}}function l(){var t;try{t=e.storage.debug}catch{}return!t&&typeof process<"u"&&"env"in process&&(t=o.DEBUG),t}e.enable(l());function g(){try{return window.localStorage}catch{}}})(S,S.exports);var X=S.exports;/*!
 * finalhandler
 * Copyright(c) 2014-2022 Douglas Christopher Wilson
 * MIT Licensed
 */var k=X("finalhandler"),W=j,Z=D,O=F,V=P,_=$,Y=I,K=/\x20{2}/g,Q=/\n/g,q=typeof setImmediate=="function"?setImmediate:function(n){process.nextTick(n.bind.apply(n,arguments))},x=O.isFinished;function ee(n){var e=Z(n).replace(Q,"<br>").replace(K," &nbsp;");return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>`+e+`</pre>
</body>
</html>
`}var me=ne;function ne(n,e,o){var a=o||{},i=a.env||"production",d=a.onerror;return function(c){var l,g,t;if(!c&&M(e)){k("cannot 404 after headers sent");return}if(c?(t=oe(c),t===void 0?t=se(e):l=te(c),g=re(c,t,i)):(t=404,g="Cannot "+n.method+" "+W(ae(n))),k("default %s",t),c&&d&&q(d,c,n,e),M(e)){k("cannot %d after headers sent",t),n.socket&&n.socket.destroy();return}ie(n,e,t,l,g)}}function te(n){if(!(!n.headers||typeof n.headers!="object")){for(var e=Object.create(null),o=Object.keys(n.headers),a=0;a<o.length;a++){var i=o[a];e[i]=n.headers[i]}return e}}function re(n,e,o){var a;return o!=="production"&&(a=n.stack,!a&&typeof n.toString=="function"&&(a=n.toString())),a||_.message[e]}function oe(n){if(typeof n.status=="number"&&n.status>=400&&n.status<600)return n.status;if(typeof n.statusCode=="number"&&n.statusCode>=400&&n.statusCode<600)return n.statusCode}function ae(n){try{return V.original(n).pathname}catch{return"resource"}}function se(n){var e=n.statusCode;return(typeof e!="number"||e<400||e>599)&&(e=500),e}function M(n){return typeof n.headersSent!="boolean"?!!n._header:n.headersSent}function ie(n,e,o,a,i){function d(){var c=ee(i);if(e.statusCode=o,n.httpVersionMajor<2&&(e.statusMessage=_.message[o]),e.removeHeader("Content-Encoding"),e.removeHeader("Content-Language"),e.removeHeader("Content-Range"),ue(e,a),e.setHeader("Content-Security-Policy","default-src 'none'"),e.setHeader("X-Content-Type-Options","nosniff"),e.setHeader("Content-Type","text/html; charset=utf-8"),e.setHeader("Content-Length",Buffer.byteLength(c,"utf8")),n.method==="HEAD"){e.end();return}e.end(c,"utf8")}if(x(n)){d();return}Y(n),O(n,d),n.resume()}function ue(n,e){if(e)for(var o=Object.keys(e),a=0;a<o.length;a++){var i=o[a];n.setHeader(i,e[i])}}export{me as f};
