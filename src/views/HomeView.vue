<template>
  <main>
    <div class="d-flex justify-content-between align-items-center todo-menu">
        <div class="d-flex">
          <h4 class="button" @click="tabsComponent = TodoListing">{{ $t('main.allTodo') }}</h4>
          <h4 class="button" @click="tabsComponent = FavoriteListing">{{ $t('main.favorites') }}</h4>
          <h4 class="button" @click="tabsComponent = CompletedListing">{{ $t('main.allCompleted') }}</h4>
        </div>
        <AddTodo />
    </div>
      <Transition name="fade" mode="out-in">
        <KeepAlive>
          <component :is="tabsComponent" />
        </KeepAlive>
      </Transition>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent, shallowRef } from 'vue';
const AddTodo = defineAsyncComponent(() => import('@/shared/components/AddTodo.vue'))
const TodoListing = defineAsyncComponent(()=> import("@/shared/components/TodoListing.vue"))
const FavoriteListing = defineAsyncComponent(()=> import('@/shared/components/FavoriteListing.vue'))
const CompletedListing = defineAsyncComponent(()=> import('@/shared/components/CompletedListing.vue'))

const tabsComponent = shallowRef(TodoListing)
</script>

<style scoped>
.todo-menu {
    padding-bottom: 1rem;
}
.todo-menu h4{
  margin-right: 1rem;
}
</style>