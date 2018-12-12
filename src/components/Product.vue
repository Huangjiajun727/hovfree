<template>
  <div id="product">
      <div id="content">
        <div class="wrap">
          <ul class="pd-list" >
              <li class="unit" v-for="(item,index) in selfData[ddT][page]" :key="index" @click="showTl(item.h3)">
                  <router-link :to="'/product/detail?list=1&type='+ ddT +'&page='+ page +'&product=' + index">
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

          <div id="page">
            <div class="wrap">
              <a href="javascript:;" class="pagem gofirst" title="首页"
                 :class="{ open: page > 0 }"
                 @click="firstPage()"></a>
              <a href="javascript:;" class="page goprev" title="上一页"
                 :class="{ open: page > 0 }"
                 @click="prevPage()"></a>
              <a href="javascript:;" class="pagen num" title="页码"
                 :class="{ on: index == page }"
                 v-for="(item,index) in selfData[ddT]"
                 :key="index"
                 @click="numPage(index)">
                {{ index + 1 }}
              </a>
              <a href="javascript:;" class="page gonext" title="下一页"
                 :class="{ open: page < selfData[ddT].length - 1 }"
                 @click="nextPage()"></a>
              <a href="javascript:;" class="pagem golast" title="页末"
                 :class="{ open: page < selfData[ddT].length - 1 }"
                 @click="lastPage()"></a>
            </div>
          </div>
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
        selfData: {
              1: [
                  [
                      {
                        h3: 'X1550',
                        p: '领航系列六旋翼无人机',
                        src: '@/../static/images/product/product-type1-1.png'
                      },
                      {
                        h3: 'X1100',
                        p: '智能避障、断桨保护',
                        src: '@/../static/images/product/product-type1-2.png'
                      },
                      {
                        h3: 'X820',
                        p: '领航系列四旋翼无人机',
                        src: '@/../static/images/product/product-type1-3.jpg'
                      },
                      {
                        h3: 'X650H',
                        p: '领航系列四旋翼无人机',
                        src: '@/../static/images/product/product-type1-4.png'
                      }
                   ]
                ],
              2: [
                  [
                    {
                      h3: 'GA-V-2030U',
                      p: '200万30倍云台相机',
                      src: '@/../static/images/product/product-type2-1.png'
                    },
                    {
                      h3: 'GA-V-2045U',
                      p: '200万40倍云台相机',
                      src: '@/../static/images/product/product-type2-2.png'
                    },
                    {
                      h3: 'GA-V-6030U',
                      p: '600万像素云台相机',
                      src: '@/../static/images/product/product-type2-3.png'
                    },
                    {
                      h3: 'GA-V-8030U',
                      p: '4K高清云台相机',
                      src: '@/../static/images/product/product-type2-4.png'
                    },
                    {
                      h3: 'GA-T-0600TA',
                      p: '热成像云台相机',
                      src: '@/../static/images/product/product-type2-5.png'
                    },
                    {
                      h3: 'GA-TV-2030TA',
                      p: '双目热成像云台相机',
                      src: '@/../static/images/product/product-type2-6.png'
                    }
                ],
                [
                  {
                    h3: 'GA-V-2012TC',
                    p: '可视喊话器',
                    src: '@/../static/images/product/product-type2-7.png'
                  },
                  {
                    h3: 'GA-V-2012TC',
                    p: '可视抛投',
                    src: '@/../static/images/product/product-type2-8.png'
                  },
                  {
                    h3: 'GA-V-2012TS',
                    p: '相机、喊话、抛投三合一挂载',
                    src: '@/../static/images/product/product-type2-9.png'
                  },
                  {
                    h3: 'GA-V-2012TM',
                    p: 'MAC地址采集',
                    src: '@/../static/images/product/product-type2-10.png'
                  },
                  {
                    h3: 'GA-V-545OP',
                    p: '五目倾斜摄影相机',
                    src: '@/../static/images/product/product-type2-11.png'
                  },
                  {
                    h3: 'GA-V-2012TGV2',
                    p: '高精度气体检测器',
                    src: '@/../static/images/product/product-type2-12.png'
                  }
                ]
              ],
              3: [
                  [
                    {
                      h3: 'P7',
                      p: '一体式遥控器',
                      src: '@/../static/images/product/product-type3-1.png'
                    },
                    {
                      h3: 'P13',
                      p: '地面站',
                      src: '@/../static/images/product/product-type3-2.png'
                    }
                ]
              ],
              4: [
                [
                  {
                    h3: '2000J',
                    p: '手持式无人机反制枪',
                    src: '@/../static/images/product/product-type4-1.png'
                  },
                  {
                    h3: '1500JPV1',
                    p: '便携式无人机干扰器',
                    src: '@/../static/images/product/product-type4-2.png'
                  }
                ]
              ],
            },
        dt: 1,
        page: 0
      }
    },
    methods: {
      nextPage() {
        if (this.selfData[this.ddT].length > 1 && this.selfData[this.ddT].length !== this.page + 1){
          this.page++;
        }
      },
      prevPage() {
        if (this.page > 0){
          this.page--;
        }
      },
      firstPage() {
        this.page = 0;
      },
      lastPage() {
        this.page = this.selfData[this.ddT].length - 1;
      },
      numPage(num) {
        this.page = num;
      },
      showTl(title) {
        VueEvent.$emit('toMore',title);
      }
    },
    created() {
      this.dt = this.$route.query.type;
    },
    computed: {
      ddT: function () {
        this.page = 0;
        return this.dt = this.$route.query.type
      }
    }
  }
</script>

<style scoped>
  @import "../../static/css/product.css";
</style>
