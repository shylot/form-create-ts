<template>
  <div ref="dom"></div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class GvComp extends Vue {
        private mounted() {
            const dom: any = this.$refs.dom;

        }

    }
</script>
