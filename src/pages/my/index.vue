<template>
  <div>
    <div class="logincard">
      <pannel>
        <div style="margin: 10px 0px">
          <i-avatar class="avatar" :src="userInfo.avatarUrl" size="large"></i-avatar>
          <span style="font-size: 15px;position: relative;top: -10px;margin-left: 7px">{{userInfo.nickName}}</span>
          <span style="font-size: 15px;position: relative;top: 15px;margin-left: -47px">
            <i-icon type="flag" />
            <span>{{userInfo.city}}</span>
          </span>
        </div>
      </pannel>
      <pannel v-if="userInfo.nickName!='未登录'">
        <i-grid i-class="grid">
          <i-grid-item i-class="grid">
            <i-grid-label i-class="bigfont">1</i-grid-label>
            <i-grid-label>我发布的</i-grid-label>
          </i-grid-item>
          <i-grid-item i-class="grid">
            <i-grid-label i-class="bigfont">1</i-grid-label>
            <i-grid-label>我卖出的</i-grid-label>
          </i-grid-item>
          <i-grid-item i-class="grid">
            <i-grid-label i-class="bigfont">1</i-grid-label>
            <i-grid-label>我买到的</i-grid-label>
          </i-grid-item>
          <i-grid-item i-class="grid">
            <i-grid-label i-class="bigfont">1</i-grid-label>
            <i-grid-label>我想要的</i-grid-label>
          </i-grid-item>
        </i-grid>
      </pannel>
      <pannel>
        <i-cell i-class="bk" title="用户条款" is-link url="/pages/index/main"></i-cell>
      </pannel>
      <div v-if="userInfo.nickName=='未登录'">
        <i-button size="small" open-type="getUserInfo" @getuserinfo="authSetUser" type="primary">登录</i-button>
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
      userInfo: {
        avatarUrl:"../../../../../static/images/user.jpg",
        nickName:"未登录"
      },
    }
  },

  created () {
    console.log("Aasas")
  }
  ,methods:{
    authSetUser (e) {
      this.userInfo=e.mp.detail.userInfo;
      console.log(this.userInfo);
    },
    getUserInfo () {
      // 调用登录接口
      var _this=this;
      wx.getUserInfo({//当已授权getUserInfo时
        lang: "zh_CN",
        success(res) {
          console.log(res);
          _this.userInfo=res.userInfo
        },
        fail(err) {
          console.log(err);
        }
      })
    }
  }
}
</script>

<style>
  .grid{
    border: 0px!important;
  }
  page {
    background-color: #fafafa;
  }
  .bigfont{
    font-size: 23px!important;
  }
  .panel{
    background: white;
    border-radius: 20px;
    width: 95%;
    margin: auto;
    border: 2px solid #ececec;
  }
  .logincard{
    margin-top: 10px;
  }
  .logincard div{
  }
  .avatar{
    margin-left: 10px;
    margin-top: 5px;
  }
  .avatar view{
    border: 2px solid #ececec;

    border-radius: 100%;
    width: 1rem!important;
    height: 1rem!important;
  }
  .loginbtn{
    width: 50px;
  }
  .bk{
    background: none!important;
  }
</style>
