<template>
  <div>
    <er-button>基本按钮</er-button>
    <er-button icon="settings">左图标</er-button>
    <er-button icon="settings" icon-position="right">右图标</er-button>
    <er-button :loading="true">loading</er-button>
    <er-button disabled>不可用</er-button>

<!--    <div class="buxiangqimingzi">-->
<!--      <er-button icon="upload" :loading=loading1 @click="loading1 = !loading1">上传</er-button>-->
<!--      <er-button icon="download" icon-position="right" :loading=loading2 @click="loading2 = !loading2">下载</er-button>-->
<!--    </div>-->

<!--    <div class="buxiangqimingzi">-->
<!--      <er-button icon="left" icon-position="left">上一步</er-button>-->
<!--      <er-button icon="right" icon-position="right">下一步</er-button>-->
<!--    </div>-->

  </div>
</template>
<script>
  import Button from '../../../src/button';

  export default {
    components: {
      'er-button': Button
    },
    props: {
      loading1: false,
      loading2: false
    }
  }
</script>

<style>

</style>