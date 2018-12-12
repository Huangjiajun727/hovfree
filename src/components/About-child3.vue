<template>
  <div id="about">

    <div class="wrap">
      <header>
        <h2>联系我们</h2>
        <span class="line"></span>
        <p>CONTACT US</p>
      </header>

      <div id="contact-top">
        <form action="//www.hovfree.com//about/contact_submit.html" method="post">
          <table>
            <tbody>
            <tr>
              <td class="title">标题<span class="must">*</span></td>
            </tr>
            <tr>
              <td><input v-model="text1" type="text" value="" class="contact_text" name="title" id="title"></td>
            </tr>
            <tr>
              <td class="title">公司名称</td>
            </tr>
            <tr>
              <td><input type="text" value="" class="contact_text" name="company"></td>
            </tr>
            <tr>
              <td class="title">姓名<span class="must">*</span></td>
            </tr>
            <tr>
              <td><input v-model="text2" type="text" value="" class="contact_text" name="name" id="name"></td>
            </tr>
            <tr>
              <td class="title">联系电话<span class="must">*</span></td>
            </tr>
            <tr>
              <td><input v-model="text3" type="text" value="" class="contact_text" name="phone" id="phone"></td>
            </tr>
            <tr>
              <td class="title">电子邮箱<span class="must">*</span></td>
            </tr>
            <tr>
              <td><input v-model="text4" type="text" value="" class="contact_text" name="email" id="email"></td>
            </tr>
            <tr>
              <td class="title">内容<span class="must">*</span></td>
            </tr>
            <tr>
              <td><textarea v-model="text5" id="content" name="content"></textarea></td>
            </tr>
            <tr>
              <td class="none">&nbsp;</td>
            </tr>
            <tr>
              <td><input type="submit" value="提 交" class="contactBtn" @click="contactForm()"></td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div id="contact-con">
        <h3>浙江华飞智能科技有限公司</h3>
        <div class="txt">
          <p>http://www.hovfree.com</p>
          <p>杭州滨江区滨安路1181号</p>
          <p>0571-87235785</p>
        </div>
        <img src="../../static/images/about/QR-code.jpg" alt="华飞智能科技有限公司" title="微信二维码"/>
      </div>
    </div>

    <div id="mark">
      <div class="mark-wrap">
        <div class="left">
          <h3>国际市场</h3>
          <p>海外形成<span>300</span>多个合作伙伴</p>
          <p>出口<span>100</span>多个国家</p>
        </div>
        <div class="right">
          <h3>国内市场</h3>
          <p>全国建立一级办事处<span>31</span>个，二级办事处<span>82</span>个</p>
          <p>已形成行业销售服务体系，依靠完善商业体系模型运作</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'about',
    data() {
      return {
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
      }
    },
    methods: {
      contactForm() {
        var title   = this,text1;
        var name    = this,text2;
        var phone   = this,text3;
        var email   = this,text4;
        var content = this,text5;

        if(title == ''){

          alert("请你输入标题!");
          return false;

        }
        if(name == ''){

          alert("请你输入名字!");
          return false;

        }
        if(phone == ''){

          alert("请你输入联系电话!");
          return false;

        }else if (!this.telReg(phone)){
          alert("请你输入正确的手机号码!");
          return false;
        }else if (!this.telReg(phone)){
          alert("请你输入正确的电话号码!");
          return false;
        }

        if(email == ''){

          alert("请你输入电子邮箱!");
          return false;

        }else if(!this.emailReg(email)){

          alert("请你输入正确的电子邮箱!");
          return false;
        }

        if(content==''){

          alert("请你输入内容!");
          return false;

        }
      },
      //电话正则验证
      telReg(tel){
        var reg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/;
        var result = reg.test(tel) ? true : false ;
        return result;
      },
      //手机号正则验证
      phoneReg(phone){
        var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var result = reg.test(phone) ? true : false ;
        return result;
      },
      //邮箱正则验证
       emailReg(email){
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        var result = reg.test(email) ? true : false ;
        return result;
      }
    }
  }
</script>

<style scoped>
  @import "../../static/css/about-child3.css";
</style>
