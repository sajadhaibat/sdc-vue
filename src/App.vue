<template>
  <div id="app">
    <sidebar></sidebar>
    <div class="content-container">
      <div class="container-fluid">
        <div class="pb-2 mt-4 mb-2 border-bottom">
        {{ pageHeader }}
      </div>
      <router-view></router-view>

    </div>
    </div>
  </div>
</template>

<script>

import Sidebar from "./components/sidebar";
export default {
  name: 'App',

  components: {
    Sidebar
  },

  data () {
    return {
      msg: 'ok',
      ok: 'sajad',
      pageHeader: 'Dashboard',
    }
  }
}
</script>

<style>
</style>
