// 学习地址：https://blog.csdn.net/qq_43363884/article/details/95948884

/*  方法1初级：
// 把所有东西都写在一个文件中了，这样数据多时，耦合度太高，不便于维护，而且mutations也不能解决异步问题
import Vue from "vue"
import Vuex from "vuex"
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state:{
        pathName: "",
        currDbSource: {},
        currJobData: {},
        DbSource: []
    },
    mutations:{
        // 保存当前菜单栏的路径
        savePath(state,pathName){
            state.pathName = pathName;
        },
        // 保存当前点击的数据源
        saveCurrDbSource(state,currDbSource){
            state.currDbSource = currDbSource;
        },
        // 保存当前点击的元数据
        saveCurrJobData(state,currJobData){
            state.currJobData = currJobData;
        },
        // 保存所有数据源
        saveDbSource(state,DbSource){
            state.DbSource = DbSource;
        }
    }
})

// 使用
// 保存数据 this.$store.commit(方法名, 参数)
// 获取变量 this.$store.state.变量名
*/

// 方法2：
// 引入相应模块，暴露出store，供vue注册后全局使用
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
 
Vue.use(Vuex);
 
export default new Vuex.Store({
  state,
  actions,
  mutations
});

// 使用
// 保存数据
/*
import { mapActions } from 'vuex';
// 2种方式
// 方法一（dispatch）
this.$store.dispatch('saveDbSource', this.DbSource);
// 方法二（映射）
// 1、通过methods方法添加映射关系 
methods: {
    ...mapActions(['saveDbSource'])
}
 // 2、使用
this.saveDbSource
*/

// 获取数据
/*
import { mapState } from 'vuex';
computed: {
    ...mapState(['DbSource']),
},
watch: {
    DbSource(currVal) {
        // 监听mapState中的变量，当数据变化（有值、值改变等），
        // 保证能拿到完整的数据，不至于存在初始化没有数据的问题，然后可以赋给本组件data中的变量
        this.currVal = currVal;
    }
}
*/

