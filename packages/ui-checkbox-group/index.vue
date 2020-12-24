<template>
  <div class="ui-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiCheckboxGroup',
  provide() {
    return {
      CheckboxGroup: this
    }
  },
  data() {
    return {}
  },

  props: {
    value: {
      type: Array
    }
  }
}
</script>
