<template>
  <div id="product">

    <header>
      <div class="wrap banner" :style="{ backgroundImage: 'url(' + arrHead[dt1].url + ')' }"></div>

      <div class="header_yin">
        <h2> {{ arrHead[dt1].h2 }} </h2>
        <h4>{{ arrHead[dt1].h4 }}</h4>
      </div>

      <nav>
        <div class="wrap">
          <div class="nav-list">
            <router-link to="/home" class="home"><span></span></router-link>
            <div class="menu" @click="showList1()">
              <p class="menu-title">
                {{ arrTitle[dt1] }}
                <span class="arrow1"></span>
                <i class="arrow2" :class="{ hidden: showMu1 }"></i>
              </p>
              <ul class="menuList" :class="{ hidden: showMu1 }">
                <li v-for="(item,index) in arrTitle" :key="index">
                  <div class="red-bg"></div>
                  <span class="dash"></span>
                  <router-link :to="link[index] + spec[index]" @click="changeDt1(index)">{{ item }}</router-link>
                </li>
              </ul>
            </div>
            <div class="menu" @click="showList2()">
              <p class="menu-title">
                {{ arrTitle2[dt1][dt2].title }}
                <span class="arrow1"></span>
                <i class="arrow2" :class="{ hidden: showMu2 }"></i>
              </p>
              <ul class="menuList" :class="{ hidden: showMu2 }" ref="menu2" :style="{ height: arrTitle2[dt1].length * 41 + 'px' }">
                <li v-for="(item,index) in arrTitle2[dt1]" :key="index">
                  <div class="red-bg"></div>
                  <span class="dash"></span>
                  <router-link :to="link[dt1] + item.aid" @click="changeDt2(index)">{{ item.title }}</router-link>
                </li>
              </ul>
            </div>
            <div class="pt-title">{{ title }}</div>
          </div>
        </div>
      </nav>
    </header>

    <router-view></router-view>

  </div>
</template>

<script>
  import VueEvent from '../model/VueEvent';

  export default {
    name: 'more',
    data() {
      return {
        arrHead: [
          {
            h2: 'PRODUCT CENTER',
            h4: '产品中心',
            url: '@/../static/images/more/header-banner1.jpg'
          },
          {
            h2: 'SOLUTION',
            h4: '解决方案',
            url: '@/../static/images/more/header-banner2.jpg'
          },
          {
            h2: 'SERVICE SUPPORT',
            h4: '服务支持',
            url: '@/../static/images/more/header-banner3.jpg'
          },
          {
            h2: 'NEWS',
            h4: '新闻中心',
            url: '@/../static/images/more/header-banner4.jpg'
          },
          {
            h2: 'ABOUT US',
            h4: '关于我们',
            url: '@/../static/images/more/header-banner5.jpg'
          }
        ],
        arrTitle: ['产品中心','解决方案','服务支持','新闻中心','关于我们'],
        arrTitle2: {
          0: [
            { title: '飞行平台', aid: '?list=1&type=1' },
            { title: '飞机负载', aid: '?list=1&type=2' },
            { title: '地面站', aid: '?list=1&type=3' },
            { title: '侦查防御系统', aid: '?list=1&type=4' },
          ],
          1: [
            { title: '公安行业', aid: '?list=2&type=1' },
            { title: '消防林业', aid: '?list=2&type=2' },
            { title: '石油化工', aid: '?list=2&type=3' },
            { title: '电力行业', aid: '?list=2&type=4' },
            { title: '道路巡检', aid: '?list=2&type=5' },
            { title: '测绘行业', aid: '?list=2&type=6' }
          ],
          2: [
            { title: '下载中心', aid: '/download?list=3&type=1' },
            { title: '常见QA', aid: '/qa?list=3&type=2' },
            { title: '服务政策', aid: '/policy?list=3&type=3' }
          ],
          3:[
            { title: '公司新闻', aid: '?list=4&type=1' },
            { title: '行业动态', aid: '?list=4&type=2' },
            ],
          4: [
            { title: '公司介绍', aid: '/us?list=5&type=1' },
            { title: '招纳贤士', aid: '/join?list=5&type=2' },
            { title: '联系我们', aid: '/contact?list=5&type=3' }
          ]
        },
        link: ['/product/index','/solution/index','/support','/news/index','/about'],
        spec: ['?list=1&type=1','?list=2&type=1','/download?list=3&type=1','?list=4&type=1','/us?list=5&type=1'],
        dt1: 0,
        dt2: 0,
        showMu1: true,
        showMu2: true,
        title: ''
      }
    },
    methods: {
      changeDt1(index) {
        this.dt1 = index;
      },
      changeDt2(index) {
        this.dt2 = index;
      },
      showList1() {
        this.showMu1 = !this.showMu1;
        this.showMu2 = true;
      },
      showList2() {
        if (this.showMu2) {
          this.showMu2 = false;
          this.showMu1 = true;
          this.$refs.menu2.style.height = this.arrTitle2[this.dt1].length * 41 + 'px';
        }else {
          this.showMu2 = true;
          this.$refs.menu2.style.height = 0;
        }
      }
    },
    created() {
      this.dt1 = parseInt(this.$route.query.list) - 1;
      this.dt2 = parseInt(this.$route.query.type) - 1;

    },
    updated() {
      this.dt1 = parseInt(this.$route.query.list) - 1;
      this.dt2 = parseInt(this.$route.query.type) - 1;
    },
    mounted() {
      var _this = this;
      VueEvent.$on('toMore',function (data) {
        _this.title = data;
      });
    }
  }
</script>

<style scoped>
  @import "../../static/css/more.css";
</style>
