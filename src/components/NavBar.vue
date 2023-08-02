<template>
  <nav :class="[`navbar-${theme} bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <NavbarLink
          v-for="(page, index) in publishedPages"
          :key="index"
          :page="page"
          :index="index"
          :isActive="activePage === index"
          @activated="$emit('activated')"
        ></NavbarLink>
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

  created() {
    this.getThemeSetting();
  },

  computed: {
    publishedPages() {
      return Array.isArray(this.pages) ? this.pages.filter((p) => p.published) : [];
    },
  },

  props: ['pages', 'activePage'],

  data() {
    return {
      theme: 'light',
    };
  },

  methods: {
    changeTheme() {
      this.theme === 'light' ? (this.theme = 'dark') : (this.theme = 'light');
      this.storeThemeSetting();
    },

    storeThemeSetting() {
      localStorage.setItem('theme', this.theme);
    },

    getThemeSetting() {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
