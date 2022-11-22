import { defineStore } from "pinia";
import type { Todo } from "./../utils/Todo.Interface";
import type { TodoStore } from "@/shared/utils/TodoStore.Interface";

export const useTodoStore = defineStore("useTodoStore", {
  state: (): TodoStore => ({
    todos: [],
    isLoading: false,
  }),

  getters:{
    getAllFavorites(state) {
      return state.todos.filter(f => f.isFav == true)
    }
  },

  actions: {
    async getTodos() {
      this.isLoading = true;
      
      try {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}todos`);

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

        this.todos = await res.json();
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }

      this.isLoading = false;
    },

    async addTodo(newTodo: String) {
      this.isLoading = true;

      const todo: Todo = {
        id: Math.floor(Math.random() * 100000),
        title: newTodo,
        isFav: false,
      };

      try {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}todos`, {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(todo),
        });
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }

      this.todos.push(todo);

      this.isLoading = false;
    },

    async deleteTodo(id: Number) {
      this.isLoading = true;

      this.todos = this.todos.filter((d) => d.id != id);

      try {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}todos` + "/" + id, {
          method: "DELETE",
        });
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }

      this.isLoading = false;
    },

    async handleFavorite(id: Number) {
      const todo = this.todos.find((f) => f.id === id);
      if (todo) {
        todo.isFav = !todo.isFav;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}todos` + "/" + id, {
          headers: { "Content-Type": "application/json" },
          method: "PATCH",
          body: JSON.stringify({ isFav: todo?.isFav }),
        });
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }
    },

    async editTodo(id: Number, newTodo: String){
      const todo = this.todos.find((f) => f.id === id);
      if (todo) {
        todo.title = newTodo
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_APP_API_URL}todos` + "/" + id, {
          headers: { "Content-Type": "application/json" },
          method: "PATCH",
          body: JSON.stringify({ title: newTodo }),
        });
        
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }
    }
  },
});
