<template>
      <div class="d-flex">
        <div class="box-logo">
            <AppLogo/>
        </div>
        <div id="login">
          <div class="box-login">
            <AppTitle title="Account orqali kirish"/>
            <app-input label="Email" v-model="email" :value="email" placeholder="email" type="email"/>
            <app-input label="Password" v-model="password" :value="password" placeholder="password" type="password"/>
            <div class="for-register">
              <p>Agar siz hali ro'yxatda o'tmagan bo'lsangiz ushbu <router-link to="/register">havola</router-link> orqali ro'yxatdan o'tishingiz mumkin</p>
            </div>
            <app-button @click="sendFunction" title="Yuborish"/>
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
  name: "LoginView",
  components: {AppLogo, AppTitle, AppInput, AppButton},
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
      ...mapActions(['login']),
    sendFunction(){
        this.login({
          username:this.email,
          password:this.password
        })
    }
  }
}
</script>

<style scoped lang="scss">
.d-flex{
  display: flex;
  justify-content: center;
  align-items: center;
  .box-logo{
    width: 50%;
  }
  #login{
    width: 50%;
    .box-login{
      width: 60%;
      margin: 0 auto;
      .for-register{
        text-align: center;
        margin: 10px 0;
        p{
          font-size: 14px;
        }
      }
    }
  }
}

</style>