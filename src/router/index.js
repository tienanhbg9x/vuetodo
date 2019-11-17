import Vue from 'vue'
import Router from 'vue-router'
import TodoList from "../components/TodoList";
import Home from "../pages/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'todolist',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
