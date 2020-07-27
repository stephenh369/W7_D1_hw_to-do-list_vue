import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            tasks: [],
            newTask: '',
            priority: ''
        },
        methods: {
            saveNewTask: function() {
                this.tasks.push({
                    name: this.newTask,
                    priority: this.priority,
                    isComplete: false
                });
                this.newTask = '';
            },

            deleteTask: function(index) {
                this.tasks.splice(index, 1);
            }
        }
    });
});