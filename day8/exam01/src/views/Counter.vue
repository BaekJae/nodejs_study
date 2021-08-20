<template>
  <div>
    <h1> The Counter </h1>
    <h2>{{counter}}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  components: {},
  data(){
    return{
      counter: 0
    }
  },
  methods:{
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
    reset(){
      this.counter = 0;
    }
  }
}
</script>

<style scoped>

</style>