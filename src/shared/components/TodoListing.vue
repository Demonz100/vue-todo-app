<template>
    <div class="todos">
        <Loading v-if="isLoading" />
        <div v-else v-for="todo in todos" :key="`todo-${todo.id}`">
            <Todo :todo="todo" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/shared/stores/TodoStore'
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, onMounted } from 'vue';

const Loading = defineAsyncComponent(() => import('@/shared/components/Loading.vue'))
const Todo = defineAsyncComponent(() => import('@/shared/components/Todo.vue'))
const todoStore = useTodoStore()

const { todos, isLoading } = storeToRefs(todoStore)

onMounted(() => { todoStore.getTodos() })

</script>

<style>
.todos {
    padding: 2rem 2rem 1rem 2rem;
    border-radius: 8px;
    border: 1px solid rgba(98, 98, 98, 0.212);
}
</style>