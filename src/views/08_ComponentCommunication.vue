<template>
  <div class="component-communication">
    <h1>Component Communication</h1>
    <p>We've seen that components can communicate from Parent to child through props, but what about more complex scenarios?</p>

    <section class="example">
      <h2>Vuex - The Global Store (Robust)</h2>
      <p>
        Vuex is a separate library that allows you to access your entire application state from anywhere in the app. See the <code>store</code> folder for
        configuration examples.
      </p>
      <p><b>Global Message:</b> {{ globalMessage }}</p>
      <button @click="changeGlobalMessage('I was changed!')">Change message</button>

      <p>
        <b>Get Random Dad Joke from an API:</b>
        <br />
        {{ joke }}
      </p>
      <button @click="getJoke">get Joke from API</button>
    </section>

    <section class="example">
      <h2>Child to Parent (Light weight)</h2>
      <p>
        If we want to send a mesage from this component to its parent (App.vue), we can emit a message with some data, and then listen for that message in the
        parent.
      </p>
      <p>
        In the Child Component:
        <code> &lt;button @click="$emit('myEventName', somePayload) /&gt; </code>
      </p>

      <p>
        In the Parent:
        <code>&lt;Component @myEventName="methodToHandle($event)"/&gt;</code>
      </p>

      <Footnote type="warning" message="Your event handler must pass $event as an argument" />

      <button @click="$emit('myEventName', { message: 'Emitted from Comunication Component. Displayed By App.vue' })">Emit message to Parent</button>
    </section>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Footnote from '../components/Footnote';
export default {
  components: {
    Footnote,
  },
  setup() {
    const store = useStore(); // store is defined in /store.index.js

    // state properties from Vuex should be wrapped in computed() to make sure they stay reactive.
    const globalMessage = computed(() => store.state.globalMessage);
    // store.commit is for mutations (regular functions)
    const changeGlobalMessage = (payload) => store.commit('changeGlobalMessage', payload);

    // store.dispatch is for actions (async functions)
    const getJoke = () => store.dispatch('getJoke');
    const joke = computed(() => store.state.joke);

    return {
      globalMessage,
      changeGlobalMessage,
      joke,
      getJoke,
    };
  },
};
</script>

<style scoped>
.example {
  padding-bottom: 2rem;
  border-top: solid 1px grey;
}
</style>
