<template>
  <Header />
</template>
<script>
import Header from "../header.vue";
export default {
  name: "App",
  data() {
    return {
      tittle: "my first App",
    };
  },
  components: { Header },
};
</script>
