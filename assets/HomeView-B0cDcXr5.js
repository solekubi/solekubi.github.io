import{u as C}from"./config-DZfX7e1e.js";import{r as F,s as U,a as N,c as u,w as l,E as O,o as n,b,d as a,u as t,e as d,f as i,F as c,g as S,h as I,i as R,j as M,k as T,l as j,m as H,n as L,p as P,q as z}from"./index-DYbMz_hb.js";const A=S("span",null,"分钟",-1),K={__name:"HomeView",setup(D){const _=F(),f=C(),{configs:o,schemaOptions:V,typeOptions:h,bitOptions:y}=U(f),E=N({schema:[{required:!0,message:"请选择题型！",trigger:"change"}],bit:[{required:!0,message:"请选择类型！",trigger:"change"}],type:[{required:!0,message:"请选择类型！",trigger:"change"}],cnt:[{required:!0,message:"请选择数量！",trigger:"change"}],timer:[{required:!0,message:"请选择计时！",trigger:"change"}]}),x=()=>{_.value.validate(g=>{if(g)f.setConfigFlag(!0),I.push({name:"Page"});else return R.error("必填项不能为空"),!1})};return(g,r)=>{const m=z,p=M,s=T,k=j,v=H,q=L,w=P,B=O;return n(),u(B,null,{header:l(()=>[b("配置参数")]),default:l(()=>[a(w,{model:t(o),"label-width":"auto",style:{"max-width":"600px"},ref_key:"formRef",ref:_,"status-icon":"",rules:E},{default:l(()=>[a(s,{label:"题型",prop:"schema"},{default:l(()=>[a(p,{modelValue:t(o).schema,"onUpdate:modelValue":r[0]||(r[0]=e=>t(o).schema=e),"collapse-tags":"","collapse-tags-tooltip":"","max-collapse-tags":3,multiple:"",placeholder:"请选择题型"},{default:l(()=>[(n(!0),d(c,null,i(t(V),e=>(n(),u(m,{key:e,label:e.label,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"位数",prop:"bit"},{default:l(()=>[a(p,{modelValue:t(o).bit,"onUpdate:modelValue":r[1]||(r[1]=e=>t(o).bit=e),placeholder:"选择..."},{default:l(()=>[(n(!0),d(c,null,i(t(y),e=>(n(),u(m,{key:e,label:e.label,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"类型",prop:"type"},{default:l(()=>[a(p,{modelValue:t(o).type,"onUpdate:modelValue":r[2]||(r[2]=e=>t(o).type=e),placeholder:"选择..."},{default:l(()=>[(n(!0),d(c,null,i(t(h),e=>(n(),u(m,{key:e,label:e.label,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(s,{label:"数量",prop:"cnt"},{default:l(()=>[a(k,{modelValue:t(o).cnt,"onUpdate:modelValue":r[3]||(r[3]=e=>t(o).cnt=e),"controls-position":"right",min:5,max:60},null,8,["modelValue"])]),_:1}),a(s,{label:"计时",prop:"timer"},{default:l(()=>[a(v,{modelValue:t(o).timer,"onUpdate:modelValue":r[4]||(r[4]=e=>t(o).timer=e),modelModifiers:{number:!0},style:{width:"150px"},type:"number","controls-position":"right",min:1,max:60},{append:l(()=>[A]),_:1},8,["modelValue"])]),_:1}),a(s,null,{default:l(()=>[a(q,{type:"success",onClick:x,round:""},{default:l(()=>[b("提交")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}};export{K as default};
