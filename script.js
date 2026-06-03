// Login validation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const id = document.getElementById("userid").value.trim();
  const pass = document.getElementById("password").value.trim();
  if (id === "" || pass === "") {
    document.getElementById("loginError").textContent = "All fields are required!";
  } else {
    document.getElementById("loginError").textContent = "";
    alert("Login successful (frontend demo)!");
  }
});

// Signup validation
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value;
  const repass = document.getElementById("repass").value;

  if (!email.includes("@")) {
    document.getElementById("signupError").textContent = "Invalid email address!";
  } else if (pass.length < 6) {
    document.getElementById("signupError").textContent = "Password must be at least 6 characters!";
  } else if (pass !== repass) {
    document.getElementById("signupError").textContent = "Passwords do not match!";
  } else {
    document.getElementById("signupError").textContent = "";
    alert("Signup successful (frontend demo)!");
  }
});
