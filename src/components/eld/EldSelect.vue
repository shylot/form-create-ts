<template>
    <el-select v-model="value" placeholder="请选择">
        <el-option
                v-for="item in options"
                :title="item.label"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
    </el-select>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class EldSelect extends Vue {
        private value: string = '';
        private options: any = [
            {
                label: '页签一',
                value: 'one',
            },
            {
                label: '页签二',
                value: 'tow',
            },
            {
                label: '页签三',
                value: 'three',
            },{
                label: '页签四',
                value: 'four',
            },
        ];
    }
</script>

<style scoped>

</style>

