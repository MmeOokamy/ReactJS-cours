import app from "firebase/app";
import "firebase/auth";
import "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD7BoC9kmu9Y53c5BipDu_YoEWZDgLkjJY",
    authDomain: "react-todolist-73842.firebaseapp.com",
    databaseURL: "https://react-todolist-73842-default-rtdb.firebaseio.com",
    projectId: "react-todolist-73842",
    storageBucket: "react-todolist-73842.appspot.com",
    messagingSenderId: "875560818199",
    appId: "1:875560818199:web:ac2e17fb6e0de2b0d5ee52"
  };
    
    app.initializeApp(firebaseConfig);

    const Firebase = () => {
        const auth = app.auth();
        const register = (email, password) => auth.createUserWithEmailAndPassword(email, password);
        
        const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
        const logout= () => auth.signOut();
        
        return {
            register,
            login,
            logout,
        };
    };

    export default Firebase;