import { useState, useEffect,useRef } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection ,query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // if we dont use a ref => infinite loop in useEffect
  // _query is an array and is different on every function 
  // const query = useRef(_query).current



  //stops listening the current page upon leaving current page
  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        //update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    return () => unsubscribe();
  }, [collection, query]);

  return { documents, error };
};
