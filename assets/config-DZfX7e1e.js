import{t as f,r as t,a as i}from"./index-DYbMz_hb.js";const g=f("config",()=>{const o=t(!1),r=t(Array.from(Array.from({length:2},(e,a)=>a+2),e=>({label:`${e}`,value:e}))),s=t([{label:"加法",value:"+"},{label:"减法",value:"-"}]),l=t(Array.from(Array.from({length:5},(e,a)=>(a+1)*10),e=>({label:`${e}以内`,value:e}))),n=i({schema:s.value,type:l.value[0],bit:r.value[1],cnt:15,timer:10});return{isSetConfig:o,configs:n,schemaOptions:s,typeOptions:l,bitOptions:r,setConfigFlag:e=>{o.value=e}}});export{g as u};
