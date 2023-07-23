let closeLogin = document.getElementById("closelogin");
let login = document.getElementById("login");
let loginRegisterBtn = document.getElementById("loginRegisterBtn");
loginRegisterBtn.addEventListener("click", () => {
  login.style.display = "block";
});
closeLogin.addEventListener("click", () => {
  login.style.display = "none";
});

const success = () => {
  swal("Congratulations!", "You are logged in", "success");

    login.style.display = "none";

};
