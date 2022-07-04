<template>
  <div class="logo">
    <img src="../../assets/img/logo_komp.png" alt="">
  </div>
</template>

<script>
export default {
  name: "AppLogo"
}
</script>

<style scoped lang="scss">
    .logo{
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #F7D716;
      img{
        width: 100%;
        margin: 0 auto;
      }
    }
</style>