import { FC } from 'react';
import {Task} from './types';
import "./day-style.css";

type Props = {
  task: Task;
  handleTaskChange: (updatedTask: Task) => void;
  handleTaskDelete: (taskId: string) => void;
};

const toTitleCase = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const TaskRow:FC<Props> = ({task,handleTaskChange,handleTaskDelete}) => {
  const { id, name,isChecked } = task;
  return (
    <div className='task-row'>
                <input
                  type="checkbox"
                  onChange={(event) => handleTaskChange({...task, isChecked: event.target.checked})}
                  checked={isChecked}
                />
                            <label className={isChecked ? "checked" : ""}>
                              {toTitleCase(name)}
                            </label>
                            <button className="delete-button" title="Remove task" onClick={() => handleTaskDelete(id)}>X</button>
    </div>
  );
};

export default TaskRow;


