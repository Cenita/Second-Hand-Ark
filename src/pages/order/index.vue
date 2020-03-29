<template>
  <div>
    <i-tab-bar :current="mode" @change="handleChange">
      <i-tab-bar-item key="0" icon="financial_fill" current-icon="financial_fill" title="待付款"></i-tab-bar-item>
      <i-tab-bar-item key="1" icon="tasklist" current-icon="tasklist" title="待领取"></i-tab-bar-item>
      <i-tab-bar-item key="2" icon="task" current-icon="task" count="3" title="已领取"></i-tab-bar-item>
    </i-tab-bar>
    <van-search  :value="value" placeholder="请输入搜索关键词" />
    <pannel v-if="listData.length==0">
      <div style="text-align: center;height:40px;font-size: 12px;line-height: 40px;">
        暂无数据哦！
      </div>
    </pannel>
    <card :key="index" :inforData="a"  v-for="(a,index) in listData">
    </card>
  </div>
</template>

<script>
  import card from "../../components/pucharCard"
  import pannel from "../../components/pannel"
export default {
  components: {
    card,
    pannel
  },
  methods:{
    handleChange (e) {
      this.mode = e.mp.detail.key
      this.inforData.mode = this.mode;
      this.listData = [];
      this.listData.push(this.inforData)
      console.log(this.listData)
    },
  },
  data () {
    return {
      mode:"0",
      value:"",
      inforData:{
        id:1,
        mode:"0",
        address:"韶关学院西侧5号柜",
        title:"无线蓝牙耳麦 wireless 魔音录音师耳机二代头戴式",
        tips:"3.5mm耳机接口可转有线",
        money:750,
        showNumber:230,
        imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585218645174&di=d95aa4f8deb66449665fefd0dca6a75e&imgtype=0&src=http%3A%2F%2Fwww.t-jiaju.com%2FtujjJDAwNCQxNC8yMTA4NzQ0Njk0L1RCMllTRTBjcCQ2YjQkNiQ2JDZfISEyMTA4NzQ0Njk0JDk.jpg"
      },
      listData:[

      ]
    }
  },

  created () {

  }
}
</script>

<style>
  page {
    background-color: #fafafa;
  }
</style>
