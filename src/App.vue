<template>
  <div id="app">
      <header>
          <div class="logo">
              <a href="#">GYJ个人博客</a>
          </div>
          <nav id="nav">
              <ul>
                  <li><router-link to="/">网站首页</router-link></li>
                  <li><router-link to="/MyPhoto">我的相册</router-link></li>
                  <li><router-link to="">我的随笔</router-link></li>
                  <li><router-link to="">关于我</router-link></li>
                  <li><router-link to="">留言</router-link></li>
                  <li><router-link to="">内容</router-link></li>
                  <li><router-link to="">内容</router-link></li>
              </ul>
          </nav>
      </header>
      <router-view/>
      <footer>
          <p>Design by <a href="http://www.yangqq.com" target="_blank">个人博客</a>
              <a href="/">2018-09-07</a></p>
      </footer>
  </div>
</template>

<script>
    import {  } from 'mint-ui'

    export default {
        name: 'App',
        components: {

        }
    }
</script>

<style>
    body{
        font: 15px "Microsoft YaHei", Arial, Helvetica, sans-serif;
        color: #555;
        line-height: 1.5;
        margin: 0;
    }
    #app {
        margin: 0;
        background: url("assets/topbg.jpg") no-repeat right top #D6E0E1;
    }
    header{
        width: 100%;
        overflow: hidden;
    }
    .logo{
        width: 1000px;
        margin: auto;
        font-size: 26px;
        padding: 20px 0;
        -webkit-text-shadow: 1px 1px 1px rgba(0,0,0,.2);
        -moz-text-shadow: 1px 1px 1px rgba(0,0,0,.2);
        text-shadow: 1px 1px 1px rgba(0,0,0,.2);
    }
    .logo a {
        color: #FFF;
    }
    ul{
        list-style: none;
    }
    a{
        color: #FFF;
        text-decoration: none;
    }
    nav {
        width: 1000px;
        margin: auto;
        overflow: hidden;
        padding: 0 0 20px 0;
    }
    nav li {
        display: inline-block;
        float: left;
        width: 100px;
        text-align: center;
        overflow: hidden;
        line-height: 30px;
        text-shadow: #fff 1px 0 2px, #fff 0 1px 2px, #fff -1px 0 2px, #fff 0 -1px 2px;
    }
    nav li a {
        color: #C93282;
    }
    nav li a:hover {
        display: block;
        background: #C93282;
        color: #fff;
        border-radius: 0 20px;
        text-shadow: none;
    }
    footer {
        width: 100%;
        olor: #a5a4a4;
        text-align: center;
        padding: 20px 0;
        clear: both;
        text-shadow: #fff 1px 0 2px, #fff 0 1px 2px, #fff -1px 0 2px, #fff 0 -1px 2px;
    }
    footer a {
        color: #a5a4a4 ;
    }
    @media screen and (min-width: 1024px) and (max-width: 1199px) {
        header{
            width:96%;
            margin:auto;
        }
    }
    @media screen and (min-width: 960px) and (max-width: 1023px) {
        header,article{
            width:96%;
            margin:auto;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 959px) {
        header,article{
            width:96%;
            margin:auto;
        }
    }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
        header,article{
            width:96%;
            margin:auto;
        }
        .logo{
            width:100%;
            text-align:center;
        }
        .l_box{
            display: none;
        }
    }
    @media only screen and (max-width: 479px) {
        header,article{
            width:96%;
            margin:auto;
        }
        .logo{
            width:100%;
            text-align:center;
        }
        .l_box{
            display: none;
        }
    }

</style>
