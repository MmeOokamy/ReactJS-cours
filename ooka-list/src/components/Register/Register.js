import React, {useState, useContext} from "react";
import Firebase from "context/Firebase";
import css from "./Register.module.css"

const Register = () => {

  const firebase = useContext(Firebase);

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

    firebase
      .register(formRegistration.userEmail, formRegistration.passwordOne)
      .then(() => {
        setForm(initialRegister);
      })
      .catch((error) => {
        setForm({
          ...formRegistration,
          error: error
        });
      });

  };

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
          <input type="text"  name="userName"  value={formRegistration.userName} onChange={handleChange} />
        </div>
        
        <div>
          <label>Email : </label>
          <input type="text" name="userEmail"  value={formRegistration.userEmail} onChange={handleChange} />
        </div>
        
        <div>
          <label>Mdp 1 : </label>
          <input type="password"  name="passwordOne"  value={formRegistration.passwordOne} onChange={handleChange} />
        </div>
      
        <div>
          <label>Mdp 2 : </label>
          <input type="password"  name="passwordTwo"  value={formRegistration.passwordtwo} onChange={handleChange} />
        </div>
      
      </div>
        <button>Pwet</button>
    </form>

    <p>{formRegistration.error ? formRegistration.error.message : ""}</p>
  </div>
  );
};

export default Register;
