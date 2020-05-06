<template>
  <div class="col">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'erCol'
  }
</script>
<style lang="scss" scoped>
.col{
  height: 100px;
  width: 50%;
  background-color: pink;
  border: 1px dotted grey;

}
</style>