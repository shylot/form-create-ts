<template>
  <div class="home">
    <!--<eld-upload></eld-upload>-->
    <eld-upload-pic></eld-upload-pic>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import EldUpload from '@/components/eld/EldUpload.vue';
    import EldUploadPic from '@/components/eld/EldUploadPic.vue';


    @Component({
        components: {
            EldUploadPic,
            EldUpload,
        },
    })
    export default class ELDTable extends Vue {

    }
</script>
