<template>
    <div class="dcms">
        <h3>表单生成器 - FormGenerate</h3>
        <UseFormGenerate></UseFormGenerate>
        <br/>

        <h3>下拉树选择 - FcTreeSelect</h3>
        <!--<FcTreeSelect :options="options"></FcTreeSelect>-->
        <br/>

        <h3>日期限制 - FcDatePickerLimit</h3>
        <!--<FcDatePickerLimit :limitDate="limitDate"></FcDatePickerLimit>-->
        <br/>

        <h3>下拉下拉树组件 - FcTabTreeSelect</h3>
        <!--<FcTabTreeSelect :datas="datas"></FcTabTreeSelect>-->
        <br/>

        <h3>动态表单 - DynamicTable</h3>
        <!--<DynamicTable-->
                <!--ref="dynamicTable"-->
                <!--:formRule="formRule"-->
                <!--:layoutType="layoutType"-->
                <!--:cols="cols"-->
                <!--@changeForm="changeForm">-->
        <!--</DynamicTable>-->
        <br/>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import UseFormGenerate from '../components/dcms/UseFormGenerate.vue';            // 组件按需加载

    /*下拉选择树*/
    // import FcTreeSelect from 'dcms-ui/packages/fcTreeSelect';            // 组件按需加载
    // import 'dcms-ui/lib/css/theme-default/fcTreeSelect.css';             // 样式按需加载
    /*日期限制*/
    // import FcDatePickerLimit from 'dcms-ui/packages/fcDatePickerLimit';
    /*下拉下拉树组件*/
    // import FcTabTreeSelect from 'dcms-ui/packages/fcTabTreeSelect';
    // import DynamicTable from 'dcms-ui/packages/dynamicTable';      // 组件按需加载
    /*动态表单*/


    @Component({
        components: {UseFormGenerate},
        // components: {DynamicTable, FcTabTreeSelect, FcTreeSelect, FcDatePickerLimit},
    })
    export default class Dcms extends Vue {
        @Prop() private msg!: string;

        // FcTreeSelect
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
        // FcDatePickerLimit
        private limitDate: string = '2020-11-08';
        // FcTabTreeSelect
        private datas: any = [
            {
                label: '常用',
                value: '',
                children: [
                    {label: '苹果', value: 'apple'},
                    {label: '三星', value: 'sun'},
                    {label: '华为', value: 'huawei'},
                ],
            },
            {
                label: '全部',
                value: '',
                children: [
                    {
                        label: '电脑',
                        value: 'computer',
                        children: [
                            {label: 'CPU', value: 'CPU'},
                            {label: '显示器', value: 'view'},
                            {label: '存储器', value: 'storage'},
                            {label: '输入设备与输出设备', value: 'IO'},
                        ],
                    },
                    {label: '平板', value: 'pad'},
                    {label: '手机', value: 'phone'},
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
                type: 'checkbox',
                title: '单选框',
                field: 'radio',
                options: [
                    {label: '内核内核内核内核内核', value: 'cpu'},
                    {label: '鼠标鼠标鼠标鼠标', value: 'mouse'},
                    {label: '键盘键盘键盘键盘', value: 'keyboard'},
                    {label: '存储器存储器存储器', value: 'storage'},
                ],
                props: {
                    // type: 'button',
                },
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
                type: 'FcTreeSelect',
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
<style lang="less" scoped>

</style>
