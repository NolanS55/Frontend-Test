'use client'
import React, { useState } from 'react';
import styles from './test.module.css';

export default function Test(): JSX.Element {
  //State management
  const [Tasks, setTasks] = useState<{ name: string; body: string }[]>([]);
  const [error, setError] = useState("");

  //Use name and body to live update the form
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  //States to check what task is being edited and the content of the edit
  const [editBody, setEditBody] = useState("");
  const [editedTask, setEditedTask] = useState(-1);


  //Handles adding a new task
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(name, body);
    setName("");
    setBody("");
  };

  //Handles when a edited task is saved
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTask(editBody, editedTask);

    //Reset Edited task variables 
    setEditedTask(-1);
    setEditBody("");
  };

  const editTask = (editBody: string, editedTask: number) => {
    if (editBody === "") {
        setError("Body can not be empty");
        return;
      }
    //Copy the array and update the task with its new body
    const updatedTasks = [...Tasks];
    updatedTasks[editedTask].body = editBody;
    setTasks(updatedTasks);
  };

  const addTask = (name: string, body: string) => {
    //Error Handling
    if (name === "" || body === "") {
      setError("All fields must be filled");
      return;
    }

    //Push the new task into the Tasks Array
    const newTask = { name, body };
    setTasks(prevTasks => [...prevTasks, newTask]);

    //Reset the Error
    setError("");
  };

  const delTask = (index: number) => {
    const updatedTasks = [];

    //Removes task at specific index
    for (let i = 0; i < Tasks.length; i++) {
      if (i !== index) {
        updatedTasks.push(Tasks[i]);
      }
    }
  
    
    setTasks(updatedTasks);
  };

  //Sets editing variables
  const setEditTask = (index: number) => {
    setEditBody(Tasks[index].body);
    setEditedTask(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.addTask}>

        {/* Form for handling */}
        <form className={styles.taskForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
          <button type="submit" className={styles.addBtn}>Add Task</button>
        </form>
      </div>

      {/* Error Displayed if form fields are empty */}
      {error && <p className={styles.error}>{error}</p>}

      {Tasks.map((task, index) => (
        <div key={index} className={styles.task}>
          {index === editedTask ? (
            <div>
              <p className={`${styles.taskName} ${styles.special}`}>Editing: {task.name} </p>

              {/* Form element for editing the body of a task */}
              <form className={styles.taskForm} onSubmit={handleEditSubmit}>
                <input type="text" placeholder={task.body} value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                <button type="submit" className={styles.taskSaveEdit}>Save Task</button>
              </form>


              <button className={styles.taskDelEdit} onClick={() => delTask(index)}>Delete</button>
            </div>
          ) : (
            <div>

              <p className={styles.taskName}>{task.name}</p>
              <p className={styles.taskBody}>{task.body}</p>
              <button className={styles.taskDel} onClick={() => delTask(index)}>Delete</button>

              {/* Removes edit button from tasks if task is currently being edited */}
              {editedTask === -1 && (
                <button className={styles.taskEdit} onClick={() => setEditTask(index)}>Edit</button>
              )}

            </div>
          )}
        </div>
      ))}
    </div>
  );
}