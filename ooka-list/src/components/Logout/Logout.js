import React, {useContext} from "react";
import User from "../../context/User";
import Firebase from "../../context/Firebase";

const Logout = () => {

  const firebase = useContext(Firebase);
  const {setUser} = useContext(User);

  return <>
  <button onClick={() => firebase.logout(setUser(null) + localStorage.removeItem("user"))} >Logout</button>
  <p>{JSON.parse(localStorage.getItem("user"))}</p>
  </>;
};

export default Logout;
