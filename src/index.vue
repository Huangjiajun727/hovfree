<template>
  <div id="app">

    <header id="navbar" :class="{ wtBg: wtOnFo }" >
      <div class="wrap">

        <a class="logo" href="http://www.hovfree.com/" :class="{ wtlogo: wtOnFo }"></a>

        <ul id="nav-box">
          <li class="nav-list" v-for="(item,index) in navList" :key="index" @mouseover="addClass()" @mouseout="deleteClass()">

            <router-link  :to="item.link + item.spec" class="nav-title" :class="{ wtColor: wtOnFo }">
              {{ item.title }}
              <span class="line"></span>
            </router-link>
            <ul class="nav-menu" :class="{ showList: showClass, noBg: !item.menu.length }">
              <li class="menu-list" v-for="(list,index) in item.menu" :key="index" >
                <router-link  :to="item.link + list.aid" class="redColor" ref="detial">{{ list.title }}</router-link>
              </li>
            </ul>

          </li>
        </ul>

        <div class="search-box">
          <div class="search-con">
            <input type="text" placeholder="请输入搜索的内容" v-model="keywords" class="search-text" @keyup.enter="search(keywords)"/>
            <router-link :to="'/search/index?keywords=' +  keywords" class="search-submit">GO</router-link>
          </div>
          <a href="javascript:;"><span class="search-logo" :class="{ changeBg: wtOnFo }"></span></a>
        </div>

      </div>

      <div class="nav-bg" :class="{ open: navClass }"></div>

    </header>

    <router-view></router-view>

    <footer>
      <!--以后建议一层一层的写结构 先水平再垂直-->
      <div class="ft-wrap-top">
        <div class="ft-top">
          <div class="ft-lt">
            <a class="ft-logo"></a>

            <ul class="ft-menu">
              <li class="ft-list" v-for="(item,index) in navList" :key="index">
                <router-link  :to="item.link + item.spec" class="redColor">{{ item.title }}</router-link>
                <span class="ft-line" :class="{ noLine: !item.menu.length }"></span>
              </li>
            </ul>
            <div class="ft-p">
              <p>浙江杭州滨江区滨安路1181号</p>
              <p>全国24小时咨询电话：<span>0571-87235785</span></p>
              <p>全案策划  BY：<a href="http://www.lebang.com/">LEBANG.COM</a></p>
            </div>
          </div>

          <div class="ft-rt">

            <div class="rt-top">
              <img src="../static/images/index/QRcode.jpg" class="qr" alt="华飞智能科技有限公司">
              <a href="javascript:;" class="wx"></a>
            </div>

            <div class="rt-bottom">
              <div class="link-group">
                <span>友情链接</span>

                <ul class="ft-select">
                  <li class="other-link" ref="otherLink">
                    <a href="http://www.dahuatech.com" class="redColor">大华股份</a>
                  </li>
                  <li class="self-link" @click="showOtherLk">
                    <a href="javascript:;">华飞智能科技有限公司</a>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="ft-wrap-bottom">
        <div class="ft-bottom">
          <p>COPYRIGHT© 2016 华飞智能科技有限公司</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      keywords: '',
      navList: [
        {
          title: '首页',
          link: '/home',
          menu: [],
          spec: ''
        },
        {
          title: '产品中心',
          link: '/product/index',
          menu: [
            { title: '飞行平台', aid: '?list=1&type=1' },
            { title: '飞机负载', aid: '?list=1&type=2' },
            { title: '地面站', aid: '?list=1&type=3' },
            { title: '侦查防御系统', aid: '?list=1&type=4' },
          ],
          spec: '?list=1&type=1'
        },
        {
          title: '解决方案',
          link: '/solution/index',
          menu: [
            { title: '公安行业', aid: '?list=2&type=1' },
            { title: '消防林业', aid: '?list=2&type=2' },
            { title: '石油化工', aid: '?list=2&type=3' },
            { title: '电力行业', aid: '?list=2&type=4' },
            { title: '道路巡检', aid: '?list=2&type=5' },
            { title: '测绘行业', aid: '?list=2&type=6' }
          ],
          spec: '?list=2&type=1'
        },
        {
          title: '服务支持',
          link: '/support',
          menu: [
            { title: '下载中心', aid: '/download?list=3&type=1' },
            { title: '常见QA', aid: '/qa?list=3&type=2' },
            { title: '服务政策', aid: '/policy?list=3&type=3' }
          ],
          spec: '/download?list=3&type=1'
        },
        {
          title: '新闻中心',
          link: '/news/index',
          menu: [
            { title: '公司新闻', aid: '?list=4&type=1' },
            { title: '行业动态', aid: '?list=4&type=2' },
          ],
          spec: '?list=4&type=1'
        },
        {
          title: '关于我们',
          link: '/about',
          menu: [
            { title: '公司介绍', aid: '/us?list=5&type=1' },
            { title: '招纳贤士', aid: '/join?list=5&type=2' },
            { title: '联系我们', aid: '/contact?list=5&type=3' }
          ],
          spec: '/us?list=5&type=1'
        }
      ],
      navClass: false,
      showClass: false,
      noBd: false,
      onFoo: true,
      wtOnFo: false,
      showMu: null
    }
  },
  methods: {
    search(key) {
      this.$router.push({ name: 'search', query: { keywords: key } });
    },
    addClass() {
      this.navClass = true;
      this.showClass = true;
    },
    deleteClass() {
      this.navClass = false;
      this.showClass = false;
    },
    showOtherLk() {
      if (this.onFoo) {
        this.$refs.otherLink.style.opacity = 1;
        this.onFoo = false;
      }else {
        this.$refs.otherLink.style.opacity = 0;
        this.onFoo = true;
      }
    },
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      /*console.log(scrollTop);*/
      if (scrollTop > 0) {
        this.wtOnFo = true;
      }else {
        this.wtOnFo = false;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll);
  }
}
</script>

<style>
  .redColor:hover {
    color: #db1010!important;
  }
</style>
<style>
  @import "../static/css/reset.css";
</style>
<style scoped="true">
  @import "../static/css/index.css";
</style>
