import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);
  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user

      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!res) {
        throw new Error(res.user);
      }

      // add display name to user
      //new user command, previously unknown
      console.log("User name : ", res.user.displayName);
      await res.user.updateProfile({ displayName });

      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (e) {
      console.log(e.message);
      setError(e.message);
      setIsPending(false);
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { error, isPending, signup };
};
