import React, {useContext} from "react";
import ToDoList from "../ToDoList";
import Login from "../Login";
import User from "../../context/User";

const HomePage = () => {
  //useContext(() =>)
const {user} = useContext(User);
  return (
    <> 
    {user ? <ToDoList /> :  <Login />}
    </>
  );
    
  
}

export default HomePage;
