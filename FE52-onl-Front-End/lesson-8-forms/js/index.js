let password = document.querySelector(".password");
console.log(password);

password.addEventListener("blur", () => {
  console.log(password.value);
});

let userArray = [];

let formContact = document.querySelector("#contact");
console.log(formContact.elements.userName);

formContact.addEventListener("submit", (e) => {
  e.preventDefault();

  userArray.push(
    formContact.elements.userName.value,
    formContact.elements.userPassword.value
  );

  console.log(userArray);
});
