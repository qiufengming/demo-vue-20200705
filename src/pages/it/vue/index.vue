<template>
    <div class="vue_wrap">
        <el-row>
            <h4>1、Vue：渐进式框架</h4>
            <div class="border_radius">
                <p>渐进式代表的含义是：主张最少。</p>
                <p>它是渐进的，没有强主张，你可以在原有大系统的上面，把一两个组件改用它实现，当jQuery用；</p>
                <p>也可以整个用它全家桶开发，当Angular用；</p>
                <p>还可以用它的视图，搭配你自己设计的整个下层用。</p>
                <p>可以在底层数据逻辑的地方用OO和设计模式的那套理念，也可以函数式，都可以，它只是个轻量视图而已，只做了自己该做的事。</p>
                <p>没有多做职责之外的事。</p>
            </div>
        </el-row>
        <el-row>
            <h4>2、vue.js的两个核心：数据驱动和组件化。</h4>
        </el-row>
        <el-row>
            <h4>3、vue生命周期钩子函数有哪些？</h4>
            <div class="border_radius">
                <p>共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。</p>
                <p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMzI2MzIwNi0xMDZiMjNkMTBkOGU5YmRmLnBuZw?x-oss-process=image/format,png"></p>
            </div>
        </el-row>
        <el-row>
            <h4>4、vue 的双向绑定的原理是什么？</h4>
            <div class="border_radius">
                <p>数据劫持结合发布者-订阅者模式的方式来实现的。</p>
                <p>对数据进行劫持监听，需设置一个监听器Observer，来监听所有属性。</p>
                <p>属性发上变化，就需告诉订阅者Watcher看是否需要更新。</p>
                <p>订阅者是有很多个，需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。</p>
                <p>还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。</p>
                <p></p>
                <p>实现数据的双向绑定：</p>
                <p>1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。</p>
                <p>2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。</p>
                <p>3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。</p>
                <p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvOTM4NjY0LzIwMTcwNS85Mzg2NjQtMjAxNzA1MjIyMjU0NTgxMzItMTQzNDYwNDMwMy5wbmc?x-oss-process=image/format,png" alt="双向数据绑定流程图"></p>
                <p></p>
                <p>vue是结合数据劫持和发布订阅者模式来实现双向数据绑定的,当要读取数据的时候会自动触发方法，并且会被赋值</p>
            </div>
        </el-row>
        <el-row>
            <h4>5、vue常用的修饰符</h4>
            <div class="border_radius">
                <p>按键修饰符： .delete（捕获“删除”和”退格“键） ⇒ 用法上和事件修饰符一样，挂载在v-on:后面，语法：v-on:keyup.xxx='yyy'  &lt;inputclass = 'aaa' v-model="inputValue" @keyup.delete="onKey"/&gt; </p>
                <p>系统修饰符：.ctrl、.alt、.shift、.meta</p>
                <p>鼠标按钮修饰符：.left、.right、.middle（这些修饰符会限制处理函数仅响应特定的鼠标按钮。如：&lt;button @click.middle ="onClick"&gt;A&lt;/button&gt;  鼠标滚轮单击触发   Click默认是鼠标左键单击）</p>
                <p>其他修饰符：.lazy（在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 ，我们可以添加 lazy 修饰符，从而转变为使用 change事件进行同步，&lt;input v-model.lazy="msg" &gt;）、.number、.trim</p>
                <p>事件修饰符：.prevent() 阻止默认事件； .once() 只执行一次；.stop() 阻止冒泡； </p>
                <p></p>
                <p></p>
            </div>
        </el-row>
        <el-row>
            <h4>6、v-on可以监听多个方法</h4>
        </el-row>
        <el-row>
            <h4>7、vue中 key 值的作用</h4>
            <div class="border_radius">
                <p>给每个节点做一个唯一标识</p>
                <p>key的作用主要是为了高效的更新虚拟DOM。</p>
                <p>另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。</p>
            </div>
        </el-row>
        <el-row>
            <h4>8、Vue 组件中 data 为什么必须是函数？</h4>
            <div class="border_radius">
                <p>在 new Vue() 中，data 是可以作为一个对象进行操作的，然而在 component 中，data 只能以函数的形式存在，不能直接将对象赋值给它。</p>
                <p>当data选项是一个函数的时候，每个实例可以维护一份被返回对象的独立的拷贝，这样各个实例中的data不会相互影响，是独立的。</p>
            </div>
        </el-row>
        <el-row>
            <h4>9、v-for的优先级比v-if高。</h4>
        </el-row>
        <el-row>
            <h4>10、说出至少 4 种 vue 当中的指令和它的用法</h4>
            <div class="border_radius">
                <p>v-if(判断是否隐藏)</p>
                <p>v-for(把数据遍历出来)</p>
                <p>v-bind(绑定属性)</p>
                <p>v-model(实现双向绑定)</p>
            </div>
        </el-row>
        <el-row>
            <h4>11、vue中子组件调用父组件的方法</h4>
            <div class="border_radius">
                <p>在子组件中通过this.$parent.event来调用父组件的方法。</p>
                <p>在子组件里用$emit向父组件触发一个事件，父组件监听这个事件就行了。</p>
                <p>父组件把方法传入子组件中，在子组件里直接调用这个方法。</p>
            </div>
        </el-row>
        <el-row>
            <h4>12、vue中父组件调用子组件的方法</h4>
            <div class="border_radius">
                <p>父组件利用ref属性操作子组件方法。</p>
            </div>
        </el-row>
        <el-row>
            <h4>13、vue组件之间传值</h4>
            <div class="border_radius">
                <p>(1)父组件给子组件传值</p>
                <p> ⇒ 父组件调用子组件的时候动态绑定属性</p>
                <p> ⇒ &lt;parent :dataList='dataList'&gt;&lt;/parent&gt;</p>
                <p> ⇒ 子组件定义props接收动态绑定的属性props: ['dataList'] </p>
                <p> ⇒ 子组件使用数据</p>
                <p>(2)子组件主动获取父子间的属性和方法：</p>
                <p> ⇒ 在子组件中使用this.$parent.属性/this.$parent.方法。</p>
                <p>（3）子组件给父组件传值：</p>
                <p> ⇒ 一、使用ref属性</p>
                <p> ⇒ 父组件调用子组件时绑定属性ref</p>
                <p> ⇒ &lt;parent :ref='parent'&gt;&lt;/parent&gt;</p>
                <p> ⇒ 在父组件中使用this.$refs.parent.属性/this.$refs.parent.方法</p>
                <p> ⇒ 二、使用$emit方法</p>
                <p> ⇒ 子组件调用this.$emit('方法名‘,传值)</p>
                <p> ⇒ 父组件通过子组件绑定的'方法名'获取传值。</p>
                <p>（4）vue页面级组件之间传值</p>
                <p> ⇒ 使用vue-router通过跳转链接带参数传参。</p>
                <p> ⇒ 使用本地缓存localStorge。</p>
                <p> ⇒ 使用vuex数据管理传值。</p>
                <p>（5）说说vue的动态组件。</p>
                <p> ⇒ 多个组件通过同一个挂载点进行组件的切换，is的值是哪个组件的名称，那么页面就会显示哪个组件。</p>
                <p> ⇒ 主要考查面试这 component的 is属性</p>
                <p>（6）keep-alive内置组件的作用</p>
                <p> ⇒ 可以让当前组件或者路由不经历创建和销毁，而是进行缓存，凡是被keep-alive组件包裹的组件，除了第一次以外。不会经历创建和销毁阶段的。第一次创建后就会缓存到缓存当中。</p>
                <p>(7)递归组件的用法</p>
                <p> ⇒ 组件是可以在它们自己的模板中调用自身的。不过它们只能通过 name 选项来做这件事。</p>
                <p> ⇒ 既然是递归组件，那么一定要有一个结束的条件，否则就会使用组件循环引用，最终出现“max stack size exceeded”的错误，也就是栈溢出。那么，我们可以使用v-if="false"作为递归组件的结束条件。当遇到v-if为false时，组件将不会再进行渲染。</p>
            </div>
        </el-row>
        <el-row>
            <h4>14、怎么定义vue-router的动态路由？怎么获取传过来的值？</h4>
            <div class="border_radius">
                <p>动态路由的创建，主要是使用path属性过程中，使用动态路径参数，以冒号开头，如下：</p>
                <p>{ path: '/details/:id', name: 'Details', components: Details }</p>
                <p>访问details目录下的所有文件，如果details/a，details/b等，都会映射到Details组件上。</p>
                <p>当匹配到/details下的路由时，参数值会被设置到this.$route.params下，所以通过这个属性可以获取动态参数</p>
                <p>this.$route.params.id</p>
            </div>
        </el-row>
        <el-row>
            <h4>15、vue-router有哪几种路由守卫?</h4>
            <div class="border_radius">
                <p>路由守卫为：</p>
                <p>全局守卫：beforeEach</p>
                <p>后置守卫：afterEach</p>
                <p>全局解析守卫：beforeResolve</p>
                <p>路由独享守卫：beforeEnter</p>
            </div>
        </el-row>
        <el-row>
            <h4>16、$route和 $router的区别是什么？</h4>
            <div class="border_radius">
                <p>$router为VueRouter的实例，是一个全局路由对象，包含了路由跳转的方法、钩子函数等。</p>
                <p>$route 是路由信息对象||跳转的路由对象，每一个路由都会有一个route对象，是一个局部对象，包含path,params,hash,query,fullPath,matched,name等路由信息参数。</p>
            </div>
        </el-row>
        <el-row>
            <h4>17、vue-router响应路由参数的变化</h4>
            <div class="border_radius">
                <p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS4xMzVlZGl0b3IuY29tL2ZpbGVzL3VzZXJzLzc5My83OTMzNTg2LzIwMjAwMi9mVnd4SGpaVl9tN2p3LnBuZw?x-oss-process=image/format,png" alt=""></p>
                <p>(1)用watch 检测</p>
                <p>(2)组件内导航钩子函数</p>
                <p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS4xMzVlZGl0b3IuY29tL2ZpbGVzL3VzZXJzLzc5My83OTMzNTg2LzIwMjAwMi9GZDh6Yld4SF8zVHNLLnBuZw?x-oss-process=image/format,png" alt=""></p>
            </div>
        </el-row>
        <el-row>
            <h4>18、vue-router 传参</h4>
            <div class="border_radius">
                <p> (1)使用Params:</p>
                <p>只能使用name，不能使用path</p>
                <p>参数不会显示在路径上</p>
                <p>浏览器强制刷新参数会被清空</p>
                <p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS4xMzVlZGl0b3IuY29tL2ZpbGVzL3VzZXJzLzc5My83OTMzNTg2LzIwMjAwMi80WFpKMk83WV9JQnVxLnBuZw?x-oss-process=image/format,png" alt=""></p>
                <p>（2）使用Query：</p>
                <p>参数会显示在路径上，刷新不会被清空</p>
                <p>name 可以使用path路径</p>
                <p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS4xMzVlZGl0b3IuY29tL2ZpbGVzL3VzZXJzLzc5My83OTMzNTg2LzIwMjAwMi84RXlEWHFDVF92S1ZBLnBuZw?x-oss-process=image/format,png" alt=""></p>
            </div>
        </el-row>
        <el-row>
            <h4>19、不用Vuex会带来什么问题？</h4>
            <div class="border_radius">
                <p>一、可维护性会下降，你要想修改数据，你得维护三个地方</p>
                <p>二、可读性会下降，因为一个组件里的数据，你根本就看不出来是从哪来的</p>
                <p>三、增加耦合，大量的上传派发，会让耦合性大大的增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。</p>
            </div>
        </el-row>
        <el-row>
            <h4>20、vuex有哪几种属性？</h4>
            <div class="border_radius">
                <p>有五种，分别是 State、 Getter、Mutation 、Action、 Module。</p>
            </div>
        </el-row>
        <el-row>
            <h4>21、vuex的State特性是？</h4>
            <div class="border_radius">
                <p>一、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于与一般Vue对象里面的data</p>
                <p>二、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新</p>
                <p>三、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中</p>
            </div>
        </el-row>
        <el-row>
            <h4>22、vuex的Getter特性是？</h4>
            <div class="border_radius">
                <p>一、getters 可以对State进行计算操作，它就是Store的计算属性</p>
                <p>二、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用</p>
                <p>三、 如果一个状态只在一个组件内使用，是可以不用getters</p>
            </div>
        </el-row>
        <el-row>
            <h4>23、vuex的Mutation特性是？</h4>
            <div class="border_radius">
                <p>一、Action 类似于 mutation，不同在于：</p>
                <p>二、Action 提交的是 mutation，而不是直接变更状态。</p>
                <p>三、Action 可以包含任意异步操作</p>
            </div>
        </el-row>
        <el-row>
            <h4>24、Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？</h4>
            <div class="border_radius">
                <p>一、如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。</p>
                <p>二、如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用，并包装成promise返回，在调用处用async await处理返回的数据。如果不要复用这个请求，那么直接写在vue文件里很方便。</p>
                <p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTU0MDQ3NS8yMDE4MTEvMTU0MDQ3NS0yMDE4MTExOTE3MzgxNjYzNC0yMTIzMzIxNTY5LmpwZw?x-oss-process=image/format,png" alt=""></p>
            </div>
        </el-row>
        <el-row>
            <h4>25、vue的路由使用步骤？</h4>
            <div class="border_radius">
                <p>1.下载vue-router路由模块；</p>
                <p>2.创建路由对象；</p>
                <p>3.配置路由规则；</p>
                <p>4.将路由对象注册为vue实例对象的成员属性</p>
            </div>
        </el-row>
        <el-row>
            <h4>26、对于MVVM的理解？</h4>
            <div class="border_radius">
                <p>M（数据层） V（视图层） VM（view-model）视图模型层）用来连接（数据层）（视图层）</p>
            </div>
        </el-row>
        <el-row>
            <h4>27、vue创建组件的时候data中为什么会被return出一个对象？</h4>
            <div class="border_radius">
                <p>可以保证组件的每一次调用都是创建一个新对象，组件之间不会产生影响；</p>
            </div>
        </el-row>
        <el-row>
            <h4>28、vue路由的几种模式：</h4>
            <div class="border_radius">
                <p>两种：hash（默认） history   可以用model属性切换路由模式</p>
            </div>
        </el-row>
        <el-row>
            <h4>29、vue如何优化页面加载：</h4>
            <div class="border_radius">
                <p>使用cdn,不要打包一些公共的文件和组件库</p>
            </div>
        </el-row>
        <el-row>
            <h4>30、什么是路由懒加载：</h4>
            <div class="border_radius">
                <p>路由懒加载是通过异步的方式来加载对应的路由组件，提高页面相应速度</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </el-row>
        <el-row>
            <h4>31、vue中有哪些内置组件：</h4>
            <div class="border_radius">
                <p>component 、 slot 、  transtion 、 fliters</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </el-row>
        <el-row>
            <h4>32、ssr是什么</h4>
            <div class="border_radius">
                <p>服务端渲染</p>
                <p>什么是SPA</p>
                <p>PA是单页面应用程序，vue react angular 都是,整个项目只有一个页面；局部刷新而来；</p>
            </div>
        </el-row>

        <div class="demo_list" v-show="!isShowDemo">
            <el-row>
                <el-link class="name" @click="showDemo('1')">元素宽度可拉伸</el-link>
            </el-row>
        </div>
        <div class="demo_wrap" v-show="isShowDemo">
            <el-row>
                <el-button type="text" @click="backDemoList">&lt;&lt;返回列表</el-button>
            </el-row>
            <el-row>
                <elWidthChange v-if="activeDemo == '1'"></elWidthChange>
            </el-row>
        </div>
        <el-row>
            <el-col :span="24"></el-col>
        </el-row>
    </div>
</template>

<script>
    import elWidthChange from './elWidthChange.vue';
    export default {
        components: { elWidthChange },
        data(){
            return {
                isShowDemo: false,
                activeDemo: '',
            };
        },
        created(){
            this.initData();
        },
        mounted(){},
        methods: {
            // 初始化数据
            initData(){
                let self = this;
            },
            showDemo(demoNum){
                let self = this;
                self.isShowDemo = true;
                self.activeDemo = demoNum;
                // self.$set(self, 'activeDemo', demoNum);
            },
            backDemoList(){
                let self = this;
                self.isShowDemo = false;
                self.activeDemo = '';
            },

        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.vue_wrap{
    padding: 20px;
    .border_radius{
        border: 1px solid #999; border-radius: 10px; padding: 10px; margin: 5px 0;
        p{ padding: 3px 0; }
    }

    .demo_list{
        .name{
            background-color: #32adf5;
            border-radius: 3px;
            display: inline-block;
            padding: 2px 8px;
            margin: 3px 10px;
            font-size: 18px;
            text-decoration: none;
            color: #ecf8ff;
        }
    }
    .demo_wrap{}
}
</style>
