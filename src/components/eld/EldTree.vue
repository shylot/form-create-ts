<template>
    <div>
        <el-input></el-input>
        <el-tree :data="data"
                 :props="defaultProps"
                 @node-click="handleNodeClick">
        </el-tree>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class EldTree extends Vue {
        private data: any = [
            {
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1',
                    }],
                }],
            },
            {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1',
                    }],
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1',
                    }],
                }],
            },
            {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1',
                    }],
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1',
                    }],
                }],
            },
        ];

        private defaultProps: any =  {
            children: 'children',
            label: 'label',
        };

        private handleNodeClick(a: any, b: any, c: any) {
           alert([a, b, c]);
        }
    }
</script>

<style scoped>

</style>

