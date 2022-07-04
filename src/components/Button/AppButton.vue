<template>
    <div id="button">
      <button @click="$emit('onClick')">
        {{title}}
      </button>
    </div>
</template>

<script>
export default {
  name: "AppButton",
  props:{
    title:String
  }
}
</script>

<style scoped lang="scss">
#button{
  button{
    width: 100%;
    background-color: #F7D716;
    color: black;
    font-size: 16px;
    padding: 6px 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 0 2px 1px #938686;
    margin: 4px 0;
    box-sizing: border-box;
    &:active{
      transform: scale(.99);
    }
  }
}

</style>