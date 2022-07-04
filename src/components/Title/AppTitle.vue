<template>
<h1>{{title}}</h1>
</template>

<script>
export default {
  name: "AppTitle",
  props:{
    title:String
  }
}
</script>

<style scoped lang="scss">
    h1{
      text-align: center;
    }
</style>