import { initializeApp, getApps, getApp, cert, App } from "firebase-admin/app";

let app: App | null = null;

export function getFirebaseAdminApp(): App {
  if (app) return app;

  if (getApps().length > 0) {
    app = getApp();
    return app;
  }

  app = initializeApp({
    credential: cert({
      projectId: process.env.APP_FIREBASE_PROJECT_ID,
      clientEmail: process.env.APP_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.APP_FIREBASE_PRIVATE_KEY,
    }),
    storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
  });

  return app;
}
