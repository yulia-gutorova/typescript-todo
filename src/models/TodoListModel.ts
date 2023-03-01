
class TodoList{
    id: number;
    task: string;
    // completed: number;

    constructor(task : string){
        this.id = Math.random()
        this.task = task
        // this.completed = completed;
    }
}
export default TodoList