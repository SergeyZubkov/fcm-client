
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAp8ueQBS1IwK-IAlewoUCAwETsJLiU7fk",
  authDomain: "test-push-notifications-1d3e4.firebaseapp.com",
  projectId: "test-push-notifications-1d3e4",
  storageBucket: "test-push-notifications-1d3e4.appspot.com",
  messagingSenderId: "711051739834",
  appId: "1:711051739834:web:e9fafc0563ec27fbe47883"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
