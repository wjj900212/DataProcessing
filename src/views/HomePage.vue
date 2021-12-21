<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="account-book" />
          <span>JSON在线解析</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!--<a-layout-header style="background: #fff; padding: 0;margin-bottom:10px;">
      </a-layout-header>-->
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <json-analysis></json-analysis>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import JsonAnalysis from './JsonAnalysis/JsonAnalysis'
export default {
  name: 'HomePage',
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    JsonAnalysis
  },
  mounted () {
  },
  watch: {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
  #components-layout-demo-side .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
</style>
