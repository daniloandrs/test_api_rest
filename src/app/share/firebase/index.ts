
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

export class FirestoreService {
    private static instance: FirestoreService | null = null;
    private firestore: Firestore | null = null;
    private app: FirebaseApp;

    private constructor() {
        const app = initializeApp({
            apiKey: "AIzaSyCnrd_aZLllBpxSmTSYMtaq_wL0oBHhWs0",
            authDomain: "testtasks-f22a8.firebaseapp.com",
            projectId: "testtasks-f22a8",
            storageBucket: "testtasks-f22a8.appspot.com",
            messagingSenderId: "71869422901",
            appId: "1:71869422901:web:921b0432482e536146c07c",
            measurementId: "G-DHXK4B76RJ"
        });

        this.app = app;

        this.firestore = getFirestore(this.app)
    }

    public static getInstance(): FirestoreService {
        if (!FirestoreService.instance) {
            FirestoreService.instance = new FirestoreService();
        }
        return FirestoreService.instance;
    }

    public getAppInstance(): FirebaseApp {
        if (!this.app) {
            throw new Error('Firestore instance not initialized');
        }
        return this.app;
    }

    public getFirestoreInstance(): Firestore {
        if (!this.firestore) {
            throw new Error('Firestore instance not initialized');
        }

        return this.firestore;
    }
}