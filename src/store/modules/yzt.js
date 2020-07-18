import {
  YZT_NEW_SHP_LAYER,
  YZT_NEW_LAYERS,
  YZT_OPENED_TOPICS,
  YZT_FAVORITE_TOPICS,
  YZT_OPACITY_TOPICS,
  YZT_FILTER_TOPICS,
  YZT_MAP_EXTENT,
  YZT_MAP_OBJECT,
  YZT_MAPPING_SERVICE
} from "../types";
import Vue from "vue";

export default {
  state: {
    openedTopics: [],
    openedTopicGuids: [],
    favoriteTopics: [],
    topicOpacityHash: {},
    topicFilterHash: {},
    mapExtent: {},
    mapObj: null,
    newLayers: [],
    newShpLayer: {},
    mappingService: null
  },
  getters: {
    openedTopics: state => {
      return state.openedTopics;
    },
    openedTopicGuids: state => {
      return state.openedTopicGuids;
    },
    favoriteTopics: state => {
      return state.favoriteTopics;
    },
    topicOpacityHash: state => {
      return state.topicOpacityHash;
    },
    topicFilterHash: state => {
      return state.topicFilterHash;
    },
    mapExtent: state => {
      return state.mapExtent;
    },
    newLayers: state => {
      return state.newLayers;
    },
    newShpLayer: state => {
      return state.newShpLayer;
    },
    mapObj: state => {
      return state.mapObj;
    },
    mappingService: state => {
      return state.mappingService;
    }
  },
  mutations: {
    [YZT_OPENED_TOPICS](state, data) {
      state.openedTopics = data;
      state.openedTopicGuids = data.map(item => {
        return item.guid;
      });
    },
    [YZT_NEW_LAYERS](state, data) {
      state.newLayers = data;
    },
    [YZT_NEW_SHP_LAYER](state, data) {
      state.newShpLayer = data;
    },
    [YZT_FAVORITE_TOPICS](state, data) {
      state.favoriteTopics = data;
    },
    [YZT_OPACITY_TOPICS](state, { topicGuid, opacity }) {
      if (topicGuid === undefined) {
        Object.keys(state.topicOpacityHash).forEach(topicGuid => {
          state.topicOpacityHash[topicGuid] = 100;
        });
      } else {
        Vue.set(state.topicOpacityHash, topicGuid, opacity);
      }
    },
    [YZT_FILTER_TOPICS](state, { topicGuid, filter }) {
      if (topicGuid === undefined) {
        state.topicFilterHash = {};
        Object.keys(state.topicFilterHash).forEach(topicGuid => {
          state.topicFilterHash[topicGuid] = "1=1";
        });
      } else {
        Vue.set(state.topicFilterHash, topicGuid, filter);
      }
    },
    [YZT_MAP_EXTENT](state, data) {
      state.mapExtent = data;
    },
    [YZT_MAP_OBJECT](state, data) {
      state.mapObj = data;
    },
    [YZT_MAPPING_SERVICE](state, data) {
      state.mappingService = data;
    }
  },
  actions: {}
};
