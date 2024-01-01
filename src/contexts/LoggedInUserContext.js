import axios from "axios";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

export const LoggedInUserContext = createContext();
export const SetLoggedInUserContext = createContext();
export const useLoggedInUser = () => useContext(LoggedInUserContext);
export const useSetLoggedInUser = () => useContext(SetLoggedInUserContext);

export const LoggedInUserProvider = ({ children }) => {
  const [userLoggedIn, setLoggedInUser] = useState(null);
  const history = useHistory();

  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      setLoggedInUser(data);
    } catch (err) {
      console.log(err); //to be removed
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
        if (shouldRefreshToken()){
        try {
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          setLoggedInUser((prevUserLoggedIn) => {
            if (prevUserLoggedIn) {
              history.push("/sign-in");
            }
            return null;
          });
          removeTokenTimestamp()
          return config;
        }
      }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setLoggedInUser((prevUserLoggedIn) => {
              if (prevUserLoggedIn) {
                history.push("/sign-in");
              }
              return null;
            });
            removeTokenTimestamp()
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  return (
    <LoggedInUserContext.Provider value={userLoggedIn}>
      <SetLoggedInUserContext.Provider value={setLoggedInUser}>
        {children}
      </SetLoggedInUserContext.Provider>
    </LoggedInUserContext.Provider>
  );
};
