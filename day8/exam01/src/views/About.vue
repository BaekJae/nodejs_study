<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goHome">홈으로...</button>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    goHome(){
      this.$router.push({ //라우터 객체 접근
        "path" : "/" //홈 화면으로 이동하기
      })
    }
  }
}
</script>
<style scoped>

h1{
  color: red;
}

</style>
