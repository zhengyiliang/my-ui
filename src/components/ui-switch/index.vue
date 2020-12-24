<template>
  <div class="ui-switch" :class="{'is-checked': value}" @click="handleClick">
    <span class="ui-switch__core" ref="core"></span>
    <!-- 用来接收name -->
    <input type="checkbox" ref="checkbox" class="ui-switch__input" :name="name" />
  </div>
</template>

<script>
export default {
  name: 'UiSwitch',
  data() {
    return {}
  },
  methods: {
    async handleClick() {
      this.$emit('input', !this.value)
      // 等待 value 发生了改变，再 setcolor
      await this.$nextTick()
      this.setColor()
    },
    setColor() {
      this.$refs.checkbox.checked = this.value
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  created() {},
  mounted() {
    // 修改开关默认颜色
    this.setColor()
  },
  computed: {},
  watched: {}
}
</script>
<style scoped lang="scss">
.ui-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .ui-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .ui-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
  }
  .ui-switch__core:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all 0.3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
  }

  &.is-checked {
    .ui-switch__core {
      border-color: #4093ff;
      background-color: #4093ff;
    }
    .ui-switch__core::after {
      left: 100%;
      margin-left: -17px;
    }
  }
  &.is-disabled .ui-switch__core {
    cursor: not-allowed;
  }
  &.is-mimicry .ui-switch__core {
    box-shadow: inset 4px 2px 6px #cacaca48,
      inset -4px -2px 6px rgba(255, 255, 255, 0.247);
  }
  &.is-mimicry .ui-switch__core::after {
    box-shadow: inset 2px 1px 3px #d9d9d9, inset -2px -1px 3px #ffffff;
  }
}
</style>
