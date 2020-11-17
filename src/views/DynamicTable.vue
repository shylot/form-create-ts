<template>
  <div class="home">
    <FcDynamicTable ref="dynamicTable"
                    :formRule="formRule"
                    :layoutType="layoutType"
                    :cols="cols"
                    @changeForm="changeForm"></FcDynamicTable>
    <!--<fc-pop-info ref="dom"></fc-pop-info>-->
    <!--<fc-upload></fc-upload>-->
    <!--<fc-group></fc-group>-->
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import FcUpload from '@/components/formCreate/FcUpload.vue';
    import FcGroup from '@/components/formCreate/FcGroup.vue';
    import FcPopInfo from '@/components/formCreate/FcPopInfo.vue';
    import FcDynamicTable from '@/components/formCreate/FcDynamicTable.vue';

    @Component({
        components: {
            FcPopInfo,
            FcGroup,
            FcUpload,
            FcDynamicTable,
        },
    })
    export default class DynamicTable extends Vue {
        @Prop() private msg!: string;

        private layoutType: number = 0;
        private cols: number = 2;
        private formRule: any[] = [
            {
                field: 'eco_ecologyarea_p@name',
                title: '名称',
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
        ];

        private mounted() {
            const dom: any = this.$refs.dom;
            /*this.$nextTick(() => {
                dom.fApi.disabled(true);
            })*/
        }
    }
</script>
