<template>
  <div id="solution">

    <div id="box">
      <div class="wrap">
        <router-link :to="'/solution/detail?list=2&type='+ parseInt(ddT + 1) +'&con=' + ddT">
          <figure class="content" @click="showTl(selfData[ddT].h2)">
            <div class="left">
              <img :src="selfData[ddT].src" :alt="selfData[ddT].h2" :title="selfData[ddT].h2"/>
            </div>
            <figcaption class="right">
              <h2>{{ selfData[ddT].h2 }}</h2>
              <p v-html="selfData[ddT].p"></p>
              <button>MORE&nbsp;&nbsp;DETAILS</button>
            </figcaption>
          </figure>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import VueEvent from '../model/VueEvent';

  export default {
    name: 'product',
    data() {
      return {
        selfData: [
          {
            src: '@/../static/images/solution/con-img1.jpg',
            h2: '公安行业解决方案',
            p: '目前的视频监控系统，无法做到全地面覆盖，也存在很大的视野局限性，特别是在执行一些紧急任务时，任务地点往往没有安装摄像机，导致指挥中心无法及时了解现场情况。因此，目前监控系统最迫切的需要解决的问题，是需要一套从地面到空中、可移动的全方位的立体监控方案。'
          },
          {
            src: '@/../static/images/solution/con-img2.png',
            h2: '消防行业解决方案',
            p: '我国森林资源较为贫乏，森林覆盖率约为13%左右，人均森林占有面积仅为世界平均值的1/6，但森林大火每年都有发生，如何解决森林防火的问题，又成为林业工作的重中之重。目前，国外森林防火中应用了较多的新技术和新设备，国内在此方面的应用需求也日益增加，对森林保护的投入逐渐加大，先后运用卫星进行资源普查、森林火场监视，而使用无人机系统对森林火情监测则还是初始阶段。'
          },
          {
            src: '@/../static/images/solution/con-img3.jpg',
            h2: '石油化工行业解决方案',
            p: '石油化工是国民经济的支柱产业，涉及油气的勘探开采，管道输送，石油天然气的精炼。由于油气田多处于偏僻的沙漠和沼泽等地区。这类环境为油气的勘探，油气的输送维护工作带来诸多不便。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了方便油气勘探和油气管线维护，华飞推出了多款多旋翼和垂直起降固定翼无人机，搭载华飞各种智能化检测负载，为石油勘探和油气田和管线的维护带来便利'
          },
          {
            src: '@/../static/images/solution/con-img4.png',
            h2: '电力行业解决方案',
            p: '近几年，随着电力事业的不断发展，输电网规模越来越大，设备越来越多，巡视的工作量也在不断的增加，运行人员逐渐无法忍受重负。与此同时，电网管理水平的不断提高，运行维护单位也对输电线路的运行管理方式进行着不断的探索。华飞无人机可以让电力巡线工作变得更为简单、高效。'
          },
          {
            src: '@/../static/images/solution/con-img5.jpg',
            h2: '道路巡检解决方案',
            p: '我国高速公路通车里程超10万公里，位居世界第一；同时铁路营业总里程达12.1万公里，居世界第二，高速铁路里程达1.9万公里，居世界第一。因此，道路、铁路的日常巡检工作任务十分繁重，在桥梁桥墩，以及山区、湖泊等地，传统人工巡检，难度大、效率低，并且对于作业人员自身安全，也存在一定的风险。'
          },
          {
            src: '@/../static/images/solution/con-img6.jpg',
            h2: '测绘行业解决方案',
            p: '航空测绘是无人机最早应用于民用的领域之一，原理就是通过无人机搭载大分辨率相机，通过正摄（镜头垂直向下）或者倾斜摄影（镜头1正4斜）或者激光雷达扫描的方式，对地形地貌进行拍摄或者扫描，然后通过照片的重叠拼接，产生一张拥有坐标信息的成果图，无人机航测已经是测绘领域不可或缺的组成部分。'
          }
        ],
        dt: 1
      }
    },
    methods: {
      showTl(title) {
        VueEvent.$emit('toMore',title);
      }
    },
    created() {
      this.dt = this.$route.query.type - 1;
    },
    computed: {
      ddT: function () {
        return this.dt = this.$route.query.type - 1;
      }
    }
  }
</script>

<style scoped>
  @import "../../static/css/solution.css";
</style>
