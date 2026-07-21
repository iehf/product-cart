import { initializeApp, getApps, getApp, App } from "firebase-admin/app";

let app: App | null = null;

export function getFirebaseAdminApp(): App {
  if (app) return app;

  if (getApps().length > 0) {
    app = getApp();
    return app;
  }

  app = initializeApp({
    storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
  });

  return app;
}
