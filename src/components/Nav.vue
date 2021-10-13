<template>
  <div id="nav">
    <router-link v-for="route in routes" :to="route.path" :key="route.path">{{ route.name }}</router-link>
  </div>
</template>

<script>
import { routes } from '../router/index';

export default {
  setup() {
    return { routes };
  },
};
</script>

<style lang="scss">
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 1rem;
    line-height: 2;
  }

  a.router-link-exact-active {
    color: #43b983;
  }
}
</style>
