<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pureTable">纯前端</router-link> |
      <router-link to="/eLDTable">El表单</router-link> |
      <router-link to="/about">About</router-link> |
      <!--<router-link to="/formCreate">formCreate</router-link> |-->
      <router-link to="/dcms">dcms</router-link> |
      <router-link to="/treeSelect">treeSelect</router-link> |
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

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
    height: calc(100% - 90px);

    & > div {
      height: 100%;
    }
  }
</style>
