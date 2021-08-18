<template>
  <div>
    <h1>v-model</h1>
    <h5>{{textVal}}</h5>
    <input type="text" :value="textVal"><br><!--속성명 앞에 ":"를 붙이면 해당 변수의 값을 가져온다 -->
    <input type="text" value="textVal"><br>
    <button @click="onOK()">ok</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  data(){
    return{
      textVal: 'hello'
    }
  },
  methods: {
    onOK() {
      console.log(this.textVal)
    }
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
