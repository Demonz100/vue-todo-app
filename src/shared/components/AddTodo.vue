<template>
    <div>
        <div class="button" @click="showModal = true">
            <p>Add More</p>
            <i class="material-icons">
                add
            </i>
        </div>
        <teleport to="body" v-if="showModal">
            <div class="modal-container">
                <div class="modal">
                    <label for="todo-input">Add Todo: </label>
                    <input type="text" id="todo-input" v-model="newTodo">
                    <br>
                    <div class="d-flex justify-content-between">
                        <button class="button" @click="showModal = false">Cancel</button>
                        <button class="button" @click="handleAddTodo">Add</button>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '../stores/TodoStore';

const TodoStore = useTodoStore()
let showModal = ref(false)

let newTodo = ref('')

const handleAddTodo = () => {
    TodoStore.addTodo(newTodo.value)
    showModal.value = false
}
</script>

<style>
.button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    border: none;
}

.modal-container {
    background-color: rgba(0, 0, 0, 0.441);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.modal {
    background-color: white;
    padding: 2rem;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

input {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid gray;
    margin: 2rem;

}
</style>