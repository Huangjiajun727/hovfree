<template>
  <div id="home">

    <div id="banner">
      <div class="wrap">
        <transition-group tag="ul" class="banner-box" name="list">
          <li class="banner-list" v-for="(item,index) in imgList" :key="index" v-show="index === mark" @mouseenter="stop" @mouseleave="go">
            <img :src="item.src" class="banner-img">
            <div class="banner_yin">
              <div class="banner-wrap">
                <h2>{{ item.h2 }}</h2>
                <h3>{{ item.h3 }}</h3>
                <router-link :to="'/product/detail/' + item.aid" class="banner-btn">了解更多>></router-link>
              </div>
            </div>
          </li>
        </transition-group>

        <ul class="banner-hd">
          <li v-for="(item,index) in imgList" :key="index" :class="{ 'on': index == mark }" @mouseover="change(index)" @mouseenter="stop" @mouseleave="go"></li>
        </ul>
      </div>

    </div>

    <div id="middle">
      <div class="wrap">

        <router-link to="/solution" class="middle-lt">
          <figure class="case middle-con">
            <img src="../../static/images/home/case_bgkjpg.jpg" alt="解决方案" class="middle-bg"/>
            <figcaption class="case-con">
              <header class="middle-title">
                <h5>解决方案</h5>
                <span></span>
              </header>
              <div class="center">
                <img src="../../static/images/home/logo.png" alt="hovfree">
                <p>华飞无人机满足多种行业的业务需求</p>
                <router-link to="solution/index?list=2&type=1" class="wbtn redBg">MORE +</router-link>
              </div>
            </figcaption>
          </figure>
        </router-link>

        <div class="middle-rt">
          <figure class="video middle-con">
            <figcaption class="video-con">
              <header class="middle-title">
                <h5>宣传视频</h5>
                <span></span>
                <p>
                  时机成熟
                  <br>
                  大华无人机应运而生
                </p>
              </header>
              <div class="center">
                <span class="plbtn plredBg" @click="plVideo()"></span>
              </div>
            </figcaption>
          </figure>
        </div>

      </div>
    </div>

    <div id="product">
      <div class="wrap">
        <ul class="product-box">
          <li class="pt-lt pt-list">
            <router-link to="/product/index?list=1&type=1">
              <figure>
                <figcaption class="pt-con">
                  <h3>飞行平台</h3>
                  <p>无人机——国际先进水平</p>
                  <router-link to="/product/index?list=1&type=1" class="rbtn redBg">MORE +</router-link>
                </figcaption>
                <img src="../../static/images/home/product_1.png" alt="无人机"/>
              </figure>
            </router-link>
          </li>

          <li class="pt-center pt-list">
            <router-link to="/product/index?list=1&type=2">
              <figure>
                <figcaption class="pt-con">
                  <h3>飞机负载</h3>
                  <p>高清摄像机</p>
                  <router-link to="/product/index?list=1&type=2" class="rbtn redBg">MORE +</router-link>
                </figcaption>
                <img src="../../static/images/home/product_2.png" alt="高清摄像机"/>
              </figure>
            </router-link>
          </li>

          <li class="pt-rt pt-list">
            <router-link to="/product/index?list=1&type=3">
              <figure>
                <figcaption class="pt-con">
                  <h3>地面站</h3>
                  <p>显控一体化</p>
                  <router-link to="/product/index?list=1&type=3" class="rbtn redBg">MORE +</router-link>
                </figcaption>
                <img src="../../static/images/home/product_3.jpg" alt="地面站"/>
              </figure>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div id="news">
      <div class="wrap">
        <header class="news-title">
          <router-link to="/news" class="redColor">MORE</router-link>
          <span></span>
        </header>

        <ul class="news-box">
          <li class="news-list">
            <router-link to="/news/detail?list=4&type=1&news=0">
              <figure class="news-con">
                <img src="../../static/images/home/more_1.jpg" alt="news"/>
                <figcaption>
                  <p class="redColor">华飞智能亮相“2017无人机在公路领域应用技术研讨会”</p>
                </figcaption>
              </figure>
            </router-link>
          </li>

          <li class="news-list">
            <router-link to="/news/detail?list=4&type=1&news=1">
              <figure class="news-con">
                <img src="../../static/images/home/more_2.jpeg" alt="news"/>
                <figcaption>
                  <p class="redColor">华飞智能全系产品悉数亮相深圳安博会</p>
                </figcaption>
              </figure>
            </router-link>
          </li>

          <li class="news-list">
            <router-link to="/news/detail?list=4&type=1&news=2">
              <figure class="news-con">
                <img src="../../static/images/home/more_3.png" alt="news"/>
                <figcaption>
                  <p class="redColor">科技强警，华飞新技术助力德阳暴恐演练</p>
                </figcaption>
              </figure>
            </router-link>
          </li>

          <li class="news-list">
            <router-link to="news/detail?list=4&type=1&news=3">
              <figure class="news-con">
                <img src="../../static/images/home/more_4.jpg" alt="news"/>
                <figcaption>
                  <p class="redColor">华飞智能参加第七届国际警用装备及反恐技术装备展览会</p>
                </figcaption>
              </figure>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div id="video" v-show="plshow">
      <div class="video-bg"></div>
      <div class="video-main">
        <a href="javascript:;" class="close" @click="plVideo()"></a>
        <video class="myVideo" controls="controls">
          <source src="//www.hovfree.com//upload/image/2017-04/2017-04-246798.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        imgList: [{
          src: '@/../static/images/home/banner_1.jpg',
          h2: 'X1550',
          h3: '长距长航 稳定可靠',
          aid: '?list=1&type=1&page=0&product=0'
        },{
          src: '@/../static/images/home/banner_2.jpg',
          h2: 'X820',
          h3: '性能均衡 方便快捷',
          aid: '?list=1&type=1&page=0&product=2'
        }],
        mark: 0,
        timer: null,
        plshow: false
      }
    },
    methods: {
      go() {
        this.timer = setInterval(() => {
          this.autoPlay();
        }, 4000)
      },
      stop() {
        clearInterval(this.timer);
        this.timer = null;
      },
      change(index) {
        this.mark = index;
      },
      autoPlay() {
        this.mark++;
        if (this.mark > this.imgList.length - 1) {
          this.mark = 0
        }
      },
      plVideo() {
        this.plshow = !this.plshow;
      }
    },
    created() {
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      })
    }
  }
</script>

<style scoped="true">
  @import "../../static/css/home.css";
</style>
