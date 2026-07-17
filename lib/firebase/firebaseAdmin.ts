import { initializeApp, getApps, cert } from "firebase-admin/app";

const firebaseAdminApp =
  getApps().length === 0
    ? initializeApp({
        credential: cert({
          projectId: process.env.APP_FIREBASE_PROJECT_ID,
          clientEmail: process.env.APP_FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.APP_FIREBASE_PRIVATE_KEY,
        }),
        storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
      })
    : getApps()[0];

export default firebaseAdminApp;
