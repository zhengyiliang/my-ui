<template>
  <div class="ui-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiForm',
  provide() {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  }
}
</script>
