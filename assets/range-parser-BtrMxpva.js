/*!
 * range-parser
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */var h=u;function u(r,n,o){if(typeof n!="string")throw new TypeError("argument str must be a string");var i=n.indexOf("=");if(i===-1)return-2;var a=n.slice(i+1).split(","),t=[];t.type=n.slice(0,i);for(var s=0;s<a.length;s++){var d=a[s].split("-"),f=parseInt(d[0],10),e=parseInt(d[1],10);isNaN(f)?(f=r-e,e=r-1):isNaN(e)&&(e=r-1),e>r-1&&(e=r-1),!(isNaN(f)||isNaN(e)||f>e||f<0)&&t.push({start:f,end:e})}return t.length<1?-1:o&&o.combine?p(t):t}function p(r){for(var n=r.map(v).sort(m),o=0,i=1;i<n.length;i++){var a=n[i],t=n[o];a.start>t.end+1?n[++o]=a:a.end>t.end&&(t.end=a.end,t.index=Math.min(t.index,a.index))}n.length=o+1;var s=n.sort(l).map(x);return s.type=r.type,s}function v(r,n){return{start:r.start,end:r.end,index:n}}function x(r){return{start:r.start,end:r.end}}function l(r,n){return r.index-n.index}function m(r,n){return r.start-n.start}export{h as r};
