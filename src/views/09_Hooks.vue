<template>
  <div class="hooks">
    <h1>Hooks</h1>
    <p>The same way vue templates allow you to reuse markup, Hooks allow you to reuse logic</p>
    <p>Consider the examples below where we haved 2 To Do Lists</p>
    <Footnote message="Hook names all start with the word 'use' " type="note" />

    <div class="example contain left">
      <h2>Chores</h2>
      <input v-model="newChore" @keypress.enter="addChore()" placeholder="add a chore" />
      <ul>
        <li v-for="(chore, i) in chores" :key="chore" @click="removeChore(i)">{{ chore }}</li>
      </ul>
    </div>
    <hr class="contain" />
    <div class="example contain left">
      <h2>Groceries</h2>
      <input v-model="newGrocery" @keypress.enter="addGrocery()" placeholder="add groceries" />
      <ul>
        <li v-for="(grocery, i) in groceries" :key="grocery" @click="removeGrocery(i)">{{ grocery }}</li>
      </ul>
    </div>
    <br />
    <p class="contain">
      Instead of writing 2 arrays, 2 text fields, and 4 methods for add / remove, we can use the hook to do it all for us and return fully reactive elements
      that can be used across our entire app, or imported to other projects that might use the same functionality.
    </p>
  </div>
</template>

<script>
import Footnote from '../components/Footnote';
import useTodo from '../hooks/useTodo';
export default {
  components: { Footnote },
  setup() {
    const [chores, newChore, addChore, removeChore] = useTodo();
    const [groceries, newGrocery, addGrocery, removeGrocery] = useTodo();

    return {
      chores,
      newChore,
      addChore,
      removeChore,
      groceries,
      newGrocery,
      addGrocery,
      removeGrocery,
    };
  },
};
</script>

<style scoped>
ul {
  text-align: left;
}

li:hover {
  cursor: pointer;
  text-decoration: line-through;
}
</style>
