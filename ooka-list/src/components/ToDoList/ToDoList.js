import Task from "../Task";
import React, { useState } from "react";
import css from "./ToDoList.module.css";
import NewTaskForm from "components/NewTaskForm";


// ici nous allons crée une liste dans un premier temps en dure 
const ToDoList = () => {
  // Il faut un tableau avec une structure 
  const initialList = [
    {
      id: 1,
      title: "Ecrir du JS",
      completed: false,
      priority: "Basse",
    },
    {
      id: 2,
      title: "Faire fonctionner mon code",
      completed: false,
      priority: "Moyenne",
    }, 
    {
      id: 3,
      title: "Comprendre ce que je fais",
      completed: false,
      priority: "Haute",
    },
    {
      id: 4,
      title: "Call Me Mother",
      completed: true,
      priority: "Haute",
    },
  ];

 // useState Retourne une valeur d'état, et une fonction pour la mettre à jour.
 //useState() prend un premier parametre qui sera la source initial => initialList
 // setList sert alors de fonction pour mettre a jour la source initial
 // rajoute un State dans l'inspection d'element du navigateur
 // cela permetra d'ajouter ou de supprimer des taches
  const [list, setList] = useState(initialList);

  //function pour supprimer une tache dans le dom
  // on doit lui donner un parametre/props l'id de la task a delete
  const removeTask = (id) => {
    //on va aller boucler sur la liste et retrouver la task (t) avec le meme id.
    //on va filtrer les tache(t) => je veux recupérer toutes les taches qui ne sont pas celle de l'id  
    // =>list.filter((t) => t.id !== id)
    // je vais alors créer une liste avec ses taches là.
      const newList = list.filter((t) => t.id !== id);
      //il faut alors modifier le state avec setList, on va alors écraser la list initial avec la newList
      setList(newList);
      //jusqu'a actualisation (F5) de la page
      //on va mettre un petit button pour faire fonctionner ça
      // d'habord il faut passer removeTask en props => dans <Tast />
  }

  // Function pour modifier le statut de toute les taches
  const updateCompleted = (bool) => {
    //on doit definir qu'elle objet la function doit retourner
    //ma destructuring tache(t) a laquel je modifi la propriété completed
   const newList = list.map((t) => ({...t, completed : bool}));
    setList(newList);
  }

  //function updateCompleted en prenant en compte l'id
  // j'ai besoin de l'id pour la trouver et modifier son statut puis de reformer une list 
  // avec la modif => rajouter en props =>update
  // on rajoute la props bool qui sera envoyer par le button directement afin de switch le statut
  const updateState = (bool, id) => {
    //on doit definir qu'elle tache/ objet la function doit retourner
    //ma destructuring tache(t) a laquel je modifi la propriété completed
   const newList = list.map((t) => {
      if(id === t.id) return {...t, completed : bool};
      else return t;
  });
      setList(newList);
  }

  /**
   * Ajouter des taches dans la vue === en lien avec le NewTaskForm.js
   * apres la liste et les btn on rajoute <NewTaskForm />
   */

   //function pour ajouter une tache
   //cette fonction recupère les donnée du formulaire envoyer par handleSubmit => NewTaskForm.js:28
   const addTask = (form) => {
     //ici on setList en rajoutant a la list initial la nouvelle task du form 
     setList([...list, {...form, id: getId()}]);
   }

    // Il faut trouver le dernier id dispo
   const getId = () => {
     return(
       //on recupére la precedente tache et la tache courrent et on comparer les id
       // si l'id de la precedentTask est suppérieur a la currentTask 
       // la function me return l'id de la precedentTask sinon l'id la currentTask
     list.reduce((precedentTask, currentTask) => (precedentTask.id > currentTask.id ? precedentTask : currentTask)).id + 1 
     );
   }
  

  /**
   * La function return est ce qui correspont a ce que l'on voit - a la view 
   * */ 
  return (
     // symbole pour les div en React <> </> parce que c'est trop compliqué de taper div 
     <div className={css.container}>
       <div>
        
        <h1 className={css.title}> Ma Super Liste </h1>
        {/* faisont appele au composant de la liste -> Task quil faudra evidement importer 
        *   /!\ pour crée un attribut dans une balise il faut taper className
        */}
        <div > 
          {
            /* Pour faire une boucle sur la list on va utiliser .map dans les accolades vu que c'est du js
            le premier mot correspont au tableau / objet cible et le .map permet de recupéré la carte de l'objet -
            dans le map on attend une fonction (parametre)=>{ function} on va prendre t pour tache de la liste - a l'interieur que je retourne le composant task autant de fois qu'il est pesent dans la liste  */
              list.map((t) => (
                /** il faudra alors utiliser les props - propriétés / arguments
                 * On va alors crée des "props" que l'on nomera comme on le souhaite et qui sera dans le cas
                 * present = a la tache (t) il faut alors passer a Task/Task.js 
                 * ne pas oublier de definir une key / clé unique / un index ou id
                 */
                <Task 
                  task={t} 
                  remove={removeTask}
                  update={updateState}
                  key={t.id}
                  
                />
              ))
          } 
          </div>  
        
        </div>
        <div className={css.btn}>
          {/** Il faut alors appeler la function completed avec des parametres */}
            <button onClick={() => updateCompleted(true)}>Tout terminer</button>
            <button onClick={() => updateCompleted(false)}>Tout Annuler</button>
        </div>
          <hr/>
        <div className={css.form}>
        <NewTaskForm add={addTask}/>
        </div>
        
    </div>
  )
};


export default ToDoList;
