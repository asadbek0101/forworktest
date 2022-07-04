<template>
  <div id="addpage">
    <h1>Create User</h1>
 <div class="form-group">
   <div class="d-flex">
     <app-input label="Name" v-model="name" :value="name" placeholder="Name" type="text"/>
     <app-input label="Email" v-model="email" :value="email" placeholder="Email" type="emial"/>
   </div>
   <div class="d-flex">
     <app-input label="Phone" v-model="phone" :value="phone" placeholder="Phone" type="number" />
     <app-input label="Birthday" v-model="birthday" :value="birthday" placeholder="Birthday" type="number" />
   </div>
   <app-input label="PINFEL" v-model="penfil" :value="penfil" placeholder="PINFEL" type="text" />
   <div class="for-btn">
     <AppButton @onClick="handleClick" title="Add"/>
   </div>
 </div>
  </div>
</template>

<script>
import AppInput from "@/components/Input/AppInput";
import {mapActions} from "vuex";
import router from "@/router";
import AppButton from "@/components/Button/AppButton";
export default {
  name: "AddView",
  components: {AppButton, AppInput},
  data(){
    return{
      name:"",
      email:"",
      phone:null,
      password:"",
      penfil:"",
      birthday:null,
    }
  },
  methods:{
    ...mapActions(['createUser']),
    handleClick(){

        this.createUser({
          name: this.name,
          email:this.email,
          phone:this.phone,
          penfil:this.penfil,
          birthday:this.birthday
        })

          this.name = "",
          this.email = "",
          this.phone = null,
          this.password = "",
          this.birthday = null,
          this.penfil = ""
      router.push('/table')
    },
    handleClick2(){
      alert('Salom')
    }
  }
}
</script>

<style scoped lang="scss">
  #addpage{
    width: 80%;
    margin: 0 auto;
    margin-top: 60px;
    border-radius: 4px;
    box-shadow: 0 0 2px 2px #a49494;
    overflow: hidden;
    h1{
      text-align: center;
      margin-bottom: 40px;
      background-color: #F7D716;
      padding: 10px 0;
    }
    .form-group{
      padding: 20px;
    }
  }
  .d-flex{
    display: flex;
    gap: 20px;
  }
  .for-btn{
    width: 40%;
    margin: 0 auto;
    margin-top: 60px;
  }
</style>