import React, { useState } from 'react';
import './App.css';
import AddTask from './components/addTask';
import ListTasks from './components/listTasks';
import TodoList from './models/TodoListModel';


function App() {


  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [display, setDisplay] = useState<string>('none');
  const [ptext, setPtext] = useState<string>('');
  
  const addNewTask =(task : string)=> {
    
    //If task is not empty then add to list
    //let pElement = document.querySelector('.empty-task-message');

    //console.log(pElement);


    if(task.trim().length !=0 )
    {
      setDisplay('none');

      const filtered = todoList.filter((value) => value.task == task);
      console.log('filrered')
      console.log(filtered)
      if (filtered.length==0)
      {
        const newTask = new TodoList(task, 0);

        setTodoList
        (
          //(arrayTodoList) => {return arrayTodoList.concat(newTask);}
          (arrayTodoList) => {return [...arrayTodoList, newTask]}
        );
      }
      else{
        console.log('duplicates!');
        setDisplay('block');
        setPtext('This task is already in your list!');
      }
    }


    else{
      setDisplay('block');
      setPtext('You can not add an empty task!');
    }
  }

  //When Task is done
  const doneTaskHandler = (id: number) => {
    setTodoList
    (
      todoList.map((task) => 
      {
        if (task.id === id) 
        {
          //Change text decotation to line-through 
            if(task.completed===0)
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
  }

  const helpTaskHandler = (id: number) => {
    console.log('On help task handler')

  setTodoList(
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

const deleteTaskHandler = (id: number) => {
  console.log('On delete task handler')
   setTodoList((arrayTodoList) => {
     return arrayTodoList.filter(task => task.id !== id)
  })
}

  return (
    <div className="App">

      <div>
        <p>Assignment TODO list with React and Typescript</p>
        <p>Gutorova Yulia</p>
      </div>

      <AddTask addNewTask={addNewTask}
               display={display}
               ptext = {ptext}></AddTask>

      <ListTasks list={todoList} 
                  allTodos={todoList.length}
                  onDoneTaskHandler={doneTaskHandler}
                  onHelpTaskHandler={helpTaskHandler}
                  onDeleteTaskHandler={deleteTaskHandler}></ListTasks>
    </div>
  );
}

export default App;
