<template>
  <div id="news">

    <div id="box">
      <div class="wrap">

        <ul id="news-list">
          <li v-for="(item,index) in selfData[ddT]" :key="index">
            <router-link :to="'/news/detail?list=4&type=' + ddT + '&news=' + index">
              <figure class="unit">
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

        <div id="page">
          <a href="javascript:;" class="pagem gofirst" title="首页"></a>
          <a href="javascript:;" class="page goprev" title="上一页"></a>
          <a href="javascript:;" class="pagen num" title="页码">1</a>
          <a href="javascript:;" class="page gonext" title="下一页"></a>
          <a href="javascript:;" class="pagem golast" title="页末"></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'news',
    data() {
      return {
        selfData: {
          1: [
            {
              link: '',
              src: '@/../static/images/news/news1-1.jpg',
              h3: '华飞智能亮相“2017无人机在公路领域应用技术研讨会”',
              time: '-  2017-11-06',
              p: '中 江苏省交通运输厅公路局信息科科长朱雷雷上台发言 ...'
            },
            {
              src: '@/../static/images/news/news1-2.jpeg',
              h3: '华飞智能全系产品悉数亮相深圳安博会',
              time: '-  2017-10-29',
              p: '10月29号，第十六届中国国际社会公共安全博览会（安博会）在深圳国际...'
            },
            {
              src: '@/../static/images/news/news1-3.png',
              h3: '科技强警，华飞新技术助力德阳暴恐演练',
              time: '-  2017-09-04',
              p: '本次实战演练包括武警特战技能综合演示、公...'
            },
            {
              src: '@/../static/images/news/news1-4.jpg',
              h3: '华飞智能参加第七届国际警用装备及反恐技术装备展览会',
              time: '-  2017-05-21',
              p: '第七届国际警用装备及反恐技术装备展览会暨学术研讨会于2017年5月19~21...'
            },
            {
              src: '@/../static/images/news/news1-5.jpg',
              h3: '华飞无人机保障2017年世界铁人三项赛中国赛首战',
              time: '-  2017-04-02',
              p: '铁人三项运动是体育运动项目之一，比赛由天然水域游泳、公路自行车、公路长跑三项...'
            }
          ],
          2: [
            {
              src: '@/../static/images/news/news2-1.jpg',
              h3: '6月1日起无人机需实名登记 民航局正制定无人机经营准入规定',
              time: '-  2017-06-02',
              p: '6月1日起，已经或正准备购买无人机的用户需要注意，如果您的无人机起飞重量在2...'
            }
          ]
        },
        type: 1
      }
    },
    methods: {

    },
    created() {
      this.dt = this.$route.query.type;
    },
    computed: {
      ddT: function () {
        return this.dt = this.$route.query.type
      }
    }
  }
</script>

<style scoped>
  @import "../../static/css/news.css";
</style>
