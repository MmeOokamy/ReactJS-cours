import { UserProvider } from "context/User";
import { ListProvider } from "context/List";
//ce fichier regroupe tout les contextes
const ContextProvider = ({children}) => {

  return <UserProvider>
    <ListProvider>{children}</ListProvider>
    
    </UserProvider>;
};

export default ContextProvider;
