<template>
  <div class="ui-input" :class="{'ui-input--suffix': showSuffix}">
    <!-- 如果传了 show-password，判断是否需要切换密码的显示，如果不传，则不显示 -->
    <input
      :disabled="disabled"
      :name="name"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      class="ui-input__inner"
      :class="{'is-disabled': disabled}"
      v-model="model"
    />
    <!-- 第一种方法 -->
    <!-- @input="handleInput"  :value="value"-->
    <!-- 第二种 -->
    <!-- v-model="model" -->

    <span class="ui-input__suffix" v-if="showSuffix">
      <i v-if="clearable && value" @click="clear">x</i>
      <i v-if="showPassword" @click="handlePassword">👁</i>
    </span>
  </div>
</template>

<script>
// 给普通表单元素使用 v-model
// <input type="text" v-model="mes" />
// <input v-bind:value="mes" v-on:input="mes=$event.target.value" />

// 给组件使用 v-model 指令，实质上相当于给组件传递了 value 属性以及监听了 input 事件
// <ui-input v-model="msg" />
// 等价于
// <ui-input v-bind:value="mes" v-on:input="mes=arguments[0]"></ui-input>

export default {
  name: 'UiInput',
  data() {
    return {
      passwordVisible: false // 用途控制是否显示密码框
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // handleInput(e) {
    //   this.$emit('input', e.target.value)
    // },
    clear() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    },
    model: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.ui-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ui-input__textarea {
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    padding: 10px 15px;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .ui-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }

    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.ui-input--suffix {
  .ui-input_inner {
    padding-right: 30px;
  }
  .ui-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    & .active {
      color: #666;
    }
  }
}
</style>
