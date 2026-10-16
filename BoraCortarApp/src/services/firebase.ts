import { getApp, getApps, initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// O TypeScript nao enxerga essa funcao, mas ela existe no build do React Native.
const getReactNativePersistence = (firebaseAuth as any).getReactNativePersistence;
const { getAuth, initializeAuth } = firebaseAuth;


const firebaseConfig = {
  apiKey: "AIzaSyA-pPGm6Gk0abu8PDWu9z2jL8HC9mmklGI",
  authDomain: "boracortar-5e2d8.firebaseapp.com",
  projectId: "boracortar-5e2d8",
  storageBucket: "boracortar-5e2d8.firebasestorage.app",
  messagingSenderId: "1056394541131",
  appId: "1:1056394541131:web:465f6b937e3f69b9a3f5ce",
  measurementId: "G-J26JB77VBD"
};
 
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
 
// initializeAuth so pode rodar uma vez; no Fast Refresh cai no getAuth.
function criarAuth() {
  try {
    return initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch {
    return getAuth(app);
  }
}
 
export const auth = criarAuth();
export const db = getFirestore(app);