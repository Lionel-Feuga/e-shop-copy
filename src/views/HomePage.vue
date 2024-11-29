<script setup></script>

<template>
  <body class="d-flex align-center justify-space-around">
    <div class="title d-flex justify-center mt-7">
      <h1 class="main-font">MATOU OBÈSE</h1>
    </div>

    <div class="d-flex align-center justify-center men main-font-2">
        <RouterLink to="/Homme">Homme</RouterLink></div>
    <div class=" d-flex align-center justify-center women main-font-2">
        <RouterLink to="/Femme">Femme</RouterLink></div>
  </body>
</template>

<style scoped>
body {
  height: 100vh;
  width: 100vw;
  position: absolute;
}

.title {
  position: absolute;
  top: 0%;
  left: 42%;
}

.men {
  height: 100%;
  width: 100%;
  background-image: url('../assets/images/male/posing/homePage-male.webp');
  background-size: cover;
  background-position: center;
  
}
.women {
  height: 100%;
  width: 100%;
  background-image: url('../assets/images/female/posing/homePage-female.webp');
  background-size: cover;
  background-position: center;
}

.main-font, .men a, .women a {
  color: white;
}
.men a, .women a {
  text-decoration: none;
  font-weight: 500;
  text-shadow: 1px 1px 3px black;
}

</style>