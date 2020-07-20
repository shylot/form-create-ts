<template>
  <div class="home">
    <p-upload></p-upload>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import PUpload from '@/components/pure/PUpload.vue';

    @Component({
        components: {
            PUpload,
        },
    })
    export default class PureTable extends Vue {

    }
</script>
