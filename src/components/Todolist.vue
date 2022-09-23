<template>
  <div class="container">
    <h1 class="text-center">My Todolist</h1>

    <div class="d-flex">
      <input
        v-model="todo"
        type="text"
        placeholder="Enter your todos here"
        class="form-control"
      />
      <button @click="savingTodo" class="btn btn-primary rounded-2">
        Saving
      </button>
    </div>
    <div style="margin-top: 25px"></div>
    <table class="table table-striped table-secondary">
      <thead>
        <tr>
          <th scope="col">Order</th>
          <th scope="col">Todos</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center">Editing</th>
          <th scope="col" class="text-center">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, id) in todos" :key="id">
          <td>{{ id }}</td>
          <td>{{ todo.name }}</td>
          <td>
            <span @click="changeStatus(id)" class="pointer">
              {{ todo.status }}
            </span>
          </td>
          <td class="text-center">
            <div @click="editTodo(id)">
              <p class="fa fa-edit"></p>
            </div>
          </td>
          <td>
            <div class="text-center" @click="deleteTodo(id)">
              <span class="fa fa-trash-can"></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      todo: " ",
      editedTodo: null,
      availability: ["ToDo", "Doing", "Done"],

      todos: [],
    };
  },
  methods: {
    savingTodo() {
      if (this.todo.length === 0) return;

      if (this.editedTodo === null) {
        this.todos.push({
          name: this.todo,
          status: "ToDo",
        });
      } else {
        this.todos[this.editedTodo].name = this.todo;
        this.editedTodo = null;
      }

      this.todo = "";
    },

    deleteTodo(id) {
      this.todos.splice(id, 1);
    },

    editTodo(id) {
      this.todo = this.todos[id].name;
      this.editedTodo = id;
    },
    changeStatus(id) {
      let newID = this.availability.indexOf(this.todos[id].status);
      if (++newID > 2) newID = 0;
      this.todos[id].status = this.availability[newID];
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
