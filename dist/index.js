"use strict";var t=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var b=t(function(C,m){
var k=require('@stdlib/math-base-assert-is-nanf/dist'),f=require('@stdlib/math-base-special-abs/dist');function R(a,i,u){var s,n,e,r;if(a<=0)return NaN;if(a===1||u===0)return f(i[0]);for(u<0?n=(1-a)*u:n=0,r=0;r<a&&(e=i[n],e!==e);r++)n+=u;if(r===a)return NaN;for(s=f(e),r+=1,r;r<a;r++)n+=u,e=f(i[n]),!k(e)&&e>s&&(s=e);return s}m.exports=R
});var x=t(function(D,c){
var _=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-special-abs/dist');function E(a,i,u,s){var n,e,r,v;if(a<=0)return NaN;if(a===1||u===0)return o(i[s]);for(e=s,v=0;v<a&&(r=i[e],r!==r);v++)e+=u;if(v===a)return NaN;for(n=o(r),v+=1,v;v<a;v++)e+=u,r=o(i[e]),!_(r)&&r>n&&(n=r);return n}c.exports=E
});var j=t(function(F,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=b(),g=x();O(p,"ndarray",g);y.exports=p
});var h=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),q,l=w(h(__dirname,"./native.js"));z(l)?q=A:q=l;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
