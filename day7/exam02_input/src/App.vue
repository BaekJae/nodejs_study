<template>
  <div>
    <h1>none v-model</h1>
    <h5>{{textVal}}</h5>
    <!--change는 입력을 끝내고 포커싱을 이동했을 때 반영-->
    <input type="text" :value="textVal" @change="onChange"><br> <!--속성명 앞에 ":"를 붙이면 해당 변수의 값을 가져온다 -->
    <input type="text" :value="textVal" @input="onInput"><br> <!--입력이 바뀌면 즉시 반영, 계속하여 함수 실행-->
    <button @click="onOK()">ok</button>
  </div>
  <div>
    <h1>with v-model</h1>
    <h5>{{textVal_vm}}</h5>
    <input type="text" v-model="textVal_vm"> <!-- 2.0 최신기능 -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data(){
    return{
      textVal: 'hello',
      textVal_vm: 'hi vue'
    }
  },
  methods: {
    onOK() {
      //console.log(this.textVal)
      this.textVal = this.tempText //ok를 누를때 텍스트가 바뀐다.
    },
    onChange(evt){
      //console.log(evt.target.value)
      this.tempText = evt.target.value
    },
    onInput(evt){
      //console.log(evt.target.value)
      this.tempText = evt.target.value
    }
  },
  created(){
    this.tempText = '' //바뀐 내용을 저장할 임시 값
  }
}
</script>

<style scoped>
div {
  border:solid black 1px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
