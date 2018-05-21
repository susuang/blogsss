<template>
  <div class="shishan-loading" :style="{'top': top, 'left': left, 'width': width, 'height': height}">
  	<div class="bg"></div>
  	<div class="shishan-container">
      <i class="icon-spinner icon-spin icon-4x"></i>
    </div>
  </div>
</template>

<script>
import '@/components/Prompts/icon/css/font-awesome.min.css'
export default {
  name: 'shishan-loading',
   data () {
    return {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }
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