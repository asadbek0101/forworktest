<template>
   <div class="question">
     <p>{{question}}</p>
   </div>
</template>

<script>
export default {
  name: "ForQuestionTitle",
  props:{
    question:String
  }
}
</script>

<style scoped lang="scss">
  .question{
    p{
      font-size: 18px;
      font-weight: bold;
      font-family: "Roboto", sans-serif;

    }
  }
</style>