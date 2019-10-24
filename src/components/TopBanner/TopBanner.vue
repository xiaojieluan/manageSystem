<template>
    <div class="main">
       <div class="top-circle"></div>
      <div class="right-circle"></div>
      <div class="change-area">
        <el-dropdown style="color:#eee;margin-right:30px">
        <span class="el-dropdown-link">
          换肤<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>暖色调</el-dropdown-item>
            <el-dropdown-item>冷色调</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown style="color:#eee;margin-right:30px">
        <span class="el-dropdown-link">
          切换语言<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <button class="log-out">退出当前账号</button>
      </div>

    </div>
</template>

<script>
export default {
  name: 'top-banner',
  data() {
    return{

    }
  }
}
</script>

<style scoped lang="scss">
.main{
  margin-left:250px;
  height:300px;
  background-image:linear-gradient(right,#5a449e,#9b66c4);
}
  .top-circle{
    width: 700px;
    position: absolute;
    height: 300px;
    border-radius: 50%;
    opacity: 0.3;
    top: -220px;
    background: #9b66c4;
    left: 40%;
  }
  .outer-div{
    border:1px solid red;
    width:500px;
    height:200px;
  }
  .right-circle{
    background: #5a449e;
    width: 500px;
    height: 200px;
    border-radius: 0 0 0 100%;
    position: absolute;
    right: 0;
    opacity: 0.3;
    top: -20px;
  }
  .change-area{
    position:absolute;
    top: 150px;
    right: 200px;
    opacity: .7;
  }
  .log-out{
    //background-color: #5a449e;
    background-color: transparent;
    outline: none;
    border:none;
    color:#eee;
  }
</style>
