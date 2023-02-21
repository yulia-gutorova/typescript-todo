import './addTask.css'
import { useRef } from "react"

interface IaddTask {
    addNewTask: (task: string) => void;   
}

const AddTask = (props: IaddTask) => {

     const inputTaskElement =useRef<HTMLInputElement>(null)

     const addTaskHandler = (event : React.MouseEvent<HTMLElement>)=>{
        console.log('Add task handler');
        let task = inputTaskElement.current!.value;
        console.log(task);
        props.addNewTask(task);
        inputTaskElement.current!.value = '';
     }


    return (
        <div className="addTask">
            <div>
                <h1>Please, enter your tasks here:</h1>
            </div>
            
            <div>
                <input className='input-country'  type='text' ref={inputTaskElement}></input>
                <button onClick={addTaskHandler}>Add task</button>
            </div>
            
            
        </div>

    )
}
export default AddTask