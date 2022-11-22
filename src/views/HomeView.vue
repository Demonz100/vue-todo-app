<template>
  <main>
    <div class="d-flex justify-content-between align-items-center todo-menu">
        <div class="d-flex">
          <h4 class="button" @click="tabsComponent = TodoListing">All Todos</h4>
          <h4 class="button" @click="tabsComponent = FavoriteListing">Favorites</h4>
        </div>
        <AddTodo />
    </div>
    <KeepAlive>
      <component :is="tabsComponent" />
    </KeepAlive>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
const AddTodo = defineAsyncComponent(() => import('@/shared/components/AddTodo.vue'))
const TodoListing = defineAsyncComponent(()=> import("@/shared/components/TodoListing.vue"))
const FavoriteListing = defineAsyncComponent(()=> import('@/shared/components/FavoriteListing.vue'))

const tabsComponent = ref(TodoListing)

</script>
<style scoped>
.todo-menu {
    padding-bottom: 1rem;
}
.todo-menu h4{
  margin-right: 1rem;
}
</style>