<template>
  <div class="home">
    <EldSelect></EldSelect>
    <!--<eld-upload></eld-upload>-->
    <el-input v-model="input"></el-input>
    <el-input-number v-model="number"></el-input-number>
    <eld-tabs></eld-tabs>
    <eld-upload-pic></eld-upload-pic>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import EldUpload from '@/components/eld/EldUpload.vue';
    import EldUploadPic from '@/components/eld/EldUploadPic.vue';
    import EldTabs from '@/components/eld/EldTabs.vue';
    import EldSelect from '@/components/eld/EldSelect.vue';


    @Component({
        components: {
            EldTabs,
            EldUploadPic,
            EldUpload,
            EldSelect,
        },
    })
    export default class ELDTable extends Vue {
        private input: string = '你好';
        private number: number = 12;

    }
</script>
