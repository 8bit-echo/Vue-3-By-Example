<template>
  <div class="data-binding">
    <h1>Data Binding</h1>
    <p class="small">Vue uses 2-way data binding. this means that no matter where you change your data from, it is reflected everywhere that it is used.</p>

    <input type="text" v-model="userInput" placeholder="what's your full name?" :style="{ color: textColor }" />
    <p>your name is {{ userInput }}</p>
    <p>your first name is {{ firstName }}</p>

    <div>
      <label>
        <p class="small">Change the Text Input Color:</p>
        <input type="color" v-model="textColor" />
      </label>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  name: 'Data Binding',
  setup() {
    const userInput = ref('');
    const textColor = ref('#000000');

    // computed properties are raw data that needs to be transformed in some way.
    // in this case we only want the first word from whatever userInput is.
    const firstName = computed(() => userInput.value.split(' ')[0] ?? userInput);

    // anything in this return statement is exposed to the template.
    return {
      userInput,
      firstName,
      textColor,
    };
  },
};
</script>

<style lang="css" scoped>
input[type='text'] {
  width: 80%;
  padding: 0.5rem 0.25rem;
  font-size: 20px;
  color: orangered;
}

p {
  font-size: 1.5rem;
  font-weight: bold;
}

p.small {
  font-size: 1rem;
  font-weight: normal;
}
</style>
