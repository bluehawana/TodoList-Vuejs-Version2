<template>
  <div class="container">

      <h1 class="text-center ">My Todolist</h1>

  <div class="d-flex">
<input v-model ="todo" type="text" placeholder="Enter your todos here" class="form-control">
<button @click="savingTodo" class="btn btn-primary rounded-2">Saving</button>  
</div>
<div style="margin-top: 25px">    </div>
<table class="table table-striped table-secondary">
  <thead>
    <tr >
      <th scope="col">Order</th>
      <th scope="col">Todos</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center">Editing</th>
      <th scope="col" class="text-center">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(todo,key,index) in todos" :key="index" >
      <td>{{key}}</td>
      <td>{{todo.name}}</td>
      <td>{{todo.status}}</td>
      <td>
        <div class="text-center">
          <span class="fa fa-edit"></span>
        </div>
      </td>
      <td><div class="text-center" @click="deleteTodo(index)">
          <span class="fa fa-trash-can"></span>
        </div></td>
    </tr>
  </tbody>
</table>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      todo:'hello works 785965 ',
      todos: [
        {
          name: 'Play padel with kris.',
          status: 'Todo'

        },
        {
          name: 'Play padel with kris.',
          status: 'Todo'

        }
      ]
    }
 },
      methods: {
      savingTodo(){
          if (this.todo.length === 0) return;

          this.todos.push({
          
            name: this.todo,
            status:'ToDo'
          })
        },
        deleteTodo(index) {
          this.todos.splice(index, 1);
  }
}
 
};
</script>
