<template lang="pug">
  div.loading-box
    div.loading-animate
      div
      div
      div
      div
      div
</template>
<script>
export default {
  props: [],
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .loading-box{
    margin: 10px 0;
  }
  @-webkit-keyframes line-scale-pulse-out {
    0% {
      -webkit-transform: scaley(1);
      ransform: scaley(1);
    }
    50% {
      -webkit-transform: scaley(0.4);
      transform: scaley(0.4);
    }
    100% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
  }
  @keyframes line-scale-pulse-out {
    0% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
    50% {
      -webkit-transform: scaley(0.4);
      transform: scaley(0.4);
    }
    100% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
  }
  .loading-animate {
    text-align: center;
  }
  .loading-animate > div {
    background-color: #14b9c7;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
    animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
  }
  .loading-animate > div:nth-child(2), .loading-animate > div:nth-child(4) {
    -webkit-animation-delay: -0.4s !important;
    animation-delay: -0.4s !important;
  }
  .loading-animate > div:nth-child(1), .loading-animate > div:nth-child(5) {
    -webkit-animation-delay: -0.2s !important;
    animation-delay: -0.2s !important;
  }
</style>
