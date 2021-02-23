import { createContext } from "react";
import firebase from "firebaseApp";

//le context est le lisnt avec react. qui permet de recupérer l'objet firebaseApp et de le partager avec le reste de l'appli

//initialiser par defaut a null
const Firebase = createContext(null);

export const FirebaseProvider = ({ children }) => {
 
  return <Firebase.Provider value={ firebase() }>{children}</Firebase.Provider>;
};

export default Firebase;