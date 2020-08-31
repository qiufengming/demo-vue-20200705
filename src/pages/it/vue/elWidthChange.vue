<template>
    <div class="el_width_change_wrap">
        <div class="row container" ref="container">
            <div class="row f_l left" ref="left" @mouseup="stopMove">
                <div class="f_l tree" ref="tree"></div>
                <div class="f_l move" ref="move" @mousedown="beginMove" @mouseup="stopMove"></div>
            </div>
            <div class="cover" ref="cover"></div>
            <div class="row f_l right" ref="right">
                <div class="f_l right1" ref="right1"></div>
                <div class="f_l right2" ref="right2"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {  },
        data(){
            return {
                isMove: false,
            };
        },
        created(){
            this.initData();
        },
        mounted(){
            let self = this;
            window.addEventListener('mousemove',this.move)
        },
        methods: {
            // 初始化数据
            initData(){
                let self = this;
            },
            move(e){
                let self = this;
                let containerW = self.$refs.container.clientWidth;
                if(self.isMove && e.clientX > 190 && e.clientX <= 390 && containerW>450){
                    self.$refs.cover.style.display = 'block';
                    self.$refs.left.style.width = e.clientX+ 'px';
                    self.$refs.cover.style.width = containerW - e.clientX - 40+ 'px';
                }
            },
            beginMove(e){
                let self = this;
                self.isMove = true;
                let rightW = self.$refs.right.clientWidth;
                self.$refs.cover.style.display = 'block';
                self.$refs.cover.style.width = rightW - 40 + 'px';
            },
            stopMove(e){
                let self = this;
                self.isMove = false;
                let containerW = self.$refs.container.clientWidth;
                self.$refs.left.style.width = e.clientX+ 'px';
                self.$refs.cover.style.display = 'none';
                self.$refs.right.style.width = containerW - e.clientX+ 'px';
            },

        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.el_width_change_wrap{
    padding: 20px;
    .container{
        width: 100%; height: 600px; background-color: #fff; position: relative;
        .left{
            height: 100%; width: 30%; background-color: #ffecf7;
            .tree{ width: calc(100% - 2px); height: 100%; }
            .move{ 
                width: 2px; height: 100%; background-color: blue; /* cursor: col-resize; */ cursor: e-resize; z-index: 3;
            }
        }
        .right{
            height: 100%; width: 70%; background-color: #fffeec;
            .right1, .right2{ width: 48%; margin-left: 2%; height: 100%; }
            .right1{ background-color: #baf3c4; }
            .right2{ background-color: #eabaf3; }
        }
        .cover{
            position: absolute; top: 0; right: 0; background-color: rgba(0, 0, 0, 0.2);
            width: 0; height: 100%; z-index: 10;
        }
    }
}
</style>
