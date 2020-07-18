/*
 * @Author: LancerSung
 * @Date: 2019-02-15 11:00:33
 * @Last Modified by: liufch
 * @Last Modified time: 2019-08-20 14:59:42
 * @Description mutation的type名称常量
 */

// 公共
export const SET_CONFIG = "SET_CONFIG"; // 设置全局配置内容
export const SET_SYSNAME = "SET_SYSNAME"; // 设置系统名

// user 用户
export const SET_USER_INFO = "SET_USERINFO"; // 设置用户信息
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS"; // 设置登录状态
export const SET_USER_SESSION = "SET_USER_SESSION";
// permission 权限
export const SET_PERMISSION = "SET_PERMISSION"; // 设置用户业务权限
// export const SET_MAP_PERMISSION = "SET_MAP_PERMISSION"; // 设置用户空间访问权限
export const RESET_ALL_PERMISSION = "RESET_ALL_PERMISSION"; // 重置用户权限
// permission 权限
export const SET_ROUTES = "SET_ROUTES"; // 设置权限路由

// FZBZ

export const FZBZ_INIT_FORMS = "FZBZ_INIT_FORMS"; // 智能分析模块初始化数据报表数据
export const FZBZ_ADD_FORMS = "FZBZ_ADD_FORMS"; // 智能分析模块初始化数据报表里添加报表
export const FZBZ_DEL_FORMS = "FZBZ_DEL_FORMS"; // 智能分析模块初始化数据报表里删除报表
export const FZBZ_EDIT_FORMS = "FZBZ_EDIT_FORMS"; // 智能分析模块初始化数据报表里编辑报表
export const FZBZ_SET_AIANALYSIS_STATUS = "FZBZ_SET_AIANALYSIS_STATUS"; // 智能分析里涉及到的所有状态值的变化
export const FZBZ_INIT_AINAALYSISPAGE = "FZBZ_init_AINAALYSISPAGE"; // 智能分析模块初始化数据分析页面
export const FZBZ_ADD_AINAALYSISPAGE = "FZBZ_ADD_AINAALYSISPAGE"; // 智能分析模块添加数据分析页面
export const FZBZ_DEL_AINAALYSISPAGE = "FZBZ_DEL_AINAALYSISPAGE"; // 智能分析模块删除数据分析页面
export const FZBZ_EDIT_AINAALYSISPAGE = "FZBZ_EDIT_AINAALYSISPAGE"; // 智能分析模块编辑数据分析页面
export const FZBZ_SET_CURRENTMODELNAME = "FZBZ_SET_CURRENTMODELNAME"; // 设置当前的模型名称
export const FZBZ_SET_FILTEREDMINERALNAMEINFO =
  "FZBZ_SET_FILTEREDMINERALNAMEINFO"; // 设置当前的过滤的矿产名称，图表、表格联动
export const FZBZ_MODELRES_SELECTED_YEAR = "FZBZ_MODELRES_SELECTED_YEAR"; // 模型结果里记录当前选中的年份
export const FZBZ_MAP_CONFIGURATION = "FZBZ_MAP_CONFIGURATION"; // 辅助编制里的地图配置信息

// JCYJ

// eyemap
export const MAP_INIT_CONFIG = "MAP_INIT_CONFIG";
export const MAP_SERVER_PROXY = "MAP_SERVER_PROXY";
export const GET_ACCESS_TOKEN = "GET_ACCESS_TOKEN";

// YZT
export const YZT_OPENED_TOPICS = "YZT_OPENED_TOPICS"; // 一张图打开的专题
export const YZT_FAVORITE_TOPICS = "YZT_FAVORITE_TOPICS"; // 一张图收藏的专题
export const YZT_OPACITY_TOPICS = "YZT_OPACITY_TOPICS"; // 一张图专题透明度
export const YZT_FILTER_TOPICS = "YZT_FILTER_TOPICS"; // 一张图专题过滤条件
export const YZT_MAP_EXTENT = "YZT_MAP_EXTENT"; // 一张图地图范围
export const YZT_MAP_OBJECT = "YZT_MAP_OBJECT"; // 地图对象
export const YZT_NEW_LAYERS = "YZT_NEW_LAYERS"; // 一张图加载的外部数据图层
export const YZT_NEW_SHP_LAYER = "YZT_NEW_SHP_LAYER"; // 一张图加载的外部shp数据图层
export const YZT_MAPPING_SERVICE = "YZT_MAPPING_SERVICE"; // 一张图映射服务关系（专题中配了切片and动态，做障眼法使用）
// ghss
export const GHSS_INIT_MAP = "GHSS_INIT_MAP"; // 规划实施eyemapref
export const GHSS_DRAW_GRAPHIC = "GHSS_DRAW_GRAPHIC"; // 手绘图形
export const GHSS_CURRENT_CONFIG = "GHSS_CURRENT_CONFIG"; // 规划实施当前功能的配置文件

export const GHSS_EXPLOITCONFIG = "GHSS_EXPLOITCONFIG"; // 规划实施开发利用的配置文件
export const GHSS_DEVELOPMENT_CONFIG = "GHSS_DEVELOPMENT_CONFIG"; // 规划实施当前功能的配置文件
// fzsc
export const FZSC_REVIEWTASK_STARTD = "FZSC_REVIEWTASK_STARTD"; // 审查任务是否启动了
export const FZSC_REVIEWTASK_STATUS = "FZSC_REVIEWTASK_STATUS"; // 审查任务状态
export const FZSC_REVIEWTASK_ISSUBMITTED = "FZSC_REVIEWTASK_ISSUBMITTED"; // 审查任务是否是由下级提交而来
export const FZSC_REVIEWTASK_POINT_ROUTER_INFO =
  "FZSC_REVIEWTASK_POINT_ROUTER_INFO"; // 具体审查任务的路由信息
// hygl
export const HYGL_REGIONS = "HYGL_REGIONS"; // 行业管理所有行政区划

// system 系统
export const SET_SYSTEM_NAME = "SET_SYSTEM_NAME"; // 设置系统名称
export const SET_SYSTEM_INFO = "SET_SYSTEM_INFO"; // 设置系统信息
export const SET_TOP_ELEMENT_INFO = "SET_TOP_ELEMENT_INFO"; // 设置系统顶部资源数组
export const SET_TOP_ELEMENT_MAP = "SET_TOP_ELEMENT_MAP"; // 系统顶部资源MAP对象
export const SET_TOP_ELEMENT_CODE = "SET_TOP_ELEMENT_CODE"; // 设置当前系统选中code
export const SET_SYSTEM_ELEMENT_MAP = "SET_SYSTEM_ELEMENT_MAP"; // 系统资源MAP对象
export const SET_SYSTEM_ENVIRORIMENT = "SET_SYSTEM_ENVIRORIMENT"; // 系统登录类型（练习、正式）
export const SET_SYSTEM_STATUS_INFO = "SET_SYSTEM_STATUS_INFO"; // 设置系统维护状态
export const SET_SYSTEM_NOTICE_VISIBLE = "SET_SYSTEM_NOTICE_VISIBLE"; // 设置系统公告是否可见
export const SET_SYSTEM_NOTICE_INFO = "SET_SYSTEM_NOTICE_INFO"; // 设置系统公告信息
// task 任务
export const SET_TASK_ALL_COUNT = "SET_TASK_ALL_COUNT"; // 设置所有任务数量
export const SET_TASK_COUNT = "SET_TASK_COUNT"; // 设置任务数量
export const SET_TASK_TYPE = "SET_TASK_TYPE"; // 设置任务类型
