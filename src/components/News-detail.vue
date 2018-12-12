<template>
  <div id="solution-detail">

    <div id="box">
      <div class="wrap">
        <header>
          <h2>{{ header[ddT-1][parseInt(news) + 1].title }}</h2>
          <div class="info clear">
            <div class="lt">
              发布时间：
              <time>{{ header[ddT-1][parseInt(news) + 1].time }}</time>
              | 关注：
              <strong>{{ header[ddT-1][parseInt(news) + 1].focus }}</strong>
            </div>

            <div class="rt">
              <span></span>
              <a href="javascript:void(0)" class="share1" title="分享到QQ空间"></a>
              <a href="javascript:void(0)" class="share2" title="分享到新浪微博"></a>
              <a href="javascript:void(0)" class="share3" title="分享到腾讯微博"></a>
              <a href="javascript:void(0)" class="share4" title="分享到人人网"></a>
              <a href="javascript:void(0)" class="share5" title="分享到微信好友"></a>
            </div>

            <router-link :to="'/news/index?list=4&type=' + ddT" class="back">返回列表</router-link>
          </div>
        </header>

        <article v-html="selfData[ddT-1][news]"></article>

        <div id="page-bar">
          <div class="page-lt">
            <a href="javascript:void(0);" @click="prevPage" class="prev btn">< 上一篇</a>
            <a href="javascript:void(0);" @click="prevPage" class="title">{{ header[ddT-1][news].title }}</a>
          </div>
          <div class="page-rt">
            <a href="javascript:void(0);" @click="nextPage" class="title" >{{ header[ddT-1][parseInt(news) + 2].title }}</a>
            <a href="javascript:void(0);" @click="nextPage" class="next btn">下一篇 ></a>
          </div>
        </div>
      </div>

      <div id="pro-top" @click="toTop()"></div>
    </div>
  </div>
</template>

<script>
  import VueEvent from '../model/VueEvent';

  export default {
    name: 'solution',
    data() {
      return {
        header: [
          [
            {
              title: '没有了',
              time: '',
              focus: ''
            },
            {
              title: '华飞智能亮相“2017无人机在公路领域应用技术研讨会”',
              time: '2017-11-06',
              focus: 2055
            },
            {
              title: '华飞智能全系产品悉数亮相深圳安博会',
              time: '2017-10-29',
              focus: 1857
            },
            {
              title: '科技强警，华飞新技术助力德阳暴恐演练',
              time: '2017-09-04',
              focus: 2347
            },
            {
              title: '华飞智能参加第七届国际警用装备及反恐技术装备展览会',
              time: '2017-05-21',
              focus: 2688
            },
            {
              title: '华飞无人机保障2017年世界铁人三项赛中国赛首战',
              time: '2017-04-02',
              focus: 1779
            },
            {
              title: '没有了',
              time: '',
              focus: ''
            }
          ],
          [
            {
              title: '没有了',
              time: '',
              focus: ''
            },
            {
              title: '6月1日起无人机需实名登记 民航局正制定无人机经营准入规定',
              time: '2017-06-02',
              focus: 967
            },
            {
              title: '没有了',
              time: '',
              focus: ''
            }
          ]
        ],
        selfData: [
                    [
                    '<p>11月3日，由中国公路学会主办“2017无人机在公路领域技术应用研讨会”在南京召开。中国公路学会、江苏省交通运输厅公路局、中国航空器拥有者及驾驶员协会（AOPA）等多家行业协会、机构代表上台发言，希望通过推动完善相关法规制度、系统平台建设等方式，有效规范和引导无人机技术在公路领域科学发展。首届公路行业的无人机应用会议吸引了全国各个公路局，路桥、高速公路公司的众多专家。</p><img src="@/../static/images/news/detail/news1-1.bmp" /><h5>中国公路学会副秘书长梅君为大会致辞</h5><img src="@/../static/images/news/detail/news1-2.bmp" /><h5>江苏省交通运输厅公路局信息科科长朱雷雷上台发言</h5><img src="@/../static/images/news/detail/news1-3.bmp" /><h5>中国航空器拥有者及驾驶员协会执行秘书长 柯玉宝上台发言</h5><img src="@/../static/images/news/detail/news1-4.jpg" /><h5>现场火爆异常，座无虚席</h5><p>华飞智能受邀携主打机型X820和新机型X1100，最新挂载40倍、4K高清云台与现场众位专家进行了交流，华飞智能以其丰富的挂载和避障功能，以及多功能指挥控制平台，为路桥的巡查、高速公路的巡检提供了更好的解决方案。</p><img src="@/../static/images/news/detail/news1-5.png" /><p>华飞智能为三百多位行业专家介绍了利用无人机在公路规划建设、养护运营管理等方面的最新应用研发成果，并结合公司在南京、苏州、扬州等地的实际应用案例，以及当前正在开展的路域环境专项整治工作，进行了深入探讨。</p><p>随着无人机在各行业的逐步深入应用，华飞智能本着”创新实现超越 品质打动世界“的理念，让无人机真正做到能用、有用，成为公路领域日常工作中必不可少的组成部分。</p>',
                    '<p>10月29号，第十六届中国国际社会公共安全博览会（安博会）在深圳国际会展中心拉开帷幕，华飞智能携全系产品惊艳亮相，吸引海内外众多客户前来沟通交流。</p><img src="@/../static/images/news/detail/news2-1.jpg" /><p>展区按照智能管控系统、行业挂载、飞行平台进行全方位的展示，为客户带来切身直观的感受。</p><img src="@/../static/images/news/detail/news2-2.jpg" /><p>十余项挂载，反制枪、系留模块、交通事故快速处理，以及全新的X1100和垂直起降固定翼等产品夺人眼球。</p><img src="@/../static/images/news/detail/news2-3.jpg" /><img src="@/../static/images/news/detail/news2-4.jpg" />',
                    '<img src="@/../static/images/news/detail/news3-1.jpg" /><p>8月30日上午9点半，德阳市公安局组织举行了“迎接十九大，忠诚保平安”反恐防暴实战演练。德阳市各级公安机关、广大公安民警和武警消防官兵的精英代表参加了此次演练。德阳市市委书记蒲波、四川省公安厅副厅长陈贤文等多位领导莅临现场，对演练进行观摩指导。</p><img src="@/../static/images/news/detail/news3-2.jpg" /><p>本次实战演练包括武警特战技能综合演示、公安特警反暴恐综合演练、处置大规模群体性事件对抗演练和消防灭火救援演练四个部分。市公安、民警、武警和消防部门的多支队伍，纷纷派出精锐之师荷枪实弹参与演练，赢得了全场喝彩。</p><img src="@/../static/images/news/detail/news3-3.jpg" /><p> 在本次实战演练的过程中，随处可见警用无人机的身影，充分展现了无人机在公安、武警等各系统日常工作中发挥的重要作用。</p><img src="@/../static/images/news/detail/news3-4.jpg" /><p>华飞智能作为无人机行业代表应邀参加本次实战演练，并带来了全新的无人机应用技术，为这次演练的圆满成功提供了有力保障。</p><img src="@/../static/images/news/detail/news3-5.png" /><p>在这次演练中，除常规无人机喊话、抛投、可见光侦查之外，华飞无人机创新的演示了人脸识别、现场MAC地址采集、4k高清视频现场直播等项目。这些技术的应用，为公安、消防部门的日常工作以及处置突发事件带来了极大帮助。</p><img src="@/../static/images/news/detail/news3-6.png" /><p>无人机在空中进行人脸数据采集，后端平台通过现场采集的实时画面进行比对。华飞无人机的人脸识别技术，极大地便利了现场指挥，通过重点管控，可以快速识别定位“重点人员”，有效提高事件处置效率。</p><img src="@/../static/images/news/detail/news3-7.png" /><p>根据实时反馈的画面，消防指战员在有效的技术保障下顺利的完成灭火工作。</p><p>随着科技强警的进一步落实，无人机作为一个新生事物越来越得到公安行业的认可，本次演练中无人机的大量应用便是一个缩影。</p><img src="@/../static/images/news/detail/news3-8.png" /><p>华飞智能作为一家专门从事行业无人机设计、研发、生产的企业，做好无人机实战应用，让无人机真正做到能用、有用，成为警用系统日常工作中必不可少的组成部分，是我们追求的目标。</p>',
                    '<p>第七届国际警用装备及反恐技术装备展览会暨学术研讨会于2017年5月19 ~21日在北京展览馆隆重举行，华飞智能携无人机参加了本次展会。</p><p>国际警用装备及反恐技术装备展览会（简称CIPATE）是中华人民共和国科学技术部和中国人民解放军总装备部批准的，自2005年5月第一次举办至今，广大国内外参展商积极展示最新警用技术装备，为公安部门警用装备的更新换代提供了很好的参考。</p><img src="@/../static/images/news/detail/news4-1.jpg" /><p>华飞智能携带主打机型X820，以及遥控器、地面站参加了本次展会，并与参会人员深入交流了华飞无人机在产品安全性方面的设计，以及基于智能分析和联动指挥中心的实战应用。</p><img src="@/../static/images/news/detail/news4-2.jpg" /><p>X820机型采用了超轻碳纤维结构，并且自主开模设计，整体结构性更好，同时折叠式机臂、快拆式桨叶能够在现场快速展开和撤收。22000mAh的智能电池，标准负载下续航时间为35分钟，作业半径达到了10Km。同时，飞机挂载都是快拆快装结构，600万像素30倍高清相机、红外热成像、可视喊话器、可视抛投等挂载可选，能够满足不应实战场景下的应用。</p><img src="@/../static/images/news/detail/news4-3.jpg" /><p>华飞无人机出色的工业设计、优良的性能，以及与平安城市整体安防系统无缝融合的特性，也得到了媒体朋友的高度关注和一致认可。</p><img src="@/../static/images/news/detail/news4-4.jpg" /><h5>华飞智能高级产品经理周祥玖接收《特种装备网》记者专访</h5><p>目前，无人机在公安警用上，不管是大型活动保障，还是道路违章抓拍、事故处理等方面的应用逐渐成为一种趋势。华飞智能也将通过不断完善自己的产品及解决方案，为公安警用行业提供一体化解决方案，让无人机得到切实有效的实战应用。</p>',
                    '<p>铁人三项运动是体育运动项目之一，比赛由天然水域游泳、公路自行车、公路长跑三项目按顺序组成，运动员需要一鼓作气赛完全程。铁人三项赛在2000年的时候成为了奥运会项目。</p><h4>赛事介绍</h4><p>2017年世界铁人三项赛中国首战于4月1日在柳州举行，本次柳州站比赛共有1200多人报名参加比赛，其中包含300多位外籍参赛者和18位职业运动员。</p><img src="@/../static/images/news/detail/news5-1.jpg" /><h5>↑ 开幕式现场</h5><p>根据赛事官方公布的赛事路线，选手们需要从柳州市中心的江滨公园出发，游泳1.9km到达窑埠古镇，随后沿江进行两圈共计90公里的自行车骑行返回窑埠古镇。最后沿柳江跑步21公里，到达终点。为了保障活动的顺利进行，柳州市公安局投入大量警力协助主会场及赛道周边的安全保障工作，并启用了多种高科技警务应用为现场提供保障。</p><img src="@/../static/images/news/detail/news5-2.jpg" /><h5>↑ 指挥部</h5><p>在赛事安保方面，包括无人机（系留无人机和常规无人机）、无人机反制等设备在内的车载移动布控球、4G移动单兵、高清视频会议系统和室外视图显示系统均为本次赛事安保贡献力量，做到了全方位立体化防控，有效地为现场提供了安全保障。</p><img src="@/../static/images/news/detail/news5-3.jpg" /><h5>↑ 无人机飞行现场</h5><img src="@/../static/images/news/detail/news5-4.jpg" /><h5>↑ 无人机反制设备</h5><img src="@/../static/images/news/detail/news5-5.jpg" /><h5>↑ 无人机现场拍摄画面</h5>'
             ],
            [
              '<p>6月1日起，已经或正准备购买无人机的用户需要注意，如果您的无人机起飞重量在250克(含)以上，就必须根据民航局发布的《民用无人驾驶航空器实名制登记管理规定》进行实名登记注册。8月31日后如果仍未注册，其行为将被视为非法，无人机的使用也将受影响。</p><span>登记时间</span><p>2017年6月1日-8月31日，民用无人机拥有者必须在操作无人机前完成实名登记。</p><p>2017年8月31日后，未按本管理规定的规定进行登记的民用无人机，将影响后续的使用，监管主管部门将按照相关规定进行处罚。</p><span>登记流程</span><p>民用无人机制造商和民用无人机拥有者须在“中国民用航空局民用无人机实名登记系统”(https://uas.caac.gov.cn)上申请账户，民用无人机制造商在系统中填报其所有产品的信息，民用无人机拥有者在该系统中实名登记其个人及其拥有产品的信息。</p><p>民用无人制造商在登记系统中须填报其产品的名称、型号、最大起飞重量、空机重量、产品类型、无人机购买者姓名和移动电话等信息;产品外包装明显位置和产品说明书中，提醒拥有者在登记系统中进行实名登记，警示不实名登记擅自飞行的危害;随产品提供不干胶打印纸，供拥有者打印“无人机登记标志”。</p><p>个人或单位民用无人机拥有者须在登记系统内登记姓名(公司名称)、有效身份证件号码(组织机构代码)、移动电话和电子邮箱、产品型号和序号、使用目的;完成信息填报后，系统将自动给出包含登记号和二维码的登记标志图片，民用无人机拥有者须将该图片打印为至少2厘米乘以2厘米的不干胶粘贴牌，并将其粘贴于无人机不易损伤的地方，保持清晰可辨。</p><p>民用无人机实名登记系统入口1：http://uas.caac.gov.cn/</p><p>民用无人机实名登记系统入口2：http://fsop.caac.gov.cn/</p><span>为什么要实行“实名制”</span><p>民航局空管办副主任张瑞庆表示，民用无人机的登记注册制度是国际上普遍采取的一种管理方式，是无人机管理的基础。5月18日，民航局已完成民用无人机登记注册系统的开发并上线运行。</p><p>中国航空运输协会通航分会副总干事孙卫国介绍，无人机实名制登记是国际通行措施，如美国于2015年底开始无人机实名制登记，现注册用户约77万人，没有实名制登记将受到处罚。</p><p>今年以来，无人机“黑飞”威胁民航安全事件频发。据民航局方面介绍，仅今年1月中旬至2月中旬，就发生12起无人机违法违规运行威胁民航安全事件，其中7起造成航班调整、避让、备降、延误。</p><p>5月12日晚，重庆机场遭遇无人机干扰，持续时间长达近4个小时，造成重庆机场40余个航班备降，60余个航班取消，140余个航班延误，上万旅客出行受到影响。</p><p>无人机干扰正常航班，不仅造成旅客时间延误，对航空公司在经济造成损失，更重要的是严重威胁航班安全。机场一旦发现无人机等航空器靠近飞机，会紧急采取措施，在确保安全后，航班才能恢复正常起降。</p><span>实名制后还将如何规范？</span><p>张瑞庆说，有关部门将逐步规范无人机开展商业运营的市场秩序。民航局正在制定使用无人机开展通用航空经营活动的准入管理规定，针对发展特点和需求，拟将农林喷洒、空中拍照、航空摄影和执照培训四类主要经营项目列为许可对象，同时配套开发无人机准入和经营活动监管平台。</p><p>同时，有关部门还将开展无人机专项整治工作。根据国家空管委的要求，民航局已经召开了全行业电视电话会议，专题布置无人机专项整治任务，将发挥部门联动机制的优势，配合地方政府、公安等部门建立无人机违法违规飞行的联防联控机制，落实好民航对民用无人机管理的各项职责，综合施策确保民航飞行安全。</p>'
            ]
          ],
        news: 1,
        dt: 0
      }
    },
    methods: {
      toTop() {
        document.documentElement.scrollTop -= 100;
        if (document.documentElement.scrollTop > 0) {
          var timer = setTimeout(() => this.toTop(),16);
        }else {
          clearTimeout(timer);
        }
      },
      nextPage() {
        if (this.selfData[(this.ddT-1)].length >  this.news + 1){
          ++this.news;
        }
      },
      prevPage() {
        if (this.news > 0){
          this.news--;
        }
      }
    },
    created() {
      this.news = this.$route.query.news;
      this.dt = this.$route.query.type;

      this.prev = parseInt(this.$route.query.news) - 1;
      this.next = parseInt(this.$route.query.news) + 2;

    },
    updated() {
      document.documentElement.scrollTop = 0;
    },
    computed: {
      ddT: function () {
        return this.dt = this.$route.query.type
      }
    }
  }
</script>

<style scoped>
  @import "../../static/css/news-detail.css";
</style>
