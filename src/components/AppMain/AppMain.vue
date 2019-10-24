<template>
  <div class="app-main">
     <tag-view></tag-view>
  </div>
</template>

<script>
import TagView from "@/components/TagView/TagView"
export default {
  name: 'app-main',
  components:{
    TagView
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  $bg-color:#FFFFFF;
.app-main{
  background-color: $bg-color;
  padding:30px;
  border-radius:20px;
  min-height:500px;
  margin:-80px 50px 50px 300px;
}
</style>
