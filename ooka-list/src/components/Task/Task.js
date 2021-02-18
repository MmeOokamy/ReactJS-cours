import React from "react";
import css from "./Task.module.css";


// Task reçois alors la props task du fichier ToDoList.js
// on peut utiliser "props" pour tout selectionner ou destructuring les elements avec {task, remove, update}
const Task = ({task, remove, update}) => {
     /**
       * /!\ ici la couleur de l'item change en fonction du statut completed de la tache et
       *  du niveau d'importance si la tache n'est pas completed
       * 
       */
  const getStatut = () => {
    if(task.completed) return css.completed;
    else if(task.priority === "Haute") return css.high;
    else if (task.priority === "Basse") return css.low;
    else return css.medium
  }

   /** en utilisant cette syntaxe affiche l'element du tableau que l'on souhaite  cela va permetre de créer
     * le template - la structure d'une tache
     **/
  return (
   
    /**on utilisera la function getStatut dans le className on applique la class .item et getStatut qui defini la couleur en fonction de la const getStatut() important => $ <= */
  <div className={ ` ${css.item} ${getStatut() } ` }> 
    <h2 className={css.title} >{task.title}</h2>
    <h3>{task.userId? "oui" : "non"}</h3>
    <p className={css.content}> Priorité : {task.priority}</p>
      {/* /!\ le statut est un bool, il n'affiche rien il faut alors faire un ternaire */}
    <p className={css.content}> Statut :  { 
            /* si la tache est complete*/
            task.completed ? 
            /* affiche */ 
            "Terminée" 
            : 
            /* sinon */ 
            "En cours"  
            /** {task.completed ? "Terminée" : "En cours"} */
      }
    </p>

    {/** Bouton pour supprimer - modifier la tache on va declancher une function qui va lancer remove et lui donner l'id
     * on a alors la possibilité de passer des parametres dans la function tel que true ou false
     */}
    <div className={css.btn}>
        <button onClick={() => {update(true, task.id)}}>Terminer</button>
        <button onClick={() => {update(false, task.id)}}>Annuler</button>
        <button onClick={() => {remove(task.id)}}>Supprimer</button>
    </div>
    
  </div>
  
  )

};



export default Task;
