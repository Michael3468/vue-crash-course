<template>
  <nav :class="[`navbar-${theme} bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(page, index) in pages" :key="index">
          <NavbarLink
            :page="page"
            :isActive="activePage === index"
            @click.prevent="navLinkClick(index)"
          ></NavbarLink>
        </li>
      </ul>

      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle Dark Mode</button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from '../components/NavbarLink';

export default {
  components: {
    NavbarLink,
  },

  props: ['pages', 'activePage', 'navLinkClick'],

  data() {
    return {
      theme: 'light',
    };
  },

  methods: {
    changeTheme() {
      this.theme === 'light' ? (this.theme = 'dark') : (this.theme = 'light');
    },
  },
};
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
