<template>
  <nav class="nav-primary">
    <ul>
      <li><nuxt-link to="/offerings">Offerings</nuxt-link></li>
      <li><nuxt-link to="/video-library">Videos</nuxt-link></li>
      <li><nuxt-link to="/journal">Journal</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav-primary {
  li a:hover,
  li a.nuxt-link-exact-active {
    color: black;
    border-bottom: 1px solid black;
  }
  li a.nuxt-link-exact-active:hover {
    color: black;
    cursor: default;
  }
}
</style>