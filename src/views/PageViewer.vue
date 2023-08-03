<template>
  <div v-if="page" class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['index'], // second method (with 'props: true' in routes)

  created() {
    /* first method */
    // this.page = this.$pages.getSinglePage(this.$route.params.index);

    // this.$watch(
    //   () => this.$route.params,
    //   // eslint-disable-next-line no-unused-vars
    //   (newParams, prevParams) => {
    //     this.page = this.$pages.getSinglePage(newParams.index);
    //   },
    // );
    /* first method end */

    /* second method */
    this.page = this.$pages.getSinglePage(this.index);
  },

  /* second method */
  watch: {
    // eslint-disable-next-line no-unused-vars
    index(newIndex, oldIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },

  data() {
    return {
      page: null,
    };
  },
};
</script>

<style scoped>
.emphasize {
  color: green;
}
</style>
