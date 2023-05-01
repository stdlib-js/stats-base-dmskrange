// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;function f(r){return r!=r}function c(r,e,t,n,o){var a,i,u,l,c,_;if(r<=0)return NaN;for(u=t<0?(1-r)*t:0,l=o<0?(1-r)*o:0,_=0;_<r&&0!==n[l];_++)u+=t,l+=o;if(_===r)return NaN;if(f(i=e[u]))return i;for(a=i,_+=1;_<r;_++)if(u+=t,!n[l+=o]){if(f(c=e[u]))return c;c<i?i=c:c>a&&(a=c)}return a-i}function _(r,e,t,n,o,a,i){var u,l,c,_,p,b;if(r<=0)return NaN;for(c=n,_=i,b=0;b<r&&0!==o[_];b++)c+=t,_+=a;if(b===r)return NaN;if(f(l=e[c]))return l;for(u=l,b+=1;b<r;b++)if(c+=t,!o[_+=a]){if(f(p=e[c]))return p;p<l?l=p:p>u&&(u=p)}return u-l}e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var f,c,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||l.call(r,e)?(f=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=f):r[e]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&i&&i.call(r,e,t.set),r},e(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_});export{c as default,_ as ndarray};
//# sourceMappingURL=mod.js.map