<template>
  <div id="app">
    <div class="nav">
      <el-button @click="chooseImage">选择图片</el-button>
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/pureTable">纯前端</router-link> |
      <router-link to="/eLDTable">El表单</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/formCreate">formCreate</router-link> |
      <router-link to="/dcms">dcms</router-link> |
      <router-link to="/treeSelect">treeSelect</router-link> |-->
    </div>
   <!-- <div class="content">
      <router-view/>
    </div>-->
  </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {gsmdp} from '@gsafety/jssdk/dist/gsmdp';

    @Component({
        name: 'App',
        components: {},
    })
    export default class App extends Vue {

        private chooseImage() {
            alert('hello')
            gsmdp.chooseImage({
                key: {
                    count: 9,
                },
                success(res) {
                    alert(res)
                }
            });
        }
    }
</script>
<style lang="less">

  html, body {
    margin: 0;
    height: 100%;
    overflow-x: hidden;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
}


</style>
<style lang="less" scoped>
  .nav {
    padding: 30px;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .content {
    height: calc(100% - 110px);
    padding-top: 20px;

    & > div {
      height: 100%;
    }
  }
</style>
