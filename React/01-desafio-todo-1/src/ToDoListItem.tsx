import { Trash } from 'phosphor-react';
import styles from './ToDoListItem.module.css';

interface TaskItemProps{
    id:string;
    label:string;
    checked: boolean;
    onDelete: (id: string) => void;
    onCheckChange: (id: string) => void;
}





export function ToDoListItem({onCheckChange,onDelete, ...props}:TaskItemProps){
    function handleDeleteItem(){
        onDelete(props.id)
    };

    function handleCheckedChange(){
        onCheckChange(props.id)
    }

    return (
        
        <div  className={styles.toDoListItemBody}>
            <form>
                <input
                    id={props.id}
                    key={props.id}
                    type="radio"
                    name="task"
                    onChange={handleCheckedChange}
                    checked={props.checked}
                    onClick={handleCheckedChange}
                />
                <label>
                    {props.label}
                </label>
            </form>
                <button onClick={handleDeleteItem}>
                    <Trash size={16}/>
                </button>
        </div>

    )
}