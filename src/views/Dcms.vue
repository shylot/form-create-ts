<template>
    <div class="dcms">
        <DynamicTable
                ref="dynamicTable"
                :formRule="formRule"
                :layoutType="layoutType"
                :cols="cols"
                @changeForm="changeForm">
        </DynamicTable>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Dcms extends Vue {
        @Prop() private msg!: string;
        private layoutType: number = 0;
        private cols: number = 2;
        private formRule: any[] = [
            {
                field: 'eco_ecologyarea_p@name',
                title: '',
                type: 'input',
                groupAlias: '基本信息',
                groupName: 'per_fireteam_p',
                validate: {
                    required: false,
                    max: 100,
                },
                options: [],
                props: {
                    type: 'text',
                    placeholder: '请输入',
                    format: null,
                },
                value: null,
            },
            {
                field: 'eco_ecologyarea_p@typecode',
                title: '类型代码',
                type: 'select',
                groupAlias: '基本信息',
                groupName: 'per_fireteam_p',
                validate: {
                    message: '类型代码不为空',
                    required: true,
                },
                options: [
                    {
                        label: '饮用水源地（水库）',
                        value: '44D01',
                    },
                    {
                        label: '饮用水源地（河道）',
                        value: '44D02',
                    },
                    {
                        label: '饮用水源地（地下水）',
                        value: '44D03',
                    },
                ],
                props: {
                    'multiple': false,
                    'placeholder': '请选择',
                    'not-found-text': '无匹配数据',
                    'placement': 'bottom',
                    'clearable': true,
                    'format': null,
                },
                value: null,
            },
            {
                field: 'per_forestfireteam_p@area',
                title: '总面积',
                type: 'inputNumber',
                groupAlias: '基本信息',
                groupName: 'per_fireteam_p',
                validate: {
                    required: false,
                    pattern: /^\d+(\.\d+)?$/,
                    message: '请输入正整数',
                },
                options: [],
                props: {
                    'controls-position': 'right',
                    'format': null,
                },
                value: 0,
            },
            {
                field: 'per_forestfireteam_p@defaulttime',
                title: '填报时间',
                type: 'datePicker',
                groupAlias: '基本信息',
                groupName: 'per_fireteam_p',
                validate: {
                    required: false,
                },
                options: [],
                props: {
                    placeholder: '请选择日期',
                    format: null,
                    type: 'datetime',
                },
                value: '',
            },
            {
                field: 'eco_ecologyarea_p@disasterType',
                title: '灾害区类型',
                type: 'fcTabTreeSelect',
                groupAlias: '基本信息',
                groupName: 'per_fireteam_p',
                validate: {
                    required: false,
                },
                options: [],
                props: {
                    type: 'text',
                    placeholder: '请输入',
                    format: null,
                    datas: [
                        {
                            label: '常用',
                            value: '',
                            children: [
                                {label: '水旱灾害风险区', value: '100101000000'},
                                {label: '气象灾害风险区', value: '100101000001'},
                                {label: '地质灾害风险区', value: '100101000002'},
                            ],
                        },
                        {
                            label: '全部',
                            value: '',
                            children: [
                                {
                                    label: '水旱灾害风险区',
                                    value: '100101000000',
                                    children: [
                                        {label: '洪泛区', value: '100101010000'},
                                        {label: '蓄滞洪区', value: '100101020000'},
                                        {label: '防洪保护区', value: '100101030000'},
                                    ],
                                },
                            ],
                        },
                    ],
                },
                value: null,
            },
        ];

        private changeForm(data: any) {
            const str: string = JSON.stringify(data, null, 2);
        }

        private validate() {
            const state: boolean = (this.$refs.dynamicTable as any).validate();
        }
    }
</script>
