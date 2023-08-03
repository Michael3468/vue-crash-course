<template>
  <p>{{ counter }}</p>
  <button @click.prevent="click">click</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },

  // methods: {

  // }
};
</script>
