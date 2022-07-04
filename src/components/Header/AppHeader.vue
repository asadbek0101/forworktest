<template>
  <header>
       <app-container bg-color="transparent">
         <nav>
           <h1>Test</h1>
           <div class="link-group">
             <router-link to="/test"><font-awesome-icon icon="fa-solid fa-list-ul" />Test</router-link>
             <router-link to="/table"><font-awesome-icon icon="fa-solid fa-table" />Table</router-link>
             <router-link to="/add"> <font-awesome-icon icon="fa-solid fa-user-plus" /> Add user</router-link>
             <button @click="logoutFunction" class="exit"><font-awesome-icon icon="fa-solid fa-right-from-bracket" />Logout</button>
           </div>
         </nav>
       </app-container>
  </header>
</template>

<script>
import AppContainer from "@/components/Container/AppContainer";
import router from "@/router";
import {mapActions} from "vuex";
export default {
  name: "AppHeader",
  components: {AppContainer},
  methods:{
    ...mapActions(["logout"]),
    logoutFunction(){
      this.logout(this.profile._id)
      console.log("Profile id"+this.profile._id)
      localStorage.removeItem("token")
      router.push('/')
    }
  },
  computed:{
    profile(){
      return this.$store.state.profile
    }
  },

}
</script>

<style scoped lang="scss">
      header{
        background-color: #F7D716;
        box-shadow: 0 0 2px 2px #d3cfcf;
        nav{
            display: flex;
             justify-content: space-between;
            align-items: center;
          padding: 10px 0;
          h1{
            cursor: default;
          }

          .link-group{
            a, button{
              text-decoration: none;
              font-size: 16px;
              padding: 4px 16px;
              margin: 0 4px;
              border-radius: 4px;
              color: black;
              border: 2px solid transparent;
              cursor: pointer;
              svg{
                margin-right: 6px;
              }
            }
            .exit{
              background-color: white;
              box-shadow: 0 0 2px 1px #a19292;
            }
            a.router-link-active{
              border: 2px solid #5d5353;
            }
          }
        }
      }
</style>