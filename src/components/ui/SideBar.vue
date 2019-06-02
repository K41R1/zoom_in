<template>
    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">ZoomIn App</div>
      <div class="list-group list-group-flush">
        <router-link v-for="item in items"
        :key="item.path" :to="item.path"
        class="list-group-item list-group-item-action bg-light">
          {{item.name}}
        </router-link>
      </div>
    </div>
    <!-- ./sidebar -->
</template>


<script>
import $ from 'jquery';
export default {
  name: 'side-bar',
  data : () => {
    return {
      isActive: false,
      items: [
          {
              name: 'Home',
              path: '/'
          },
          {
              name: 'Reclamation',
              path: 'reclamation'
          }
      ]
    }
  },
  methods: {
    toggle: function () {
      this.isActive = !this.isActive;
      $("#app").toggleClass("toggled");
    }
  }
}
</script>


<style media="screen">

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

</style>
