import type { ComponentRenderProxy, VNode } from "vue"

declare module "*.tsx" {
  import { defineComponent } from "vue"
  const component: ReturnType<defineComponent>
  export default component
}

declare global {
  namespace JSX {
    type Element = VNode
    type ElementClass = ComponentRenderProxy
    interface ElementAttributesProperty {
      $props: any // 定义要使用的属性名称
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
    interface IntrinsicAttributes {
      [elem: string]: any
    }
  }
}
