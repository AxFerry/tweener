/*!
 * forwarded
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */var c=n;function n(r){if(!r)throw new TypeError("argument req is required");var e=d(r.headers["x-forwarded-for"]||""),o=a(r),t=[o].concat(e);return t}function a(r){return r.socket?r.socket.remoteAddress:r.connection.remoteAddress}function d(r){for(var e=r.length,o=[],t=r.length,s=r.length-1;s>=0;s--)switch(r.charCodeAt(s)){case 32:t===e&&(t=e=s);break;case 44:t!==e&&o.push(r.substring(t,e)),t=e=s;break;default:t=s;break}return t!==e&&o.push(r.substring(t,e)),o}export{c as f};
