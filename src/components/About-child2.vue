<template>
  <div id="about">

    <div class="wrap">
      <header>
        <h2>招纳贤士</h2>
        <span class="line"></span>
        <p>RECRUIT</p>
      </header>

      <ul id="job">
        <li class="job-list" @click="show()">
          <div class="job-name" :class="{ blackColor: onFoo }">
            {{ selfData[0].job  }}
            <i :class="{ bgPos: onFoo }"></i>
          </div>

          <div class="wrap-hidden" :class="{ none: onFoo }">
            <ul class="job-con">
              <li>
                <strong>职位类别：</strong>
                <span>{{ selfData[0].sort }}</span>
              </li>
              <li>
                <strong>招聘人数：</strong>
                <span>{{ selfData[0].num }}</span>
              </li>
              <li>
                <strong>工作地点：</strong>
                <span>{{ selfData[0].place }}</span>
              </li>
              <li>
                <strong>电子邮箱：</strong>
                <a href="mailto:rsb@dahuatech.com">{{ selfData[0].mail }}</a>
              </li>
            </ul>
            <ul class="job-main">
              <li>
                <strong>岗位职责：</strong>
                <span>{{ selfData[0].duty }}</span>
              </li>
              <li>
                <strong>岗位要求：</strong>
                <span>{{ selfData[0].claim }}</span>
              </li>
            </ul>
          </div>
        </li>

        <li class="job-list">
          <div class="job-name" @click="show1()" :class="{ blackColor: onFoo1 }">
            {{ selfData[1].job  }}
            <i :class="{ bgPos: onFoo1 }"></i>
          </div>

          <div class="wrap-hidden" :class="{ none: onFoo1 }">
            <ul class="job-con">
              <li>
                <strong>职位类别：</strong>
                <span>{{ selfData[1].sort }}</span>
              </li>
              <li>
                <strong>招聘人数：</strong>
                <span>{{ selfData[1].num }}</span>
              </li>
              <li>
                <strong>工作地点：</strong>
                <span>{{ selfData[1].place }}</span>
              </li>
              <li>
                <strong>电子邮箱：</strong>
                <a href="mailto:rsb@dahuatech.com">{{ selfData[1].mail }}</a>
              </li>
            </ul>
            <ul class="job-main">
              <li>
                <strong>岗位职责：</strong>
                <span>{{ selfData[1].duty }}</span>
              </li>
              <li>
                <strong>岗位要求：</strong>
                <span>{{ selfData[1].claim }}</span>
              </li>
            </ul>
          </div>
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
</template>

<script>

  export default {
    name: 'about',
    data() {
      return {
        selfData: [
          {
            job: 'java工程师',
            sort: '研发类',
            num: '若干',
            place: '浙江杭州',
            mail: 'mailto:rsb@dahuatech.com',
            duty: '负责与手机端交互的服务器端架构设计和软件开发；负责服务器端模块开发；负责公司产品运营后台开发、维护及相关技术支持',
            claim: '扎实的Java基础,拥有两年以上java开发经验；熟悉SprigMVC, Spring, Hibernate, JPA，熟悉JavaScript，Ajax(JQuery)'
          },
          {
            job: '硬件工程师（射频专业要求）',
            sort: '研发类',
            num: '若干',
            place: '浙江杭州',
            mail: 'mailto:rsb@dahuatech.com',
            duty: '负责340M左右频段的电路设计工作。',
            claim: '精通发射电路的功放设计，有嵌入式系统设计经验，有项目管理经验优先。'
          }
        ],
        onFoo: false,
        onFoo1: true
      }
    },
    methods: {
      show() {
        this.onFoo = !this.onFoo;
          this.onFoo1 = true;
      },
      show1() {
        this.onFoo1 = !this.onFoo1;
        this.onFoo = true;
      }
    }
  }
</script>

<style scoped>
  @import "../../static/css/about-child2.css";
</style>
