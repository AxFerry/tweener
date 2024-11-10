/*!
 * merge-descriptors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var c=i,p=Object.prototype.hasOwnProperty;function i(r,e,t){if(!r)throw new TypeError("argument dest is required");if(!e)throw new TypeError("argument src is required");return t===void 0&&(t=!0),Object.getOwnPropertyNames(e).forEach(function(o){if(!(!t&&p.call(r,o))){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,n)}}),r}export{c as m};
