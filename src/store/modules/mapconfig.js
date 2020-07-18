import { MAP_INIT_CONFIG, MAP_SERVER_PROXY } from "../types";

export default {
  state: {
    defaultMapConfig: null,
    mapLocateInfo: null,
    baseMapList: [],
    baseUrls: [],
    extent: null,
    geometryServerUrl: "",
    tileInfo: null,
    mapServerProxy: null
  },
  mutations: {
    [MAP_INIT_CONFIG](state, data) {
      if (data.defaultConfig) {
        state.defaultMapConfig = data.defaultConfig;
      }
      if (data.map_locate) {
        state.mapLocateInfo = data.map_locate;
      }
      if (data.baseMapList) {
        state.baseMapList = data.baseMapList;
      }
      if (data.basemap) {
        state.baseUrls = data.basemap;
      }
      if (data.extent) {
        state.extent = data.extent;
      }
      if (data.geometryServerUrl) {
        state.geometryServerUrl = data.geometryServerUrl;
      }
      if (data.tileInfo) {
        state.tileInfo = data.tileInfo;
      }
    },
    [MAP_SERVER_PROXY](state, mapServerProxy) {
      state.mapServerProxy = mapServerProxy;
    }
  },
  actions: {
    setMapConfig({ commit }, { Configdata }) {
      commit(MAP_INIT_CONFIG, Configdata);
    }
  },
  getters: {
    defaultMapConfig: state => state.defaultMapConfig,
    mapLocateInfo: state => state.mapLocateInfo,
    baseMapList: state => state.baseMapList,
    baseLayerUrls: state => state.baseUrls,
    extent: state => state.extent,
    geometryServerUrl: state => state.geometryServerUrl,
    tileInfo: state => state.tileInfo,
    mapServerProxy: state => state.mapServerProxy
  }
};
