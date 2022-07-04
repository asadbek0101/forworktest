<template>
  <div id="addpage">
    <h1>Update User</h1>
    <div class="form-group">
      <div class="d-flex">
        <app-input label="Name" v-model="user.name" :value="user.name" placeholder="Name" type="text"/>
        <app-input label="Email" v-model="user.email" :value="user.email" placeholder="Email" type="emial"/>
      </div>
      <div class="d-flex">
        <app-input label="Phone" v-model="user.phone" :value="user.phone" placeholder="Phone" type="number" />
        <app-input label="Birthday" v-model="user.birthday" :value="user.birthday" placeholder="Birthday" type="number" />
      </div>
      <app-input label="PINFEL" v-model="user.penfil" :value="user.penfil" placeholder="PINFEL" type="text" />
      <div class="for-btn">
             <app-button @onClick="handleClick" title="Save"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "@/components/Input/AppInput";
import AppButton from "@/components/Button/AppButton";
import {mapActions} from "vuex";
import router from "@/router";
export default {
  name: "AddView",
  components: { AppInput, AppButton},
  methods:{
    ...mapActions(['updateUser']),
    handleClick(){
      this.updateUser( {
        id:this.user._id,
        name: this.user.name,
        email:this.user.email,
        phone:this.user.phone,
        penfil:this.user.penfil,
        birthday:this.user.birthday
      })
      router.push('/table')
    }
  },
  computed:{
    index(){
      return this.$store.state.users.findIndex((e)=>e._id == this.$route.params.id)
    },
    user(){
     return this.$store.state.users[this.index]
    },
  },
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