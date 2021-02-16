# etable de creation avec le framework ReatJS

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

/!\ quand je veux taper du javascript il faut penser a ouvrir les accolades !!!! ce n'est pas du jsx

pour le css. il faut penser a importer le fichier css dans le js. et l'utiliser entre des accolades de JavaScript
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


### Task/Task.js
  On crée une function pour changer la couleur de la tache

=> un peu de css avec les className tout ça

# Le console.log() est ton ami!


filter => filtrer une liste
reduce => reduire a un seul element
map => pour boucler et appliquer une modif possible