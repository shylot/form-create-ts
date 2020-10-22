<template>
    <el-tabs type="card">
        <el-tab-pane v-for="tab in tabsData"
                     :name="tab.name"
                     :label="tab.label"
                     :key="tab.label">
        </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class EldTabs extends Vue {
        private tabsData: any = {
            one: {
                label: '页签一',
                name: 'one',
            },
            tow: {
                label: '页签二',
                name: 'tow',
            },
            three: {
                label: '页签三',
                name: 'three',
            },
            four: {
                label: '页签四',
                name: 'four',
            },
        };
    }
</script>

<style scoped>

</style>

