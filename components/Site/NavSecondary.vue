<template>
  <nav class="nav-secondary">
    <ul>
      <li><nuxt-link to="/about">Meet Angela</nuxt-link></li>
      <li><nuxt-link to="/energy-healing">About Energy Healing</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav-secondary {
  li a.nuxt-link-exact-active:hover {
    color: inherit;
    cursor: default;
  }
}
</style>

