<template>
  <div class="json-main">
    <div class="json-data">
      <a-textarea
        v-model="jsonData"
        placeholder="请输入json字符串"
        :auto-size="{ minRows: 26, maxRows: 38 }"
      />
      <a-button type="primary" @click="transformation" style="margin-top:5px;float: right;">
        转换
      </a-button>
    </div>
    <div class="json-analysis">
      <json-viewer
        v-if="jsonData"
        :value="jsonObj"
        :expand-depth=4
        :copyable="true"
        sort
      ></json-viewer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'json-analysis',
  data () {
    return {
      jsonData: '',
      jsonObj: {}
    }
  },
  methods: {
    transformation () {
      if (this.jsonData === '') {
        this.$info({
          title: '请先输入需要转换的JSON字符串',
          content: '',
          onOk () {}
        })
      } else {
        this.jsonObj = eval('(' + this.jsonData + ')')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.json-main{
  display: flex;
  flex-direction: row;
  text-align: left;
  height: calc(100vh - 120px);
  overflow-y: hidden;
  div{
    flex: 1;
    margin-left:10px;
    overflow-y: auto;
  }
  .json-analysis{
    border:1px solid #e9e9e9;
  }
}
</style>
