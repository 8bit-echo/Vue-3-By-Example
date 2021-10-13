<template>
  <Nav />
  <main>
    <router-view @myEventName="handleEvent($event)" />
  </main>
  <footer>{{ globalMessage }}</footer>
  <Toast v-show="message" :message="message" />
</template>

<script>
import Nav from './components/Nav';
import Toast from './components/Toast';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
export default {
  components: {
    Nav,
    Toast,
  },

  setup() {
    const store = useStore();
    const globalMessage = computed(() => store.state.globalMessage);
    const message = ref('');

    const handleEvent = (event) => {
      message.value = event.message;
      setTimeout(() => {
        message.value = '';
      }, 3500);
    };

    return {
      globalMessage,
      handleEvent,
      message,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  padding: 30px;
}

main {
  padding-bottom: 80px;
}

code {
  background-color: rgb(223, 223, 223);
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
}

img {
  max-width: 100%;
}

.contain {
  width: 80%;
  margin: auto;
  max-width: 750px;
}

footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #2c3e50;
  color: white;
  padding: 0.75rem;
  font-size: 0.75rem;
}

.left {
  text-align: left;
}
</style>
