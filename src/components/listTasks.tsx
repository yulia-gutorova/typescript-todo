import OneTask from './oneTask'
import './listTasks.css'
import TodoList from '../models/TodoListModel';

interface IListTasks {
  list: TodoList[];
  allTodos: number;
  onDoneTaskHandler: (id: number) => void;
  onHelpTaskHandler: (id: number) => void;
  onDeleteTaskHandler: (id: number) => void;
}

const ListTasks = (props: IListTasks) => {

  return (
    <div className='list-of-tasks' style={{ backgroundColor: props.allTodos !== 0 ? "rgb(219, 217, 217)" : "white" }}>
      {props.allTodos !== 0 && <h2> Your tasks:</h2>}
      <hr />
      <table className='table'>

        {props.list.map((item) => 
        (
          <OneTask
            key={item.id}
            task={item.task}
            completed={item.completed}
            onDoneTaskHandler={() => props.onDoneTaskHandler(item.id)}
            onHelpTaskHandler={() => props.onHelpTaskHandler(item.id)}
            onDeleteTaskHandler={() => props.onDeleteTaskHandler(item.id)}
          />
        )
        )
        }

      </table>
    </div>
  )
}

export default ListTasks



