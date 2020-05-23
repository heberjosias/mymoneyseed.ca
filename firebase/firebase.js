import app from 'firebase/app';
import 'firebase/firestore';
import firebase from "gatsby-plugin-firebase"

class Firebase {
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
            //app.analytics();
        }
        this.db = app.firestore();
    }    
}

const firebase = new Firebase();
export default firebase;