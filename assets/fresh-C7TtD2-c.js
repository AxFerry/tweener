/*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */var h=/(?:^|,)\s*?no-cache\s*?(?:,|$)/,C=p;function p(a,r){var f=a["if-modified-since"],e=a["if-none-match"];if(!f&&!e)return!1;var n=a["cache-control"];if(n&&h.test(n))return!1;if(e&&e!=="*"){var t=r.etag;if(!t)return!1;for(var u=!0,o=b(e),s=0;s<o.length;s++){var i=o[s];if(i===t||i==="W/"+t||"W/"+i===t){u=!1;break}}if(u)return!1}if(f){var v=r["last-modified"],l=!v||!(c(v)<=c(f));if(l)return!1}return!0}function c(a){var r=a&&Date.parse(a);return typeof r=="number"?r:NaN}function b(a){for(var r=0,f=[],e=0,n=0,t=a.length;n<t;n++)switch(a.charCodeAt(n)){case 32:e===r&&(e=r=n+1);break;case 44:f.push(a.substring(e,r)),e=r=n+1;break;default:r=n+1;break}return f.push(a.substring(e,r)),f}export{C as f};
