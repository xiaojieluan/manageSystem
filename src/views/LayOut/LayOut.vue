<template>
  <div>
    <side-bar></side-bar>
    <top-banner></top-banner>
    <app-main></app-main>
  </div>
</template>

<script>
import SideBar from "@/components/sideBar/sideBar";
import TopBanner from "@/components/TopBanner/TopBanner";
import AppMain from "@/components/AppMain/AppMain";
export default {
  name: 'dash-board',
  components:{
    SideBar,
    TopBanner,
    AppMain
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
