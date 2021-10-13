import { ref } from 'vue';

export default function useTodo() {
  const list = ref([]);
  const newItem = ref('');

  const addItem = () => {
    list.value.push(newItem.value);
    newItem.value = '';
  };

  const removeItem = (i) => {
    list.value.splice(i, 1);
  };

  return [list, newItem, addItem, removeItem];
}
