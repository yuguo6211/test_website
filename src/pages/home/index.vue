<template lang="pug">
  div.content
    div.hello(v-if="!isloading")
      h1 Home-index
      p 请求数据：{{info.cn_name}}
      router-link.text(to="/test") 测试跳转
    loading-vue(v-if="isloading")
</template>
<script>
let model
export default {
  name: 'HomeIndex',
  data () {
    return {
      isloading: true,
      info: {}
    }
  },
  methods: {
    init: function () {
      let param = {
        where: {
          name: 'topmenu'
        }
      }
      this.API.GET('classes/homepage_modules', param).then((msg) => {
        model.info = msg.data.items[0]
        model.isloading = false
      })
    }
  },
  created () {
    this.init()
    model = this
  }
}
</script>
<style lang="scss" scoped>
.hello{
  .text{
    color: #f00
  }
}
</style>
