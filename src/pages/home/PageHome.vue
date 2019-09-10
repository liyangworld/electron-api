<template>
  <div class="home">
    <a-layout id="components-layout-demo-fixed-sider">
      <a-layout-sider
        theme="light"
        width="300"
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
      >
        <side-bar :electronModules="electronModules" />
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '300px' }">
        <a-layout-content style="background: #fff;">
          <div>content</div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import electronModules from '@/assets/v6.0.8/electron-api.json'
import SideBar from '@/layouts/SideBar'
export default {
  name: 'home',
  components: { SideBar },
  data: function() {
    return {
      electronModules
    }
  }
}
</script>
