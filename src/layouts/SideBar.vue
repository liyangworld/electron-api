<template>
  <div>
    <div>{{electronModules.length}}</div>

    <a-button type="primary">Primary</a-button>
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

<style>
</style>
