import './App.css';
import React from 'react';
//pour importer  c'est comme pour un element on lui donne un nom quon utilisera dans la page et on pointe vers le dossier d'origine
import ToDoList from "../ToDoList";
//import du compo login
import ContextProvider from "../../context";
import HomePage from "../HomePage";

function App() {
  //Une fois importer on appele alors l'objet/element crée en "jsx" avec la syntaxe <NomElementOuObjet />
  return (
    <ContextProvider>
      <HomePage />
    </ContextProvider>
  ) 
}

export default App;
