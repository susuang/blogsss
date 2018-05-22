<template>
  <div class="shishan-message">
  	<div class="bg"></div>
  	<div class="shishan-container">
      <i class="fa fa-check-circle-o fa-4x"></i>
      <span>{{ msg }}</span>
      <button @click='okFunc()'>{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shishan-message'
}
</script>

<style type="text/css">
  .shishan-loading {
    color: #45B0FF;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .shishan-loading .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.7;
    z-index: 999;
  }
  .shishan-loading .shishan-container {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999999999999;
  }
</style>