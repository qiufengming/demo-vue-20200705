webpackJsonp([1],{"1uuo":function(t,p){},FLVw:function(t,p){},J4eM:function(t,p){},LPIQ:function(t,p){},Lm4z:function(t,p){},NHnr:function(t,p,s){"use strict";Object.defineProperty(p,"__esModule",{value:!0});var n={};s.d(n,"savePath",function(){return V}),s.d(n,"saveCurrDbSource",function(){return E}),s.d(n,"saveCurrJobData",function(){return Y}),s.d(n,"saveDbSource",function(){return U}),s.d(n,"saveSelectJobMeta",function(){return T}),s.d(n,"saveSpecialSubject",function(){return L}),s.d(n,"saveDuplicateJobMeta",function(){return B});var e={};s.d(e,"savePath",function(){return I}),s.d(e,"saveCurrDbSource",function(){return N}),s.d(e,"saveCurrJobData",function(){return J}),s.d(e,"saveDbSource",function(){return K}),s.d(e,"saveSelectJobMeta",function(){return j}),s.d(e,"saveSpecialSubject",function(){return $}),s.d(e,"saveDuplicateJobMeta",function(){return W});var a=s("7+uW"),o=s("zL8q"),i=s.n(o),r={render:function(){var t=this.$createElement,p=this._self._c||t;return p("div",{attrs:{id:"app"}},[p("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")({name:"App"},r,!1,function(t){s("J4eM")},null,null).exports,c=s("/ocq"),u={render:function(){var t=this,p=t.$createElement,s=t._self._c||p;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,p=t.$createElement,s=t._self._c||p;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,p=this._self._c||t;return p("ul",[p("li",[p("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),p("li",[p("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),p("li",[p("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),p("li",[p("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;var d={render:function(){var t=this.$createElement,p=this._self._c||t;return p("div",{staticClass:"confirm-button"},[p("button",{on:{click:this.getButtonClick}},[this._v(" "+this._s(this.text||"确认"))])])},staticRenderFns:[]};var f=s("VU/8")({name:"confirm-button",props:["text"],data:function(){return{msg:!0}},methods:{getButtonClick:function(){this.$emit("message",this.msg)}}},d,!1,function(t){s("x4K+")},null,null).exports,b={name:"First",components:{Confirm:f},data:function(){return{mymsg:"欢迎来到第一个页面呢~"}},methods:{getMessage:function(t){alert(t)}}},m={render:function(){var t=this.$createElement,p=this._self._c||t;return p("div",{staticClass:"first-app"},[this._v("\n    "+this._s(this.mymsg)+"\n    "),p("Confirm",{attrs:{text:"注册"},on:{message:this.getMessage}}),this._v(" "),p("p",[p("router-link",{attrs:{to:"/second"}},[this._v("去第二个页面")])],1)],1)},staticRenderFns:[]};var g=s("VU/8")(b,m,!1,function(t){s("VsaA")},"data-v-38637f3e",null).exports,h={name:"First",components:{Confirm:f},data:function(){return{mymsg:"这是第二个页面哦~"}},methods:{getMessage:function(t){alert(t)}}},y={render:function(){var t=this.$createElement,p=this._self._c||t;return p("div",{staticClass:"second-app"},[this._v("\n    "+this._s(this.mymsg)+"\n    "),p("p",[p("router-link",{attrs:{to:"/first"}},[this._v("去第一个页面")])],1)])},staticRenderFns:[]};var v=s("VU/8")(h,y,!1,function(t){s("FLVw")},null,null).exports,x={data:function(){return{initValue:"",defaultConfig:{UEDITOR_HOME_URL:Object({NODE_ENV:"production"}).BASE_URL?Object({NODE_ENV:"production"}).BASE_URL+"UEditor/":"/static/UEditor/",enableAutoSave:!1},ueditorCont:"",ueditorHtml:""}},props:{},computed:{},created:function(){},mounted:function(){this.initUEditor()},methods:{initUEditor:function(){this.$refs.script.id=this.id="editor_"+Math.random().toString(16).slice(-6),this.editor=UE.getEditor(this.id,{})},getEditorHtml:function(){this.ueditorCont=this.editor.getContent(),this.ueditorHtml=this.editor.getAllHtml()}}},_={render:function(){var t=this,p=t.$createElement,s=t._self._c||p;return s("div",{staticClass:"ueditor-app"},[s("script",{ref:"script",attrs:{name:"myueditor",type:"text/plain"}}),t._v(" "),s("el-row",[s("el-button",{attrs:{type:"primary"},on:{click:t.getEditorHtml}},[t._v("获取编辑器内容")])],1),t._v(" "),s("p",[t._v("getContent:")]),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.ueditorCont)}}),t._v(" "),s("p",[t._v("getAllHtml:")]),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.ueditorHtml)}})],1)},staticRenderFns:[]};var C=s("VU/8")(x,_,!1,function(t){s("OcrW")},"data-v-c5c9b6ca",null).exports,M={components:{},data:function(){return{filterText:"",data:[{id:1e5,label:"单片机原理及其应用​",children:[{id:11e4,label:"1 单片机的基础知识",children:[{id:110001,label:"1.1 不同进位计数制及其互换"},{id:110002,label:"1.2 带符号的二进制数"},{id:110003,label:"1.3 BCD码及文字符号代码"},{id:110004,label:"1.4 单片机系统的组成"},{id:110005,label:"1.5 8051单片机的结构"},{id:110006,label:"1.6 8051单片机的复位和低功耗工作方式"}]},{id:12e4,label:"2 MCS．51指令系统",children:[{id:120001,label:"2.1 概述"},{id:120002,label:"2.2 数据传送指令"},{id:120003,label:"2.3 算术与逻辑运算指令"},{id:120004,label:"2.4 控制转移指令"},{id:120005,label:"2.5 位操作指令"}]},{id:13e4,label:"3 汇编语言程序设计",children:[{id:130001,label:"3.1 汇编语言程序的格式"},{id:130002,label:"3.2 伪指令"},{id:130003,label:"3.3 汇编语言程序的编写步骤及基本结构"},{id:130004,label:"3.4 程序设计举例"}]}]}],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(t){this.$refs.tree.filter(t)}},methods:{filterNode:function(t,p){return!t||-1!==p.label.indexOf(t)},nodeClick:function(t,p,s){var n=t.id;!t.children||t.children.length;document.getElementById("nav_"+n).scrollIntoView()}}},q={render:function(){var t=this,p=t.$createElement,s=t._self._c||p;return s("div",{staticClass:"left-nav"},[s("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:t.filterText,callback:function(p){t.filterText=p},expression:"filterText"}}),t._v(" "),s("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:t.data,props:t.defaultProps,"default-expand-all":"","filter-node-method":t.filterNode},on:{"node-click":t.nodeClick}})],1)},staticRenderFns:[]};var z=s("VU/8")(M,q,!1,function(t){s("U0EK")},"data-v-186c6947",null).exports,A={render:function(){var t=this.$createElement,p=this._self._c||t;return p("div",{staticClass:"full-text"},[p("div",{staticClass:"doc-content",domProps:{innerHTML:this._s(this.docContent)}})])},staticRenderFns:[]};var k={components:{fullText:s("VU/8")({components:{},data:function(){return{docName:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);">单片机原理及其应用</span></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本书是根据普通高等院校机电类的教学计划，以及对“单片机原理及其应用”课程的基本要求而编写的教材。内容包括单片机的基本原理、<a target="_blank" href="https://baike.baidu.com/item/8051/3624046" style="color: rgb(19, 110, 194); text-decoration-line: none;">8051</a>系列单片机的结构、MCS-51指令系统、编程技巧、存储器的扩展方法、中断、并口、串口、定时/计数器的结构与原理、功能器件的应用、<a target="_blank" href="https://baike.baidu.com/item/C/7252092" style="color: rgb(19, 110, 194); text-decoration-line: none;">C</a>语言编程，以及单片机控制系统的硬件设计、软件调试等。由于本课程是实践性较强的课程，所以在内容上既注意讲述有关单片机的基础理论，也注意介绍在开发应用中会遇到的实际问题。 为适应近年来单片机技术的发展，本书强调功能器件的原理与应用、存储器与接口的串行扩展技术、对PC的串行通信、KEIL C51软件的使用以及有关操作调试方面的内容，同时有小少应用实例，以提高学生开发单片机应用系统的能力。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本书可作为普通高等院校本科机电类专业有关“单片机原理及应用”、“单片机控制系统”、“单片机接口”之类课程的教材，也可以供高职、高专、电大作为教学参考书或教材使用。此外，也可供从事单片机控制系统开发工作的工程技术人员学习参考。</p><p><br/></p>',chapter1:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 24px;">1 单片机的基础知识</span></p>',chapter2:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 24px;">2 MCS. 51指令系统</span></p>',chapter3:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 24px;">3 汇编语言程序设计</span></p>',rule1_1:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.1 不同进位计数制及其互换</span></p><p></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在学习51之前，最先接接触到的是Arduino，这个东西上手确实十分的简单，可以做出来一些小玩意，但是它的性能终究是不够强大，对于一些比较厉害的作品，用Arduino就显得心有余而力不足了，所以现在开始学习51和stm32。51的学习在大学本科阶段，在学校课堂上学到的基本上是一些理论知识，这些东西也确实有一定的必要，毕竟掌握了都是自己的。所以说我准备对这些理论的知识进行一个整理。好，废话不多说，现在切入正题。</p><p>&nbsp; &nbsp; &nbsp; 对于一般的大学教材，前面两章基本上都是对单片机的一些基本的介绍，主要就是一些对单片机硬件结构认识过程，这个主要是让我们有个总体的认识，开始适应单片机的学习。这些东西就忽略了吧。就从51系列单片机的指令系统开始吧。这里使用汇编语言编写程序的。（以上都是废话，自动忽略）</p><p><br/></p>',rule1_2:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.2 带符号的二进制</span></p><p></p><p>&nbsp; （1）总共111条指令</p><p>（单字节指令49条，双字节指令45条，三字节指令17条）</p><p>（一个机器周期、12个时钟震荡周期指令64条，两个机器周期、24个时钟震荡周期指令45条、乘除两条指令位4个机器周期）</p><p>（12MHZ晶振：机器周期位1us）</p><p>（2）51指令不区分大小写</p><p>（3）指令格式：操作码+操作数</p>',rule1_3:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.3 BCD码及文字符号代码</span></p><p></p><p>（1）寄存器寻址方式：MOV A,Rn<br/></p><p>（2）直接寻址方式：MOV A,40H</p><p>（寻址范围：第一：内部RAM的128个单元、第二：特殊功能寄存器SFR，除了以单元形式外还能用寄存器符号形式：即MOV A,80H==MOV A,P0）</p><p>（3）寄存器间接寻址：（寄存器中放的是操作数地址、寄存器前面加标志符@）例如：MOV R1,#40H MOV A ,@R1</p><p>（寻址范围：第一：访问内部RAM、第二：片外数据存储器的64k字节的间接寻址、第三：片外的数据存储器的低256字节、第四：堆栈区）</p><p>（4）立即寻址方式：（操作数在指令中直接给出，需在操作数前面加上#，如果首位是A-F，前面还加0）例如：MOV A,#40H MOV A,#0FFH</p><p>（5）基址寄存器加变址寄存器间址寻址方式：（以DPTRPC作为基址寄存器，以累加器A作为变址寄存器）</p><p>（6）位寻址方式：例如：MOV A,40H 把40H的值送到进位位C</p><p>（寻址范围：第一：内部RAM位寻址区、第二：特殊功能寄存器中的可寻址位）</p><p>（7）相对寻址方式：（目的地址=转移指令所在地址+转移指令字节数+rel（带符号的8位二进制数的补码数））</p><p>（1）总共111条指令<br/></p><p>（单字节指令49条，双字节指令45条，三字节指令17条）</p><p>（一个机器周期、12个时钟震荡周期指令64条，两个机器周期、24个时钟震荡周期指令45条、乘除两条指令位4个机器周期）</p><p>（12MHZ晶振：机器周期位1us）</p><p>（2）51指令不区分大小写</p><p>（3）指令格式：操作码+操作数</p>',rule1_4:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.4 单片机系统的组成</span></p><p></p><p>（1）分类介绍：</p><p>数据传送类（28条）</p><p>算数操作类（24条）</p><p>逻辑运算类（25条）</p><p>控制转移类（17条）</p><p>位操作类 （17条）</p><p>（2）指令中符号的意义：</p><p>Rn当前寄存器区8个工作寄存器</p><p>Ri当前选中的寄存器区中可做间接寻址寄存器的2个寄存器</p><p>Direct 直接地址，即8位内部数据存储单元或者特殊功能寄存器地址</p><p>#data包含指令中的8位立即数</p><p>#data包含指令中的16位立即数</p><p>rel相对转移指令中的偏移量，8位带符号的补码数</p><p>DPTR数据指针，可用作16位的数据地址寄存器</p><p>bit内部RAM或者SFR中直接寻址位</p><p>C（Cy）进位标志位或者位处理机制中的累加器</p><p>addr11 11位目的地址</p><p>addr16 16位目的地址</p><p>@间接寻址寄存器</p><p>（x）x中的内容</p><p>（（X））由X寻址的单元中的内容</p><p>----&gt;箭头右边内容被箭头左边所替代</p><p>（1）寄存器寻址方式：MOV A,Rn<br/></p><p>（2）直接寻址方式：MOV A,40H</p><p>（寻址范围：第一：内部RAM的128个单元、第二：特殊功能寄存器SFR，除了以单元形式外还能用寄存器符号形式：即MOV A,80H==MOV A,P0）</p><p>（3）寄存器间接寻址：（寄存器中放的是操作数地址、寄存器前面加标志符@）例如：MOV R1,#40H MOV A ,@R1</p><p>（寻址范围：第一：访问内部RAM、第二：片外数据存储器的64k字节的间接寻址、第三：片外的数据存储器的低256字节、第四：堆栈区）</p><p>（4）立即寻址方式：（操作数在指令中直接给出，需在操作数前面加上#，如果首位是A-F，前面还加0）例如：MOV A,#40H MOV A,#0FFH</p><p>（5）基址寄存器加变址寄存器间址寻址方式：（以DPTRPC作为基址寄存器，以累加器A作为变址寄存器）</p><p>（6）位寻址方式：例如：MOV A,40H 把40H的值送到进位位C</p><p>（寻址范围：第一：内部RAM位寻址区、第二：特殊功能寄存器中的可寻址位）</p><p>（7）相对寻址方式：（目的地址=转移指令所在地址+转移指令字节数+rel（带符号的8位二进制数的补码数））</p><p>（1）总共111条指令<br/></p><p>（单字节指令49条，双字节指令45条，三字节指令17条）</p><p>（一个机器周期、12个时钟震荡周期指令64条，两个机器周期、24个时钟震荡周期指令45条、乘除两条指令位4个机器周期）</p><p>（12MHZ晶振：机器周期位1us）</p><p>（2）51指令不区分大小写</p><p>（3）指令格式：操作码+操作数</p>',rule1_5:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.5 8051单片机的结构</span></p><p></p><p><img src="https://img-blog.csdnimg.cn/20191127153757118.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjkyMzE5,size_16,color_FFFFFF,t_70"/></p><p>80C51单片机的内部资源主要包括：</p><p>·1个8位中央处理器（CPU）；</p><p>·1个内震荡器和时钟电路；</p><p>·4KB片内程序存储器（ROM）；</p><p>·256字节的片内RAM；</p><p>·2个16位定时器/计时器；</p><p>·可寻址64KB外部程序存储器和64KB数据存储空间的控制电路；</p><p>·4个8位双向I/O口；</p><p>·1个全双工串行口；</p><p>·5个中断源。</p>',rule1_6:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.5 8051单片机的复位和低功耗工作方式</span></p><p></p><p>CPU可分为运算器和控制器两部分</p><p>2.1 控制器</p><p>（1）程序计数器PC（Program Counter）</p><p>16位的专用寄存器，其中存放着下一条要执行的指令的首地址，即PC内容决定着程序的运行轨迹。当CPU要取指令时,PC的内容就会出现在地址总线上；取出指令后，PC内容可自动加1，以保证程序顺序执行。</p><p>系统复位后，PC的内容会被自动赋为0000H，这表明复位后CPU将程序存储器的0000H地址处的指令开始运行。</p><p>（2）指令寄存器IR（Instruction Register）</p><p>一个8位寄存器，用于暂存待执行的指令，等待译码。</p><p>（3）指令译码器ID（Instruction Decoder）</p><p>（4）数据指针DPTR（Data Pointer）</p><p>DATR可以用来存放内ROM的地址，也可以用来存放片外RAM和片外ROM的地址。</p><p>2.2运算器</p><p>（1）累加器ACC（Accumulator）</p><p>（2）算术逻辑部件ALU（Arithmetic Logic Unit）</p><p>（3）程序状态字寄存器PSW（Program State Word）</p><p>MCS-51外部引脚及功能</p><p>采用HMOS制造工艺的51单片机一般采用40只引脚的双列直插封装（DIP）。</p><p>采用CHMOS制造工艺51单片机还可采用44只引脚方形封装方式。</p><p>存储器划分的方法</p><p>4.1 存储结构</p><p>普林斯顿结构：指令存储器和程序存储合并在一起。</p><p>哈佛结构：指令存储器和数据存储器分开设置。</p><p>4.2 存储空间的划分</p><p>物理地址：4个存储空间。即片内ROM,片外ROM,片内RAM，片外RAM。</p><p>逻辑地址：由于片内、片外程序存储器是统一编址的，因此逻辑上只有3个存储空间，即程序存储器，片内数据存储器，片外存数据储器。</p><p>80C51单片机的内部资源主要包括：<br/></p><p>·1个8位中央处理器（CPU）；</p><p>·1个内震荡器和时钟电路；</p><p>·4KB片内程序存储器（ROM）；</p><p>·256字节的片内RAM；</p><p>·2个16位定时器/计时器；</p><p>·可寻址64KB外部程序存储器和64KB数据存储空间的控制电路；</p><p>·4个8位双向I/O口；</p><p>·1个全双工串行口；</p><p>·5个中断源。</p>',rule2_1:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.1 概述</span></p><p></p><p><span style="color: rgba(0, 0, 0, 0.75); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-variant-ligatures: common-ligatures; background-color: rgb(255, 255, 255);">&nbsp;&nbsp;&nbsp;&nbsp;P0~P3口都可作为准双向通用I/O口提供给用户，其中只有P0需要外接上拉电阻；在需要扩展片外存储器时，P2口作为其他地址先接口，P0口作为其他地址线/数据线复用接口，此时它是真正的双向口。P3口用第二输出功能。</span></p>',rule2_2:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.2 数据传送指令</span></p><p></p><p>第一节介绍了一些预备知识，如下：<br/></p><p>各种名词定义</p><p>各进制转化及与或非运算关系</p><p>介绍了8051的内部结构及引脚定义</p><p>C语言语法知识</p><p>其中各名词定义如下：</p><p>单片机：集成CPU、存储器芯片、I/O接口芯片的微处理器。</p><p>CPU：由运算和控制逻辑组成，同时还包括中断系统和部分外部特殊功能寄存器；</p><p>RAM：用以存放可以读写的数据，如运算的中间结果、最终结果以及欲显示的数据；</p><p>ROM：用以存放程序、一些原始数据和表格；</p><p>I/O口：四个8位并行I/O口，既可用作输入，也可用作输出；</p><p>T/C：两个定时/记数器，既可以工作在定时模式，也可以工作在记数模式；</p><p>各进制转换已有知识储备不再做介绍，其中与或非关系有简便表示方法</p><table><tbody><tr class="firstRow"><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">运算关系</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">数学表示</td></tr><tr><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">与</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">*</td></tr><tr><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">或</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">+</td></tr><tr><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">非</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">反</td></tr><tr><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">异或</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">-</td></tr></tbody></table><p>引脚定义视不同单片机而定</p><p>C语言语法知识已储备不再做笔记</p>',rule2_3:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.3 算术与逻辑运算指令</span></p><p></p><p>单片机主要掌握以下几点</p><p><br/></p><p>最小系统能够运行起来的必要条件。</p><p>1.电源 2.晶振3.复位电路</p><p>对单片机任意IO口的随意操作</p><p>1.输出控制电平高低2.输出检测电平高低。</p><p>定时器：重点掌握最常用的方式</p><p>中断：外部中断、定时器中断、串口中断</p><p>串口通信：单片机之间、单片机与计算机间</p><p>单片机工作的基本时序</p><p><br/></p><p>机器周期和指令周期</p><p>（1） 振荡周期: 也称时钟周期, 是指为单片机提供时钟脉冲信号的振荡源的周期，TX实验板上为11.0592MHZ。</p><p>（2） 状态周期: 每个状态周期为时钟周期的 2 倍, 是振荡周期经二分频后得到的。</p><p>（3） 机器周期: 一个机器周期包含 6 个状态周期S1~S6, 也就是 12 个时钟周期。 在一个机器周期内, CPU可以完成一个独立的操作。</p><p>（4） 指令周期: 它是指CPU完成一条操作所需的全部时间。 每条指令执行时间都是有一个或几个机器周期组成。MCS - 51 系统中, 有单周期指令、双周期指令和四周期指令。</p>',rule2_4:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.4 控制转移指令</span></p><p></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><p>Led的工作原理:</p><p>二极管通常的正向导通电压是1.8V到2.2V之间，工作电流一般在1mA～20mA之间。其中，当电流在1mA～5mA之间变化时，随着通过发光二极管(LED)的电流越来越大，我们的肉眼会感觉到这个小灯越来越亮，当电流从5mA～20mA之间变化时，我们看到的发光二极管的亮度基本上没有什么太大变化了。当电流超过20mA时，LED就会有烧坏的危险了，电流越大，烧坏的也就越快。所以我们在使用过程中应该特别注意他在电流参数上的设计要求。</p><p><br/></p><p>四、特殊功能寄存器声明</p><p><br/></p><p>第一条语句是： sfr P0 = 0x80；</p><p>SFR这个关键字，是51单片机特有的，他的作用是定义一个单片机特殊功能寄存器(special function register)。51单片机内部有很多个小模块，每个模块有8个开关。每个模块呢，都有一个房间和唯一的房间号。那么P0就是一个功能模块，就住在了0x80这个房间里，我们就是通过设置P0的内部这个模块的8个开关，来让单片机的P0这8个IO口输出高电平或者低电平的。</p><p>第二条语句是： sbit LED = P0^0;</p><p>这个sbit，就是对刚才所说的SFR里边的8个开关其中的一个进行定义。经过上边第二条语句后，以后只要在程序里写LED，就代表了P0.0口(“^”这个符号在数字键6上边)，注意这个P必须大写，也就是说我们给P0.0又取了一个更形象的名字叫做LED。</p><p><br/></p><p>五、keil软件的使用及模板搭建</p><p>建立如图所示的工程文件：</p>',rule2_5:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.5 位操作指令</span></p><p></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><p>51单片机的特点</p><p><br/></p><p>集成度高，抗干扰能力强，可靠性高。</p><p>开发性能好，开发周期短，控制能力强。</p><p>低功耗，低电压，具有掉电保护功能，广泛用于智能仪器仪表中。</p><p>通用性和灵活性好。</p><p>电平特性</p><p><br/></p><p>TTL电平 ：+5V（1） 0V（0）。’</p><p>RS-232C对电器特性、逻辑电平和各种信号线功能都作了规定。</p><p>在TxD和RxD上：逻辑1(MARK)=-3V～-15V</p><p>逻辑0(SPACE)=+3～+15V</p><p>51单片机的数制：二进制</p><p>51单片机的数据类型：</p><p><br/></p><p>unsigned int，int</p><p>unsigned short ，short</p><p>unsigned long， long</p><p>unsigned char ， char</p><p>unsigned float ，float</p><p>unsigned double，double</p><p>51单片机是定点芯片，所以计算浮点数据是比较慢的，51主要用于控制</p><p>51单片机的结构（哈弗结构）</p><p><br/></p><p>内部资源</p><p><br/></p><p>8位的CPU</p><p>片内振荡器和时钟电路</p><p>4KB片内程序存储器（ROM）</p><p>256字节的片内RAM</p><p>2个16位定时器/计数器（52有3个定时器）</p><p>可寻址64KB外部程序存储器和64KB数据存储空间的控制电路</p><p>4个8位双向I/O口</p><p>1个USART</p><p>5个中断源</p><p>特殊寄存器</p><p><br/></p><p>程序计数器PC：存放下一条要执行指令的地址。</p><p><br/></p><p>指令寄存器IR：8位，用于暂存待执行的指令，等待译码</p><p>指令译码器：对指令寄存器中的指令进行译码，降指令转变成执行该指令所需的电信号</p><p>数据指针DPTR：16位专用地址指针寄存器，由2个8位DPH和DPL拼装而成，可分开使用。DPTR可以用来存放片内ROM地址，也可以存放片外的RAM，ROM地址。</p><p>累加器ACC：8位，通过暂存器与ALU相连。是CPU工作中使用最频繁的寄存器，用来存放一个操作数或中间结果。</p><p>算数逻辑部件ALU：由加法器和其他部件组成，用于四则运算和逻辑运算等功能，两个操作数一个由A通过暂存器2输入，另一个有暂存器1输入，运算结果的状态传给PSW</p><p>程序状态字寄存器PSW：8位，用于存放共享在运行时的各种状态信息。</p><p>CY（7th）：进位标志位，操作结果有进位或借位时CY置1，否则清0</p><p>AC（6th）：辅助进位，低4位产生进位是置1</p><p>RS1，RS0（4th，3rd）:工作寄存器组指针，用于选择CPU当前工作的寄存器组（R0~R7）</p><p>OV（2nd）：溢出标志，指示运算时是否发生溢出，OV = 第七位和第六位的异或</p><p>P（0ro）：奇偶校验位</p><p>储存器结构：哈弗结构</p><p><br/></p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>片内数据存储器：00H~ FFH -&gt;片内RAM256B</p></li><li><p>片外数据存储器：0000H~FFFFH -&gt;片外RAM64KB</p></li><li><p>片内程序存储器 ：0000H~0FFFH（EA = 1）-&gt;片内ROM4KB</p></li><li><p>片外程序存储器：0000H~0FFFH（EA= 0） 1000H~FFFFH -&gt;片外ROM64KB</p></li></ul><p><br/></p>',rule3_1:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">3.1 汇编语言程序的格式</span></p><p></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><ol class="custom_num list-paddingleft-1"><li class="list-num-1-1 list-num-paddingleft-1"><p><span style="font-size: 14px;">1 单片机与其他常见微机（如ＰＣ机）有什么不同？它是什么独特优点？80C51系列单片机在片内集成了哪些主要逻辑功能部件？各个逻辑部件的主要功能是什么？</span></p></li><li class="list-num-1-2 list-num-paddingleft-1"><p><span style="font-size: 14px;">2 80C51系列单片机有哪些信号需要芯片引脚以第二功能的方式提供？</span></p></li><li class="list-num-1-3 list-num-paddingleft-1"><p><span style="font-size: 14px;">3 80C51单片机的“ALE”信号、“/EA”信号有何功能？在使用80C31时，它们的信号引脚应如何处理？</span></p></li><li class="list-num-1-4 list-num-paddingleft-1"><p><span style="font-size: 14px;">4 80C51存储器在结构上有何特点？在物理上和逻辑上各有哪几种地址空间？访问片内RAM和片外RAM的指令格式有何区别？</span></p></li><li class="list-num-1-5 list-num-paddingleft-1"><p><span style="font-size: 14px;">5 片内RAM低128单元划分为哪三个主要部分？各部分主要功能是什么？</span></p></li><li class="list-num-1-6 list-num-paddingleft-1"><p><span style="font-size: 14px;">6 80C51设有4个通用工作寄存器组，有什么特点？如何选用？如何实现工作寄存器现场保护？</span></p></li><li class="list-num-1-7 list-num-paddingleft-1"><p><span style="font-size: 14px;">7 特殊功能寄存器的地址范围是多少？哪些特殊功能寄存器可以位操作？</span></p></li><li class="list-num-1-8 list-num-paddingleft-1"><p><span style="font-size: 14px;">8 堆栈有哪些功能？堆栈指示器（SP）的作用是什么？在程序设计时，为什么还要对SP重新赋值？</span></p></li><li class="list-num-1-9 list-num-paddingleft-1"><p><span style="font-size: 14px;">9 为什么说80C51具有很强的布尔（位）处理功能？共有多少单元可以位寻址？采用布尔处理有哪些优点？</span></p></li><li class="list-num-1-10 list-num-paddingleft-1"><p><span style="font-size: 14px;">10 80C51单片机的时钟周期、机器周期、指令周期有何区别？它们之间有何关系？单片机晶振频率与哪些工作参数有关？</span></p></li><li class="list-num-1-11 list-num-paddingleft-1"><p><span style="font-size: 14px;">11 单片机有几种复位方法？对复位信号有何要求？复位后机器的初始状态如何，即各寄存器的状态如何？</span></p></li><li class="list-num-1-12 list-num-paddingleft-1"><p><span style="font-size: 14px;">12 80C51的4个I/O口P0~P3在使用上有哪些分工和特点？试比较各口的特点？何谓分时复用总线？P3口的第二变异功能有哪些？</span></p></li><li class="list-num-1-13 list-num-paddingleft-1"><p><span style="font-size: 14px;">13 80C51端口P0~P3作通用I/O口时，在输入引脚数据时，应注意什么？</span></p></li><li class="list-num-1-14 list-num-paddingleft-1"><p><span style="font-size: 14px;">14 “读—改—写”指令有何优点？请至少列出五条不同操作的“读—改—写”指令。</span></p></li><li class="list-num-1-15 list-num-paddingleft-1"><p><span style="font-size: 14px;">15 为什么当P2作为扩展程序存储器的高8位地址后，就不再适宜作通用I/O了？</span></p></li><li class="list-num-1-16 list-num-paddingleft-1"><p><span style="font-size: 14px;">16 程序计数器PC作为不可寻址寄存器，它有哪些特点？地址指针DPTR有哪些特点？与程序计数器PC有何异同？</span></p></li><li class="list-num-1-17 list-num-paddingleft-1"><p><span style="font-size: 14px;">17 程序状态字PSW的含义是什么？如何利用它们？</span></p></li><li class="list-num-1-18 list-num-paddingleft-1"><p><span style="font-size: 14px;">18 80C51单片机运行出错或程序进入死循环，如何摆脱困境？</span></p></li><li class="list-num-1-19 list-num-paddingleft-1"><p><span style="font-size: 14px;">19 单片机在工业控制系统中有哪些掉电保护措施？</span></p></li><li class="list-num-1-20 list-num-paddingleft-1"><p><span style="font-size: 14px;">20 举例说明单片机在工业控制系统中低功耗工作方式的意义及方法。</span></p></li><li class="list-num-1-21 list-num-paddingleft-1"><p><span style="font-size: 14px;">21 单片机“面向控制”应用的特点，在硬件结构方面有哪些体现？</span></p></li><li class="list-num-1-22 list-num-paddingleft-1"><p><span style="font-size: 14px;">22 如何判断单片机是否处在运行工作状态？</span></p></li></ol>',rule3_2:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">3.2 伪指令</span></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><ol class="custom_num1 list-paddingleft-1"><li class="list-num-2-1 list-num1-paddingleft-1"><p>1. 80C51有几个中断源，各中断标志是如何产生的，又如何清除的？CPU响应中断时，其中断入口地址各是多少？</p></li><li class="list-num-2-2 list-num1-paddingleft-1"><p>2. 哪些特殊功能寄存器对单片机的中断有影响？如何设置它们？</p></li><li class="list-num-2-3 list-num1-paddingleft-1"><p>3. CPU如何响应中断？对软件编程有河要求？哪些情况会影响中断的响应？如何估算最快的中断响应时间？</p></li><li class="list-num-2-4 list-num1-paddingleft-1"><p>4. 51系列单片机对中断信号有何要求？外部中断请求有哪两种触发方式？对跳变触发和电平触发信号有什么要求？如何选择和设置？</p></li><li class="list-num-2-5 list-num1-paddingleft-1"><p>5. 80C51提供哪几种中断？在中断管理上有何特点？什么是同级内的优先权管理？中断请求被封存的条件有哪些？</p></li><li class="list-num-2-6 list-num1-paddingleft-1"><p>6. 程序查询方式与程序中断方式有何异同之处？在程序中应该如何编写中断程序？</p></li><li class="list-num-2-7 list-num1-paddingleft-1"><p>7. 80C51单片机内部设有几个定时器/计数器？它们各由哪些特殊功能寄存器所组成？有哪几种工作方式？简述各种工作方式的功能特点。如何选择？</p></li><li class="list-num-2-8 list-num1-paddingleft-1"><p>8. 定时器/计数器作定时使用时，定时时间与哪些因素有关？作计数用时，对外界计数频率有何限制？如何启动它们？</p></li><li class="list-num-2-9 list-num1-paddingleft-1"><p>9. 定时器T0为方式3时，由于TH1位已被T0占用，如何控制定时器T1的开启和关闭？</p></li><li class="list-num-2-10 list-num1-paddingleft-1"><p>10. 在80C51单片机系统中，已知时钟频率为6MHz；选用定时器T0设置方式3，请编程P1.1口分别输出周期为1ms和400μs的方波。</p></li><li class="list-num-2-11 list-num1-paddingleft-1"><p>11. 用80C51的定时器测量某正单脉冲的宽度，采用何种方式可得最大量程？若时钟频率为6MHz，求允许测量的最大脉冲宽度是多少？</p></li></ol>',rule3_3:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">3.3 汇编语言程序的编写步骤及基础结构</span></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><p><span style="font-size: 12px;">1. 在80C51扩展系统中，片外程序存储器和片外数据存储器用相同的编制方法，是否会在数据总线上出现总线竞争现象？为什么？</span></p><p><span style="font-size: 12px;">2. 试绘出以并行方式对80C31单片机系统扩展8KB的片外数据存储器的电路原理图。</span></p><p><span style="font-size: 12px;">3. 你能以串行方式对80C31单片机系统扩展8KB的片外数据存储器吗？试绘出电路原理图。</span></p><p><span style="font-size: 12px;">4. 如何设计扩展两片以上片外数据存储器的电路？试绘出电路原理图。</span></p><p><span style="font-size: 12px;">5. 请用80C51的P1口设计一个16个键的键盘电路，并编写出相应的键盘程序。</span></p><p><span style="font-size: 12px;">6. LED显示器结构有何特点？如何设计才能正确工作？</span></p><p><span style="font-size: 12px;">7. 现有一静态显示接口电路，以74HC273为输出芯片。试问它应如何与LED管连接,为什么？试画出以80C51为控制器的完整电路。</span></p><p><span style="font-size: 12px;">8. 单片机用于外界过程控制中，为何要进行A/D、D/A转换？</span></p><p><span style="font-size: 12px;">9. A/D转换器有哪几个重要指标？</span></p><p><span style="font-size: 12px;">10. A/D转换接口中采样保持电路的作用是什么？</span></p><p><span style="font-size: 12px;">11. 试分析A/D转换器产生量化误差的原因和误差的大小。</span></p><p><span style="font-size: 12px;">12. 试分别画出利用ADC0801和ADC0809芯片与80C51组成的A/D转换电路。</span></p><p><span style="font-size: 12px;">13. D/A转换器为什么必须有锁存器？有锁存器和无锁存器的D/A转换器与80C51接口的电路有什么不同？</span></p><p><span style="font-size: 12px;">14. 在什么情况下要使用D/A转换器的双缓冲方式？试以DAC0832为例绘出双缓冲方式的接口电路。</span></p><p><span style="font-size: 12px;">15. 若某8位D/A转换器的输出满刻度电压为+5V，则该D/A转换器的分辩率是多少伏？如果用12位D/A转换器其分辩率又是多少伏？</span></p><p><span style="font-size: 12px;">16. 10位的D/A芯片如何与8位数据总线相连？请说明设计要点。</span></p><p><span style="font-size: 12px;">17. 试分别编写出使DAC0832输出锯齿波、三角波和阶梯波的程序。</span></p><p><span style="font-size: 12px;">18. 拟将A/D和D/A转换器用于数字音频技术。例如先把人的声音写入EPROM芯片，然后在需要时送到喇叭上播放。试分析实现该功能的设计思路（画出方框图）和技术要点。</span></p><p><span style="font-size: 12px;">19. 串行数据传送的主要优点和用途是什么？它们分别适用于什么场合？如何实现？</span></p><p><span style="font-size: 12px;">20. 什么是串行数据通讯的波特率？如何设置？</span></p><p><span style="font-size: 12px;">12. 何谓波特率、溢出率？如何计算和设置80C51串行通信的波特率？</span></p><p><span style="font-size: 12px;">21. 串行数据传送有哪几种工作方式?各有什么特点？如何应用？</span></p><p><span style="font-size: 12px;">22. 哪些特殊功能寄存器对单片机的串行数据传送有影响？编程时必须考虑哪些参数？</span></p><p><span style="font-size: 12px;">13. 为什么定时器T1用做串行口波特率发生器时，常采用方式2？若已知系统时钟频率和通信波特率，如何计算其初始值？</span></p><p><span style="font-size: 12px;">14. 某异步通信接口，其帧格式由一个起始位0、七个数据位、一个奇偶校验位和一位停止位1所组成，当该口每分钟传送1800个字符时，计算其传送波特率。</span></p><p><span style="font-size: 12px;">15. 在80C51的应用系统中时钟频率为6MHz，现需利用定时器T1产生波特率为1200波特。请计算初值，实际得到的波特率误差是多少？</span></p><p><span style="font-size: 12px;">23. 试分别编写出8031单片机发送和接收数据的子程序。</span></p>',rule3_4:'<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">3.4 程序设计举例</span></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><p><span style="font-size: 12px;"></span></p><p><span style="font-size: 12px;">1. 80C51的指令系统有哪几种类型的指令？写出其汇编指令格式。</span></p><p><br/></p><p><span style="font-size: 12px;">2. 简述80C51的寻址方式和所涉及的寻址空间。</span></p><p><br/></p><p><span style="font-size: 12px;">3. 什么是变址寻址？举例说明变址寻址方式的应用。</span></p><p><br/></p><p><span style="font-size: 12px;">4. 简述 MOV、MOVC和MOVX指令的异同之处。</span></p><p><br/></p><p><span style="font-size: 12px;">5. 访问特殊功能寄存器和外部数据存储器，应采用哪种寻址方式？</span></p><p><br/></p><p><span style="font-size: 12px;">6. 对80C51片内RAM的128～255字节区的地址空间寻址时应注意些什么？对特殊功能寄存器应采用何种寻址方式进行访问？</span></p><p><br/></p><p><span style="font-size: 12px;">7. 在80C51的片内RAM中，已知（30H）=38H, （38H）=40H, （40H）=48H, （40H）=90H。分析下面各条指令，说明源操作数的寻址方式，按顺序执行各条指令后的结果。</span></p><p><br/></p><p><span style="font-size: 12px;">8. 设计一段程序，其功能是：将寄存器R7的内容移到R6中。</span></p><p><br/></p><p><span style="font-size: 12px;">9. 现需将外部数据存储器200DH单元中的内容传送到280DH单元中，请设计程序。</span></p><p><br/></p><p><span style="font-size: 12px;">10. 已知当前PC（程序计数器）值1010H，请用两种方法将程序存储器10FFH中的常数送入累加器A.</span></p><p><br/></p><p><span style="font-size: 12px;">11. 已知累加器A中存放两位BCD码数，请编写程序实现十进制数减1。</span></p><p><br/></p><p><span style="font-size: 12px;">12. 请编写程序，将片外数据存储器中20H单元中的内容和21H单元的内容相乘，并将结果存放再22H和23H单元中，高位存放在高地址中。</span></p><p><br/></p><p><span style="font-size: 12px;">13. 已知延时程序为：</span></p>',docContent:"",docContentArr:[]}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){this.getDoc()},beforeUpdate:function(){},updated:function(){},methods:{getDoc:function(){this.docContentArr=[{id:1e5,content:this.docName,children:[{id:11e4,content:this.chapter1,children:[{id:110001,content:this.rule1_1},{id:110002,content:this.rule1_2},{id:110003,content:this.rule1_3},{id:110004,content:this.rule1_4},{id:110005,content:this.rule1_5},{id:110006,content:this.rule1_6}]},{id:12e4,content:this.chapter2,children:[{id:120001,content:this.rule2_1},{id:120002,content:this.rule2_2},{id:120003,content:this.rule2_3},{id:120004,content:this.rule2_4},{id:120005,content:this.rule2_5}]},{id:13e4,content:this.chapter3,children:[{id:130001,content:this.rule3_1},{id:130002,content:this.rule3_2},{id:130003,content:this.rule3_3},{id:130004,content:this.rule3_4}]}]}],this.docContent="",this.dealData(this.docContentArr)},dealData:function(t){var p=this;if(!t||!t.length)return!1;t.forEach(function(t){p.docContent+='<div id="nav_'+t.id+'">'+t.content+"</div>",t.children&&t.children.length&&p.dealData(t.children)})}}},A,!1,function(t){s("sB4J")},"data-v-5987a6de",null).exports},data:function(){return{mymsg:"这是第二个页面哦~",isRule:!1}},methods:{getMessage:function(t){alert(t)}}},P={render:function(){var t=this.$createElement,p=this._self._c||t;return p("div",{staticClass:"center-tab"},[p("el-tabs",{attrs:{type:"border-card"}},[p("el-tab-pane",[p("span",{attrs:{slot:"label"},slot:"label"},[p("i",{staticClass:"el-icon-date"}),this._v(" 全文")]),this._v(" "),p("fullText")],1),this._v(" "),p("el-tab-pane",{attrs:{label:"规则",disabled:!this.isRule}},[this._v("规则")]),this._v(" "),p("el-tab-pane",{attrs:{label:"相关规则"}},[this._v("相关规则")])],1)],1)},staticRenderFns:[]};var R={components:{},data:function(){return{mymsg:"这是第二个页面哦~"}},methods:{getMessage:function(t){alert(t)}}},D={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"right-wrap"},[this._v("\n    右侧评论\n")])},staticRenderFns:[]};var H={components:{leftNav:z,centerTab:s("VU/8")(k,P,!1,function(t){s("dVd+")},"data-v-0e07d966",null).exports,right:s("VU/8")(R,D,!1,function(t){s("LPIQ")},"data-v-0d2e1bee",null).exports},data:function(){return{mymsg:"这是第二个页面哦~"}},methods:{getMessage:function(t){alert(t)}}},F={render:function(){var t=this.$createElement,p=this._self._c||t;return p("div",{staticClass:"doc-structure"},[p("el-container",[p("el-header",{staticClass:"header"},[this._v("Header")]),this._v(" "),p("el-main",{staticClass:"main"},[p("el-row",[p("el-col",{attrs:{span:5}},[p("leftNav")],1),this._v(" "),p("el-col",{attrs:{span:14}},[p("centerTab")],1),this._v(" "),p("el-col",{attrs:{span:5}},[p("right")],1)],1)],1),this._v(" "),p("el-footer",{staticClass:"footer"},[this._v("Footer")])],1)],1)},staticRenderFns:[]};var S=s("VU/8")(H,F,!1,function(t){s("Lm4z")},"data-v-5fde45cd",null).exports;a.default.use(c.a);var w=new c.a({routes:[{path:"/",name:"Ueditor",component:C},{path:"/first",name:"First",component:g},{path:"/second",name:"Second",component:v},{path:"/ueditor",name:"Ueditor",component:C},{path:"/works/docstructure",name:"docStructure",component:S}]}),O=(s("tvR6"),s("kXGG"),s("NYxO")),V=function(t,p){(0,t.commit)("savePath",p)},E=function(t,p){(0,t.commit)("saveCurrDbSource",p)},Y=function(t,p){(0,t.commit)("saveCurrJobData",p)},U=function(t,p){(0,t.commit)("saveDbSource",p)},T=function(t,p){(0,t.commit)("saveSelectJobMeta",p)},L=function(t,p){(0,t.commit)("saveSpecialSubject",p)},B=function(t,p){(0,t.commit)("saveDuplicateJobMeta",p)},I=function(t,p){t.pathName=p},N=function(t,p){t.currDbSource=p},J=function(t,p){t.currJobData=null,t.currJobData=p},K=function(t,p){t.DbSource=p},j=function(t,p){t.selectJobMeta=p},$=function(t,p){t.specialSubject=p,t.selectJobMeta={}},W=function(t,p){t.duplicateJobMeta=p};a.default.use(O.a);var G=new O.a.Store({state:{pathName:"",currDbSource:{},currJobData:{},DbSource:[],selectJobMeta:{},specialSubject:[],duplicateJobMeta:{}},actions:n,mutations:e});a.default.use(i.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:w,store:G,components:{App:l},template:"<App/>"})},OcrW:function(t,p){},U0EK:function(t,p){},VsaA:function(t,p){},"dVd+":function(t,p){},kXGG:function(t,p){},sB4J:function(t,p){},tvR6:function(t,p){},"x4K+":function(t,p){}},["NHnr"]);
//# sourceMappingURL=app.6f6d23f9ed4f204db7e3.js.map