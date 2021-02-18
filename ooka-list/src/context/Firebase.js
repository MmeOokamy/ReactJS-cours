import { createContext } from "react";
import firebase from "firebaseApp";

const Firebase = createContext();

export const FirebaseProvider = ({ children }) => {
 
  return <Firebase.Provider value={ firebase() }>{children}</Firebase.Provider>;
};

export default Firebase;