<template>
  <div class="component-structure">
    <!-- HTML Goes here. -->
    <h1>Open <code>/src/views/01_ComponentStructure.vue</code> in your code editor to see what Vue component code looks like</h1>

    <p>All Vue components will have the following structure.</p>

    <pre class="left contain">
      {{ templateString() }}
    </pre>
  </div>
</template>

<script>
// import other packages and write regular javascript here.
import { ref, reactive, onMounted, onUpdated, onUnmounted } from 'vue';
import templateString from '../assets/templateString';

export default {
  /** All Vue Components will follow the data structure below, none are required and you can use only what you need. */
  name: 'ComponentStructure',

  props: {},

  components: {},

  setup(/* props */) {
    // ref() Takes a value and returns a reactive and mutable ref object. The ref object has a single property .value that points to the inner value.
    const count = ref(0);
    // reactive() is like ref() but for objects and supports reactivity based on deep nesting.
    const nests = reactive({ a: 'shallow', b: { c: 'deep value' } });

    // More on these in Lifecycle Hooks
    onMounted(() => {});
    onUpdated(() => {});
    onUnmounted(() => {});

    // anything returned from setup() can be used in <template>
    return { count, nests, templateString };
  },
};
</script>

<style lang="css" scoped>
/* CSS, SCSS, SASS, Stylus  code goes here */
/* you can add "scoped" in the opening tag to make sure that styles in this file are 100% contained to this component */

pre {
  background: lightgrey;
  padding: 0 1rem;
  font-weight: 600;
}
</style>
