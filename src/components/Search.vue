<template>
  <div id="search">

    <header id="header">
      <div class="wrap banner"></div>

      <div class="header_yin">
        <h2>SEARCH RESULT</h2>
        <h4>搜索结果</h4>

        <div class="search-box">
          <div class="search-con">
            <input type="text" placeholder="请输入搜索的内容" v-model="keywords" class="search-text" @keyup.enter="search(keywords)"/>
            <router-link :to="'/search/index?keywords=' +  keywords" class="search-submit">GO</router-link>
          </div>
        </div>
      </div>
    </header>

    <div id="container">
      <div class="con-wrap">
        <header class="wrap-header">
          <h3>搜索结果：</h3>
          <ul>
            <li @click="showAll()" :class="{ focus: classOn1 }">全部({{ searchData.length + searchData1.length }})</li>
            <li @click="show1()" :class="{ focus: classOn2 }">产品中心({{ searchData.length }})</li>
            <li @click="show2()" :class="{ focus: classOn3 }">新闻中心({{ searchData1.length }})</li>
          </ul>
        </header>

        <div id="con-box">
          <div v-if="showA">
            <header class="con-header clear">
              <h3>产品中心</h3>
              <span @click="show1()">MORE({{ searchData.length }})</span>
            </header>
            <ul class="pd-list" :class="{ showMore1: showOne }">
              <li class="unit" v-for="(item,index) in searchData" :key="index" @click="showTl(item.h3)">
                <router-link :to="'/product/detail?list=1&type='+ item.type +'&page='+ item.page +'&product=' + item.product">
                  <figure class="con">
                    <div>
                      <img :src="item.src" :title="item.h3"/>
                    </div>
                    <figcaption>
                      <h3>{{ item.h3 }}</h3>
                      <p>{{ item.p }}</p>
                    </figcaption>
                  </figure>
                </router-link>
              </li>
            </ul>
          </div>

          <div v-if="showB">
            <header class="con-header clear">
              <h3>新闻中心</h3>
              <span @click="show2()">MORE({{ searchData1.length }})</span>
            </header>
            <ul id="news-list" :class="{ showMore2: showTwo }">
              <li v-for="(item,index) in searchData1" :key="index">
                <router-link :to="'/news/detail?list=4&type=' + item.type + '&news=' + item.news">
                  <figure class="unit1">
                    <div>
                      <img :src="item.src" :alt="item.h3"/>
                    </div>
                    <figcaption>
                      <h3>{{ item.h3 }}</h3>
                      <time>{{ item.time }}</time>
                      <p>{{ item.p }}</p>
                    </figcaption>
                  </figure>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import VueEvent from '../model/VueEvent';

  export default {
    name: 'search',
    data() {
      return {
        keywords: '',
        classOn1: true,
        classOn2: false,
        classOn3: false,
        showA: true,
        showOne: true,
        showB: true,
        showTwo:true,
        selfData: [
          {
            h3: 'X1550',
            p: '领航系列六旋翼无人机',
            src: '@/../static/images/product/product-type1-1.png',
            type: 1,
            page: 0,
            product: 0
          },
          {
            h3: 'X1100',
            p: '智能避障、断桨保护',
            src: '@/../static/images/product/product-type1-2.png',
            type: 1,
            page: 0,
            product: 1
          },
          {
            h3: 'X820',
            p: '领航系列四旋翼无人机',
            src: '@/../static/images/product/product-type1-3.jpg',
            type: 1,
            page: 0,
            product: 2
          },
          {
            h3: 'X650H',
            p: '领航系列四旋翼无人机',
            src: '@/../static/images/product/product-type1-4.png',
            type: 1,
            page: 0,
            product: 3
          },
          {
            h3: 'GA-V-2030U',
            p: '200万30倍云台相机',
            src: '@/../static/images/product/product-type2-1.png',
            type: 2,
            page: 0,
            product: 0
          },
          {
            h3: 'GA-V-2045U',
            p: '200万40倍云台相机',
            src: '@/../static/images/product/product-type2-2.png',
            type: 2,
            page: 0,
            product: 1
          },
          {
            h3: 'GA-V-6030U',
            p: '600万像素云台相机',
            src: '@/../static/images/product/product-type2-3.png',
            type: 2,
            page: 0,
            product: 2
          },
          {
            h3: 'GA-V-8030U',
            p: '4K高清云台相机',
            src: '@/../static/images/product/product-type2-4.png',
            type: 2,
            page: 0,
            product: 3
          },
          {
            h3: 'GA-T-0600TA',
            p: '热成像云台相机',
            src: '@/../static/images/product/product-type2-5.png',
            type: 2,
            page: 0,
            product: 4
          },
          {
            h3: 'GA-TV-2030TA',
            p: '双目热成像云台相机',
            src: '@/../static/images/product/product-type2-6.png',
            type: 2,
            page: 0,
            product: 5
          },
          {
            h3: 'GA-V-2012TC',
            p: '可视喊话器',
            src: '@/../static/images/product/product-type2-7.png',
            type: 2,
            page: 1,
            product: 0
          },
          {
            h3: 'GA-V-2012TC',
            p: '可视抛投',
            src: '@/../static/images/product/product-type2-8.png',
            type: 2,
            page: 1,
            product: 1
          },
          {
            h3: 'GA-V-2012TS',
            p: '相机、喊话、抛投三合一挂载',
            src: '@/../static/images/product/product-type2-9.png',
            type: 2,
            page: 1,
            product: 2
          },
          {
            h3: 'GA-V-2012TM',
            p: 'MAC地址采集',
            src: '@/../static/images/product/product-type2-10.png',
            type: 2,
            page: 1,
            product: 3
          },
          {
            h3: 'GA-V-545OP',
            p: '五目倾斜摄影相机',
            src: '@/../static/images/product/product-type2-11.png',
            type: 2,
            page: 1,
            product: 4
          },
          {
            h3: 'GA-V-2012TGV2',
            p: '高精度气体检测器',
            src: '@/../static/images/product/product-type2-12.png',
            type: 2,
            page: 1,
            product: 5
          },
          {
            h3: 'P7',
            p: '一体式遥控器',
            src: '@/../static/images/product/product-type3-1.png',
            type: 3,
            page: 0,
            product: 0
          },
          {
            h3: 'P13',
            p: '地面站',
            src: '@/../static/images/product/product-type3-2.png',
            type: 3,
            page: 0,
            product: 1
          },
          {
            h3: '2000J',
            p: '手持式无人机反制枪',
            src: '@/../static/images/product/product-type4-1.png',
            type: 4,
            page: 0,
            product: 0
          },
          {
            h3: '1500JPV1',
            p: '便携式无人机干扰器',
            src: '@/../static/images/product/product-type4-2.png',
            type: 4,
            page: 0,
            product: 1
          }
        ],
        selfData1 : [
          {
            link: '',
            src: '@/../static/images/news/news1-1.jpg',
            h3: '华飞智能亮相“2017无人机在公路领域应用技术研讨会”',
            time: '-  2017-11-06',
            p: '中 江苏省交通运输厅公路局信息科科长朱雷雷上台发言 ...',
            news: 0,
            type: 1,
          },
          {
            src: '@/../static/images/news/news1-2.jpeg',
            h3: '华飞智能全系产品悉数亮相深圳安博会',
            time: '-  2017-10-29',
            p: '10月29号，第十六届中国国际社会公共安全博览会（安博会）在深圳国际...',
            news: 1,
            type: 1,
          },
          {
            src: '@/../static/images/news/news1-3.png',
            h3: '科技强警，华飞新技术助力德阳暴恐演练',
            time: '-  2017-09-04',
            p: '本次实战演练包括武警特战技能综合演示、公...',
            news: 2,
            type: 1,
          },
          {
            src: '@/../static/images/news/news1-4.jpg',
            h3: '华飞智能参加第七届国际警用装备及反恐技术装备展览会',
            time: '-  2017-05-21',
            p: '第七届国际警用装备及反恐技术装备展览会暨学术研讨会于2017年5月19~21...',
            news: 3,
            type: 1,
          },
          {
            src: '@/../static/images/news/news1-5.jpg',
            h3: '华飞无人机保障2017年世界铁人三项赛中国赛首战',
            time: '-  2017-04-02',
            p: '铁人三项运动是体育运动项目之一，比赛由天然水域游泳、公路自行车、公路长跑三项...',
            news: 4,
            type: 1,
          },
          {
            src: '@/../static/images/news/news2-1.jpg',
            h3: '6月1日起无人机需实名登记 民航局正制定无人机经营准入规定',
            time: '-  2017-06-02',
            p: '6月1日起，已经或正准备购买无人机的用户需要注意，如果您的无人机起飞重量在2...',
            news: 0,
            type: 2,
          }
        ],
        type: 1,
        dt: 1,
        page: 0
      }
    },
    methods: {
      showTl(title) {
        VueEvent.$emit('toMore',title);
      },
      showAll() {
        this.showA = true;
        this.showB = true;
        this.showOne = true;
        this.showTwo = true;
      },
      show1() {
        this.showA = true;
        this.showB = false;
        this.showOne = false;
        this.showTwo = true;
      },
      show2() {
        this.showA = false;
        this.showB = true;
        this.showOne = true;
        this.showTwo = false;
      },
      search(key) {
        this.$router.push({ name: 'search', query: { keywords: key } })
      }
    },
    created() {
      this.keywords = this.$route.query.keywords;
    },
    computed: {
      searchData: function () {
        let list = [];
        this.showA = true;
        for (let  i = 0; i < this.selfData.length; i++) {
          if (this.selfData[i].h3.search(this.keywords) !== -1 || this.selfData[i].p.search(this.keywords) !== -1) {
            list.push(this.selfData[i]);
          }
        }

        list.length ? this.showOne = true : this.showOne = false;

        return list
      },
      searchData1: function () {
        let list = [];
        this.showB = true;
        for (let  i = 0; i < this.selfData1.length; i++) {
          if (this.selfData1[i].h3.search(this.keywords) !== -1 || this.selfData1[i].p.search(this.keywords) !== -1 || this.selfData1[i].time.search(this.keywords) !== -1) {
            list.push(this.selfData1[i]);
          }
        }
        list.length ? this.showTwo = true : this.showTwo = false;

        return list
      }
    }
  }
</script>

<style scoped>
  @import "../../static/css/search.css";
</style>
