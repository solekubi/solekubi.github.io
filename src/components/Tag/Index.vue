<template lang="pug">
#page-tag  
  .left-tag
    el-button.item-btn(v-if="showScrollBtn" :disabled="showScrollLeftBtn" icon="el-icon-arrow-left" size="mini" @click="handleSetScroll('L')")
    el-scrollbar(ref="scrollbar" @scroll="handleScroll" wrap-class="scrollbar-wrap-class" view-class="scrollbar-view-class")
      .item-tags(ref="tags")
        el-tag(size="small" type="success"
         v-for="tag in tabs" :key="tag.name"
         :closable="isClosable(tag)" 
         :effect="getEffect(tag)" 
         @click="setActiveTab(tag)"
         @close="handleCloseTab(tag)"
        ) {{tag.title}}
    el-button.item-btn(v-if="showScrollBtn" :disabled="showScrollRightBtn" icon="el-icon-arrow-right" size="mini" @click="handleSetScroll('R')")
  .right-tag
    el-button.item-btn(icon="el-icon-refresh" size="mini" @click="commitReload")
    span.item-dropdown: el-dropdown
            span.el-dropdown-link: el-button.item-btn(icon="el-icon-arrow-down" size="mini")
            template(#dropdown)
              el-dropdown-menu
                el-dropdown-item(icon="el-icon-close" @click="handleCloseCurrentTab") 关闭当前标签页
                el-dropdown-item(icon="el-icon-back" @click="commitDelLeftTab") 关闭左侧标签页
                el-dropdown-item(icon="el-icon-right" @click="commitDelRightTab") 关闭右侧标签页
                el-dropdown-item(icon="el-icon-finished" @click="commitDelOtherTab") 关闭其他标签页
                el-dropdown-item(icon="el-icon-minus" @click="handleCloseAllTab") 关闭全部标签页
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed, watch, onUnmounted, nextTick } from "vue"
import { ComponentRef } from "/#/global"
import { debounce } from "throttle-debounce"
import { useStore } from "/@/store"
import { mapGetters, mapMutations, mapActions } from "vuex"
import { defaultActiveTab, TabInfo } from "/@/store/modules/app"

declare type scrollRange = {
  start: number
  end: number
}
export default defineComponent({
  name: "Tag",
  computed: {
    ...mapGetters({
      tabs: "app/tabs",
      currentActiveTab: "app/currentActiveTab",
    }),
  },
  watch: {
    currentActiveTab: function (tag: TabInfo) {
      this.$router.push({ path: tag.path })
    },
  },
  methods: {
    ...mapActions({
      setActiveTab: "app/setActiveTab",
    }),
    ...mapMutations({
      commitSetActiveTab: "app/commitSetActiveTab",
      commitDelTab: "app/commitDelTab",
      commitDelRightTab: "app/commitDelRightTab",
      commitDelLeftTab: "app/commitDelLeftTab",
      commitDelOtherTab: "app/commitDelOtherTab",
      commitDelAllTab: "app/commitDelAllTab",
      commitReload: "app/commitReload",
    }),
    isClosable: function (tag: TabInfo) {
      return tag.path !== defaultActiveTab.path
    },
    getEffect: function (tag: TabInfo) {
      return this.currentActiveTab.path === tag.path ? "dark" : "plain"
    },
    handleCloseCurrentTab: function () {
      //设置上一个标签为激活标签
      const index = this.tabs.findIndex((t: TabInfo) => t.path === this.currentActiveTab.path)
      if (index === 0) return
      const preTag = this.tabs[index - 1]
      this.commitDelTab(this.currentActiveTab)
      this.setActiveTab(preTag)
    },
    handleCloseTab: function (tag: TabInfo) {
      if (tag.path === this.currentActiveTab.path) {
        this.handleCloseCurrentTab()
      } else {
        this.commitDelTab(tag)
      }
    },
    handleCloseAllTab: function () {
      this.commitDelAllTab()
      this.setActiveTab(defaultActiveTab)
    },
  },
  setup() {
    const { state } = useStore()
    const scrollbar = ref<
      ComponentRef<HTMLElement> & {
        resize: () => void
        setScrollLeft: (scrollLeft: number) => void
        update: () => void
      }
    >()
    const tags = ref<HTMLElement | null>(null)
    const scrollRange: scrollRange = reactive({
      start: 0,
      end: 0,
    })

    const resizeScrollRange = debounce(300, () => {
      nextTick(scrollbar.value?.update).then(() => {
        const end = Number(tags.value?.scrollWidth) - Number(tags.value?.clientWidth)
        scrollRange.start = 0
        scrollRange.end = end > 0 ? end : 0
      })
    })

    watch(
      () => state.app.isCollapseMenu,
      () => nextTick(resizeScrollRange),
    )

    onMounted(() => {
      resizeScrollRange()
      window.addEventListener("resize", resizeScrollRange)
    })

    onUnmounted(() => window.removeEventListener("resize", resizeScrollRange))

    const handleScroll = (data: { scrollLeft: number; scrollTop: number }) => {
      scrollRange.start = Math.ceil(data.scrollLeft)
    }

    const handleSetScroll = (type: string) => {
      const step = 50
      if (type === "L") {
        scrollbar.value?.setScrollLeft(scrollRange.start - step)
      } else {
        scrollbar.value?.setScrollLeft(scrollRange.start + step)
      }
    }

    const showScrollBtn = computed(() => scrollRange.end !== 0)

    const showScrollLeftBtn = computed(() => scrollRange.start === 0)

    const showScrollRightBtn = computed(() => scrollRange.end === scrollRange.start)

    return {
      scrollbar,
      tags,
      showScrollBtn,
      handleScroll,
      handleSetScroll,
      showScrollLeftBtn,
      showScrollRightBtn,
    }
  },
})
</script>
<style lang="sass">
$item-btn-width:30px
@mixin item-btn-common
  display: flex
  justify-content: center
  align-items: center
  width: $item-btn-width
  border: none
  font-size: 15px
  padding: 0
#page-tag
  @include display-grid-common
  grid-template-columns:  1fr auto
  border-top: var(--el-border-base)
  border-bottom: var(--el-border-base)
  .left-tag
    @include display-grid-common
    grid-template-columns: auto 1fr auto
    .el-scrollbar,
    .scrollbar-view-class,
    .scrollbar-wrap-class
      display: flex
      align-items: center
      width: 100%
      .item-tags
        display: flex
        width: 100%
        height: 100%
        justify-self: start
        > span
          margin: 2px
          cursor: pointer
    .item-btn
       @include item-btn-common
  .right-tag
    @include display-grid-common
    grid-template-columns: repeat(2,$item-btn-width)
    .item-btn
      @include item-btn-common
      border-radius: unset
      border-left: var(--el-border-base)
</style>
