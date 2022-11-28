import { collection, onSnapshot, QueryDocumentSnapshot, type DocumentData } from "firebase/firestore";
import { db } from "../services/firebase_sdk";

export let datas : QueryDocumentSnapshot<DocumentData>[] = []

export const querySnapshot = onSnapshot(collection(db, "todos"), (doc) => {
    datas = doc.docs;
    console.log(datas);
});

