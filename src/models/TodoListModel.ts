
class TodoList{
    id: number;
    task: string;
    completed: number;

    constructor(todoTask : string, todoCompleted: number){
        this.id = Math.random()
        this.task = todoTask
        this.completed = todoCompleted;
    }
}
export default TodoList