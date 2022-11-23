<template>
    <div>
        <div class="button" @click="showModal = true">
            <p>{{ $t('main.addMore') }}</p>
            <i class="material-icons">add</i>
        </div>
        <Transition name="modal">
            <AddModal :showModal="showModal" @close="showModal = false"/>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
const AddModal = defineAsyncComponent(()=>import('@/shared/components/AddModal.vue'))

let showModal = ref(false)
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
    /* position: absolute; */
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    transition: opacity 0.3s ease;
}

.modal {
    background-color: white;
    padding: 2rem;
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

input {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid gray;
    margin: 2rem;

}

/* Transition */
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>