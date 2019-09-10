import { Collapse, Button, Layout, Icon, Menu } from 'ant-design-vue'

export default function(Vue) {
  Vue.component('a-collapse', Collapse)
  Vue.component('a-button', Button)
  Vue.component('a-icon', Icon)
  Vue.component('a-layout', Layout)
  Vue.component('a-layout-sider', Layout.Sider)
  Vue.component('a-layout-header', Layout.Header)
  Vue.component('a-layout-footer', Layout.Footer)
  Vue.component('a-layout-content', Layout.Content)
  Vue.component('a-menu', Menu)
  Vue.component('a-menu-item', Menu.Item)
}
