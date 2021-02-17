import { createContext, useState, useEffect, useContext } from "react";
import {objToArr} from "../utils";
import User from "context/User";

const defaultList = [];
const List = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState(defaultList);
//recuper le user dans le context et faire un useEffect pour fetch la list avec userId
  //recup le context user pour tier par id comme un findById
  const {user} = useContext(User);
   

  /** appele a une API */
//useEffect permet de faire appele a un objet/ element seulement quon on l'appel
   

useEffect(() => {
    async function fetchData() {
 try {
     const res = await fetch(`https://react-todolist-73842-default-rtdb.firebaseio.com/task.json?orderBy="userId"&equalTo=${user.id}`);
     if(!res.ok) throw Error(res.statusText);
     else{
         const data = await res.json();
         console.log(data);
         setList([...objToArr(data)]);
       }
 } catch (e) {
     console.log(e);
 }
};
       if(user) fetchData();
}, [user]
  );


  //mon contexte me renvoi un objet avec un user et un setUser
  return <List.Provider value={{ list, setList }}>{children}</List.Provider>;
};

export default List;
