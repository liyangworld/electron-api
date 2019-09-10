<template>
  <div style="height: 100%;" class="side-bar">
    <div class="logo">{{electronModules.length}}</div>
    <a-menu mode="inline" :defaultSelectedKeys="[0]">
      <a-menu-item v-for="(item, index) in electronModules" :key="index">
        <div class="menu-item-inner">
          <span>{{index+1}} &nbsp;</span>
          <span class="nav-text">{{item.name}}</span>
        </div>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    electronModules: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="less">
.side-bar .ant-menu-inline .ant-menu-item {
  line-height: 24px;
  height: 24px;
  margin-bottom: 4px !important;
}
.side-bar .menu-item-inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
