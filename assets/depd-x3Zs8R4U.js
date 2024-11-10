/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var c=o;function o(r){if(!r)throw new TypeError("argument namespace is required");function e(n){}return e._file=void 0,e._ignored=!0,e._namespace=r,e._traced=!1,e._warned=Object.create(null),e.function=p,e.property=u,e}function p(r,e){if(typeof r!="function")throw new TypeError("argument fn must be a function");return r}function u(r,e,n){if(!r||typeof r!="object"&&typeof r!="function")throw new TypeError("argument obj must be object");var t=Object.getOwnPropertyDescriptor(r,e);if(!t)throw new TypeError("must call property on owner object");if(!t.configurable)throw new TypeError("property must be configurable")}export{c as b};
