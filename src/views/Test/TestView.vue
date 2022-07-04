<template>
  <div id="test-home">
    <div class="row">
        <app-card  v-for="(item, index) in array" :key="index" :title="item.title" :discreption="item.discreption" :id="item.to"/>
    </div>
  </div>
</template>

<script>
import AppCard from "@/components/Card/AppCard";
export default {
  name: "TestView",
  components: {AppCard},
  data(){
    return{
      array:[
        {
          to:"/first-test",
          title:"Birinchi tur test",
          discreption:"Birinchi tur test bu testda faqat 1 ta javob tanlanadi",
        },{
          to:"/second-test",
          title:"Ikkinchi tur test",
          discreption:"Ikkinchi tur test bu testda 2 va undan ortiq javob tanlanadi"
        },
        {
          to:"threed-test",
          title:"Uchinchi tur test",
          discreption:"Uchinchi tur test bu testda savollarga yozma javob beriladi"
        }
      ]
    }
  },
  computed:{
    lang(){
      return this.$store.state.lang
    },
  }
}
</script>

<style scoped lang="scss">
    #test-home{
      padding: 40px 0;
      .row{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }
    }
</style>