<template>
  <div class="slider" ref="slider">
    <div class="navbar">
      <a href="#" @click="moveScroll(1)">HOME</a>
      <a href="#" @click="moveScroll(2)">SECTION 2</a>
      <a href="#" @click="moveScroll(3)">SECTION 3</a>
      <a href="#" @click="moveScroll(4)">SECTION 4</a>
    </div>
    <div class="content_page">
      <h1>Home</h1>
    </div>
    <div class="content_page">
      <h1>Section 2 content</h1>
    </div>
    <div class="content_page">
      <h1>Section 3 content</h1>
    </div>
    <div class="content_page">
      <h1>Section 4 content</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: null,
      height: null,
    };
  },
  mounted() {
    this.slider = this.$refs.slider;
    this.height = this.slider.offsetHeight;
  },
  methods: {
    moveScroll(n) {
      n = n - 1;
      this.slider.scrollTo({
        top: this.height * n,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
html,
body {
  height: 100;
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.slider {
  position: relative;
  height: 100vh;
  overflow: scroll;
}

.content_page {
  height: 100vh;
  background-color: whitesmoke;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar {
  overflow: hidden;
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background-color: gray;
  color: black;
}
</style>
