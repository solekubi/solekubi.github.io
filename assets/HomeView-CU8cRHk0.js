import{r as p,a as g,c as r,w as o,E as x,o as m,b as i,d as l,e as E,f as y,g as w,F as U,h as k,i as h,j as B,k as L,l as N,m as F,n as I}from"./index-BODvvSNm.js";const S=i("span",null,"分钟",-1),C={class:"dialog-footer"},j={__name:"HomeView",setup(D){const u=p(!0),a=g({schema:"PLUS",type:[],cnt:15,timer:10}),c=p([{label:"10",value:10},{label:"20",value:20}]);return(O,t)=>{const n=k,d=h,s=B,_=L,f=N,V=F,b=I,v=x;return m(),r(v,{modelValue:u.value,"onUpdate:modelValue":t[5]||(t[5]=e=>u.value=e),"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,title:"参数配置",width:"500","align-center":""},{footer:o(()=>[i("div",C,[l(b,{type:"primary",onClick:t[4]||(t[4]=e=>u.value=!1)},{default:o(()=>[E(" 确认 ")]),_:1})])]),default:o(()=>[l(V,{model:a,"label-width":"auto",style:{"max-width":"600px"}},{default:o(()=>[l(s,{label:"题型"},{default:o(()=>[l(d,{modelValue:a.schema,"onUpdate:modelValue":t[0]||(t[0]=e=>a.schema=e),placeholder:"请选择题型"},{default:o(()=>[l(n,{label:"加法",value:"PLUS"}),l(n,{label:"减法",value:"MINUS"}),l(n,{label:"加减混合",value:"ALL"})]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"类型"},{default:o(()=>[l(d,{modelValue:a.type,"onUpdate:modelValue":t[1]||(t[1]=e=>a.type=e),multiple:"","collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3,placeholder:"选择..."},{default:o(()=>[(m(!0),y(U,null,w(c.value,e=>(m(),r(n,{key:e,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"数量"},{default:o(()=>[l(_,{modelValue:a.cnt,"onUpdate:modelValue":t[2]||(t[2]=e=>a.cnt=e),"controls-position":"right",min:10,max:50},null,8,["modelValue"])]),_:1}),l(s,{label:"定时"},{default:o(()=>[l(f,{modelValue:a.timer,"onUpdate:modelValue":t[3]||(t[3]=e=>a.timer=e),style:{width:"150px"},type:"number","controls-position":"right",min:1,max:60},{append:o(()=>[S]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}};export{j as default};
