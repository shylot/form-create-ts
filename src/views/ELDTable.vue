<template>
  <div class="home">
    <EldLayout></EldLayout>
    <!--<div>-->
      <!--<EldTree></EldTree>-->
    <!--</div>-->
    <!--<EldSelect></EldSelect>-->
    <!--&lt;!&ndash;<eld-upload></eld-upload>&ndash;&gt;-->
    <!--<el-input v-model="input"></el-input>-->
    <!--<el-input-number v-model="number"></el-input-number>-->
    <!--<eld-tabs></eld-tabs>-->
    <!--<eld-upload-pic></eld-upload-pic>-->
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import EldUpload from '@/components/eld/EldUpload.vue';
    import EldUploadPic from '@/components/eld/EldUploadPic.vue';
    import EldTabs from '@/components/eld/EldTabs.vue';
    import EldSelect from '@/components/eld/EldSelect.vue';
    import EldTree from '@/components/eld/EldTree.vue';
    import EldLayout from '@/components/eld/EldLayout.vue';


    @Component({
        components: {
            EldLayout,
            EldTabs,
            EldUploadPic,
            EldUpload,
            EldSelect,
            EldTree,
        },
    })
    export default class ELDTable extends Vue {
        private input: string = '你好';
        private number: number = 12;

    }
</script>
