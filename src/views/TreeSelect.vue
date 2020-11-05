<template>
  <div class="home">
    <TreeSelectTitle></TreeSelectTitle>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TreeSelectTitle from '@/components/treeSelect/TreeSelectTitle.vue';

    @Component({
        components: {TreeSelectTitle},
    })
    export default class TreeSelect extends Vue {
    }
</script>
