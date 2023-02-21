import '../App.css'
import './oneTask.css'

interface IOneTask {
    task: string;
    completed: number;
    onDoneTaskHandler : (event: React.MouseEvent) => void; 
    onHelpTaskHandler : (event: React.MouseEvent) => void; 
    onDeleteTaskHandler : (event: React.MouseEvent) => void;
}


const OneTask = (props : IOneTask) => {

    let color;
    if(props.completed === 0) {color = "white"} 
    if(props.completed === 1) {color = "lightgreen"}
    if (props.completed === 2) {color = "red"}


    console.log(props.task)

    return(
        <>
        <tr>
            <td style={{ backgroundColor: color }}><h3>{props.task}</h3></td>
            <td>
                <button onClick={props.onDoneTaskHandler}>Done</button>
                <button onClick={props.onHelpTaskHandler}>Help!</button>
                <button onClick={props.onDeleteTaskHandler}>Delete</button>
            </td>
        </tr>
        
        </>

    )
}

export default OneTask