<template>
  <div class="home">
    <TreeSelectTitle></TreeSelectTitle>
    <br/>
    <TreeSelectCon :value="value"
                   :options="options"
                   @input="input"
                   @open="open"
                   @close="close"
                   @select="select"
                   @searchChange="searchChange"
    ></TreeSelectCon>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TreeSelectTitle from '@/components/treeSelect/TreeSelectTitle.vue';
    import TreeSelectCon from '@/components/treeSelect/TreeSelectCon.vue';

    @Component({
        components: {TreeSelectTitle, TreeSelectCon},
    })
    export default class TreeSelect extends Vue {
        private value: any = 'a';
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

        private mounted() {
            setTimeout(() => {
                this.value = null;
            }, 10000);
        }

        private input(val: any) {
            alert(['@input', val]);
        }

        private open(val: any) {
            alert(['@open', val]);
        }
        private close(val: any) {
            alert(['@close', val]);
        }
        private select(val: any) {
            alert(['@select', val]);
        }
        private searchChange(val: any) {
            alert(['@searchChange', val]);
        }
    }
</script>
