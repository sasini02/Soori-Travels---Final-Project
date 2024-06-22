function toggleEditMode() {
    // Enable editing for textboxes
    document.getElementById('fullname').readOnly = false;
    document.getElementById('email').readOnly = true;
    document.getElementById('nationality').readOnly = false;

    // Hide update button, show edit buttons
    document.getElementById('updateBtn').style.display = 'none';
    document.getElementById('btnedit').style.display = 'block';
}

// function saveChanges() {
//     // Disable editing for textboxes
//     document.getElementById('fullname').readOnly = true;
//     document.getElementById('email').readOnly = true;
//     document.getElementById('nationality').readOnly = true;

//     // Hide edit buttons, show update button
//     document.getElementById('btnedit').style.display = 'none';
//     document.getElementById('updateBtn').style.display = 'block';

//     const userEmail = localStorage.getItem('userEmail');

//     if (userEmail) {
//         // Reference to the form elements
//         const fullnameInput = document.getElementById('fullname');
//         const emailInput = document.getElementById('email');
//         const nationalityInput = document.getElementById('nationality');

//         // Update user data in Firestore
//         db.collection('users').where('email', '==', userEmail).get()
//             .then((querySnapshot) => {
//                 if (!querySnapshot.empty) {
//                     // Update the first matching document
//                     const docId = querySnapshot.docs[0].id;
//                     db.collection('users').doc(docId).update(updatedData)
//                         .then(() => {
//                             console.log("Document successfully updated!");

//                             // Update the text boxes with the updated data
//                             fullnameInput.value = updatedData.name;
//                             emailInput.value = updatedData.email;
//                             nationalityInput.value = updatedData.country;

//                             // Disable editing for textboxes
//                             fullnameInput.readOnly = true;
//                             emailInput.readOnly = true;
//                             nationalityInput.readOnly = true;

//                             // Hide edit buttons, show update button
//                             document.getElementById('btnedit').style.display = 'none';
//                             document.getElementById('updateBtn').style.display = 'block';
//                         })
//                         .catch((error) => {
//                             console.error("Error updating document: ", error);
//                         });
//                 } else {
//                     console.log("No matching document!");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error getting documents: ", error);
//             });
//     } else {
//         alert("User email not found in localStorage.");
//     }
// }

// function cancelChanges() {
//     // Reset textbox values to initial values
//     document.getElementById('fullname').value = 'Prasasthi Malinda Dewasurendra';
//     document.getElementById('email').value = 'prasasthid@gmail.com';
//     document.getElementById('nationality').value = 'Srilankan';

//     // Disable editing for textboxes
//     document.getElementById('fullname').readOnly = true;
//     document.getElementById('email').readOnly = true;
//     document.getElementById('nationality').readOnly = true;

//     // Hide edit buttons, show update button
//     document.getElementById('btnedit').style.display = 'none';
//     document.getElementById('updateBtn').style.display = 'block';
// }

// function saveChanges() {
//     // Disable editing for textboxes
//     document.getElementById('fullname').readOnly = true;
//     document.getElementById('email').readOnly = true;
//     document.getElementById('nationality').readOnly = true;

//     // Hide edit buttons, show update button
//     document.getElementById('btnedit').style.display = 'none';
//     document.getElementById('updateBtn').style.display = 'block';

//     const userEmail = localStorage.getItem('userEmail');

//     if (userEmail) {
//         // Reference to the form elements
//         const fullnameInput = document.getElementById('fullname');
//         const emailInput = document.getElementById('email');
//         const nationalityInput = document.getElementById('nationality');

//         // Create an object with the updated data
//         const updatedData = {
//             name: fullnameInput.value,
//             email: emailInput.value,
//             country: nationalityInput.value
//         };

//         // Update user data in Firestore
//         db.collection('users').where('email', '==', userEmail).get()
//             .then((querySnapshot) => {
//                 if (!querySnapshot.empty) {
//                     // Update the first matching document
//                     const docId = querySnapshot.docs[0].id;
//                     db.collection('users').doc(docId).update(updatedData)
//                         .then(() => {
//                             console.log("Document successfully updated!");

//                             // Disable editing for textboxes
//                             fullnameInput.readOnly = true;
//                             emailInput.readOnly = true;
//                             nationalityInput.readOnly = true;

//                             // Hide edit buttons, show update button
//                             document.getElementById('btnedit').style.display = 'none';
//                             document.getElementById('updateBtn').style.display = 'block';
//                         })
//                         .catch((error) => {
//                             console.error("Error updating document: ", error);
//                         });
//                 } else {
//                     console.log("No matching document!");
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error getting documents: ", error);
//             });
//     } else {
//         alert("User email not found in localStorage.");
//     }
// }

function saveChanges() {
    // Disable editing for textboxes
    document.getElementById('fullname').readOnly = true;
    document.getElementById('email').readOnly = true;
    document.getElementById('nationality').readOnly = true;

    // Hide edit buttons, show update button
    document.getElementById('btnedit').style.display = 'none';
    document.getElementById('updateBtn').style.display = 'block';

    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        // Reference to the form elements
        const fullnameInput = document.getElementById('fullname');
        const emailInput = document.getElementById('email');
        const nationalityInput = document.getElementById('nationality');

        // Basic input validation
        if (!validateInputs(fullnameInput, emailInput, nationalityInput)) {
            // Validation failed, show an error message or take appropriate action
            return;
        }

        // Create an object with the updated data
        const updatedData = {
            name: fullnameInput.value,
            email: emailInput.value,
            country: nationalityInput.value
        };

        // Update user data in Firestore
        db.collection('users').where('email', '==', userEmail).get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    // Update the first matching document
                    const docId = querySnapshot.docs[0].id;
                    db.collection('users').doc(docId).update(updatedData)
                        .then(() => {
                            console.log("Document successfully updated!");

                            // Show success message
                            alert("Details successfully updated!");

                            // Disable editing for textboxes
                            fullnameInput.readOnly = true;
                            emailInput.readOnly = true;
                            nationalityInput.readOnly = true;

                            // Hide edit buttons, show update button
                            document.getElementById('btnedit').style.display = 'none';
                            document.getElementById('updateBtn').style.display = 'block';
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });
                } else {
                    console.log("No matching document!");
                }
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
            });
    } else {
        alert("User email not found in localStorage.");
    }
}

// Function to perform basic input validation
function validateInputs(fullnameInput, emailInput, nationalityInput) {
    // Basic validation for full name (only letters)
    const fullNameRegex = /^[A-Za-z\s]+$/;
    if (!fullNameRegex.test(fullnameInput.value)) {
        alert("Full name can only contain letters and spaces.");
        return false;
    }

    // Basic validation for email (check if it's the same as the original)
    const originalEmail = localStorage.getItem('userEmail');
    if (emailInput.value !== originalEmail) {
        alert("Email cannot be changed.");
        return false;
    }

    // You can add more validation rules for other fields if needed

    return true; // All validation passed
}



function cancelChanges() {
    // Retrieve user email from localStorage
    const userEmail = localStorage.getItem('userEmail');

    if (userEmail) {
        // Reference to the form elements
        const fullnameInput = document.getElementById('fullname');
        const emailInput = document.getElementById('email');
        const nationalityInput = document.getElementById('nationality');

        // Get user data from Firestore based on email
        db.collection('users').where('email', '==', userEmail).get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    const userData = querySnapshot.docs[0].data();

                    // Update the text boxes with the retrieved data
                    fullnameInput.value = userData.name;
                    emailInput.value = userData.email;
                    nationalityInput.value = userData.country;

                    // Disable editing for textboxes
                    fullnameInput.readOnly = true;
                    emailInput.readOnly = true;
                    nationalityInput.readOnly = true;

                    // Hide edit buttons, show update button
                    document.getElementById('btnedit').style.display = 'none';
                    document.getElementById('updateBtn').style.display = 'block';
                } else {
                    console.log("No matching document!");
                }
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
            });
    } else {
        alert("User email not found in localStorage.");
    }
}

// ----------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    var detailsForm = document.getElementById('detailsForm');
    var menuItems = document.querySelectorAll('.menu-items .item a');

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents the link from navigating to a new page
            var clickedLink = event.target.id;

            // Clear existing form content
            detailsForm.innerHTML = '';

            switch (clickedLink) {
                case 'basicInfo':
                //     // Display basic information interface
                     basicinfo();
                     break;
                case 'security':
                    // Display security interface
                    displaySecurityForm();
                    break;
                case 'bookingHistory':
                    // Display booking history interface
                    displayBookingHistoryForm();
                    break;
                case 'settings':
                    // Display settings interface
                    displaySettingsForm();
                    break;
                default:
                    break;
            }
        });
    });

    function basicinfo() {
        // Create the basicForm div
        var basicForm = document.createElement('div');
        basicForm.classList.add('basic-form'); // Add a class to the div
    
        // Define the structure of the form using innerHTML
        basicForm.innerHTML = `
            <form id="detailsForm" data-aos="fade-up" data-aos-duration="1000">
                <h2>Basic Information</h2>
                <div class="username">
                    <label>Full Name</label><br>
                    <input type="text" id="fullname" readonly class="textbox">
                </div>
                <div class="email">
                    <label>Email Address</label><br>
                    <input type="text" id="email" readonly class="textbox">
                </div>
                <div class="nationality">
                    <label>Nationality</label><br>
                    <input type="text" id="nationality" readonly class="textbox">
                </div>
                <div class="btnupdate" id="btnupdate">
                    <button type="button" id="updateBtn" class="btn" onclick="toggleEditMode()">Update Details</button>
                </div>
                <div class="btnedit" id="btnedit" style="display: none;">
                    <button type="button" id="saveBtn" class="btn" onclick="saveChanges()">Save</button>
                    <button type="button" id="cancelBtn" class="btn" onclick="cancelChanges()">Cancel</button>
                </div>
            </form>
        `;
    
        // Append the basicForm to the detailsForm element
        detailsForm.appendChild(basicForm);
    
        // Retrieve user email from localStorage
        const userEmail = localStorage.getItem('userEmail');
    
        if (userEmail) {
            // Reference to the form elements
            const fullnameInput = document.getElementById('fullname');
            const emailInput = document.getElementById('email');
            const nationalityInput = document.getElementById('nationality');
    
            // Get user data from Firestore based on email
            db.collection('users').where('email', '==', userEmail).get()
                .then((querySnapshot) => {
                    if (!querySnapshot.empty) {
                        const userData = querySnapshot.docs[0].data();
    
                        // Update the text boxes with the retrieved data
                        fullnameInput.value = userData.name;
                        emailInput.value = userData.email;
                        nationalityInput.value = userData.country;
                    } else {
                        console.log("No matching document!");
                    }
                })
                .catch((error) => {
                    console.error("Error getting documents: ", error);
                });
        } else {
            alert("User email not found in localStorage.");
        }
    }

    // function displaySecurityForm() {
    //     // Implement the logic to display the security interface
    //     // For example, create a new div and set its innerHTML
    //     var securityForm = document.createElement('div');
    //     securityForm.classList.add('security-form'); // Add a class to the div
    //     securityForm.innerHTML = `
    //     <form id="securityForm"  data-aos="fade-up" data-aos-duration="1000">
    //                     <h2>Change Password</h2>
    //                     <div class="currentPassword">
    //                         <label>Current password</label><br>
    //                         <input type="password" class="textbox" placeholder="Current password">
    //                     </div>
    //                     <div class="newPassword">
    //                         <label>New password</label><br>
    //                         <input type="password" class="textbox" placeholder="New password">
    //                     </div>
    //                     <div class="confirmNew">
    //                         <label>Confirm new password</label><br>
    //                         <input type="password" class="textbox" placeholder="Confirm new password">
    //                     </div>
    //                     <div class="changePassword">
    //                         <button class="btn">Change Password</button>
    //                     </div>
    //                 </form>
    //     `;
    //     detailsForm.appendChild(securityForm);
    //     const currentPasswordInput = document.getElementById('currentPassword');
    //     const newPasswordInput = document.getElementById('newPassword');
    //     const confirmNewPasswordInput = document.getElementById('confirmNewPassword');
    
    //     // Validate new password and confirm new password
    //     if (newPasswordInput.value !== confirmNewPasswordInput.value) {
    //         alert("New password and confirm new password do not match.");
    //         return;
    //     }

    //     const updatedData = {
    //         // ... (your existing data fields)
    //         password: newPasswordInput.value,
    //     };

    //     // Append the securityForm to the detailsForm
        
    // }

    function displaySecurityForm() {
        // Implement the logic to display the security interface
        // For example, create a new div and set its innerHTML
        var securityForm = document.createElement('div');
        securityForm.classList.add('security-form'); // Add a class to the div
        securityForm.innerHTML = `
            <form id="securityForm"  data-aos="fade-up" data-aos-duration="1000">
                <h2>Change Password</h2>
                <div class="currentPassword">
                    <label>Current password</label><br>
                    <input type="password" id="currentPassword" class="textbox" placeholder="Current password">
                </div>
                <div class="newPassword">
                    <label>New password</label><br>
                    <input type="password" id="newPassword" class="textbox" placeholder="New password">
                </div>
                <div class="confirmNew">
                    <label>Confirm new password</label><br>
                    <input type="password" id="confirmNewPassword" class="textbox" placeholder="Confirm new password">
                </div>
                <div class="changePassword">
                    <button class="btn" onclick="changePassword(event)">Change Password</button>
                </div>
            </form>
        `;
    
        // Append the securityForm to the detailsForm
        detailsForm.appendChild(securityForm);
    }
    
    function changePassword(event) {
        event.preventDefault();  // Prevent the default form submission behavior
    
        const currentPasswordInput = document.getElementById('currentPassword');
        const newPasswordInput = document.getElementById('newPassword');
        const confirmNewPasswordInput = document.getElementById('confirmNewPassword');
    
        // Log the values for debugging
        console.log('Current Password:', currentPasswordInput.value);
        console.log('New Password:', newPasswordInput.value);
        console.log('Confirm New Password:', confirmNewPasswordInput.value);
    
        // Validate new password and confirm new password
        if (newPasswordInput.value !== confirmNewPasswordInput.value) {
            alert("New password and confirm new password do not match.");
            return;
        }
    
        const updatedData = {
            // ... (your existing data fields)
            password: newPasswordInput.value,
        };
    
        // Continue with the rest of your logic for updating the password
    
        // Log a success message
        console.log('Password successfully changed!');
    }
    
    
    

    function displayBookingHistoryForm() {
        // Implement the logic to display the booking history interface
        // For example, create a new div and set its innerHTML
        var bookingHistoryForm = document.createElement('div');
        bookingHistoryForm.classList.add('booking-history-form'); // Add a class to the div
        bookingHistoryForm.innerHTML = `
            <h2 data-aos="fade-up" data-aos-duration="1000">Booking History</h2>
            <!-- Rest of the form content -->
        `;

        // Append the bookingHistoryForm to the detailsForm
        detailsForm.appendChild(bookingHistoryForm);
    }

    function displaySettingsForm() {
        // Implement the logic to display the settings interface
        // For example, create a new div and set its innerHTML
        var settingsForm = document.createElement('div');
        settingsForm.classList.add('settings-form'); // Add a class to the div
        settingsForm.innerHTML = `
        <form id="settingForm"  data-aos="fade-up" data-aos-duration="1000">
            <h2 data-aos="fade-up" data-aos-duration="1000">Settings</h2>
            <p>Click if you want to logout</p>
            <input type="button" class="btn" value="Logout" onclick="window.location.href = 'index.html'">
        </form>
        `;

        // Append the settingsForm to the detailsForm
        detailsForm.appendChild(settingsForm);
    }
});