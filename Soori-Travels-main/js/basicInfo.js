// import firebase from 'firebase/compat/app';  // The 'compat' version is used for backward compatibility.
// import 'firebase/compat/firestore';     

//     // Your web app's Firebase configuration
//     const firebaseConfig = {
//       apiKey: "AIzaSyCuabmc1djlyxxQBPQaYUUhRPEj55072S4",
//       authDomain: "sooritravels.firebaseapp.com",
//       databaseURL: "https://sooritravels-default-rtdb.asia-southeast1.firebasedatabase.app",
//       projectId: "sooritravels",
//       storageBucket: "sooritravels.appspot.com",
//       messagingSenderId: "89412229823",
//       appId: "1:89412229823:web:0a433668d6aacc2dd9840a",
//       measurementId: "G-J7K7LEHXWW"
//     };

//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     firebase.firestore(); // Initialize Firestore
  
  
  
//   function displayBasicInfoForm() {
//     var basicInfoForm = document.createElement('div');
//     basicInfoForm.classList.add('basic-info-form'); // Add a class to the div
    
//     // Retrieve data from Firebase Firestore
//     firestore.collection('users').doc('yourUserId').get()
//         .then((doc) => {
//             if (doc.exists) {
//                 const userData = doc.data();
//                 // Update the innerHTML of basicInfoForm with the retrieved data
//                 basicInfoForm.innerHTML = `
//                     <h2>${userData.fullname}</h2>
//                     <p>Email: ${userData.email}</p>
//                     <p>Nationality: ${userData.nationality}</p>
//                 `;
//             } else {
//                 console.log('No such document!');
//             }
//         })
//         .catch((error) => {
//             console.error('Error getting document:', error);
//         });

//     // Append the basicInfoForm to the detailsForm
//     detailsForm.innerHTML = '';
//     detailsForm.appendChild(basicInfoForm);
//     }