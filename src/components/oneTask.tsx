import { useState } from 'react';
import '../App.css'
import './oneTask.css'

interface IOneTask {
    task:                string;
    // completed:           number;
    // onDoneTaskHandler:   (event: React.MouseEvent) => void;
    // onHelpTaskHandler:   (event: React.MouseEvent) => void;
    onDeleteTaskHandler: (event: React.MouseEvent) => void;
}


const OneTask = (props: IOneTask) => {
    
const[decoration, setDecoration] = useState('none')

const doneHandler = () => {
    if (decoration === 'none' || decoration === 'wavy underline red 2px') 
    {
        setDecoration('line-through 2px')
    }
    else if (decoration === 'line-through 2px')
    {
        setDecoration('none')
    }       
}

const helpHandler = () => {
    if (decoration === 'none' || decoration === 'line-through 2px') 
    {
        setDecoration('wavy underline red 2px')
    }
    else if (decoration === 'wavy underline red 2px')
    {
        setDecoration('none')
    }       
}


    //Set properties to change colors
/*     let decoration;
    if (props.completed === 0) { decoration = 'none'}
    if (props.completed === 1) { decoration = 'line-through 2px' }
    if (props.completed === 2) { decoration ='wavy underline red 2px' } */

  //**************************************************************************************
  //Return component
  //****************************************** 
/*     return (
        <>
            <tr>
                <td style={{ textDecoration: decoration }}><h3>{props.task}</h3></td>              
                <td>
                    <button onClick={props.onDoneTaskHandler}><i className="fa-solid fa-face-grin-wide fa-xl"></i></button>
                    <button onClick={props.onHelpTaskHandler}><i className="fa-solid fa-face-sad-tear fa-xl"></i></button>
                    <button onClick={props.onDeleteTaskHandler}><i className="fa-solid fa-trash-can fa-xl"></i></button>
                </td>
            </tr>
        </>
    ) */

        return (
        <>
            <tr>
                <td style={{ textDecoration: decoration }}><h3>{props.task}</h3></td>              
                <td>
                    <button onClick={doneHandler}><i className="fa-solid fa-face-grin-wide fa-xl"></i></button>
                    <button onClick={helpHandler}><i className="fa-solid fa-face-sad-tear fa-xl"></i></button>
                    <button onClick={props.onDeleteTaskHandler}><i className="fa-solid fa-trash-can fa-xl"></i></button>
                </td>
            </tr>
        </>
    )
}

export default OneTask