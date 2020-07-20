<template>
  <div class="home">
    <fc-upload></fc-upload>
    <fc-group></fc-group>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import FcUpload from '@/components/formCreate/FcUpload.vue';
    import FcGroup from '@/components/formCreate/FcGroup.vue';

    @Component({
        components: {
            FcGroup,
            FcUpload,
        },
    })
    export default class DynamicTable extends Vue {
        @Prop() private msg!: string;
    }
</script>
