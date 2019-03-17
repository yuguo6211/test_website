<template lang="pug">
  div.hello
    h1 这里是一个sub页面
    h2 {{msg}}
</template>

<script>
export default {
  name: 'Testsub',
  data () {
    return {
      msg: 'yuguo-002'
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
