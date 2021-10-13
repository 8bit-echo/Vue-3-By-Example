<template>
  <transition name="slide">
    <div class="toast">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: String,
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  background: rgb(130, 147, 223);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem dimgrey;
  font-weight: 700;
  max-width: 50vw;
}

.slide-enter-active,
.slide-leave-active {
  transition: right 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  right: -50vw;
}
</style>
