<template>
    <form-create v-model="fApi" :rule="rule" :option="option" @change="change"></form-create>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class FcUpload extends Vue {
        private fApi: any = {};
        private option: any = {
            form: {
                labelWidth: '125px',
                labelPosition: 'left',
            },
            global:{
                //设置所有组件
                '*':{
                    col:{
                        labelWidth: '125px',
                    },
                },
            },
        };
        private rule: any[] = [

            {
                type: 'input',
                field: 'num',
                title: '数量',
                children: [
                    {type: 'span', slot: 'suffix', children: ['双']},
                ],
                props: {
                    type: 'text',
                    placeholderpe: '请输入',
                },
                validate: {
                    required: true,
                },
            },
            {
                type: 'row',
                children: [
                    {
                        type: 'input',
                        field: 'input',
                        title: '输入框',
                        col: {
                            labelWidth: this.option.form.labelWidth,
                        },
                        style: 'background: "red"',
                        children: [
                            {
                                type: 'span',
                                slot: 'suffix',
                                children: [
                                    '个',
                                ],
                            },
                        ],
                        props: {
                            type: 'text',
                            placeholderpe: '请输入',
                        },
                        validate: {
                            required: true,
                        },
                    },
                    {
                        type: 'input',
                        field: 'input_textarea',
                        title: '文本框',
                        props: {
                            'type': 'textarea',
                            'placeholder': '请输入',
                            'rows': 4,
                            'rowspan': 1,
                            'maxlength': 20,
                            'show-word-limit': true,
                        },
                    },
                    {
                        type: 'inputNumber',
                        field: 'inputNumber',
                        title: '数字',
                        props: {
                            'controls-position': 'right',
                        },
                    },
                ],
                col: {
                    labelWidth: 0,
                },
                props: {
                    gutter: 10,
                    type: 'flex',
                    justify: 'space-between',
                    align: 'middle',
                },
            },
        ];

        private change(a: any, b: any, c: any) {
            const rule: any = c.getRule(a);
            console.log({a, b, rule});
        }
    }
</script>

<style scoped>

</style>
