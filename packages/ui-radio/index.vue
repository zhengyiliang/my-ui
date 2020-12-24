<template>
  <!-- @click="handleClick" -->

  <label :class="['ui-radio', {'is-checked': label === model}]">
    {{label}}-{{model}}
    <span class="ui-radio__input">
      <span :class="['ui-radio__inner']"></span>
      <input type="radio" class="ui-radio__original" :value="label" :name="name" v-model="model" />
    </span>
    <span class="ui-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'UiRadio',
  data() {
    return {}
  },
  // 接收最外层组件的 provide
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    // handleClick() {
    //   this.$emit('input', this.label)
    // }
  },
  computed: {
    model: {
      get() {
        return this.RadioGroup.value || this.value
      },
      set(val) {
        console.log(val)
        this.isGroup
          ? this.RadioGroup.$emit('input', val)
          : this.$emit('input', val)
      }
    },

    // 用于判断 radio 是否呗 radioGroup 所包裹
    isGroup() {
      // !! 转布尔值
      return !!this.RadioGroup
    }
  }
}
</script>
<style scoped lang="scss">
.ui-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .ui-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ui-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      //   background-color: #409eff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    .ui-radio__inner.is-mimicry {
      box-shadow: inset 4px 2px 6px #cacaca48,
        inset -4px -2px 6px rgba(255, 255, 255, 0.377);
    }
    .ui-radio__inner:after {
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #fff;
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.15s ease-in;
    }
    .ui-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .ui-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.ui-radio.is-checked {
  .ui-radio__input {
    .ui-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ui-radio__label {
    color: #409eff;
  }
}
</style>
