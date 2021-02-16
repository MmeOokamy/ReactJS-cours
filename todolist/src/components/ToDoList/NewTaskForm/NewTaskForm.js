import TaskModel, { priorities } from "models/Task";
import React, {useState} from "react";
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Task from "../Task";
import NewTask from "./NewTaskForm";



const NewTaskForm = ({add}) => {

  const initTask = new TaskModel();

  const [form, setForm] = useState({
    title:"",
    priority: "Moyenne",
  });

  const handleChange = (ev) => {
    const value =
    ev.target.type === "checkbox" ? ev.target.type : ev.target.value;
    const name = ev.target.name;
    setForm({...form, [name]:value});
  };

  const handleSubmit = (sub) => {
    sub.preventDefault();
    add(form);
    setForm(initTask);  
  };



  return(
    <form onSubmit={handleSubmit}>
      <h1>Nouvelle tâche</h1>
      <div>
        {""}
        <input type="text" placeholder="title" name={form.title} onChange={handleChange}/>
      </div>
      <div>
        <select name="priority" value={form.priority} onChange={handleChange}>
            <option value="Haute">Haute</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
        </select>
      </div>
      <button >Valider</button>

    </form>)
};


export default NewTaskForm;
