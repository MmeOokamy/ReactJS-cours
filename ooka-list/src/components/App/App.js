import './App.css';
import React from 'react';
//pour importer  c'est comme pour un element on lui donne un nom quon utilisera dans la page et on pointe vers le dossier d'origine
import ToDoList from "../ToDoList";

function App() {
  //Une fois importer on appele alors l'objet/element crée en "jsx" avec la syntaxe <NomElementOuObjet />
  return <ToDoList />
}

export default App;
