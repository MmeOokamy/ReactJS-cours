import { createContext, useState, useContext, useEffect } from "react";


//On initialiser la valeur par defaut a localstorage avec la key "user"
const localUser = JSON.parse(localStorage.getItem("user"));
const userDefaults =  localUser? localUser : null ;

const User = createContext(userDefaults);

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(userDefaults);

  useEffect(() => {
    if(user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user")
  }, [user]);

//mon contexte me renvoi un objet avec un user et un setUser
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default User;
