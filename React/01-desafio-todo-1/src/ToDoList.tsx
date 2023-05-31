import { ClipboardText } from 'phosphor-react';
import styles from './ToDoList.module.css';
import { ToDoListItem } from './ToDoListItem';
import {TaskItem} from './App'

interface TaskListProps {
    tasks: TaskItem[];
    onDeleteTask: (id: string) => void;
    checkChange:(id: string) => void;
}


function isEmpty() {
  const toDoBoxContent = document.querySelector(`.${styles.toDoBoxContent}`) as HTMLElement;

  if (toDoBoxContent?.querySelector(`.${styles.toDoBoxEmptyContent}`)) {

    toDoBoxContent.style.borderTop = '1px solid var(--gray-400)';
  }
}

window.onload = isEmpty;




export function ToDoList({checkChange,onDeleteTask,...props}: TaskListProps){
    
    const tasks = props.tasks
    const completedTasks = (tasks.filter(task => {
        return task.checked
    }))

    return (

        <div className={styles.toDoBox}>
            <header className={styles.toDoBoxHeader}>
                <div className={styles.toDoBoxHeaderStatusBar}>
                    <div className={styles.toDoBoxHeaderStatusBarTasks}>
                        <p>Tarefas Criadas</p> <span>{tasks.length}</span>
                    </div>
                    <div>
                        <p className={styles.toDoBoxHeaderStatusBarCompletedTasks}>Concluídas <span>{ completedTasks.length == 0 ? completedTasks.length : `${completedTasks.length} de ${tasks.length}`}</span>
                        </p>
                    </div>
                </div>
            </header>
            <div className='mainDiv'>
                <div className={styles.toDoBoxContent}>
                    {tasks.length > 0 ? (
                        tasks.map((task) => 
                            <ToDoListItem key={task.id} id={task.id} label={task.label} onDelete={onDeleteTask} onCheckChange={checkChange} checked={task.checked}/>
                        )
                        ): (
                        <>
                            
                            <div className={styles.toDoBoxEmptyContent}>
                                <div><ClipboardText size={56}/></div>
                                <h4>Você ainda não tem tarefas cadastradas</h4>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </> 
                    )}
                    
                </div>

            </div>
        </div>


    )


}