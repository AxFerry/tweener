/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var r=t;function t(i){return i.split(" ").map(function(e){return e.slice(0,1).toUpperCase()+e.slice(1)}).join("").replace(/[^ _0-9a-z]/gi,"")}export{r as t};
