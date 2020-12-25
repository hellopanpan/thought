<template>
  <div class="wrap">
    <div class="top-wrap">
      <div class="top">
        <div class="log-wrap">
          <img src="@/assets/logo.svg" alt="">
        </div>
        <div class="head-img">
          <img src="@/assets/avatar.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="content-wrap">
      
        <LeftCont></LeftCont>
      
      
        <RightCont></RightCont>
      
    </div>
    
  </div>
</template>

<script>
import LeftCont from './leftCont'
import RightCont from './rightCont'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    LeftCont,
    RightCont
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrap{
  width: 100%;
  height: 100vh;
  min-width: 1200px;
  background: #666;
  .top-wrap{
    width: 100%;
    background: #fff;
  }
  .top{
    width: 1200px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    .log-wrap{
      width: 1000px;
      img{
        height: 40px
      }
    }
    .head-img{
      width: 100px;
      img{
        height: 40px
      }
    }
  }
  .content-wrap{
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
