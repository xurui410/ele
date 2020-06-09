<template>
  <div class="header">
    <img src="../../assets/login_img.jpeg" alt srcset />
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      
    >
      <el-menu-item v-for="(item,index) in list" index="index">{{item}}</el-menu-item>
    
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
        activeIndex: '1',
        list:['用户','教学','运营','营销','商品','财务','统计','系统'],
    };
  },
  components: {},
  methods: {
      handleSelect(){

      }
  },
};
</script>


<style scoped>
img{
    width: 60px;
    padding-top: 10px;
    padding-left: 60px;
}
.el-menu{
    width: 83%;
    float: right;
    background-color: #2b83f9;
    background-image: linear-gradient(143deg,#2945cb 10%,#2b83f9 91%,#3a9dff);
    
}
</style>