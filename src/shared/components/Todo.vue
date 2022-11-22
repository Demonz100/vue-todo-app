<template>
    <div class="todo">
        <input v-if="isBeingEdited" type="text" v-model="newTodo" @keyup.enter="handleSaveEdit(todo.id)">
        <h3 v-else>{{ todo.title }}</h3>

        <div class="icons">
            <i class="material-icons" @click="handleEditTodo(todo.id)">
                edit
            </i>
            <i class="material-icons" @click="TodoStore.deleteTodo(todo.id)">
                delete
            </i>
            <i class="material-icons" :class="{ active: todo.isFav }" @click="TodoStore.handleFavorite(todo.id)">
                favorite
            </i>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/TodoStore';
import type { Todo } from '../utils/Todo.Interface';
const props = defineProps<{
    todo: Todo
}>()

const TodoStore = useTodoStore()
let isBeingEdited = ref(false)
let newTodo = ref(props.todo.title)
const handleEditTodo = (id: Number) => {
    isBeingEdited.value = !isBeingEdited.value
}
const handleSaveEdit = (id: Number) => {
    TodoStore.editTodo(id, newTodo.value)
    isBeingEdited.value = false
}
</script>

<style scoped>
.todo {
    padding: 10px 20px;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.todo h3,
.todo .icons {
    display: inline-block;
}

.todo .icons {
    text-align: right;
}

.todo i {
    font-size: 1.4em;
    margin-left: 6px;
    cursor: pointer;
    color: #bbb;
}

.active {
    color: red !important;
}
</style>