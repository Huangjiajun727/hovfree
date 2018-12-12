<template>
  <div id="product-detail">

     <div id="top">
       <div class="wrap">
         <header>
           <h2>{{ selfData[type][page][product].h2 }}</h2>
           <span class="line"></span>
           <p>{{ selfData[type][page][product].topP }}</p>
         </header>
         <div class="img-box">
           <span class="btn-left" @mouseenter="stop" @mouseleave="go" @click="prevImg()"></span>
           <transition-group tag="ul" class="img-list" name="list" mode="in-out">
             <li v-for="(item,index) in selfData[type][page][product].src" :key="index" v-show="index === mark" @mouseenter="stop" @mouseleave="go">
               <img :src="item" :alt="selfData[type][page][product].h2" :title="selfData[type][page][product].h2"/>
             </li>
           </transition-group>
           <span class="btn-right" @mouseenter="stop" @mouseleave="go" @click="nextImg()"></span>
         </div>
         <ul class="feature">
           <li v-for="(item,index) in selfData[type][page][product].li" :key="index"><span class="dash"></span>{{ item }}</li>
         </ul>
       </div>
     </div>

     <div id="content">
       <div class="wrap">
         <header>
           <h3>技术参数</h3>
           <span class="line"></span>
           <p>TECHNIACL SPECIFICATIONS</p>
         </header>
         <table class="con-tb">
           <tbody>
             <tr v-for="(item,index) in selfData[type][page][product].table" :key="index">
               <td v-for="(td,index) in item" :key="index" :class="{ non: 1 === index%2, con: 1 === (index + 1)/3 || 0 === (index + 1)%7 }">{{ td }}</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>

     <div id="bottom">
       <div class="wrap">
         <header>
           <h3>产品应用场景</h3>
           <span class="line"></span>
           <p>APPLICATION SCENARIOS</p>
         </header>
         <div class="bottom-main">
           <p>华飞智能无人机融入先进的导航飞控、云台增稳、动力系统、空地通信、显控一体、主动安全等多项核心技术。</p>
           <p>领航系列无人机不仅操作简便、性能稳定，而且支持多种挂载，可适用多种应用场景。</p>
           <p v-for="(item,index) in selfData[type][page][product].bottomP" :key="index">{{ item }}</p>
         </div>
       </div>
     </div>

    <div id="pro-top" @click="toTop()"></div>
  </div>
</template>

<script>
  import VueEvent from '../model/VueEvent';

  export default {
    name: 'detail',
    data() {
      return {
        selfData: {
          1: [
              [
                {
                  h2: 'X1550',
                  topP: '性能优异，长时间续航',
                  src: ['@/../static/images/product/detail/type1-1.png','@/../static/images/product/detail/type1-1.png'],
                  li: ['整机碳纤维结构', '对角轴距1550mm', '54000mAh智能电池', '续航时间67.5min', '作业半径17.2Km', '最大飞行海拔5000m', '巡航速度15m/s', '飞行抗风能力6级', '失联/低电返航'],
                  table: {
                    td1: ['工作环境', ' ', '-20 ~ 60℃，95%无凝结', ' ', '机臂机械特征', ' ', '渐变插拔式'],
                    td2: ['最大载重量', ' ', '10.05kg', ' ', '起落架特征', ' ', '快拆式结构'],
                    td3: ['最大起飞重量', ' ', '21.6kg', ' ', '卫星定位模块', ' ', 'GPS、北斗、GLONASS三模'],
                    td4: ['桨翼机械特征', ' ', '快拆桨', ' ', '悬停精度（相对精度）', ' ', '水平：±0.2m，垂直：±0.5m'],
                    td5: ['智能飞行', ' ', '定高、定点、自主巡航等多姿态飞行模式；一键起降、 低电压保护、自动返航；预置禁飞区、电子围栏', ' ', ' ', ' ', ' ']
                  },
                  bottomP: ['X1550无人机支持长距离和长续航的飞行作业，可用于铁路、道路、电力线缆、能源管道等线路巡检；', '也可用于森林防火、应急指挥、警用安防、目标侦察、环境监测等领域。']
                },
                {
                  h2: 'X1100',
                  topP: '智能六轴、全新设计',
                  src: ['@/../static/images/product/detail/type1-2.png','@/../static/images/product/detail/type1-2.png'],
                  li: ['整机碳纤维结构', '对角轴距1100mm', '27000mAh智能电池', '续航时间35min', '作业半径10km', '最大飞行海拔5000m', '巡航速度15m/s', '飞行抗风能力6级', '失联/低电返航'],
                  table: {
                    td1: ['工作环境', ' ', '-20 ~ 60℃，95%无凝结', ' ', '机臂机械特征', ' ', '可折叠'],
                    td2: ['最大载重量', ' ', '3.3kg', ' ', '起落架特征', ' ', '可收放'],
                    td3: ['最大起飞重量', ' ', '10kg', ' ', '卫星定位模块', ' ', 'GPS、北斗、GLONASS三模'],
                    td4: ['桨翼机械特征', ' ', '快拆桨', ' ', '悬停精度（相对精度）', ' ', '水平：±0.2m，垂直：±0.5m'],
                    td5: ['智能飞行', ' ', '定高、定点、自主巡航等多姿态飞行模式；一键起降、 低电压保护、自动返航；预置禁飞区、电子围栏', ' ', ' ', ' ', ' ']
                  },
                  bottomP: ['X1100无人机设计为满足大部分的应用场景，主要用于应急指挥、事故查看、警用安防、目标侦察、林业防火、电力巡线、道路巡检、环境监测等领域。']
                },
                {
                  h2: 'X820',
                  topP: '性能均衡，满足大部分应用场景',
                  src: ['@/../static/images/product/detail/type1-3-1.png','@/../static/images/product/detail/type1-3-2.png','@/../static/images/product/detail/type1-3-3.png'],
                  li: ['整机碳纤维结构', '对角轴距820mm', '22000mAh智能电池', '续航时间35min', '作业半径10km', '最大飞行海拔5000m', '巡航速度15m/s', '飞行抗风能力6级', '失联/低电返航'],
                  table: {
                    td1: ['工作环境', ' ', '-20 ~ 60℃，95%无凝结', ' ', '机臂机械特征', ' ', '可折叠'],
                    td2: ['最大载重量', ' ', '3.3kg', ' ', '起落架特征', ' ', '可遥控收放'],
                    td3: ['最大起飞重量', ' ', '11kg', ' ', '卫星定位模块', ' ', 'GPS、北斗、GLONASS三模'],
                    td4: ['桨翼机械特征', ' ', '快拆桨', ' ', '悬停精度（相对精度）', ' ', '水平：±0.2m，垂直：±0.5m'],
                    td5: ['智能飞行', ' ', '定高、定点、自主巡航等多姿态飞行模式；一键起降、 低电压保护、自动返航；预置禁飞区、电子围栏', ' ', ' ', ' ', ' ']
                  },
                  bottomP: ['X820无人机设计为满足大部分的应用场景，主要用于应急指挥、事故查看、警用安防、目标侦察、林业防火、电力巡线、道路巡检、环境监测等领域。']
                },
                {
                  h2: 'X650H',
                  topP: '便携性高，针对单兵快速机动应用场景设计',
                  src: ['@/../static/images/product/detail/type1-4.png','@/../static/images/product/detail/type1-4.png'],
                  li: ['便携式设计', '对角轴距650mm', '12000mAh智能电池', '续航时间30min（-20℃）', '作业半径≥5KM', '最大飞行海拔5000m', '巡航速度15m/s', '飞行抗风能力6级', '失联/低电返航'],
                  table: {
                    td1: ['工作环境', ' ', '-20 ~ 60℃，95%无凝结', ' ', '机臂机械特征', ' ', '可折叠'],
                    td2: ['最大载重量', ' ', '2.7kg', ' ', '起落架特征', ' ', '可遥控收放'],
                    td3: ['最大起飞重量', ' ', '5.2kg', ' ', '卫星定位模块', ' ', 'GPS、北斗、GLONASS三模'],
                    td4: ['桨翼机械特征', ' ', '快拆桨', ' ', '悬停精度（相对精度）', ' ', '水平：±0.2m，垂直：±0.5m'],
                    td5: ['智能飞行', ' ', '定高、定点、自主巡航等多姿态飞行模式；一键起降、 低电压保护、自动返航；预置禁飞区、电子围栏', ' ', '防护等级', ' ', 'IP43'],
                    td6: ['避障功能', ' ', '支持', ' ', '指点变焦', ' ', '支持']
                  },
                  bottomP: ['X650无人机设计为单兵快速应用场景，可用于应急指挥、警用安防、目标侦察、电力巡线、道路巡检、环境监测等领域。']
              }
            ]
          ],
          2: [
              [
                {
                  h2: 'GA-V-2030U',
                  topP: '200万像素，30倍光学变焦，FHD',
                  src: ['@/../static/images/product/detail/type2-1.png','@/../static/images/product/detail/type2-1.png'],
                  li: ['200万像素高清摄像机', '最大分辨率1920*1080', '快拆云台/三轴结构/三层防抖', '30倍光学变焦镜头', '超低照度0.005Lux', 'AF自动聚焦算法，精准聚焦'],
                  table: {
                    td1: ['传感器', ' ', '1/2.8英寸CMOS', ' ', '最大分辨率', ' ', '1920(H)×1080(V)'],
                    td2: ['视频压缩标准', ' ', 'H.264MainProfile/H.264HighProfile/M-JPEG', ' ', '光学变焦', ' ', '30倍'],
                    td3: ['数字变倍', ' ', '12×', ' ', '最低照度', ' ', '彩色：0.05Lux@F1.5，黑白：0.005Lux@F1.5'],
                    td4: ['存储', ' ', '最大支持128GB MicroSD', ' ', '云台转动', ' ', '航向、俯仰、横滚'],
                    td5: ['云台控制精度', ' ','±0.01°', ' ', '', ' ', '']
                  },
                  bottomP: ['200万像素云台相机具有30倍光学变倍，可在高空查看细节，支持航向锁定与航向跟随模式。']
                },
                {
                  h2: 'GA-V-2045U',
                  topP: '200万像素，30倍光学变焦，FHD',
                  src: ['@/../static/images/product/detail/type2-2.png','@/../static/images/product/detail/type2-2.png'],
                  li: ['200万像素高清摄像机', '最大分辨率1920*1080', '快拆云台/三轴结构/三层防抖', '40倍光学变焦镜头', 'AF自动聚焦算法，精准聚焦'],
                  table: {
                    td1: ['传感器', ' ', '1/2.8英寸CMOS', ' ', '最大分辨率', ' ', '1920(H)×1080(V)'],
                    td2: ['视频压缩标准', ' ', 'H.265/H.264/M-JPEG', ' ', '光学变焦', ' ', '40倍'],
                    td3: ['数字变倍', ' ', '12×', ' ', '最低照度', ' ', '彩色：0.05Lux@F1.5，黑白：0.005Lux@F1.5'],
                    td4: ['存储', ' ', '最大支持128GB MicroSD', ' ', '云台转动', ' ', '航向、俯仰、横滚'],
                    td5: ['云台控制精度', ' ','±0.01°', ' ', '功能', ' ', '3D定位、智能跟踪']
                  },
                  bottomP: ['200万像素云台相机具有40倍光学变倍，可在高空查看细节，支持航向锁定与航向跟随模式。']
                },
                {
                  h2: 'GA-V-6030U',
                  topP: '600万像素，透雾，三轴增稳结构',
                  src: ['@/../static/images/product/detail/type2-3.png','@/../static/images/product/detail/type2-3.png'],
                  li: ['600万像素高清摄像机', '30倍光学变焦镜头', '超低照度0.0005Lux', 'AF自动聚焦算法，精准聚焦', '支持H.265编码', '支持透雾设置功能', '快拆云台/三轴结构/三层防抖'],
                  table: {
                    td1: ['传感器', ' ', '1/1.8英寸 6MP CMOS', ' ', '最大分辨率', ' ', '2592(H)×2592(V)'],
                    td2: ['视频压缩标准', ' ', 'H.265/H.264/M-JPEG', ' ', '帧率', ' ', '30fps@5M/3M，60fps@1080p'],
                    td3: ['光学变焦', ' ', '30倍', ' ', '最低照度', ' ', '彩色：0.05Lux@F1.5，黑白：0.005Lux@F1.5'],
                    td4: ['存储', ' ', '最大支持128GB MicroSD', ' ', '云台转动', ' ', '航向、俯仰、横滚'],
                    td5: ['云台控制精度', ' ','±0.01°', ' ', '', ' ', '']
                  },
                  bottomP: ['600万像素云台相机具有30倍光学变倍，可在400米外看清车牌，支持航向锁定与航向跟随模式。']
                },
                {
                  h2: 'GA-V-8030U',
                  topP: '4K高清云台相机，三轴增稳结构',
                  src: ['@/../static/images/product/detail/type2-4.png','@/../static/images/product/detail/type2-4.png'],
                  li: ['1200万像素高清摄像机', '最大分辨率4000*3000', '快拆云台/三轴结构/三层防抖', '30倍光学变焦镜头', 'AF自动聚焦算法，精准聚焦'],
                  table: {
                    td1: ['传感器', ' ', '1/1.7英寸CMOS', ' ', '最大分辨率', ' ', '4000(H)×3000(V)'],
                    td2: ['视频压缩标准', ' ', 'H.265/H.264/M-JPEG', ' ', '光学变焦', ' ', '30倍'],
                    td3: ['存储', ' ', '最大支持128GB MicroSD', ' ', '云台转动', ' ', '航向、俯仰、横滚'],
                    td4: ['云台控制精度', ' ','±0.01°', ' ', '功能', ' ', '3D定位、智能跟踪']
                  },
                  bottomP: ['4K高清云台相机具有30倍光学变倍，可在高空查看细节，支持航向锁定与航向跟随模式。']
                },
                {
                  h2: 'GA-T-0600TA',
                  topP: '支持测温，火点报警',
                  src: ['@/../static/images/product/detail/type2-5.png','@/../static/images/product/detail/type2-5.png'],
                  li: ['全球领先的非制冷氧化钒焦平面探测器', '无光环境下目标可视', 'Smart thermal智能热成像技术', '支持测温功能，误差±2℃或≤2%', '支持火点探测报警，精准聚焦','快拆云台/三轴结构/三层防抖'],
                  table: {
                    td1: ['探测器像素', ' ', '640×512', ' ', '视频编码', ' ', 'H.264M/H.264H/M-JPEG，支持720P高清图像输出'],
                    td2: ['距离（人：1.8m*0.5m，探测，识别，辩认）', ' ', '640米，160米，80米', ' ', '距离（车：2.3m*2.3m，探测，识别，辩认）', ' ', '2000米，500米，250米'],
                    td3: ['测温范围', ' ', '低温模式：-20°C到160°C；高温模式：-20°C到550°C', ' ', '调色板', ' ', '14种：白热，黑热，聚变，彩虹，金秋，午日，铁红，琥珀，玉石，夕阳，冰火，油画，石榴，翡翠'],
                    td4: ['存储', ' ','最大支持128GB MicroSD', ' ', '云台转动', ' ', '航向、俯仰、横滚'],
                    td5: ['云台控制精度', ' ','±0.01°', ' ', '', ' ', '']
                  },
                  bottomP: ['红外热成像具有完全无光环境下的夜视功能，并且支持温度测量及火点报警，支持航向锁定与航向跟随模式。']
                },
                {
                  h2: 'GA-TV-2030TA',
                  topP: '高清可见光、热成像双目',
                  src: ['@/../static/images/product/detail/type2-6.png','@/../static/images/product/detail/type2-6.png'],
                  li: ['200万30倍高清可见光', '热成像采用非制冷氧化钒焦平面探测器', '无光环境下目标可视', '支持测温功能，误差±2℃或≤2%', '快拆云台/三轴结构/三层防抖'],
                  table: {
                    td1: ['可见光传感器', ' ', '1/2.8英寸CMOS', ' ', '可见光分辨率', ' ', '1920(H)×1080(V)'],
                    td2: ['可见光光学变焦', ' ', '30倍', ' ', '可见光最低照度', ' ', '彩色：0.05Lux@F1.5，黑白：0.005Lux@F1.5'],
                    td3: ['热成像探测器像素', ' ', '640×512，支持1280*1024高清输出', ' ', '热成像测温范围', ' ', '低温模式：-20°C到160°C；高温模式：-20°C到550°C'],
                    td4: ['热成像调色板', ' ','14种：白热，黑热，聚变，彩虹，金秋，午日，铁红，琥珀，玉石，夕阳，冰火，油画，石榴，翡翠', ' ', '热成像火点探测', ' ', '支持'],
                    td5: ['存储', ' ','最大支持128GB MicroSD', ' ', '云台转动', ' ', '航向、俯仰、横滚'],
                    td6: ['云台控制精度', ' ','±0.01°', ' ', '', ' ', '']
                  },
                  bottomP: ['红外双目热成像具备可见光和热成像同时成像的效果，可用于设备检测，空中巡逻等应用场景。']
                }
             ],
            [
              {
                h2: 'GA-V-2012TS',
                topP: '高空喊话，1080P相机',
                src: ['@/../static/images/product/detail/type2-7.png','@/../static/images/product/detail/type2-7.png'],
                li: ['远程喊话功能', '数据最大传输10Km', '自带200万高清相机', 'AF自动聚焦算法，精准聚焦', '快拆云台/三轴结构/三层防抖'],
                table: {
                  td1: ['有效喊话距离', ' ', '≥100m', ' ', '传感器', ' ', '1/2.8英寸CMOS'],
                  td2: ['最大分辨率', ' ', '1920(H)×1080(V)', ' ', '视频压缩标准', ' ', 'H.264MainProfile/H.264HighProfile/M-JPEG'],
                  td3: ['光学变焦', ' ', '12倍', ' ', '最低照度', ' ', '彩色：0.075Lux@F1.6，黑白：0.015Lux@F1.6'],
                  td4: ['云台转动', ' ','航向、俯仰、横滚', ' ', '云台控制精度', ' ', '±0.01°']
                },
                bottomP: ['喇叭支持10km外远程喊话，自带200万高清相机，带三轴云台，可适用于大型活动保障、交通、消防等场景。']
              },
              {
                h2: 'GA-V-2012TC',
                topP: '遥控抛投，1080P相机',
                src: ['@/../static/images/product/detail/type2-8.png','@/../static/images/product/detail/type2-8.png'],
                li: ['2个挂载点', '最大载重量合计10kg', '自带200万高清相机', 'AF自动聚焦算法，精准聚焦', '快拆云台/三轴结构/三层防抖'],
                table: {
                  td1: ['挂载能力', ' ', '2个挂载点，最大载重量合计10kg', ' ', '传感器', ' ', '1/2.8英寸CMOS'],
                  td2: ['最大分辨率', ' ', '1920(H)×1080(V)', ' ', '视频压缩标准', ' ', 'H.264MainProfile/H.264HighProfile/M-JPEG'],
                  td3: ['光学变焦', ' ', '12倍', ' ', '最低照度', ' ', '彩色：0.075Lux@F1.6，黑白：0.015Lux@F1.6'],
                  td4: ['云台转动', ' ','航向、俯仰、横滚', ' ', '云台控制精度', ' ', '±0.01°']
                },
                bottomP: ['2个挂载点支持分辨抛投，自带200万高清相机，带三轴云台，可适用于应急救援、抢险救灾等场景。']
              },
              {
                h2: 'GA-V-2012TS',
                topP: '相机、喊话、抛投三合一挂载',
                src: ['@/../static/images/product/detail/type2-9.png','@/../static/images/product/detail/type2-9.png'],
                li: ['远程喊话功能', '2个独立挂载点', '200万高清相机', 'AF自动聚焦算法，精准聚焦', '快拆云台/三轴结构/三层防抖'],
                table: {
                  td1: ['有效喊话距离', ' ', '≥100m', ' ', '挂载能力', ' ', '2个挂载点，最大载重量10kg'],
                  td2: ['最大分辨率', ' ', '1920(H)×1080(V)', ' ', '视频压缩标准', ' ', 'H.264MainProfile/H.264HighProfile/M-JPEG'],
                  td3: ['光学变焦', ' ', '12倍', ' ', '最低照度', ' ', '彩色：0.075Lux@F1.6，黑白：0.015Lux@F1.6'],
                  td4: ['云台转动', ' ','航向、俯仰、横滚', ' ', '云台控制精度', ' ', '±0.01°']
                },
                bottomP: ['喇叭支持10km外远程喊话，挂载最大支持10kg，自带200万高清相机，带三轴云台，可适用于大型活动保障、交通、应急救援等场景。']
              },
              {
                h2: 'GA-V-2012TM',
                topP: 'MAC地址采集',
                src: ['@/../static/images/product/detail/type2-10.png','@/../static/images/product/detail/type2-10.png'],
                li: ['MAC地址采集功能', '自带200万高清相机', 'AF自动聚焦算法，精准聚焦', '快拆云台/三轴结构/三层防抖'],
                table: {
                  td1: ['MAC采集', ' ', '可探测到手机的MAC地址', ' ', '最大采集距离', ' ', '不小于500m'],
                  td2: ['最大分辨率', ' ', '1920(H)×1080(V)', ' ', '视频压缩标准', ' ', 'H.264MainProfile/H.264HighProfile/M-JPEG'],
                  td3: ['光学变焦', ' ', '12倍', ' ', '最低照度', ' ', '彩色：0.075Lux@F1.6，黑白：0.015Lux@F1.6'],
                  td4: ['云台转动', ' ','航向、俯仰、横滚', ' ', '云台控制精度', ' ', '±0.01°']
                },
                bottomP: ['设备支持手机MAC地址采集，自带200万高清相机，带三轴云台，可适用于大型活动保障、交通等场景。']
              },
              {
                h2: 'GA-V-545OP',
                topP: '5个相机，倾斜摄影',
                src: ['@/../static/images/product/detail/type2-11.png','@/../static/images/product/detail/type2-11.png'],
                li: ['五目倾斜摄影', '支持五个相机同时开关机', '支持定点曝光、定时曝光'],
                table: {
                  td1: ['总像素数', ' ', '大于1亿像素', ' ', '相机个数', ' ', '5个'],
                  td2: ['存储容量', ' ', '320G', ' ', 'POS记录', ' ', '自带GPS记录POS地理信息'],
                  td3: ['读取方式', ' ', '主机与相机只需一根USB线便可实现POS数据、照片、配置等数据的读取，无需插拔存储卡', ' ', '是否支持丢片检测功能', ' ', '支持丢片检测，并能在POS记录中标明相机丢片状态'],
                  td4: ['差分', ' ','可扩展差分系统', ' ', '', ' ', '']
                },
                bottomP: ['倾斜摄影相机主要用于三维建模，可适用于城市规划、公安和城管。']
              },
              {
                h2: 'GA-V-2012TGV2',
                topP: '高精度气体探测，6个可更换模块',
                src: ['@/../static/images/product/detail/type2-12.png','@/../static/images/product/detail/type2-12.png'],
                li: ['8组分均可方便更换，以适用不同场合需求', '传感器原理^红外、电化学、激光', '支持粉尘、温度、湿度检测'],
                table: {
                  td1: ['同时支持组分数', ' ', '最大8组分，可按需求选配', ' ', '传感器', ' ', '搭载智能气体传感器，防护等级IP65，可识别CO、CO2、H2S、NH3、CL2、SO2、VOC气体、CH4八种等以上气体，能够在地面实时显示检测气体浓度值。'],
                  td2: ['数据存储及显示', ' ', '历史数据存储、回放功能（保存在地面站、并回放），实时曲线显示功能', ' ', '报警功能', ' ', '当监测浓度达到预设值时可向地面站发出实时报警'],
                  td3: ['信息', ' ', '记录检测点位GPS、时间（飞机本体GPS）、高度值、各个参数浓度超标警报', ' ', '', ' ', '']
                },
                bottomP: ['高精度气体检测器可适用于环境监管检测，消防等场景。']
              }
            ]
          ],
          3: [
            [
              {
                h2: 'P7',
                topP: '显控一体式遥控器',
                src: ['@/../static/images/product/detail/type3-1.png','@/../static/images/product/detail/type3-1.png'],
                li: ['显控一体设计', '7寸触摸显示屏', '视频/地图切换','飞行器、云台集中控制', '一键式便捷操作', '智能飞行'],
                table: {
                  td1: ['操作屏幕', ' ', '7英寸多点电容式触摸屏，分辨率：1024*600', ' ', '遥控距离', ' ', '≥10km'],
                  td2: ['操作系统', ' ', 'Android5.1', ' ', '电池', ' ', '2S LiPo，7800mAh'],
                  td3: ['接口', ' ', 'MicroUSB、AV接口', ' ', '网络', ' ', 'WiFi IEEE802.11b/g/n'],
                  td4: ['存储', ' ', '128GB MicroSD', ' ', '遥控器尺寸', ' ', '350*288*85mm'],
                  td5: ['续航时间', ' ', '≥5h', ' ', '', ' ', '']
                },
                bottomP: ['显控一体遥控器可同时对飞行平台及云台相机进行控制，便于现场操作人员使用。']
              },
              {
                h2: 'P13',
                topP: '三防级专业地面站',
                src: ['@/../static/images/product/detail/type3-2.png','@/../static/images/product/detail/type3-2.png'],
                li: ['军工级品质', '抗震/抗冲击/防震', '内置高亮触摸显示屏','专业地面站软件', '现场控制中枢', '支持标准传输协议'],
                table: {
                  td1: ['最大通讯距离', ' ', '17.2km', ' ', '最大图传带宽', ' ', '8Mbps'],
                  td2: ['防护等级', ' ', '防水防尘等级达到IP65', ' ', '显示屏', ' ', '13.1寸触摸屏，分辨率1024*768，1200cd/㎡'],
                  td3: ['内存', ' ', '4GB', ' ', '存储', ' ', '1TB'],
                  td4: ['接口', ' ', 'RJ45/HDMI/VGA/AV/USB*3', ' ', '扩展', ' ', '4G传输功能'],
                  td5: ['功能', ' ', '连接无人机、现场指挥系统和后端指挥中心的控制中枢', ' ', '', ' ', '']
                },
                bottomP: ['地面站内置13.1寸触摸显示屏，便于现场指挥员使用。']
              }
            ]
          ],
          4: [
            [
              {
                h2: '2000J',
                topP: '手持式无人机反制枪',
                src: ['@/../static/images/product/detail/type4-1-1.png','@/../static/images/product/detail/type4-1-2.png'],
                li: ['驱离模式/击落模式', '2KM作用距离'],
                table: {
                  td1: ['干扰通道', ' ', '2.4G、5.8G遥控图传，GPS/GLONASS/北斗', ' ', '模式', ' ', '驱离模式/击落模式'],
                  td2: ['输出功率', ' ', '100W/50W/25W可选', ' ', '作用距离', ' ', '≤2KM/1.2KM/0.8KM'],
                  td3: ['波束宽度', ' ', '15°锥体', ' ', '瞄准器', ' ', '红绿十字+激光瞄准3-9倍放大'],
                  td4: ['圆筒八木天线', ' ', '增益18dbi', ' ', '操作温度', ' ', '-20℃~+55℃'],
                  td5: ['续航时间', ' ', '80min', ' ', '电源供电', ' ', 'AC-220V/内置电池']
                },
                bottomP: ['便携式无人机干扰器可用于大型活动安保，军事驻地、科研院所、各类监狱，和公共安全系统维稳。']
              },
              {
                h2: '1500JPV1',
                topP: '全向干扰，半球形防御体',
                src: ['@/../static/images/product/detail/type4-2.png','@/../static/images/product/detail/type4-2.png'],
                li: ['球形防御体', '可避开“警用执法特殊频率”进行单独设置', '采用可拔插式模块化设计'],
                table: {
                  td1: ['干扰频率', ' ', '900M2.4G、5.8G遥控图传,GPS', ' ', '干扰源', ' ', '全数字（DSS）信号源合成干扰源技术 '],
                  td2: ['天线类型', ' ', '高增益全向天线', ' ', '防御距离', ' ', '有效半径1000-1500米'],
                  td3: ['续航时间', ' ', '≥60分钟的续航时间', ' ', '电源输入', ' ', 'AC220V/110V 或DC27-28V']
                },
                bottomP: ['便携式无人机干扰器可用于大型活动安保，军事驻地、科研院所、各类监狱，和公共安全系统维稳。']
              }
            ]
          ]
        },
        type: 1,
        product: 0,
        page: 0,
        mark: 0
      }
    },
    methods: {
      go() {
        this.timer = setInterval(() => {
          this.autoPlay();
        }, 4000)
      },
      stop() {
        clearInterval(this.timer);
        this.timer = null;
      },
      autoPlay() {
        this.mark++;
        if (this.mark > this.selfData[this.type][this.page][this.product].src.length - 1) {
          this.mark = 0;
        }
      },
      prevImg() {
        this.mark--;
        if (this.mark < 0) {
          this.mark = this.selfData[this.type][this.page][this.product].src.length - 1;
        }
      },
      nextImg() {
        this.mark++;
        if (this.mark > this.selfData[this.type][this.page][this.product].src.length - 1) {
          this.mark = 0;
        }
      },
      toTop() {
        document.documentElement.scrollTop -= 100;
        if (document.documentElement.scrollTop > 0) {
          var timer = setTimeout(() => this.toTop(),16);
        }else {
          clearTimeout(timer);
        }
      }
    },
      created() {
        this.type = this.$route.query.type;
        this.page = this.$route.query.page;
        this.product = this.$route.query.product;

        this.$nextTick(() => {
          this.timer = setInterval(() => {
            this.autoPlay()
          }, 4000);
        })
    },
    destroyed() {
      VueEvent.$emit('toMore','');
    }
  }
</script>

<style scoped>
  @import "../../static/css/product-detail.css";
</style>
