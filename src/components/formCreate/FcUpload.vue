<template>
    <form-create v-model="fApi" :rule="rule" :option="option"></form-create>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Upload extends Vue {
        private fApi: any = {};
        private option: any = {};
        private rule: any[] = [
            {
                type: 'upload',
                field: 'pic',
                title: '轮播图',
                value: [
                    'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg',
                    'http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg',
                ],
                props: {
                    type: 'select',
                    uploadType: 'image',
                    action: '',
                    name: 'pic',
                    multiple: true,
                    accept: 'image\/*',
                    limit: 2,
                    onSuccess(res: any, file: any) {
                        file.url = res.data.filePath;
                    },
                },
            },
        ];
    }
</script>

<style scoped>

</style>
