<template>
  <div class="home">
    <fc-pop-info></fc-pop-info>
    <!--<fc-upload></fc-upload>-->
    <!--<fc-group></fc-group>-->
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import FcUpload from '@/components/formCreate/FcUpload.vue';
    import FcGroup from '@/components/formCreate/FcGroup.vue';
    import FcPopInfo from '@/components/formCreate/FcPopInfo.vue';

    @Component({
        components: {
            FcPopInfo,
            FcGroup,
            FcUpload,
        },
    })
    export default class DynamicTable extends Vue {
        @Prop() private msg!: string;
    }
</script>
