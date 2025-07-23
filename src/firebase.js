import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAU9tiOkoyo6sdIwZQZRKDQ1pyxNiVem-o",
  authDomain: "adamciszek-647d0.firebaseapp.com",
  projectId: "adamciszek-647d0",
  storageBucket: "adamciszek-647d0.appspot.com",
  messagingSenderId: "397670153154",
  appId: "1:397670153154:web:6ec5dc65a6e854a3c5745b",
  measurementId: "G-32QT72H0E6"
};

let app, analytics;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
} else {
  app = getApps()[0];
  analytics = getAnalytics(app);
}

export { analytics, logEvent }; 