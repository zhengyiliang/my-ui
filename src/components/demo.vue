<template>
  <div>
    <ui-button round type="warning" @click="handleClick">标题1</ui-button>
    <h1 v-show="t1">标题一</h1>
    <h2 v-show="t2">标题二</h2>
    <h3 v-show="t3">标题仨</h3>
  </div>
</template>

<script>
export default {
  props: {
    t1: Boolean,
    t2: Boolean,
    t3: Boolean,
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit('update:t1', !this.t1)
      this.$emit('update:t2', !this.t2)
      this.$emit('update:title', '哈哈哈')
    }
  }
}
</script>
