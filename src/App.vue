<template>
  <router-view />
</template>

<script>
import Login from "./components/pages/login.vue";
export default {
  name: "App",
  data() {
    return {
      tittle: "my first App",
    };
  },
  components: { Login },
};
</script>
<style lang="scss">
/*
*sonic-silver: #737373ff;
*lime-green: #7ed958ff;
*bistre: #251605ff;
*vivid-sky-blue: #5ad2f4ff;
*columbia-blue: #d6edffff;
*/
$theme-colors: (
  "sonic-silver": #737373ff,
  "lime-green": #7ed958ff,
  "bistre": #251605ff,
  "sky-blue": #5ad2f4ff,
  "columbia-blue": #d6edffff,
);
</style>
