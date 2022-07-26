import { doc, setDoc } from 'firebase/firestore';
import db from 'db/firebase';
import { v4 as uuidv4 } from 'uuid';

export const join = async (data) => {
    await setDoc(doc(db, 'user', uuidv4()), data);
};
