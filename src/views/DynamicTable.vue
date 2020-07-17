<template>
  <div class="home">
    <upload></upload>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Upload from '@/components/formCreate/Upload.vue';

    @Component({
        components: {
            Upload,
        },
    })
    export default class DynamicTable extends Vue {
        @Prop() private msg!: string;
    }
</script>
