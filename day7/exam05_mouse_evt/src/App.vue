<template> <!--이벤트 객체 받으려면 함수 명만 작성, 함수 형태 전체로 작성하면 에러-->
  <h1>{{score}}</h1>
  <p>{{mousePos.x}},{{mousePos.y}}</p>
  <!--이벤트 값을 넘겨주고 함수 형을 유지하고 싶으면 $event-->
  <div class="blue-box" @mousemove="onMouseMove($event,1)"></div>
  <div class="red-box" @mousemove="onMouseMove($event,-1)"></div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data(){
    return{
      score:0, //마우스 움직일때마다 증가, 위치표시
      mousePos: {x:0,y:0}//마우스 위치
    }
  },
  methods: {
    onMouseMove(evt,val){
      this.mousePos.x = evt.pageX
      this.mousePos.y = evt.pageY
      this.score += val
    }
  }
}
</script>

<style scoped>
.blue-box{
  width:200px;
  height:200px;
  background-color: blue;
}
.red-box{
  width:200px;
  height:200px;
  background-color: red;
}
</style>
