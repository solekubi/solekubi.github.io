// //Deprecation
// import { defineComponent } from "vue"
// import { ElMenu } from "element-plus"
// import { useRouter, RouteRecordRaw } from "vue-router"
// import { useStore } from "/@/store"
// import "./menu.sass"

// export default defineComponent({
//   name: "Menu",
//   setup: () => {
//     const { getters, commit } = useStore()
//     const { push } = useRouter()

//     const handleMenuClick = (item: RouteRecordRaw) => {
//       commit("app/commitSetActiveMenu", item.name)
//       push({ name: item.name })
//     }

//     const menuItem = (m: RouteRecordRaw) => {
//       if (m.meta?.hidden == undefined || !m.meta.hidden) {
//         return (
//           <ElMenu.MenuItem index={m.name as string} onClick={() => handleMenuClick(m)}>
//             {{
//               default: () => <i class={m.meta?.icon}></i>,
//               title: () => <span>{m.meta?.title}</span>,
//             }}
//           </ElMenu.MenuItem>
//         )
//       }
//     }

//     const subMenuItem = (m: RouteRecordRaw) => {
//       if (m.meta?.hidden == undefined || !m.meta.hidden) {
//         return (
//           <ElMenu.SubMenu index={m.name as string}>
//             {{
//               default: () => menus(m.children),
//               title: () => (
//                 <>
//                   <i class={m.meta?.icon}></i>
//                   <span>{m.meta?.title}</span>
//                 </>
//               ),
//             }}
//           </ElMenu.SubMenu>
//         )
//       }
//     }

//     const menus = (ms: Array<RouteRecordRaw> | undefined) => {
//       if (ms == undefined || ms.length === 0) return
//       return ms.map((m) => {
//         if (m.children == undefined || m.children.length === 0) {
//           return menuItem(m)
//         } else {
//           return subMenuItem(m)
//         }
//       })
//     }

//     return () => (
//       <div id="page-menu">
//         <ElMenu uniqueOpened={true} defaultActive={getters["app/currentActiveMenu"]} collapse={getters["app/isCollapseMenu"]} backgroundColor="#545c64" textColor="#fff" activeTextColor="#ffd04b">
//           {{ default: menus(getters["app/getMenus"]) }}
//         </ElMenu>
//       </div>
//     )
//   },
// })
