import{r as x}from"./body-parser-ClE_Zh4T.js";var l={exports:{}};/*!
 * parseurl
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */var t=x,s=t.parse,i=t.Url;l.exports=o;l.exports.original=d;function o(r){var e=r.url;if(e!==void 0){var a=r._parsedUrl;return c(e,a)?a:(a=p(e),a._raw=e,r._parsedUrl=a)}}function d(r){var e=r.originalUrl;if(typeof e!="string")return o(r);var a=r._parsedOriginalUrl;return c(e,a)?a:(a=p(e),a._raw=e,r._parsedOriginalUrl=a)}function p(r){if(typeof r!="string"||r.charCodeAt(0)!==47)return s(r);for(var e=r,a=null,f=null,n=1;n<r.length;n++)switch(r.charCodeAt(n)){case 63:f===null&&(e=r.substring(0,n),a=r.substring(n+1),f=r.substring(n));break;case 9:case 10:case 12:case 13:case 32:case 35:case 160:case 65279:return s(r)}var u=i!==void 0?new i:{};return u.path=r,u.href=r,u.pathname=e,f!==null&&(u.query=a,u.search=f),u}function c(r,e){return typeof e=="object"&&e!==null&&(i===void 0||e instanceof i)&&e._raw===r}var g=l.exports;export{g as p};
