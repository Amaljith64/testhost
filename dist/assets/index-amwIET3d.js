(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();function I6(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const r1={},U2=[],G1=()=>{},uo=()=>!1,d4=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&(c.charCodeAt(2)>122||c.charCodeAt(2)<97),G6=c=>c.startsWith("onUpdate:"),h1=Object.assign,W6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Vo=Object.prototype.hasOwnProperty,G=(c,a)=>Vo.call(c,a),_=Array.isArray,$2=c=>g4(c)==="[object Map]",K5=c=>g4(c)==="[object Set]",U=c=>typeof c=="function",m1=c=>typeof c=="string",L4=c=>typeof c=="symbol",i1=c=>c!==null&&typeof c=="object",Y5=c=>(i1(c)||U(c))&&U(c.then)&&U(c.catch),X5=Object.prototype.toString,g4=c=>X5.call(c),po=c=>g4(c).slice(8,-1),Q5=c=>g4(c)==="[object Object]",Z6=c=>m1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,s4=I6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Mo=/-(\w)/g,W1=x4(c=>c.replace(Mo,(a,e)=>e?e.toUpperCase():"")),Co=/\B([A-Z])/g,a3=x4(c=>c.replace(Co,"-$1").toLowerCase()),b4=x4(c=>c.charAt(0).toUpperCase()+c.slice(1)),e6=x4(c=>c?`on${b4(c)}`:""),A2=(c,a)=>!Object.is(c,a),r6=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},t4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Lo=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let y0;const u6=()=>y0||(y0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function j6(c){if(_(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=m1(r)?No(r):j6(r);if(s)for(const i in s)a[i]=s[i]}return a}else if(m1(c)||i1(c))return c}const go=/;(?![^(]*\))/g,xo=/:([^]+)/,bo=/\/\*[^]*?\*\//g;function No(c){const a={};return c.replace(bo,"").split(go).forEach(e=>{if(e){const r=e.split(xo);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function K6(c){let a="";if(m1(c))a=c;else if(_(c))for(let e=0;e<c.length;e++){const r=K6(c[e]);r&&(a+=r+" ")}else if(i1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const So="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wo=I6(So);function J5(c){return!!c||c===""}const Y6=c=>m1(c)?c:c==null?"":_(c)||i1(c)&&(c.toString===X5||!U(c.toString))?JSON.stringify(c,c7,2):String(c),c7=(c,a)=>a&&a.__v_isRef?c7(c,a.value):$2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[r,s])=>(e[`${r} =>`]=s,e),{})}:K5(a)?{[`Set(${a.size})`]:[...a.values()]}:i1(a)&&!_(a)&&!Q5(a)?String(a):a;let k1;class yo{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=k1,!a&&k1&&(this.index=(k1.scopes||(k1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=k1;try{return k1=this,a()}finally{k1=e}}}on(){k1=this}off(){k1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ao(c,a=k1){a&&a.active&&a.effects.push(c)}function ko(){return k1}const X6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},a7=c=>(c.w&H2)>0,e7=c=>(c.n&H2)>0,Po=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=H2},To=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];a7(s)&&!e7(s)?s.delete(c):a[e++]=s,s.w&=~H2,s.n&=~H2}a.length=e}},V6=new WeakMap;let o3=0,H2=1;const p6=30;let P1;const w2=Symbol(""),M6=Symbol("");class Q6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Ao(this,r)}run(){if(!this.active)return this.fn();let a=P1,e=v2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=P1,P1=this,v2=!0,H2=1<<++o3,o3<=p6?Po(this):A0(this),this.fn()}finally{o3<=p6&&To(this),H2=1<<--o3,P1=this.parent,v2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){P1===this?this.deferStop=!0:this.active&&(A0(this),this.onStop&&this.onStop(),this.active=!1)}}function A0(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let v2=!0;const r7=[];function e3(){r7.push(v2),v2=!1}function r3(){const c=r7.pop();v2=c===void 0?!0:c}function b1(c,a,e){if(v2&&P1){let r=V6.get(c);r||V6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=X6()),s7(s)}}function s7(c,a){let e=!1;o3<=p6?e7(c)||(c.n|=H2,e=!a7(c)):e=!c.has(P1),e&&(c.add(P1),P1.deps.push(c))}function Q1(c,a,e,r,s,i){const l=V6.get(c);if(!l)return;let n=[];if(a==="clear")n=[...l.values()];else if(e==="length"&&_(c)){const f=Number(r);l.forEach((t,o)=>{(o==="length"||!L4(o)&&o>=f)&&n.push(t)})}else switch(e!==void 0&&n.push(l.get(e)),a){case"add":_(c)?Z6(e)&&n.push(l.get("length")):(n.push(l.get(w2)),$2(c)&&n.push(l.get(M6)));break;case"delete":_(c)||(n.push(l.get(w2)),$2(c)&&n.push(l.get(M6)));break;case"set":$2(c)&&n.push(l.get(w2));break}if(n.length===1)n[0]&&C6(n[0]);else{const f=[];for(const t of n)t&&f.push(...t);C6(X6(f))}}function C6(c,a){const e=_(c)?c:[...c];for(const r of e)r.computed&&k0(r);for(const r of e)r.computed||k0(r)}function k0(c,a){(c!==P1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Fo=I6("__proto__,__v_isRef,__isVue"),i7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(L4)),P0=Bo();function Bo(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=W(this);for(let i=0,l=this.length;i<l;i++)b1(r,"get",i+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(W)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){e3();const r=W(this)[a].apply(this,e);return r3(),r}}),c}function Ro(c){const a=W(this);return b1(a,"has",c),a.hasOwnProperty(c)}class l7{constructor(a=!1,e=!1){this._isReadonly=a,this._shallow=e}get(a,e,r){const s=this._isReadonly,i=this._shallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return i;if(e==="__v_raw"&&r===(s?i?Ko:t7:i?o7:f7).get(a))return a;const l=_(a);if(!s){if(l&&G(P0,e))return Reflect.get(P0,e,r);if(e==="hasOwnProperty")return Ro}const n=Reflect.get(a,e,r);return(L4(e)?i7.has(e):Fo(e))||(s||b1(a,"get",e),i)?n:V1(n)?l&&Z6(e)?n:n.value:i1(n)?s?z7(n):S4(n):n}}class n7 extends l7{constructor(a=!1){super(!1,a)}set(a,e,r,s){let i=a[e];if(j2(i)&&V1(i)&&!V1(r))return!1;if(!this._shallow&&(!m4(r)&&!j2(r)&&(i=W(i),r=W(r)),!_(a)&&V1(i)&&!V1(r)))return i.value=r,!0;const l=_(a)&&Z6(e)?Number(e)<a.length:G(a,e),n=Reflect.set(a,e,r,s);return a===W(s)&&(l?A2(r,i)&&Q1(a,"set",e,r):Q1(a,"add",e,r)),n}deleteProperty(a,e){const r=G(a,e);a[e];const s=Reflect.deleteProperty(a,e);return s&&r&&Q1(a,"delete",e,void 0),s}has(a,e){const r=Reflect.has(a,e);return(!L4(e)||!i7.has(e))&&b1(a,"has",e),r}ownKeys(a){return b1(a,"iterate",_(a)?"length":w2),Reflect.ownKeys(a)}}class Eo extends l7{constructor(a=!1){super(!0,a)}set(a,e){return!0}deleteProperty(a,e){return!0}}const Do=new n7,qo=new Eo,_o=new n7(!0),J6=c=>c,N4=c=>Reflect.getPrototypeOf(c);function $3(c,a,e=!1,r=!1){c=c.__v_raw;const s=W(c),i=W(a);e||(A2(a,i)&&b1(s,"get",a),b1(s,"get",i));const{has:l}=N4(s),n=r?J6:e?e8:C3;if(l.call(s,a))return n(c.get(a));if(l.call(s,i))return n(c.get(i));c!==s&&c.get(a)}function I3(c,a=!1){const e=this.__v_raw,r=W(e),s=W(c);return a||(A2(c,s)&&b1(r,"has",c),b1(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function G3(c,a=!1){return c=c.__v_raw,!a&&b1(W(c),"iterate",w2),Reflect.get(c,"size",c)}function T0(c){c=W(c);const a=W(this);return N4(a).has.call(a,c)||(a.add(c),Q1(a,"add",c,c)),this}function F0(c,a){a=W(a);const e=W(this),{has:r,get:s}=N4(e);let i=r.call(e,c);i||(c=W(c),i=r.call(e,c));const l=s.call(e,c);return e.set(c,a),i?A2(a,l)&&Q1(e,"set",c,a):Q1(e,"add",c,a),this}function B0(c){const a=W(this),{has:e,get:r}=N4(a);let s=e.call(a,c);s||(c=W(c),s=e.call(a,c)),r&&r.call(a,c);const i=a.delete(c);return s&&Q1(a,"delete",c,void 0),i}function R0(){const c=W(this),a=c.size!==0,e=c.clear();return a&&Q1(c,"clear",void 0,void 0),e}function W3(c,a){return function(r,s){const i=this,l=i.__v_raw,n=W(l),f=a?J6:c?e8:C3;return!c&&b1(n,"iterate",w2),l.forEach((t,o)=>r.call(s,f(t),f(o),i))}}function Z3(c,a,e){return function(...r){const s=this.__v_raw,i=W(s),l=$2(i),n=c==="entries"||c===Symbol.iterator&&l,f=c==="keys"&&l,t=s[c](...r),o=e?J6:a?e8:C3;return!a&&b1(i,"iterate",f?M6:w2),{next(){const{value:v,done:h}=t.next();return h?{value:v,done:h}:{value:n?[o(v[0]),o(v[1])]:o(v),done:h}},[Symbol.iterator](){return this}}}}function n2(c){return function(...a){return c==="delete"?!1:c==="clear"?void 0:this}}function Oo(){const c={get(i){return $3(this,i)},get size(){return G3(this)},has:I3,add:T0,set:F0,delete:B0,clear:R0,forEach:W3(!1,!1)},a={get(i){return $3(this,i,!1,!0)},get size(){return G3(this)},has:I3,add:T0,set:F0,delete:B0,clear:R0,forEach:W3(!1,!0)},e={get(i){return $3(this,i,!0)},get size(){return G3(this,!0)},has(i){return I3.call(this,i,!0)},add:n2("add"),set:n2("set"),delete:n2("delete"),clear:n2("clear"),forEach:W3(!0,!1)},r={get(i){return $3(this,i,!0,!0)},get size(){return G3(this,!0)},has(i){return I3.call(this,i,!0)},add:n2("add"),set:n2("set"),delete:n2("delete"),clear:n2("clear"),forEach:W3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=Z3(i,!1,!1),e[i]=Z3(i,!0,!1),a[i]=Z3(i,!1,!0),r[i]=Z3(i,!0,!0)}),[c,e,a,r]}const[Uo,$o,Io,Go]=Oo();function c8(c,a){const e=a?c?Go:Io:c?$o:Uo;return(r,s,i)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(G(e,s)&&s in r?e:r,s,i)}const Wo={get:c8(!1,!1)},Zo={get:c8(!1,!0)},jo={get:c8(!0,!1)},f7=new WeakMap,o7=new WeakMap,t7=new WeakMap,Ko=new WeakMap;function Yo(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xo(c){return c.__v_skip||!Object.isExtensible(c)?0:Yo(po(c))}function S4(c){return j2(c)?c:a8(c,!1,Do,Wo,f7)}function m7(c){return a8(c,!1,_o,Zo,o7)}function z7(c){return a8(c,!0,qo,jo,t7)}function a8(c,a,e,r,s){if(!i1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=s.get(c);if(i)return i;const l=Xo(c);if(l===0)return c;const n=new Proxy(c,l===2?r:e);return s.set(c,n),n}function I2(c){return j2(c)?I2(c.__v_raw):!!(c&&c.__v_isReactive)}function j2(c){return!!(c&&c.__v_isReadonly)}function m4(c){return!!(c&&c.__v_isShallow)}function v7(c){return I2(c)||j2(c)}function W(c){const a=c&&c.__v_raw;return a?W(a):c}function h7(c){return t4(c,"__v_skip",!0),c}const C3=c=>i1(c)?S4(c):c,e8=c=>i1(c)?z7(c):c;function H7(c){v2&&P1&&(c=W(c),s7(c.dep||(c.dep=X6())))}function u7(c,a){c=W(c);const e=c.dep;e&&C6(e)}function V1(c){return!!(c&&c.__v_isRef===!0)}function z2(c){return V7(c,!1)}function Qo(c){return V7(c,!0)}function V7(c,a){return V1(c)?c:new Jo(c,a)}class Jo{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:W(a),this._value=e?a:C3(a)}get value(){return H7(this),this._value}set value(a){const e=this.__v_isShallow||m4(a)||j2(a);a=e?a:W(a),A2(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:C3(a),u7(this))}}function G2(c){return V1(c)?c.value:c}const ct={get:(c,a,e)=>G2(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return V1(s)&&!V1(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function p7(c){return I2(c)?c:new Proxy(c,ct)}class at{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Q6(a,()=>{this._dirty||(this._dirty=!0,u7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=W(this);return H7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function et(c,a,e=!1){let r,s;const i=U(c);return i?(r=c,s=G1):(r=c.get,s=c.set),new at(r,s,i||!s,e)}function h2(c,a,e,r){let s;try{s=r?c(...r):c()}catch(i){w4(i,a,e)}return s}function B1(c,a,e,r){if(U(c)){const i=h2(c,a,e,r);return i&&Y5(i)&&i.catch(l=>{w4(l,a,e)}),i}const s=[];for(let i=0;i<c.length;i++)s.push(B1(c[i],a,e,r));return s}function w4(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let i=a.parent;const l=a.proxy,n=e;for(;i;){const t=i.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,l,n)===!1)return}i=i.parent}const f=a.appContext.config.errorHandler;if(f){h2(f,null,10,[c,l,n]);return}}rt(c,e,s,r)}function rt(c,a,e,r=!0){console.error(c)}let d3=!1,d6=!1;const u1=[];let U1=0;const W2=[];let Y1=null,x2=0;const M7=Promise.resolve();let r8=null;function C7(c){const a=r8||M7;return c?a.then(this?c.bind(this):c):a}function st(c){let a=U1+1,e=u1.length;for(;a<e;){const r=a+e>>>1,s=u1[r],i=L3(s);i<c||i===c&&s.pre?a=r+1:e=r}return a}function s8(c){(!u1.length||!u1.includes(c,d3&&c.allowRecurse?U1+1:U1))&&(c.id==null?u1.push(c):u1.splice(st(c.id),0,c),d7())}function d7(){!d3&&!d6&&(d6=!0,r8=M7.then(g7))}function it(c){const a=u1.indexOf(c);a>U1&&u1.splice(a,1)}function lt(c){_(c)?W2.push(...c):(!Y1||!Y1.includes(c,c.allowRecurse?x2+1:x2))&&W2.push(c),d7()}function E0(c,a=d3?U1+1:0){for(;a<u1.length;a++){const e=u1[a];e&&e.pre&&(u1.splice(a,1),a--,e())}}function L7(c){if(W2.length){const a=[...new Set(W2)];if(W2.length=0,Y1){Y1.push(...a);return}for(Y1=a,Y1.sort((e,r)=>L3(e)-L3(r)),x2=0;x2<Y1.length;x2++)Y1[x2]();Y1=null,x2=0}}const L3=c=>c.id==null?1/0:c.id,nt=(c,a)=>{const e=L3(c)-L3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function g7(c){d6=!1,d3=!0,u1.sort(nt);try{for(U1=0;U1<u1.length;U1++){const a=u1[U1];a&&a.active!==!1&&h2(a,null,14)}}finally{U1=0,u1.length=0,L7(),d3=!1,r8=null,(u1.length||W2.length)&&g7()}}function ft(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||r1;let s=e;const i=a.startsWith("update:"),l=i&&a.slice(7);if(l&&l in r){const o=`${l==="modelValue"?"model":l}Modifiers`,{number:v,trim:h}=r[o]||r1;h&&(s=e.map(u=>m1(u)?u.trim():u)),v&&(s=e.map(Lo))}let n,f=r[n=e6(a)]||r[n=e6(W1(a))];!f&&i&&(f=r[n=e6(a3(a))]),f&&B1(f,c,6,s);const t=r[n+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[n])return;c.emitted[n]=!0,B1(t,c,6,s)}}function x7(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const i=c.emits;let l={},n=!1;if(!U(c)){const f=t=>{const o=x7(t,a,!0);o&&(n=!0,h1(l,o))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!i&&!n?(i1(c)&&r.set(c,null),null):(_(i)?i.forEach(f=>l[f]=null):h1(l,i),i1(c)&&r.set(c,l),l)}function y4(c,a){return!c||!d4(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,a3(a))||G(c,a))}let C1=null,b7=null;function z4(c){const a=C1;return C1=c,b7=c&&c.type.__scopeId||null,a}function P3(c,a=C1,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&j0(-1);const i=z4(a);let l;try{l=c(...s)}finally{z4(i),r._d&&j0(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function s6(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:i,propsOptions:[l],slots:n,attrs:f,emit:t,render:o,renderCache:v,data:h,setupState:u,ctx:S,inheritAttrs:w}=c;let R,M;const d=z4(c);try{if(e.shapeFlag&4){const y=s||r,$=y;R=O1(o.call($,y,v,i,u,h,S)),M=f}else{const y=a;R=O1(y.length>1?y(i,{attrs:f,slots:n,emit:t}):y(i,null)),M=a.props?f:ot(f)}}catch(y){H3.length=0,w4(y,c,1),R=J(u2)}let B=R;if(M&&w!==!1){const y=Object.keys(M),{shapeFlag:$}=B;y.length&&$&7&&(l&&y.some(G6)&&(M=tt(M,l)),B=K2(B,M))}return e.dirs&&(B=K2(B),B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&(B.transition=e.transition),R=B,z4(d),R}const ot=c=>{let a;for(const e in c)(e==="class"||e==="style"||d4(e))&&((a||(a={}))[e]=c[e]);return a},tt=(c,a)=>{const e={};for(const r in c)(!G6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function mt(c,a,e){const{props:r,children:s,component:i}=c,{props:l,children:n,patchFlag:f}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?D0(r,l,t):!!l;if(f&8){const o=a.dynamicProps;for(let v=0;v<o.length;v++){const h=o[v];if(l[h]!==r[h]&&!y4(t,h))return!0}}}else return(s||n)&&(!n||!n.$stable)?!0:r===l?!1:r?l?D0(r,l,t):!0:!!l;return!1}function D0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(a[i]!==c[i]&&!y4(e,i))return!0}return!1}function zt({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const N7="components";function A4(c,a){return ht(N7,c,!0,a)||c}const vt=Symbol.for("v-ndc");function ht(c,a,e=!0,r=!1){const s=C1||v1;if(s){const i=s.type;if(c===N7){const n=im(i,!1);if(n&&(n===a||n===W1(a)||n===b4(W1(a))))return i}const l=q0(s[c]||i[c],a)||q0(s.appContext[c],a);return!l&&r?i:l}}function q0(c,a){return c&&(c[a]||c[W1(a)]||c[b4(W1(a))])}const Ht=c=>c.__isSuspense;function ut(c,a){a&&a.pendingBranch?_(c)?a.effects.push(...c):a.effects.push(c):lt(c)}const j3={};function z3(c,a,e){return S7(c,a,e)}function S7(c,a,{immediate:e,deep:r,flush:s,onTrack:i,onTrigger:l}=r1){var n;const f=ko()===((n=v1)==null?void 0:n.scope)?v1:null;let t,o=!1,v=!1;if(V1(c)?(t=()=>c.value,o=m4(c)):I2(c)?(t=()=>c,r=!0):_(c)?(v=!0,o=c.some(y=>I2(y)||m4(y)),t=()=>c.map(y=>{if(V1(y))return y.value;if(I2(y))return q2(y);if(U(y))return h2(y,f,2)})):U(c)?a?t=()=>h2(c,f,2):t=()=>{if(!(f&&f.isUnmounted))return h&&h(),B1(c,f,3,[u])}:t=G1,a&&r){const y=t;t=()=>q2(y())}let h,u=y=>{h=d.onStop=()=>{h2(y,f,4),h=d.onStop=void 0}},S;if(b3)if(u=G1,a?e&&B1(a,f,3,[t(),v?[]:void 0,u]):t(),s==="sync"){const y=fm();S=y.__watcherHandles||(y.__watcherHandles=[])}else return G1;let w=v?new Array(c.length).fill(j3):j3;const R=()=>{if(d.active)if(a){const y=d.run();(r||o||(v?y.some(($,X)=>A2($,w[X])):A2(y,w)))&&(h&&h(),B1(a,f,3,[y,w===j3?void 0:v&&w[0]===j3?[]:w,u]),w=y)}else d.run()};R.allowRecurse=!!a;let M;s==="sync"?M=R:s==="post"?M=()=>x1(R,f&&f.suspense):(R.pre=!0,f&&(R.id=f.uid),M=()=>s8(R));const d=new Q6(t,M);a?e?R():w=d.run():s==="post"?x1(d.run.bind(d),f&&f.suspense):d.run();const B=()=>{d.stop(),f&&f.scope&&W6(f.scope.effects,d)};return S&&S.push(B),B}function Vt(c,a,e){const r=this.proxy,s=m1(c)?c.includes(".")?w7(r,c):()=>r[c]:c.bind(r,r);let i;U(a)?i=a:(i=a.handler,e=a);const l=v1;X2(this);const n=S7(s,i.bind(r),e);return l?X2(l):y2(),n}function w7(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function q2(c,a){if(!i1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),V1(c))q2(c.value,a);else if(_(c))for(let e=0;e<c.length;e++)q2(c[e],a);else if(K5(c)||$2(c))c.forEach(e=>{q2(e,a)});else if(Q5(c))for(const e in c)q2(c[e],a);return c}function L2(c,a,e,r){const s=c.dirs,i=a&&a.dirs;for(let l=0;l<s.length;l++){const n=s[l];i&&(n.oldValue=i[l].value);let f=n.dir[r];f&&(e3(),B1(f,e,8,[c.el,n,c,a]),r3())}}/*! #__NO_SIDE_EFFECTS__ */function i8(c,a){return U(c)?h1({name:c.name},a,{setup:c}):c}const v3=c=>!!c.type.__asyncLoader,y7=c=>c.type.__isKeepAlive;function pt(c,a){A7(c,"a",a)}function Mt(c,a){A7(c,"da",a)}function A7(c,a,e=v1){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(k4(a,r,e),e){let s=e.parent;for(;s&&s.parent;)y7(s.parent.vnode)&&Ct(r,a,e,s),s=s.parent}}function Ct(c,a,e,r){const s=k4(a,c,r,!0);P7(()=>{W6(r[a],s)},e)}function k4(c,a,e=v1,r=!1){if(e){const s=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...l)=>{if(e.isUnmounted)return;e3(),X2(e);const n=B1(a,e,c,l);return y2(),r3(),n});return r?s.unshift(i):s.push(i),i}}const r2=c=>(a,e=v1)=>(!b3||c==="sp")&&k4(c,(...r)=>a(...r),e),dt=r2("bm"),k7=r2("m"),Lt=r2("bu"),gt=r2("u"),xt=r2("bum"),P7=r2("um"),bt=r2("sp"),Nt=r2("rtg"),St=r2("rtc");function wt(c,a=v1){k4("ec",c,a)}function yt(c,a,e={},r,s){if(C1.isCE||C1.parent&&v3(C1.parent)&&C1.parent.isCE)return a!=="default"&&(e.name=a),J("slot",e,r&&r());let i=c[a];i&&i._c&&(i._d=!1),t1();const l=i&&T7(i(e)),n=V2(S1,{key:e.key||l&&l.key||`_${a}`},l||(r?r():[]),l&&c._===1?64:-2);return!s&&n.scopeId&&(n.slotScopeIds=[n.scopeId+"-s"]),i&&i._c&&(i._d=!0),n}function T7(c){return c.some(a=>H4(a)?!(a.type===u2||a.type===S1&&!T7(a.children)):!0)?c:null}const L6=c=>c?G7(c)?t8(c)||c.proxy:L6(c.parent):null,h3=h1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>L6(c.parent),$root:c=>L6(c.root),$emit:c=>c.emit,$options:c=>l8(c),$forceUpdate:c=>c.f||(c.f=()=>s8(c.update)),$nextTick:c=>c.n||(c.n=C7.bind(c.proxy)),$watch:c=>Vt.bind(c)}),i6=(c,a)=>c!==r1&&!c.__isScriptSetup&&G(c,a),At={get({_:c},a){const{ctx:e,setupState:r,data:s,props:i,accessCache:l,type:n,appContext:f}=c;let t;if(a[0]!=="$"){const u=l[a];if(u!==void 0)switch(u){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return i[a]}else{if(i6(r,a))return l[a]=1,r[a];if(s!==r1&&G(s,a))return l[a]=2,s[a];if((t=c.propsOptions[0])&&G(t,a))return l[a]=3,i[a];if(e!==r1&&G(e,a))return l[a]=4,e[a];g6&&(l[a]=0)}}const o=h3[a];let v,h;if(o)return a==="$attrs"&&b1(c,"get",a),o(c);if((v=n.__cssModules)&&(v=v[a]))return v;if(e!==r1&&G(e,a))return l[a]=4,e[a];if(h=f.config.globalProperties,G(h,a))return h[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:i}=c;return i6(s,a)?(s[a]=e,!0):r!==r1&&G(r,a)?(r[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:i}},l){let n;return!!e[l]||c!==r1&&G(c,l)||i6(a,l)||(n=i[0])&&G(n,l)||G(r,l)||G(h3,l)||G(s.config.globalProperties,l)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function _0(c){return _(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let g6=!0;function kt(c){const a=l8(c),e=c.proxy,r=c.ctx;g6=!1,a.beforeCreate&&O0(a.beforeCreate,c,"bc");const{data:s,computed:i,methods:l,watch:n,provide:f,inject:t,created:o,beforeMount:v,mounted:h,beforeUpdate:u,updated:S,activated:w,deactivated:R,beforeDestroy:M,beforeUnmount:d,destroyed:B,unmounted:y,render:$,renderTracked:X,renderTriggered:s1,errorCaptured:d1,serverPrefetch:p1,expose:y1,inheritAttrs:i2,components:d2,directives:E1,filters:i3}=a;if(t&&Pt(t,r,null),l)for(const Q in l){const Z=l[Q];U(Z)&&(r[Q]=Z.bind(e))}if(s){const Q=s.call(e,e);i1(Q)&&(c.data=S4(Q))}if(g6=!0,i)for(const Q in i){const Z=i[Q],j1=U(Z)?Z.bind(e,e):U(Z.get)?Z.get.bind(e,e):G1,l2=!U(Z)&&U(Z.set)?Z.set.bind(e):G1,D1=z1({get:j1,set:l2});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>D1.value,set:L1=>D1.value=L1})}if(n)for(const Q in n)F7(n[Q],r,e,Q);if(f){const Q=U(f)?f.call(e):f;Reflect.ownKeys(Q).forEach(Z=>{i4(Z,Q[Z])})}o&&O0(o,c,"c");function o1(Q,Z){_(Z)?Z.forEach(j1=>Q(j1.bind(e))):Z&&Q(Z.bind(e))}if(o1(dt,v),o1(k7,h),o1(Lt,u),o1(gt,S),o1(pt,w),o1(Mt,R),o1(wt,d1),o1(St,X),o1(Nt,s1),o1(xt,d),o1(P7,y),o1(bt,p1),_(y1))if(y1.length){const Q=c.exposed||(c.exposed={});y1.forEach(Z=>{Object.defineProperty(Q,Z,{get:()=>e[Z],set:j1=>e[Z]=j1})})}else c.exposed||(c.exposed={});$&&c.render===G1&&(c.render=$),i2!=null&&(c.inheritAttrs=i2),d2&&(c.components=d2),E1&&(c.directives=E1)}function Pt(c,a,e=G1){_(c)&&(c=x6(c));for(const r in c){const s=c[r];let i;i1(s)?"default"in s?i=J1(s.from||r,s.default,!0):i=J1(s.from||r):i=J1(s),V1(i)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:l=>i.value=l}):a[r]=i}}function O0(c,a,e){B1(_(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function F7(c,a,e,r){const s=r.includes(".")?w7(e,r):()=>e[r];if(m1(c)){const i=a[c];U(i)&&z3(s,i)}else if(U(c))z3(s,c.bind(e));else if(i1(c))if(_(c))c.forEach(i=>F7(i,a,e,r));else{const i=U(c.handler)?c.handler.bind(e):a[c.handler];U(i)&&z3(s,i,c)}}function l8(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:i,config:{optionMergeStrategies:l}}=c.appContext,n=i.get(a);let f;return n?f=n:!s.length&&!e&&!r?f=a:(f={},s.length&&s.forEach(t=>v4(f,t,l,!0)),v4(f,a,l)),i1(a)&&i.set(a,f),f}function v4(c,a,e,r=!1){const{mixins:s,extends:i}=a;i&&v4(c,i,e,!0),s&&s.forEach(l=>v4(c,l,e,!0));for(const l in a)if(!(r&&l==="expose")){const n=Tt[l]||e&&e[l];c[l]=n?n(c[l],a[l]):a[l]}return c}const Tt={data:U0,props:$0,emits:$0,methods:t3,computed:t3,beforeCreate:M1,created:M1,beforeMount:M1,mounted:M1,beforeUpdate:M1,updated:M1,beforeDestroy:M1,beforeUnmount:M1,destroyed:M1,unmounted:M1,activated:M1,deactivated:M1,errorCaptured:M1,serverPrefetch:M1,components:t3,directives:t3,watch:Bt,provide:U0,inject:Ft};function U0(c,a){return a?c?function(){return h1(U(c)?c.call(this,this):c,U(a)?a.call(this,this):a)}:a:c}function Ft(c,a){return t3(x6(c),x6(a))}function x6(c){if(_(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function M1(c,a){return c?[...new Set([].concat(c,a))]:a}function t3(c,a){return c?h1(Object.create(null),c,a):a}function $0(c,a){return c?_(c)&&_(a)?[...new Set([...c,...a])]:h1(Object.create(null),_0(c),_0(a??{})):a}function Bt(c,a){if(!c)return a;if(!a)return c;const e=h1(Object.create(null),c);for(const r in a)e[r]=M1(c[r],a[r]);return e}function B7(){return{app:null,config:{isNativeTag:uo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rt=0;function Et(c,a){return function(r,s=null){U(r)||(r=h1({},r)),s!=null&&!i1(s)&&(s=null);const i=B7(),l=new WeakSet;let n=!1;const f=i.app={_uid:Rt++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:om,get config(){return i.config},set config(t){},use(t,...o){return l.has(t)||(t&&U(t.install)?(l.add(t),t.install(f,...o)):U(t)&&(l.add(t),t(f,...o))),f},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),f},component(t,o){return o?(i.components[t]=o,f):i.components[t]},directive(t,o){return o?(i.directives[t]=o,f):i.directives[t]},mount(t,o,v){if(!n){const h=J(r,s);return h.appContext=i,o&&a?a(h,t):c(h,t,v),n=!0,f._container=t,t.__vue_app__=f,t8(h.component)||h.component.proxy}},unmount(){n&&(c(null,f._container),delete f._container.__vue_app__)},provide(t,o){return i.provides[t]=o,f},runWithContext(t){h4=f;try{return t()}finally{h4=null}}};return f}}let h4=null;function i4(c,a){if(v1){let e=v1.provides;const r=v1.parent&&v1.parent.provides;r===e&&(e=v1.provides=Object.create(r)),e[c]=a}}function J1(c,a,e=!1){const r=v1||C1;if(r||h4){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:h4._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&U(a)?a.call(r&&r.proxy):a}}function Dt(c,a,e,r=!1){const s={},i={};t4(i,T4,1),c.propsDefaults=Object.create(null),R7(c,a,s,i);for(const l in c.propsOptions[0])l in s||(s[l]=void 0);e?c.props=r?s:m7(s):c.type.props?c.props=s:c.props=i,c.attrs=i}function qt(c,a,e,r){const{props:s,attrs:i,vnode:{patchFlag:l}}=c,n=W(s),[f]=c.propsOptions;let t=!1;if((r||l>0)&&!(l&16)){if(l&8){const o=c.vnode.dynamicProps;for(let v=0;v<o.length;v++){let h=o[v];if(y4(c.emitsOptions,h))continue;const u=a[h];if(f)if(G(i,h))u!==i[h]&&(i[h]=u,t=!0);else{const S=W1(h);s[S]=b6(f,n,S,u,c,!1)}else u!==i[h]&&(i[h]=u,t=!0)}}}else{R7(c,a,s,i)&&(t=!0);let o;for(const v in n)(!a||!G(a,v)&&((o=a3(v))===v||!G(a,o)))&&(f?e&&(e[v]!==void 0||e[o]!==void 0)&&(s[v]=b6(f,n,v,void 0,c,!0)):delete s[v]);if(i!==n)for(const v in i)(!a||!G(a,v))&&(delete i[v],t=!0)}t&&Q1(c,"set","$attrs")}function R7(c,a,e,r){const[s,i]=c.propsOptions;let l=!1,n;if(a)for(let f in a){if(s4(f))continue;const t=a[f];let o;s&&G(s,o=W1(f))?!i||!i.includes(o)?e[o]=t:(n||(n={}))[o]=t:y4(c.emitsOptions,f)||(!(f in r)||t!==r[f])&&(r[f]=t,l=!0)}if(i){const f=W(e),t=n||r1;for(let o=0;o<i.length;o++){const v=i[o];e[v]=b6(s,f,v,t[v],c,!G(t,v))}}return l}function b6(c,a,e,r,s,i){const l=c[e];if(l!=null){const n=G(l,"default");if(n&&r===void 0){const f=l.default;if(l.type!==Function&&!l.skipFactory&&U(f)){const{propsDefaults:t}=s;e in t?r=t[e]:(X2(s),r=t[e]=f.call(null,a),y2())}else r=f}l[0]&&(i&&!n?r=!1:l[1]&&(r===""||r===a3(e))&&(r=!0))}return r}function E7(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const i=c.props,l={},n=[];let f=!1;if(!U(c)){const o=v=>{f=!0;const[h,u]=E7(v,a,!0);h1(l,h),u&&n.push(...u)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!i&&!f)return i1(c)&&r.set(c,U2),U2;if(_(i))for(let o=0;o<i.length;o++){const v=W1(i[o]);I0(v)&&(l[v]=r1)}else if(i)for(const o in i){const v=W1(o);if(I0(v)){const h=i[o],u=l[v]=_(h)||U(h)?{type:h}:h1({},h);if(u){const S=Z0(Boolean,u.type),w=Z0(String,u.type);u[0]=S>-1,u[1]=w<0||S<w,(S>-1||G(u,"default"))&&n.push(v)}}}const t=[l,n];return i1(c)&&r.set(c,t),t}function I0(c){return c[0]!=="$"}function G0(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function W0(c,a){return G0(c)===G0(a)}function Z0(c,a){return _(a)?a.findIndex(e=>W0(e,c)):U(a)&&W0(a,c)?0:-1}const D7=c=>c[0]==="_"||c==="$stable",n8=c=>_(c)?c.map(O1):[O1(c)],_t=(c,a,e)=>{if(a._n)return a;const r=P3((...s)=>n8(a(...s)),e);return r._c=!1,r},q7=(c,a,e)=>{const r=c._ctx;for(const s in c){if(D7(s))continue;const i=c[s];if(U(i))a[s]=_t(s,i,r);else if(i!=null){const l=n8(i);a[s]=()=>l}}},_7=(c,a)=>{const e=n8(a);c.slots.default=()=>e},Ot=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=W(a),t4(a,"_",e)):q7(a,c.slots={})}else c.slots={},a&&_7(c,a);t4(c.slots,T4,1)},Ut=(c,a,e)=>{const{vnode:r,slots:s}=c;let i=!0,l=r1;if(r.shapeFlag&32){const n=a._;n?e&&n===1?i=!1:(h1(s,a),!e&&n===1&&delete s._):(i=!a.$stable,q7(a,s)),l=a}else a&&(_7(c,a),l={default:1});if(i)for(const n in s)!D7(n)&&l[n]==null&&delete s[n]};function N6(c,a,e,r,s=!1){if(_(c)){c.forEach((h,u)=>N6(h,a&&(_(a)?a[u]:a),e,r,s));return}if(v3(r)&&!s)return;const i=r.shapeFlag&4?t8(r.component)||r.component.proxy:r.el,l=s?null:i,{i:n,r:f}=c,t=a&&a.r,o=n.refs===r1?n.refs={}:n.refs,v=n.setupState;if(t!=null&&t!==f&&(m1(t)?(o[t]=null,G(v,t)&&(v[t]=null)):V1(t)&&(t.value=null)),U(f))h2(f,n,12,[l,o]);else{const h=m1(f),u=V1(f);if(h||u){const S=()=>{if(c.f){const w=h?G(v,f)?v[f]:o[f]:f.value;s?_(w)&&W6(w,i):_(w)?w.includes(i)||w.push(i):h?(o[f]=[i],G(v,f)&&(v[f]=o[f])):(f.value=[i],c.k&&(o[c.k]=f.value))}else h?(o[f]=l,G(v,f)&&(v[f]=l)):u&&(f.value=l,c.k&&(o[c.k]=l))};l?(S.id=-1,x1(S,e)):S()}}}const x1=ut;function $t(c){return It(c)}function It(c,a){const e=u6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:l,createText:n,createComment:f,setText:t,setElementText:o,parentNode:v,nextSibling:h,setScopeId:u=G1,insertStaticContent:S}=c,w=(m,z,H,V=null,C=null,L=null,A=!1,x=null,b=!!z.dynamicChildren)=>{if(m===z)return;m&&!n3(m,z)&&(V=p(m),L1(m,C,L,!0),m=null),z.patchFlag===-2&&(b=!1,z.dynamicChildren=null);const{type:g,ref:D,shapeFlag:T}=z;switch(g){case P4:R(m,z,H,V);break;case u2:M(m,z,H,V);break;case l4:m==null&&d(z,H,V,A);break;case S1:d2(m,z,H,V,C,L,A,x,b);break;default:T&1?$(m,z,H,V,C,L,A,x,b):T&6?E1(m,z,H,V,C,L,A,x,b):(T&64||T&128)&&g.process(m,z,H,V,C,L,A,x,b,N)}D!=null&&C&&N6(D,m&&m.ref,L,z||m,!z)},R=(m,z,H,V)=>{if(m==null)r(z.el=n(z.children),H,V);else{const C=z.el=m.el;z.children!==m.children&&t(C,z.children)}},M=(m,z,H,V)=>{m==null?r(z.el=f(z.children||""),H,V):z.el=m.el},d=(m,z,H,V)=>{[m.el,m.anchor]=S(m.children,z,H,V,m.el,m.anchor)},B=({el:m,anchor:z},H,V)=>{let C;for(;m&&m!==z;)C=h(m),r(m,H,V),m=C;r(z,H,V)},y=({el:m,anchor:z})=>{let H;for(;m&&m!==z;)H=h(m),s(m),m=H;s(z)},$=(m,z,H,V,C,L,A,x,b)=>{A=A||z.type==="svg",m==null?X(z,H,V,C,L,A,x,b):p1(m,z,C,L,A,x,b)},X=(m,z,H,V,C,L,A,x)=>{let b,g;const{type:D,props:T,shapeFlag:q,transition:O,dirs:I}=m;if(b=m.el=l(m.type,L,T&&T.is,T),q&8?o(b,m.children):q&16&&d1(m.children,b,null,V,C,L&&D!=="foreignObject",A,x),I&&L2(m,null,V,"created"),s1(b,m,m.scopeId,A,V),T){for(const Y in T)Y!=="value"&&!s4(Y)&&i(b,Y,null,T[Y],L,m.children,V,C,H1);"value"in T&&i(b,"value",null,T.value),(g=T.onVnodeBeforeMount)&&_1(g,V,m)}I&&L2(m,null,V,"beforeMount");const c1=Gt(C,O);c1&&O.beforeEnter(b),r(b,z,H),((g=T&&T.onVnodeMounted)||c1||I)&&x1(()=>{g&&_1(g,V,m),c1&&O.enter(b),I&&L2(m,null,V,"mounted")},C)},s1=(m,z,H,V,C)=>{if(H&&u(m,H),V)for(let L=0;L<V.length;L++)u(m,V[L]);if(C){let L=C.subTree;if(z===L){const A=C.vnode;s1(m,A,A.scopeId,A.slotScopeIds,C.parent)}}},d1=(m,z,H,V,C,L,A,x,b=0)=>{for(let g=b;g<m.length;g++){const D=m[g]=x?t2(m[g]):O1(m[g]);w(null,D,z,H,V,C,L,A,x)}},p1=(m,z,H,V,C,L,A)=>{const x=z.el=m.el;let{patchFlag:b,dynamicChildren:g,dirs:D}=z;b|=m.patchFlag&16;const T=m.props||r1,q=z.props||r1;let O;H&&g2(H,!1),(O=q.onVnodeBeforeUpdate)&&_1(O,H,z,m),D&&L2(z,m,H,"beforeUpdate"),H&&g2(H,!0);const I=C&&z.type!=="foreignObject";if(g?y1(m.dynamicChildren,g,x,H,V,I,L):A||Z(m,z,x,null,H,V,I,L,!1),b>0){if(b&16)i2(x,z,T,q,H,V,C);else if(b&2&&T.class!==q.class&&i(x,"class",null,q.class,C),b&4&&i(x,"style",T.style,q.style,C),b&8){const c1=z.dynamicProps;for(let Y=0;Y<c1.length;Y++){const n1=c1[Y],A1=T[n1],R2=q[n1];(R2!==A1||n1==="value")&&i(x,n1,A1,R2,C,m.children,H,V,H1)}}b&1&&m.children!==z.children&&o(x,z.children)}else!A&&g==null&&i2(x,z,T,q,H,V,C);((O=q.onVnodeUpdated)||D)&&x1(()=>{O&&_1(O,H,z,m),D&&L2(z,m,H,"updated")},V)},y1=(m,z,H,V,C,L,A)=>{for(let x=0;x<z.length;x++){const b=m[x],g=z[x],D=b.el&&(b.type===S1||!n3(b,g)||b.shapeFlag&70)?v(b.el):H;w(b,g,D,null,V,C,L,A,!0)}},i2=(m,z,H,V,C,L,A)=>{if(H!==V){if(H!==r1)for(const x in H)!s4(x)&&!(x in V)&&i(m,x,H[x],null,A,z.children,C,L,H1);for(const x in V){if(s4(x))continue;const b=V[x],g=H[x];b!==g&&x!=="value"&&i(m,x,g,b,A,z.children,C,L,H1)}"value"in V&&i(m,"value",H.value,V.value)}},d2=(m,z,H,V,C,L,A,x,b)=>{const g=z.el=m?m.el:n(""),D=z.anchor=m?m.anchor:n("");let{patchFlag:T,dynamicChildren:q,slotScopeIds:O}=z;O&&(x=x?x.concat(O):O),m==null?(r(g,H,V),r(D,H,V),d1(z.children,H,D,C,L,A,x,b)):T>0&&T&64&&q&&m.dynamicChildren?(y1(m.dynamicChildren,q,H,C,L,A,x),(z.key!=null||C&&z===C.subTree)&&O7(m,z,!0)):Z(m,z,H,D,C,L,A,x,b)},E1=(m,z,H,V,C,L,A,x,b)=>{z.slotScopeIds=x,m==null?z.shapeFlag&512?C.ctx.activate(z,H,V,A,b):i3(z,H,V,C,L,A,b):T2(m,z,b)},i3=(m,z,H,V,C,L,A)=>{const x=m.component=cm(m,V,C);if(y7(m)&&(x.ctx.renderer=N),am(x),x.asyncDep){if(C&&C.registerDep(x,o1),!m.el){const b=x.subTree=J(u2);M(null,b,z,H)}return}o1(x,m,z,H,C,L,A)},T2=(m,z,H)=>{const V=z.component=m.component;if(mt(m,z,H))if(V.asyncDep&&!V.asyncResolved){Q(V,z,H);return}else V.next=z,it(V.update),V.update();else z.el=m.el,V.vnode=z},o1=(m,z,H,V,C,L,A)=>{const x=()=>{if(m.isMounted){let{next:D,bu:T,u:q,parent:O,vnode:I}=m,c1=D,Y;g2(m,!1),D?(D.el=I.el,Q(m,D,A)):D=I,T&&r6(T),(Y=D.props&&D.props.onVnodeBeforeUpdate)&&_1(Y,O,D,I),g2(m,!0);const n1=s6(m),A1=m.subTree;m.subTree=n1,w(A1,n1,v(A1.el),p(A1),m,C,L),D.el=n1.el,c1===null&&zt(m,n1.el),q&&x1(q,C),(Y=D.props&&D.props.onVnodeUpdated)&&x1(()=>_1(Y,O,D,I),C)}else{let D;const{el:T,props:q}=z,{bm:O,m:I,parent:c1}=m,Y=v3(z);if(g2(m,!1),O&&r6(O),!Y&&(D=q&&q.onVnodeBeforeMount)&&_1(D,c1,z),g2(m,!0),T&&j){const n1=()=>{m.subTree=s6(m),j(T,m.subTree,m,C,null)};Y?z.type.__asyncLoader().then(()=>!m.isUnmounted&&n1()):n1()}else{const n1=m.subTree=s6(m);w(null,n1,H,V,m,C,L),z.el=n1.el}if(I&&x1(I,C),!Y&&(D=q&&q.onVnodeMounted)){const n1=z;x1(()=>_1(D,c1,n1),C)}(z.shapeFlag&256||c1&&v3(c1.vnode)&&c1.vnode.shapeFlag&256)&&m.a&&x1(m.a,C),m.isMounted=!0,z=H=V=null}},b=m.effect=new Q6(x,()=>s8(g),m.scope),g=m.update=()=>b.run();g.id=m.uid,g2(m,!0),g()},Q=(m,z,H)=>{z.component=m;const V=m.vnode.props;m.vnode=z,m.next=null,qt(m,z.props,V,H),Ut(m,z.children,H),e3(),E0(),r3()},Z=(m,z,H,V,C,L,A,x,b=!1)=>{const g=m&&m.children,D=m?m.shapeFlag:0,T=z.children,{patchFlag:q,shapeFlag:O}=z;if(q>0){if(q&128){l2(g,T,H,V,C,L,A,x,b);return}else if(q&256){j1(g,T,H,V,C,L,A,x,b);return}}O&8?(D&16&&H1(g,C,L),T!==g&&o(H,T)):D&16?O&16?l2(g,T,H,V,C,L,A,x,b):H1(g,C,L,!0):(D&8&&o(H,""),O&16&&d1(T,H,V,C,L,A,x,b))},j1=(m,z,H,V,C,L,A,x,b)=>{m=m||U2,z=z||U2;const g=m.length,D=z.length,T=Math.min(g,D);let q;for(q=0;q<T;q++){const O=z[q]=b?t2(z[q]):O1(z[q]);w(m[q],O,H,null,C,L,A,x,b)}g>D?H1(m,C,L,!0,!1,T):d1(z,H,V,C,L,A,x,b,T)},l2=(m,z,H,V,C,L,A,x,b)=>{let g=0;const D=z.length;let T=m.length-1,q=D-1;for(;g<=T&&g<=q;){const O=m[g],I=z[g]=b?t2(z[g]):O1(z[g]);if(n3(O,I))w(O,I,H,null,C,L,A,x,b);else break;g++}for(;g<=T&&g<=q;){const O=m[T],I=z[q]=b?t2(z[q]):O1(z[q]);if(n3(O,I))w(O,I,H,null,C,L,A,x,b);else break;T--,q--}if(g>T){if(g<=q){const O=q+1,I=O<D?z[O].el:V;for(;g<=q;)w(null,z[g]=b?t2(z[g]):O1(z[g]),H,I,C,L,A,x,b),g++}}else if(g>q)for(;g<=T;)L1(m[g],C,L,!0),g++;else{const O=g,I=g,c1=new Map;for(g=I;g<=q;g++){const N1=z[g]=b?t2(z[g]):O1(z[g]);N1.key!=null&&c1.set(N1.key,g)}let Y,n1=0;const A1=q-I+1;let R2=!1,N0=0;const l3=new Array(A1);for(g=0;g<A1;g++)l3[g]=0;for(g=O;g<=T;g++){const N1=m[g];if(n1>=A1){L1(N1,C,L,!0);continue}let q1;if(N1.key!=null)q1=c1.get(N1.key);else for(Y=I;Y<=q;Y++)if(l3[Y-I]===0&&n3(N1,z[Y])){q1=Y;break}q1===void 0?L1(N1,C,L,!0):(l3[q1-I]=g+1,q1>=N0?N0=q1:R2=!0,w(N1,z[q1],H,null,C,L,A,x,b),n1++)}const S0=R2?Wt(l3):U2;for(Y=S0.length-1,g=A1-1;g>=0;g--){const N1=I+g,q1=z[N1],w0=N1+1<D?z[N1+1].el:V;l3[g]===0?w(null,q1,H,w0,C,L,A,x,b):R2&&(Y<0||g!==S0[Y]?D1(q1,H,w0,2):Y--)}}},D1=(m,z,H,V,C=null)=>{const{el:L,type:A,transition:x,children:b,shapeFlag:g}=m;if(g&6){D1(m.component.subTree,z,H,V);return}if(g&128){m.suspense.move(z,H,V);return}if(g&64){A.move(m,z,H,N);return}if(A===S1){r(L,z,H);for(let T=0;T<b.length;T++)D1(b[T],z,H,V);r(m.anchor,z,H);return}if(A===l4){B(m,z,H);return}if(V!==2&&g&1&&x)if(V===0)x.beforeEnter(L),r(L,z,H),x1(()=>x.enter(L),C);else{const{leave:T,delayLeave:q,afterLeave:O}=x,I=()=>r(L,z,H),c1=()=>{T(L,()=>{I(),O&&O()})};q?q(L,I,c1):c1()}else r(L,z,H)},L1=(m,z,H,V=!1,C=!1)=>{const{type:L,props:A,ref:x,children:b,dynamicChildren:g,shapeFlag:D,patchFlag:T,dirs:q}=m;if(x!=null&&N6(x,null,H,m,!0),D&256){z.ctx.deactivate(m);return}const O=D&1&&q,I=!v3(m);let c1;if(I&&(c1=A&&A.onVnodeBeforeUnmount)&&_1(c1,z,m),D&6)U3(m.component,H,V);else{if(D&128){m.suspense.unmount(H,V);return}O&&L2(m,null,z,"beforeUnmount"),D&64?m.type.remove(m,z,H,C,N,V):g&&(L!==S1||T>0&&T&64)?H1(g,z,H,!1,!0):(L===S1&&T&384||!C&&D&16)&&H1(b,z,H),V&&F2(m)}(I&&(c1=A&&A.onVnodeUnmounted)||O)&&x1(()=>{c1&&_1(c1,z,m),O&&L2(m,null,z,"unmounted")},H)},F2=m=>{const{type:z,el:H,anchor:V,transition:C}=m;if(z===S1){B2(H,V);return}if(z===l4){y(m);return}const L=()=>{s(H),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(m.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:x}=C,b=()=>A(H,L);x?x(m.el,L,b):b()}else L()},B2=(m,z)=>{let H;for(;m!==z;)H=h(m),s(m),m=H;s(z)},U3=(m,z,H)=>{const{bum:V,scope:C,update:L,subTree:A,um:x}=m;V&&r6(V),C.stop(),L&&(L.active=!1,L1(A,m,z,H)),x&&x1(x,z),x1(()=>{m.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},H1=(m,z,H,V=!1,C=!1,L=0)=>{for(let A=L;A<m.length;A++)L1(m[A],z,H,V,C)},p=m=>m.shapeFlag&6?p(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),P=(m,z,H)=>{m==null?z._vnode&&L1(z._vnode,null,null,!0):w(z._vnode||null,m,z,null,null,null,H),E0(),L7(),z._vnode=m},N={p:w,um:L1,m:D1,r:F2,mt:i3,mc:d1,pc:Z,pbc:y1,n:p,o:c};let E,j;return a&&([E,j]=a(N)),{render:P,hydrate:E,createApp:Et(P,E)}}function g2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function Gt(c,a){return(!c||c&&!c.pendingBranch)&&a&&!a.persisted}function O7(c,a,e=!1){const r=c.children,s=a.children;if(_(r)&&_(s))for(let i=0;i<r.length;i++){const l=r[i];let n=s[i];n.shapeFlag&1&&!n.dynamicChildren&&((n.patchFlag<=0||n.patchFlag===32)&&(n=s[i]=t2(s[i]),n.el=l.el),e||O7(l,n)),n.type===P4&&(n.el=l.el)}}function Wt(c){const a=c.slice(),e=[0];let r,s,i,l,n;const f=c.length;for(r=0;r<f;r++){const t=c[r];if(t!==0){if(s=e[e.length-1],c[s]<t){a[r]=s,e.push(r);continue}for(i=0,l=e.length-1;i<l;)n=i+l>>1,c[e[n]]<t?i=n+1:l=n;t<c[e[i]]&&(i>0&&(a[r]=e[i-1]),e[i]=r)}}for(i=e.length,l=e[i-1];i-- >0;)e[i]=l,l=a[l];return e}const Zt=c=>c.__isTeleport,S1=Symbol.for("v-fgt"),P4=Symbol.for("v-txt"),u2=Symbol.for("v-cmt"),l4=Symbol.for("v-stc"),H3=[];let T1=null;function t1(c=!1){H3.push(T1=c?null:[])}function jt(){H3.pop(),T1=H3[H3.length-1]||null}let g3=1;function j0(c){g3+=c}function U7(c){return c.dynamicChildren=g3>0?T1||U2:null,jt(),g3>0&&T1&&T1.push(c),c}function Z1(c,a,e,r,s,i){return U7($1(c,a,e,r,s,i,!0))}function V2(c,a,e,r,s){return U7(J(c,a,e,r,s,!0))}function H4(c){return c?c.__v_isVNode===!0:!1}function n3(c,a){return c.type===a.type&&c.key===a.key}const T4="__vInternal",$7=({key:c})=>c??null,n4=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?m1(c)||V1(c)||U(c)?{i:C1,r:c,k:a,f:!!e}:c:null);function $1(c,a=null,e=null,r=0,s=null,i=c===S1?0:1,l=!1,n=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&$7(a),ref:a&&n4(a),scopeId:b7,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:C1};return n?(f8(f,e),i&128&&c.normalize(f)):e&&(f.shapeFlag|=m1(e)?8:16),g3>0&&!l&&T1&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&T1.push(f),f}const J=Kt;function Kt(c,a=null,e=null,r=0,s=null,i=!1){if((!c||c===vt)&&(c=u2),H4(c)){const n=K2(c,a,!0);return e&&f8(n,e),g3>0&&!i&&T1&&(n.shapeFlag&6?T1[T1.indexOf(c)]=n:T1.push(n)),n.patchFlag|=-2,n}if(lm(c)&&(c=c.__vccOpts),a){a=Yt(a);let{class:n,style:f}=a;n&&!m1(n)&&(a.class=K6(n)),i1(f)&&(v7(f)&&!_(f)&&(f=h1({},f)),a.style=j6(f))}const l=m1(c)?1:Ht(c)?128:Zt(c)?64:i1(c)?4:U(c)?2:0;return $1(c,a,e,r,s,l,i,!0)}function Yt(c){return c?v7(c)||T4 in c?h1({},c):c:null}function K2(c,a,e=!1){const{props:r,ref:s,patchFlag:i,children:l}=c,n=a?I7(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:n,key:n&&$7(n),ref:a&&a.ref?e&&s?_(s)?s.concat(n4(a)):[s,n4(a)]:n4(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:l,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==S1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&K2(c.ssContent),ssFallback:c.ssFallback&&K2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function x3(c=" ",a=0){return J(P4,null,c,a)}function Xt(c,a){const e=J(l4,null,c);return e.staticCount=a,e}function Y2(c="",a=!1){return a?(t1(),V2(u2,null,c)):J(u2,null,c)}function O1(c){return c==null||typeof c=="boolean"?J(u2):_(c)?J(S1,null,c.slice()):typeof c=="object"?t2(c):J(P4,null,String(c))}function t2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:K2(c)}function f8(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(_(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),f8(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(T4 in a)?a._ctx=C1:s===3&&C1&&(C1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else U(a)?(a={default:a,_ctx:C1},e=32):(a=String(a),r&64?(e=16,a=[x3(a)]):e=8);c.children=a,c.shapeFlag|=e}function I7(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=K6([a.class,r.class]));else if(s==="style")a.style=j6([a.style,r.style]);else if(d4(s)){const i=a[s],l=r[s];l&&i!==l&&!(_(i)&&i.includes(l))&&(a[s]=i?[].concat(i,l):l)}else s!==""&&(a[s]=r[s])}return a}function _1(c,a,e,r=null){B1(c,a,7,[e,r])}const Qt=B7();let Jt=0;function cm(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||Qt,i={uid:Jt++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:E7(r,s),emitsOptions:x7(r,s),emit:null,emitted:null,propsDefaults:r1,inheritAttrs:r.inheritAttrs,ctx:r1,data:r1,props:r1,attrs:r1,slots:r1,refs:r1,setupState:r1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=ft.bind(null,i),c.ce&&c.ce(i),i}let v1=null,o8,E2,K0="__VUE_INSTANCE_SETTERS__";(E2=u6()[K0])||(E2=u6()[K0]=[]),E2.push(c=>v1=c),o8=c=>{E2.length>1?E2.forEach(a=>a(c)):E2[0](c)};const X2=c=>{o8(c),c.scope.on()},y2=()=>{v1&&v1.scope.off(),o8(null)};function G7(c){return c.vnode.shapeFlag&4}let b3=!1;function am(c,a=!1){b3=a;const{props:e,children:r}=c.vnode,s=G7(c);Dt(c,e,s,a),Ot(c,r);const i=s?em(c,a):void 0;return b3=!1,i}function em(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=h7(new Proxy(c.ctx,At));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?sm(c):null;X2(c),e3();const i=h2(r,c,0,[c.props,s]);if(r3(),y2(),Y5(i)){if(i.then(y2,y2),a)return i.then(l=>{Y0(c,l,a)}).catch(l=>{w4(l,c,0)});c.asyncDep=i}else Y0(c,i,a)}else W7(c,a)}function Y0(c,a,e){U(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:i1(a)&&(c.setupState=p7(a)),W7(c,e)}let X0;function W7(c,a,e){const r=c.type;if(!c.render){if(!a&&X0&&!r.render){const s=r.template||l8(c).template;if(s){const{isCustomElement:i,compilerOptions:l}=c.appContext.config,{delimiters:n,compilerOptions:f}=r,t=h1(h1({isCustomElement:i,delimiters:n},l),f);r.render=X0(s,t)}}c.render=r.render||G1}{X2(c),e3();try{kt(c)}finally{r3(),y2()}}}function rm(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return b1(c,"get","$attrs"),a[e]}}))}function sm(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return rm(c)},slots:c.slots,emit:c.emit,expose:a}}function t8(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(p7(h7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in h3)return h3[e](c)},has(a,e){return e in a||e in h3}}))}function im(c,a=!0){return U(c)?c.displayName||c.name:c.name||a&&c.__name}function lm(c){return U(c)&&"__vccOpts"in c}const z1=(c,a)=>et(c,a,b3);function m8(c,a,e){const r=arguments.length;return r===2?i1(a)&&!_(a)?H4(a)?J(c,null,[a]):J(c,a):J(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&H4(e)&&(e=[e]),J(c,a,e))}const nm=Symbol.for("v-scx"),fm=()=>J1(nm),om="3.3.10",tm="http://www.w3.org/2000/svg",b2=typeof document<"u"?document:null,Q0=b2&&b2.createElement("template"),mm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?b2.createElementNS(tm,c):b2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>b2.createTextNode(c),createComment:c=>b2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>b2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,i){const l=e?e.previousSibling:a.lastChild;if(s&&(s===i||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===i||!(s=s.nextSibling)););else{Q0.innerHTML=r?`<svg>${c}</svg>`:c;const n=Q0.content;if(r){const f=n.firstChild;for(;f.firstChild;)n.appendChild(f.firstChild);n.removeChild(f)}a.insertBefore(n,e)}return[l?l.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}},zm=Symbol("_vtc");function vm(c,a,e){const r=c[zm];r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}const hm=Symbol("_vod");function Hm(c,a,e){const r=c.style,s=m1(e);if(e&&!s){if(a&&!m1(a))for(const i in a)e[i]==null&&S6(r,i,"");for(const i in e)S6(r,i,e[i])}else{const i=r.display;s?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),hm in c&&(r.display=i)}}const J0=/\s*!important$/;function S6(c,a,e){if(_(e))e.forEach(r=>S6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=um(c,a);J0.test(e)?c.setProperty(a3(r),e.replace(J0,""),"important"):c[r]=e}}const c5=["Webkit","Moz","ms"],l6={};function um(c,a){const e=l6[a];if(e)return e;let r=W1(a);if(r!=="filter"&&r in c)return l6[a]=r;r=b4(r);for(let s=0;s<c5.length;s++){const i=c5[s]+r;if(i in c)return l6[a]=i}return a}const a5="http://www.w3.org/1999/xlink";function Vm(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(a5,a.slice(6,a.length)):c.setAttributeNS(a5,a,e);else{const i=wo(a);e==null||i&&!J5(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function pm(c,a,e,r,s,i,l){if(a==="innerHTML"||a==="textContent"){r&&l(r,s,i),c[a]=e??"";return}const n=c.tagName;if(a==="value"&&n!=="PROGRESS"&&!n.includes("-")){c._value=e;const t=n==="OPTION"?c.getAttribute("value"):c.value,o=e??"";t!==o&&(c.value=o),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const t=typeof c[a];t==="boolean"?e=J5(e):e==null&&t==="string"?(e="",f=!0):t==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function Mm(c,a,e,r){c.addEventListener(a,e,r)}function Cm(c,a,e,r){c.removeEventListener(a,e,r)}const e5=Symbol("_vei");function dm(c,a,e,r,s=null){const i=c[e5]||(c[e5]={}),l=i[a];if(r&&l)l.value=r;else{const[n,f]=Lm(a);if(r){const t=i[a]=bm(r,s);Mm(c,n,t,f)}else l&&(Cm(c,n,l,f),i[a]=void 0)}}const r5=/(?:Once|Passive|Capture)$/;function Lm(c){let a;if(r5.test(c)){a={};let r;for(;r=c.match(r5);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):a3(c.slice(2)),a]}let n6=0;const gm=Promise.resolve(),xm=()=>n6||(gm.then(()=>n6=0),n6=Date.now());function bm(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;B1(Nm(r,e.value),a,5,[r])};return e.value=c,e.attached=xm(),e}function Nm(c,a){if(_(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const s5=c=>c.charCodeAt(0)===111&&c.charCodeAt(1)===110&&c.charCodeAt(2)>96&&c.charCodeAt(2)<123,Sm=(c,a,e,r,s=!1,i,l,n,f)=>{a==="class"?vm(c,r,s):a==="style"?Hm(c,e,r):d4(a)?G6(a)||dm(c,a,e,r,l):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):wm(c,a,r,s))?pm(c,a,r,i,l,n,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Vm(c,a,r,s))};function wm(c,a,e,r){if(r)return!!(a==="innerHTML"||a==="textContent"||a in c&&s5(a)&&U(e));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const s=c.tagName;return!(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")}return s5(a)&&m1(e)?!1:a in c}const ym=h1({patchProp:Sm},mm);let i5;function Am(){return i5||(i5=$t(ym))}const km=(...c)=>{const a=Am().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=Pm(r);if(!s)return;const i=a._component;!U(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const l=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),l},a};function Pm(c){return m1(c)?document.querySelector(c):c}function l5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function k(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?l5(Object(e),!0).forEach(function(r){f1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):l5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function u4(c){"@babel/helpers - typeof";return u4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},u4(c)}function Tm(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function n5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Fm(c,a,e){return a&&n5(c.prototype,a),e&&n5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function f1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function z8(c,a){return Rm(c)||Dm(c,a)||Z7(c,a)||_m()}function T3(c){return Bm(c)||Em(c)||Z7(c)||qm()}function Bm(c){if(Array.isArray(c))return w6(c)}function Rm(c){if(Array.isArray(c))return c}function Em(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Dm(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,l,n;try{for(e=e.call(c);!(s=(l=e.next()).done)&&(r.push(l.value),!(a&&r.length===a));s=!0);}catch(f){i=!0,n=f}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw n}}return r}}function Z7(c,a){if(c){if(typeof c=="string")return w6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return w6(c,a)}}function w6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function qm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _m(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f5=function(){},v8={},j7={},K7=null,Y7={mark:f5,measure:f5};try{typeof window<"u"&&(v8=window),typeof document<"u"&&(j7=document),typeof MutationObserver<"u"&&(K7=MutationObserver),typeof performance<"u"&&(Y7=performance)}catch{}var Om=v8.navigator||{},o5=Om.userAgent,t5=o5===void 0?"":o5,p2=v8,e1=j7,m5=K7,K3=Y7;p2.document;var s2=!!e1.documentElement&&!!e1.head&&typeof e1.addEventListener=="function"&&typeof e1.createElement=="function",X7=~t5.indexOf("MSIE")||~t5.indexOf("Trident/"),Y3,X3,Q3,J3,c4,c2="___FONT_AWESOME___",y6=16,Q7="fa",J7="svg-inline--fa",k2="data-fa-i2svg",A6="data-fa-pseudo-element",Um="data-fa-pseudo-element-pending",h8="data-prefix",H8="data-icon",z5="fontawesome-i2svg",$m="async",Im=["HTML","HEAD","STYLE","SCRIPT"],c9=function(){try{return!0}catch{return!1}}(),a1="classic",l1="sharp",u8=[a1,l1];function F3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[a1]}})}var N3=F3((Y3={},f1(Y3,a1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),f1(Y3,l1,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Y3)),S3=F3((X3={},f1(X3,a1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),f1(X3,l1,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),X3)),w3=F3((Q3={},f1(Q3,a1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),f1(Q3,l1,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Q3)),Gm=F3((J3={},f1(J3,a1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),f1(J3,l1,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),J3)),Wm=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,a9="fa-layers-text",Zm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jm=F3((c4={},f1(c4,a1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),f1(c4,l1,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),c4)),e9=[1,2,3,4,5,6,7,8,9,10],Km=e9.concat([11,12,13,14,15,16,17,18,19,20]),Ym=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],N2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},y3=new Set;Object.keys(S3[a1]).map(y3.add.bind(y3));Object.keys(S3[l1]).map(y3.add.bind(y3));var Xm=[].concat(u8,T3(y3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",N2.GROUP,N2.SWAP_OPACITY,N2.PRIMARY,N2.SECONDARY]).concat(e9.map(function(c){return"".concat(c,"x")})).concat(Km.map(function(c){return"w-".concat(c)})),u3=p2.FontAwesomeConfig||{};function Qm(c){var a=e1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Jm(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(e1&&typeof e1.querySelector=="function"){var cz=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cz.forEach(function(c){var a=z8(c,2),e=a[0],r=a[1],s=Jm(Qm(e));s!=null&&(u3[r]=s)})}var r9={styleDefault:"solid",familyDefault:"classic",cssPrefix:Q7,replacementClass:J7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};u3.familyPrefix&&(u3.cssPrefix=u3.familyPrefix);var Q2=k(k({},r9),u3);Q2.autoReplaceSvg||(Q2.observeMutations=!1);var F={};Object.keys(r9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){Q2[c]=e,V3.forEach(function(r){return r(F)})},get:function(){return Q2[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){Q2.cssPrefix=a,V3.forEach(function(e){return e(F)})},get:function(){return Q2.cssPrefix}});p2.FontAwesomeConfig=F;var V3=[];function az(c){return V3.push(c),function(){V3.splice(V3.indexOf(c),1)}}var f2=y6,I1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ez(c){if(!(!c||!s2)){var a=e1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=e1.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],l=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(r=i)}return e1.head.insertBefore(a,r),c}}var rz="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A3(){for(var c=12,a="";c-- >0;)a+=rz[Math.random()*62|0];return a}function s3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function V8(c){return c.classList?s3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function s9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sz(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(s9(c[e]),'" ')},"").trim()}function F4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function p8(c){return c.size!==I1.size||c.x!==I1.x||c.y!==I1.y||c.rotate!==I1.rotate||c.flipX||c.flipY}function iz(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(l," ").concat(n)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:t}}function lz(c){var a=c.transform,e=c.width,r=e===void 0?y6:e,s=c.height,i=s===void 0?y6:s,l=c.startCentered,n=l===void 0?!1:l,f="";return n&&X7?f+="translate(".concat(a.x/f2-r/2,"em, ").concat(a.y/f2-i/2,"em) "):n?f+="translate(calc(-50% + ".concat(a.x/f2,"em), calc(-50% + ").concat(a.y/f2,"em)) "):f+="translate(".concat(a.x/f2,"em, ").concat(a.y/f2,"em) "),f+="scale(".concat(a.size/f2*(a.flipX?-1:1),", ").concat(a.size/f2*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var nz=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function i9(){var c=Q7,a=J7,e=F.cssPrefix,r=F.replacementClass,s=nz;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),l=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(l,"--".concat(e,"-")).replace(n,".".concat(r))}return s}var v5=!1;function f6(){F.autoAddCss&&!v5&&(ez(i9()),v5=!0)}var fz={mixout:function(){return{dom:{css:i9,insertCss:f6}}},hooks:function(){return{beforeDOMElementCreation:function(){f6()},beforeI2svg:function(){f6()}}}},a2=p2||{};a2[c2]||(a2[c2]={});a2[c2].styles||(a2[c2].styles={});a2[c2].hooks||(a2[c2].hooks={});a2[c2].shims||(a2[c2].shims=[]);var F1=a2[c2],l9=[],oz=function c(){e1.removeEventListener("DOMContentLoaded",c),V4=1,l9.map(function(a){return a()})},V4=!1;s2&&(V4=(e1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(e1.readyState),V4||e1.addEventListener("DOMContentLoaded",oz));function tz(c){s2&&(V4?setTimeout(c,0):l9.push(c))}function B3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?s9(c):"<".concat(a," ").concat(sz(r),">").concat(i.map(B3).join(""),"</").concat(a,">")}function h5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var mz=function(a,e){return function(r,s,i,l){return a.call(e,r,s,i,l)}},o6=function(a,e,r,s){var i=Object.keys(a),l=i.length,n=s!==void 0?mz(e,s):e,f,t,o;for(r===void 0?(f=1,o=a[i[0]]):(f=0,o=r);f<l;f++)t=i[f],o=n(o,a[t],t,a);return o};function zz(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function k6(c){var a=zz(c);return a.length===1?a[0].toString(16):null}function vz(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function H5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function P6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=H5(a);typeof F1.hooks.addPack=="function"&&!s?F1.hooks.addPack(c,H5(a)):F1.styles[c]=k(k({},F1.styles[c]||{}),i),c==="fas"&&P6("fa",a)}var a4,e4,r4,_2=F1.styles,hz=F1.shims,Hz=(a4={},f1(a4,a1,Object.values(w3[a1])),f1(a4,l1,Object.values(w3[l1])),a4),M8=null,n9={},f9={},o9={},t9={},m9={},uz=(e4={},f1(e4,a1,Object.keys(N3[a1])),f1(e4,l1,Object.keys(N3[l1])),e4);function Vz(c){return~Xm.indexOf(c)}function pz(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Vz(s)?s:null}var z9=function(){var a=function(i){return o6(_2,function(l,n,f){return l[f]=o6(n,i,{}),l},{})};n9=a(function(s,i,l){if(i[3]&&(s[i[3]]=l),i[2]){var n=i[2].filter(function(f){return typeof f=="number"});n.forEach(function(f){s[f.toString(16)]=l})}return s}),f9=a(function(s,i,l){if(s[l]=l,i[2]){var n=i[2].filter(function(f){return typeof f=="string"});n.forEach(function(f){s[f]=l})}return s}),m9=a(function(s,i,l){var n=i[2];return s[l]=l,n.forEach(function(f){s[f]=l}),s});var e="far"in _2||F.autoFetchSvg,r=o6(hz,function(s,i){var l=i[0],n=i[1],f=i[2];return n==="far"&&!e&&(n="fas"),typeof l=="string"&&(s.names[l]={prefix:n,iconName:f}),typeof l=="number"&&(s.unicodes[l.toString(16)]={prefix:n,iconName:f}),s},{names:{},unicodes:{}});o9=r.names,t9=r.unicodes,M8=B4(F.styleDefault,{family:F.familyDefault})};az(function(c){M8=B4(c.styleDefault,{family:F.familyDefault})});z9();function C8(c,a){return(n9[c]||{})[a]}function Mz(c,a){return(f9[c]||{})[a]}function S2(c,a){return(m9[c]||{})[a]}function v9(c){return o9[c]||{prefix:null,iconName:null}}function Cz(c){var a=t9[c],e=C8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function M2(){return M8}var d8=function(){return{prefix:null,iconName:null,rest:[]}};function B4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?a1:e,s=N3[r][c],i=S3[r][c]||S3[r][s],l=c in F1.styles?c:null;return i||l||null}var u5=(r4={},f1(r4,a1,Object.keys(w3[a1])),f1(r4,l1,Object.keys(w3[l1])),r4);function R4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},f1(a,a1,"".concat(F.cssPrefix,"-").concat(a1)),f1(a,l1,"".concat(F.cssPrefix,"-").concat(l1)),a),l=null,n=a1;(c.includes(i[a1])||c.some(function(t){return u5[a1].includes(t)}))&&(n=a1),(c.includes(i[l1])||c.some(function(t){return u5[l1].includes(t)}))&&(n=l1);var f=c.reduce(function(t,o){var v=pz(F.cssPrefix,o);if(_2[o]?(o=Hz[n].includes(o)?Gm[n][o]:o,l=o,t.prefix=o):uz[n].indexOf(o)>-1?(l=o,t.prefix=B4(o,{family:n})):v?t.iconName=v:o!==F.replacementClass&&o!==i[a1]&&o!==i[l1]&&t.rest.push(o),!s&&t.prefix&&t.iconName){var h=l==="fa"?v9(t.iconName):{},u=S2(t.prefix,t.iconName);h.prefix&&(l=null),t.iconName=h.iconName||u||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!_2.far&&_2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},d8());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&n===l1&&(_2.fass||F.autoFetchSvg)&&(f.prefix="fass",f.iconName=S2(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||l==="fa")&&(f.prefix=M2()||"fas"),f}var dz=function(){function c(){Tm(this,c),this.definitions={}}return Fm(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var l=s.reduce(this._pullDefinitions,{});Object.keys(l).forEach(function(n){e.definitions[n]=k(k({},e.definitions[n]||{}),l[n]),P6(n,l[n]);var f=w3[a1][n];f&&P6(f,l[n]),z9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var l=s[i],n=l.prefix,f=l.iconName,t=l.icon,o=t[2];e[n]||(e[n]={}),o.length>0&&o.forEach(function(v){typeof v=="string"&&(e[n][v]=t)}),e[n][f]=t}),e}}]),c}(),V5=[],O2={},Z2={},Lz=Object.keys(Z2);function gz(c,a){var e=a.mixoutsTo;return V5=c,O2={},Object.keys(Z2).forEach(function(r){Lz.indexOf(r)===-1&&delete Z2[r]}),V5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(l){typeof s[l]=="function"&&(e[l]=s[l]),u4(s[l])==="object"&&Object.keys(s[l]).forEach(function(n){e[l]||(e[l]={}),e[l][n]=s[l][n]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(l){O2[l]||(O2[l]=[]),O2[l].push(i[l])})}r.provides&&r.provides(Z2)}),e}function T6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=O2[c]||[];return i.forEach(function(l){a=l.apply(null,[a].concat(r))}),a}function P2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=O2[c]||[];s.forEach(function(i){i.apply(null,e)})}function e2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Z2[c]?Z2[c].apply(null,a):void 0}function F6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||M2();if(a)return a=S2(e,a)||a,h5(h9.definitions,e,a)||h5(F1.styles,e,a)}var h9=new dz,xz=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,P2("noAuto")},bz={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s2?(P2("beforeI2svg",a),e2("pseudoElements2svg",a),e2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,tz(function(){Sz({autoReplaceSvgRoot:e}),P2("watch",a)})}},Nz={icon:function(a){if(a===null)return null;if(u4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:S2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=B4(a[0]);return{prefix:r,iconName:S2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(Wm))){var s=R4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||M2(),iconName:S2(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=M2();return{prefix:i,iconName:S2(i,a)||a}}}},w1={noAuto:xz,config:F,dom:bz,parse:Nz,library:h9,findIconDefinition:F6,toHtml:B3},Sz=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?e1:e;(Object.keys(F1.styles).length>0||F.autoFetchSvg)&&s2&&F.autoReplaceSvg&&w1.dom.i2svg({node:r})};function E4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return B3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(s2){var r=e1.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function wz(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,l=c.transform;if(p8(l)&&e.found&&!r.found){var n=e.width,f=e.height,t={x:n/f/2,y:.5};s.style=F4(k(k({},i),{},{"transform-origin":"".concat(t.x+l.x/16,"em ").concat(t.y+l.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function yz(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,l=i===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:k(k({},s),{},{id:l}),children:r}]}]}function L8(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,l=c.transform,n=c.symbol,f=c.title,t=c.maskId,o=c.titleId,v=c.extra,h=c.watchable,u=h===void 0?!1:h,S=r.found?r:e,w=S.width,R=S.height,M=s==="fak",d=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(p1){return v.classes.indexOf(p1)===-1}).filter(function(p1){return p1!==""||!!p1}).concat(v.classes).join(" "),B={children:[],attributes:k(k({},v.attributes),{},{"data-prefix":s,"data-icon":i,class:d,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(R)})},y=M&&!~v.classes.indexOf("fa-fw")?{width:"".concat(w/R*16*.0625,"em")}:{};u&&(B.attributes[k2]=""),f&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(o||A3())},children:[f]}),delete B.attributes.title);var $=k(k({},B),{},{prefix:s,iconName:i,main:e,mask:r,maskId:t,transform:l,symbol:n,styles:k(k({},y),v.styles)}),X=r.found&&e.found?e2("generateAbstractMask",$)||{children:[],attributes:{}}:e2("generateAbstractIcon",$)||{children:[],attributes:{}},s1=X.children,d1=X.attributes;return $.children=s1,$.attributes=d1,n?yz($):wz($)}function p5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,l=c.extra,n=c.watchable,f=n===void 0?!1:n,t=k(k(k({},l.attributes),i?{title:i}:{}),{},{class:l.classes.join(" ")});f&&(t[k2]="");var o=k({},l.styles);p8(s)&&(o.transform=lz({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var v=F4(o);v.length>0&&(t.style=v);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Az(c){var a=c.content,e=c.title,r=c.extra,s=k(k(k({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=F4(r.styles);i.length>0&&(s.style=i);var l=[];return l.push({tag:"span",attributes:s,children:[a]}),e&&l.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),l}var t6=F1.styles;function B6(c){var a=c[0],e=c[1],r=c.slice(4),s=z8(r,1),i=s[0],l=null;return Array.isArray(i)?l={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(N2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(N2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(N2.PRIMARY),fill:"currentColor",d:i[1]}}]}:l={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:l}}var kz={found:!1,width:512,height:512};function Pz(c,a){!c9&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function R6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=M2()),new Promise(function(r,s){if(e2("missingIconAbstract"),e==="fa"){var i=v9(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&t6[a]&&t6[a][c]){var l=t6[a][c];return r(B6(l))}Pz(c,a),r(k(k({},kz),{},{icon:F.showMissingIcons&&c?e2("missingIconAbstract")||{}:{}}))})}var M5=function(){},E6=F.measurePerformance&&K3&&K3.mark&&K3.measure?K3:{mark:M5,measure:M5},m3='FA "6.5.1"',Tz=function(a){return E6.mark("".concat(m3," ").concat(a," begins")),function(){return H9(a)}},H9=function(a){E6.mark("".concat(m3," ").concat(a," ends")),E6.measure("".concat(m3," ").concat(a),"".concat(m3," ").concat(a," begins"),"".concat(m3," ").concat(a," ends"))},g8={begin:Tz,end:H9},f4=function(){};function C5(c){var a=c.getAttribute?c.getAttribute(k2):null;return typeof a=="string"}function Fz(c){var a=c.getAttribute?c.getAttribute(h8):null,e=c.getAttribute?c.getAttribute(H8):null;return a&&e}function Bz(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function Rz(){if(F.autoReplaceSvg===!0)return o4.replace;var c=o4[F.autoReplaceSvg];return c||o4.replace}function Ez(c){return e1.createElementNS("http://www.w3.org/2000/svg",c)}function Dz(c){return e1.createElement(c)}function u9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Ez:Dz:e;if(typeof c=="string")return e1.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(l){s.setAttribute(l,c.attributes[l])});var i=c.children||[];return i.forEach(function(l){s.appendChild(u9(l,{ceFn:r}))}),s}function qz(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var o4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(u9(s),e)}),e.getAttribute(k2)===null&&F.keepOriginalSource){var r=e1.createComment(qz(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~V8(e).indexOf(F.replacementClass))return o4.replace(a);var s=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(n,f){return f===F.replacementClass||f.match(s)?n.toSvg.push(f):n.toNode.push(f),n},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var l=r.map(function(n){return B3(n)}).join(`
`);e.setAttribute(k2,""),e.innerHTML=l}};function d5(c){c()}function V9(c,a){var e=typeof a=="function"?a:f4;if(c.length===0)e();else{var r=d5;F.mutateApproach===$m&&(r=p2.requestAnimationFrame||d5),r(function(){var s=Rz(),i=g8.begin("mutate");c.map(s),i(),e()})}}var x8=!1;function p9(){x8=!0}function D6(){x8=!1}var p4=null;function L5(c){if(m5&&F.observeMutations){var a=c.treeCallback,e=a===void 0?f4:a,r=c.nodeCallback,s=r===void 0?f4:r,i=c.pseudoElementsCallback,l=i===void 0?f4:i,n=c.observeMutationsRoot,f=n===void 0?e1:n;p4=new m5(function(t){if(!x8){var o=M2();s3(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!C5(v.addedNodes[0])&&(F.searchPseudoElements&&l(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&F.searchPseudoElements&&l(v.target.parentNode),v.type==="attributes"&&C5(v.target)&&~Ym.indexOf(v.attributeName))if(v.attributeName==="class"&&Fz(v.target)){var h=R4(V8(v.target)),u=h.prefix,S=h.iconName;v.target.setAttribute(h8,u||o),S&&v.target.setAttribute(H8,S)}else Bz(v.target)&&s(v.target)})}}),s2&&p4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _z(){p4&&p4.disconnect()}function Oz(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),l=i[0],n=i.slice(1);return l&&n.length>0&&(r[l]=n.join(":").trim()),r},{})),e}function Uz(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=R4(V8(c));return s.prefix||(s.prefix=M2()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Mz(s.prefix,c.innerText)||C8(s.prefix,k6(c.innerText))),!s.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function $z(c){var a=s3(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||A3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Iz(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function g5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Uz(c),r=e.iconName,s=e.prefix,i=e.rest,l=$z(c),n=T6("parseNodeAttributes",{},c),f=a.styleParser?Oz(c):[];return k({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:I1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:l}},n)}var Gz=F1.styles;function M9(c){var a=F.autoReplaceSvg==="nest"?g5(c,{styleParser:!1}):g5(c);return~a.extra.classes.indexOf(a9)?e2("generateLayersText",c,a):e2("generateSvgReplacementMutation",c,a)}var C2=new Set;u8.map(function(c){C2.add("fa-".concat(c))});Object.keys(N3[a1]).map(C2.add.bind(C2));Object.keys(N3[l1]).map(C2.add.bind(C2));C2=T3(C2);function x5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s2)return Promise.resolve();var e=e1.documentElement.classList,r=function(v){return e.add("".concat(z5,"-").concat(v))},s=function(v){return e.remove("".concat(z5,"-").concat(v))},i=F.autoFetchSvg?C2:u8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(Gz));i.includes("fa")||i.push("fa");var l=[".".concat(a9,":not([").concat(k2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(k2,"])")})).join(", ");if(l.length===0)return Promise.resolve();var n=[];try{n=s3(c.querySelectorAll(l))}catch{}if(n.length>0)r("pending"),s("complete");else return Promise.resolve();var f=g8.begin("onTree"),t=n.reduce(function(o,v){try{var h=M9(v);h&&o.push(h)}catch(u){c9||u.name==="MissingIcon"&&console.error(u)}return o},[]);return new Promise(function(o,v){Promise.all(t).then(function(h){V9(h,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),f(),o()})}).catch(function(h){f(),v(h)})})}function Wz(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;M9(c).then(function(e){e&&V9([e],a)})}function Zz(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:F6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:F6(s||{})),c(r,k(k({},e),{},{mask:s}))}}var jz=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?I1:r,i=e.symbol,l=i===void 0?!1:i,n=e.mask,f=n===void 0?null:n,t=e.maskId,o=t===void 0?null:t,v=e.title,h=v===void 0?null:v,u=e.titleId,S=u===void 0?null:u,w=e.classes,R=w===void 0?[]:w,M=e.attributes,d=M===void 0?{}:M,B=e.styles,y=B===void 0?{}:B;if(a){var $=a.prefix,X=a.iconName,s1=a.icon;return E4(k({type:"icon"},a),function(){return P2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(h?d["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(S||A3()):(d["aria-hidden"]="true",d.focusable="false")),L8({icons:{main:B6(s1),mask:f?B6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:X,transform:k(k({},I1),s),symbol:l,title:h,maskId:o,titleId:S,extra:{attributes:d,styles:y,classes:R}})})}},Kz={mixout:function(){return{icon:Zz(jz)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=x5,e.nodeCallback=Wz,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?e1:r,i=e.callback,l=i===void 0?function(){}:i;return x5(s,l)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,l=r.titleId,n=r.prefix,f=r.transform,t=r.symbol,o=r.mask,v=r.maskId,h=r.extra;return new Promise(function(u,S){Promise.all([R6(s,n),o.iconName?R6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var R=z8(w,2),M=R[0],d=R[1];u([e,L8({icons:{main:M,mask:d},prefix:n,iconName:s,transform:f,symbol:t,maskId:v,title:i,titleId:l,extra:h,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,l=e.transform,n=e.styles,f=F4(n);f.length>0&&(s.style=f);var t;return p8(l)&&(t=e2("generateAbstractTransformGrouping",{main:i,transform:l,containerWidth:i.width,iconWidth:i.width})),r.push(t||i.icon),{children:r,attributes:s}}}},Yz={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return E4({type:"layer"},function(){P2("beforeDOMElementCreation",{assembler:e,params:r});var l=[];return e(function(n){Array.isArray(n)?n.map(function(f){l=l.concat(f.abstract)}):l=l.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(T3(i)).join(" ")},children:l}]})}}}},Xz={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,l=r.classes,n=l===void 0?[]:l,f=r.attributes,t=f===void 0?{}:f,o=r.styles,v=o===void 0?{}:o;return E4({type:"counter",content:e},function(){return P2("beforeDOMElementCreation",{content:e,params:r}),Az({content:e.toString(),title:i,extra:{attributes:t,styles:v,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(T3(n))}})})}}}},Qz={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?I1:s,l=r.title,n=l===void 0?null:l,f=r.classes,t=f===void 0?[]:f,o=r.attributes,v=o===void 0?{}:o,h=r.styles,u=h===void 0?{}:h;return E4({type:"text",content:e},function(){return P2("beforeDOMElementCreation",{content:e,params:r}),p5({content:e,transform:k(k({},I1),i),title:n,extra:{attributes:v,styles:u,classes:["".concat(F.cssPrefix,"-layers-text")].concat(T3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,l=r.extra,n=null,f=null;if(X7){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();n=o.width/t,f=o.height/t}return F.autoA11y&&!s&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,p5({content:e.innerHTML,width:n,height:f,transform:i,title:s,extra:l,watchable:!0})])}}},Jz=new RegExp('"',"ug"),b5=[1105920,1112319];function cv(c){var a=c.replace(Jz,""),e=vz(a,0),r=e>=b5[0]&&e<=b5[1],s=a.length===2?a[0]===a[1]:!1;return{value:k6(s?a[0]:a),isSecondary:r||s}}function N5(c,a){var e="".concat(Um).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=s3(c.children),l=i.filter(function(s1){return s1.getAttribute(A6)===a})[0],n=p2.getComputedStyle(c,a),f=n.getPropertyValue("font-family").match(Zm),t=n.getPropertyValue("font-weight"),o=n.getPropertyValue("content");if(l&&!f)return c.removeChild(l),r();if(f&&o!=="none"&&o!==""){var v=n.getPropertyValue("content"),h=~["Sharp"].indexOf(f[2])?l1:a1,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?S3[h][f[2].toLowerCase()]:jm[h][t],S=cv(v),w=S.value,R=S.isSecondary,M=f[0].startsWith("FontAwesome"),d=C8(u,w),B=d;if(M){var y=Cz(w);y.iconName&&y.prefix&&(d=y.iconName,u=y.prefix)}if(d&&!R&&(!l||l.getAttribute(h8)!==u||l.getAttribute(H8)!==B)){c.setAttribute(e,B),l&&c.removeChild(l);var $=Iz(),X=$.extra;X.attributes[A6]=a,R6(d,u).then(function(s1){var d1=L8(k(k({},$),{},{icons:{main:s1,mask:d8()},prefix:u,iconName:B,extra:X,watchable:!0})),p1=e1.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(p1,c.firstChild):c.appendChild(p1),p1.outerHTML=d1.map(function(y1){return B3(y1)}).join(`
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const D2=typeof window<"u";function tJ(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const K=Object.assign;function v6(c,a){const e={};for(const r in a){const s=a[r];e[r]=R1(s)?s.map(c):c(s)}return e}const p3=()=>{},R1=Array.isArray,mJ=/\/$/,zJ=c=>c.replace(mJ,"");function h6(c,a,e="/"){let r,s={},i="",l="";const n=a.indexOf("#");let f=a.indexOf("?");return n<f&&n>=0&&(f=-1),f>-1&&(r=a.slice(0,f),i=a.slice(f+1,n>-1?n:a.length),s=c(i)),n>-1&&(r=r||a.slice(0,n),l=a.slice(n,a.length)),r=uJ(r??a,e),{fullPath:r+(i&&"?")+i+l,path:r,query:s,hash:l}}function vJ(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function T5(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function hJ(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&J2(a.matched[r],e.matched[s])&&ao(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function J2(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function ao(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!HJ(c[e],a[e]))return!1;return!0}function HJ(c,a){return R1(c)?F5(c,a):R1(a)?F5(a,c):c===a}function F5(c,a){return R1(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function uJ(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=e.length-1,l,n;for(l=0;l<r.length;l++)if(n=r[l],n!==".")if(n==="..")i>1&&i--;else break;return e.slice(0,i).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var k3;(function(c){c.pop="pop",c.push="push"})(k3||(k3={}));var M3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(M3||(M3={}));function VJ(c){if(!c)if(D2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),zJ(c)}const pJ=/^[^#]+#/;function MJ(c,a){return c.replace(pJ,"#")+a}function CJ(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const a6=()=>({left:window.pageXOffset,top:window.pageYOffset});function dJ(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=CJ(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function B5(c,a){return(history.state?history.state.position-a:-1)+c}const _6=new Map;function LJ(c,a){_6.set(c,a)}function gJ(c){const a=_6.get(c);return _6.delete(c),a}let xJ=()=>location.protocol+"//"+location.host;function eo(c,a){const{pathname:e,search:r,hash:s}=a,i=c.indexOf("#");if(i>-1){let n=s.includes(c.slice(i))?c.slice(i).length:1,f=s.slice(n);return f[0]!=="/"&&(f="/"+f),T5(f,"")}return T5(e,c)+r+s}function bJ(c,a,e,r){let s=[],i=[],l=null;const n=({state:h})=>{const u=eo(c,location),S=e.value,w=a.value;let R=0;if(h){if(e.value=u,a.value=h,l&&l===S){l=null;return}R=w?h.position-w.position:0}else r(u);s.forEach(M=>{M(e.value,S,{delta:R,type:k3.pop,direction:R?R>0?M3.forward:M3.back:M3.unknown})})};function f(){l=e.value}function t(h){s.push(h);const u=()=>{const S=s.indexOf(h);S>-1&&s.splice(S,1)};return i.push(u),u}function o(){const{history:h}=window;h.state&&h.replaceState(K({},h.state,{scroll:a6()}),"")}function v(){for(const h of i)h();i=[],window.removeEventListener("popstate",n),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",n),window.addEventListener("beforeunload",o,{passive:!0}),{pauseListeners:f,listen:t,destroy:v}}function R5(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?a6():null}}function NJ(c){const{history:a,location:e}=window,r={value:eo(c,e)},s={value:a.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(f,t,o){const v=c.indexOf("#"),h=v>-1?(e.host&&document.querySelector("base")?c:c.slice(v))+f:xJ()+c+f;try{a[o?"replaceState":"pushState"](t,"",h),s.value=t}catch(u){console.error(u),e[o?"replace":"assign"](h)}}function l(f,t){const o=K({},a.state,R5(s.value.back,f,s.value.forward,!0),t,{position:s.value.position});i(f,o,!0),r.value=f}function n(f,t){const o=K({},s.value,a.state,{forward:f,scroll:a6()});i(o.current,o,!0);const v=K({},R5(r.value,f,null),{position:o.position+1},t);i(f,v,!1),r.value=f}return{location:r,state:s,push:n,replace:l}}function SJ(c){c=VJ(c);const a=NJ(c),e=bJ(c,a.state,a.location,a.replace);function r(i,l=!0){l||e.pauseListeners(),history.go(i)}const s=K({location:"",base:c,go:r,createHref:MJ.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function wJ(c){return typeof c=="string"||c&&typeof c=="object"}function ro(c){return typeof c=="string"||typeof c=="symbol"}const o2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},so=Symbol("");var E5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(E5||(E5={}));function c3(c,a){return K(new Error,{type:c,[so]:!0},a)}function K1(c,a){return c instanceof Error&&so in c&&(a==null||!!(c.type&a))}const D5="[^/]+?",yJ={sensitive:!1,strict:!1,start:!0,end:!0},AJ=/[.+*?^${}()[\]/\\]/g;function kJ(c,a){const e=K({},yJ,a),r=[];let s=e.start?"^":"";const i=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(s+="/");for(let v=0;v<t.length;v++){const h=t[v];let u=40+(e.sensitive?.25:0);if(h.type===0)v||(s+="/"),s+=h.value.replace(AJ,"\\$&"),u+=40;else if(h.type===1){const{value:S,repeatable:w,optional:R,regexp:M}=h;i.push({name:S,repeatable:w,optional:R});const d=M||D5;if(d!==D5){u+=10;try{new RegExp(`(${d})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${S}" (${d}): `+y.message)}}let B=w?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;v||(B=R&&t.length<2?`(?:/${B})`:"/"+B),R&&(B+="?"),s+=B,u+=20,R&&(u+=-8),w&&(u+=-20),d===".*"&&(u+=-50)}o.push(u)}r.push(o)}if(e.strict&&e.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const l=new RegExp(s,e.sensitive?"":"i");function n(t){const o=t.match(l),v={};if(!o)return null;for(let h=1;h<o.length;h++){const u=o[h]||"",S=i[h-1];v[S.name]=u&&S.repeatable?u.split("/"):u}return v}function f(t){let o="",v=!1;for(const h of c){(!v||!o.endsWith("/"))&&(o+="/"),v=!1;for(const u of h)if(u.type===0)o+=u.value;else if(u.type===1){const{value:S,repeatable:w,optional:R}=u,M=S in t?t[S]:"";if(R1(M)&&!w)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const d=R1(M)?M.join("/"):M;if(!d)if(R)h.length<2&&(o.endsWith("/")?o=o.slice(0,-1):v=!0);else throw new Error(`Missing required param "${S}"`);o+=d}}return o||"/"}return{re:l,score:r,keys:i,parse:n,stringify:f}}function PJ(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===80?-1:1:c.length>a.length?a.length===1&&a[0]===80?1:-1:0}function TJ(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const i=PJ(r[e],s[e]);if(i)return i;e++}if(Math.abs(s.length-r.length)===1){if(q5(r))return 1;if(q5(s))return-1}return s.length-r.length}function q5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const FJ={type:0,value:""},BJ=/[a-zA-Z0-9_]/;function RJ(c){if(!c)return[[]];if(c==="/")return[[FJ]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(u){throw new Error(`ERR (${e})/"${t}": ${u}`)}let e=0,r=e;const s=[];let i;function l(){i&&s.push(i),i=[]}let n=0,f,t="",o="";function v(){t&&(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(f==="*"||f==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:o,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):a("Invalid state to consume buffer"),t="")}function h(){t+=f}for(;n<c.length;){if(f=c[n++],f==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:f==="/"?(t&&v(),l()):f===":"?(v(),e=1):h();break;case 4:h(),e=r;break;case 1:f==="("?e=2:BJ.test(f)?h():(v(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&n--);break;case 2:f===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+f:e=3:o+=f;break;case 3:v(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&n--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),v(),l(),s}function EJ(c,a,e){const r=kJ(RJ(c.path),e),s=K(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function DJ(c,a){const e=[],r=new Map;a=U5({strict:!1,end:!0,sensitive:!1},a);function s(o){return r.get(o)}function i(o,v,h){const u=!h,S=qJ(o);S.aliasOf=h&&h.record;const w=U5(a,o),R=[S];if("alias"in o){const B=typeof o.alias=="string"?[o.alias]:o.alias;for(const y of B)R.push(K({},S,{components:h?h.record.components:S.components,path:y,aliasOf:h?h.record:S}))}let M,d;for(const B of R){const{path:y}=B;if(v&&y[0]!=="/"){const $=v.record.path,X=$[$.length-1]==="/"?"":"/";B.path=v.record.path+(y&&X+y)}if(M=EJ(B,v,w),h?h.alias.push(M):(d=d||M,d!==M&&d.alias.push(M),u&&o.name&&!O5(M)&&l(o.name)),S.children){const $=S.children;for(let X=0;X<$.length;X++)i($[X],M,h&&h.children[X])}h=h||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&f(M)}return d?()=>{l(d)}:p3}function l(o){if(ro(o)){const v=r.get(o);v&&(r.delete(o),e.splice(e.indexOf(v),1),v.children.forEach(l),v.alias.forEach(l))}else{const v=e.indexOf(o);v>-1&&(e.splice(v,1),o.record.name&&r.delete(o.record.name),o.children.forEach(l),o.alias.forEach(l))}}function n(){return e}function f(o){let v=0;for(;v<e.length&&TJ(o,e[v])>=0&&(o.record.path!==e[v].record.path||!io(o,e[v]));)v++;e.splice(v,0,o),o.record.name&&!O5(o)&&r.set(o.record.name,o)}function t(o,v){let h,u={},S,w;if("name"in o&&o.name){if(h=r.get(o.name),!h)throw c3(1,{location:o});w=h.record.name,u=K(_5(v.params,h.keys.filter(d=>!d.optional).map(d=>d.name)),o.params&&_5(o.params,h.keys.map(d=>d.name))),S=h.stringify(u)}else if("path"in o)S=o.path,h=e.find(d=>d.re.test(S)),h&&(u=h.parse(S),w=h.record.name);else{if(h=v.name?r.get(v.name):e.find(d=>d.re.test(v.path)),!h)throw c3(1,{location:o,currentLocation:v});w=h.record.name,u=K({},v.params,o.params),S=h.stringify(u)}const R=[];let M=h;for(;M;)R.unshift(M.record),M=M.parent;return{name:w,path:S,params:u,matched:R,meta:OJ(R)}}return c.forEach(o=>i(o)),{addRoute:i,resolve:t,removeRoute:l,getRoutes:n,getRecordMatcher:s}}function _5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function qJ(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:_J(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function _J(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function O5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function OJ(c){return c.reduce((a,e)=>K(a,e.meta),{})}function U5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function io(c,a){return a.children.some(e=>e===c||io(c,e))}const lo=/#/g,UJ=/&/g,$J=/\//g,IJ=/=/g,GJ=/\?/g,no=/\+/g,WJ=/%5B/g,ZJ=/%5D/g,fo=/%5E/g,jJ=/%60/g,oo=/%7B/g,KJ=/%7C/g,to=/%7D/g,YJ=/%20/g;function g0(c){return encodeURI(""+c).replace(KJ,"|").replace(WJ,"[").replace(ZJ,"]")}function XJ(c){return g0(c).replace(oo,"{").replace(to,"}").replace(fo,"^")}function O6(c){return g0(c).replace(no,"%2B").replace(YJ,"+").replace(lo,"%23").replace(UJ,"%26").replace(jJ,"`").replace(oo,"{").replace(to,"}").replace(fo,"^")}function QJ(c){return O6(c).replace(IJ,"%3D")}function JJ(c){return g0(c).replace(lo,"%23").replace(GJ,"%3F")}function c11(c){return c==null?"":JJ(c).replace($J,"%2F")}function C4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function a11(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(no," "),l=i.indexOf("="),n=C4(l<0?i:i.slice(0,l)),f=l<0?null:C4(i.slice(l+1));if(n in a){let t=a[n];R1(t)||(t=a[n]=[t]),t.push(f)}else a[n]=f}return a}function $5(c){let a="";for(let e in c){const r=c[e];if(e=QJ(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(R1(r)?r.map(i=>i&&O6(i)):[r&&O6(r)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function e11(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=R1(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const r11=Symbol(""),I5=Symbol(""),x0=Symbol(""),mo=Symbol(""),U6=Symbol("");function f3(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function m2(c,a,e,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,n)=>{const f=v=>{v===!1?n(c3(4,{from:e,to:a})):v instanceof Error?n(v):wJ(v)?n(c3(2,{from:a,to:v})):(i&&r.enterCallbacks[s]===i&&typeof v=="function"&&i.push(v),l())},t=c.call(r&&r.instances[s],a,e,f);let o=Promise.resolve(t);c.length<3&&(o=o.then(f)),o.catch(v=>n(v))})}function H6(c,a,e,r){const s=[];for(const i of c)for(const l in i.components){let n=i.components[l];if(!(a!=="beforeRouteEnter"&&!i.instances[l]))if(s11(n)){const t=(n.__vccOpts||n)[a];t&&s.push(m2(t,e,r,i,l))}else{let f=n();s.push(()=>f.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const o=tJ(t)?t.default:t;i.components[l]=o;const h=(o.__vccOpts||o)[a];return h&&m2(h,e,r,i,l)()}))}}return s}function s11(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function G5(c){const a=J1(x0),e=J1(mo),r=z1(()=>a.resolve(G2(c.to))),s=z1(()=>{const{matched:f}=r.value,{length:t}=f,o=f[t-1],v=e.matched;if(!o||!v.length)return-1;const h=v.findIndex(J2.bind(null,o));if(h>-1)return h;const u=W5(f[t-2]);return t>1&&W5(o)===u&&v[v.length-1].path!==u?v.findIndex(J2.bind(null,f[t-2])):h}),i=z1(()=>s.value>-1&&f11(e.params,r.value.params)),l=z1(()=>s.value>-1&&s.value===e.matched.length-1&&ao(e.params,r.value.params));function n(f={}){return n11(f)?a[G2(c.replace)?"replace":"push"](G2(c.to)).catch(p3):Promise.resolve()}return{route:r,href:z1(()=>r.value.href),isActive:i,isExactActive:l,navigate:n}}const i11=i8({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:G5,setup(c,{slots:a}){const e=S4(G5(c)),{options:r}=J1(x0),s=z1(()=>({[Z5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[Z5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:m8("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},i)}}}),l11=i11;function n11(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function f11(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!R1(s)||s.length!==r.length||r.some((i,l)=>i!==s[l]))return!1}return!0}function W5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const Z5=(c,a,e)=>c??a??e,o11=i8({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=J1(U6),s=z1(()=>c.route||r.value),i=J1(I5,0),l=z1(()=>{let t=G2(i);const{matched:o}=s.value;let v;for(;(v=o[t])&&!v.components;)t++;return t}),n=z1(()=>s.value.matched[l.value]);i4(I5,z1(()=>l.value+1)),i4(r11,n),i4(U6,s);const f=z2();return z3(()=>[f.value,n.value,c.name],([t,o,v],[h,u,S])=>{o&&(o.instances[v]=t,u&&u!==o&&t&&t===h&&(o.leaveGuards.size||(o.leaveGuards=u.leaveGuards),o.updateGuards.size||(o.updateGuards=u.updateGuards))),t&&o&&(!u||!J2(o,u)||!h)&&(o.enterCallbacks[v]||[]).forEach(w=>w(t))},{flush:"post"}),()=>{const t=s.value,o=c.name,v=n.value,h=v&&v.components[o];if(!h)return j5(e.default,{Component:h,route:t});const u=v.props[o],S=u?u===!0?t.params:typeof u=="function"?u(t):u:null,R=m8(h,K({},S,a,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(v.instances[o]=null)},ref:f}));return j5(e.default,{Component:R,route:t})||R}}});function j5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const t11=o11;function m11(c){const a=DJ(c.routes,c),e=c.parseQuery||a11,r=c.stringifyQuery||$5,s=c.history,i=f3(),l=f3(),n=f3(),f=Qo(o2);let t=o2;D2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=v6.bind(null,p=>""+p),v=v6.bind(null,c11),h=v6.bind(null,C4);function u(p,P){let N,E;return ro(p)?(N=a.getRecordMatcher(p),E=P):E=p,a.addRoute(E,N)}function S(p){const P=a.getRecordMatcher(p);P&&a.removeRoute(P)}function w(){return a.getRoutes().map(p=>p.record)}function R(p){return!!a.getRecordMatcher(p)}function M(p,P){if(P=K({},P||f.value),typeof p=="string"){const H=h6(e,p,P.path),V=a.resolve({path:H.path},P),C=s.createHref(H.fullPath);return K(H,V,{params:h(V.params),hash:C4(H.hash),redirectedFrom:void 0,href:C})}let N;if("path"in p)N=K({},p,{path:h6(e,p.path,P.path).path});else{const H=K({},p.params);for(const V in H)H[V]==null&&delete H[V];N=K({},p,{params:v(H)}),P.params=v(P.params)}const E=a.resolve(N,P),j=p.hash||"";E.params=o(h(E.params));const m=vJ(r,K({},p,{hash:XJ(j),path:E.path})),z=s.createHref(m);return K({fullPath:m,hash:j,query:r===$5?e11(p.query):p.query||{}},E,{redirectedFrom:void 0,href:z})}function d(p){return typeof p=="string"?h6(e,p,f.value.path):K({},p)}function B(p,P){if(t!==p)return c3(8,{from:P,to:p})}function y(p){return s1(p)}function $(p){return y(K(d(p),{replace:!0}))}function X(p){const P=p.matched[p.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let E=typeof N=="function"?N(p):N;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=d(E):{path:E},E.params={}),K({query:p.query,hash:p.hash,params:"path"in E?{}:p.params},E)}}function s1(p,P){const N=t=M(p),E=f.value,j=p.state,m=p.force,z=p.replace===!0,H=X(N);if(H)return s1(K(d(H),{state:typeof H=="object"?K({},j,H.state):j,force:m,replace:z}),P||N);const V=N;V.redirectedFrom=P;let C;return!m&&hJ(r,E,N)&&(C=c3(16,{to:V,from:E}),D1(E,E,!0,!1)),(C?Promise.resolve(C):y1(V,E)).catch(L=>K1(L)?K1(L,2)?L:l2(L):Z(L,V,E)).then(L=>{if(L){if(K1(L,2))return s1(K({replace:z},d(L.to),{state:typeof L.to=="object"?K({},j,L.to.state):j,force:m}),P||V)}else L=d2(V,E,!0,z,j);return i2(V,E,L),L})}function d1(p,P){const N=B(p,P);return N?Promise.reject(N):Promise.resolve()}function p1(p){const P=B2.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(p):p()}function y1(p,P){let N;const[E,j,m]=z11(p,P);N=H6(E.reverse(),"beforeRouteLeave",p,P);for(const H of E)H.leaveGuards.forEach(V=>{N.push(m2(V,p,P))});const z=d1.bind(null,p,P);return N.push(z),H1(N).then(()=>{N=[];for(const H of i.list())N.push(m2(H,p,P));return N.push(z),H1(N)}).then(()=>{N=H6(j,"beforeRouteUpdate",p,P);for(const H of j)H.updateGuards.forEach(V=>{N.push(m2(V,p,P))});return N.push(z),H1(N)}).then(()=>{N=[];for(const H of m)if(H.beforeEnter)if(R1(H.beforeEnter))for(const V of H.beforeEnter)N.push(m2(V,p,P));else N.push(m2(H.beforeEnter,p,P));return N.push(z),H1(N)}).then(()=>(p.matched.forEach(H=>H.enterCallbacks={}),N=H6(m,"beforeRouteEnter",p,P),N.push(z),H1(N))).then(()=>{N=[];for(const H of l.list())N.push(m2(H,p,P));return N.push(z),H1(N)}).catch(H=>K1(H,8)?H:Promise.reject(H))}function i2(p,P,N){n.list().forEach(E=>p1(()=>E(p,P,N)))}function d2(p,P,N,E,j){const m=B(p,P);if(m)return m;const z=P===o2,H=D2?history.state:{};N&&(E||z?s.replace(p.fullPath,K({scroll:z&&H&&H.scroll},j)):s.push(p.fullPath,j)),f.value=p,D1(p,P,N,z),l2()}let E1;function i3(){E1||(E1=s.listen((p,P,N)=>{if(!U3.listening)return;const E=M(p),j=X(E);if(j){s1(K(j,{replace:!0}),E).catch(p3);return}t=E;const m=f.value;D2&&LJ(B5(m.fullPath,N.delta),a6()),y1(E,m).catch(z=>K1(z,12)?z:K1(z,2)?(s1(z.to,E).then(H=>{K1(H,20)&&!N.delta&&N.type===k3.pop&&s.go(-1,!1)}).catch(p3),Promise.reject()):(N.delta&&s.go(-N.delta,!1),Z(z,E,m))).then(z=>{z=z||d2(E,m,!1),z&&(N.delta&&!K1(z,8)?s.go(-N.delta,!1):N.type===k3.pop&&K1(z,20)&&s.go(-1,!1)),i2(E,m,z)}).catch(p3)}))}let T2=f3(),o1=f3(),Q;function Z(p,P,N){l2(p);const E=o1.list();return E.length?E.forEach(j=>j(p,P,N)):console.error(p),Promise.reject(p)}function j1(){return Q&&f.value!==o2?Promise.resolve():new Promise((p,P)=>{T2.add([p,P])})}function l2(p){return Q||(Q=!p,i3(),T2.list().forEach(([P,N])=>p?N(p):P()),T2.reset()),p}function D1(p,P,N,E){const{scrollBehavior:j}=c;if(!D2||!j)return Promise.resolve();const m=!N&&gJ(B5(p.fullPath,0))||(E||!N)&&history.state&&history.state.scroll||null;return C7().then(()=>j(p,P,m)).then(z=>z&&dJ(z)).catch(z=>Z(z,p,P))}const L1=p=>s.go(p);let F2;const B2=new Set,U3={currentRoute:f,listening:!0,addRoute:u,removeRoute:S,hasRoute:R,getRoutes:w,resolve:M,options:c,push:y,replace:$,go:L1,back:()=>L1(-1),forward:()=>L1(1),beforeEach:i.add,beforeResolve:l.add,afterEach:n.add,onError:o1.add,isReady:j1,install(p){const P=this;p.component("RouterLink",l11),p.component("RouterView",t11),p.config.globalProperties.$router=P,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>G2(f)}),D2&&!F2&&f.value===o2&&(F2=!0,y(s.location).catch(j=>{}));const N={};for(const j in o2)Object.defineProperty(N,j,{get:()=>f.value[j],enumerable:!0});p.provide(x0,P),p.provide(mo,m7(N)),p.provide(U6,f);const E=p.unmount;B2.add(p),p.unmount=function(){B2.delete(p),B2.size<1&&(t=o2,E1&&E1(),E1=null,f.value=o2,F2=!1,Q=!1),E()}}};function H1(p){return p.reduce((P,N)=>P.then(()=>p1(N)),Promise.resolve())}return U3}function z11(c,a){const e=[],r=[],s=[],i=Math.max(a.matched.length,c.matched.length);for(let l=0;l<i;l++){const n=a.matched[l];n&&(c.matched.find(t=>J2(t,n))?r.push(n):e.push(n));const f=c.matched[l];f&&(a.matched.find(t=>J2(t,f))||s.push(f))}return[e,r,s]}const v11={key:0,class:"alert alert-danger"},zo={__name:"BaseError",props:["error"],setup(c){return(a,e)=>c.error?(t1(),Z1("div",v11,Y6(c.error),1)):Y2("",!0)}},h11={class:"mg-b-5 mg-xl-b-20"},vo={__name:"BaseHeading",props:["heading"],setup(c){return(a,e)=>(t1(),Z1("h3",h11,Y6(c.heading),1))}},H11={class:"form-group"},u11={key:0},V11=["type","value","placeholder"],$6={__name:"BaseInput",props:["label","type","placeholder","modelValue"],setup(c){return(a,e)=>(t1(),Z1("div",H11,[c.label?(t1(),Z1("label",u11,Y6(c.label),1)):Y2("",!0),$1("input",I7({type:c.type,class:"form-control",value:c.modelValue,onInput:e[0]||(e[0]=r=>a.$emit("update:modelValue",r.target.value)),placeholder:c.placeholder},a.$attrs),null,16,V11)]))}},p11=["type","disabled"],ho={__name:"BaseButton",props:["leftIcon","loading","type"],emits:["handleClick"],setup(c,{emit:a}){const e=a;return(r,s)=>(t1(),Z1("button",{type:c.type,onClick:s[0]||(s[0]=i=>e("handleClick")),class:"gradient-bg btn btn-info btn-block enterBtn",disabled:c.loading},[yt(r.$slots,"default")],8,p11))}},M11={},C11={class:"fas fa-circle-notch fa-spin",style:{"margin-left":"5px"}};function d11(c,a){return t1(),Z1("i",C11)}const Ho=O3(M11,[["render",d11]]),L11={},g11={class:"tx-14 mg-t-20 tx-center"};function x11(c,a){const e=A4("router-link");return t1(),Z1("div",g11,[x3(" Forgot Password? "),J(e,{to:"/request-reset-password",style:{color:"#fff","text-decoration":"underline"}},{default:P3(()=>[x3(" Click Here to Reset ")]),_:1})])}const b11=O3(L11,[["render",x11]]),N11={__name:"LoginView",setup(c){const a=z2(null),e=z2(null),r=z2(null),s=z2(!1),i=()=>{s.value=!0,console.log(e.value,r.value,s.value,"dataaaaaaaaaaaaaaaaaaaaa")};return(l,n)=>(t1(),Z1(S1,null,[a.value?(t1(),V2(zo,{key:0,error:a.value},null,8,["error"])):Y2("",!0),J(vo,{heading:"Sign In"}),J($6,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=f=>e.value=f),type:"email",placeholder:"yourname@yourmail.com",label:"Email"},null,8,["modelValue"]),J($6,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=f=>r.value=f),type:"password",placeholder:"Enter your password",label:"Password"},null,8,["modelValue"]),J(ho,{onHandleClick:i,type:"button",loading:s.value},{default:P3(()=>[x3("Sign In "),s.value?(t1(),V2(Ho,{key:0})):Y2("",!0)]),_:1},8,["loading"]),J(b11)],64))}},S11=$1("p",{class:""}," Please enter your email address below and we'll email you instructions for setting a new password. ",-1),w11={__name:"PasswordResetView",setup(c){const a=z2(null),e=z2(null),r=z2(!1),s=()=>{r.value=!0,console.log(e.value,r.value,"dataaaaaaaaaaaaaaaaaaaaa")};return(i,l)=>(t1(),Z1(S1,null,[J(vo,{heading:"Reset Password"}),S11,a.value?(t1(),V2(zo,{key:0,error:a.value},null,8,["error"])):Y2("",!0),J($6,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=n=>e.value=n),type:"email",placeholder:"yourname@example.com",label:"Email address"},null,8,["modelValue"]),J(ho,{onHandleClick:s,type:"button",loading:r.value},{default:P3(()=>[x3("Reset Password "),r.value?(t1(),V2(Ho,{key:0})):Y2("",!0)]),_:1},8,["loading"])],64))}},y11=Xt('<br data-v-d5b9c5b7><br data-v-d5b9c5b7><div class="text-center footer-text btn-block" style="color:white;font-size:0.7rem;" data-v-d5b9c5b7><p data-v-d5b9c5b7>Copyright © <span id="year" data-v-d5b9c5b7></span> MirrorAR LLC. All Rights Reserved. <br data-v-d5b9c5b7> MirrorAR is covered by U.S. Patent No. 11,069,144.</p><a href="privacy-policy.html" class="footer-link" target="_blank" data-v-d5b9c5b7>Privacy Policy</a> | <a class="footer-link" href="terms-conditions.html" target="_blank" data-v-d5b9c5b7>Terms of Use</a> | <a href="eusa.html" class="footer-link" target="_blank" data-v-d5b9c5b7>EUSA</a> <br data-v-d5b9c5b7>Version <span id="backendVersion" data-v-d5b9c5b7></span><br data-v-d5b9c5b7></div>',3),A11={__name:"BaseFooter",setup(c){return k7(()=>{document.getElementById("year")&&(document.getElementById("year").innerHTML=new Date().getFullYear()),document.getElementById("backendVersion")&&(document.getElementById("backendVersion").innerHTML=localStorage.getItem("backendVersion"))}),(a,e)=>y11}},k11=O3(A11,[["__scopeId","data-v-d5b9c5b7"]]),P11="/testhost/assets/logo-9EkJterd.png",T11={},F11=$1("img",{src:P11,style:{width:"100%"}},null,-1);function B11(c,a){const e=A4("router-link");return t1(),V2(e,{to:"/",class:"aside-logo mg-lg-b-20 mg-xl-b-20",style:{"text-align":"center"}},{default:P3(()=>[F11]),_:1})}const R11=O3(T11,[["render",B11]]),E11={class:"content content-fixed content-auth"},D11={class:"container"},q11={class:"media align-items-stretch justify-content-center ht-100p pos-relative"},_11={class:"sign-wrapper"},O11={class:"wd-100p"},U11={__name:"AuthLayout",setup(c){return(a,e)=>{const r=A4("router-view");return t1(),Z1("div",null,[$1("div",E11,[$1("div",D11,[$1("div",q11,[$1("div",_11,[J(R11),$1("div",O11,[J(r),J(k11)])])])])])])}}},$11=[{path:"/testhost/",component:U11,children:[{path:"",name:"Login",component:N11},{path:"request-reset-password",name:"PasswordReset",component:w11}]}],I11=m11({history:SJ(),routes:$11});mv.add(Y_,lJ,YK);zv.watch();const b0=km(oJ);b0.use(I11);b0.component("font-awesome-icon",bv);b0.mount("#app");