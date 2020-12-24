// import Vue from 'vue'

import UiButton from './ui-button'
import UiDialog from './ui-dialog'
import UiInput from './ui-input'
import UiSwitch from './ui-switch'
import UiRadio from './ui-radio'
import UiRadioGroup from './ui-radio-group'
import UiCheckbox from './ui-checkbox'
import UiCheckGroup from './ui-checkbox-group'
import UiForm from './ui-form'
import UiFormItem from './ui-form-item'

// 存储组件列表
const components = [
  UiButton,
  UiDialog,
  UiInput,
  UiSwitch,
  UiRadio,
  UiRadioGroup,
  UiCheckbox,
  UiCheckGroup,
  UiForm,
  UiFormItem
]
// Vue.component(UiButton.name, UiButton)
// Vue.component(UiDialog.name, UiDialog)
// Vue.component(UiInput.name, UiInput)
// Vue.component(UiSwitch.name, UiSwitch)
// Vue.component(UiRadio.name, UiRadio)
// Vue.component(UiRadioGroup.name, UiRadioGroup)
// Vue.component(UiCheckbox.name, UiCheckbox)
// Vue.component(UiCheckGroup.name, UiCheckGroup)
// Vue.component(UiCheckUiFormGroup.name, UiForm)
// Vue.component(UiFormItem.name, UiFormItem)

// 整个包的入口
// 定义 install 方法，接收 vue 作为参数，如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default { install }
