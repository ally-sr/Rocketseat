import './global.css'
import styles from './App.module.css'
import logo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
import { ToDoList } from './ToDoList'
import { useState, FormEvent, ChangeEvent} from 'react';
import { v4 as uuidv4 } from 'uuid';


export interface TaskItem{
    id:string;
    label:string;
    checked: boolean;
}

function App() {
  
  const [newTask, setNewTask] = useState<TaskItem>({id:'',label:'',checked:false});
  const [taskList, setTaskList] = useState<TaskItem[]>([]);


  function deleteItem(deletedItem: string){
    const itemsWithoutItem = taskList.filter(task => {
        return task.id != deletedItem;
    })
    
    setTaskList(itemsWithoutItem)
  }

 
  
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.preventDefault();
    let newTaskItemValue = event.target.value
    const id_uuid = uuidv4()
    
    setNewTask({id: id_uuid, label:newTaskItemValue,checked:false});
  }
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
  
    const newTaskObject: { id: string; label: string; checked:boolean } = {
      id: newTask.id,
      label: newTask.label,
      checked:newTask.checked
    };

    setTaskList([...taskList, newTaskObject]);
  }

  function handleCheckChange(id: string) {
    const updatedTaskList = taskList.map(task => {
      if (task.id === id) {
        return { ...task, checked: !task.checked };
      } else {
        return task;
      }
    });
    setTaskList(updatedTaskList);
  }

  return (
    <main>
      <header className={styles.header}>
          <img src={logo} alt='logotipo com foguete e letreiro "ToDo"'/>
      </header>

      <main className={styles.mainBody}>
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <input onChange={handleNewTaskChange}  className={styles.formInput} type='text' placeholder='Adicione uma nova tarefa'></input>
          <button className={styles.formInputButton} type='submit'>
              Criar <PlusCircle/>
          </button>
        </form>
        <ToDoList tasks={taskList} onDeleteTask={deleteItem} checkChange={handleCheckChange}/>
      </main>

    </main> 
  )
}

export default App
