<template>
  <div>
    <h1 :class="{red: isOn,bg_gray:isOn2}">Blink</h1> <!--버튼 깜빡깜빡-->
    <button @click="toggle">Toggle for blink</button>
    <button @click="toggle2">Toggle for bg</button>
  </div>
  <div><!--코인값이 10보다 작으면 붉은색-->
    <h1 :class="{red: coinValue< 10,
    yellow: coinValue < 50 & coinValue >=10
    ,green: coinValue >= 50}">{{coinValue}}</h1>
    <input v-model="coinValue">
  </div>

  <div><!--vue 문법-->
    <p v-if="coinValue >= 50">충분합니다.</p>
    <p v-else-if="coinValue < 50 &coinValue>=10">조금 부족합니다.</p>
    <p v-else>많이 부족합니다.</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return{
      coinValue : 0,
      isOn : false,
      isOn2 : false
    }
  },methods : {
    toggle(){
      this.isOn = !this.isOn
    },
    toggle2(){
      this.isOn2 = !this.isOn2
    }
  }
}
</script>

<style scoped>
div {
  border: solid 1px black;
}
.red {
  color: red;
}
.green {
  color: green;
}
.yellow {
  color: yellow;
}
h1{
  text-align: center;
}
.bg_gray{
  background-color: gray;
}
</style>
