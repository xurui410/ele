<template>
  <div class="layout">
    <el-container>
      <el-header>
          <app-header></app-header>
      </el-header>
      <el-container class="layout_el">
        <el-aside width="200px">
            <app-navbar></app-navbar>
        </el-aside>
        <el-main>
            <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
    
    
    
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavBar";
import AppMain from "../components/AppMain";
export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppNavbar,
    AppMain
  }
};
</script>


<style lang='scss' scoped>
.layout{
    width: 100%;
    height: 100%;
    position: absolute;
}
.el-aside {
    height: 100%;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    height: 100%;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
.el-header {
    background-color: #2b83f9;
    background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
    color: #333;
    line-height: 60px;
  }
  .layout_el{
        width: 100%;
        height: 100%;
    }
.el-container {
    margin-bottom: 40px;
    height: 100%;
}

</style>