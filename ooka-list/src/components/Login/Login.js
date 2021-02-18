import React, {useState, useContext, useEffect } from "react";
import User from "../../context/User";
import css from "./Login.module.css";
import Firebase from "../../context/Firebase";



const Login = () => {

  const firebase = useContext(Firebase);



  const initLog = {
    userEmail: "",
    passwordOne: "",
    error:null,
  }

  const [formLogin, setForm] = useState(initLog);
  const { user, setUser } = useContext(User);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    firebase
      .login(formLogin.userEmail, formLogin.passwordOne)
      .then((res) => {
        setForm(initLog);
        setUser(res.user);
        console.log(res.user.uid) ;
        //on ajoute la clé "user" a la valeur uid de la reponse obtenue voir context/User.js
        localStorage.setItem("user", JSON.stringify(res.user.uid));
        
      })
      .catch((error) => {
        setForm({
          ...formLogin,
          error: error
        });
      });
  };

  useEffect(() => { 
  
    //si l'user existe 
    

    //localStorage.setItem("user", JSON.stringify(user));
    //sinon localStorage.removeItem("user")
  }, [formLogin])



  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({...formLogin, [name] : value });
  };


  return (
    <div className={css.container}>
    <h3>Login</h3>

      <form onSubmit={handleSubmit}>
        
      <div className={css.flex}>
        
        <div>
          <label>Email : </label>
          <input type="text" name="userEmail"  value={formLogin.userEmail} onChange={handleChange} />
        </div>
        
        <div>
          <label>Mdp 1 : </label>
          <input type="password"  name="passwordOne"  value={formLogin.passwordOne} onChange={handleChange} />
        </div>

      
      </div>
        <button>Pwet</button>
      </form>
      <p>{formLogin.error ? formLogin.error.message : ""}</p>
      <hr />
    </div>
  );
};

export default Login;
