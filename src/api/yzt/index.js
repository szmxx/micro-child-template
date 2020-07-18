import store from "@/store";
const {
  GET,
  POST,
  DELETE,
  SPOST,
  TGET,
  TGET_NO,
  JGET,
  YGET,
  FPOST,
  FGET
} = store.getters.props.req;
const { browserDetect } = store.getters.props.utils;
export function getNonSpatialTopics(filePath) {
  return GET(`/rest/gis/v1/topic/non?name=${filePath}`, "获取非空间专题");
}
export function log(logCont) {
  if (process.env.NODE_ENV !== "development") {
    // 开发环境不记录日志
    const { name: userAgent, version: agentVersion } = browserDetect;
    logCont = { userAgent, agentVersion, ...logCont };
    try {
      POST("rest/public/v1/log", "系统日志", logCont);
    } catch (error) {
      console.log(error);
    }
  }
}
export function previewNonSpatialTopic(id) {
  return GET(`/rest/gis/v1/file/preview/id?fileId=${id}`, "预览非空间专题");
}

export function getMyTopicFavorites(userCode, pageNo, pageSize) {
  return GET(
    `/rest/gis/v1/topic/favorites/${userCode}/${pageNo}/${pageSize}`,
    "分页获取我的专题收藏夹"
  );
}
export function getAllProvinces(lev) {
  return GET(`rest/pas/private/region/v1/tree/${lev}`, "获取所有省份区划数据");
}

export function getAllCitysByProvince() {
  return GET(
    `rest/pas/private/region/v1/first`,
    "按照省份获取所有市域区划数据"
  );
}
export function saveMyTopicFavorites(parmas) {
  return POST(`rest/gis/v1/topic/favorites`, `添加我的专题收藏夹`, parmas);
}
export function postMapQuery(url, parmas, header) {
  return FPOST(url, `post请求地图服务`, parmas, header, false);
}

export function cadToPngBySoe(url, parmas, header) {
  return FPOST(url, `soe cad转png`, parmas, header, false);
}

export function bufferAnalysisBySoe(url, parmas, header) {
  return FPOST(url, `soe cad转png`, parmas, header, false);
}
export function deleteMyTopicFavorites(parmas) {
  return DELETE(`rest/gis/v1/topic/favorites`, `删除我的专题收藏夹`, parmas);
}

export function exportExcel(data, fileName, topicName) {
  return POST(
    `/rest/gis/v1/multi/export?fileName=${fileName}&sheetName=${topicName}`,
    "导出多条件查询结果Excel",
    data
  );
}

export function exportPdf(data) {
  return POST(`/rest/gis/v1/isearch/export`, "导出多条件查询结果PDF", data);
}

export function exportShp(data) {
  return SPOST(`/exportExtent`, "导出多条件查询结果Shp", data);
}

export function bufferAnalysis(data) {
  return POST(`/rest/gis/model/statistics/custom`, "自定义缓冲区分析", data);
}

export function runModule(data) {
  return POST(`/rest/gis/model/statistics/custom`, "调用模型", data);
}
export function registerDataSource(data) {
  return POST(`/rest/gis/model/register/datasource`, "注册数据源", data);
}
export function uploadCADFile(data) {
  return SPOST("files/upload", "CAD文件上传", data);
}
export function postMapPrint(data) {
  return SPOST(`/printMap`, "地图打印", data);
}

export function cadToGeo(data) {
  return SPOST(`/uploadItemData`, "cad转geometry", data);
}
export function getCADimageUrl(data) {
  return SPOST(`/cadToPNG`, "cad转png", data);
}

export function getProjectsByCode(code) {
  return GET("/rest/gis/v1/project/" + code, "根据行政区划代码获取项目", "");
}
export function getProjectInfo(id) {
  return GET("/rest/gis/v1/project/attr/" + id, "根据id获取项目详情", "");
}
export function getProjectTree(id) {
  return GET("/rest/gis/v1/project/file/" + id, "根据id获取项目目录树", "");
}

export function getFileUrlById(id, name) {
  return GET(
    "/rest/gis/v2/file/preview/id?fileId=" + id + "&fileName=" + name,
    "根据id获取文件预览路径",
    ""
  );
}

export function commonStatistics(url, params) {
  return FGET(url, "通过地图服务统计", params, false);
}

export function saveSceneMarkByUser(data) {
  return POST(`rest/gis/v1/bookmark`, "根据用户保存场景", data);
}

export function uploadShpFiles(data) {
  return POST(`/rest/gis/v1/file/shp`, "上传shp文件", data);
}
export function uploadCadFiles(data) {
  return POST(`/rest/gis/v1/file/cad`, "上传cad文件", data);
}

export function getMySceneMarkList(pageNo, pageSize) {
  return GET(
    `rest/gis/v1/bookmark/owner/${pageNo}/${pageSize}`,
    "分页获取自己创建的场景"
  );
}

export function getShareSceneMarkList(pageNo, pageSize) {
  return GET(
    `rest/gis/v1/bookmark/share/${pageNo}/${pageSize}`,
    "分页获取分享给我的场景"
  );
}

export function deleteSceneMarkByID(sceneId) {
  return DELETE(`rest/gis/v1/bookmark/${sceneId}`, "删除指定的书签");
}

export function shareSceneMarkByUser(data) {
  return POST(`rest/gis/v1/bookmark/share`, "分享场景给其他用户", data);
}

export function getSceneMarkOrgByID(sceneId) {
  return GET(
    `rest/gis/v1/bookmark/org?bookmarkId=${sceneId}`,
    "根据场景id获取用户信息,用于分享"
  );
}

// 特力惠接口
export function getResourceCatalogs() {
  return TGET(
    "resource/rest/resource-catalogs?resourceCategory=6",
    "获取国土空间基础信息平台数据资源目录",
    ""
  );
}

// 特力惠接口
export function getResourceItems() {
  return TGET(
    "resource/rest/resource-items?resourceCategory=6",
    "获取国土空间基础信息平台专题数据资源项",
    ""
  );
}

// 特力惠接口
export function getDataItems(params) {
  return TGET(
    "resource/rest/data-items?",
    "获取国土空间信息平台数据资源子目录及叶子节点信息",
    params
  );
}

// 特力惠接口
export function getSearchResult(keyWord, number, size) {
  return TGET(
    `portal-service/rest/geocoding?keyWord=${keyWord}&number=${number}&size=${size}`,
    "分页获取查询定位的空间结果",
    ""
  );
}

// 特力惠接口
export function getSearchRegion(code) {
  return TGET_NO(
    `portal-service/rest/district-geo-json/${code}`,
    "获取区域定位的图形信息",
    ""
  );
}

// 获取行政区划树形结构通用接口 0: 国,1: 省,2: 市,3: 区县,4: 乡镇,5: 村
// 行政区划编码 12位:省(2)市(2)县(2)乡镇(3)村(3)
export function getRegionTreeData(level) {
  return GET(`rest/gis/regionCode/tree/${level}`, "获取行政区划树形结构");
}

// 获取行政区划树形结构通用接口(包含市辖区数据) 0: 国,1: 省,2: 市,3: 区县,4: 乡镇,5: 村
export function getRegionTreeDataAndMun(level) {
  return GET(
    `rest/gis/v1/regionCode/tree/${level}`,
    "获取行政区划树形结构(包含市辖区数据)"
  );
}

export function exportLedgerDataToExcel(data) {
  return POST(`rest/gis/v1/statistics/export`, "导出台账数据到excel", data);
}

export function parseCADFile(fileName, soeUrl) {
  return YGET(soeUrl + "?fileName=" + fileName + "&f=pjson", "获取数据集");
}

export function getTopicAttachment(topicGuid) {
  return GET(
    `rest/oms/private/privilege/v1/topic/attachment/${topicGuid}`,
    "根据专题guid获取专题关联的附件材料目录"
  );
}

export function getTopicResource(topicGuid) {
  return GET(
    `rest/oms/private/privilege/v1/topic/relation/${topicGuid}`,
    "根据专题guid获取专题关联的专题"
  );
}

export function getResIds(url) {
  return FGET(url, "获取查询结果id");
}

export function getTopicHistoryData(topicGuid) {
  return GET(
    `rest/oms/private/privilege/v1/topic/timeseq/${topicGuid}`,
    "根据专题guid获取专题关联的历史数据"
  );
}

export function checkConflict(data) {
  return SPOST(`/checkConflict`, "两规冲突分析", data);
}
export function getLedgerConfig() {
  return JGET("static/mockdata/YZT_JSON/ledger.hjson", "获得台账功能配置信息");
}

export function getLandConflictConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/LandConflictAnalysis.hjson",
    "获得台账功能配置信息"
  );
}
export function getRegionConfig() {
  return JGET("static/mockdata/YZT_JSON/region.hjson", "获得行政区划配置信息");
}

export function getLoadShpConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/loadShp.hjson",
    "获得加载shape配置信息"
  );
}

export function loadDataConfig() {
  return JGET("static/mockdata/YZT_JSON/loadData.hjson", "获取加载数据配置");
}

export function getSearchLocationConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/searchLocation.hjson",
    "获取地名地址检索配置"
  );
}

export function getSurroundProjectsConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/SurroundProjects.hjson",
    "获取项目周边统计配置"
  );
}

export function getDataQueryConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/data_query.hjson",
    "获取数据查询额外配置信息"
  );
}

export function getBufferAnalysisConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/bufferLayers.hjson",
    "获取项目周边统计配置"
  );
}

export function getBufferAnalysisSOEConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/bufferLayersSOE.hjson",
    "获取项目周边统计配置"
  );
}

export function getProjectQueryConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/projectQuery.hjson",
    "获取项目周边统计配置"
  );
}

export function getIndicatorQueryConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/IndicatorsQuery.hjson",
    "获取项目周边统计配置"
  );
}
export function getFacilityCoverConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/facilityCover.hjson",
    "获得设施覆盖范围功能配置信息"
  );
}

export function getFacilityCoverLandConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/facilityCoverLand.hjson",
    "获得设施覆盖用地功能配置信息"
  );
}

export function getFacilityCoverRLandConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/facilityCoverRLand.hjson",
    "获得设施覆盖R类用地功能配置信息"
  );
}

export function getFacilityDistributeConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/facilityDistribute.hjson",
    "获得设施总量与分布统计功能配置信息"
  );
}

export function getBaseToolsConfig() {
  return JGET("static/mockdata/YZT_JSON/tools.hjson", "获得基础工具配置信息");
}

export function getSpaceToolsConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/spaceTools.hjson",
    "获得空间分析工具配置信息"
  );
}

export function getProductMenuData() {
  return JGET("static/mockdata/YZT_JSON/products.hjson", "获得产品目录的数据");
}

export function getCustomBufferConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/bufferLayers.hjson",
    "获取自定义缓冲区分析的配置信息"
  );
}

export function getIndicatorsQueryConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/IndicatorsQuery.hjson",
    "获取指标查询的配置信息"
  );
}

export function getLoadDataConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/loadData.hjson",
    "获取数据加载的配置信息"
  );
}
export function getLoadDataSOEConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/loadDataSOE.hjson",
    "获取数据加载的配置信息"
  );
}

export function getTopicProductsConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/topicProducts.hjson",
    "获取专题产品的配置信息"
  );
}

export function getTopicsTreeConfig() {
  return JGET(
    "static/mockdata/YZT_JSON/topics.hjson",
    "获取数据专题树的配置信息"
  );
}

export function getProjectsByKey(level) {
  return GET(
    `/rest/gis/v1/project/name?name=${level}`,
    "根据关键字检索规划项目"
  );
}

export function getStatisticsFromModel(taskCode, region) {
  return GET(
    `/rest/gis/v1/model/statistics/xzq?taskInstanceCode=${taskCode}&xzqName=${region}`,
    "获取分析统计数据，来源于模型计算结果"
  );
}
