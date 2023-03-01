import OneTask from './oneTask'
import './listTasks.css'
import TodoList from '../models/TodoListModel';

interface IListTasks {
  list: TodoList[];
  allTodos: number;
  onDeleteTaskHandler: (id: number) => void;
}

//----------------------------------------------------------
const ListTasks = (props: IListTasks) => {

  //Create a variable to remove map from return
  const listOfTasks = props.list.map((item) =>
  (
    <OneTask
      key={item.id}
      task={item.task}
      onDeleteTaskHandler={() => props.onDeleteTaskHandler(item.id)}
    />
  )
  )

  //**************************************************************************************
  //Return component
  //****************************************** 
  return (
    <div className='list-of-tasks' style={{ backgroundColor: props.allTodos !== 0 ? "rgb(219, 217, 217)" : "white" }}>
      {props.allTodos !== 0 && <h2> Your tasks:</h2>}
      <hr />
      <table className='table'>
        <tbody>
          {listOfTasks}
        </tbody>
      </table>
    </div>
  )
}

export default ListTasks



