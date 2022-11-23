<template>
    <div class="modal-container" v-if="showModal">
        <div class="modal">
            <label for="todo-input">{{ $t('main.addTodo') }}: </label>
            <input type="text" id="todo-input" v-model="newTodo">
            <br>
            <div class="d-flex justify-content-between">
                <button class="button" @click="$emit('close')">{{ $t('main.cancel') }}</button>
                <button class="button" @click="handleAddTodo">{{ $t('main.add') }}</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '../stores/TodoStore';

const props = defineProps<{
    showModal: Boolean
}>()
const emit = defineEmits(['close'])
const TodoStore = useTodoStore()

let newTodo = ref('')

const handleAddTodo = () => {
    TodoStore.addTodo(newTodo.value)
    emit('close')
    newTodo.value = ''
}
</script>