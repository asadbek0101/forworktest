<template>
    <div>
      <AppHeader/>
      <app-container>
        <router-view/>
      </app-container>
    </div>
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";
import AppContainer from "@/components/Container/AppContainer";
export default {
  name: "HomeView",
  components: {AppContainer, AppHeader}
}
</script>

<style scoped>

</style>