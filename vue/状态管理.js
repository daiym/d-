/*
vuex:

state（存储vuex数据状态）
Mutation（只能操作同步数据，通过commit触发，第一个参数是type第二个是所需的传入的数据)
Actions（支持异步操作数据，修改数据必须提交mutation，通过dispatch触发）
Getter（从state数据中派发出一些状态，重新过滤并计算数据，通过store.getters.xx获取）
Module（store分割成多个模块，避免store数据庞大臃肿，每个模块都是有独立的state，mutation，action ，getter）

state: 
state = { user: xx }
页面使用state：store.state.user

Mutation: //state是定死的，data传入的数据
mutations = {
  SET_USER = (state, data) => {
    state.user = data;
  }
}
页面使用mutations：store.commit('SET_USER', {xxxx})

Actions：//commit调用Mutation方法，data是传入的数据
actions = {
  getUserData = ({ commit }, data) => {
    API(url, data).then(res => {
      commit("SET_USER", res.data)
    })
  }
}
页面使用actions：store.dispatch('getUserData', data)

Getter：
getters = {
  userData: state => {
    return state.user || return state.user.filter(xxxx)
  }
}
页面使用getters：store.getters.userData

Module：
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}
modules: {
  moduleA,
  xxxx
}

*/