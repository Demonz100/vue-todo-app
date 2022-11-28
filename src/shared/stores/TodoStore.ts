import { querySnapshot, datas } from "./../services/get_all_todos";
import { defineStore } from "pinia";
import type { Todo } from "./../utils/Todo.Interface";
import type { TodoStore } from "@/shared/utils/TodoStore.Interface";

export const useTodoStore = defineStore("useTodoStore", {
  state: (): TodoStore => ({
    todos: [],
    isLoading: false,
    showToast: false,
  }),

  getters: {
    getAllFavorites(state) {
      return state.todos.filter((f) => f.isFav == true);
    },
    getAllCompleted(state) {
      return state.todos.filter((f) => f.isCompleted == true);
    },
  },

  actions: {
    async getTodos() {
      this.isLoading = true;

      // querySnapshot.forEach((res:any) => {
      //   this.todos.push(res.data())
      // });
      // console.log(datas);
      
      // this.todos = datas
      querySnapshot
      console.log(datas);
      
      

      this.todos.sort((a) => (a.isCompleted == true ? 1 : -1));

      this.isLoading = false;
    },

    async addTodo(newTodo: String) {
      const todo: Todo = {
        title: newTodo,
        isFav: false,
        isCompleted: false,
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
    },

    async deleteTodo(id: Number) {
      this.todos = this.todos.filter((d) => d.id != id);

      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_API_URL}todos` + "/" + id,
          {
            method: "DELETE",
          }
        );
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }

      this.showToast = true;
      setTimeout(() => (this.showToast = false), 2000);
    },

    async handleFavorite(id: Number) {
      const todo = this.todos.find((f) => f.id === id);
      if (todo) {
        todo.isFav = !todo.isFav;
      }

      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_API_URL}todos` + "/" + id,
          {
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify({ isFav: todo?.isFav }),
          }
        );
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }
    },

    async handleCompleted(id: Number) {
      const todo = this.todos.find((f) => f.id === id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }

      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_API_URL}todos` + "/" + id,
          {
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify({ isCompleted: todo?.isCompleted }),
          }
        );
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }
    },

    async editTodo(id: Number, newTodo: String) {
      const todo = this.todos.find((f) => f.id === id);
      if (todo) {
        todo.title = newTodo;
      }

      try {
        const res = await fetch(
          `${import.meta.env.VITE_APP_API_URL}todos` + "/" + id,
          {
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify({ title: newTodo }),
          }
        );
      } catch (error) {
        console.log(`An error has occured: ${error}`);
      }
    },
  },
});
