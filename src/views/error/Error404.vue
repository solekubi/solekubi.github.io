<template lang="pug">
#page-error
  .page-error
    .title 404
    .desc Oops. Nothing here...
    el-button(@click="$router.replace('/')") Go Home
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "Error404",
})
</script>
<style lang="sass" scoped>
#page-error
  @include display-flex-common
  background-color: var(--el-color-primary)
  .page-error
    @include display-flex-common
    flex-direction: column
    justify-content: center
    .title
      font-size: 30vh
      text-align: center
      color: #fff
    .desc
      opacity: 0.4
      font-size: 3.75rem
      font-weight: 300
      letter-spacing: -.00833em
      line-height: 3.75rem
      padding-bottom: 20px
</style>
