import{u as ge,__tla as _e}from"./app-Ct3mL4Bv.js";import{_ as be,b as pe,u as he,s as ye,d as we,e as x,w as s,E as Ve,o as _,a as u,f as S,g as i,c as k,h as q,F as C,i as ve,j as xe,k as Ae,l as Ue,m as Te,n as ke,p as qe,q as Ce,t as Be,v as Ee,x as Oe,y as We,z as je,A as De,B as Le,__tla as Se}from"./index-BjV1dOTH.js";let R,Re=Promise.all([(()=>{try{return _e}catch{}})(),(()=>{try{return Se}catch{}})()]).then(async()=>{const I="/assets/lebao_wasm_bg-D2Ak7L0g.wasm",M=async(e={},t)=>{let o;if(t.startsWith("data:")){const r=t.replace(/^data:.*?base64,/,"");let a;if(typeof Buffer=="function"&&typeof Buffer.from=="function")a=Buffer.from(r,"base64");else if(typeof atob=="function"){const m=atob(r);a=new Uint8Array(m.length);for(let n=0;n<m.length;n++)a[n]=m.charCodeAt(n)}else throw new Error("Cannot decode base64-encoded data URL");o=await WebAssembly.instantiate(a,e)}else{const r=await fetch(t),a=r.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&a.startsWith("application/wasm"))o=await WebAssembly.instantiateStreaming(r,e);else{const m=await r.arrayBuffer();o=await WebAssembly.instantiate(m,e)}}return o.instance.exports};let b;function P(e){b=e}const z=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let B=new z("utf-8",{ignoreBOM:!0,fatal:!0});B.decode();let y=null;function w(){return(y===null||y.byteLength===0)&&(y=new Uint8Array(b.memory.buffer)),y}function E(e,t){return e=e>>>0,B.decode(w().subarray(e,e+t))}const f=new Array(128).fill(void 0);f.push(void 0,null,!0,!1);let p=f.length;function F(e){p===f.length&&f.push(f.length+1);const t=p;return p=f[t],f[t]=e,t}function O(e){return f[e]}function G(e){e<132||(f[e]=p,p=e)}function H(e){const t=O(e);return G(e),t}let A=0;const J=typeof TextEncoder>"u"?(0,module.require)("util").TextEncoder:TextEncoder;let V=new J("utf-8");const K=typeof V.encodeInto=="function"?function(e,t){return V.encodeInto(e,t)}:function(e,t){const o=V.encode(e);return t.set(o),{read:e.length,written:o.length}};function N(e,t,o){if(o===void 0){const c=V.encode(e),g=t(c.length,1)>>>0;return w().subarray(g,g+c.length).set(c),A=c.length,g}let r=e.length,a=t(r,1)>>>0;const m=w();let n=0;for(;n<r;n++){const c=e.charCodeAt(n);if(c>127)break;m[a+n]=c}if(n!==r){n!==0&&(e=e.slice(n)),a=o(a,r,r=n+e.length*3,1)>>>0;const c=w().subarray(a+n,a+r),g=K(e,c);n+=g.written,a=o(a,r,n,1)>>>0}return A=n,a}function Q(e){const t=N(e,b.__wbindgen_malloc,b.__wbindgen_realloc),o=A;b.greet(t,o)}function X(e,t){const o=E(e,t);return F(o)}function Y(e){H(e)}function Z(e){console.log(O(e))}function $(e,t){throw new Error(E(e,t))}URL=globalThis.URL;const v=await M({"./lebao_wasm_bg.js":{__wbindgen_string_new:X,__wbindgen_object_drop_ref:Y,__wbg_log_5bb5f88f245d7762:Z,__wbindgen_throw:$}},I),ee=v.memory,te=v.greet,ae=v.__wbindgen_malloc,le=v.__wbindgen_realloc,ne=Object.freeze(Object.defineProperty({__proto__:null,__wbindgen_malloc:ae,__wbindgen_realloc:le,greet:te,memory:ee},Symbol.toStringTag,{value:"Module"}));P(ne);let W,j,D;W=e=>(je("data-v-fa083a17"),e=e(),De(),e),j=W(()=>Le("span",null,"\u5206\u949F",-1)),D={__name:"ConfigView",setup(e){const t=pe(),o=he(),r=ge(),{configs:a,schemaOptions:m,typeOptions:n,bitOptions:c}=ye(o),g=we({schema:[{required:!0,message:"\u8BF7\u9009\u62E9\u9898\u578B\uFF01",trigger:"change"}],bit:[{required:!0,message:"\u8BF7\u9009\u62E9\u7C7B\u578B\uFF01",trigger:"change"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u7C7B\u578B\uFF01",trigger:"change"}],cnt:[{required:!0,message:"\u8BF7\u9009\u62E9\u6570\u91CF\uFF01",trigger:"change"}],timer:[{required:!0,message:"\u8BF7\u9009\u62E9\u8BA1\u65F6\uFF01",trigger:"change"}]}),oe=()=>{t.value.validate(L=>{if(L)o.submit().then(()=>{ve.push({name:"Paper"}).then(()=>{r.playCountDown()})});else return xe.error("\u5FC5\u586B\u9879\u4E0D\u80FD\u4E3A\u7A7A"),!1})};return Q("123"),(L,d)=>{const re=Ae,U=Ue,T=Te,h=ke,se=qe,ue=Ce,ie=Be,ce=Ee,de=Oe,fe=We,me=Ve;return _(),x(me,{class:"container"},{default:s(()=>[u(re,null,{default:s(()=>[S("\u914D\u7F6E\u53C2\u6570")]),_:1}),u(ce,null,{default:s(()=>[u(ie,{model:i(a),"label-width":"auto",ref_key:"formRef",ref:t,"status-icon":"",rules:g},{default:s(()=>[u(h,{label:"\u9898\u578B",prop:"schema"},{default:s(()=>[u(T,{modelValue:i(a).schema,"onUpdate:modelValue":d[0]||(d[0]=l=>i(a).schema=l),"collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3,multiple:"",placeholder:"\u8BF7\u9009\u62E9\u9898\u578B"},{default:s(()=>[(_(!0),k(C,null,q(i(m),l=>(_(),x(U,{key:l,label:l.label,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(h,{label:"\u4F4D\u6570",prop:"bit"},{default:s(()=>[u(T,{modelValue:i(a).bit,"onUpdate:modelValue":d[1]||(d[1]=l=>i(a).bit=l),placeholder:"\u9009\u62E9..."},{default:s(()=>[(_(!0),k(C,null,q(i(c),l=>(_(),x(U,{key:l,label:l.label,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(h,{label:"\u7C7B\u578B",prop:"type"},{default:s(()=>[u(T,{modelValue:i(a).type,"onUpdate:modelValue":d[2]||(d[2]=l=>i(a).type=l),placeholder:"\u9009\u62E9..."},{default:s(()=>[(_(!0),k(C,null,q(i(n),l=>(_(),x(U,{key:l,label:l.label,value:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),u(h,{label:"\u6570\u91CF",prop:"cnt"},{default:s(()=>[u(se,{modelValue:i(a).cnt,"onUpdate:modelValue":d[3]||(d[3]=l=>i(a).cnt=l),"controls-position":"right",min:5,max:60},null,8,["modelValue"])]),_:1}),u(h,{label:"\u8BA1\u65F6",prop:"timer"},{default:s(()=>[u(ue,{modelValue:i(a).timer,"onUpdate:modelValue":d[4]||(d[4]=l=>i(a).timer=l),modelModifiers:{number:!0},style:{width:"150px"},type:"number","controls-position":"right",min:1,max:60},{append:s(()=>[j]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),u(fe,{class:"container__footer"},{default:s(()=>[u(de,{type:"success",onClick:oe,round:""},{default:s(()=>[S("\u4E0B\u4E00\u6B65")]),_:1})]),_:1})]),_:1})}}},R=be(D,[["__scopeId","data-v-fa083a17"]])});export{Re as __tla,R as default};