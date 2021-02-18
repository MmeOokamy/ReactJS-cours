import React, {useState, useContext} from "react";
import css from './NewTaskForm.module.css';
import Firebase from "../../context/Firebase";


const NewTaskForm = ({add}) => {
  const firebase = useContext(Firebase);
  //on initialise une structure pour le formulaire
  const initialForm = {
    title : "",
    priority: "Moyenne",
    completed : false,
  };

  // on crée la fonction pour pouvoir modifier le form
  const [form, setForm] = useState(initialForm);

  // ma value => si je suis sur une checkbox c'est target.checked sinon c'est la valeur initialisé dans initialForm
  //mon name correspont au name des attributs (name ="" value ="")
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
      const name = e.target.name;
      //setForm sert alors a modifier le formulaire
      setForm({...form, [name] : value });
  };

  //event qui a un comportement par defaut
  const handleSubmit = (e) => {
    // bloque le rechargement de la page
    e.preventDefault(); 
    // appel addTask en lui passant les entrée du formulaire avec form => ToDoList.js:88
    add(form);

    //firebase
    /* firebase
    .database().ref().set({
      userId: 3,
      priority: form.priority,
      title: form.title,
      id: firebase.auth
    })
    .then((res) => {
      setForm(initialForm);
    })
    .catch((error) => {
      setForm({
        ...form,
        error: error
      });
    }); */

    //reinitialise le formulaire un fois celui-ci dans la liste
    setForm(initialForm);
  };

  /**
   * Creation de la vue du formulaire
   * /!\ il est important de noter qu'il est necessaire d'attribuer un onChange + name + value
   * a toutes les entrées du formulaire sinon error
   */
  return (
    <div>
    <h2 className={css.title}>Mon Super Add </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Description de la Tache" name="title" value={form.title} onChange={handleChange} />
        </div> 
        <div>
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option value="Haute">Haute</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
        </div>
        <div>
          {/** crée une checkbox pour ajouter des tach deja terminé ou non*/}
          <input type="checkbox" name="completed" checked={form.completed} onChange={handleChange} />

          { //Ajoute un text en fonction de la checkbox => checked ou non
          form.completed ? "Terminée" : "En cours"
          }
        </div>
        <button>Go</button>

      </form>
  </div>
  )
};


export default NewTaskForm;
