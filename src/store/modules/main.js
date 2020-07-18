export default {
  state: {
    props: {},
    config:{},
    routeData: {},
    userInfo: {},
    addRoutes: [],
    userRegionCode: ""
  },
  mutations: {
    props(state, data) {
      state.props = data;
      state.config=data.config;
    },
    userInfo(state, data) {
      state.userInfo = data;
    },
    userRegionCode(state, data) {
      state.userRegionCode = data;
    },
    routeData(state, data) {
      state.routeData = data;
    },
    addRoutes(state, data) {
      state.addRoutes = data;
    },
    ["YZT_OPENED_TOPICS"](state, data) {
      state.openedTopics = data;
      state.openedTopicGuids = data.map(item => {
        return item.guid;
      });
    }
  },
  getters: {
    props: state => state.props,
    config: state => state.config,
    userInfo: state => state.userInfo,
    routeData: state => state.routeData,
    addRoutes: state => state.addRoutes,
    userRegionCode: state => state.userRegionCode
  },
  actions: {},
  modules: {}
};
