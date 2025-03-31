// Get the elements
const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const toggleIcon = document.getElementById('toggleIcon');

// Add event listener
togglePassword.addEventListener('click', () => {
  // Toggle password visibility
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    passwordField.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  }
});

// login form validation

document.addEventListener("DOMContentLoaded", function () {
  const form= document.getElementById("loginForm");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // input fields
    const userid=document.getElementById("userId").value.trim();
    const password=document.getElementById("password").value.trim();
   
    if(userid==="" || password===""){
      alert("All fields are mandatory")
    }
    else if(password.length>7){
      alert("password must be 6 digits");
    }
    else{
      alert("Login successfull!");
      form.reset();
    }
  })

});
