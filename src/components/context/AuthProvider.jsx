import React from "react";
import { AuthContext } from "./AuthContext";

import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
  // user create
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  user login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password); 
  }


  const userInfo = {
    createUser,
    loginUser
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
