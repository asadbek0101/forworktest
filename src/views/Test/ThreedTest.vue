<template>
  <div id="first-test-page">

    <div v-if="show" class="test">
      <div class="question">
        <ForQuestionTitle :question="data[count].question"/>
      </div>
        <div class="answer">
              <textarea v-model="data[count].answer" @change="addAnswer" placeholder="Javobni shu yerga yozinishingiz mumkin"/>
        </div>
      <ul>
        <li @click="increment"><font-awesome-icon icon="fa-solid fa-backward" /></li>
        <MyListActive v-for="(item, index) in data.length" :key="index" :index="index" @newactive="indexActive = $event, count=$event" :active="index === indexActive" >{{item}}</MyListActive>
        <li @click="decrement"> <font-awesome-icon icon="fa-solid fa-forward" /></li>
      </ul>
      <div class="w-40">
        <AppButton @click="sendFunction" title="Yuborish"/>
      </div>
    </div>

    <div v-else class="result">
      <div v-for="(item, index) in resultArray" :key="index" class="result-item">
        <div class="question-title">
          <ForQuestionTitle :question="item.question" />
        </div>
        <p>
           {{item.answer}}
        </p>
      </div>
      <div class="d-flex">
        <button @click="show = true; result = 0">OK</button>
      </div>
    </div>

  </div>
</template>

<script>
import ForQuestionTitle from "@/components/ForQuestionTitle";
import MyListActive from "@/components/Active/MyListActive";
import AppButton from "@/components/Button/AppButton";
export default {
  name: "ThreedTest",
  components: {AppButton, MyListActive, ForQuestionTitle},
  data(){
    return{
      indexActive:0,
      count:0,
      show:true,
      resultArray:[],
      result:0,
    }
  },
  methods:{
    increment(){
      if(this.indexActive > 0){
        this.count --
        this.indexActive--
      }
    },
    decrement(){
      if(this.indexActive <9){
        this.count++
        this.indexActive++
      }
    },
    addAnswer(){
      this.resultArray.push({question:this.data[this.count].question, answer:this.data[this.count].answer})

    },
    sendFunction(){
      this.show = false
    },
  },
  computed:{
    data(){
      return this.$store.state.thirdTestsGroup
    }
  }
}
</script>

<style scoped lang="scss">
#first-test-page{
  width: 40%;
  margin: 0 auto;
  margin-top: 40px;
  .answer{
    margin: 10px 0;
    textarea{
      box-sizing: border-box;
      width: 100%;
      height: 140px;
      resize: none;
      font-size: 16px;
      outline: none;
      border-radius: 4px;
      padding: 10px;
    }
  }
  ul{
    display: flex;
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
  }
  .w-40{
    margin: 20px auto;
  }
  .result{
    p{
      margin: 4px 0;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg{
        color: white;
      }
    }
  }
  .d-flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
      border: none;
      background-color: #F7D716;
      color: black;
      padding: 6px 14px;
      border-radius: 4px;
      cursor: pointer;
      &:hover{
        transform: scale(.99);
      }
    }
  }
  .result-item{
    background-color: #d3cfcf;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    overflow: hidden;
    margin: 6px 0;
    .question-title{
      background-color: #F7D716;
      padding: 10px;
    }
    p{
      padding: 0 10px;
    }
  }
}
</style>