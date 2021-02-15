import TaskModel, { priorities } from "models/Task";
import React from "react";
import { ListGroup } from 'react-bootstrap';
import Task from "./Task";


const ToDoList = () => {
  const list = [
    {
      id:1,
      title: "Finir le td",
      priority: priorities.low,
      completed : false,
    },
    {
      id:2,
      title: "manger une banane",
      priority: priorities.high,
      completed : true,
    },
   {
      id:3,
      title: "chier une pandule",
      priority: priorities.medium,
      completed : false,
    },

  ];

  const updateCompleted = (completed, task) => {
    console.log(completed, task);
  };

  return( <ListGroup> 
    { list.map((tach) => (
      <Task task={ new TaskModel(tach)} update ={updateCompleted} key={tach.id} />
      ))}
  </ListGroup>
  );
};

export default ToDoList;
