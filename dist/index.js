"use strict";var c=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var g=c(function(F,p){
var x=require('@stdlib/math-base-assert-is-nan/dist');function d(i,u,t,q,o){var s,v,n,r,a,e;if(i<=0)return NaN;for(t<0?n=(1-i)*t:n=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&q[r]!==0;e++)n+=t,r+=o;if(e===i)return NaN;if(v=u[n],x(v))return v;for(s=v,e+=1,e;e<i;e++)if(n+=t,r+=o,!q[r]){if(a=u[n],x(a))return a;a<v?v=a:a>s&&(s=a)}return s-v}p.exports=d
});var b=c(function(G,j){
var y=require('@stdlib/math-base-assert-is-nan/dist');function h(i,u,t,q,o,s,v){var n,r,a,e,m,f;if(i<=0)return NaN;for(a=q,e=v,f=0;f<i&&o[e]!==0;f++)a+=t,e+=s;if(f===i)return NaN;if(r=u[a],y(r))return r;for(n=r,f+=1,f;f<i;f++)if(a+=t,e+=s,!o[e]){if(m=u[a],y(m))return m;m<r?r=m:m>n&&(n=m)}return n-r}j.exports=h
});var E=c(function(H,_){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=g(),w=b();k(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=E(),l,O=A(z(__dirname,"./native.js"));B(O)?l=C:l=O;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
