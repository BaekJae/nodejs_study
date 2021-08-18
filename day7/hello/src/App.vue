<template>
  <div>
    <h1>
      {{msg}}
    </h1>
    <button @click="changeMsg('hello')"> change1 </button>
    <button @click="changeMsg('world')"> change2 </button>
    <button @click="changeMsg('vue')"> change3 </button>
  </div>

  <div>
    <h2>Reactive Counter</h2>
    <p>{{count}}</p>
    <button @click="AddCount()"> count + </button>
    <button @click="DecreaseCount()"> count - </button>
    <button @click="ResetCount()"> Reset </button>
  </div>

  <div>
    <h2>non-reactive Counter</h2>
    <h5>{{myCounter}}</h5>
    <button @click="ResetCount2()"> Reset</button>
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {},
  data() { //vue에 변수 선언
    return {
      msg: 'Hello kkkkkkkkdkdkdkdkdkd',
      count : 0
    }
  },
  methods : { //내부에서 사용할 method정의
    changeMsg(msg) {
      this.msg = msg
    },
    AddCount(){
      this.count ++;
    },
    DecreaseCount(){
      this.count --;
    },
    ResetCount(){
      this.count=0;
    },
    ResetCount2(){
      this.myCounter=0;//내부적으로 Reactive객체로 변환되었으나, 나중에 다른 변화가 있을시에만 자신도 동작함
    }
  },
  created() { //Hooking(특정 위치를 control)->화면에 그려지기 직전 상태
    this.count = 100
    this.myCounter = 200 //non-reactive
  },
  onUpdated() {

  },
  beforeCreate() {

  }
}
//scoped -> css의 지역적 사용을 가능하게 하는 문법
</script>

<style scoped>
h1{
  color: greenyellow;
}
h5 {

}
div{
  border: solid black 1px;
  margin-top : 2px;
  padding: 30px;
}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
