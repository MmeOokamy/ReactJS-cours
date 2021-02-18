import { createContext, useState, useContext } from "react";
import Firebase from "./Firebase";

const defaultUser = null;
const User = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  const firebase = useContext(Firebase);
  //mon contexte me renvoi un objet avec un user et un setUser
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default User;
