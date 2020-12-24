<template>
  <div class="ui-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiRadioGroup',
  data() {
    return {}
  },
  // ui-radio-group 接收到了 value 值
  // 将来还需要触发 当前组件的 input 事件
  // provide 与 inject     类似 react ----> provider/consumer
  provide() {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>
