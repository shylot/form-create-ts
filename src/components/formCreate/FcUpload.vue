<template>
    <form-create v-model="fApi" :rule="rule" :option="option"></form-create>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class FcUpload extends Vue {
        private fApi: any = {};
        private option: any = {};
        private rule: any[] = [
            {
                type: 'row',
                children: [
                    {
                        type: 'input',
                        field: 'input',
                        title: '输入框',
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
                            labelWidth: '152px',
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
                            'labelWidth': '152px',
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
                            'labelWidth': '152px',
                            'controls-position': 'right',
                        },
                    },
                ],
                props: {
                    gutter: 10,
                    type: 'flex',
                    justify: 'space-between',
                    align: 'middle',
                },
            },
        ];
    }
</script>

<style scoped>

</style>
