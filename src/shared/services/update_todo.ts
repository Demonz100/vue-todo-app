import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase_sdk";

const updateFav = async (id: string, fav: boolean) => {
  await updateDoc(doc(db, "todos", id), {
    isFav: fav,
  });
};

const updateCompleted = async (id: string, completed: boolean) => {
  await updateDoc(doc(db, "todos", id), {
    isCompleted: completed,
  });
};

const updateTitle = async (id: string, title: string) => {
    await updateDoc(doc(db, "todos", id), {
      title: title,
    });
  };

export { updateFav, updateCompleted, updateTitle };
