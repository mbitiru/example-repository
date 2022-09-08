let x = document.getElementById("LogIn");
let y = document.getElementById("SignUp");
let z = document.getElementById("btn");

function SignUp() {
    x.style.left = "450px";
    y.style.left = "50px";
    z.style.left = "110px";
    
  }
  function LogIn() {
    x.style.left = "40px";
    y.style.left = "450px";
    z.style.left = "0px";
  }

  //event-listeners
  document.getElementById("LogIn").addEventListener("click",LogIn);
  document.getElementById("SignUp").addEventListener("click",SignUp);
  document.getElementById("btn").addEventListener("click",btn);