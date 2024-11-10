/*!
 * unpipe
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var u=a;function i(e){for(var n=e.listeners("data"),r=0;r<n.length;r++)if(n[r].name==="ondata")return!0;return!1}function a(e){if(!e)throw new TypeError("argument stream is required");if(typeof e.unpipe=="function"){e.unpipe();return}if(i(e))for(var n,r=e.listeners("close"),t=0;t<r.length;t++)n=r[t],!(n.name!=="cleanup"&&n.name!=="onclose")&&n.call(e)}export{u};
