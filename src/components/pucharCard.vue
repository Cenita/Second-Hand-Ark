<template>
    <div>
      <pannel>
        <div class="card" @click="aaa">
          <i-row class="card_head">
            <i-col span="1" i-class="col-class">
              <i-icon type="coordinates" />
            </i-col>
            <i-col style="vertical-align: middle;text-align: left" span="14">
              <span>{{inforData.address}}</span>
              <i-icon type="enter" />
            </i-col>
            <i-col style="color:#ff6b73;text-align: right" span="9" i-class="col-class">
              <div v-if="inforData.mode==='0'">买家已下订单</div>
              <div v-else-if="inforData.mode==='1'">已付款,等待领取</div>
              <div v-else-if="inforData.mode==='2'">交易完成</div>
            </i-col>
          </i-row>
          <i-row>
            <i-col  span="24"><div style="height: 10px;"></div></i-col>
          </i-row>
          <i-row>
            <i-col span="8" i-class="col-class">
              <van-image
                width="100"
                height="100"
                :src="inforData.imageUrl"
              />
            </i-col>
            <i-col offset="1" span="10" i-class="col-class">
              <i-row>
                <i-col span="24">
                  <span class="title">{{inforData.title}}</span>
                </i-col>
              </i-row>
              <i-row>
                <i-col span="24">
                  <span class="tips">{{inforData.tips}}</span>
                </i-col>
              </i-row>
            </i-col>
            <i-col offset="1" span="4" i-class="col-class">
              <div style="text-align: right;">
                <span style="font-size: 10px!important;">¥ </span>
                <span>{{inforData.showNumber}}</span>
              </div>
            </i-col>
          </i-row>
          <i-row v-if="inforData.mode!=='0'">
            <i-col span="24">
              <div style="text-align: right;">
                <span style="font-size: 12px;">实付款 </span>
                <span style="font-size: 12px;color: #ff6b73;">¥ </span>
                <span style="color: #ff6b73;font-weight: bold;font-size: 15px;">{{inforData.money}}</span>
              </div>
            </i-col>
          </i-row>
          <i-row>
            <i-col  span="24"><div style="height: 10px;"></div></i-col>
          </i-row>
          <i-row>
            <i-col span="8">
              <van-button v-if="inforData.mode==='0'||inforData.mode==='2'" size="small" class="button" plain type="danger">删除订单</van-button>
              <van-button v-else size="small" class="button" plain type="danger">退款</van-button>
            </i-col>
            <i-col span="16">
              <div class="btnclass">
                <van-button v-if="inforData.mode==='0'" style="float: right;" @click="pay" size="small" class="button" plain type="danger">付款</van-button>
                <van-button v-else-if="inforData.mode==='1'" style="float: right;" @click="open" size="small" class="button" plain type="info">开柜</van-button>
                <van-button style="float: right;margin-right:5px;" size="small" class="button" plain type="default">查看路线</van-button>
              </div>
            </i-col>
          </i-row>
        </div>
      </pannel>
      <van-toast id="van-toast" />
    </div>
</template>

<script>
  import pannel from "./pannel"
  import Toast from '../../static/Vants/toast/toast';
  export default {
    props:[
      "inforData"
    ],
    components: {
      pannel
    },
    name: "pucharCard",
    data:function() {
      return {
        title:"气asdasda温气温群为群翁群翁群翁群无王企鹅请问请问而且为请问气温气温请问企鹅气温气温请问群翁asdasdsa",
      }
    },
    methods:{
      pay(){
        Toast.loading({
          mask: true,
          message: '正在付款中...'
        });
        Toast.success('付款成功');
      },
      open(){
        console.log("Aaa")
        Toast.loading({
          mask: true,
          message: '正在开柜...',
        });
        setTimeout(()=>{
          Toast.success('开柜成功');
        },1000)
      }
      ,
      aaa(){
        console.log(this.mode)
      },
      getByteLen(val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
          var a = val.charAt(i);
          if (a.match(/[^\x00-\xff]/ig) != null) {
            len += 2;
          }
          else {
            len += 1;
          }
        }
        return len;
      }
    },
    computed:{
      delTitle() {
        var title = this.title;
        if(this.getByteLen(title)<39){
          return title;
        }else{
          var T = "";
          for(var i in title){
            if(this.getByteLen(T)>40){
              break;
            }
            T+=title[i];
          }
          T+="...";
          return T;
        }
      }
    }
  };
</script>

<style scoped>
  .card{
    font-size: 14px;
    margin: 15px 15px;
  }
  .card_head{
    font-size: 14px;
    color: #525252;
    font-weight: bold;
  }
  .title{
  }
  .tips{
    font-size: 12px;
    color: grey;
  }
  .button .van-button{
    height: 20px!important;
  }
</style>
