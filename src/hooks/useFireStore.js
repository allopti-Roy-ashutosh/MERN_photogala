import {useState, useEffect} from 'react';
import {fireStorage as projectFirestore } from "../firebase/config";

const useFireStore = (collections) => {
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
    const unsub = projectFirestore.collection(collections)
    .orderBy('createdAt', 'desc')
    .onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(),id : doc.doc_id})
            });
            setDocs(documents)
        }
    )
    return ()=>unsub();
},[collections])
    
    return {docs};
}

export default useFireStore;