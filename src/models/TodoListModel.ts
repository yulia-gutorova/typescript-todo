
class TodoList{
    id: number;
    task: string;
    completed: number;

    constructor(task : string, completed: number){
        this.id = Math.random()
        this.task = task
        this.completed = completed;
    }
}
export default TodoList