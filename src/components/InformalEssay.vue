<template>
    <div>
        <article>
            <div class="l_box">
                <div class="search">
                    <form action="/" method="post" name="searchform" id="searchform">
                        <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字词" style="color: rgb(153, 153, 153);" onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}" onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}" type="text">
                        <input name="show" value="title" type="hidden">
                        <input name="tempid" value="1" type="hidden">
                        <input name="tbname" value="news" type="hidden">
                        <input name="Submit" class="input_submit" value="搜索" type="submit">
                    </form>
                </div>
                <div class="fenlei">
                    <h2>文章分类</h2>
                    <ul>
                        <li><a href="/">学无止境（33）</a></li>
                        <li><a href="/">日记（19）</a></li>
                        <li><a href="/">慢生活（520）</a></li>
                        <li><a href="/">美文欣赏（40）</a></li>
                    </ul>
                </div>
                <div class="tuijian">
                    <h2>站长推荐</h2>
                    <ul>
                        <li><a href="/">你是什么人便会遇上什么人</a></li>
                        <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
                        <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
                        <li><a href="/">个人博客模板《绅士》后台管理</a></li>
                        <li><a href="/">你是什么人便会遇上什么人</a></li>
                        <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
                        <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
                        <li><a href="/">个人博客模板《绅士》后台管理</a></li>
                    </ul>
                </div>
                <div class="tuijian">
                    <h2>点击排行</h2>
                    <ul>
                        <li><a href="/">你是什么人便会遇上什么人</a></li>
                        <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
                        <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
                        <li><a href="/">个人博客模板《绅士》后台管理</a></li>
                        <li><a href="/">你是什么人便会遇上什么人</a></li>
                        <li><a href="/">帝国cms 列表页调用子栏目，没有则不显示栏目名称</a></li>
                        <li><a href="/">第二届 优秀个人博客模板比赛参选活动</a></li>
                        <li><a href="/">个人博客模板《绅士》后台管理</a></li>
                    </ul>
                </div>
                <div class="cloud">
                    <h2>标签云</h2>
                    <ul>
                        <a href="/">陌上花开</a>
                        <a href="/">校园生活</a>
                        <a href="/">html5</a>
                        <a href="/">SumSung</a>
                        <a href="/">青春</a>
                        <a href="/">温暖</a>
                        <a href="/">阳光</a>
                        <a href="/">三星</a>
                        <a href="/">索尼</a>
                        <a href="/">华维荣耀</a>
                        <a href="/">三星</a>
                        <a href="/">索尼</a>
                    </ul>
                </div>
                <div class="guanzhu">
                    <h2>关注我 么么哒</h2>
                    <ul>
                        <img src="../assets/ewm.png">
                    </ul>
                </div>
            </div>
            <div class="r_box">
                <ul>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">你是什么人便会遇上什么人</a></h3>
                        <p>有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。</p>
                    </li>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">爱情没有永远，地老天荒也走不完</a></h3>
                        <p>也许，爱情没有永远，地老天荒也走不完，生命终结的末端，苦短情长。站在岁月的边端，那些美丽的定格，心伤的绝恋，都被四季的掩埋，一去不返。徒剩下这荒芜的花好月圆，一路相随，流离天涯背负了谁的思念？</p>
                    </li>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">女孩都有浪漫的小情怀——浪漫的求婚词</a></h3>
                        <p>还在为浪漫的求婚词而烦恼不知道该怎么说吗？女孩子都有着浪漫的小情怀，对于求婚更是抱着满满的浪漫期待，也希望在求婚那一天对方可以给自己一个最浪漫的求婚词。</p>
                    </li>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">擦肩而过</a></h3>
                        <p>《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的</p>
                    </li>
                    <li>
                        <h3><a href="/">女孩都有浪漫的小情怀——浪漫的求婚词</a></h3>
                        <p>还在为浪漫的求婚词而烦恼不知道该怎么说吗？女孩子都有着浪漫的小情怀，对于求婚更是抱着满满的浪漫期待，也希望在求婚那一天对方可以给自己一个最浪漫的求婚词。</p>
                    </li>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">擦肩而过</a></h3>
                        <p>《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的</p>
                    </li>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">女孩都有浪漫的小情怀——浪漫的求婚词</a></h3>
                        <p>还在为浪漫的求婚词而烦恼不知道该怎么说吗？女孩子都有着浪漫的小情怀，对于求婚更是抱着满满的浪漫期待，也希望在求婚那一天对方可以给自己一个最浪漫的求婚词。</p>
                    </li>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">你是什么人便会遇上什么人</a></h3>
                        <p>有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。</p>
                    </li>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">爱情没有永远，地老天荒也走不完</a></h3>
                        <p>也许，爱情没有永远，地老天荒也走不完，生命终结的末端，苦短情长。站在岁月的边端，那些美丽的定格，心伤的绝恋，都被四季的掩埋，一去不返。徒剩下这荒芜的花好月圆，一路相随，流离天涯背负了谁的思念？</p>
                    </li>
                    <li><i><a href="/"><img src="../assets/logo.png"></a></i>
                        <h3><a href="/">擦肩而过</a></h3>
                        <p>《擦肩而过》文/清河鱼 编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的</p>
                    </li>
                </ul>
                <div class="pagelist">
                    <a class="allpage"><b><</b></a>
                    &nbsp;&nbsp;
                    <a href="#" class="curPage">1</a>
                    &nbsp;&nbsp;
                    <a href="#" onclick="page(2)">2</a>
                    &nbsp;&nbsp;<a href="#" onclick="page(3)">3</a>
                    &nbsp;&nbsp;<a href="#" onclick="page(4)">4</a>
                    &nbsp;&nbsp;<a href="#" onclick="page(5)">5</a>
                    &nbsp;&nbsp;<a href="#" onclick="page(6)">6</a>
                    &nbsp;&nbsp;<a href="#" onclick="page(7)">7</a>
                    &nbsp;&nbsp;<a href="#" onclick="page(8)">8</a>
                    &nbsp;&nbsp;<a href="#" onclick="page(9)">9</a>
                    &nbsp;&nbsp;<a href="#" onclick="page(2)">下一页</a>
                </div>
            </div>
        </article>
    </div>
</template>

<style>
    .cloud ul a {
        line-height: 24px;
        height: 24px;
        display: block;
        background: #999;
        float: left;
        padding: 3px 11px;
        margin: 10px 10px 0 0;
        border-radius: 8px;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
        color: #FFF;
    }
    .cloud ul a:nth-child(8n-7) { background: #8A9B0F }
    .cloud ul a:nth-child(8n-6) { background: #EB6841 }
    .cloud ul a:nth-child(8n-5) { background: #3FB8AF }
    .cloud ul a:nth-child(8n-4) { background: #FE4365 }
    .cloud ul a:nth-child(8n-3) { background: #FC9D9A }
    .cloud ul a:nth-child(8n-2) { background: #EDC951 }
    .cloud ul a:nth-child(8n-1) { background: #C8C8A9 }
    .cloud ul a:nth-child(8n) { background: #83AF9B }
    .cloud ul a:first-child { background: #036564 }
    .cloud ul a:last-child { background: #3299BB }
    .cloud ul a:hover { border-radius: 0; text-shadow: #000 1px 1px 1px }


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
        .pagelist a {
            padding: 2px 3px;
        }
    }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
        header,article{
            width:96%;
            margin:auto;
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
        .r_box,{
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
    }
    @media only screen and (max-width: 479px) {
        header,article{
            width:96%;
            margin:auto;
        }
        nav{
            width:100%;
        }
        .l_box{
            display:none;
        }
        .r_box{
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
        .picbox ul li i{
            margin:2px;
        }
        .r_box li i{
            float:none;
            margin:0 auto 20px;
            width:100%;
            max-height:150px;
        }
    }
</style>