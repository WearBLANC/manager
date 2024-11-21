import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Adicionar dados
export const addData = async (data: any) => {
    try {
        const docRef = await addDoc(collection(db, "your-collection"), data);
        console.log("Document added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding document:", error);
    }
};

// Buscar dados
export const fetchData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "your-collection"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    } catch (error) {
        console.error("Error fetching documents:", error);
    }
};
