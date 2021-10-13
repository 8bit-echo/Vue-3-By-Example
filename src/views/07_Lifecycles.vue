<template>
  <div class="lifecycles">
    <h1>Lifecycle Hooks</h1>
    <p>Vue exposes several lifecycle hooks that you can use to control your component's behavior at key points.</p>
    <Footnote message="open the developer console to see when the different hooks run" />

    <button @click="updateNumber += 1">Click here to trigger an update: {{ updateNumber }}</button>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
import Footnote from '../components/Footnote';
export default {
  components: { Footnote },

  // setup runs when the component is created, but before it renders anything for the first time
  setup() {
    const updateNumber = ref(0);

    // Runs when template renders for the first time
    onMounted(() => {
      console.log(`onMounted()   -- type of updateNumber: ${typeof updateNumber.value}, value: ${updateNumber.value}`);
    });

    // runs when the template re-renders
    onUpdated(() => {
      console.log(`onUpdated()   -- type of updateNumber: ${typeof updateNumber.value}, value: ${updateNumber.value}`);
    });

    // runs when the template is destroyed
    onUnmounted(() => {
      console.log(`onUnmounted() -- type of updateNumber: ${typeof updateNumber.value}, value: ${updateNumber.value}`);
    });

    return {
      updateNumber,
    };
  },
};
</script>
