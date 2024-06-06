import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {

  apiKey: "AIzaSyBTG7skKxlX--SuIQWF9NMOHWSsDgpNIOY",

  authDomain: "netflix-clone-359bd.firebaseapp.com",

  projectId: "netflix-clone-359bd",

  storageBucket: "netflix-clone-359bd.appspot.com",

  messagingSenderId: "191843871197",

  appId: "1:191843871197:web:bd4699ac39360cb415ee34"

};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name , email , password)=>{
    try{
        const res =await createUserWithEmailAndPassword(auth,email,password  );
        const user = res.user;
        await addDoc(collection(db , "user"),{
            uid: user.uid,
            name,
            authProvider : 'local',
            email,
        })
    }catch(error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const login = async(email , password) => {
    try{
       await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};