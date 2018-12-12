<template>
  <div id="about">

    <div id="box">

      <div id="top">
        <div class="wrap">
          <header>
            <h2>{{ headData[0].h2 }}</h2>
            <span class="line"></span>
            <p>{{ headData[0].p }}</p>
          </header>

          <article>
            <div v-html="selfData1"></div>
          </article>

          <ul class="show-list">
            <li v-for="(item,index) in selfData2" :key="index">
              <figure class="show-list-con">
                <div>
                  <img :src="item.src"/>
                </div>
                <figcaption>
                  <span v-for="(con,index) in item.span" :key="index">{{ con }}</span>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>

      <div id="con">
        <div class="con_yin">
          <div class="wrap">

            <div class="line-bgk">
              <header>
                <h2>{{ headData[1].h2 }}</h2>
                <span class="line"></span>
                <p>{{ headData[1].p }}</p>
              </header>

              <div v-for="(item,index) in selfData3" :key="index" class="circle" >
                <div class="circle-wrap">
                  <h4 v-html="item.h4"></h4>
                  <div v-html="item.div"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom" class="wrap">
        <header>
          <h2>{{ headData[2].h2 }}</h2>
          <span class="line"></span>
          <p>{{ headData[2].p }}</p>
        </header>

        <ul class="bottom-list">
          <li v-for="(item,index) in selfData4" :key="index">
            <a href="javascript:void(0);">{{ item }}</a>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'about',
    data() {
      return {
        headData: [
          {
            h2: '华飞智能',
            p: 'HOVFREE  INTELLIGENCE'
          },
          {
            h2: '经营概况',
            p: 'BUSINESS PROFILE'
          },
          {
            h2: '重大创新',
            p: 'MAJOR INNOVATION'
          }
        ],
        selfData1: '<p>浙江<span>华飞智能</span>科技有限公司是大华股份旗下无人机子公司，是一家全球领先的致力于智能无人机和智能机器人研发、销售、培训及服务的高科技公司。</p><p><span>华飞智能</span>继承了大华股份十多年的音视频技术积累，并融入先进的导航飞控、云台增稳、动力系统、空地通信、显控一体、主动安全等多项核心技术，申请了自适应强鲁棒控制算法、高精度松耦合导航算法等相关专利30多项，翻开了大华在行业无人机领域的新篇章。结合行业解决方案的推进，产品已广泛应用于指挥、警用安防、森林防火、电力巡线、道路巡检、环境监测等领域。</p><p><span>华飞智能</span>汇聚了来自浙江大学、哈尔滨工业大学、专业研究院所、军工企业等单位的技术专家，铸就了一支实力雄厚的专业研发团队</p><p>我们在无人机各关键领域不断探索，始终践行华飞创新与品质的精神。我们持续投入真正的智能科技研发，旨在为客户奉献最安全的无人机。</p>',
        selfData2: [
          {
            src: '@/../static/images/about/show-1.png',
            span: ['拥有及获得受理专利592项','软件著作权263项','申请专利以每两天一项的速度增长']
          },
          {
            src: '@/../static/images/about/show-2.png',
            span: ['国内视频监控企业博士后科研工作站']
          },
          {
            src: '@/../static/images/about/show-3.png',
            span: ['现已承接1项国家科技重大专项课题','2项国家高级技术产业化重大专项','3项国家火炬计划项目','4项电子信息产业发展基金项目']
          },
          {
            src: '@/../static/images/about/show-4.png',
            span: ['参与国内标准制定：','TC100国家标准','诸多行业性标准与地方标准...']
          }
        ],
        selfData3: [
          {
            h4: '<h4 class="redH">37.45%</h4>',
            div: '<div>2015年度营业收入100.78亿<br>人民币，增长率37.45%</div>'
          },
          {
            h4: '<h4>26<strong>倍</strong></h4>',
            div: '<div>上市7年来，销售年复合增长<br><span>48.5%</span>，市值增长约<span>26倍</span></div>'
          },
          {
            h4: '<h4 class="redH">10</h4>',
            div: '<div>多次获得全国公安系统警用设备<br><span>十佳品牌</span>， 中国电子警察行业<br>十大<span>最具影响力</span>行业<br>品牌等诸多荣誉</div>'
          },
          {
            h4: '<h4>450<strong>亿</strong></h4>',
            div: '<div>2008年上市，总市值<br><span>450</span>人民币</div>'
          },
          {
            h4: '<h4 class="redH">55.98%</h4>',
            div: '<div>近10000名员工，研发技术人员<br>占55.98% , 2015年研发<br>投入9.6亿</div>'
          }
        ],
        selfData4: ['智能交通一体机——电子警察行业的事实标准','HDCVI——国家标准：进入TC100国家标准','软件硬件化技术——让百万路摄像头的部署和维护变得简单','嵌入式DVR——让安防行业开始遍布生活','云存储云计算——让千万级的图像检索降到妙极','CMOS技术，高倍自主机芯——打破了前端摄像机的市场格局']
      }
    },
    methods: {

    },
    created() {

    },
    computed: {

    }
  }
</script>

<style scoped>
  @import "../../static/css/about-child1.css";
</style>
