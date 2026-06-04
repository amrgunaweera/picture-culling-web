import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCpjSxqqgcmB4R--o0tegy2fwF4tsoUoxI",
  authDomain: "amrg-projects.firebaseapp.com",
  projectId: "amrg-projects",
  storageBucket: "amrg-projects.firebasestorage.app",
  messagingSenderId: "983114754283",
  appId: "1:983114754283:web:d4659df0c7d37da4d676ae",
  measurementId: "G-WE82Z6Q4DF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const logDownloadEvent = () => {
  logEvent(analytics, 'file_download', {
    file_name: 'Cullexa.Picture.Organizer.Setup.1.0.0.exe'
  });
};

export { analytics };
export default app;
