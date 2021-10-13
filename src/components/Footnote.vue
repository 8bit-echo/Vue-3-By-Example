<template>
  <div :class="['footnote', type]">
    <div class="slot">
      <slot></slot>
    </div>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Footnote',
  props: {
    type: String,
    message: String,
  },
};
</script>

<style scoped>
.footnote {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 75%;
  margin: 1rem auto;
  text-align: left;
  max-width: 600px;
  border-left: solid 5px;
  font-style: italic;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgb(240, 240, 240);
  border-color: dimgray;
}

p {
  margin: 0;
}

.slot {
  max-width: 2rem;
  margin-right: 0.5rem;
}
.note {
  background-color: #fffbe2;
  border-color: gold;
}

.warning {
  background-color: #fff0e2;
  border-color: rgb(255, 136, 0);
}

.okay {
  background-color: rgb(215, 235, 215);
  border-color: rgb(0, 189, 0);
}

.error {
  background-color: #ffd9d9;
  border-color: crimson;
}
</style>
