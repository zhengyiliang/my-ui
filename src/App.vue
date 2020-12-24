<template>
  <div id="app">
    <div class="row">
      <ui-button @click="handleClick">按钮</ui-button>
      <ui-button type="primary">primary</ui-button>
      <ui-button type="success">success</ui-button>
      <ui-button type="info">info</ui-button>
      <ui-button type="warning">warning</ui-button>
    </div>
    <div class="row">
      <ui-button plain>按钮</ui-button>
      <ui-button plain type="primary">primary</ui-button>
      <ui-button plain type="success">success</ui-button>
      <ui-button plain type="info">info</ui-button>
      <ui-button plain type="warning">warning</ui-button>
    </div>
    <div class="row">
      <ui-button round>按钮</ui-button>
      <ui-button round type="primary">primary</ui-button>
      <ui-button round type="success">success</ui-button>
      <ui-button round type="info">info</ui-button>
      <ui-button round type="warning">warning</ui-button>
    </div>
    <div class="row">
      <ui-button circle>按钮</ui-button>
      <ui-button circle type="primary">primary</ui-button>
      <ui-button circle type="success">success</ui-button>
      <ui-button circle type="info">info</ui-button>
      <ui-button circle type="warning">warning</ui-button>
    </div>

    <ui-dialog :visiable="false">
      <template #title>
        <h3>哈啊哈</h3>
      </template>
    </ui-dialog>
    <!-- =========================  .sync  ==================================================== -->
    <demo v-bind.sync="obj"></demo>
    <!-- 等价于 -->
    <demo v-bind:title="title" @update:title="handleTitle"></demo>
    <!-- =========================  .sync  ==================================================== -->

    <hr />
    <ui-input disabled></ui-input>
    <!-- =========================  v-model  ==================================================== -->
    <ui-input v-model="username"></ui-input>
    <!-- 等价于 -->
    <ui-input :value="username" placeholder="实质" @input="handleInput"></ui-input>
    <!-- =========================  v-model  ==================================================== -->

    <ui-input v-model="pwd" clearable type="password"></ui-input>
    <ui-input v-model="pwd" type="password" show-password></ui-input>
    {{username}}
    <hr />
    <!-- v-model 实质上就是一个语法糖，等价于 -->
    <!-- <input v-model="username" /> -->
    <!-- <input :value="username" @input="username=$event.target.value" /> -->

    <ui-switch v-model="active" active-color="red" inactive-color="green" name="options"></ui-switch>

    <hr />
    <ui-radio-group v-model="gender">
      <ui-radio label="0">男</ui-radio>
      <ui-radio label="1">女</ui-radio>
    </ui-radio-group>
    <ui-radio label="0" v-model="sex">男2</ui-radio>
    <ui-radio label="1" v-model="sex">女2</ui-radio>

    <hr />

    <ui-checkbox v-model="love"></ui-checkbox>
    <ui-checkbox-group v-model="checkArr">
      <ui-checkbox label="1"></ui-checkbox>
      <ui-checkbox label="2"></ui-checkbox>
      <ui-checkbox label="3"></ui-checkbox>
      <ui-checkbox label="4"></ui-checkbox>
    </ui-checkbox-group>
    {{checkArr}}
    <hr />
  </div>
</template>

<script>
import demo from './components/demo'
export default {
  name: 'App',
  components: {
    demo
  },
  data() {
    return {
      checkArr: ['1', '2'],
      sex: '',
      gender: '',
      active: false,
      pwd: '',
      title: '',
      username: '',
      love: true,
      obj: {
        t1: false,
        t2: false,
        t3: false
      }
    }
  },
  methods: {
    handleClick() {
      console.log('点击')
    },
    handleTitle($event) {
      console.log($event)
    },
    handleInput(val) {
      this.username = val
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .ui-button {
    margin-right: 20px;
  }
}
</style>
