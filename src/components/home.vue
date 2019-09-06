<template>
  <header class="head">
    <div class="head_img">
      <img src="../assets/imgs/home-bg2.png" alt class="imgs">
    </div>
    <section class="header main">
      <!-- <p class="header_p">蚂蚁速用</p> -->
    </section>
    <section class="main">
      <section class="banner">
        <h1 class="banner_p">用户注册</h1>
        <div class="banner_input">
          <div class="input-group int">
            <span class="input-group-addon" id="basic-addon1">
              <span class="iphone"></span>
            </span>
            <input type="number" class="form-control" placeholder="请输入手机号" v-model="user_phone">
          </div>
          <!-- <div class="input-group int">
            <span class="input-group-addon" id="basic-addon1">
              <span class="my"></span>
            </span>
            <input  class="form-control" placeholder="请输入姓名" v-model="user_name">
          </div> -->
          <!-- <div class="input-group int">
            <div class="ed">借款额度：</div>
            <select class="select" v-model="qu_quota" >
             
               <option v-for="(item,index) in moneylist"  :key='index'>{{item.qu_quota}}</option>
            </select>
          </div> -->
          <div class="input-group int">
            <span class="input-group-addon" id="basic-addon2">
              <span class="suo"></span>
            </span>
            <input type="number" class="form-control dx" placeholder="请输入短信验证码" v-model="code_yzm">
            <!-- <span class="input-group-addon yzm" id="basic-addon3">获取验证码</span> -->
            <yd-sendcode
              slot="right"
              v-model="start1"
              type="warning"
              bgcolor="#5B8EFF"
              class="input-group-addon yzm"
              @click.native="yzm"
            ></yd-sendcode>
          </div>
        </div>
        <div class="con">
          <p class="con_p">
             <yd-checkbox v-model="checkbox0" val="点击下方按钮代表您已阅读并同意"> </yd-checkbox>
          
            <a @click="open">《用户服务协议》</a>
            <yd-popup v-model="show1" position="center" width="85%" class="tan_xieyi">
              <div class="tan_box tanxie">
                <div class="xieyi" v-html="this.xieyi"></div>

                <yd-button
                  size="large"
                  type="hollow"
                  class="xie_btn"
                  @click.native="show1 = false"
                >我已阅读此协议</yd-button>
              </div>
            </yd-popup>
          </p>
        </div>
        <!-- <button type="button" class="btn btn-default"   @click.native="Reg">立即申请</button> -->
        <yd-button
          size="large"
          v-if="btnshow"
          type="primary"
          class="btn btn-default"
          @click.native="Reg"
        >立即申请</yd-button>
        <yd-button size="large" type="disabled" class="btn btn-default" v-if="!btnshow" style="8888">已申请</yd-button>
        <yd-popup v-model="show" position="center" width="85%">
          <div class="tan_box">
            <div class="box">
              <img src="../assets/imgs/quan.png" alt class="box_img">
              <div class="box_r">
                <p class="box_p">正在排队，请静候佳音…</p>
                <p class="box_p1">我们将在48小时内处理完毕。并短信通知您。</p>
              </div>
            </div>
          </div>
        </yd-popup>
      </section>
      <div class="list_top">
        <img src="../assets//imgs/list.png" alt class="top_img">
        <p class="yop_p">用户评论</p>
      </div>
      <section class="list">
       
            <div class="list_conn">
              <section class="list_con " v-for="(item,index) in list " :key="index">
                <section class="list_con_t">
                  <img :src="item.user_head" alt class="list_img">
                  <section class="con_r">
                    <p class="list_p">{{item.user_phone}}</p>
                    <p class="list_p">{{item.addr_time}}</p>
                  </section>
                </section>
                <section class="list_b">
                  <p class="list_b_p">{{item.comment}}</p>
                </section>
              </section>
            </div>
        
      </section>
    </section>
  </header>
</template>

<script>
import "./home.css";
import * as apis from "@/api/apis.js";
import Qs from "qs";
import { Reg } from "../api/apis";
import Swiper from "swiper";
export default {
  name: "Home",
  data() {
    return {
      checkbox0:true,
      btnshow: true,
      show: false,
      show1: false,
      start1: false,
      code_yzm: "",
      user_phone: "",
      list: [],
      msg: "",
      code: "",
      xieyi:'',
      user_name:'',
      moneylist:[],
      qu_quota:''
    
    };
  },
  methods: {
   
    async Reg() {
      if (this.user_phone.length < 11) {
        this.$dialog.toast({
          mes: "请输入正确手机号",
          timeout: 1500
        });
        return;
        
      } 
      
       if (this.code_yzm==='') {
        this.$dialog.toast({
          mes: "请输入验证码",
          timeout: 1500
        });
        return;
         }
          if (this.checkbox0===false) {
        this.$dialog.toast({
          mes: "请勾选用户协议",
          timeout: 1500
        });
        
     }else {
        await apis
          .Reg(
            Qs.stringify({ user_phone: this.user_phone, code: this.code_yzm ,user_name:this.user_name,user_quota:this.qu_quota})
          )
          .then(res => {
            this.msg = res.data.msg;
            this.code=res.data.code;
          });
        if (this.code === 1) {
          this.$dialog.toast({
            mes: this.msg
          });
           return;
        }
       
        else{
        //   this.show = true;
        // this.btnshow = false;
            this.$router.push("/ewm");
        }
        
      }
    },
    async yzm() {
      await apis
        .yzm(Qs.stringify({ user_phone: this.user_phone }))
        .then(res => {
          console.log(res.code);
          this.msg = res.data.msg;
          this.code = res.data.code;
        });
      if (this.code === 0) {
    
          this.start1 = true;
          this.$dialog.loading.close();
          this.$dialog.toast({
            mes: this.msg
          });
          return;
          // this.$dialog.toast({
          //   mes: "已发送",
          //   icon: "success",
          //   timeout: 1500
          // });
       
      } else {
        this.$dialog.loading.close();
        this.$dialog.toast({
          mes: this.msg
        });
        return;
      }
    },
    open() {
      this.show1 = true;
    }
  },
  created() {
    apis.Getlist().then(res => {
      console.log(res);
      this.list = res.data.data;

      // console.log(this.list);
    });
    apis.xiey().then(res => {
      this.xieyi=res.data.data
      //  console.log(res.data.data);
    });
    apis.money().then(res=>{
      this.moneylist=res.data.data
      console.log(res.data.data);
      
    })
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      direction: "vertical"
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
