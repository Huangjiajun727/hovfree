<template>
  <div id="support2">

    <div id="box">
      <div class="wrap">
        <header>
          <h2>常见QA</h2>
          <span class="line"></span>
          <p>COMMON QA</p>
        </header>

        <div class="qa-list">
          <div class="question" @click="changeHeight()" :class="{ cgColor: onFoo }">
            S4 Q: S4V2 低电压报警分几级？每一级飞机如何动作？
            <i class="arrow" :class="{ pos: onFoo }"></i>
          </div>
          <div class="answer" :class="{ hidden: onFoo }">
            <span class="mark">A:</span>低电压报警分为两级：第一级报警每片电池电压数值是用户设置的，第二级报警每片电池电压比第一级低0.05V。<br>第一级电压报警时LED灯会连续红灯二闪报警，手机地面站会间隔震动以提醒用户电量不足。飞机不会做任何动作，建议用户此时立刻返航。<br>第二级报警时LED灯会连续红灯三闪报警，手机地面站会连续震动以提醒用户电量不足。飞机被强制原地降落（X4系列不会做任何动作）。降落时用户可调整降落点，但不能推油升高。
          </div>
        </div>

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
    name: 'support2',
    data() {
      return {
        onFoo: false
      }
    },
    methods: {
      changeHeight() {
        this.onFoo = !this.onFoo;
      }
    }
  }
</script>

<style scoped>
  @import "../../static/css/support-child2.css";
</style>
