<template>
    <!--下拉树组件-->
    <div class="FcTreeSelect">
        <treeselect
                v-model="treeValue"
                :disabled="disabled"
                :multiple="multiple"
                :placeholder="placeholder"
                :clearAllText="clearAllText"
                :clearValueText="clearValueText"
                :noResultsText="noResultsText"
                :noOptionsText="noOptionsText"
                :noChildrenText="noChildrenText"
                :searchable="searchable"
                :clearable="clearable"
                :closeOnSelect="closeOnSelect"
                :options="options"
                :flat="flat"
                :normalizer="normalizer"
                @open="open"
                @close="close"
                @input="input"
                @select="select"
                @deselect="deselect"
                @search-change="searchChange">
            <label slot="option-label"
                   slot-scope="{node, labelClassName}"
                   :class="labelClassName"
                   :title="showLabelText ? node.label : ''">
                {{node.label}}
            </label>
        </treeselect>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Watch, Vue} from 'vue-property-decorator';
    import Treeselect from '@riophae/vue-treeselect';
    import '@riophae/vue-treeselect/dist/vue-treeselect.css';

    @Component({
        name: 'TreeSelectCon',
        components: { Treeselect },
    })
    export default class TreeSelectCon extends Vue {

        @Prop() private options!: any[];                              // 树数据
        @Prop({default: false}) private disabled!: boolean;           // 是否禁用组件
        @Prop({default: false}) private multiple!: boolean;           // 是否多选，默认false
        @Prop({default: '请选择'}) private placeholder!: string;       // 输入框提示
        @Prop({default: ''}) private clearValueText!: string;         // 单选清除提示
        @Prop({default: ''}) private clearAllText!: string;           // 多选小标签总清除提示
        @Prop({default: '无匹配数据'}) private noResultsText!: string; // 无搜索结果提示
        @Prop({default: '无数据'}) private noOptionsText!: string;     // 无数据时提示
        @Prop({default: '无子节点'}) private noChildrenText!: string;  // 孩子节点为空时提示
        @Prop({default: true}) private searchable!: boolean;          // 是否可搜索
        @Prop({default: false}) private clearable!: boolean;          // 是否可清除
        @Prop({default: false}) private closeOnSelect!: boolean;      // 选中后关闭下拉框
        @Prop({default: false}) private showLabelText!: boolean;      // 是否显示标签文本提示
        @Prop({default: false}) private flat!: boolean;               // 是否扁平化选择，默认层级
        @Prop({default: null}) private defaultProps!: any;            // 设置默认的键值名

        @Prop({default: null}) private value!: null;                  // 输入框中的值

        private treeValue: any = null;

        @Watch('value')
        private updateValue(value: any) {
            this.treeValue = value;
        }

        // 将修改后的值传递给动态表单
        @Emit('input')
        private input(value: any) {
            return value;
        }

        // 下拉框打开时触发
        @Emit('open')
        private open(instanceId: string) {
            return instanceId;
        }

        // 下拉框关闭时触发
        @Emit('close')
        private close(value: any, instanceId: string) {
            return {value, instanceId};
        }

        // 选择一个选项后触发
        @Emit('select')
        private select(node: any, instanceId: string) {
            return {node, instanceId};
        }

        // 取消选择一个选项后触发
        @Emit('deselect')
        private deselect(node: any, instanceId: string) {
            return {node, instanceId};
        }

        // 搜索查询更改后触发
        @Emit('searchChange')
        private searchChange(searchQuery: any, instanceId: string) {
            return {searchQuery, instanceId};
        }

        private mounted() {
            this.treeValue = this.value;
        }

        // 通过方法设置节点属性名
        private normalizer(node: any) {
            if (this.defaultProps) {
                const res: any = {};
                for (const name of Object.keys(this.defaultProps)) {
                    const key: string = this.defaultProps[name];
                    const value: any = node[key];
                    if (name !== 'children' || (name === 'children' && value && value.length)) {
                        res[name] = value;
                    }
                }
                return res;
            }
        }

    }
</script>
