import React, {useContext} from "react";
import ToDoList from "../ToDoList";
import Login from "../Login";
import User from "../../context/User";

import Register from "../Register";
import css from "./HomePage.module.css";
import Logout from "components/Logout";

const HomePage = () => {
  //useContext(() =>)
const {user} = useContext(User);

  return (
    <div className={css.container}>
    {user ? <ToDoList />: <><Login /><Register/></>}
    </div>
  );
    
  
}

export default HomePage;
