<template>
  <div class="home">
    <side-bar :electronModules="electronModules" />
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
