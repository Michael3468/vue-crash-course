<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: {
    NavBar,
  },

  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
