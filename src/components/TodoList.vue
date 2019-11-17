<template>
    <div>
        <h1>Hello</h1>
        <label>
            <input type="text" class="todo-input" placeholder="what needs to be done" v-model="newTodo" >
        </label>
        <div v-for="todo in todos" v-bind:key="todo.id">
            {{ todo.title }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        data () {
            return {
                newTodo: '',
                todos:[
                    {
                        'id':1,
                        'title':'hello Tien Anh',
                        'completed': false
                    },
                    {
                        'id':2,
                        'title':'hello Tien Anh 2',
                        'completed': false
                    }
                ]

            }
        }
    }
</script>

<style scoped>

</style>