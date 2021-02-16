import TaskModel, { priorities } from "models/Task";
import React, {useState} from "react";
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Task from "./Task";


const ToDoList = () => {
  const initList = [
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
 
const [list, setList] = useState(initList);

  const updateCompleted = (completed, task = null) => {
   setList((list) =>
    list.map((i) =>
       !task || task.id === i.id ? {...i, completed: completed } : i)
   );
  };

  return(
    <ListGroup> 
      { list.map((i) => (
      <Task task={ new TaskModel(i)} update ={updateCompleted} key={i.id} />
      ))}
      <ListGroupItem className="d-flex justify-content-center">
        <Button onClick={()=>updateCompleted(false)} variant="dark" className="mr-5">Annuler tout</Button>
        <Button onClick={()=>updateCompleted(true)} variant="dark" className="ml-5">Terminer tout</Button>
      </ListGroupItem>
  </ListGroup>
  );
};

export default ToDoList;
