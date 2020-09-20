<template>
    <div class="kinetic_wrap">
        <p>学习地址：https://www.cnblogs.com/zfc2201/articles/7224142.html</p>
        
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo1')">Demo1</p>
            <div v-show="showDemo.demo1" class="canvas_test canvas1" id="canvas1" ref="canvas1"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo2')">Demo2</p>
            <div v-show="showDemo.demo2" class="canvas_test canvas2" id="canvas2" ref="canvas2"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo3')">Demo3 - 图形组</p>
            <div v-show="showDemo.demo3" class="canvas_test canvas3" id="canvas3" ref="canvas3"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo4')">Demo4 - 图形样式（颜色填充）</p>
            <div v-show="showDemo.demo4" class="canvas_test canvas4" id="canvas4" ref="canvas4"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo5')">Demo5 - 图形样式（线性渐变填充）</p>
            <div v-show="showDemo.demo5" class="canvas_test canvas5" id="canvas5" ref="canvas5"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo6')">Demo6 - 图形样式（径向渐变填充）</p>
            <div v-show="showDemo.demo6" class="canvas_test canvas6" id="canvas6" ref="canvas6"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo7')">Demo7 - 图形样式（图像填充）</p>
            <div v-show="showDemo.demo7" class="canvas_test canvas7" id="canvas7" ref="canvas7"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo8')">Demo8 - 图形样式（线条颜色与宽度）</p>
            <div v-show="showDemo.demo8" class="canvas_test canvas8" id="canvas8" ref="canvas8"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo9')">Demo9 - 图形样式（透明）</p>
            <div v-show="showDemo.demo9" class="canvas_test canvas9" id="canvas9" ref="canvas9"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo10')">Demo10 - 图形样式（阴影）</p>
            <div v-show="showDemo.demo10" class="canvas_test canvas10" id="canvas10" ref="canvas10"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo11')">Demo11 - 图形样式（线段间连接点样式）</p>
            <div v-show="showDemo.demo11" class="canvas_test canvas11" id="canvas11" ref="canvas11"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo12')">Demo12 - 图形样式（图形的隐藏与显示）</p>
            <div v-show="showDemo.demo12" class="canvas_test canvas12" id="canvas12" ref="canvas12"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo13')">Demo13 - 事件响应（ 图形的事件响应 ）</p>
            <div v-show="showDemo.demo13" class="canvas_test canvas13" id="canvas13" ref="canvas13"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo14')">Demo14 - 事件响应（ 像素检测 ）</p>
            <div v-show="showDemo.demo14" class="canvas_test canvas14" id="canvas14" ref="canvas14"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo15')">Demo15 - 事件响应（ 事件命名 ）</p>
            <div v-show="showDemo.demo15" class="canvas_test canvas15" id="canvas15" ref="canvas15"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo16')">Demo16 - 事件响应（ 鼠标位置的获取 ）</p>
            <div v-show="showDemo.demo16" class="canvas_test canvas16" id="canvas16" ref="canvas16"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo17')">Demo17 - 事件响应（ 多事件绑定 ）</p>
            <div v-show="showDemo.demo17" class="canvas_test canvas17" id="canvas17" ref="canvas17"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo18')">Demo18 - 事件响应（ 取消事件绑定 ）</p>
            <div v-show="showDemo.demo18" class="canvas_test canvas18" id="canvas18" ref="canvas18"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo19')">Demo19 - 事件响应（ 事件监听开关 ）</p>
            <div v-show="showDemo.demo19" class="canvas_test canvas19" id="canvas19" ref="canvas19"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo20')">Demo20 - 事件响应（ 禁止事件向上级对象传递 ）</p>
            <div v-show="showDemo.demo20" class="canvas_test canvas20" id="canvas20" ref="canvas20"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo21')">Demo21 - 事件响应（ 在事件处理方法中获取图形对象 ）</p>
            <div v-show="showDemo.demo21" class="canvas_test canvas21" id="canvas21" ref="canvas21"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo22')">Demo22 - 事件响应（ 触发事件响应方法 ）</p>
            <div v-show="showDemo.demo22" class="canvas_test canvas22" id="canvas22" ref="canvas22"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo23')">Demo23 - 拖拽（ 拖拽线条 ）</p>
            <div v-show="showDemo.demo23" class="canvas_test canvas23" id="canvas23" ref="canvas23"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo24')">Demo24 - 拖拽（ 拖拽事件 ）</p>
            <div v-show="showDemo.demo24" class="canvas_test canvas24" id="canvas24" ref="canvas24"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo25')">Demo25 - 拖拽（ 拖拽方向限制 ）</p>
            <div v-show="showDemo.demo25" class="canvas_test canvas25" id="canvas25" ref="canvas25"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo26')">Demo26 - 拖拽（ 拖拽范围限制 ）</p>
            <div v-show="showDemo.demo26" class="canvas_test canvas26" id="canvas26" ref="canvas26"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo27')">Demo27 - 动画（Manual - oscillation animation）</p>
            <div v-show="showDemo.demo27" class="canvas_test canvas27" id="canvas27" ref="canvas27"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo28')">Demo28 - 动画（ Manual - rotation animation ）</p>
            <div v-show="showDemo.demo28" class="canvas_test canvas28" id="canvas28" ref="canvas28"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo29')">Demo29 - 动画（ Manual - tween spline ）</p>
            <div v-show="showDemo.demo29" class="canvas_test canvas29" id="canvas29" ref="canvas29"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo30')">Demo30 - 动画（ blur and tween spline ）</p>
            <div v-show="showDemo.demo30" class="canvas_test canvas30" id="canvas30" ref="canvas29"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo31')">Demo31 - 选择器（ 根据ID获取对象 ）</p>
            <div v-show="showDemo.demo31" class="canvas_test canvas31" id="canvas31" ref="canvas31"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo32')">Demo32 - 选择器（ 根据名称获取对象 ）</p>
            <div v-show="showDemo.demo32" class="canvas_test canvas32" id="canvas32" ref="canvas32"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo33')">Demo33 - 在容器之间移动图形对象（ serialize stage with custom shape ）</p>
            <div v-show="showDemo.demo33" class="canvas_test canvas33" id="canvas33" ref="canvas33"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo34')">Demo34 - 对象的上下关系（ move blue layer on top of green layer with moveToTop ）</p>
            <div v-show="showDemo.demo34" class="canvas_test canvas34" id="canvas34" ref="canvas34"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo35')">Demo35 - 对象的上下关系（ 层的上下关系 ）</p>
            <div v-show="showDemo.demo35" class="canvas_test canvas35" id="canvas35" ref="canvas35"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo36')">Demo36 - 对象的上下关系（ 图形对象的上下关系 ）</p>
            <div v-show="showDemo.demo36" class="canvas_test canvas36" id="canvas36" ref="canvas36"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo37')">Demo37 - 舞台</p>
            <div v-show="showDemo.demo37" class="canvas_test canvas37" id="canvas37" ref="canvas37"></div> 
        </el-row>
        <el-row class="canvas_wrap">
            <p class="demo_name" @click="changeDemoState('demo38')">Demo38</p>
            <div v-show="showDemo.demo38" class="canvas_test canvas38" id="canvas38" ref="canvas38"></div> 
        </el-row>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                showDemo: {},
                stage16: null,
            };
        },
        created(){
            
        },
        mounted(){
            let self = this;
            self.start1();
            self.start2();
            self.start3();
            self.start4();
            self.start5();
            self.start6();
            self.start7();
            self.start8();
            self.start9();
            self.start10();
            self.start11();
            self.start12();
            self.start13();
            self.start14();
            self.start15();
            self.start16();
            self.start17();
            self.start18();
            self.start19();
            self.start20();
            self.start21();
            self.start22();
            self.start23();
            self.start24();
            self.start25();
            self.start26();
            self.start27();
            self.start28();
            self.start29();
            self.start30();
            self.start31();
            self.start32();
            self.start33();
            self.start34();
            self.start35();
            self.start36();
            self.start37();
            self.start38();
        },
        methods: {
            // 初始化数据
            initData(){
                let self = this;
            },
            // 切换显示demo
            changeDemoState(demoNum){
                let self = this;
                self.$set(self.showDemo, demoNum, !self.showDemo[demoNum]);
            },
            // demo1
            start1(){
                let self = this;
                // 创建Kinetic舞台，绑定我们添加的<div>容器 
                let stage = new Kinetic.Stage({
                    container: 'canvas1', // <div>的id 
                    width: 600, //创建的舞台宽度 
                    height: 400 //创建的舞台高度 
                });
                // 创建Kinetic用户层
                let layer = new Kinetic.Layer();
                let rect = new Kinetic.Rect({
                    x: 200, // 矩形左上角x坐标 
                    y: 150, // 矩形左上角y坐标 
                    width: 200, // 矩形的宽度 
                    height: 100, // 矩形的高度 
                    fill: 'red', // 矩形的填充色 
                    stroke: 'black', // 矩形边缘线的颜色
                    strokeWidth: 4 // 矩形边缘线的宽度
                });
                // 向用户层中添加上面的矩形 
                layer.add(rect);
                // 将上面的用户层添加到舞台上 
                stage.add(layer);
                stage.draw();
            },
            // demo2
            start2(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas2',
                    width: 500,
                    height: 500
                });
                let circleLayer = new Kinetic.Layer({
                    id: 'circleLayer2'
                });
                stage.add(circleLayer);

                let circle = new Kinetic.Circle({
                    x: 500 / 2,
                    y: 500 / 2,
                    radius: 30,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 7,
                    name: 'circle',
                    draggable: true
                });
                circleLayer.add(circle);
                circleLayer.draw();
                let myJson = stage.toJSON();

                for (var i = 0; i < 1000; i++) {
                    stage.destroy();
                    stage = Kinetic.Node.create(myJson, 'canvas2');
                }

                console.log("done");
            },
            // demo3
            start3(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas3',
                    width: 600,
                    height: 400
                });

                let layer = new Kinetic.Layer();

                // 创建一个要加进组中的圆
                let circle = new Kinetic.Circle({
                    x: 200,
                    y: 100,
                    radius: 50,
                    fill: 'red',
                });

                // 创建一个要加进组中的矩形
                let rect = new Kinetic.Rect({
                    x: 300,
                    y: 200,
                    width: 100,
                    height: 100,
                    fill: 'blue',
                });

                // 创建group对象
                var group = new Kinetic.Group({draggable: true});
                // 把多个图形对象添加到group里
                group.add(circle);
                group.add(rect);
                // 把group对象添加到层里
                layer.add(group);
                // 将层添加到舞台中
                stage.add(layer);

            },
            // demo4
            start4(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas4',
                    width: 600,
                    height: 400
                });

                let layer = new Kinetic.Layer();
                // 创建第一个矩形对象的config参数
                let config1 = {
                    x: 100,
                    y: 150,
                    width: 100,
                    height: 100,
                    // 填充色
                    fill: 'blue',
                    draggable: true
                };

                // 创建第一个矩形对象
                let rect1 = new Kinetic.Rect(config1);
                // 创建第二个矩形对象的config参数
                let config2 = {
                    x: 400,
                    y: 150,
                    width: 100,
                    height: 100,
                    //填充色
                    fill: 'red',
                    draggable: true
                };

                // 创建第二个矩形对象
                let rect2 = new Kinetic.Rect(config2);

                // 修改第二个矩形对象的颜色
                rect2.setFill('green');

                layer.add(rect1);
                layer.add(rect2);
                stage.add(layer);
            },
            // demo5
            start5(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas5',
                    width: 600,
                    height: 400
                });

                let layer = new Kinetic.Layer({ draggable: true });
                // 创建第一个矩形对象的config参数
                let config1 = {
                    x: 100,
                    y: 50,
                    width: 400,
                    height: 100,
                    //渐变色
                    fillLinearGradientStartPoint: {x:0, y:50}, // "填充线性渐变起始点坐标，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // fillLinearGradientStartPointX: "填充线性渐变起始点x坐标",
                    // fillLinearGradientStartPointY: "填充线性渐变起始点y坐标",
                    fillLinearGradientEndPoint: { x: 400, y: 50 }, //"填充线性渐变终点坐标，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // fillLinearGradientEndPointX: "填充线性渐变终点x坐标",
                    // fillLinearGradientEndPointY: "填充线性渐变终点y坐标",
                    fillLinearGradientColorStops:  [0, "red", 0.5, "green", 1, "blue"], // "填充线性渐变颜色位置数组，[a,colorA,b,colorB]",
                };
                // 创建第一个矩形对象
                let rect1 = new Kinetic.Rect(config1);

                // 创建第二个矩形对象的config参数
                let config2 = {
                    x: 100,
                    y: 200,
                    width: 400,
                    height: 100,
                    //渐变色
                    fillLinearGradientStartPoint: {x:0, y:50},
                    fillLinearGradientEndPoint: { x: 400, y: 50 },
                    fillLinearGradientColorStops: [0, 'red', 0.5, 'green', 1, 'blue'], 
                };
                // 创建第二个矩形对象
                let rect2 = new Kinetic.Rect(config2);

                // 修改第二个矩形对象的颜色变化模式
                rect2.setFillLinearGradientStartPoint({ x: 100, y: 50 });
                rect2.setFillLinearGradientEndPoint({ x: 400, y: 50 });
                rect2.setFillLinearGradientColorStops([0, 'yellow', 0.5, 'cyan', 1, 'purple']);
                // setFillLinearGradientColorStops(colorStops)：设置线性渐变位置颜色数组。
                // setFillLinearGradientEndPoint(endPoint)：设置线性渐变终点坐标。
                // setFillLinearGradientEndPointX(x)：设置线性渐变终点横坐标。
                // setFillLinearGradientEndPointY(y)：设置线性渐变终点纵坐标。
                // setFillLinearGradientStartPoint(startPoint)：设置线性渐变起点坐标。
                // setFillLinearGradientStartPointX(x)：设置线性渐变起点横坐标。
                // setFillLinearGradientStartPointY(y)：设置线性渐变起点纵坐标。


                layer.add(rect1);
                layer.add(rect2);
                stage.add(layer);
            },
            // demo6
            start6(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas6',
                    width: 600,
                    height: 400
                });

                let layer = new Kinetic.Layer({ draggable: true });
                // 创建第一个圆形对象的config参数
                let config1 = {
                    x: 150,
                    y: 200,
                    radius: 100,
                    //渐变色
                    fillRadialGradientStartPoint: {x: 0, y: 0}, //"填充径向渐变起始点坐标，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // fillRadialGradientStartPointX: "填充径向渐变起始点x坐标",
                    // fillRadialGradientStartPointY: "填充径向渐变起始点y坐标",
                    fillRadialGradientEndPoint: {x: 0, y: 0}, //"填充径向渐变终点坐标，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // fillRadialGradientEndPointX: "填充径向渐变终点x坐标",
                    // fillRadialGradientEndPointY: "填充径向渐变终点y坐标",
                    fillRadialGradientStartRadius: 0, // "填充径向渐变起始圆半径",
                    fillRadialGradientEndRadius: 100, // "填充径向渐变结束圆半径",
                    fillRadialGradientColorStops: [0, 'red', 0.5, 'green', 1, 'blue'], // "填充径向渐变颜色位置数组，[a,colorA,b,colorB]",
                };
                // 创建第一个圆形对象
                let circle1 = new Kinetic.Circle(config1);

                // 创建第二个圆形对象的config参数
                let config2 = {
                    x: 450,
                    y: 200,
                    radius: 100,
                    //渐变色
                    fillRadialGradientStartPoint: {x: 0, y: 0}, 
                    fillRadialGradientEndPoint: {x: 0, y: 0},
                    fillRadialGradientStartRadius: 0,
                    fillRadialGradientEndRadius: 100,
                    fillRadialGradientColorStops: [0, 'red', 0.5, 'green', 1, 'blue'],
                };
                // 创建第二个圆形对象
                let circle2  = new Kinetic.Circle(config2);

                // 修改第二个圆形对象的颜色变化模式
                circle2.setFillRadialGradientStartPoint({x: 0, y: 0}); // ：设置径向渐变起点坐标。
                circle2.setFillRadialGradientStartRadius(0); // ：设置径向渐变起点半径。
                circle2.setFillRadialGradientEndPoint({x: 0, y: 0}); // ：设置径向渐变终点坐标。
                circle2.setFillRadialGradientEndRadius(100); // ：设置径向渐变终点半径。
                circle2.setFillRadialGradientColorStops([0, 'yellow', 0.5, 'cyan', 1, 'purple']); // ：设置径向渐变位置颜色数组。
                // setFillRadialGradientEndPointX(x)：设置径向渐变终点横坐标。
                // setFillRadialGradientEndPointY(y)：设置径向渐变终点纵坐标。
                // setFillRadialGradientStartPointX(x)：设置径向渐变起点横坐标。
                // setFillRadialGradientStartPointY(y)：设置径向渐变起点纵坐标。


                layer.add(circle1);
                layer.add(circle2);
                stage.add(layer);
            },
            // demo7
            start7(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas7',
                    width: 600,
                    height: 400
                });

                let layer = new Kinetic.Layer({ draggable: true });
                // 创建第一个矩形对象的config参数
                let config1 = {
                    x: 50,
                    y: 100,
                    width: 180,
                    height: 180,
                    // 填充图像
                    // fillPatternImage: "填充图案",
                    // fillPatternX: "填充图案横坐标",
                    // fillPatternY: "填充图案纵坐标",
                    // fillPatternOffset: "填充图案偏移量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // fillPatternOffsetX: "填充图案x偏移量",
                    // fillPatternOffsetY: "填充图案y偏移量",
                    // fillPatternScale: "填充图案缩放量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // fillPatternScaleX: "填充图案x缩放量",
                    // fillPatternScaleY: "填充图案y缩放量",
                    // fillPatternRotation: "填充图案旋转幅度",
                    // fillPatternRepeat: "填充图案平铺方式，可以是repeat、repeat-x、repeat-y或no-repeat，默认是no-repeat",
                };
                // 创建第一个矩形对象
                let rect1 = new Kinetic.Rect(config1);

                // 创建第二个矩形对象的config参数
                let config2 = {
                    x: 350,
                    y: 100,
                    width: 180,
                    height: 180,
                    // 填充图像
                    // fillPatternImage: "填充图案",
                    // fillPatternX: "填充图案横坐标",
                    // fillPatternY: "填充图案纵坐标",
                    // fillPatternOffset: "填充图案偏移量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // fillPatternOffsetX: "填充图案x偏移量",
                    // fillPatternOffsetY: "填充图案y偏移量",
                    // fillPatternScale: "填充图案缩放量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // fillPatternScaleX: "填充图案x缩放量",
                    // fillPatternScaleY: "填充图案y缩放量",
                    // fillPatternRotation: "填充图案旋转幅度",
                    // fillPatternRepeat: "填充图案平铺方式，可以是repeat、repeat-x、repeat-y或no-repeat，默认是no-repeat",
                };
                // 创建第二个矩形对象
                let rect2 = new Kinetic.Rect(config2);

                // 将填充图像向左上移动50个像素

                layer.add(rect1);
                layer.add(rect2);
                stage.add(layer);
            },
            // demo8
            start8(){
                let self = this
                /*
                // 使用构造方法的config参数设置
                let shape = new Kinetic.Circle({
                    stroke: 'black',
                    strokeWidth: 4
                });

                // 用图形对象的方法设置
                shape.setStroke('blue');
                shape.setStrokeWidth(20);
                */
            },
            // demo9
            start9(){
                let self = this;
                // 创建Kinetic舞台，绑定我们添加的<div>容器 
                let stage = new Kinetic.Stage({
                    container: 'canvas9', // <div>的id 
                    width: 600, //创建的舞台宽度 
                    height: 400 //创建的舞台高度 
                });
                // 创建Kinetic用户层
                let layer = new Kinetic.Layer();
                let rect = new Kinetic.Rect({
                    x: 100,
                    y: 50,
                    width: 100,
                    height: 50,
                    fill: 'green',
                    stroke: 'blue',
                    shadowColor: 'red',
                    shadowBlur: 10,
                    shadowOffset: {x: 5, y: 5},
                    shadowOpacity: 0.5,
                    opacity: 0.1,
                    cornerRadius: 5
                });
                
                // 向用户层中添加上面的矩形 
                layer.add(rect);
                // 将上面的用户层添加到舞台上 
                stage.add(layer);
                stage.draw();

/*
                // 使用构造方法的config参数设置
                let shape = new Kinetic.Circle({
                    alpha: 0.5
                });
                // 用图形对象的方法设置
                shape.setAlpha(1);
                */
            },
            // demo10
            start10(){
                let self = this;
                // 创建Kinetic舞台，绑定我们添加的<div>容器 
                let stage = new Kinetic.Stage({
                    container: 'canvas10', // <div>的id 
                    width: 600, //创建的舞台宽度 
                    height: 400 //创建的舞台高度 
                });
                // 创建Kinetic用户层
                let layer = new Kinetic.Layer();
                let rect = new Kinetic.Rect({
                    x: 100, // 矩形左上角x坐标 
                    y: 100, // 矩形左上角y坐标 
                    width: 150, // 矩形的宽度 
                    height: 150, // 矩形的高度 
                    fill: 'red', // 矩形的填充色 
                    stroke: 'blue', // 矩形边缘线的颜色
                    strokeWidth: 4, // 矩形边缘线的宽度
                    shadowColor: 'black', // "阴影色",
                    // shadowColorRGB: "rgb阴影色。用对象字面量表示{r:0,g:0,b:0}",
                    // shadowColorR: "r阴影色",
                    // shadowColorG: "g阴影色",
                    // shadowColorB: "b阴影色",
                    shadowBlur: 10, // "阴影模糊值",
                    shadowOffset: [10, 10], // "填充图案偏移量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                    // shadowOffsetX: "阴影模糊x偏移量",
                    // shadowOffsetY: "阴影模糊y偏移量",
                    shadowOpacity: 0.5, // "阴影透明度，取值范围为0-1",
                    // shadowEnabled: "是否启用blob的阴影功能，默认为true",
                });
                // 向用户层中添加上面的矩形 
                layer.add(rect);
                // 将上面的用户层添加到舞台上 
                stage.add(layer);
                stage.draw();

/*
                // 使用构造方法的config参数设置
                let shape = new Kinetic.Circle({
                    shadow: {
                        color: 'black',
                        blur: 10,
                        offset: [10, 10],
                        alpha: 0.5
                    }
                });
                // 用图形对象的方法设置
                shape.setShadow({
                    color: 'black',
                    blur: 10,
                    offset: [10, 10],
                    alpha: 0.5
                });
                */
            },
            // demo11
            start11(){
                let self = this;
                // 创建Kinetic舞台，绑定我们添加的<div>容器 
                let stage = new Kinetic.Stage({
                    container: 'canvas11', // <div>的id 
                    width: 1000, //创建的舞台宽度 
                    height: 400 //创建的舞台高度 
                });
                // 创建Kinetic用户层
                let layer = new Kinetic.Layer();

                let triangle1 = new Kinetic.RegularPolygon({
                    x: 100,
                    y: 100,
                    sides: 3,
                    radius: 70,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 20,
                    lineJoin: 'bevel'
                });
                triangle1.on('mouseover', function() {
                    this.setLineJoin('round');
                    layer.draw();
                });
                triangle1.on('mouseout', function() {
                    this.setLineJoin('bevel');
                    layer.draw();
                });
                let triangle2 = new Kinetic.RegularPolygon({
                    x: 300,
                    y: 100,
                    sides: 3,
                    radius: 70,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 20,
                    lineJoin: 'bevel'
                });
                let triangle3 = new Kinetic.RegularPolygon({
                    x: 500,
                    y: 100,
                    sides: 3,
                    radius: 70,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 20,
                    lineJoin: 'round'
                });
                let triangle4 = new Kinetic.RegularPolygon({
                    x: 700,
                    y: 100,
                    sides: 3,
                    radius: 70,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 20,
                    lineJoin: 'miter'
                });
                // add the shape to the layer, and then the layer to stage
                stage.add(layer.add(triangle1).add(triangle2).add(triangle3).add(triangle4));
            },
            // demo12
            start12(){
                /*
                // 使用构造方法的config参数设置
                var shape = new Kinetic.Circle({
                    visible: false
                });
                // 用图形对象的show方法显示图形
                shape.show();
                // 用图形对象的hide方法隐藏图形
                shape.hide();
                */
            },
            // demo13
            start13(){
                let stage = new Kinetic.Stage({
                    container: 'canvas13',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                //创建config参数
                let config = {
                    x: 50,
                    y: 50,
                    width: 100,
                    height: 100,
                    fill: 'blue',
                    stroke: 'black',
                    strokeWidth: 4
                };
                //创建矩形对象
                let rect = new Kinetic.Rect(config);
                //绑定事件响应方法
                // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
                rect.on('click', function (evt) {
                    alert('clicked');
                });
                //把矩形对象添加到层里
                layer.add(rect);
                //将层添加到舞台中
                stage.add(layer);
            },
            // demo14
            start14(){
                let stage = new Kinetic.Stage({
                    container: 'canvas14',
                    width: 600,
                    height: 400
                });
                let rect = new Kinetic.Rect({
                    x: 100,
                    y: 100,
                    width: 100,
                    height: 100,
                    fill: 'red',
                    detectionType: 'pixel'
                });
                // 绑定事件响应方法
                rect.on('click', function () {
                    alert('rect clicked');
                });
                let layer = new Kinetic.Layer();
                layer.add(rect);
                stage.add(layer);
                // 保存数据以相应事件
                // rect.saveData();

                let image = new Image();
                image.onload = function () {
                    let kimage = new Kinetic.Image({
                        x: 100,
                        y: 100,
                        image: image,
                        detectionType: 'pixel'
                    });
                    //绑定事件响应方法
                    kimage.on('click', function () {
                        alert('image clicked');
                    });
                    let layer = new Kinetic.Layer();
                    layer.add(kimage);
                    stage.add(layer);
                    // 保存数据以相应事件
                    // kimage.saveData();
                };
                // 图像需要与此页面在同一个服务器上，否则会Javascript会抛出安全异常
                image.src = './01.PNG';
            },
            // demo15
            start15(){
                let stage = new Kinetic.Stage({
                    container: 'canvas15',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                //创建config参数
                let config = {
                    x: 50,
                    y: 50,
                    width: 100,
                    height: 100,
                    fill: 'blue',
                    stroke: 'black',
                    strokeWidth: 4
                };
                //创建矩形对象
                let rect = new Kinetic.Rect(config);
                //绑定事件响应方法
                // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
                rect.on('click.a', function (evt) {
                    alert('clicked A');
                });
                rect.on('click.b', function (evt) {
                    alert('clicked B');
                });
                //把矩形对象添加到层里
                layer.add(rect);
                //将层添加到舞台中
                stage.add(layer);
            },
            // demo16
            start16(){
                let self = this;
                // let stage = new Kinetic.Stage({
                self.stage16 = new Kinetic.Stage({
                    container: 'canvas16',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                //创建config参数
                let config = {
                    x: 50,
                    y: 50,
                    width: 100,
                    height: 100,
                    fill: 'blue',
                    stroke: 'black',
                    strokeWidth: 4,
                    draggable: true,
                    dragBoundFunc: function(pos, evt){
                        // let mousePos = stage.getMousePosition();
                        // let msg = 'x:' + mousePos.x + ' | ' + 'y:' + mousePos.y;
                        // return { y : Math.round(pos.y/60)*60, x : this.getX() };
                        return { y : pos.y, x : pos.x };
                    },
                };
                //创建矩形对象
                let rect = new Kinetic.Rect(config);
                //绑定事件响应方法
                // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
                rect.on('dragstart', function (evt) {
                    // let mousePos = stage.getMousePosition();
                    // let msg = 'x:' + mousePos.x + ' | ' + 'y:' + mousePos.y;
                });
                rect.on('dragend', function (evt) {
                    // let mousePos = stage.getMousePosition();
                    // let msg = 'x:' + mousePos.x + ' | ' + 'y:' + mousePos.y;
                });
                //把矩形对象添加到层里
                layer.add(rect);
                //将层添加到舞台中
                self.stage16.add(layer);
            },
            // demo17
            start17(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas17',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                //创建config参数
                let config = {
                    x: 50,
                    y: 50,
                    width: 100,
                    height: 100,
                    fill: 'blue',
                    stroke: 'black',
                    strokeWidth: 4,
                };
                //创建矩形对象
                let rect = new Kinetic.Rect(config);
                //绑定事件响应方法
                // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
                rect.on('mousedown mouseover', function (evt) {
                    alert('mousedown 或 mouseover');
                });
                //把矩形对象添加到层里
                layer.add(rect);
                //将层添加到舞台中
                stage.add(layer);
            },
            // demo18
            start18(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas18',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                //创建config参数
                let config = {
                    x: 50,
                    y: 50,
                    width: 100,
                    height: 100,
                    fill: 'blue',
                    stroke: 'black',
                    strokeWidth: 4,
                };
                //创建矩形对象
                let rect = new Kinetic.Rect(config);
                //绑定事件响应方法
                // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
                rect.on('mouseover.a', function (evt) {
                    alert('mousedown.a');
                });
                rect.on('click', function (evt) {
                    rect.off('mouseover.a');
                });
                //把矩形对象添加到层里
                layer.add(rect);
                //将层添加到舞台中
                stage.add(layer);
            },
            // demo19
            start19(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas19',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                //创建config参数
                let config = {
                    x: 50,
                    y: 50,
                    width: 100,
                    height: 100,
                    fill: 'blue',
                    stroke: 'black',
                    strokeWidth: 4,
                    // listening: false, // "是否处于事件监听状态",
                };
                //创建矩形对象
                let rect = new Kinetic.Rect(config);
                //绑定事件响应方法
                // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
                rect.on('mouseover', function (evt) {
                    alert('mousedown');
                });

                //把矩形对象添加到层里
                layer.add(rect);
                //将层添加到舞台中
                stage.add(layer);

                // 使用对象方法设置
                setTimeout(function(){
                    rect.setListening(false);
                }, 3000);
                
            },
            // demo20
            start20(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas20',
                    width: 600,
                    height: 400
                });

                let layer = new Kinetic.Layer();
                layer.on('click', function (evt) {
                    evt.cancelBubble = true;
                    alert('点击图层了');
                });

                // 创建一个要加进组中的圆
                let circle = new Kinetic.Circle({
                    x: 100,
                    y: 100,
                    radius: 50,
                    fill: 'red',
                });
                circle.on('click', function (evt) {
                    evt.cancelBubble = true;
                    alert('点击圆形了');
                });

                // 创建一个要加进组中的矩形
                let rect = new Kinetic.Rect({
                    x: 300,
                    y: 100,
                    width: 100,
                    height: 100,
                    fill: 'blue',
                });
                rect.on('click', function (evt) {
                    evt.cancelBubble = true;
                    alert('点击矩形了');
                });

                // 创建group对象
                var group = new Kinetic.Group({draggable: true});
                group.on('click', function (evt) {
                    evt.cancelBubble = true;
                    alert('点击组了');
                });

                // 把多个图形对象添加到group里
                group.add(circle);
                group.add(rect);
                // 把group对象添加到层里
                layer.add(group);
                // 将层添加到舞台中
                stage.add(layer);
            },
            // demo21
            start21(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas21',
                    width: 600,
                    height: 400
                });

                let layer = new Kinetic.Layer();

                let circle = new Kinetic.Circle({
                    x: 100,
                    y: 100,
                    radius: 50,
                    fill: 'red',
                });
                circle.on('click', function (evt) {
                    let shape = evt.shape;
                    console.log(shape);
                });

                layer.add(circle);
                stage.add(layer);
            },
            // demo22
            start22(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas22',
                    width: 600,
                    height: 400
                });

                let layer = new Kinetic.Layer();

                let circle = new Kinetic.Circle({
                    x: 100,
                    y: 100,
                    radius: 50,
                    fill: 'red',
                });
                circle.on('click', function (evt) {
                    alert('触发鼠标点击事件');
                });

                layer.add(circle);
                stage.add(layer);

                // 触发事件鼠标点击事件
                // circle.simulate('click');
            },
            // demo23
            start23(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas23',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let line = new Kinetic.Line({
                    points: [100, 150, 340, 230],
                    stroke: 'blue',
                    strokeWidth: 10,
                    draggable: true
                });
                layer.add(line);
                stage.add(layer);
                //保存像素数据
                // line.saveData();
                //必须在每次拖拽完毕后执行一次saveData
                line.on('dragend', function () {
                    // blueLine.saveData();
                });
            },
            // demo24
            start24(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas24',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let line = new Kinetic.Line({
                    points: [100, 150, 340, 230],
                    stroke: 'red',
                    strokeWidth: 10,
                    draggable: true
                });
                layer.add(line);
                stage.add(layer);
                line.on('dragstart', function () {
                    console.log('开始拖拽');
                });
                line.on('dragmove', function () {
                    console.log('拖拽中...');
                });
                line.on('dragend', function () {
                    console.log('拖拽结束');
                });
            },
            // demo25
            start25(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas25',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let line = new Kinetic.Line({
                    points: [100, 150, 340, 230],
                    stroke: 'red',
                    strokeWidth: 10,
                    draggable: true,
                    dragConstraint: 'horizontal', // none， horizontal和 vertical
                });
                layer.add(line);
                stage.add(layer);
            },
            // demo26
            start26(){
                let self = this;
                let stage = new Kinetic.Stage({
                    container: 'canvas26',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let line = new Kinetic.Line({
                    points: [100, 150, 340, 230],
                    stroke: 'red',
                    strokeWidth: 10,
                    draggable: true,
                    dragBounds: {
                        top: 50
                    },
                });
                layer.add(line);
                stage.add(layer);
            },
            // demo27
            start27(){
                let stage = new Kinetic.Stage({
                    container: 'canvas27',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let hexagon = new Kinetic.RegularPolygon({
                    x: 300,
                    y: 200,
                    sides: 6,
                    radius: 70,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 4
                });
                layer.add(hexagon);
                stage.add(layer);

                let amplitude = 150;
                let period = 2000;
                let centerX = 300;
                let anim = new Kinetic.Animation(function(frame) {
                    hexagon.setX(amplitude * Math.sin(new Date().getTime() * 2 * Math.PI / period) + centerX);
                }, layer);
                anim.start();

            },
            // demo28
            start28(){
                let stage = new Kinetic.Stage({
                    container: 'canvas28',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let rect;
                for (var n=0; n<100; n++) {
                    rect = new Kinetic.Rect({
                        x: Math.random() * 400,
                        y: Math.random() * 400,
                        width: 100,
                        height: 50,
                        fill: 'red',
                        stroke: 'black',
                        strokeWidth: 4
                    });
                    layer.add(rect);
                }

                stage.add(layer);
                var velocity = 360; // 1 rev per second
                var anim = new Kinetic.Animation(function(frame) {
                    layer.find('Rect').rotate(velocity * frame.timeDiff / 1000);
                }, layer);
                anim.start();
                // anim.stop();
            },
            // demo29
            start29(){
                let stage = new Kinetic.Stage({
                    container: 'canvas29',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let spline = new Kinetic.Line({
                    points: [
                        73, 160,
                        340, 23,
                        500, 109,
                        300, 109
                    ],
                    stroke: 'blue',
                    strokeWidth: 10,
                    lineCap: 'round',
                    lineJoin: 'round',
                    draggable: true,
                    tension: 1
                });
                layer.add(spline);
                stage.add(layer);
                let tween = new Kinetic.Tween({
                    node: spline,
                    duration: 1,
                //x: 100,
                    points: [
                        200, 160,
                        200, 23,
                        500, 109,
                        100, 10
                    ],
                    easing: Kinetic.Easings.BackEaseOut,
                    yoyo: false
                });
                // stage.getContent().addEventListener('mouseover', function() {
                //   tween.play();
                // });
                // stage.getContent().addEventListener('mouseout', function() {
                //   tween.reverse();
                // });
                tween.play();
            },
            // demo30
            start30(){
                let stage = new Kinetic.Stage({
                    container: 'canvas30',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let spline = new Kinetic.Line({
                    points: [
                        73, 160,
                        340, 23,
                        500, 109,
                        300, 109
                    ],
                    stroke: 'blue',
                    strokeWidth: 10,
                    lineCap: 'round',
                    lineJoin: 'round',
                    draggable: true,
                    tension: 1
                });
                layer.add(spline);
                stage.add(layer);
                spline.cache({
                    width: stage.width(),
                    height: stage.height()
                });
                spline.filters([Kinetic.Filters.Blur]).blurRadius(40);
                layer.draw();
                layer.on('beforeDraw', function() {
                    spline.cache({
                        width: stage.width(),
                        height: stage.height()
                    });
                });
                let tween = new Kinetic.Tween({
                    node: spline,
                    duration: 2,
                //x: 100,
                    points: [
                        200, 160,
                        200, 23,
                        500, 109,
                        100, 10
                    ],
                    blurRadius: 0,
                    easing: Kinetic.Easings.BackEaseOut,
                    yoyo: false
                });
                // stage.getContent().addEventListener('mouseover', function() {
                //   tween.play();
                // });
                // stage.getContent().addEventListener('mouseout', function() {
                //   tween.reverse();
                // });
                tween.play();
            },
            // demo31
            start31(){
                let stage = new Kinetic.Stage({
                    container: 'canvas31',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let hexagon = new Kinetic.RegularPolygon({
                    id: 'id1',
                    x: 50,
                    y: 50,
                    sides: 6,
                    radius: 70,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 4
                });
                layer.add(hexagon);
                stage.add(layer);

                let obj = stage.get('#id1')[0];
                // let obj = layer.get('#id1')[0];
                // let obj = group.get('#id1')[0];

            },
            // demo32
            start32(){
                let stage = new Kinetic.Stage({
                    container: 'canvas32',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let hexagon = new Kinetic.RegularPolygon({
                    name: 'name1',
                    x: 50,
                    y: 50,
                    sides: 6,
                    radius: 70,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 4
                });
                layer.add(hexagon);
                stage.add(layer);

                let objs = stage.get('.name1')[0];
                // let objs = layer.get('.name1')[0];
                // let objs = group.get('.name1')[0];
            },
            // demo33
            start33(){
                let stage = new Kinetic.Stage({
                    container: 'canvas33',
                    width: 1000,
                    height: 600
                });
                let layer = new Kinetic.Layer();
                let group = new Kinetic.Group();
                let drawTriangle = function(context) {
                    context.beginPath();
                    context.moveTo(200, 50);
                    context.lineTo(420, 80);
                    context.quadraticCurveTo(300, 100, 260, 170);
                    context.closePath();
                    context.fillStrokeShape(this);
                };
                let triangle = new Kinetic.Shape({
                    drawFunc: drawTriangle,
                    fill: "#00D2FF",
                    stroke: "black",
                    strokeWidth: 4,
                    id: 'myTriangle'
                });
                group.add(triangle);
                layer.add(group);
                stage.add(layer);
                // assert.equal(triangle.getId(), 'myTriangle');
                // let expectedJson = '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{},"className":"Group","children":[{"attrs":{"fill":"#00D2FF","stroke":"black","strokeWidth":4,"id":"myTriangle"},"className":"Shape"}]}]}]}';

                // assert.equal(stage.toJSON(), expectedJson);
                layer.draw();
            },
            // demo34
            start34(){
                var stage = new Kinetic.Stage({
                    container: 'canvas34',
                    width: 1000,
                    height: 600
                });;
                var blueLayer = new Kinetic.Layer();
                var greenLayer = new Kinetic.Layer();
                var bluecircle = new Kinetic.Circle({
                    x: 200,
                    y: stage.getHeight() / 2,
                    radius: 70,
                    fill: 'blue',
                    stroke: 'black',
                    strokeWidth: 4
                });
                var greencircle = new Kinetic.Circle({
                    x: 280,
                    y: stage.getHeight() / 2,
                    radius: 70,
                    fill: 'green',
                    stroke: 'black',
                    strokeWidth: 4
                });
                blueLayer.add(bluecircle);
                greenLayer.add(greencircle);
                stage.add(blueLayer);
                stage.add(greenLayer);
                blueLayer.moveToTop();
            },
            // demo35
            start35(){
                let stage = new Kinetic.Stage({
                    container: 'canvas35',
                    width: 600,
                    height: 400
                });
                let layer1 = new Kinetic.Layer();
                let layer2 = new Kinetic.Layer();
                let layer3 = new Kinetic.Layer();
                let config1 = {
                    x: 200,
                    y: 200,
                    radius: 100,
                    height: 100,
                    fill: "red",
                    stroke: "black",
                    strokeWidth: 4
                };
                let circle1 = new Kinetic.Circle(config1);
                let config2 = {
                    x: 250,
                    y: 200,
                    radius: 100,
                    height: 100,
                    fill: "green",
                    stroke: "black",
                    strokeWidth: 4
                };
                let circle2 = new Kinetic.Circle(config2);
                let config3 = {
                    x: 300,
                    y: 200,
                    radius: 100,
                    height: 100,
                    fill: "blue",
                    stroke: "black",
                    strokeWidth: 4
                };
                let circle3 = new Kinetic.Circle(config3);
                layer1.add(circle1);
                layer2.add(circle2);
                layer3.add(circle3);
                layer1.on("click", function () {
                    alert("from Z index:" + this.getZIndex());
                    //将本层移动至最上层
                    this.moveToTop();
                    alert("to Z index:" + this.getZIndex());
                });
                layer2.on("click", function () {
                    alert("from Z index:" + this.getZIndex());
                    //将本层移动至最上层
                    this.moveToTop();
                    alert("to Z index:" + this.getZIndex());
                });
                layer3.on("click", function () {
                    alert("from Z index:" + this.getZIndex());
                    //将本层移动至最上层
                    this.moveToTop();
                    alert("to Z index:" + this.getZIndex());
                });
                //将层添加到舞台中
                stage.add(layer1);
                stage.add(layer2);
                stage.add(layer3);
            },
            // demo36
            start36(){
                let stage = new Kinetic.Stage({
                    container: 'canvas36',
                    width: 600,
                    height: 400
                });
                let layer = new Kinetic.Layer();
                let config1 = {
                    x: 200,
                    y: 200,
                    radius: 100,
                    height: 100,
                    fill: "red",
                    stroke: "black",
                    strokeWidth: 4
                };
                let circle1 = new Kinetic.Circle(config1);
                circle1.on("click", function () {
                    alert("from Z index:" + this.getZIndex());
                    //将本对象移动到本层所有对象中的最上面
                    this.moveToTop();
                    //重绘对象所在本层
                    layer.draw();
                    alert("to Z index:" + this.getZIndex());
                });
                let config2 = {
                    x: 250,
                    y: 200,
                    radius: 100,
                    height: 100,
                    fill: "green",
                    stroke: "black",
                    strokeWidth: 4
                };
                let circle2 = new Kinetic.Circle(config2);
                circle2.on("click", function () {
                    alert("from Z index:" + this.getZIndex());
                    //将本对象移动到本层所有对象中的最上面
                    this.moveToTop();
                    //重绘对象所在本层
                    layer.draw();
                    alert("to Z index:" + this.getZIndex());
                });
                let config3 = {
                    x: 300,
                    y: 200,
                    radius: 100,
                    height: 100,
                    fill: "blue",
                    stroke: "black",
                    strokeWidth: 4
                };
                let circle3 = new Kinetic.Circle(config3);
                circle3.on("click", function () {
                    alert("from Z index:" + this.getZIndex());
                    //将本对象移动到本层所有对象中的最上面
                    this.moveToTop();
                    //重绘对象所在本层
                    layer.draw();
                    alert("to Z index:" + this.getZIndex());
                });
                layer.add(circle1);
                layer.add(circle2);
                layer.add(circle3);
                //将层添加到舞台中
                stage.add(layer);
            },
            // demo37
            start37(){
                // 创建Kinetic舞台，绑定我们添加的<div>容器 
                let stage = new Kinetic.Stage({
                    container: 'canvas37', // <div>的id 
                    width: 600, // 创建的舞台宽度 
                    height: 400 // 创建的舞台高度 
                });
                // 创建Kinetic用户层
                let layer = new Kinetic.Layer();
                // 创建一个Kinetic矩形对象 
                let rect = new Kinetic.Rect({
                    x: 200, // 矩形左上角x坐标 
                    y: 150, // 矩形左上角y坐标 
                    width: 200, // 矩形的宽度 
                    height: 100, // 矩形的高度 
                    fill: "red", // 矩形的填充色 
                    stroke: "black", // 矩形边缘线的颜色
                    strokeWidth: 4 // 矩形边缘线的宽度
                });
                // 向用户层中添加上面的矩形 
                layer.add(rect);
                // 将上面的用户层添加到舞台上 
                stage.add(layer);
                stage.draw();


                
                // stage.load(json);// 加载舞台
            },
            // demo38
            start38(){},
            // demo39
            start39(){},
            // demo40
            start40(){},


        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.kinetic_wrap{
    padding: 20px;
    .canvas_wrap{ border: 1px solid #ddd; padding: 10px; margin: 10px; }
    .demo_name{ font-size: 18px; font-weight: bold; }
    .canvas_test{ border: 1px solid red; }
}
</style>
