import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase.config";
import Swal from "sweetalert2";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
const provider = new GoogleAuthProvider();
  // createUser
  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
//   update user
const updateUser =(userInfo)=>{
    return updateProfile(auth.currentUser, userInfo)
}

// signoutUser
const logOut=()=>{
    return signOut(auth).then(() => {
 Swal.fire({
          position: "top-end",
          icon: "success",
          title: "log-out successful",
          showConfirmButton: false,
          timer: 1500,
        });
}).catch((error) => {
 console.log(error.message);
});
}
// continue with google
const continueWithGoogle= ()=>{
    return signInWithPopup(auth, provider)
  .then((result) => {
Swal.fire({
          position: "top-end",
          icon: "success",
          title: "google login successful",
          showConfirmButton: false,
          timer: 1500,
        });
  
  }).catch((error) => {
   
  });

}

  //   set auth state
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    userSignUp,
    user,
    setUser,
    loading,
    setLoading,
    userLogin,
    updateUser,
    logOut,
    continueWithGoogle
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
