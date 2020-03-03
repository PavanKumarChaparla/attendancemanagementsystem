import * as admin from 'firebase-admin';

const serviceAccount = require("../attendance-19db4-firebase-adminsdk-p7alh-4e36457bca.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://attendance-19db4.firebaseio.com"
  });

module.exports.admin = admin;