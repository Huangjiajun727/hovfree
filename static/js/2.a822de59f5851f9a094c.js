webpackJsonp([2],{"2bxZ":function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"about",data:function(){return{text1:"",text2:"",text3:"",text4:"",text5:""}},methods:{contactForm:function(){return""==this?(alert("请你输入标题!"),!1):""==this?(alert("请你输入名字!"),!1):""==this?(alert("请你输入联系电话!"),!1):this.telReg(this)?this.telReg(this)?""==this?(alert("请你输入电子邮箱!"),!1):this.emailReg(this)?""==this?(alert("请你输入内容!"),!1):void 0:(alert("请你输入正确的电子邮箱!"),!1):(alert("请你输入正确的电话号码!"),!1):(alert("请你输入正确的手机号码!"),!1)},telReg:function(A){return!!/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/.test(A)},phoneReg:function(A){return!!/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(A)},emailReg:function(A){return!!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(A)}}},s={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"about"}},[e("div",{staticClass:"wrap"},[A._m(0),A._v(" "),e("div",{attrs:{id:"contact-top"}},[e("form",{attrs:{action:"//www.hovfree.com//about/contact_submit.html",method:"post"}},[e("table",[e("tbody",[A._m(1),A._v(" "),e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:A.text1,expression:"text1"}],staticClass:"contact_text",attrs:{type:"text",value:"",name:"title",id:"title"},domProps:{value:A.text1},on:{input:function(t){t.target.composing||(A.text1=t.target.value)}}})])]),A._v(" "),A._m(2),A._v(" "),A._m(3),A._v(" "),A._m(4),A._v(" "),e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:A.text2,expression:"text2"}],staticClass:"contact_text",attrs:{type:"text",value:"",name:"name",id:"name"},domProps:{value:A.text2},on:{input:function(t){t.target.composing||(A.text2=t.target.value)}}})])]),A._v(" "),A._m(5),A._v(" "),e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:A.text3,expression:"text3"}],staticClass:"contact_text",attrs:{type:"text",value:"",name:"phone",id:"phone"},domProps:{value:A.text3},on:{input:function(t){t.target.composing||(A.text3=t.target.value)}}})])]),A._v(" "),A._m(6),A._v(" "),e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:A.text4,expression:"text4"}],staticClass:"contact_text",attrs:{type:"text",value:"",name:"email",id:"email"},domProps:{value:A.text4},on:{input:function(t){t.target.composing||(A.text4=t.target.value)}}})])]),A._v(" "),A._m(7),A._v(" "),e("tr",[e("td",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:A.text5,expression:"text5"}],attrs:{id:"content",name:"content"},domProps:{value:A.text5},on:{input:function(t){t.target.composing||(A.text5=t.target.value)}}})])]),A._v(" "),A._m(8),A._v(" "),e("tr",[e("td",[e("input",{staticClass:"contactBtn",attrs:{type:"submit",value:"提 交"},on:{click:function(t){A.contactForm()}}})])])])])])]),A._v(" "),A._m(9)]),A._v(" "),A._m(10)])},staticRenderFns:[function(){var A=this.$createElement,t=this._self._c||A;return t("header",[t("h2",[this._v("联系我们")]),this._v(" "),t("span",{staticClass:"line"}),this._v(" "),t("p",[this._v("CONTACT US")])])},function(){var A=this.$createElement,t=this._self._c||A;return t("tr",[t("td",{staticClass:"title"},[this._v("标题"),t("span",{staticClass:"must"},[this._v("*")])])])},function(){var A=this.$createElement,t=this._self._c||A;return t("tr",[t("td",{staticClass:"title"},[this._v("公司名称")])])},function(){var A=this.$createElement,t=this._self._c||A;return t("tr",[t("td",[t("input",{staticClass:"contact_text",attrs:{type:"text",value:"",name:"company"}})])])},function(){var A=this.$createElement,t=this._self._c||A;return t("tr",[t("td",{staticClass:"title"},[this._v("姓名"),t("span",{staticClass:"must"},[this._v("*")])])])},function(){var A=this.$createElement,t=this._self._c||A;return t("tr",[t("td",{staticClass:"title"},[this._v("联系电话"),t("span",{staticClass:"must"},[this._v("*")])])])},function(){var A=this.$createElement,t=this._self._c||A;return t("tr",[t("td",{staticClass:"title"},[this._v("电子邮箱"),t("span",{staticClass:"must"},[this._v("*")])])])},function(){var A=this.$createElement,t=this._self._c||A;return t("tr",[t("td",{staticClass:"title"},[this._v("内容"),t("span",{staticClass:"must"},[this._v("*")])])])},function(){var A=this.$createElement,t=this._self._c||A;return t("tr",[t("td",{staticClass:"none"},[this._v(" ")])])},function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("div",{attrs:{id:"contact-con"}},[a("h3",[A._v("浙江华飞智能科技有限公司")]),A._v(" "),a("div",{staticClass:"txt"},[a("p",[A._v("http://www.hovfree.com")]),A._v(" "),a("p",[A._v("杭州滨江区滨安路1181号")]),A._v(" "),a("p",[A._v("0571-87235785")])]),A._v(" "),a("img",{attrs:{src:e("B1ZM"),alt:"华飞智能科技有限公司",title:"微信二维码"}})])},function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"mark"}},[e("div",{staticClass:"mark-wrap"},[e("div",{staticClass:"left"},[e("h3",[A._v("国际市场")]),A._v(" "),e("p",[A._v("海外形成"),e("span",[A._v("300")]),A._v("多个合作伙伴")]),A._v(" "),e("p",[A._v("出口"),e("span",[A._v("100")]),A._v("多个国家")])]),A._v(" "),e("div",{staticClass:"right"},[e("h3",[A._v("国内市场")]),A._v(" "),e("p",[A._v("全国建立一级办事处"),e("span",[A._v("31")]),A._v("个，二级办事处"),e("span",[A._v("82")]),A._v("个")]),A._v(" "),e("p",[A._v("已形成行业销售服务体系，依靠完善商业体系模型运作")])])])])}]};var v=e("VU/8")(a,s,!1,function(A){e("MYRe")},"data-v-3187152f",null);t.default=v.exports},B1ZM:function(A,t){A.exports="data:image/jpeg;base64,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"},MYRe:function(A,t){}});
//# sourceMappingURL=2.a822de59f5851f9a094c.js.map