import{r as c}from"./body-parser-ClE_Zh4T.js";import{s as d}from"./safe-buffer-26KLVhWa.js";var f={exports:{}};/*!
 * content-disposition
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */f.exports=R;f.exports.parse=$;var p=c.basename,g=d.Buffer,y=/[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g,h=/%[0-9A-Fa-f]{2}/,w=/%([0-9A-Fa-f]{2})/g,u=/[^\x20-\x7e\xa0-\xff]/g,m=/\\([\u0000-\u007f])/g,l=/([\\"])/g,v=/;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g,_=/^[\x20-\x7e\x80-\xff]+$/,A=/^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/,T=/^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/,P=/^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/;function R(e,r){var n=r||{},a=n.type||"attachment",t=C(e,n.fallback);return S(new x(a,t))}function C(e,r){if(e!==void 0){var n={};if(typeof e!="string")throw new TypeError("filename must be a string");if(r===void 0&&(r=!0),typeof r!="string"&&typeof r!="boolean")throw new TypeError("fallback must be a string or boolean");if(typeof r=="string"&&u.test(r))throw new TypeError("fallback must be ISO-8859-1 string");var a=p(e),t=_.test(a),o=typeof r!="string"?r&&E(a):p(r),i=typeof o=="string"&&o!==a;return(i||!t||h.test(a))&&(n["filename*"]=a),(t||i)&&(n.filename=i?o:a),n}}function S(e){var r=e.parameters,n=e.type;if(!n||typeof n!="string"||!A.test(n))throw new TypeError("invalid type");var a=String(n).toLowerCase();if(r&&typeof r=="object")for(var t,o=Object.keys(r).sort(),i=0;i<o.length;i++){t=o[i];var s=t.substr(-1)==="*"?z(r[t]):O(r[t]);a+="; "+t+"="+s}return a}function X(e){var r=T.exec(e);if(!r)throw new TypeError("invalid extended field value");var n=r[1].toLowerCase(),a=r[2],t,o=a.replace(w,b);switch(n){case"iso-8859-1":t=E(o);break;case"utf-8":t=g.from(o,"binary").toString("utf8");break;default:throw new TypeError("unsupported charset in extended field")}return t}function E(e){return String(e).replace(u,"?")}function $(e){if(!e||typeof e!="string")throw new TypeError("argument string is required");var r=P.exec(e);if(!r)throw new TypeError("invalid type format");var n=r[0].length,a=r[1].toLowerCase(),t,o=[],i={},s;for(n=v.lastIndex=r[0].substr(-1)===";"?n-1:n;r=v.exec(e);){if(r.index!==n)throw new TypeError("invalid parameter format");if(n+=r[0].length,t=r[1].toLowerCase(),s=r[2],o.indexOf(t)!==-1)throw new TypeError("invalid duplicate parameter");if(o.push(t),t.indexOf("*")+1===t.length){t=t.slice(0,-1),s=X(s),i[t]=s;continue}typeof i[t]!="string"&&(s[0]==='"'&&(s=s.substr(1,s.length-2).replace(m,"$1")),i[t]=s)}if(n!==-1&&n!==e.length)throw new TypeError("invalid parameter format");return new x(a,i)}function b(e,r){return String.fromCharCode(parseInt(r,16))}function G(e){return"%"+String(e).charCodeAt(0).toString(16).toUpperCase()}function O(e){var r=String(e);return'"'+r.replace(l,"\\$1")+'"'}function z(e){var r=String(e),n=encodeURIComponent(r).replace(y,G);return"UTF-8''"+n}function x(e,r){this.type=e,this.parameters=r}var L=f.exports;export{L as c};
