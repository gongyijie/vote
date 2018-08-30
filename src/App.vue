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
                  <li><router-link to="/InformalEssay">我的随笔</router-link></li>
                  <li><router-link to="/AboutMe">关于我</router-link></li>
                  <li><router-link to="/">留言</router-link></li>
                  <li><router-link to="/">内容</router-link></li>
                  <li><router-link to="/">内容</router-link></li>
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
            width:96%; margin:auto;
        }
    }
    @media screen and (min-width: 960px) and (max-width: 1023px) {
        header,article{
            width:96%;
            margin:auto;
        }
        .picbox ul{
            width: 23%;
        }
        .picshowlist{
            display:none;
        }
        .tuijian,.guanzhu{
            width:270px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 959px) {
        header,article{
            width:96%;
            margin:auto;
        }
        .picbox ul{
            width: 23%;
        }
        .picshowlist{
            display:none;
        }
        .pagelist a {
            padding: 2px 3px;
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
        nav{
            width:100%;
        }
        nav li{
            width:20%;
        }
        .l_box{
            display:none;
        }
        .r_box,.infosbox,.picsbox{
            width:100%;
        }
        .pagelist a {
            padding: 2px 3px;
        }
        .picbox ul{
            width: 22%;
        }
        .picbox ul li i{
            margin:5px;
        }
        .picinfo{
            display:none;
        }
        .picshowlist{
            display:none;
        }
        .lmname,.view{
            display:none;
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
        nav{
            width:100%;
        }
        .l_box{
            display:none;
        }
        .r_box,.infosbox,.picsbox{
            width:100%;
        }
        .pagelist a {
            padding: 2px 3px;
            margin:0;
        }
        .picbox ul{
            width: 22%;
        }
        .piclistshow ul li{
            height:100px;
            padding:0;
        }
        .piclistshow .picimg{
            height:100px;
        }
        .picbox ul li i{
            margin:2px;
        }
        .picinfo{
            display:none;
        }
        .picshowlist,.pictxt{
            display:none;
        }
        .lmname,.view{
            display:none;
        }
        .r_box li i{
            float:none;
            margin:0 auto 20px;
            width:100%;
            max-height:150px;
        }
    }


</style>
