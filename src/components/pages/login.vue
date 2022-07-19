<template>
  <section
    class="container-fluid"
    :style="{
      backgroundImage: 'url(' + back + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div id="loginForm">
      <div
        id="login"
        class="col-xl-4 col-lg-7 vh-100 ms-0 bg-white text-black d-flex flex-column align-items-center justify-content-start"
      >
        <img class="px-5 col-10 col-md-6 col-lg-10" :src="logo" />

        <div class="d-flex align-items-center h-custom-2 px-5">
          <form @submit.prevent="handleSubmit">
            <h3
              class="fw-normal text-secondary fw-bold mb-3 pb-3"
              style="letter-spacing: 1px"
            >
              Log in
            </h3>

            <div class="form-outline mb-4">
              <input
                v-model="username"
                required
                type="username"
                ref="username"
                class="form-control form-control-lg"
                placeholder="Username"
              />
            </div>

            <div class="form-outline mb-4">
              <input
                v-model="password"
                required
                type="password"
                ref="password"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </div>
            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              />
              <label class="form-check-label" for="flexCheckChecked">
                Remember me
              </label>
            </div>
            <div class="d-grid mb-4">
              <button class="btn btn-primary btn-lg btn-block text-white">
                Login
              </button>
            </div>
            <p>
              Don't have an account?
              <a href="#!" class="link-info" v-on:click="toregister"
                >Register here</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ManuelitoLogo from "../../assets/ManuelitoLogo.png";
import roses from "../../assets/roses.jpg";
export default {
  data() {
    return {
      username: "",
      password: "",
      logo: ManuelitoLogo,
      back: roses,
    };
  },
  methods: {
    toregister() {
      this.$router.push("/register");
    },
    async handleSubmit() {
      try {
        const response = await axios.post("/api/login", {
          username: this.username,
          password: this.password,
        });
        localStorage.setItem("user", response);
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
