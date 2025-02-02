import { useState, useEffect } from "react";
import "./day-style.css";
import TaskRow from "./Task";
import { Task, Tasks } from "./types";
import formatDate from "./utils/formatDate";
import DateTime from "./DateTime";
import getWeekDay from "./utils/getWeekDay";


const ToDo = () =>{

  const [date, setDate] = useState<string>(formatDate(new Date())); 
  const [tasks, setTasks] = useState<Tasks>([]);
  const [inputValue, setInputValue] = useState<string>('');

  
  const selectedDateTasks = tasks.filter(task => task.date === date);
  const saveTasks = (tasks:Tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  const handleTaskCreate = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue) {
      const newTask: Task = {
        id: Math.random().toString(36).substring(2, 10),
        name: inputValue,
        isChecked: false,
        date: date
      }
      const newTasks = [...tasks, newTask]
      setTasks(newTasks)
      saveTasks(newTasks)
      setInputValue('');
  }
  }

  // Function to accept changed task and update the tasks state
   const handleTaskChange = (updatedTask: Task) => {
    const updatedTasks:Tasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    })
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }

  const handleTaskDelete = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  }

  
  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const itemsFromLocalStorage = localStorage.getItem("tasks") ?? '';
    const storedTasks:Tasks = itemsFromLocalStorage ? JSON.parse(itemsFromLocalStorage) : [];
    setTasks(storedTasks);
  }, []);

  
  return (
    <div>
      <div className="container">
                  <header>
                  <h2>Things to Do</h2>
                    <DateTime 
                      date={date}
                      setDate={setDate}
                    />
                  </header>
                  <div>        
                  <form onSubmit={handleTaskCreate}>
                      <input
                        type="text"
                        className="task-input"
                        name='name'
                        placeholder={`Add task for ${getWeekDay(date)}`}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <input type="submit" value="Add" className="submit-button" />
                    </form>
                    <div className="tasks-list">
                      {
                        selectedDateTasks.map(task => <TaskRow key={task.id} task={task} handleTaskChange={handleTaskChange} handleTaskDelete={handleTaskDelete} />)
                      }
                    </div>
                  </div>
      </div>
      <footer>Open <a href="https://github.com/AnnikaLaanemets/ToDo" target="_blank" title="source code on github">source</a> code by Annika Laanemets</footer>
      </div>
  );
}

export default ToDo;

