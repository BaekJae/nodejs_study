<template>
  <div>
    <h1>Write Memo</h1>
    <h3>title</h3>
    <input type="text" v-model="titleVal">
    <h3>text</h3>
    <input type="text" v-model="textVal">
    <hr>
    <button @click="onWriteMemo">write</button>
  </div>
</template>

<script>
export default {
  name: "MemoWrite",
  data(){
    return{
     titleVal: '',
      textVal: ''
    };
  },
  methods:{
    onWriteMemo(){
      this.$store.dispatch('writeMemo',{
        title: this.titleVal,
        text: this.textVal
      })
      console.log(this.titleVal, this.textVal);
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>