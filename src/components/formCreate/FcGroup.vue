<template>
    <!--分组-->
    <form-create v-model="fApi" :rule="rule" :option="option"></form-create>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class FcGroup extends Vue {
        private fApi: any = {};
        private option: any = {};
        private rule: any[] = [
            {
                type: 'div',
                title: '经纬度',
                children: [
                    {
                        type: 'div',
                        children: [
                            {
                                type: 'label',
                                children: ['+经纬度'],

                            },
                            {
                                type: 'el-input',
                                field: 'lng',
                            },
                        ],
                    },
                ],
            },
        ];
    }
</script>

<style scoped>

</style>
