<template>
  <div class="content-l">
    <div class="menu">
      <div class="menu-item">1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftContent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .content-l{
    width: 300px;
    float: left;
    height: 100vh;
    background: #2D4054;
    .menu{
      height: 300px;
      width: 100%;
      .menu-item{
        height: 45px;
        line-height: 45px;
        background: #2D4054;
        width: 100%;
        color: #fff;
        &:hover{
          background: #435466;
        }
      }
    }
  }
</style>
