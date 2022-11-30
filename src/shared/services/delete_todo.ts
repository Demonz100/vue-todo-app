import { db } from "../services/firebase_sdk";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteExistingTodo = async (id:string)=> {
    await deleteDoc(doc(db, "todos", id));
}
