export declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
  $el: T
  $emit: (name: string, ...args) => void
  $nextTick: (callback: () => void) => void
  $forceUpdate: () => void
}

export declare type Nullable<T> = T | null

export declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = Nullable<ComponentElRef<T>>
