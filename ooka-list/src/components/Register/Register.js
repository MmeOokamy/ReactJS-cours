import React, {useState, useContext, useEffect} from "react";
import Firebase from "context/Firebase";
import css from "./Register.module.css"
import User from "context/User";

const Register = () => {

  const { setUser } = useContext(User);
  const firebase = useContext(Firebase);

const [isInvalid, setIsInvalid] = useState(true);

  const initialRegister = {
    userName:"",
    userEmail:"",
    passwordOne:"",
    passwordTwo:"",
    error: null,
  };

  const [formRegistration, setForm] = useState(initialRegister);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    //on utilise la methode register et firebase qui renvoie une promesse
    firebase
    //dans cet fonction on envoie email et mdp
      .register(formRegistration.userEmail, formRegistration.passwordOne)
      //elle renvoi une promesse
      .then((res) => {
        setForm(initialRegister);
        setUser(res.user);
      })
      .catch((error) => {
        setForm({
          ...formRegistration,
          error: error
        });
      });
  };

  useEffect(() => {
       setIsInvalid(
         !(
           formRegistration.passwordOne === formRegistration.passwordTwo &&
         formRegistration.passwordOne !== "" &&
         formRegistration.userEmail !== "" && 
         formRegistration.userName !== ""
         )
         
       );
      }, [formRegistration]);

  const handleChange = (e) => {
    //on recupere les info des values
    const value = e.target.value;
    //et les info des names
      const name = e.target.name;
      //et on les enregistre dans le setForm et cela s'affiche dans la vue
     setForm({...formRegistration, [name] : value });

    console.log(setForm);
  };

  return (<div className={css.body}>
<h2>Registration</h2>
    <form onSubmit={handleSubmit}>
      <div className={css.flex}>
        <div>
          <label>Nom : </label>
          <input type="text"  name="userName"  value={formRegistration.userName} onChange={handleChange} placeholder="Pseudo"/>
        </div>
        
        <div>
          <label>Email : </label>
          <input type="email" name="userEmail"  value={formRegistration.userEmail} onChange={handleChange} placeholder="Email"/>
        </div>
        
        <div>
          <label>Mdp 1 : </label>
          <input type="password"  name="passwordOne"  value={formRegistration.passwordOne} onChange={handleChange} placeholder="Mot de Passe"/>
        </div>
      
        <div>
          <label>Mdp 2 : </label>
          <input type="password"  name="passwordTwo"  value={formRegistration.passwordtwo} onChange={handleChange} placeholder="Confirmer le MdP"/>
        </div>
      
      </div>
        <button type="submit" disabled={isInvalid} >Inscription</button>
    </form>

    <p>{formRegistration.error ? formRegistration.error.message : ""}</p>
  </div>
  );
};

export default Register;
