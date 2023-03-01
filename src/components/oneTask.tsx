import { useState } from 'react';
import '../App.css'
import './oneTask.css'

interface IOneTask {
    task:                string;
    onDeleteTaskHandler: (event: React.MouseEvent) => void;
}

//----------------------------------------------------------
const OneTask = (props: IOneTask) => {
    
    const[decoration, setDecoration] = useState('none')

    //******************************************
    //Function doneHandler to set text decoration style when clicking on done-icon
    //****************************************** 
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

    //******************************************
    //Function helpHandler to set text decoration style when clicking on help-icon
    //****************************************** 
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

  //**************************************************************************************
  //Return component
  //****************************************** 

    return (
        <>
            <tr>
                <td style={{ textDecoration: decoration }}><li>{props.task}</li></td>              
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