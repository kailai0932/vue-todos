<template>
    <div id="app">
        <h1>{{title}}</h1>
        <ul class="todos">
            <li v-for="(todo,index) in todos" :key="index" :id="index">
              <label>
                {{index+1}}.{{todo.value}}
              </label>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import './assets/todos.less'
    import './assets/site.less'
    export default {
        name: 'app',
        data () {
            return {
                title: 'vue-todos',
                todos: [
                  {value: "这是一本Vue2", done: false},
                  {value: "学好Vue2", done: true},
                  {value: "Vue2牛逼", done: false}
                ]
            }
        }
       
    }
</script>