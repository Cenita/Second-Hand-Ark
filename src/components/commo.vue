<template>
    <div class="commo">
      <i-row>
        <i-col span="6" i-class="col-class">
          <van-image
            width="60"
            height="60"
            fill="contain"
            :src="data.imageUrl"
          />
        </i-col>
        <i-col span="14" i-class="col-class">
          <i-row>
            <i-col span="24">
              <span class="title">{{data.title}}</span>
            </i-col>
          </i-row>
          <i-row>
            <i-col span="24">
              <span class="tips" style="color: gainsboro">{{data.content}}</span>
            </i-col>
          </i-row>
          <i-row>
            <i-col span="23" i-class="col-class">
              <div style="padding-top: 5px;color:red;">
                <span style="font-size: 10px!important;">¥ </span>
                <span style="font-size: 15px;">{{data.money}}</span>
              </div>
            </i-col>
          </i-row>
        </i-col>
        <i-col span="4" i-class="col-class">
          <div style="font-size: 12px;color: grey;text-align: right">
            {{data.kou}}
          </div>
        </i-col>
      </i-row>
    </div>
</template>

<script>
  export default {
    name: "commo",
    props:[
      "data"
    ]
  };
</script>

<style scoped>
.commo{
  font-size: 12px;
  margin: 15px 0px 0px 0px;
}
</style>
