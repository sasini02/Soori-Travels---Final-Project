document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const forgotLink = document.getElementById('forgotLink');
  
    forgotLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents the link from navigating to a new page
  
      // Create the forgot password form
      const forgotPasswordForm = document.createElement('form');
      forgotPasswordForm.id = 'forgotPasswordForm';
      forgotPasswordForm.innerHTML = `
        <div class="login" data-aos="fade-up" data-aos-delay="150">
          <h2>Forgot Password?</h2>
        </div>
        <div class="email" data-aos="fade-up" data-aos-delay="300">
          <input type="email" placeholder="Enter your email" class="textbox" required>
        </div>
        <div data-aos="fade-up" data-aos-delay="450">
        <div class="reset" >
          <button type="submit" class="btn">Reset Password</button>
        </div>
        <div class="goback" >
          <p>Go back to <a href="login.html">login page</a></p>
        </div>
        </div>
      `;
  
      // Replace the login form with the forgot password form
      loginForm.parentNode.replaceChild(forgotPasswordForm, loginForm);
    });
  
  

  
  });
  



  // function setLoginStatus() {
  //     const username = document.getElementById('username').value;
  //     const password = document.getElementById('password').value;
  
  //     // Check if the username and password match a document in Firestore
  //     db.collection('users').where('username', '==', username).where('password', '==', password).get()
  //     .then(function(querySnapshot) {
  //         if (!querySnapshot.empty) {  
  //             // Username and password match, user is authenticated
  //             window.alert("Login successful!");
  //             // You can redirect to another page or perform additional actions here
  
  //             // For example, redirect to another page
  //             window.location.href = '/dashboard.html';
  //         } else {
  //             // No matching user found, show an error message
  //             window.alert("Invalid username or password. Please try again.");
  //         }
  //     })
  //     .catch(function(error) {
  //         console.error("Error checking login credentials: ", error);
  //     });
  
  // }
  
  function logout(){
    window.location.href ="index.html";
  }

  