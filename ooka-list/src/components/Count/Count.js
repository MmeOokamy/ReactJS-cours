import React, {  useState, useEffect} from "react";


const Count = () => {

 // on initialise un compter qui vaut 0
 const [count, setCount] = useState(0);
 
  /**
   * useEffect avec le counter
   * /!\ attention a ne pas mettre de donnée pour modifier l'effect sinon boucle infini
   */
  useEffect(() => {
    console.log(count);
  }, [count]);


  return (
    <div>
      <button onClick={() => setCount(oldCount=>oldCount+1)}> + 1</button>
      <p>{count}</p>
    </div>
    )
};

export default Count;
