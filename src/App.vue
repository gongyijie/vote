<template>
  <div id="app">
      <header>测一测你能进哪个大公司？ 百度？ 阿里？ 腾讯？ 头条？</header>
      <router-view/>
  </div>
</template>

<script>
    import { Header } from 'mint-ui'

    export default {
        name: 'App',
        components: {
            Header
        }
    }
</script>

<style>
    #app {
        margin: 0;
    }
    header{
        font-size: 12px;
        font-family: "微软雅黑";
        text-align: center;
        color: #000;
        margin: 25px 0 0 0;
    }
</style>
