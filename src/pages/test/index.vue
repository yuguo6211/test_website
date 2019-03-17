<template lang="pug">
  div.hello
    h1 这里是一个测试页面
    h2 {{msg}}
    router-link(to="/testsub") 子页面跳转
</template>

<script>
export default {
  name: 'TestIndex',
  data () {
    return {
      msg: 'yuguo-001'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
