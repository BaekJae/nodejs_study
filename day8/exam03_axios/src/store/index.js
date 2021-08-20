import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return{
      todos: []
    }
  },
  mutations: {
    updateTodos(state,playload){
      //console.log(playload)
      state.todos = playload
    }
  },
  actions: {
    updateTodos(context){
      //axios
      //console.log(axios)
      console.log(context);
      //console.log(this)
      (async ()=>{
        try{
          let url= "https://jsonplaceholder.typicode.com/todos";
          let {status,data} = await axios.get(url);
          console.log(status);
          //console.log(data);
          context.commit('updateTodos',data)// data넘기기, mutation에서 변화시키도록 유도
          //state.todos = data;
        }
        catch(e){
          console.log(e)
        }
      })();
    }
  },
  modules: {
  }
})
