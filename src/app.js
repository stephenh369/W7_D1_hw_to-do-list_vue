import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            tasks: [],
            newTask: ''
        },
        methods: {
            saveNewTask: function() {
                this.tasks.push({
                    name: this.newTask,
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