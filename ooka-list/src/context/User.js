import { createContext, useState, useContext } from "react";
import Firebase from "./Firebase";

//On initialiser la valeur par defaut a localstorage avec la key "user"
const userDefaults =  JSON.parse(localStorage.getItem("user")) ;

const User = createContext(userDefaults);

export const UserProvider = ({ children }) => {

  
  const [user, setUser] = useState(userDefaults);
  //const firebase = useContext(Firebase);
  //mon contexte me renvoi un objet avec un user et un setUser
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default User;
