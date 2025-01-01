"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=c(function(G,y){
var p=require('@stdlib/math-base-assert-is-nan/dist');function E(r,e,u,q,t,f,m){var o,i,v,s,n,a;if(r<=0)return NaN;for(v=q,s=m,a=0;a<r&&t[s]!==0;a++)v+=u,s+=f;if(a===r)return NaN;if(i=e[v],p(i))return i;for(o=i,a+=1,a;a<r;a++)if(v+=u,s+=f,!t[s]){if(n=e[v],p(n))return n;n<i?i=n:n>o&&(o=n)}return o-i}y.exports=E
});var l=c(function(H,j){
var g=require('@stdlib/strided-base-stride2offset/dist'),O=d();function h(r,e,u,q,t){var f=g(r,u),m=g(r,t);return O(r,e,u,f,q,t,m)}j.exports=h
});var _=c(function(I,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=l(),z=d();w(k,"ndarray",z);R.exports=k
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),x,b=B(A(__dirname,"./native.js"));C(b)?x=D:x=b;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
