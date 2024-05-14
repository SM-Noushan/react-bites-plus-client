import React from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../../firebase/firebase.config";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export const AuthContext = React.createContext("");

const FirebaseProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      const logged = { email: currUser?.email || user?.email };
      console.log("user >> ", currUser);
      setUser(currUser);
      setLoading(false);
      if (currUser) {
        axiosSecure
          .post("/signin", logged)
          .then((res) => console.log("token-setup >>", res.data));
      } else {
        axiosSecure
          .post("/signout", logged)
          .then((res) => console.log("token-clear >>", res.data));
      }
    });
    return () => unSubscribe();
  }, []);

  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUserWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateProfileInfo = (name, url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    });
  };

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    createUserWithGoogle,
    createUserWithFacebook,
    logIn,
    logOut,
    updateProfileInfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseProvider;
