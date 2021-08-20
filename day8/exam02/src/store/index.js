//전역변수 관리
//비동기 처리 = action
import { createStore } from 'vuex'

export default createStore({
  state(){ //각 vue의 data 같은 역할
    let _count = 10 //로컬스토리지 생성과정
    if(localStorage.getItem('count') !== null){
      _count = parseInt(localStorage.getItem('count'))
    }
    else{
      localStorage.setItem('count', _count) // 초기값등록
    }
    return{
      count: _count
    }
  },
  mutations: {
    increase(state){
      state.count++
      localStorage.setItem('count', state.count)
    },
    decrease(state){
      state.count--
      localStorage.setItem('count', state.count)
    },
    reset(state,val){
      state.count = val
      localStorage.setItem('count', state.count)
    }
    /*reset(state,playload){
      state.count = playload.value
      localStorage.setItem('count', state.count)
    }*/
  },
  actions: {
  },
  modules: {
  }
})
