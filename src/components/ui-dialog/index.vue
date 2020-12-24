<template>
  <transition name="dialog-fade">
    <!-- 遮罩 -->
    <div class="ui-dialog_wrapper" v-show="visiable" @click.self="closeDialog">
      <div
        :class="['ui-dialog', mimicry ? 'is-mimicry' : '']"
        :style="{ width, 'margin-top': top }"
      >
        <div class="ui-dialog_header">
          <!-- title支持slot插槽 -->
          <slot name="title">
            <span class="ui-dialog_title">{{ title }}</span>
          </slot>
          <ui-button
            circle
            :icon="['far', 'times-circle']"
            class="ui-dialog_headerbtn"
            @click="closeDialog"
          ></ui-button>
        </div>
        <div class="ui-dialog_body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="ui-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// 这也是为什么我们推荐以 update:myPropName 的模式触发事件取而代之。举个例子，在一个包含 title prop 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：

// this.$emit('update:title', newTitle)
// 然后父组件可以监听那个事件并根据需要更新一个本地的数据 property。例如：

// <text-document
//   v-bind:title="doc.title"
//   v-on:update:title="doc.title = $event"
// ></text-document>
// 为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：

// <text-document v-bind:title.sync="doc.title"></text-document>
// 注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的 property 名，类似 v-model。

export default {
  name: 'UiDialog',
  data() {
    return {}
  },
  methods: {
    closeDialog() {
      // this.$emit('update:visiable', false)
      this.$emit('update:visiable', false)
    }
  },
  components: {},
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visiable: {
      type: Boolean,
      default: false
    },
    mimicry: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {},
  computed: {},

  watched: {}
}
</script>
<style scoped lang="scss">
// 重点学习遮罩的实现
.ui-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: -3vh;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .ui-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      display: flex;
      justify-content: space-between;
      .ui-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ui-dialog_headerbtn {
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .d-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      // CSS 属性 word-break 指定了怎样在单词内断行
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      //   ::v-deep 相当less中的/deep/
      ::v-deep .d-button:first-child {
        margin-right: 20px;
      }
    }
  }
  // 拟态风格
  .ui-dialog.is-mimicry {
    border-radius: 12px;
    box-shadow: inset 7px 14px 23px #dadada, inset -7px -14px 23px #eeeeee;
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}

.dialog-fade-leave-active {
  animation: fade 0.39s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-3vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
