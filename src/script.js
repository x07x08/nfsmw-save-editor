/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
!function(){"use strict";function t(t){if(t)b[0]=b[16]=b[1]=b[2]=b[3]=b[4]=b[5]=b[6]=b[7]=b[8]=b[9]=b[10]=b[11]=b[12]=b[13]=b[14]=b[15]=0,this.blocks=b,this.buffer8=a;else if(u){var r=new ArrayBuffer(68);this.buffer8=new Uint8Array(r),this.blocks=new Uint32Array(r)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}function r(r,e){var i,s=_(r);if(r=s[0],s[1]){var h,n=[],a=r.length,o=0;for(i=0;i<a;++i)(h=r.charCodeAt(i))<128?n[o++]=h:h<2048?(n[o++]=192|h>>>6,n[o++]=128|63&h):h<55296||h>=57344?(n[o++]=224|h>>>12,n[o++]=128|h>>>6&63,n[o++]=128|63&h):(h=65536+((1023&h)<<10|1023&r.charCodeAt(++i)),n[o++]=240|h>>>18,n[o++]=128|h>>>12&63,n[o++]=128|h>>>6&63,n[o++]=128|63&h);r=n}r.length>64&&(r=new t(!0).update(r).array());var f=[],u=[];for(i=0;i<64;++i){var c=r[i]||0;f[i]=92^c,u[i]=54^c}t.call(this,e),this.update(u),this.oKeyPad=f,this.inner=!0,this.sharedMemory=e}var e="input is invalid type",i="object"==typeof window,s=i?window:{};s.JS_MD5_NO_WINDOW&&(i=!1);var h=!i&&"object"==typeof self,n=!s.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;n?s=global:h&&(s=self);var a,o=!s.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,f="function"==typeof define&&define.amd,u=!s.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,c="0123456789abcdef".split(""),y=[128,32768,8388608,-2147483648],p=[0,8,16,24],d=["hex","array","digest","buffer","arrayBuffer","base64"],l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),b=[];if(u){var v=new ArrayBuffer(68);a=new Uint8Array(v),b=new Uint32Array(v)}var w=Array.isArray;!s.JS_MD5_NO_NODE_JS&&w||(w=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var A=ArrayBuffer.isView;!u||!s.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&A||(A=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var _=function(t){var r=typeof t;if("string"===r)return[t,!0];if("object"!==r||null===t)throw new Error(e);if(u&&t.constructor===ArrayBuffer)return[new Uint8Array(t),!1];if(!w(t)&&!A(t))throw new Error(e);return[t,!1]},B=function(r){return function(e){return new t(!0).update(e)[r]()}},g=function(t){var r,i=require("crypto"),h=require("buffer").Buffer;r=h.from&&!s.JS_MD5_NO_BUFFER_FROM?h.from:function(t){return new h(t)};return function(s){if("string"==typeof s)return i.createHash("md5").update(s,"utf8").digest("hex");if(null===s||void 0===s)throw new Error(e);return s.constructor===ArrayBuffer&&(s=new Uint8Array(s)),w(s)||A(s)||s.constructor===h?i.createHash("md5").update(r(s)).digest("hex"):t(s)}},m=function(t){return function(e,i){return new r(e,!0).update(i)[t]()}};t.prototype.update=function(t){if(this.finalized)throw new Error("finalize already called");var r=_(t);t=r[0];for(var e,i,s=r[1],h=0,n=t.length,a=this.blocks,o=this.buffer8;h<n;){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),s)if(u)for(i=this.start;h<n&&i<64;++h)(e=t.charCodeAt(h))<128?o[i++]=e:e<2048?(o[i++]=192|e>>>6,o[i++]=128|63&e):e<55296||e>=57344?(o[i++]=224|e>>>12,o[i++]=128|e>>>6&63,o[i++]=128|63&e):(e=65536+((1023&e)<<10|1023&t.charCodeAt(++h)),o[i++]=240|e>>>18,o[i++]=128|e>>>12&63,o[i++]=128|e>>>6&63,o[i++]=128|63&e);else for(i=this.start;h<n&&i<64;++h)(e=t.charCodeAt(h))<128?a[i>>>2]|=e<<p[3&i++]:e<2048?(a[i>>>2]|=(192|e>>>6)<<p[3&i++],a[i>>>2]|=(128|63&e)<<p[3&i++]):e<55296||e>=57344?(a[i>>>2]|=(224|e>>>12)<<p[3&i++],a[i>>>2]|=(128|e>>>6&63)<<p[3&i++],a[i>>>2]|=(128|63&e)<<p[3&i++]):(e=65536+((1023&e)<<10|1023&t.charCodeAt(++h)),a[i>>>2]|=(240|e>>>18)<<p[3&i++],a[i>>>2]|=(128|e>>>12&63)<<p[3&i++],a[i>>>2]|=(128|e>>>6&63)<<p[3&i++],a[i>>>2]|=(128|63&e)<<p[3&i++]);else if(u)for(i=this.start;h<n&&i<64;++h)o[i++]=t[h];else for(i=this.start;h<n&&i<64;++h)a[i>>>2]|=t[h]<<p[3&i++];this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,r=this.lastByteIndex;t[r>>>2]|=y[3&r],r>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,r,e,i,s,h,n=this.blocks;this.first?r=((r=((t=((t=n[0]-680876937)<<7|t>>>25)-271733879<<0)^(e=((e=(-271733879^(i=((i=(-1732584194^2004318071&t)+n[1]-117830708)<<12|i>>>20)+t<<0)&(-271733879^t))+n[2]-1126478375)<<17|e>>>15)+i<<0)&(i^t))+n[3]-1316259209)<<22|r>>>10)+e<<0:(t=this.h0,r=this.h1,e=this.h2,r=((r+=((t=((t+=((i=this.h3)^r&(e^i))+n[0]-680876936)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+n[1]-389564586)<<12|i>>>20)+t<<0)&(t^r))+n[2]+606105819)<<17|e>>>15)+i<<0)&(i^t))+n[3]-1044525330)<<22|r>>>10)+e<<0),r=((r+=((t=((t+=(i^r&(e^i))+n[4]-176418897)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+n[5]+1200080426)<<12|i>>>20)+t<<0)&(t^r))+n[6]-1473231341)<<17|e>>>15)+i<<0)&(i^t))+n[7]-45705983)<<22|r>>>10)+e<<0,r=((r+=((t=((t+=(i^r&(e^i))+n[8]+1770035416)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+n[9]-1958414417)<<12|i>>>20)+t<<0)&(t^r))+n[10]-42063)<<17|e>>>15)+i<<0)&(i^t))+n[11]-1990404162)<<22|r>>>10)+e<<0,r=((r+=((t=((t+=(i^r&(e^i))+n[12]+1804603682)<<7|t>>>25)+r<<0)^(e=((e+=(r^(i=((i+=(e^t&(r^e))+n[13]-40341101)<<12|i>>>20)+t<<0)&(t^r))+n[14]-1502002290)<<17|e>>>15)+i<<0)&(i^t))+n[15]+1236535329)<<22|r>>>10)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+n[1]-165796510)<<5|t>>>27)+r<<0)^r))+n[6]-1069501632)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+n[11]+643717713)<<14|e>>>18)+i<<0)^i))+n[0]-373897302)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+n[5]-701558691)<<5|t>>>27)+r<<0)^r))+n[10]+38016083)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+n[15]-660478335)<<14|e>>>18)+i<<0)^i))+n[4]-405537848)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+n[9]+568446438)<<5|t>>>27)+r<<0)^r))+n[14]-1019803690)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+n[3]-187363961)<<14|e>>>18)+i<<0)^i))+n[8]+1163531501)<<20|r>>>12)+e<<0,r=((r+=((i=((i+=(r^e&((t=((t+=(e^i&(r^e))+n[13]-1444681467)<<5|t>>>27)+r<<0)^r))+n[2]-51403784)<<9|i>>>23)+t<<0)^t&((e=((e+=(t^r&(i^t))+n[7]+1735328473)<<14|e>>>18)+i<<0)^i))+n[12]-1926607734)<<20|r>>>12)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+n[5]-378558)<<4|t>>>28)+r<<0))+n[8]-2022574463)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+n[11]+1839030562)<<16|e>>>16)+i<<0))+n[14]-35309556)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+n[1]-1530992060)<<4|t>>>28)+r<<0))+n[4]+1272893353)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+n[7]-155497632)<<16|e>>>16)+i<<0))+n[10]-1094730640)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+n[13]+681279174)<<4|t>>>28)+r<<0))+n[0]-358537222)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+n[3]-722521979)<<16|e>>>16)+i<<0))+n[6]+76029189)<<23|r>>>9)+e<<0,r=((r+=((h=(i=((i+=((s=r^e)^(t=((t+=(s^i)+n[9]-640364487)<<4|t>>>28)+r<<0))+n[12]-421815835)<<11|i>>>21)+t<<0)^t)^(e=((e+=(h^r)+n[15]+530742520)<<16|e>>>16)+i<<0))+n[2]-995338651)<<23|r>>>9)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+n[0]-198630844)<<6|t>>>26)+r<<0)|~e))+n[7]+1126891415)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+n[14]-1416354905)<<15|e>>>17)+i<<0)|~t))+n[5]-57434055)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+n[12]+1700485571)<<6|t>>>26)+r<<0)|~e))+n[3]-1894986606)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+n[10]-1051523)<<15|e>>>17)+i<<0)|~t))+n[1]-2054922799)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+n[8]+1873313359)<<6|t>>>26)+r<<0)|~e))+n[15]-30611744)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+n[6]-1560198380)<<15|e>>>17)+i<<0)|~t))+n[13]+1309151649)<<21|r>>>11)+e<<0,r=((r+=((i=((i+=(r^((t=((t+=(e^(r|~i))+n[4]-145523070)<<6|t>>>26)+r<<0)|~e))+n[11]-1120210379)<<10|i>>>22)+t<<0)^((e=((e+=(t^(i|~r))+n[2]+718787259)<<15|e>>>17)+i<<0)|~t))+n[9]-343485551)<<21|r>>>11)+e<<0,this.first?(this.h0=t+1732584193<<0,this.h1=r-271733879<<0,this.h2=e-1732584194<<0,this.h3=i+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+r<<0,this.h2=this.h2+e<<0,this.h3=this.h3+i<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3;return c[t>>>4&15]+c[15&t]+c[t>>>12&15]+c[t>>>8&15]+c[t>>>20&15]+c[t>>>16&15]+c[t>>>28&15]+c[t>>>24&15]+c[r>>>4&15]+c[15&r]+c[r>>>12&15]+c[r>>>8&15]+c[r>>>20&15]+c[r>>>16&15]+c[r>>>28&15]+c[r>>>24&15]+c[e>>>4&15]+c[15&e]+c[e>>>12&15]+c[e>>>8&15]+c[e>>>20&15]+c[e>>>16&15]+c[e>>>28&15]+c[e>>>24&15]+c[i>>>4&15]+c[15&i]+c[i>>>12&15]+c[i>>>8&15]+c[i>>>20&15]+c[i>>>16&15]+c[i>>>28&15]+c[i>>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,r=this.h1,e=this.h2,i=this.h3;return[255&t,t>>>8&255,t>>>16&255,t>>>24&255,255&r,r>>>8&255,r>>>16&255,r>>>24&255,255&e,e>>>8&255,e>>>16&255,e>>>24&255,255&i,i>>>8&255,i>>>16&255,i>>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),r=new Uint32Array(t);return r[0]=this.h0,r[1]=this.h1,r[2]=this.h2,r[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,r,e,i="",s=this.array(),h=0;h<15;)t=s[h++],r=s[h++],e=s[h++],i+=l[t>>>2]+l[63&(t<<4|r>>>4)]+l[63&(r<<2|e>>>6)]+l[63&e];return t=s[h],i+=l[t>>>2]+l[t<<4&63]+"=="},(r.prototype=new t).finalize=function(){if(t.prototype.finalize.call(this),this.inner){this.inner=!1;var r=this.array();t.call(this,this.sharedMemory),this.update(this.oKeyPad),this.update(r),t.prototype.finalize.call(this)}};var O=function(){var r=B("hex");n&&(r=g(r)),r.create=function(){return new t},r.update=function(t){return r.create().update(t)};for(var e=0;e<d.length;++e){var i=d[e];r[i]=B(i)}return r}();O.md5=O,O.md5.hmac=function(){var t=m("hex");t.create=function(t){return new r(t)},t.update=function(r,e){return t.create(r).update(e)};for(var e=0;e<d.length;++e){var i=d[e];t[i]=m(i)}return t}(),o?module.exports=O:(s.md5=O,f&&define(function(){return O}))}();

// crel.js
/*
Copyright (C) 2012 Kory Nunn
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(e=>{const t="function",n="isNode",o=(e,t)=>typeof e===t,r=(e,t)=>{null!==t&&(Array.isArray(t)?t.map(t=>r(e,t)):(i[n](t)||(t=document.createTextNode(t)),e.appendChild(t)))};function i(e,a){let d,f,l=arguments,c=1;if(e=i.isElement(e)?e:document.createElement(e),o(a,"object")&&!i[n](a)&&!Array.isArray(a))for(d in c++,a)f=a[d],o(d=i.attrMap[d]||d,t)?d(e,f):o(f,t)?e[d]=f:e.setAttribute(d,f);for(;c<l.length;c++)r(e,l[c]);return e}i.attrMap={},i.isElement=(e=>e instanceof Element),i[n]=(e=>e instanceof Node),i.proxy=new Proxy(i,{get:(e,t)=>(!(t in i)&&(i[t]=i.bind(null,t)),i[t])}),e(i,t)})((e,t)=>{"object"==typeof exports?module.exports=e:typeof define===t&&define.amd?define(()=>e):this.crel=e});

/*
* FileSaver.js
* A saveAs() FileSaver implementation.
*
* By Eli Grey, http://eligrey.com
*
* License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
* source  : http://purl.eligrey.com/github/FileSaver.js
*/
(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g,"undefined"!=typeof module&&(module.exports=g)});

// https://www.xaymar.com/articles/2020/12/08/fastest-uint8array-to-hex-string-conversion-in-javascript/

// Pre-Init
const LUT_HEX_4b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const LUT_HEX_8b = new Array(0x100);
for (let n = 0; n < 0x100; n++) {
	LUT_HEX_8b[n] = `${LUT_HEX_4b[(n >>> 4) & 0xF]}${LUT_HEX_4b[n & 0xF]}`;
}
// End Pre-Init
function toHex(buffer) {
	let out = '';
	for (let idx = 0, edx = buffer.length; idx < edx; idx++) {
		out += LUT_HEX_8b[buffer[idx]];
	}
	return out;
}

const SELECT_SOUND = "../external/sounds/rsheet_sel1.wav";
const CONFIRM_SOUND = "../external/sounds/rsheet_sel2.wav";
const OPEN_SOUND = "../external/sounds/rsheet_open1.wav";

const NULL = "\0";

const CAR_STRUCT_SIZE = 0x38;
const CAR_STRUCT_LEN = CAR_STRUCT_SIZE - 1;
const INVALID_ID = 0xFF;
const MAX_CARS = 6;
const CAR_ID_SIZE = 0x10;
const CAR_ID_LEN = CAR_ID_SIZE - 1;

const PURSUIT_STRUCT_SIZE = 0x38;
const PURSUIT_STRUCT_LEN = PURSUIT_STRUCT_SIZE - 1;
const MAX_PURSUITS = 5;
const PURSUIT_ID_SIZE = 0xC;
const PURSUIT_ID_LEN = PURSUIT_ID_SIZE - 1;

const TypedArray = Object.getPrototypeOf(Uint8Array);

function arrEql(a, b) {
	return (a.length === b.length) &&
		a.every(function (element, index) {
			return element === b[index];
		});
}

let dmap = {};

dmap.save = {
	size: 63596,
	pos: 0,

	/** @type DataView */
	value: null,
};

function GetTypedValue(data, littleEndian = false) {
	switch (data.type) {
		case Uint8Array:
			return dmap.save.value.getUint8(data.pos);

		case Uint8ClampedArray:
			return dmap.save.value.getUint8(data.pos);

		case Uint16Array:
			return dmap.save.value.getUint16(data.pos, littleEndian);

		case Uint32Array:
			return dmap.save.value.getUint32(data.pos, littleEndian);

		case Int8Array:
			return dmap.save.value.getInt8(data.pos);

		case Int16Array:
			return dmap.save.value.getInt16(data.pos, littleEndian);

		case Int32Array:
			return dmap.save.value.getInt32(data.pos, littleEndian);

		case Float32Array:
			return dmap.save.value.getFloat32(data.pos, littleEndian);

		case Float64Array:
			return dmap.save.value.getFloat64(data.pos, littleEndian);

		case BigUint64Array:
			return dmap.save.value.getBigUint64(data.pos, littleEndian);

		case BigInt64Array:
			return dmap.save.value.getBigInt64(data.pos, littleEndian);

		default:
			return null;
	}
}

function SetTypedValue(type, pos, val, littleEndian = false) {
	switch (type) {
		case Uint8Array:
			dmap.save.value.setUint8(pos, val);

			break;

		case Uint8ClampedArray:
			dmap.save.value.setUint8(pos, val);

			break;

		case Uint16Array:
			dmap.save.value.setUint16(pos, val, littleEndian);

			break;

		case Uint32Array:
			dmap.save.value.setUint32(pos, val, littleEndian);

			break;

		case Int8Array:
			dmap.save.value.setInt8(pos, val);

			break;

		case Int16Array:
			dmap.save.value.setInt16(pos, val, littleEndian);

			break;

		case Int32Array:
			dmap.save.value.setInt32(pos, val, littleEndian);

			break;

		case Float32Array:
			dmap.save.value.setFloat32(pos, val, littleEndian);

			break;

		case Float64Array:
			dmap.save.value.setFloat64(pos, val, littleEndian);

			break;

		case BigUint64Array:
			dmap.save.value.setBigUint64(pos, val, littleEndian);

			break;

		case BigInt64Array:
			dmap.save.value.setBigInt64(pos, val, littleEndian);

			break;

		default:
			return;
	}
}

function EncodedValue(
	type,
	pos,
	length = 1,
	configurable = true,
	description = "",
	littleEndian = true,
	prev = undefined,
	tooltip = undefined
) {
	return {
		__proto__: EncodedValue.prototype,
		type: type,
		length: length,
		pos: prev == undefined ? pos : prev.pos + prev.type.BYTES_PER_ELEMENT * prev.length,
		configurable: configurable,
		description: description,
		littleEndian: littleEndian,
		tooltip: tooltip,

		get value() {
			if (dmap.save.value == null) return null;

			if ((this.length > 1) && (this.type.prototype instanceof TypedArray)) {
				return new this.type(dmap.save.value.buffer.slice(this.pos, this.pos + this.length));
			}

			if (this.type.prototype instanceof TypedArray) {
				return GetTypedValue(this, this.littleEndian);
			} else {
				switch (this.type) {
					case String:
						return this._value;
				}
			}
		},

		set value(val) {
			if (dmap.save.value == null) return;

			if (((this.length > 1) && (this.type.prototype instanceof TypedArray))
				&& ((val.prototype instanceof TypedArray) || Array.isArray(val))) {
				const lowest = Math.min(this.length, val.length);

				for (let index = 0; index < lowest; index++) {
					SetTypedValue(this.type, this.pos + index, val[index], this.littleEndian);
				}

				if (this != dmap.md5) {
					updateHash();
				}

				return;
			}

			if (this.type.prototype instanceof TypedArray) {
				SetTypedValue(this.type, this.pos, val, this.littleEndian);
			} else {
				switch (this.type) {
					case String:
						this._value = new TextDecoder().decode(val);
						this._value = this._value.slice(0, this._value.indexOf(NULL));

						break;
				}
			}

			if (this != dmap.md5) {
				updateHash();
			}
		},
	};
}

function CustomEncodedValue(
	getter,
	setter,
	type,
	pos,
	length = 1,
	configurable = true,
	littleEndian = true,
	description = "",
	prev = undefined,
	tooltip = undefined
) {
	let obj = {
		__proto__: EncodedValue.prototype,
		type: type,
		length: length,
		pos: prev == undefined ? pos : prev.pos + prev.type.BYTES_PER_ELEMENT * prev.length,
		configurable: configurable,
		description: description,
		littleEndian: littleEndian,
		tooltip: tooltip,
	};

	Object.defineProperty(obj, "value", {
		get: getter,
		set: setter,
	});

	return obj;
}

function StructuredData(header) {
	return {
		__proto__: StructuredData.prototype,
		header: header,
		/** @type any[] */
		dataValues: [],
	};
}

dmap.md5 = EncodedValue(Uint8Array, dmap.save.size - 16, 16, false);
// Read-only; the size can vary because of Extra Options
dmap.name = EncodedValue(String, 0x5A31, 8, false);
dmap.money = EncodedValue(Uint32Array, 0x4039, undefined, undefined, "MONEY");
dmap.pursuitBounty = EncodedValue(Uint32Array, 0xE865, undefined, undefined, "PURSUIT BOUNTY");
dmap.caseName = CustomEncodedValue(
	function () {
		return new TextDecoder().decode(dmap.save.value.buffer.slice(this.pos, this.pos + this.length));
	},

	function (val) {
		if (val.length > 0xC) return;

		let encodedText = new TextEncoder().encode(val);

		encodedText.forEach((val, index) => {
			SetTypedValue(Uint8Array, this.pos + index, val, this.littleEndian);
		});

		if (val.length < 0xC) {
			SetTypedValue(Uint8Array, this.pos + val.length, 0, this.littleEndian);
		}

		updateHash();
	},
	String,
	0x429D,
	0xC,
	undefined,
	undefined,
	"CASE NAME",
	undefined,
	"ONLY 12 CHARACTERS. CAN PERSIST"
);

dmap.carsContent = EncodedValue(Uint8Array, 0xE2ED, CAR_STRUCT_SIZE * MAX_CARS, false, undefined);
dmap.pursuitContent = EncodedValue(Uint8Array, 0xF2BA, PURSUIT_STRUCT_SIZE * MAX_PURSUITS, false, undefined);

dmap.carsData = [];
dmap.pursuitsData = [];

dmap.lifetimePursuit = StructuredData("LIFETIME PURSUIT");
dmap.lifetimePursuit.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
	`PURSUIT LENGTH`,
	undefined,
	dmap.pursuitContent
));

dmap.lifetimePursuit.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
	`TOTAL POLICE VEHICLES INVOLVED`,
	undefined,
	dmap.lifetimePursuit.dataValues[0]
));

dmap.lifetimePursuit.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
	`POLICE VEHICLES DAMAGED`,
	undefined,
	dmap.lifetimePursuit.dataValues[1]
));

dmap.lifetimePursuit.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
	`POLICE VEHICLES IMMOBILIZED`,
	undefined,
	dmap.lifetimePursuit.dataValues[2]
));

dmap.lifetimePursuit.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
	`SPIKE STRIPS DODGED`,
	undefined,
	dmap.lifetimePursuit.dataValues[3]
));

dmap.lifetimePursuit.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
	`ROADBLOCKS DODGED`,
	undefined,
	dmap.lifetimePursuit.dataValues[4]
));

dmap.lifetimePursuit.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
	`HELICOPTERS DEPLOYED`,
	undefined,
	dmap.lifetimePursuit.dataValues[5]
));

dmap.lifetimePursuit.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
	`COST TO STATE ACHIEVED`,
	undefined,
	dmap.lifetimePursuit.dataValues[6]
));

dmap.singlePursuit = StructuredData("SINGLE PURSUIT");
dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.lifetimePursuit.dataValues[7].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`PURSUIT LENGTH`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[0].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`TOTAL POLICE VEHICLES INVOLVED`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[1].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`POLICE VEHICLES DAMAGED`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[2].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`POLICE VEHICLES IMMOBILIZED`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[3].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`SPIKE STRIPS DODGED`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[4].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`ROADBLOCKS DODGED`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[5].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`HELICOPTERS DEPLOYED`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[6].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`COST TO STATE ACHIEVED`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[7].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`INFRACTIONS RECORDED`
));

dmap.singlePursuit.dataValues.push(EncodedValue(Uint32Array,
	dmap.singlePursuit.dataValues[8].pos + 2 * Uint32Array.BYTES_PER_ELEMENT,
	undefined,
	undefined,
	`PURSUIT BOUNTY ACHIEVED`
));

dmap.infractions = StructuredData("INFRACTIONS");
dmap.infractions.dataValues.push(EncodedValue(Uint16Array, 0xE86D, undefined, undefined, `SPEEDING`));

dmap.infractions.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
	`EXCESSIVE SPEEDING`,
	undefined,
	dmap.infractions.dataValues[0]
));

dmap.infractions.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
	`RECKLESS DRIVING`,
	undefined,
	dmap.infractions.dataValues[1]
));

dmap.infractions.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
	`RAMMING A POLICE VEHICLE`,
	undefined,
	dmap.infractions.dataValues[2]
));

dmap.infractions.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
	`HIT AND RUN`,
	undefined,
	dmap.infractions.dataValues[3]
));

dmap.infractions.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
	`DAMAGE TO PROPERTY`,
	undefined,
	dmap.infractions.dataValues[4]
));

dmap.infractions.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
	`RESISTING ARREST`,
	undefined,
	dmap.infractions.dataValues[5]
));

dmap.infractions.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
	`DRIVING OFF ROADWAY`,
	undefined,
	dmap.infractions.dataValues[6]
));

dmap.content = {
	size: dmap.save.size - 0x34 - dmap.md5.length,
	pos: 0x34,
};

let fileInput = document.querySelector("#opensave");
let saveButton = document.querySelector("#savebutton");
let openButton = document.querySelector("#openbutton");
let saveData = document.querySelector("#savedata");
let playerName = document.querySelector("#playername");
let fileHash = document.querySelector("#filehash");

saveButton.addEventListener("click", function (event) {
	new Audio(CONFIRM_SOUND).play();

	saveButton.blur();

	if (!dmap.save.value) return;

	// https://github.com/eligrey/FileSaver.js/issues/785
	globalThis.saveAs(new Blob([dmap.save.value], { type: "application/octet-stream", }), dmap.name.value);
});

openButton.addEventListener("click", function (event) {
	new Audio(CONFIRM_SOUND).play();

	fileInput.click();

	// event.target doesn't work here?
	openButton.blur();
});

function addEntry(list, data) {
	let item = crel("li", { class: "data-item" });

	if (data.tooltip != undefined) {
		item.setAttribute("data-tooltip", data.tooltip);
	}

	item.addEventListener("mouseenter", function (event) {
		new Audio(SELECT_SOUND).play();
	});

	let content = crel("span", { class: "data-content" });
	content.innerText = data.description;
	crel(item, content);

	let input = crel("input", { class: "data-input", type: (data.type != String) ? "number" : "text" });
	input.value = data.value;

	input.addEventListener("change", function (event) {
		new Audio(CONFIRM_SOUND).play();

		data.value = event.target.value;
	});

	input.addEventListener("focus", function (event) {
		new Audio(SELECT_SOUND).play();
	});

	crel(item, input);

	crel(list, item);
}

function handleData(list, data) {
	if (data instanceof EncodedValue) {
		if (!data.configurable) {
			return;
		}

		addEntry(list, data);
	} else if (data instanceof StructuredData) {
		crel(list, crel("hr"));

		let details = crel("details");

		let header = crel("summary", { class: "data-header", });
		header.innerText = data.header;

		header.addEventListener("click", function (event) {
			new Audio(CONFIRM_SOUND).play();
		});

		crel(details, header);
		crel(list, details);

		crel(list, crel("hr"));

		data.dataValues.forEach(val => {
			if (!val.configurable) {
				return;
			}

			addEntry(details, val);
		});
	}
}

function appendData(list, data) {
	if (!Array.isArray(data)) {
		handleData(list, data);

		return;
	}

	data.forEach(entry => {
		handleData(list, entry);
	});
}

function showData() {
	saveData.innerHTML = ``;

	let list = crel("ul", { class: "data-list" });

	for (const key in dmap) {
		let data = dmap[key];

		appendData(list, data);
	}

	crel(saveData, list);
}

function fetchCarData(index) {
	let carsContentView = new DataView(dmap.carsContent.value.buffer);

	if (carsContentView.getUint8(index * CAR_STRUCT_SIZE) == INVALID_ID) {
		return;
	}

	let carData = StructuredData(`CAR #${index + 1}`);

	let bountyPos = dmap.carsContent.pos + (index * CAR_STRUCT_SIZE) + CAR_ID_SIZE;
	carData.dataValues.push(EncodedValue(Uint32Array, bountyPos, undefined, undefined, `BOUNTY`));

	let speedingPos = bountyPos + carData.dataValues[0].type.BYTES_PER_ELEMENT + 0x4;
	carData.dataValues.push(EncodedValue(Uint16Array, speedingPos, undefined, undefined, `SPEEDING`));

	carData.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
		`EXCESSIVE SPEEDING`,
		undefined,
		carData.dataValues[1]
	));

	carData.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
		`RECKLESS DRIVING`,
		undefined,
		carData.dataValues[2]
	));

	carData.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
		`RAMMING A POLICE VEHICLE`,
		undefined,
		carData.dataValues[3]
	));

	carData.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
		`HIT AND RUN`,
		undefined,
		carData.dataValues[4]
	));

	carData.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
		`DAMAGE TO PROPERTY`,
		undefined,
		carData.dataValues[5]
	));

	carData.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
		`RESISTING ARREST`,
		undefined,
		carData.dataValues[6]
	));

	carData.dataValues.push(EncodedValue(Uint16Array, undefined, undefined, undefined,
		`DRIVING OFF ROADWAY`,
		undefined,
		carData.dataValues[7]
	));

	dmap.carsData.push(carData);
}

function fetchSinglePursuitData(index) {
	let pursuitData = StructuredData(`PURSUIT #${index + 1}`);

	let timePos = dmap.pursuitContent.pos + (index * PURSUIT_STRUCT_SIZE) + PURSUIT_ID_SIZE;
	pursuitData.dataValues.push(EncodedValue(Uint32Array, timePos, undefined, undefined, `PURSUIT LENGTH`));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`PURSUIT BOUNTY ACHIEVED`,
		undefined,
		pursuitData.dataValues[0]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, false,
		`UNKNOWN`,
		undefined,
		pursuitData.dataValues[1]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`TOTAL POLICE VEHICLES INVOLVED`,
		undefined,
		pursuitData.dataValues[2]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`POLICE VEHICLES DAMAGED`,
		undefined,
		pursuitData.dataValues[3]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`POLICE VEHICLES IMMOBILIZED`,
		undefined,
		pursuitData.dataValues[4]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`ROADBLOCKS DODGED`,
		undefined,
		pursuitData.dataValues[5]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`SPIKE STRIPS DODGED`,
		undefined,
		pursuitData.dataValues[6]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`COST TO STATE ACHIEVED`,
		undefined,
		pursuitData.dataValues[7]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`INFRACTIONS RECORDED`,
		undefined,
		pursuitData.dataValues[8]
	));

	pursuitData.dataValues.push(EncodedValue(Uint32Array, undefined, undefined, undefined,
		`HELICOPTERS DEPLOYED`,
		undefined,
		pursuitData.dataValues[9]
	));

	dmap.pursuitsData.push(pursuitData);
}

function readSaveFile(event) {
	dmap.save.value = new DataView(event.target.result, dmap.save.pos, dmap.save.size);

	dmap.name.value = dmap.save.value.buffer.slice(
		dmap.name.pos,
		dmap.name.pos + dmap.name.length,
	);

	updateHash();

	playerName.innerText = `NAME : ` + dmap.name.value;

	for (let index = 0; index < MAX_CARS; index++) {
		fetchCarData(index);
	}

	for (let index = 0; index < MAX_PURSUITS; index++) {
		fetchSinglePursuitData(index);
	}

	showData();

	event.target.removeEventListener("load", readSaveFile);
}

function updateHash() {
	let tempHash = globalThis.md5.digest(dmap.save.value.buffer.slice(
		dmap.content.pos,
		dmap.content.pos + dmap.content.size,
	));

	if (arrEql(tempHash, dmap.md5.value)) {
		fileHash.innerText = `HASH : ` + toHex(tempHash);

		return;
	}

	dmap.md5.value = tempHash;

	fileHash.innerText = `HASH : ` + toHex(tempHash);
}

fileInput.addEventListener("click", function (event) {
	event.target.value = null;
});

fileInput.addEventListener("change", function (event) {
	playerName.innerText = `NAME : `;
	fileHash.innerText = `HASH : `;
	saveData.innerHTML = `NO DATA`;
	dmap.save.value = null;
	dmap.carsData = [];
	dmap.pursuitsData = [];

	new Audio(OPEN_SOUND).play();

	if (event.target.files.length == 0) {
		return;
	}

	let fileReader = new FileReader();

	fileReader.addEventListener("load", readSaveFile);
	fileReader.readAsArrayBuffer(event.target.files[0]);
});

//openButton.addEventListener("focus", function (event) {
//	new Audio(SELECT_SOUND).play();
//});
//
//saveButton.addEventListener("focus", function (event) {
//	new Audio(SELECT_SOUND).play();
//});

openButton.addEventListener("mouseenter", function (event) {
	new Audio(SELECT_SOUND).play();
});

saveButton.addEventListener("mouseenter", function (event) {
	new Audio(SELECT_SOUND).play();
});
