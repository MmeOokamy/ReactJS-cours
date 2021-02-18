import { UserProvider } from "context/User";
import { ListProvider } from "context/List";
import { FirebaseProvider } from "context/Firebase";
//ce fichier regroupe tout les contextes
const ContextProvider = ({children}) => {

  return <FirebaseProvider>
          <UserProvider>
           <ListProvider>
             {children}
            </ListProvider>
          </UserProvider>
        </FirebaseProvider>;
};

export default ContextProvider;
