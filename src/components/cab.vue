<template>
    <div class="cab">
      <div class="content">
        <i-row style="color: #eda242">
          <i-col span="1" style="font-size: 17px;font-weight: bold">
            <i-icon type="coordinates" />
          </i-col>
          <i-col span="20" style="font-size: 17px;font-weight: bold">
            {{data.address}}
          </i-col>
        </i-row>
        <i-row>
          <i-col>
            <div style="height: 5px;"></div>
          </i-col>
        </i-row>
        <i-row>
          <i-col span="24" style="font-size: 12px;color: grey;">
            {{data.trueAddress}}
          </i-col>
        </i-row>
        <i-row>
          <i-col>
            <div style="height: 5px;"></div>
          </i-col>
        </i-row>
        <i-row style="font-size: 12px;color: grey;">
          <i-col span="5">
            小柜：{{data.contain.small}} ‖
          </i-col>
          <i-col span="5">
            中柜：{{data.contain.middle}} ‖
          </i-col>
          <i-col span="5">
            大柜：{{data.contain.big}} ‖
          </i-col>
          <i-col span="5">
            在售：{{data.contain.onTheSell}}件
          </i-col>
        </i-row>
        <div>
          <commo :data="a" v-for="(a,index) in data.commo"></commo>
        </div>
      </div>
    </div>
</template>

<script>
  import commo  from "./commo"
  export default {
    name: "cab",
    components:{
      commo
    },
    props:[
      "data"
    ],
    data:function() {
      return {

      }
    },
    computed(){
      console.log(data)
    },
  };
</script>

<style scoped>
  .cab{
    width: 95%;
    margin: 10px auto;
    border-radius: 15px;
    border:1px solid #f2f2f2;

  }
  .content{
    padding: 10px 20px;

  }
</style>
