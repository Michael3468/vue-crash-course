<template>
  <NavBar
    :pages="pages"
    :active-page="activePage"
    :nav-link-click="(index) => (activePage = index)"
  ></NavBar>

  <!-- <PageViewer v-if="pages.length > 0" :page="pages[activePage]"></PageViewer> -->
  <CreatePage :page-created="pageCreated"></CreatePage>
</template>

<script>
import NavBar from './components/NavBar';
// import PageViewer from './components/PageViewer';
import CreatePage from './components/CreatePage';

export default {
  components: {
    NavBar,
    // PageViewer,
    CreatePage,
  },

  created() {
    this.getPages();
  },

  data() {
    return {
      activePage: 0,
      pages: this.getPages(),
    };
  },

  methods: {
    async getPages() {
      let res = await fetch('pages.json');
      let data = await res.json();

      this.pages = data;
    },

    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
