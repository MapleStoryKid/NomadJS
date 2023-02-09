const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


//아래 unction onLoginSubmit(tomato)안의 tomatosms 방금 일어난 이벤트에 대한 (object)정보를 전달한다.
function onLoginSubmit(tomato) {
  tomato.preventDefault();
  console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);