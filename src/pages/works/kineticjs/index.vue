<template>
    <div class="kinetic_wrap">
        <p>https://www.cnblogs.com/maqunjing/p/3160325.html</p>
        <el-row class="canvas_wrap">
            <div class="canvas" id="canvas" ref="canvas"></div> 
        </el-row>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                stage: null,
                layer: null,
                stageW: 1550,
                stageH: 600,
                groupObj:{},
                startX: 50,
                startY: 50,
                spaceX: 100,
                spaceY: 100,
                heightH: 50,
                heightB: 100,
                heightF: 50,
                unitW: 150,
                standardData: [
                    {id: '01', head: 'PO-01', body: '专员审批01', footer: '你好'},
                    {id: '02', head: 'PO-02', body: '专员审批02', footer: '张三'},
                    {id: '03', head: 'PO-03', body: '专员审批03', footer: '李四'},
                    {id: '04', head: 'PO-04', body: '专员审批04', footer: '王五'},
                    {id: '05', head: 'PO-05', body: '专员审批05', footer: 'qqq'},
                    {id: '06', head: 'PO-06', body: '专员审批06', footer: 'www'},
                    {id: '07', head: 'PO-07', body: '专员审批07', footer: 'eee'},
                    {id: '08', head: 'PO-08', body: '专员审批08', footer: 'rrr'},
                    {id: '09', head: 'PO-09', body: '专员审批09', footer: 'ttt'},
                    {id: '10', head: 'PO-10', body: '专员审批10', footer: 'yyy'},
                    {id: '11', head: 'PO-11', body: '专员审批11', footer: 'uuu'},
                    {id: '12', head: 'PO-12', body: '专员审批12', footer: 'iii'},
                    {id: '13', head: 'PO-13', body: '专员审批13', footer: 'ooo'},
                    {id: '14', head: 'PO-14', body: '专员审批14', footer: 'ppp'},
                    {id: '15', head: 'PO-15', body: '专员审批15', footer: 'lll'},
                    {id: '16', head: 'PO-16', body: '专员审批16', footer: 'kkk'},
                    {id: '17', head: 'PO-17', body: '专员审批17', footer: 'jjj'},
                    {id: '18', head: 'PO-18', body: '专员审批18', footer: 'hhh'},
                    {id: '19', head: 'PO-19', body: '专员审批19', footer: 'ggg'},
                    {id: '20', head: 'PO-20', body: '专员审批20', footer: 'fff'},
                    {id: '21', head: 'PO-21', body: '专员审批21', footer: 'ddd'},
                    {id: '22', head: 'PO-22', body: '专员审批22', footer: 'sss'},
                    {id: '23', head: 'PO-23', body: '专员审批23', footer: 'aaa'},
                    {id: '24', head: 'PO-24', body: '专员审批24', footer: 'zzz'},
                    {id: '25', head: 'PO-25', body: '专员审批25', footer: 'xxx'},
                    {id: '26', head: 'PO-26', body: '专员审批26', footer: 'ccc'},
                    {id: '27', head: 'PO-27', body: '专员审批27', footer: 'vvv'},
                    {id: '28', head: 'PO-28', body: '专员审批28', footer: 'bbb'},
                    {id: '29', head: 'PO-29', body: '专员审批29', footer: 'nnn'},
                    {id: '30', head: 'PO-30', body: '专员审批30', footer: 'mmm'},
                    {id: '31', head: 'PO-31', body: '专员审批31', footer: 'xxx'},
                ],
            };
        },
        created(){},
        mounted(){
            let self = this;
            self.createStage();
        },
        methods: {
            // 创建舞台
            createStage(){
                let self = this;
                self.stage = new Kinetic.Stage({
                    container: 'canvas',
                    width: self.stageW,
                    height: self.stageH,
                });
                self.layer = new Kinetic.Layer();
                let oneRowCount = parseInt(self.stageW / (self.unitW+self.spaceX));
                let rowH = self.heightH + self.heightB + self.heightF + self.spaceY;
                let rowNum = Math.ceil(self.standardData / oneRowCount);
                let isOddRow = true; // 是否为奇数行

                let startX = self.startX;
                let startY = self.startY;
                let spaceX = self.spaceX;
                let spaceY = self.spaceY;

                let x,y, currRowNum;
                self.standardData.forEach((item, i) => {
                    self.$set(self.groupObj, 'group'+i, new Kinetic.Group({draggable: true}));
                    currRowNum = parseInt((i)/oneRowCount)+1;
                    let idx = (i)%oneRowCount;
                    if(currRowNum%2==1){
                        // 奇数行
                        x = startX+(self.unitW+self.spaceX)*idx;
                        y = startX+rowH*(currRowNum-1);
                    }else{
                        // 偶数行
                        x = startX+(self.unitW+self.spaceX)*(oneRowCount-1)-(self.unitW+self.spaceX)*idx;
                        y = startX+rowH*(currRowNum-1);
                    }
                    
                    self.oneGroup(x, y, item.head, item.body, item.footer, 'group'+i);
                    /*
                    rect = new Kinetic.Rect({
                        x: 50+i*250, // 矩形左上角x坐标 
                        y: 50, // 矩形左上角y坐标 
                        width: 150, // 矩形的宽度 
                        height: 200, // 矩形的高度 
                        fill: 'red', // 矩形的填充色 
                        stroke: 'black', // 矩形边缘线的颜色
                        strokeWidth: 1 // 矩形边缘线的宽度
                    });
                    self.layer.add(rect);
                    */
                });
                self.stage.add(self.layer);
                self.stage.draw();
            },
            // 一个单元
            oneGroup(x=50, y=50, hText='', bText='', fText='', group){
                let self = this;
                let rowH = self.heightH + self.heightB + self.heightF;
                let head, headText, body, bodyText, footer, footerText, top, right, bottom, left;

                head = new Kinetic.Rect({
                    x: x,
                    y: y,
                    width: self.unitW,
                    height: self.heightH,
                    fill: '#aed2f7',
                    stroke: '#333333',
                    strokeWidth: 1,
                });
                headText = new Kinetic.Text({
                    x: x,
                    y: y,
                    text : hText,
                    fill : 'black',
                    width: self.unitW,
                    height: self.heightH,
                    padding: 10,
                    align: 'center',
                });
                body = new Kinetic.Rect({
                    x: x,
                    y: y+self.heightH,
                    width: self.unitW,
                    height: self.heightB,
                    fill: '#e1f7ae',
                    stroke: '#333333',
                    strokeWidth: 1,
                });
                bodyText = new Kinetic.Text({
                    x: x,
                    y: y+self.heightH,
                    text : bText,
                    fill : 'black',
                    width: self.unitW,
                    height: self.heightB,
                    padding: 10,
                    align: 'center',
                });
                footer = new Kinetic.Rect({
                    x: x,
                    y: y+self.heightH+self.heightB,
                    width: self.unitW,
                    height: self.heightF,
                    fill: '#f7e4ae',
                    stroke: '#333333',
                    strokeWidth: 1,
                });
                footerText = new Kinetic.Text({
                    x: x,
                    y: y+self.heightH+self.heightB,
                    text : fText,
                    fill : 'black',
                    width: self.unitW,
                    height: self.heightF,
                    padding: 10,
                    align: 'center',
                });
                top = new Kinetic.Rect({
                    x: x+(self.unitW/2-5),
                    y: y-10,
                    width: 10,
                    height: 10,
                    fill: '#efefef',
                    stroke: '#333333',
                    strokeWidth: 1,
                });
                right = new Kinetic.Rect({
                    x: x+self.unitW,
                    y: y+(rowH/2-5),
                    width: 10,
                    height: 10,
                    fill: '#efefef',
                    stroke: '#333333',
                    strokeWidth: 1,
                });
                bottom = new Kinetic.Rect({
                    x: x+(self.unitW/2-5),
                    y: y+rowH,
                    width: 10,
                    height: 10,
                    fill: '#efefef',
                    stroke: '#333333',
                    strokeWidth: 1,
                });
                left = new Kinetic.Rect({
                    x: x-10,
                    y: y+(rowH/2-5),
                    width: 10,
                    height: 10,
                    fill: '#efefef',
                    stroke: '#333333',
                    strokeWidth: 1,
                });

                self.groupObj[group].add(head).add(headText).add(body).add(bodyText).add(footer).add(footerText)
                                    .add(top).add(right).add(bottom).add(left);
                self.layer.add(self.groupObj[group]);
            },
            // 画箭头
            drawArrow(){
                var stage = addStage();
                var layer = new Kinetic.Layer();
                var arrow = new Kinetic.Arrow({
                    points: [73,160, 340, 23],
                    stroke: 'blue',
                    fill : 'blue',
                    strokeWidth: 1,
                    draggable: true,
                    tension: 0
                });
                layer.add(arrow);
                stage.add(layer);
                arrow.setPoints([1, 2, 3, 4]);
                assert.equal(arrow.points()[0], 1);
                arrow.setPoints([5,6,7,8]);
                assert.equal(arrow.getPoints()[0], 5);
                arrow.setPoints([73, 160, 340, 23, 50,100, 80, 50]);
                arrow.tension(0);
                arrow.pointerLength(15);
                assert.equal(arrow.pointerLength(), 15);
                arrow.pointerWidth(15);
                assert.equal(arrow.pointerWidth(), 15);
                assert.equal(arrow.getClassName(), 'Arrow');
                layer.draw();
                showHit(layer);
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .kinetic_wrap{
        padding: 20px;
        .canvas_wrap{ height: 600px; border: 1px solid #ddd; overflow: auto; }
    }
</style>