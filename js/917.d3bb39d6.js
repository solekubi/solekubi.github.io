"use strict";(self["webpackChunkloan"]=self["webpackChunkloan"]||[]).push([[917],{8917:function(e,t,n){n.r(t),n.d(t,{default:function(){return me}});var a=n(6252);(0,a.dD)("data-v-0e40a46c");const o={class:"container"},l={class:"aside"},i={class:"content"},c={class:"header"},r={class:"tag"},s={class:"main"};function d(e,t,n,d,u,p){const m=(0,a.up)("Aside"),h=(0,a.up)("Header"),v=(0,a.up)("Tag"),b=(0,a.up)("router-view"),f=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",l,[(0,a.Wm)(m)]),(0,a._)("div",i,[(0,a._)("div",c,[(0,a.Wm)(h)]),(0,a._)("div",r,[(0,a.Wm)(v)]),(0,a.wy)((0,a._)("div",s,[e.reload?((0,a.wg)(),(0,a.j4)(b,{key:0})):(0,a.kq)("",!0)],512),[[f,!e.reload]])])])}(0,a.Cn)();var u=n(4709);(0,a.dD)("data-v-f30acf5e");const p={id:"aside"};function m(e,t,n,o,l,i){const c=(0,a.up)("Logo"),r=(0,a.up)("Menu");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a.Wm)(c),(0,a.Wm)(r)])}(0,a.Cn)(),(0,a.dD)("data-v-c7ada048");const h={key:0,class:"text"};function v(e,t,n,o,l,i){const c=(0,a.up)("el-image");return(0,a.wg)(),(0,a.iD)("div",{id:"page-logo",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[(0,a.Wm)(c,{src:"/images/logo.png"}),e.isCollapseMenu?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("span",h,"贷款系统"))])}(0,a.Cn)();var b=n(6294),f=(0,a.aZ)({name:"Logo",computed:{...(0,u.Se)({isCollapseMenu:"app/isCollapseMenu"})},methods:{handleClick:function(){this.$router.replace({path:"/"}),this.$store.dispatch("app/setActiveMenu",b.defaultActiveMenu)}}});f.render=v,f.__scopeId="data-v-c7ada048";var w=f;(0,a.dD)("data-v-9472d496");const g={id:"page-menu"};function k(e,t,n,o,l,i){const c=(0,a.up)("SubMenuItem"),r=(0,a.up)("el-menu");return(0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(r,{uniqueOpened:!0,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapseMenu,"default-active":e.currentActiveMenu.name},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.menus,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.name,record:e},null,8,["record"])))),128))])),_:1},8,["collapse","default-active"])])}(0,a.Cn)();var C=n(3577);function _(e,t,n,o,l,i){const c=(0,a.up)("SubMenuItem",!0),r=(0,a.up)("el-sub-menu"),s=(0,a.up)("MenuItem");return e.show?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[e.hasChildren(e.record)?((0,a.wg)(),(0,a.j4)(r,{key:0,index:e.record.name},{title:(0,a.w5)((()=>[(0,a._)("i",{class:(0,C.C_)(e.record.meta?.icon)},null,2),(0,a._)("span",null,(0,C.zw)(e.record.meta?.title),1)])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.record.children,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.name,record:e},null,8,["record"])))),128))])),_:1},8,["index"])):((0,a.wg)(),(0,a.j4)(s,{key:1,record:e.record},null,8,["record"]))],64)):(0,a.kq)("",!0)}function T(e,t,n,o,l,i){const c=(0,a.up)("el-menu-item");return e.show?((0,a.wg)(),(0,a.j4)(c,{key:0,index:e.record.name,onClick:e.handleMenuClick},{title:(0,a.w5)((()=>[(0,a._)("span",null,(0,C.zw)(e.record.meta?.title),1)])),default:(0,a.w5)((()=>[(0,a._)("i",{class:(0,C.C_)(e.record.meta?.icon)},null,2)])),_:1},8,["index","onClick"])):(0,a.kq)("",!0)}var D=(0,a.aZ)({name:"MenuItem",props:{record:{type:Object}},computed:{show:function(){return void 0!=this.$props.record&&(void 0==this.$props.record?.meta?.hidden||!this.$props.record.meta.hidden)}},methods:{handleMenuClick:function(){const e=this.$props.record;this.$store.dispatch("app/setActiveMenu",{name:e?.name,path:e?.path,icon:e?.meta?.icon,title:e.meta?.title})}}});D.render=T;var S=D,A=(0,a.aZ)({name:"SubMenuItem",components:{MenuItem:S},props:{record:{type:Object}},methods:{hasChildren:function(e){return void 0!=e.children&&e.children.length>0}},computed:{show:function(){return void 0!=this.$props.record&&(void 0==this.$props.record?.meta?.hidden||!this.$props.record.meta.hidden)}}});A.render=_;var M=A,W=(0,a.aZ)({name:"Menu",components:{SubMenuItem:M},computed:{...(0,u.Se)({isCollapseMenu:"app/isCollapseMenu",menus:"app/getMenus",currentActiveMenu:"app/currentActiveMenu"})}});W.render=k,W.__scopeId="data-v-9472d496";var y=W,L=(0,a.aZ)({name:"Aside",components:{Logo:w,Menu:y},setup(){return{}}});L.render=m,L.__scopeId="data-v-f30acf5e";var j=L;const I={id:"page-header"},x=(0,a._)("i",{class:"el-icon-s-fold"},null,-1),z=[x];function $(e,t,n,o,l,i){const c=(0,a.up)("el-breadcrumb-item"),r=(0,a.up)("el-breadcrumb"),s=(0,a.up)("Setting");return(0,a.wg)(),(0,a.iD)("div",I,[(0,a._)("div",{class:"fold-icon",onClick:t[0]||(t[0]=t=>e.$store.commit("app/commitCollapseMenu"))},z),(0,a.Wm)(r,{class:"breadcrumb",separator:"/"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.breadcrumbs,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.title},{default:(0,a.w5)((()=>[(0,a.Uk)((0,C.zw)(e.title),1)])),_:2},1024)))),128))])),_:1}),(0,a.Wm)(s)])}(0,a.dD)("data-v-045107ce");const R={id:"page-setting"},B={class:"el-dropdown-link"},H=(0,a._)("span",{class:"text"},[(0,a.Uk)("Admin "),(0,a._)("i",{class:"el-icon-arrow-down el-icon--right"})],-1),U=(0,a.Uk)("个人中心"),Z=(0,a.Uk)("退出登录");function q(e,t,n,o,l,i){const c=(0,a.up)("el-avatar"),r=(0,a.up)("el-dropdown-item"),s=(0,a.up)("el-dropdown-menu"),d=(0,a.up)("el-dropdown");return(0,a.wg)(),(0,a.iD)("div",R,[(0,a.Wm)(d,{trigger:"click"},{dropdown:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{icon:"el-icon-user"},{default:(0,a.w5)((()=>[U])),_:1}),(0,a.Wm)(r,{icon:"el-icon-switch-button",onClick:o.logout},{default:(0,a.w5)((()=>[Z])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a._)("span",B,[(0,a.Wm)(c,{class:"avatar",size:"medium",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),H])])),_:1})])}(0,a.Cn)();var O=n(2119),Y=n(4209),E=(0,a.aZ)({setup(e,{expose:t}){t();const{push:n}=(0,O.tv)(),a=()=>{Y.T.confirm("确认退出系统?","登出",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>n({name:"Login"}))).catch((e=>{}))},o={push:n,logout:a,useRouter:O.tv,ElMessageBox:Y.T};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});E.render=q,E.__scopeId="data-v-045107ce";var K=E,F=(0,a.aZ)({name:"Header",components:{Setting:K},computed:{...(0,u.Se)({breadcrumbs:"app/breadcrumbs"})}});F.render=$;var N=F;const P={id:"page-tag"},Q={class:"left-tag"},G={class:"item-tags",ref:"tags"},J={class:"right-tag"},V={class:"item-dropdown"},X={class:"el-dropdown-link"},ee=(0,a.Uk)("关闭当前标签页"),te=(0,a.Uk)("关闭左侧标签页"),ne=(0,a.Uk)("关闭右侧标签页"),ae=(0,a.Uk)("关闭其他标签页"),oe=(0,a.Uk)("关闭全部标签页");function le(e,t,n,o,l,i){const c=(0,a.up)("el-button"),r=(0,a.up)("el-tag"),s=(0,a.up)("el-scrollbar"),d=(0,a.up)("el-dropdown-item"),u=(0,a.up)("el-dropdown-menu"),p=(0,a.up)("el-dropdown");return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",Q,[e.showScrollBtn?((0,a.wg)(),(0,a.j4)(c,{key:0,class:"item-btn",disabled:e.showScrollLeftBtn,icon:"el-icon-arrow-left",size:"mini",onClick:t[0]||(t[0]=t=>e.handleSetScroll("L"))},null,8,["disabled"])):(0,a.kq)("",!0),(0,a.Wm)(s,{ref:"scrollbar",onScroll:e.handleScroll,"wrap-class":"scrollbar-wrap-class","view-class":"scrollbar-view-class"},{default:(0,a.w5)((()=>[(0,a._)("div",G,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.tabs,(t=>((0,a.wg)(),(0,a.j4)(r,{size:"small",type:"success",key:t.name,closable:e.isClosable(t),effect:e.getEffect(t),onClick:n=>e.setActiveTab(t),onClose:n=>e.handleCloseTab(t)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,C.zw)(t.title),1)])),_:2},1032,["closable","effect","onClick","onClose"])))),128))],512)])),_:1},8,["onScroll"]),e.showScrollBtn?((0,a.wg)(),(0,a.j4)(c,{key:1,class:"item-btn",disabled:e.showScrollRightBtn,icon:"el-icon-arrow-right",size:"mini",onClick:t[1]||(t[1]=t=>e.handleSetScroll("R"))},null,8,["disabled"])):(0,a.kq)("",!0)]),(0,a._)("div",J,[(0,a.Wm)(c,{class:"item-btn",icon:"el-icon-refresh",size:"mini",onClick:e.commitReload},null,8,["onClick"]),(0,a._)("span",V,[(0,a.Wm)(p,null,{dropdown:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{icon:"el-icon-close",onClick:e.handleCloseCurrentTab},{default:(0,a.w5)((()=>[ee])),_:1},8,["onClick"]),(0,a.Wm)(d,{icon:"el-icon-back",onClick:e.commitDelLeftTab},{default:(0,a.w5)((()=>[te])),_:1},8,["onClick"]),(0,a.Wm)(d,{icon:"el-icon-right",onClick:e.commitDelRightTab},{default:(0,a.w5)((()=>[ne])),_:1},8,["onClick"]),(0,a.Wm)(d,{icon:"el-icon-finished",onClick:e.commitDelOtherTab},{default:(0,a.w5)((()=>[ae])),_:1},8,["onClick"]),(0,a.Wm)(d,{icon:"el-icon-minus",onClick:e.handleCloseAllTab},{default:(0,a.w5)((()=>[oe])),_:1},8,["onClick"])])),_:1})])),default:(0,a.w5)((()=>[(0,a._)("span",X,[(0,a.Wm)(c,{class:"item-btn",icon:"el-icon-arrow-down",size:"mini"})])])),_:1})])])])}var ie=n(2262);function ce(e,t,n,a){var o,l=!1,i=0;function c(){o&&clearTimeout(o)}function r(){c(),l=!0}function s(){for(var r=arguments.length,s=new Array(r),d=0;d<r;d++)s[d]=arguments[d];var u=this,p=Date.now()-i;function m(){i=Date.now(),n.apply(u,s)}function h(){o=void 0}l||(a&&!o&&m(),c(),void 0===a&&p>e?m():!0!==t&&(o=setTimeout(a?h:m,void 0===a?e-p:e)))}return"boolean"!==typeof t&&(a=n,n=t,t=void 0),s.cancel=r,s}function re(e,t,n){return void 0===n?ce(e,t,!1):ce(e,n,!1!==t)}var se=n(1369),de=(0,a.aZ)({name:"Tag",computed:{...(0,u.Se)({tabs:"app/tabs",currentActiveTab:"app/currentActiveTab"})},watch:{currentActiveTab:function(e){this.$router.push({path:e.path})}},methods:{...(0,u.nv)({setActiveTab:"app/setActiveTab"}),...(0,u.OI)({commitSetActiveTab:"app/commitSetActiveTab",commitDelTab:"app/commitDelTab",commitDelRightTab:"app/commitDelRightTab",commitDelLeftTab:"app/commitDelLeftTab",commitDelOtherTab:"app/commitDelOtherTab",commitDelAllTab:"app/commitDelAllTab",commitReload:"app/commitReload"}),isClosable:function(e){return e.path!==b.defaultActiveTab.path},getEffect:function(e){return this.currentActiveTab.path===e.path?"dark":"plain"},handleCloseCurrentTab:function(){const e=this.tabs.findIndex((e=>e.path===this.currentActiveTab.path));if(0===e)return;const t=this.tabs[e-1];this.commitDelTab(this.currentActiveTab),this.setActiveTab(t)},handleCloseTab:function(e){e.path===this.currentActiveTab.path?this.handleCloseCurrentTab():this.commitDelTab(e)},handleCloseAllTab:function(){this.commitDelAllTab(),this.setActiveTab(b.defaultActiveTab)}},setup(){const{state:e}=(0,se.oR)(),t=(0,ie.iH)(),n=(0,ie.iH)(null),o=(0,ie.qj)({start:0,end:0}),l=re(300,(()=>{(0,a.Y3)(t.value?.update).then((()=>{const e=Number(n.value?.scrollWidth)-Number(n.value?.clientWidth);o.start=0,o.end=e>0?e:0}))}));(0,a.YP)((()=>e.app.isCollapseMenu),(()=>(0,a.Y3)(l))),(0,a.bv)((()=>{l(),window.addEventListener("resize",l)})),(0,a.Ah)((()=>window.removeEventListener("resize",l)));const i=e=>{o.start=Math.ceil(e.scrollLeft)},c=e=>{const n=50;"L"===e?t.value?.setScrollLeft(o.start-n):t.value?.setScrollLeft(o.start+n)},r=(0,ie.Fl)((()=>0!==o.end)),s=(0,ie.Fl)((()=>0===o.start)),d=(0,ie.Fl)((()=>o.end===o.start));return{scrollbar:t,tags:n,showScrollBtn:r,handleScroll:i,handleSetScroll:c,showScrollLeftBtn:s,showScrollRightBtn:d}}});de.render=le;var ue=de,pe=(0,a.aZ)({name:"MainLayout",computed:{...(0,u.Se)({reload:"app/reload"})},components:{Aside:j,Header:N,Tag:ue}});pe.render=d,pe.__scopeId="data-v-0e40a46c";var me=pe}}]);
//# sourceMappingURL=917.d3bb39d6.js.map