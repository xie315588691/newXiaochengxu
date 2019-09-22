import Vue from 'vue'
import store from './store/store.js'
import Fly from 'flyio/dist/npm/wx'
// var Fly=require("flyio/dist/npm/wx") 

import App from './App'
import { Verify } from 'crypto'
//关闭vue的提示功能
Vue.config.productionTip = false
//声明当前的组件类型
App.mpType = 'app'
//将store 对象放置在Vue中为的是每个实例都可以使用。
Vue.prototype.$store = store
//fly
let fly = new Fly
Vue.prototype.$http = fly
//生成app的实例
const app = new Vue(App)
//挂载整个应用
app.$mount()
