import{u as useConfigStore}from"./config-CimUDplf.js";import{A as defineStore,r as ref,a as reactive,_ as _export_sfc,s as storeToRefs,B as computed,c as createBlock,w as withCtx,g as router,C as ElPageHeader,o as openBlock,y as createBaseVNode,D as toDisplayString,u as unref,e as createElementBlock,f as renderList,F as Fragment,b as createVNode,d as createTextVNode,G as isRef,H as ElProgress,I as ElCountdown,q as ElButton,J as ElRate,K as ElDialog,L as check_default,M as ElTag,m as ElInput}from"./index-DoV9yqJZ.js";const useAppStore=defineStore("app",()=>{const isComplete=ref(!1),countDown=reactive({start:0,end:0}),score=ref(3),calcList=ref([]),setComplete=e=>{isComplete.value=e},setCountDown=e=>{const t=Date.now();countDown.start=t,countDown.end=countDown.start+1e3*60*(e??0)},setScore=(e,t)=>{score.value=Number((e/t*5).toFixed(2))},setCalcList=(val,ops,bit,cnt)=>{calcList.value=Array.from({length:cnt},(_,idx)=>{const numbers=Array.from({length:val},(e,t)=>t+1);let params=Array.from({length:bit},()=>numbers[Math.floor(Math.random()*numbers.length)]),formula=params.reduce((e,t)=>`${e} ${ops[Math.floor(Math.random()*ops.length)]} ${t}`),value=eval(formula);for(;value<0||value>val||calcList.value.map(e=>e.formula).includes(formula);)params=Array.from({length:bit},()=>numbers[Math.floor(Math.random()*numbers.length)]),formula=params.reduce((e,t)=>`${e} ${ops[Math.floor(Math.random()*ops.length)]} ${t}`),value=eval(formula);return{id:idx+1,formula,value:void 0}})};return{isComplete,score,countDown,calcList,setCalcList,setComplete,setCountDown,setScore}}),_hoisted_1={class:"header__content"},_hoisted_2={class:"text-large font-600 mr-3"},_hoisted_3={class:"header__extra"},_hoisted_4={class:"header__body"},_hoisted_5={class:"dialog-score"},_hoisted_6={class:"demonstration"},_hoisted_7={class:"dialog-score"},_sfc_main={__name:"PageView",setup(__props){var e,t;const appStore=useAppStore(),{configs}=useConfigStore(),{score,countDown,calcList}=storeToRefs(appStore),title=(e=configs.type)==null?void 0:e.label;appStore.setCountDown(configs.cnt),appStore.setCalcList(configs.type.value??0,(t=configs.schema)==null?void 0:t.map(s=>s.value),configs.bit.value??2,configs.cnt??0);const goBack=()=>{router.back()},showScore=ref(!1),correct=ref(0),handleSubmit=()=>{correct.value=0,showScore.value=!0;for(const{formula,value}of calcList.value)eval(formula)==Number(value)&&appStore.setScore(++correct.value,configs.cnt)},colors=[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}],percentage=computed(()=>{let s=0;for(const{value:a}of calcList.value)typeof a<"u"&&String(a).replace(/\s+/g,"")!==""&&s++;return(s/configs.cnt*100).toFixed(1)}),doFinish=()=>{};return(s,a)=>{const r=ElTag,c=ElProgress,i=ElCountdown,l=ElButton,u=ElInput,d=ElRate,p=ElDialog,f=ElPageHeader;return openBlock(),createBlock(f,{title:"返回",onBack:a[3]||(a[3]=o=>goBack())},{content:withCtx(()=>[createBaseVNode("div",_hoisted_1,[createBaseVNode("span",_hoisted_2,toDisplayString(unref(title)),1),createBaseVNode("div",null,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(configs).schema,(o,n)=>(openBlock(),createBlock(r,{style:{margin:"2px"},size:"small",key:o,type:n==0?"success":"danger"},{default:withCtx(()=>[createTextVNode(toDisplayString(o.label),1)]),_:2},1032,["type"]))),128))])])]),extra:withCtx(()=>[createBaseVNode("div",_hoisted_3,[createVNode(c,{type:"circle",indeterminate:"",percentage:percentage.value,color:colors,width:"50"},null,8,["percentage"]),createVNode(i,{format:"mm:ss",value:unref(countDown).end,onFinish:doFinish},null,8,["value"]),createVNode(l,{size:"small",type:"warning",onClick:handleSubmit,round:""},{default:withCtx(()=>[createTextVNode("提交")]),_:1})])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_4,[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(calcList),o=>(openBlock(),createBlock(u,{key:o.id,modelValue:o.value,"onUpdate:modelValue":n=>o.value=n},{prepend:withCtx(()=>[createBaseVNode("span",null,toDisplayString(o.formula+" = "),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),createVNode(p,{modelValue:showScore.value,"onUpdate:modelValue":a[2]||(a[2]=o=>showScore.value=o),"align-center":"","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},{footer:withCtx(()=>[createBaseVNode("div",_hoisted_7,[createVNode(l,{type:"success",icon:unref(check_default),circle:"",onClick:a[1]||(a[1]=o=>showScore.value=!1)},null,8,["icon"])])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_5,[createBaseVNode("span",_hoisted_6,toDisplayString(correct.value)+" / "+toDisplayString(unref(configs).cnt),1),createVNode(d,{size:"large",modelValue:unref(score),"onUpdate:modelValue":a[0]||(a[0]=o=>isRef(score)?score.value=o:null),"allow-half":"",disabled:""},null,8,["modelValue"])])]),_:1},8,["modelValue"])]),_:1})}}},PageView=_export_sfc(_sfc_main,[["__scopeId","data-v-ea9de7ac"]]);export{PageView as default};