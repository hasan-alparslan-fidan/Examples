import { useReducer, useEffect, useState } from "react";
import { projectFirestore, timestamp, addDocument } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};
const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      //changes everything except "isPending" or the value sent this function
      return {
        isPending: true,
        document: null,
        success: false,
        error: null,
      };
    case "ADDED_DOCUMENT":
      return {
        //...state, we wrote all the conditions manually so we dont need the cascade function anymore
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  // const [isCancelled, setIsCancelled] = useReducer(false);

  // collection ref
  const ref = projectFirestore.collection(collection);

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //add a ref
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
   // const createdAt = timestamp.fromDate(new Date());
   // const addedDocument = await addDocument(ref, { ...doc, createdAt });
      const createdAt = timestamp.fromDate(new Date())
      const addedDocument = await ref.add({...doc, createdAt })
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (e) {
      console.log("buraya gelmesin 3");
      dispatchIfNotCancelled({
        type: "ERROR",
        payload: e.message,
      });
    }
  };
  const deleteDocument = (id) => {};
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, response };
};
