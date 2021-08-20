<template>
  <div>
    <h1>The Counter</h1>
    <h5>{{count}}</h5>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  computed : { //메소드와 데이터의 중간형태, store에서 데이터를 가져올 때 사용
    count(){
      return this.$store.state.count
    }
  },
  methods: {//store에 정의된 함수 간접 호출
    increase(){
      this.$store.commit('increase');
      //this.$store.state.count++;
    },
    decrease(){
      this.$store.commit('decrease');
    },
    reset(){
      this.$store.commit('reset',10) //일반적인 value형식 호출
      /*this.$store.commit('reset', {//플레이로드 방식 요청
        value:10
      });*/
    }
  }
}
</script>

<style scoped>

</style>