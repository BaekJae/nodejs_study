<template>
  <div>
    <h1>Write Memo</h1>
    <h3>title</h3>
    <input type="text" v-model="titleVal">
    <h3>text</h3>
    <input type="text" v-model="textVal">
    <hr>
    <button @click="onWriteMemo">write</button>

    <h2 v-show="bWaitWindow"> Uploading... </h2> <!--true면 해당 글씨 표시-->
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
  computed: {
    bWaitWindow() {
      return this.$store.bNowWriting
    }
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