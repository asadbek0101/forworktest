<template>
  <div class="d-flex">
   <div class="left">
     <AppLogo/>
   </div>
    <div class="register">
    <div class="box">
      <AppTitle title="Ro'yxatdan o'tish"/>
      <app-input label="Name" v-model="nameInput" :value="nameInput" placeholder="Name" type="text"/>
      <app-input label="Email" v-model="email" :value="email" placeholder="Email" type="emial"/>
      <app-input label="Phone" v-model="phone" :value="phone" placeholder="Phone" type="number" />
      <app-input label="Password" v-model="password" :value="password" placeholder="Password" type="password"/>
      <div class="for-register">
        <p>Agar sizda account mavjud bo'lsa ushbu <router-link to="/">havola</router-link> orqali kirishingiz mumkin</p>
      </div>
      <div class="send-btn">
        <AppButton @onClick="sendData" title="Yuborish"/>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
import AppInput from "@/components/Input/AppInput";
import AppButton from "@/components/Button/AppButton";
import AppTitle from "@/components/Title/AppTitle";
import AppLogo from "@/components/Logo/AppLogo";
import {mapActions} from "vuex";
export default {
  name: "RegisterView",
  components:{AppLogo, AppTitle, AppButton, AppInput},
  data(){
    return{
      nameInput:"",
      email:"",
      phone:null,
      password:""
    }
  },
  methods:{
    ...mapActions(['register']),
    sendData(){
     this.register({
       name:this.nameInput,
       email:this.email,
       password:this.password,
       phone:this.phone
     })
    },

  },
  computed:{
    result(){
      return this.$store.state.result
    }
  }
}
</script>

<style scoped lang="scss">
  .d-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    .left{
      width: 50%;
    }
    .register{
      width: 50%;
      .box{
        width: 60%;
        margin: 0 auto;
      }
      .send-btn{
        margin-top: 20px;
      }
    }
    .for-register{
      text-align: center;
      margin: 10px 0;
      p{
        font-size: 14px;
      }
    }
  }

</style>