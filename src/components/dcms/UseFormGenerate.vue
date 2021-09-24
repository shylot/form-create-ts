<template>
   <form-generate ref="formGenerate"
                  :form="form"
                  @changeRelate="changeRelate"
                  @changeForm="changeForm">
   </form-generate>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Watch, Vue} from 'vue-property-decorator';
    import {IRule, IForm} from 'dcms-ui/types/iformGenerate';

    @Component({
        name: 'UseFormGenerate',
        components: {},
    })
    export default class UseFormGenerate extends Vue {

        private form: IForm = require('../../../public/formGenerateRules.json');
        /*private form: IForm = {
            list: [],
            config: {
                labelWidth: 100,
                labelPosition: 'right',
            },
        };*/

        /*private created() {
            console.log(this.list);
            this.form.list = this.list;
        }*/



        private changeRelate(data: any) {
            console.log(data);
        }

        private changeForm(data: any) {
            console.log(data);
        }

    }
</script>
<style lang="less">
</style>
