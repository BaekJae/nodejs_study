import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    memoList: [],
  },
  mutations: {
    updateMemoList(state,playload){
      state.memoList = playload
    }
  },
  actions: {
    async writeMemo(context,playload){
      console.log(playload);
      let {status,data} = await axios({
        method: 'POST',
        url: 'http://localhost:8000/api/v1/memo/insert',
        data: JSON.stringify(playload),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log(status);
      console.log(data);
    },
    async updateMemoList(context) {
      try{
        let {status,data} = await axios.get('http://localhost:8000/api/v1/memo/find/skip/0/limit/100');
        console.log(status);
        console.log(data);

        context.commit('updateMemoList',data.d);
      }
      catch(e) {
        console.log(e);
      }
    },
    async deleteMemo(context,playload){
      try{
        let {status,data} = await axios(`http://localhost:8000/delete/id/${playload}`)
        console.log(status);
        console.log(data);
        context.dispatch('updateMemoList');
      }
      catch(e){
        console.log(e)
      }
    }
  },
  modules: {
  }
})
