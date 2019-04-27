import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import mutations from "./mutations";
import actions from "./action";
import getters from "./getter";
//引入vuex 数据持久化插件
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()]
})
