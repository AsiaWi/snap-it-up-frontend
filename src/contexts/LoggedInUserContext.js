import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


export const LoggedInUserContext = createContext();
export const SetLoggedInUserContext = createContext();
export const useLoggedInUser = () => useContext(LoggedInUserContext)
export const useSetLoggedInUser = () => useContext(SetLoggedInUserContext)

export const LoggedInUserProvider = ({children}) => {
    const [userLoggedIn, setLoggedInUser] = useState(null);

    const handleMount = async () => {
      try {
        const { data } = await axios.get("dj-rest-auth/user/");
        setLoggedInUser(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      handleMount();
    }, []);

    

    return(
    <LoggedInUserContext.Provider value={userLoggedIn}>
    <SetLoggedInUserContext.Provider value={setLoggedInUser}>
    {children}
    </SetLoggedInUserContext.Provider>
    </LoggedInUserContext.Provider>
    )
};