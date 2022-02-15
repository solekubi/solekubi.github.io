import { RouteRecordRaw } from "vue-router"

export const asyncRoute: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: () => import("/@/views/Home.vue"),
    meta: {
      title: "首页",
      icon: "el-icon-house",
    },
  },
  {
    path: "/system",
    name: "System",
    component: () => import("/@/layout/BlankLayout.vue"),
    meta: {
      title: "系统管理",
      icon: "el-icon-setting",
    },
    children: [
      {
        path: "/system/users",
        name: "User",
        component: () => import("/@/views/system/User.vue"),
        meta: {
          title: "用户管理",
          icon: "el-icon-user",
        },
      },
      {
        path: "/system/roles",
        name: "Role",
        component: () => import("/@/views/system/Role.vue"),
        meta: {
          title: "角色管理",
          icon: "el-icon-s-custom",
        },
      },
      {
        path: "/system/privilege",
        name: "Privilege",
        component: () => import("/@/views/system/Privilege.vue"),
        meta: {
          title: "权限管理",
          icon: "el-icon-s-check",
        },
      },
    ],
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("/@/layout/BlankLayout.vue"),
    meta: {
      title: "例子",
      icon: "el-icon-setting",
    },
    children: [
      {
        path: "/example/table",
        name: "Table",
        component: () => import("/@/layout/BlankLayout.vue"),
        meta: {
          title: "表格",
          icon: "el-icon-s-grid",
        },
        children: [
          {
            path: "/example/simpleTable",
            name: "SimpleTable",
            component: () => import("/@/views/example/SimpleTable.vue"),
            meta: {
              title: "简单表格",
              icon: "el-icon-s-grid",
            },
          },
        ],
      },
    ],
  },
]
