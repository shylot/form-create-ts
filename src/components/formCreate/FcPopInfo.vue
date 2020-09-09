<template>
    <!--分组-->
    <form-create v-model="fApi" :rule="rule" :option="option" class="dynamic_form__content"></form-create>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class FcPopInfo extends Vue {
        private fApi: any = {};
        private option: any = {
            form: {
                // 'labelPosition': 'top',
                statusIcon: true,
            },
            info: {
                type: 'popover',
            },
            row: {
                // gutter: 30,
                // 若子组件用到了element ui就会出现多余的空格
            },
            global: {
                '*': {
                    col: {
                        span: 12,
                    },
                },
            },
            // 表单提交事件
            onSubmit(formData: any) {
                alert(JSON.stringify(formData));
            },

        };
        private rule: any[] = [
            {
                type: 'div',
                title: '地址',
                // info: '测试',
                className: '__item--info',
                children: [
                    {
                        type: 'el-input',
                        field: 'address',
                        value: '中国-武汉',
                        style: {
                            width: 'calc(100% - 20px)',
                        },
                    },
                    {
                        type: 'el-tooltip',
                        children: [{
                            type: 'i',
                            class: 'el-icon-warning',
                            style: {
                                position: 'absolute',
                                top: '30%',
                                right: '-20px',
                            },
                        }],
                        props: {
                            content: '我来自中国武汉',
                        },
                    },
                ],
            },
            {
                type: 'input',
                title: '测试',
                field: 'test',
                value: 29,
                validate: {
                    required: true,
                },
            },
            {
                type: 'inputNumber',
                title: '数量',
                field: 'num',
                value: 1,
                validate: {
                    max: 2,
                    type: 'number',
                },
            },
        ];
    }
</script>

<style lang="less">
    .dynamic_form__content {

        .__item--info {
            .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
                margin-bottom: unset;
            }
            .el-col {
                width: 100%;
            }
        }

    }
</style>
