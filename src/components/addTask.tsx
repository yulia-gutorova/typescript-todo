import './addTask.css'
import { useRef, useState } from "react"

interface IaddTask {
    addNewTask: (task: string) => void;
}

const AddTask = (props: IaddTask) => {

    const [task, setTask] = useState<string>('');
    const inputTaskElement = useRef<HTMLInputElement>(null)

   
    //Take value from input field add invoke addNewTask function
    const addTaskHandler = (event: React.MouseEvent<HTMLElement>) => 
    {

        let task = inputTaskElement.current!.value;
         
        props.addNewTask(task);
        //Clear input
        //inputTaskElement.current!.value = '';
        setTask('');
    }

    const inputChangeHandler = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.currentTarget.value);
      };


    return (
        <div className="addTask">
            <div>
                <h1>Please, enter your tasks here:</h1>
            </div>

            <div>
                <input className='input-country' 
                    type='text' value={task} 
                    onChange={inputChangeHandler} 
                    ref={inputTaskElement}></input>
                <button onClick={addTaskHandler}>Add task</button>
            </div>
        </div>
    )
}

export default AddTask