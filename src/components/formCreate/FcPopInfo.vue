<template>
    <!--分组-->
    <form-create class="dynamic_form__content"
                 @bType-blur="blurForm"
                 @change="change"
                 v-model="fApi"
                 :rule="rule"
                 :option="option"></form-create>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class FcPopInfo extends Vue {
        private fApi: any = {};
        private option: any = {
            injectEvent: true,
            form: {
                labelPosition: 'right',
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
                emit: ['blur'],
                props: {
                    maxlength: 6,
                },
                // emitPrefix: 'bType',
                validate: [
                    {required: true, message: '该字段必填'},
                    {max: 5, message: '该字段长度不超过5'},
                ],
            },
            {
                type: 'radio',
                title: '单选框',
                field: 'radio',
                options: [
                    {label: '内核', value: 'cpu'},
                    {label: '鼠标', value: 'mouse'},
                    {label: '键盘', value: 'keyboard'},
                    {label: '存储器', value: 'storage'},
                ],
                props: {
                  type: 'button',
                },
            },
            {
                type: 'datePicker',
                title: '日期选择器',
                field: 'datePicker',
                emit: ['blur'],
                // emitPrefix: 'bType',
                value: '',
                props: {
                    type: 'datetime',
                },
            },
            {
                type: 'inputNumber',
                title: '数量',
                field: 'num',
                emit: ['blur'],
                // emitPrefix: 'bType',
                value: 1,
                validate: {
                    max: 2,
                    type: 'number',
                },
            },
            {
                type: 'cascader',
                title: '多级联动',
                field: 'cascader',
                emit: ['blur'],
                // emitPrefix: 'bType',
                value: ['apple', 'computer', 'cpu'],
                // value: 'cpu',
                props: {
                    'options': [
                        {
                            label: '苹果',
                            value: 'apple',
                            children: [
                                {label: '手机', value: 'phone'},
                                {label: '平板', value: 'pad'},
                                {
                                    label: '电脑',
                                    value: 'computer',
                                    children: [
                                        {label: '内核', value: 'cpu'},
                                        {label: '鼠标', value: 'mouse'},
                                        {label: '键盘', value: 'keyboard'},
                                        {label: '存储器', value: 'storage'},
                                    ],
                                },
                            ],
                        },
                    ],
                    'show-all-levels': false,
                    'props': {
                        checkStrictly: true,
                    },
                },
            },
        ];

       /* private blurForm(inject: any) {
            const value: any = inject.self.value;
            console.log(value);
        }*/

        /*private change(a: any, b: any, c: any) {
            // console.log(a, b, c);
        }*/
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
