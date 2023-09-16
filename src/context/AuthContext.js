import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import Axios from "../../Axios";

const AuthContext = createContext();

export const getAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const authKey = "USER_TOKEN";

  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function checkLoggedIn() {
      SecureStore.getItemAsync(authKey)
        .then((token) => {
          if (token) {
            setIsLogin(true);
            setIsLoading(false);
          } else {
            setIsLogin(false);
            setIsLoading(false);
          }
        })
        .catch(() => {
          setIsLoading(false);
          alert("Failed to get the token from storage");
        });
    }

    checkLoggedIn();
  }, []);

  function loginHandler({ email, password }) {
    setIsLoading(true);

    Axios.post("/auth/login", { email, password })
      .then((res) => {
        if (res.data) {
          const token = res.data.data;

          SecureStore.setItemAsync(authKey, token)
            .then(() => {
              console.log("[Logged In] Token successfully saved");

              setIsLogin(true);
              setIsLoading(false);
            })
            .catch(() => {
              alert("Failed to Login");
              setIsLoading(false);
            });
        }
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          alert("Нууц үг буруу байна!");
        } else if (err.response?.status === 404) {
          alert("Бүртгэлгүй и-мэйл байна!");
        } else {
          alert("Ямар нэгэн алдаа гарлаа. Дахин оролдоно уу!");
        }

        setIsLoading(false);
      });
  }

  function logoutHandler() {
    setIsLoading(true);

    SecureStore.deleteItemAsync(authKey)
      .then(() => {
        console.log("[Logged Out] Token successfully deleted");

        setIsLogin(false);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Failed to Logout");
        setIsLoading(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLogin,
        loginHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
