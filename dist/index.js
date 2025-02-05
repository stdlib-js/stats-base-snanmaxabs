"use strict";var t=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var f=t(function(B,m){
var j=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(r,a,n,q){var u,s,e,i;if(r<=0)return NaN;if(r===1||n===0)return v(a[q]);for(s=q,i=0;i<r&&(e=a[s],e!==e);i++)s+=n;if(i===r)return NaN;for(u=v(e),i+=1,i;i<r;i++)s+=n,e=v(a[s]),!j(e)&&e>u&&(u=e);return u}m.exports=l
});var c=t(function(C,x){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=f();function k(r,a,n){return _(r,a,n,R(r,n))}x.exports=k
});var y=t(function(D,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=c(),O=f();E(b,"ndarray",O);p.exports=b
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),o,d=h(g(__dirname,"./native.js"));w(d)?o=z:o=d;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
