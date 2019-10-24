<template>
  <div class="whole">
    <div class="info">
      <div class="avatar"><img src="/static/img/avatar.jpg"></div>
      <div class="account">admin13724182712</div>
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#383856"
      text-color="#eee"
      active-text-color="#ffd04b"
      style="width:100%;height:100vh;border:none">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>产品管理场景</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">产品管理流程</el-menu-item>
          <el-menu-item index="2-2">产品数据统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理场景</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">订单管理流程</el-menu-item>
          <el-menu-item index="3-2">订单数据统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  $bg-color:#383856;
  $font-color:#eeeeee;
.whole{
  width:250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  .info{
    width:100%;
    background-color: $bg-color;
  }
}
  .avatar{
    img{
      width: 30%;
      border-radius: 50%;
      margin: 30px auto 15px;
      display: block;
    }
  }
  .account{
    color:$font-color;
    font-size: 14px;
    text-align: center;
  }
</style>
