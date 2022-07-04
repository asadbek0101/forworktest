<template>
<div>
  <select v-if="users.length>0" @change="sorTable($event.target.value)">
    <option value="name">Name</option>
    <option value="email">Email</option>
    <option value="phone">Phone</option>
    <option value="birthday">Birthday</option>
    <option value="penfil">PENFIL</option>
  </select>
  <app-tabel v-if="users.length>0" :data="users" @edit="handleEdit($event)" @delete="handleDelete($event)"/>
  <div v-else class="loading">
   <div class="circle">
     <h1>LOADING....</h1>
   </div>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import AppTabel from "@/components/Table/AppTable";
import router from "@/router";
export default {
  name: "TableView",
  components: {AppTabel},
  methods:{
    ...mapActions(['deleteUser']),
    ...mapActions(['getTable']),
    ...mapActions(['sortTableServer']),
    handleEdit(edit){
      router.push({name:'Update-User', params:{id:edit}})
    },
    handleDelete(delet){
      this.deleteUser(delet)
    },
    sorTable(element){
      console.log("Sort "+element)
      this.sortTableServer({
        sort:element
      })
    }
  },
  computed:{
    users(){
      return this.$store.state.users
    }
  },
  created() {
    this.$store.dispatch('getTable')
  }
}
</script>

<style scoped lang="scss">
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    .circle{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 240px;
      height: 240px;
      border-radius: 50%;
      animation: ring 3s linear infinite;
    }
    @keyframes ring {
        0%{
          transform: rotate(0deg);
          box-shadow: 1px 5px 2px black;

        }
      50%{
        transform: rotate(180deg);
        box-shadow: 1px 5px 2px black;

      }
      100%{
        transform: rotate(360deg);
        box-shadow: 1px 5px 2px black;
      }


    }
  }
  select{
    margin-top: 20px;
    font-size: 18px;
    border-radius: 4px;
    padding: 4px 10px;
  }
</style>