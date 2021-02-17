import React, {useContext} from "react";
import User from "../../context/User";

const Logout = () => {

  const  {setUser} = useContext(User);
  return <button onClick={() => setUser(null)}>Logout</button>;

};

export default Logout;
