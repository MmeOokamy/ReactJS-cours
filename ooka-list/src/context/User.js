import { createContext, useState } from "react";

const defaultUser = null;
const User = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);
  //mon contexte me renvoi un objet avec un user et un setUser
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default User;
