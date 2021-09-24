<template>
    <div class="eldLayout">
        <div class="eldLayout-select">
            <el-radio-group v-model="layout" size="mini">
                <el-radio-button label="栅格"></el-radio-button>
                <el-radio-button label="分割"></el-radio-button>
                <!--<el-radio-button label=""></el-radio-button>-->
                <!--<el-radio-button label=""></el-radio-button>-->
            </el-radio-group>
        </div>
        <div class="eldLayout-container" v-show="layout==='栅格'">
            <div class="eldLayout-items">
                <div class="eldLayout-items-name">row, col 基本使用</div>
                <div class="eldLayout-items-value">
                    <H3>基本row，col: 24</H3>
                    <el-row>
                        <el-col :span="24"><div class="item">24</div></el-col>
                    </el-row>
                    <H3>基本row，row-type: span，col: 24</H3>
                    <el-row tag="span">
                        <el-col :span="24"><div class="item">24</div></el-col>
                    </el-row>
                    <H3>row-gutter:10，col-span: 12</H3>
                    <el-row :gutter="10">
                        <el-col :span="12"><div class="item">12</div></el-col>
                        <el-col :span="12"><div class="item">12</div></el-col>
                    </el-row>
                    <H3>row-gutter:10，col-span: 8</H3>
                    <el-row :gutter="10" type="flex" justify="space-around" align="middle">
                        <el-col :span="6"><div class="item">8</div></el-col>
                        <el-col :span="6"><div class="item">8</div></el-col>
                        <el-col :span="8"><div class="item">8</div></el-col>
                    </el-row>
                </div>
            </div>
            <div class="eldLayout-items">
                <div class="eldLayout-items-name">row flex</div>
                <div class="eldLayout-items-value">
                    <div class="eldLayout_opt">
                        <el-switch
                                v-model="displayRaster"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-value="flex"
                                active-text="flex">
                        </el-switch>
                        <div>justify
                            <el-select v-model="justifyRaster" clearable placeholder="请选择水平排列方式">
                                <el-option v-for="item of rasterOpt.justify"
                                           :key="item.value"
                                           :label="item.name"
                                           :value="item.value"></el-option>

                            </el-select>
                        </div>
                        <div>
                            align
                            <el-select v-model="alignRaster" clearable placeholder="请选择垂直排列方式">
                                <el-option v-for="item of rasterOpt.align"
                                           :key="item.value"
                                           :label="item.name"
                                           :value="item.value"></el-option>

                            </el-select>
                        </div>
                    </div>
                    <el-row :gutter="10" :type="displayRaster" :justify="justifyRaster" :align="alignRaster" style="height: 80px; background-color: rgba(0, 255, 0, 0.3)">
                        <el-col :span="10"><div class="item">20</div></el-col>
                        <el-col :span="10"><div class="item">20</div></el-col>
                        <el-col :span="20"><div class="item">20</div></el-col>
                    </el-row>

                </div>
            </div>
            <div class="eldLayout-items">
                <div class="eldLayout-items-name">col详解</div>
                <div class="eldLayout-items-value">
                    <H3>24个栅格 </H3>
                    <el-row :gutter="10">
                        <el-col :span="1" v-for="(item, i)  in new Array(24)"><div class="item">{{i + 1}}</div></el-col>
                    </el-row>
                    <H3>8个栅格 </H3>
                    <el-row :gutter="10">
                        <el-col :span="8"><div class="item">8</div></el-col>
                        <el-col :span="8"><div class="item">8</div></el-col>
                        <el-col :span="8"><div class="item">8</div></el-col>
                    </el-row>
                    <H3>offset:左侧的间隔列数（格数） </H3>
                    <el-row :gutter="10">
                        <el-col :span="5" :offset="3"><div class="item">5 (左侧间隔3)</div></el-col>
                        <el-col :span="8"><div class="item">8</div></el-col>
                        <el-col :span="8"><div class="item">8</div></el-col>
                    </el-row>
                    <H3>push/pull:向右/左移动格数（移动后会与下一个栅格相互重叠） </H3>
                    <el-row :gutter="10">
                        <el-col :span="8" :push="2"><div class="item">8 (push 2)</div></el-col>
                        <el-col :span="8"><div class="item">8</div></el-col>
                        <el-col :span="8" :pull="2"><div class="item">8 (pull 2)</div></el-col>
                    </el-row>
                </div>
            </div>
            <div class="eldLayout-items">
                <div class="eldLayout-items-name">col详解之<br/>xs sm md lg xl</div>
                <div class="eldLayout-items-value">

                </div>
            </div>
        </div>
        <div class="eldLayout-container" v-show="layout==='分割'">
            <div class="eldLayout-items">
                <div class="eldLayout-items-name">divider</div>
                <div class="eldLayout-items-value">
                    <div class="eldLayout_opt">
                        <div>justify
                            <el-select v-model="directionDivider" placeholder="请选择分割方向">
                                <el-option v-for="item of dividerOpt.direction"
                                           :key="item.value"
                                           :label="item.name"
                                           :value="item.value"></el-option>

                            </el-select>
                        </div>
                        <div>
                            align
                            <el-select v-model="labelPositionDivider" placeholder="请选择文案位置">
                                <el-option v-for="item of dividerOpt.position"
                                           :key="item.value"
                                           :label="item.name"
                                           :value="item.value"></el-option>

                            </el-select>
                        </div>
                    </div>
                    <el-divider :direction="directionDivider" :content-position="labelPositionDivider">分割一</el-divider>
                    <span>旧故里</span>
                    <el-divider :direction="directionDivider" :content-position="labelPositionDivider">分割二</el-divider>
                    <span>上满天</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class EldLayout extends Vue {

        private layout: string = '栅格';

        private displayRaster: string = 'flex';
        private justifyRaster: string = 'space-between';
        private alignRaster: string = 'middle';
        private rasterOpt: any = {
            justify: [
                {name: '起始位置', value: 'start'},
                {name: '终止位置', value: 'end'},
                {name: '居中', value: 'center'},
                {name: 'around', value: 'space-around'},
                {name: 'between', value: 'space-between'},
            ],
            align: [
                {name: '上', value: 'top'},
                {name: '中', value: 'middle'},
                {name: '下', value: 'bottom'},
            ],
        };

        private directionDivider: string = 'horizontal';
        private labelPositionDivider: string = 'center';
        private dividerOpt: any = {
            direction: [
                {name: '水平', value: 'horizontal'},
                {name: '垂直', value: 'vertical'},
            ],
            position: [
                {name: '左', value: 'left'},
                {name: '中', value: 'center'},
                {name: '右', value: 'right'},
            ],
        };
    }
</script>

<style scoped lang="less">
    .eldLayout {
        width: 100%;
        height: 100%;
        display: flex;
        overflow: hidden;

        &-select {
            position: absolute;
            right: 20px;
            top: 20px;
        }

        &-container {
            width: 100%;
            height: 100%;
            padding: 10px;
            overflow-y: auto;
        }

        &-items {
            width: calc(100% - 20px);
            display: flex;
            padding: 10px 5px;
            margin-bottom: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            &-name {
                width: calc(10% - 20px);
                display: flex;
                align-items: center;
                padding-left: 20px;
                font-size: 24px;
                font-weight: bold;
            }

            &-value {
                width: 90%;
            }
            .item {
                height: 38px;
                line-height: 38px;
                text-align: center;
                color: mediumblue;
                font-weight: bold;
                background-color: rgba(255, 194, 205, 0.5);
                border: 1px solid rgba(255, 194, 205, 0.7);
            }
        }

        &_opt {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
</style>

