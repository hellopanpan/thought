<template>
  <div class="content-r">
    <div class="menu">
      <div class="menu-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content-r{
    width: 900px;
    float: right;
  }
</style>
