import * as functions from 'firebase-functions';
//import * as admin from 'firebase-admin';
const { admin } = require('./firebaseconfig');



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const CreateEmpl = functions.https.onRequest((request, response) => {

 
 var data=JSON.parse(request.body);
 console.log(data.name);
 admin.auth().createUser({
        uid: data.uid, 
        email: data.email,
        password: "123456"
      })
       
});
