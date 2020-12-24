<template>
  <div class="ui-form-item">
    <label class="ui-form-item__label" :style="labelStyle">{{ label }}</label>
    <div class="ui-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DFormItem',
  data() {
    return {}
  },
  inject: ['Form'],
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    labelStyle() {
      return { width: this.Form.labelWidth }
    }
  }
}
</script>
<style scoped lang="scss">
.ui-form-item {
  margin-bottom: 22px;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  .ui-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .ui-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    &::before,
    &::after {
      display: table;
      content: '';
    }
  }
}
</style>
