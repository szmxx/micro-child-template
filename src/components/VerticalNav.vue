<!--
 * @Author: maolf
 * @LastEditors: gaotao
 * @Description: 容器内简约垂直导航栏（导航名+图标）
 * @Date: 2019-03-02 16:04:14
 * @LastEditTime: 2019-03-25 20:07:27
 -->
<template>
  <div class="total-vertical-nav">
    <ul class="vertical-nav" ref="verticalNav">
      <li
        v-for="item in navList"
        :id="item.name"
        :key="item.name"
        :class="computedClass(item)"
        @click="handleClick(item)"
      >
        <div class="item-icon">
          <i class="iconfont" :class="item.meta.icon"></i>
        </div>
        <div class="item-title" :title="item.meta.navTitle">{{item.meta.navTitle}}</div>
      </li>
    </ul>
    <div class="vertical-line"></div>
    <ul class="bottom-vertical-nav" ref="bottomVerticalNav" v-if="network === 'extranet'">
      <Badge :count="badgeNumber" :id="item.name"
          :key="item.name"
          v-for="item in bottomNavList">
        <li
          :class="bottomComputedClass(item)"
          @click="bottomHandleClick(item)"
        >
          <div class="item-icon">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <div class="item-title" :title="item.name">{{item.name}}</div>
        </li>
      </Badge>
    </ul>
  </div>
</template>

<script>
export default {
  name: "verticalNav",
  props: {
    navList: {
      type: Array,
      default: () => []
    },
    bottomNavList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activedName: "",
      bottomActivedName: "",
      badgeNumber: 0,
      network: "extranet",
      curSubSystemName: ""
    };
  },
  beforeMount() {},
  created() {
    this.network = window.__NETWORK__;
    let subSysName = "";
    if (
      this.$route.matched &&
      this.$route.matched[0] &&
      this.$route.matched[0].meta
    ) {
      subSysName = this.$route.matched[0].meta.navTitle;
    }
    this.curSubSystemName = subSysName;
  },
  mounted() {

  },
  beforeDestroy() {},
  watch: {
    badgeNumber(val) {
      if (val > 0) {
        this.$refs.bottomVerticalNav.style["padding-top"] = "0.93rem";
      } else {
        this.$refs.bottomVerticalNav.style["padding-top"] = "0";
      }
    }
  },
  methods: {
    computedClass(item) {
      const className = ["list-item"];
      const { name, active, disabled } = item;
      if (active) {
        this.activedName = name;
        className.push("active");
      }
      if (disabled) {
        className.push("disabled");
      }
      return className;
    },
    bottomComputedClass(item) {
      const className = ["list-item"];
      const { name, active, disabled } = item;
      if (active) {
        this.bottomActivedName = name;
        className.push("active");
      }
      if (disabled) {
        className.push("disabled");
      }
      return className;
    },

    handleClick(item) {
      const { name, disabled } = item;
      if (disabled) {
        return;
      }
      if (this.activedName === name) {
        if (this.bottomActivedName !== "") {
          this.bottomHandleClick(this.bottomNavList[0]);
        } else {
          return;
        }
      } else {
        if (this.activedName) {

        }
        let childNodes = this.$refs.verticalNav.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
          let li = childNodes[i];
          if (li.id === name) {
            this.activedName = name;
            li.classList.add("active");

          } else {
            li.classList.remove("active");
          }
        }
        this.$emit("on-list-click", item);
      }
    },

    bottomHandleClick(item) {
      const { name, disabled } = item;
      if (disabled) {
        return;
      }
      let childNodes = this.$refs.bottomVerticalNav.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        let li = childNodes[i];
        if (li.id === name) {
          if (this.bottomActivedName === name) {
            li.classList.remove("active");

            this.bottomActivedName = "";
            item.active = false;
          } else {
            li.classList.add("active");
            this.bottomActivedName = name;
            item.active = true;

          }
        } else {
          li.classList.remove("active");
        }
      }
      this.$emit("on-bottom-list-click", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.vertical-nav {
  position: relative;
  width: 100%;
  height: calc(100% - 4.5rem);
  padding-top: 0.93rem;
  .list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: $colorb4b4b4;
    margin-bottom: 1.77rem;
    .item-icon {
      i {
        font-size: 1.45rem;
      }
      margin-bottom: 0.63rem;
    }
    .item-title {
      width: 100%;
      @include scw(0.83rem, 500);
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &.active {
      border-radius: 1rem;
      color: $colorffffff;
    }
    &.disabled {
      border-radius: 1rem;
      @include disabled;
    }
    &:hover {
      color: $colorffffff;
      cursor: pointer;
    }
    &:last-child {
      position: absolute;
    }
  }
}
.bottom-vertical-nav {
  position: relative;
  width: 100%;
  height: 4.5rem;
  /* padding-top: 0.93rem; */
  .list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: $colorb4b4b4;
    margin-bottom: 1.77rem;
    .item-icon {
      i {
        font-size: 1.45rem;
      }
      margin-bottom: 0.63rem;
    }
    .item-title {
      width: 100%;
      @include scw(0.83rem, 500);
      text-align: center;
    }
    &.active {
      border-radius: 1rem;
      color: $colorffffff;
    }
    &.disabled {
      border-radius: 1rem;
      @include disabled;
    }
    &:hover {
      color: $colorffffff;
      cursor: pointer;
    }
    &:last-child {
      position: absolute;
    }
  }
}
</style>
<style lang="scss">
.total-vertical-nav {
  display: inline;
  .ivu-badge {
    width: 100%;
    .ivu-badge-count {
      width: 0.79rem;
      height: 0.79rem;
      min-width: 0.79rem;
      right: 0.76rem;
      top: -0.26rem;
      line-height: 1;
      border-radius: 0.526rem;
      padding: 0.05rem 0.16rem;
      font-size: 0.63rem;
    }
  }
}
</style>
