import React, { useState } from 'react';
import './App.css';
import AddTask from './components/addTask';
import ListTasks from './components/listTasks';
import TodoList from './models/TodoListModel';


function App() {


  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const [ptext, setPtext] = useState<string>('');
  
  //******************************************
  //Function addNewTask to add a new task to list
  //****************************************** 
  const addNewTask =(task : string)=> {
    
    //If task is not empty then add to list

    if(task.trim().length !== 0 )
    {
      setDisplay(false);

      const filtered = todoList.filter((value) => value.task === task);
      if (filtered.length===0)
      {
        const newTask = new TodoList(task);
        setTodoList
        (
          (arrayTodoList) => {return [...arrayTodoList, newTask]}
        );
      }
      else
      {
        //Show arror message with text when trying to add a duplicated task
        setDisplay(true);
        setPtext('This task is already in your list!');
      }
    }
    else
    {
      //Show arror message with text when trying to add an empty task
      setDisplay(true);
      setPtext('You can not add an empty task!');
    }
  }

  //******************************************
  //Function doneTaskHandler to mark task as done
  //****************************************** 
  /* const doneTaskHandler = (id: number) => {
    setTodoList
    (
      todoList.map((task) => 
      {
        if (task.id === id) 
        {
          //Change text decotation to line-through 
            if(task.completed===0 || task.completed === 2)
            {
              return { ...task, completed: 1 };
            }
            else 
            {return { ...task, completed: 0};
          }         
        }       
        else 
        {
          return task;
        }
      })
    )
  } */

  //******************************************
  //Function helpTaskHadler to mart a task as a problem
  //****************************************** 
/*   const helpTaskHandler = (id: number) => {
    console.log('On help task handler')

    setTodoList
    (
      todoList.map((task) => {
        if (task.id === id) 
        {
          //Change text decotation to underline
          if(task.completed === 0 || task.completed === 1){return { ...task, completed: 2 };}
          else {return { ...task, completed: 0 };}   
        } 
        else 
        {
          return task;
        }
      })
    )
  }
 */
  //******************************************
  //Function deleteTask to delete a task from the list
  //****************************************** 
  const deleteTaskHandler = (id: number) => {
    setTodoList((arrayTodoList) => {
      return arrayTodoList.filter(task => task.id !== id)
    })
  }

  //**************************************************************************************
  //Return component
  //****************************************** 
  return (
    <div className="App">

      <div>
        <p>Assignment TODO list with React and Typescript</p>
        <p>Yulia Gutorova</p>
      </div>

      <AddTask addNewTask={addNewTask}
               display={display}
               ptext = {ptext}></AddTask>

      <ListTasks list={todoList} 
                  allTodos={todoList.length}
                  // onDoneTaskHandler={doneTaskHandler}
                  // onHelpTaskHandler={helpTaskHandler}
                  onDeleteTaskHandler={deleteTaskHandler}></ListTasks>
    </div>
  );
}

export default App;
