/*!
 * ee-first
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */var m=y;function y(n,l){if(!Array.isArray(n))throw new TypeError("arg must be an array of [ee, events...] arrays");for(var s=[],t=0;t<n.length;t++){var r=n[t];if(!Array.isArray(r)||r.length<2)throw new TypeError("each array member must be [ee, events...]");for(var u=r[0],o=1;o<r.length;o++){var e=r[o],c=i(e,g);u.on(e,c),s.push({ee:u,event:e,fn:c})}}function g(){h(),l.apply(null,arguments)}function h(){for(var a,v=0;v<s.length;v++)a=s[v],a.ee.removeListener(a.event,a.fn)}function f(a){l=a}return f.cancel=h,f}function i(n,l){return function(t){for(var r=new Array(arguments.length),u=this,o=n==="error"?t:null,e=0;e<r.length;e++)r[e]=arguments[e];l(o,u,n,r)}}export{m as e};
