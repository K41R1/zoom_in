<template>
  <div id="app" class="d-flex">

    <SideBar ref="sideBar"></SideBar>

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-transparent" id="menu-toggle" @click="toggleSideBar($event)"><span class="navbar-toggler-icon"></span></button>
      </nav>

      <b-container fluid>
        <router-view></router-view>
      </b-container>
    </div>

  </div>
</template>

<script>
import SideBar from './components/ui/SideBar'

export default {
  name: 'app',
  components: {
    SideBar
  },
  methods: {
    toggleSideBar: function (e) {
      this.$refs.sideBar.toggle(e);
    }
  }
}
</script>


<style media="screen">
  body {
    overflow-x: hidden
  }
  #page-content-wrapper {
    min-width: 100vw;
  }

  #app.toggled #sidebar-wrapper {
    margin-left: 0;
  }

  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }

    #page-content-wrapper {
      min-width: 0;
      width: 100%;
    }

    #app.toggled #sidebar-wrapper {
      margin-left: -15rem;
    }
  }
</style>
