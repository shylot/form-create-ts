<template>
    <treeselect
            :options="options"
            v-model="value"
            :searchable="false"
            :show-count="true"
            :default-expand-level="1"
    >
        <label slot="option-label"
               slot-scope="{ node, shouldShowCount, count, labelClassName, countClassName }"
               :title="showLabelTip ? node.label : ''"
               :class="labelClassName">
            {{ node.isBranch ? 'Branch' : 'Leaf' }}: {{ node.label }}
            <span v-if="shouldShowCount" :class="countClassName">({{ count }})</span>
        </label>
        <div slot="value-label"
               slot-scope="{ node}"
               :title="showValueTip ? node.label : ''">
            {{ node.label }}
        </div>
    </treeselect>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    // import the component
    import Treeselect from '@riophae/vue-treeselect';
    // import the styles
    import '@riophae/vue-treeselect/dist/vue-treeselect.css';

    @Component({
        components: {Treeselect},
    })
    export default class TreeSelectTitle extends Vue {

        @Prop({default: true}) private showLabelTip!: boolean;
        @Prop({default: true}) private showValueTip!: boolean;

        private value: any = null;

        private options: any[] = [
            {
                id: 'a',
                label: '你好',
                children: [
                    {id: 'aa', label: '亚历山大安布罗休'},
                    {id: 'ab', label: '宝贝'},
                ],
            },
            {id: 'b', label: 'VB'},
            {id: 'c', label: 'VC'},
        ];
    }
</script>

<style scoped>

</style>
