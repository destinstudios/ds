import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDEE7vVrEfdvUovaAnxzn1tIMjgZkqLWJc",
  authDomain: "destin-os.firebaseapp.com",
  projectId: "destin-os",
  storageBucket: "destin-os.firebasestorage.app",
  messagingSenderId: "618523214969",
  appId: "1:618523214969:web:12096b9bd025d50c6a80a8"
};

export const firebaseConfigured = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId)
export const app = firebaseConfigured ? (getApps()[0] ?? initializeApp(config)) : null
export const auth = app ? getAuth(app) : null
export const db = app ? getFirestore(app) : null
