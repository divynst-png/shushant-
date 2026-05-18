const loginTab = document.getElementById("tab-login");
const signupTab = document.getElementById("tab-signup");

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

/* =========================
   SHOW LOGIN
========================= */

loginTab.addEventListener("click", () => {

  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");

  loginTab.classList.add("active");
  signupTab.classList.remove("active");

});

/* =========================
   SHOW SIGNUP
========================= */

signupTab.addEventListener("click", () => {

  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");

  signupTab.classList.add("active");
  loginTab.classList.remove("active");

});