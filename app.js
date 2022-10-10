const app = Vue.createApp({
    data(){
        return{
            description: "Todo List",
            todo:'',
            todos: [],
        }
    },
    methods: {
        storeTodo(){
            this.todos.push(this.todo)
        },
        editTodo(todo){
            this.todos[this.todos.indexOf(todo)] = this.todo
        },
        deleteTodo(todo){
            delete this.todos[this.todos.indexOf(todo)]
        }
    }


})


app.mount("#todolist")