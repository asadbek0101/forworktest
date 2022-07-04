<template>
    <div id="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "AppContainer",
  props:{
    bgColor:String
  }

}
</script>

<style scoped lang="scss">
    #container{
      max-width: 1220px;
      margin: 0 auto;
    }
</style>