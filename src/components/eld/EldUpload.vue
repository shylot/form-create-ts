<template>
    <!--action="https://jsonplaceholder.typicode.com/posts/"-->
    <el-upload
            class="upload-demo"
            action="localhost:8080/dist"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class EldUpload extends Vue {
        private fileList: any[] = [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}];

        private handleRemove(file: any, fileList: any[]) {
            console.log(file);
            console.log(fileList);
        }
        private handlePreview(file: any) {
            console.log(file);
        }
        private handleExceed(files: any[], fileList: any[]) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        }
         private beforeRemove(file: any, fileList: any[]) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        }
    }
</script>

<style scoped>

</style>

