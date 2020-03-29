<template>
  <div>
    <map
        style="width: 100%!important;height: 100vh!important;z-index: 1"
          id="map"
         :longitude="longitude"
         :latitude="latitude"
         scale="25"
         bindmarkertap="markertap"
         :markers="markers"
         show-location
         show-compass
    ></map>
    <div class="detail">
        <div class="pannel">
          <div class="content">
            <i-row>
              <i-col span="20" style="font-size: 17px;font-weight: bold">
                {{tabInfor.title}}
              </i-col>
              <i-col span="4">
                <van-button type="default" plain size="mini">查看详情</van-button>
              </i-col>
            </i-row>
            <i-row>
              <i-col>
                <div style="height: 5px;"></div>
              </i-col>
            </i-row>
            <i-row>
              <i-col span="24" style="font-size: 12px;color: grey;">
                {{tabInfor.address}}
              </i-col>
            </i-row>
            <i-row>
              <i-col>
                <div style="height: 5px;"></div>
              </i-col>
            </i-row>
            <i-row style="font-size: 12px;color: grey;">
              <i-col span="5">
                小柜：{{tabInfor.small}} ‖
              </i-col>
              <i-col span="5">
                中柜：{{tabInfor.middle}} ‖
              </i-col>
              <i-col span="5">
                大柜：{{tabInfor.big}} ‖
              </i-col>
              <i-col span="5">
                在售：{{tabInfor.onTheSold}}件
              </i-col>
            </i-row>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import pannel from "../../components/pannel"
export default {
  components: {
    pannel
  },

  data () {
    return {
      longitude: 114.068642,
      latitude: 22.626227,
      tabInfor:{
        title:"丁香苑门口1号二手柜",
        address:"广东省韶关市韶关学院丁香苑",
        small:"有",
        middle:"有",
        big:"有",
        onTheSold:"5"
      },
      markers: [
        {
          id: 0,
          latitude: 22.626227,
          longitude: 114.068642,
          width: 66/1.5,
          height: 82/1.5,
          title:"asd",
          iconPath:"../../../../../../static/images/location.png"
        },
        {
          id: 1,
          latitude: 22.626265,
          longitude: 114.069642,
          width: 66/1.5,
          height: 82/1.5,
          title:"asd",
          iconPath:"../../../../../../static/images/location.png"
        }
      ]
    }
  },

  created () {

  },
  mounted(){
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        console.log(res, '地址')
        // _this.latitude = res.latitude;
        // _this.longitude = res.longitude
      }
    })


  },
}
</script>

<style>
  .detail{
    z-index: 25;
    position: absolute;
    bottom: 0;
    width:100%;
  }
  .detail .pannel{
    width: 90%;
    margin: 20px auto;
    background: white;
    height: 90px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 1px #a8a8a8;
  }
  .detail .pannel .content{
    padding: 10px 20px;
  }
</style>
