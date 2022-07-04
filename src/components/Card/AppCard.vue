<template>
  <router-link :to="id">
    <div  id="card">
      <img v-if="img" :src="img" alt="">
      <p class="title">{{title}}</p>
      <p class="discreption">{{discreption}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AppCard",
  props:{
    title:String,
    discreption:String,
    img:{
      type:String,
      default:"https://www.online-auksion.uz/uploads/lots/lot_336//images//TYrvgidbOyTVYDTZPWTbgBLRoXUAUdee2ORscpOX.jpg"
    },
    id:String
  }
}
</script>

<style scoped lang="scss">
a{
  text-decoration: none;
  color: black;
}
  #card{
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 0 2px 2px #9a8d8d;
    padding: 10px;
    height: 100%;
    img{
      width: 100%;
    }
    .title{
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin: 4px 0;
    }
    .discreption{
      font-size: 14px;
    }
  }
</style>