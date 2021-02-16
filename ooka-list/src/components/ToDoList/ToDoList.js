import Task from "../Task";
import React, { useState } from "react";
import css from "./ToDoList.module.css";


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
      //il faut alors modifier le state avec setList, on va alors écraser la list initial avec la new list
      setList(newList);
      //jusqu'a actualisation (F5) de la page
      //on va mettre un petit button pour faire fonctionner ça
      // d'habord il faut passer removeTask en props => dans <Tast />
  }

  // La function return est ce qui correspont a ce que l'on voit - a la view
  return (
     // symbole pour les div en React <> </> parce que c'est trop compliqué de taper div 
     <div className={css.container}>  
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
                key={t.id}
                
              />
            ))
        }
      </div>
      



    </div>
  )
};


export default ToDoList;