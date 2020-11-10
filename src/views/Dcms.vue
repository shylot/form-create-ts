<template>
    <div class="dcms">
        <!--<DynamicTable
                ref="dynamicTable"
                :formRule="formRule"
                :layoutType="layoutType"
                :cols="cols"
                @changeForm="changeForm">
        </DynamicTable>-->
        <FcTreeSelect :options="options"></FcTreeSelect>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    import {FcTreeSelect} from 'dcms-ui';

    @Component({
        components: {FcTreeSelect},
    })
    export default class Dcms extends Vue {
        @Prop() private msg!: string;

        // fcTreeSelect
        private options: any = [
            {
                label: '常用',
                id: '1',
                children: [
                    {label: '水旱灾害风险区', id: '11'},
                    {label: '气象灾害风险区', id: '12'},
                    {label: '地质灾害风险区', id: '13'},
                ],
            },
            {
                label: '全部',
                id: '2',
                children: [
                    {
                        label: '水旱灾害风险区',
                        id: '21',
                        children: [
                            {label: '洪泛区', id: '211'},
                            {label: '蓄滞洪区', id: '212'},
                            {label: '防洪保护区', id: '213'},
                        ],
                    },
                ],
            },
        ];

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
                field: 'eco_ecologyarea_p@disasterType',
                title: '灾害区类型',
                type: 'fcTreeSelect',
                groupAlias: '基本信息',
                groupName: 'per_fireteam_p',
                validate: {
                    required: false,
                },
                options: [],
                props: {
                    type: 'text',
                    showLabelText: true,
                    placeholder: '请输入',
                    multiple: true,
                    options: [
                        {
                            label: '常用',
                            id: '1',
                            children: [
                                {label: '水旱灾害风险区', id: '11'},
                                {label: '气象灾害风险区', id: '12'},
                                {label: '地质灾害风险区', id: '13'},
                            ],
                        },
                        {
                            label: '全部',
                            id: '2',
                            children: [
                                {
                                    label: '水旱灾害风险区',
                                    id: '21',
                                    children: [
                                        {label: '洪泛区', id: '211'},
                                        {label: '蓄滞洪区', id: '212'},
                                        {label: '防洪保护区', id: '213'},
                                    ],
                                },
                            ],
                        },
                    ],
                },
                value: null,
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
        ];

        private changeForm(data: any) {
            const str: string = JSON.stringify(data, null, 2);
        }

        private validate() {
            const state: boolean = (this.$refs.dynamicTable as any).validate();
        }
    }
</script>
