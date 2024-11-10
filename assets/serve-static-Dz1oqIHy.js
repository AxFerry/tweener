import{e as U}from"./encodeurl-DWuleksE.js";import{e as F}from"./escape-html-Ctoi4tIA.js";import{p as R}from"./parseurl-Caiu84s2.js";import{r as v}from"./body-parser-ClE_Zh4T.js";import{s as O}from"./send-sR5yT8VB.js";var c={exports:{}};/*!
 * serve-static
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014-2016 Douglas Christopher Wilson
 * MIT Licensed
 */var g;function B(){if(g)return c.exports;g=1;var y=U,H=F,f=R,x=v.resolve,p=O,E=v;c.exports=C,c.exports.mime=p.mime;function C(t,e){if(!t)throw new TypeError("root path required");if(typeof t!="string")throw new TypeError("root path must be a string");var r=Object.create(e||null),n=r.fallthrough!==!1,s=r.redirect!==!1,u=r.setHeaders;if(u&&typeof u!="function")throw new TypeError("option setHeaders must be function");r.maxage=r.maxage||r.maxAge||0,r.root=x(t);var D=s?w():b();return function(o,a,l){if(o.method!=="GET"&&o.method!=="HEAD"){if(n)return l();a.statusCode=405,a.setHeader("Allow","GET, HEAD"),a.setHeader("Content-Length","0"),a.end();return}var h=!n,L=f.original(o),d=f(o).pathname;d==="/"&&L.pathname.substr(-1)!=="/"&&(d="");var i=p(o,d,r);i.on("directory",D),u&&i.on("headers",u),n&&i.on("file",function(){h=!0}),i.on("error",function(m){if(h||!(m.statusCode<500)){l(m);return}l()}),i.pipe(a)}}function S(t){for(var e=0;e<t.length&&t.charCodeAt(e)===47;e++);return e>1?"/"+t.substr(e):t}function T(t,e){return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>`+t+`</title>
</head>
<body>
<pre>`+e+`</pre>
</body>
</html>
`}function b(){return function(){this.error(404)}}function w(){return function(e){if(this.hasTrailingSlash()){this.error(404);return}var r=f.original(this.req);r.path=null,r.pathname=S(r.pathname+"/");var n=y(E.format(r)),s=T("Redirecting","Redirecting to "+H(n));e.statusCode=301,e.setHeader("Content-Type","text/html; charset=UTF-8"),e.setHeader("Content-Length",Buffer.byteLength(s)),e.setHeader("Content-Security-Policy","default-src 'none'"),e.setHeader("X-Content-Type-Options","nosniff"),e.setHeader("Location",n),e.end(s)}}return c.exports}export{B as r};
