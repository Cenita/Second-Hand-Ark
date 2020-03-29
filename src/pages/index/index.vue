<template>
  <div>
    <van-image
      width="100%"
      height="160"
      fit="contain"
      src="../../../static/images/main.jpg"
    />
    <div style="background: white;text-align: center;padding-top: 20px;margin-bottom: 30px;">
      <i-row >
        <i-col span="8">
          <div class="iconTubiao">
            <van-image
              width="40"
              height="40"
              src="../../../static/images/storew.png"
            />
          </div>
          <div class="iconfont">
            我要存件
          </div>
        </i-col>
        <i-col span="8">
          <div class="iconTubiao">
            <van-image
              width="40"
              height="40"
              src="../../../static/images/scan.png"
            />
          </div>
          <div class="iconfont">
            扫码取件
          </div>
        </i-col>
        <i-col span="8">
          <div class="iconTubiao">
            <van-image
              width="40"
              height="40"
              src="../../../static/images/conversation.png"
            />
          </div>
          <div class="iconfont">
            联系客服
          </div>
        </i-col>
      </i-row>
    </div>
    <van-divider contentPosition="center">附近的二手柜</van-divider>
    <div style="margin-bottom: 20px;">
      <cab :data="d" v-for="(d,index) in cap"></cab>
    </div>
  </div>
</template>
<script>
import cab from "../../components/cab"
import capData from "../../../static/json/nearly"
export default {
  data () {
    return {
      cap:[]
    }
  },
  components: {
    cab
  },

  methods: {

  },
  mounted(){
    this.cap = capData.cap;
    console.log(capData.cap)
  },
  created () {

  }
}
</script>

<style scoped>
  page {
    background-color: #fafafa;
  }
  .iconTubiao{
    line-height: 73px;
    margin: auto;
    width: 50px;
    height:50px;
    border-radius: 100%;
    background: rgba(242, 234, 156, 0.14);
  }
  .iconfont{
    font-size: 12px;
    font-weight: bold;
  }
</style>
