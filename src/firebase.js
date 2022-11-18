import { initializeApp }  from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyAp8ueQBS1IwK-IAlewoUCAwETsJLiU7fk",
  authDomain: "test-push-notifications-1d3e4.firebaseapp.com",
  projectId: "test-push-notifications-1d3e4",
  storageBucket: "test-push-notifications-1d3e4.appspot.com",
  messagingSenderId: "711051739834",
  appId: "1:711051739834:web:e9fafc0563ec27fbe47883"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getTokens = async (setTokenFound: React.Dispatch<React.SetStateAction<boolean>>) => {
//VAPID_KEY is the Web push certificates key pair
  return getToken(messaging, {vapidKey: "BKRfRcOZ3OI3346ts_1ZPgBSAqFziv1yYIVLp5_7-6vjljOMrd5c_qatD6DtatfyTf_qIflw1O-BOSNgMmFCY0s" }).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(currentToken);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound('');
      // shows on the UI that permission is required
    }
  }).catch((err) => {
    if (err.code === "messaging/permission-blocked") {

    }
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });
