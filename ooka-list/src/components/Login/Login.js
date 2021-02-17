import React, { useContext } from "react";
import User from "../../context/User";
import css from "./Login.module.css";


const Login = () => {

  /*const users = [
    { 
      userId: "1",
      userName: "Ooka",
    }, 
    { 
      userId: "2",
      userName: "Yure",
    },
    { 
      userId: "3",
      userName: "Inca",
    },
    { 
      userId: "4",
      userName: "baylou",
    },
  ]; */

  //on recupére le context de user qui est null par default useContext(User)
  const {setUser} = useContext(User);
   // Récupérer le context User (null par défaut)
  // Dans le JSX créer un bouton
  // Au clic du bouton, modifier le context User avec la valeur suivante
  // {id:1, name:"David"}

  const loggedUser = {id: 2, name: "Ooka"};

  return (
    <div className={css.container}>
    <h3>Login</h3>
      <button onClick={()=> setUser(loggedUser)}>Loggin</button>
      <hr />
    </div>
  );
};

export default Login;
