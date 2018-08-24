<template>
    <div>
        <article>
            <div class="l_box">
                <div class="about_me">
                    <h2>关于我</h2>
                    <ul>
                        <i><img src="../assets/logo.png"></i>
                        <p><b>GYJ</b>，一个90后草根女站长！19年入行。一直潜心研究web前端技术，
                            一边工作一边积累经验，分享一些个人博客，以及页面优化等心得。</p>
                    </ul>
                </div>
                <div class="wdxc">
                    <h2>我的相册</h2>
                    <ul>
                        <li><a href="/"><img src="../assets/logo.png"></a></li>
                        <li><a href="/"><img src="../assets/logo.png"></a></li>
                        <li><a href="/"><img src="../assets/logo.png"></a></li>
                        <li><a href="/"><img src="../assets/logo.png"></a></li>
                        <li><a href="/"><img src="../assets/logo.png"></a></li>
                        <li><a href="/"><img src="../assets/logo.png"></a></li>
                    </ul>
                </div>
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
                <div class="links">
                    <h2>友情链接</h2>
                    <ul>
                        <a href="http://www.yangqq.com">从前有一个香蕉个人博客</a> <a href="https://www.cnblogs.com/gongyijie/">博客</a>
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
    article {
        width: 1000px;
        margin: auto;
        overflow: hidden;
    }
    a {
        text-decoration: none;
        color: #555;
    }
    h2{
        margin: 0;
    }
    .l_box {
        width: 30%;
        float: left;
    }
    .r_box {
        width: 68%;
        float: right;
    }
    .r_box ul{
        margin: 0;
    }
    .l_box h2 {
        color: #333;
        font-size: 14px;
        line-height: 30px;
        padding-left: 20px;
        background: #fff;
    }
    .l_box div {
        background: rgba(255,255,255,0.5);
        margin-bottom: 20px;
        overflow: hidden;
    }
    .l_box div ul {
        padding: 10px;
        overflow: hidden;
    }
    .about_me img {
        width: 100%;
    }
    .about_me p {
        line-height: 24px;
        font-size: 14px;
    }
    .about_me i {
        width: 120px;
        float: left;
        clear: left;
        margin-right: 10px;
        height: 90px;
        overflow: hidden;
    }
    .wdxc li {
        width: 32%;
        overflow: hidden;
        float: left;
        height: 80px;
        margin-bottom: 2px;
        margin-right: 2px;
    }
    .wdxc li img {
        height: 100%;
        min-height: 80px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
    }
    .wdxc li img:hover {
        transform: scale(1.05);
    }
    .l_box .search {
        border: 1px solid #c93282;
        background: #c93282;
        border-radius: 0 5px 5px 0;
        position: relative;
    }
    .search input.input_submit {
        border: 0;
        background: 0;
        color: #fff;
        outline: none;
        position: absolute;
        top: 10px;
        right: 8%
    }
    .search input.input_text {
        border: 0;
        line-height: 36px;
        height: 36px;
        width: 72%;
        padding-left: 10px;
        outline: none;
    }
    .fenlei li {
        margin-bottom: 10px;
        margin-left: 10px;
    }
    .tuijian li {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 5px;
        background: url(../assets/li.png) left center no-repeat;
        padding-left: 20px;
    }
    .links a {
        display: block;
        float: left;
        margin: 0 10px 5px 0;
    }
    .guanzhu img {
        width: 100%;
    }
    .r_box li {
        background: rgba(255,255,255,0.8);
        padding: 15px;
        overflow: hidden;
        color: #797b7c;
        margin-bottom: 15px;
    }
    .r_box li h3 {
        font-size: 16px;
        line-height: 25px;
        text-shadow: #FFF 1px 1px 1px;
    }
    .r_box li h3 a {
        color: #222;
    }
    .r_box li h3 a:hover {
        color: #000;
        text-decoration: underline;
    }
    .r_box li img {
        float: right;
        clear: right;
        width: 100%;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
    }
    .r_box li i {
        width: 150px;
        display: block;
        max-height: 100px;
        overflow: hidden;
        float: right;
        margin-left: 20px;
    }
    .r_box li p {
        margin: 20px 0 0 0;
        line-height: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
    }
    .r_box li:hover img {
        transform: scale(1.05);
    }
    .r_box li:hover h3 a {
        color: #C93282;
    }
    .pagelist {
        text-align: center;
        color: #666;
        width: 100%;
        clear: both;
        margin: 20px 0;
        padding-top: 20px;
    }
    .pagelist a {
        color: #666;
        margin: 0 2px;
        border: 1px solid #fff;
        padding: 5px 10px;
        background: #FFF;
    }
    .pagelist a:hover {
        color: #C93282;
    }
    .pagelist > b {
        border: 1px solid #000;
        padding: 5px 10px;
    }
    .guanzhu ul{
        margin: 0;
    }
</style>


<script>
    import { } from 'mint-ui';
    export default {
        name: 'homepage',
        data() {
            return {

            }
        }
    }
</script>