import { UserProvider } from "./User";
//ce fichier regroupe tout les contextes
const ContextProvider = ({children}) => {

  return <UserProvider>{children}</UserProvider>;
};

export default ContextProvider;
