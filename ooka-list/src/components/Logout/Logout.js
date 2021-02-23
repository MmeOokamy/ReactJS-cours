import React, {useContext} from "react";
import User from "../../context/User";
import Firebase from "../../context/Firebase";

const Logout = () => {

  const firebase = useContext(Firebase);
  const { user, setUser } = useContext(User);

  return( 
  <>
    <button
      onClick={() => {
        firebase.logout();
        setUser(null);
      }} 
    >
    Logout
    </button>
  
  <h2>Bonjour {user.email}{""}</h2>
  </>
  );
};

export default Logout;
