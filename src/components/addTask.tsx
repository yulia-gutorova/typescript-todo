import './addTask.css'
import {useState } from "react"

interface IaddTask {

    display    : boolean;
    ptext      : string;
    addNewTask : (task: string) => void;
}

//----------------------------------------------------------
const AddTask = (props: IaddTask) => {

    const [task, setTask] = useState<string>('');

    //******************************************
    //Function addTaskHandler to invoke addNewTask function and clear input field
    //****************************************** 
    const addTaskHandler = (event: React.MouseEvent<HTMLElement>) => {
        props.addNewTask(task);
        //Clear input
        setTask('');
    }

    //******************************************
    //Function inputChangeHandler to handle input
    //****************************************** 
    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    //**************************************************************************************
    //Return component
    //****************************************** 
    return (
        <div className="addTask">

            <div>
                <h1>Please, enter your task here:</h1>
            </div>

            <div>
                <input className='input-country'
                    type='text' 
                    value={task} 
                    onChange={event => inputChangeHandler(event)}>                   
                </input>
                <button onClick={addTaskHandler}>Add task</button>
            </div>

            <div className='error-message-wrapper'>
                <p
                    className='error-message'
                    style={{ visibility: props.display ? 'visible' : 'hidden' }}>
                    {props.ptext}
                </p>
            </div>

        </div>
    )
}

export default AddTask