import{A as i,r as a,a as f}from"./index-CarotKVN.js";const g=i("config",()=>{const o=a(!1),n=a(Array.from(Array.from({length:2},(e,t)=>t+2),e=>({label:`${e}`,value:e}))),r=a([{label:"加法",value:"+"},{label:"减法",value:"-"}]),s=a(Array.from(Array.from({length:5},(e,t)=>(t+1)*10),e=>({label:`${e}以内`,value:e}))),l=f({id:void 0,schema:r.value,type:s.value[0],bit:n.value[1],cnt:15,timer:10});return{isSetConfig:o,configs:l,schemaOptions:r,typeOptions:s,bitOptions:n,setConfigFlag:e=>{o.value=e}}});export{g as u};
