# etape de creation Single page application avec le framework ReatJS

=> dans la console
* npx create-react-app [nom-app]
* cd [nom-app]
* code . 

=> Visual Code
split le terminal pour lancer le server 3000 et avoir une console a dispo

* npm start

=> quelques petit truc en plus utile
#### React-BootStrap
* npm install bootstrap react-bootstrap

#### CRCF => Create-react-component-forder  // creation auto du dossier componente pour feignasse
* npm install --save-dev create-react-component-folder

=> rajouter dans le fichier package.json
* "crcf": [ //permet de definir les fonction auto de creation
    "cssmodules", // crée un fichier au format module.css
    "functional", // pour que les composants créés soient au format fonction
    "scss", //pour autoriser le scss - sass
    "uppercase", // pour mettre les nom en PascalCase
    "proptypes", // pour initialiser et importer les proptypes
    {
        "output": "src/components" //cible le dossier de creation auto des composants futur
    }
]

#### jsconfig.json 
crée un fichier a racine pour initialiser le chemin fini les ../../.. 
* {
    "compilerOptions": {
    "baseUrl": "src"
    },
    "include": ["src"]
}


## App
creation du component App

* npx crcf App
deplacer App.css - App.js - App.test.js - index.js -App.module.scss

## Pret pour la suite

### App/App.js

### ToDoList/ToDoList.js

* /!\ quand je veux taper du javascript il faut penser a ouvrir les accolades !!!! ce n'est pas du jsx

* pour le css. il faut penser a importer le fichier css dans le js. et l'utiliser entre des accolades de JavaScript

#### onClick = onclick
 * <button onClick={removeTask}>Supprimer la tache</button>
 => au click sur le bouton on va utiliser la fonction removeTask qui supprime une tache de la liste


 #### Rendre un parametre optionnel
=> on lui donne une valeur init a null (id = null)
 * par rapport a la function updateCompleted et updateState il est possible de faire une seule function

 * const updateCompletedState = (bool, id=null) =>{
     const newList = list.map((t) => {
         if(id === t.id || id === null) return {
             ...t, completed : bool
         };
         else return t;
     });
        setList(newList);
 }
 

#### addTask
on crée un objet newTask, on lui attribut les paramètres du form, on ajoute un id et un statut completed a false, puis on utilise setList pour modifier la liste pour donner => [...l'ancienne_liste, form]
* const addTask = (form) => {
    const newTask = {...form, id: getId(), completed: false};
    setList([...list, newTask]);
};

on recupére la precedente tache et la tache courrent et on comparer les id
si l'id de la precedentTask est suppérieur a la currentTask
la function me return l'id de la precedentTask sinon l'id la currentTask  + 1
*  const getId = () => {   
    const taskId = list.reduce((precedentTask, currentTask) => (precedentTask.id > currentTask.id ? precedentTask : currentId));
    return(taskId.id + 1 );
 }

D'ailleurs il y a une erreur quand on souhaite rajouter une tache dans une liste vide. comme il n'y a pas d'id de référence.
un ternair?
* if(list.length !== 0){
       return console.log("coucou");
     } else {
       console.log("vide")
     }




### Task/Task.js
  On crée une function pour changer la couleur de la tache

=> un peu de css avec les className tout ça

# Le console.log() est ton ami!


filter => filtrer une liste
reduce => reduire a un seul element
map => pour boucler et appliquer une modif possible

## Etape de Creation de formulaire pour rajouter une tache

npm crcf NewTaskForm

* rajouter après les btn de ToDoList.js 
 <NewTaskForm />
 /!\ attention pour eviter le rechargement de la page a l'envoye du formulaire il est necessaire d'utiliser un preventDefault  => const handleSubmit

### Api - fetchData

Il est important de noter qu'il faut le coupler avec un useEffect afin de limité lappel a l'api . telle une instanciation
 * /** appele a une API */
   const fetchData = async () => {
     try {
       //on fait un appele a l'API
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        //si la reponse n'est pas ok elle nous renvoi son statu
        if(!res.ok) throw Error(res.statusText);
        else{
          //si la reponse est ok on la parse en json object
          const data = await res.json();
          console.log(data);
          //on integre alors le json dans la list
          setList([...list, ...data]);
        }
     } catch (e) {
        console.log(e);
     }
   };

//avec useEffect

* useEffect(() => {
     async function fetchData() {
     try {
       //on fait un appele a l'API
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        //si la reponse n'est pas ok elle nous renvoi son statu
        if(!res.ok) throw Error(res.statusText);
        else{
          //si la reponse est ok on la parse en json object
          const data = await res.json();
          console.log(data);
          //on integre alors le json dans la list
          setList([ ...data]);
        }
     } catch (e) {
        console.log(e);
     }
   };
      fetchData();
   }, []
   );


#### pour ajouter les données dans firebase /!\ la list est comment ==>   const [list, setList] = useState(initialList);
 * useEffect(() => {

    const options = {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(list),
      headers: {"Content-Type": "application/json"},
    };

     async function fetchData() {
        try {
            const res = await fetch("https://react-todolist-73842-default-rtdb.firebaseio.com/task.json", options);
            if(!res.ok) throw Error(res.statusText);
            else{
                const data = await res.json();
                console.log(data);
                setList(data);
              }
        } catch (e) {
            console.log(e);
        }
      };
          fetchData();
      }, [list]
   );

## Le context

permet de faire transiter les données dans les differentes couches de l'application.