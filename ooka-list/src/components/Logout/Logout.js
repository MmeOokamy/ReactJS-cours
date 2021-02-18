import React, {useContext} from "react";
//import User from "../../context/User";
import Firebase from "../../context/Firebase";


const Logout = () => {

  const firebase = useContext(Firebase);

  return <button onClick={firebase.Logout()}>Logout</button>;

};

export default Logout;
