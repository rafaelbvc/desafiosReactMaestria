import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
  sucess: null,
};

const inserReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null, sucess: null };
    case "INSERTED_DOC":
      return { loading: false, error: null, sucess: null };
    case "ERROR":
      return { loading: false, error: action.payload, sucess: null };
    case "SUCESS":
      return { loading: false, error: null, sucess: true };
    default:
      return state;
  }
};

export const useInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(inserReducer, initialState);

  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const insertDocument = async (document) => {
    checkCancelBeforeDispatch({ type: "LOADING" });
    try {
      const newDocumment = { ...document, createdAt: Timestamp.now() };
      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocumment
      );

      checkCancelBeforeDispatch({
        type: "INSETED_DOC",
        payload: insertedDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    setCancelled(true);
  }, []);

  return { insertDocument, response };
};
