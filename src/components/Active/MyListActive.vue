<template>
  <li :class="{'active': active,}"  @click="toggleRowActive" >
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "MyListActive",
  props:{
    active:Boolean,
    index:Number,
  },
  methods:{
    toggleRowActive(){
      this.$emit("newactive", this.index)
    }
  }
}
</script>

<style scoped lang="scss">
li{
  width: 34px;
  font-size: 14px;
  list-style-type: none;
  padding:4px 10px;
  border-radius: 4px;
  border:1px solid black;
  cursor:pointer;
  font-family: Roboto, sans-serif;
  text-align: center;
  margin: 0 4px ;
}
.active{
  background-color: #F7D716;
}
</style>