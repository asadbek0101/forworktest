<template>
    <div id="input">
      <label :for="label">{{label}}</label>
      <input :id="label" :type="type" :value="value" v-bind="$attrs" @input="(e)=>$emit('update:modelValue', e.target.value)" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
  name: "AppInput",
  props:{
    label:String,
    type:String,
    placeholder:String,
    value:String
  },
  methods:{
    sendValue(event){
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
    #input{
      width: 100%;
      label{
        font-size: 16px;
        padding: 6px 12px;
        display: block;
      }
      input{
        width: 100%;
        box-sizing: border-box;
        padding: 6px 12px;
        font-size: 16px;
        outline: none;
        border-radius: 4px;
      }
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
</style>