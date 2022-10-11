// recuperation du formulaire avec formaData
var form = document.querySelector("form");
// console.log(form);
// const data = {};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let lastname = document.querySelector("#lastname").value;
  let firstname = document.querySelector("#firstname").value;
  let email = document.querySelector("#email").value;
  let training = document.querySelector("#training").value;
  let name = lastname.concat(" ", firstname);
  console.log(name);
  const data = {
    name: name,
    email: email,
    training: training,
  };
  postUsers(data);
});

// Requêter tout les utilisateurs.
const getUser = fetch("https://hetic-godson.herokuapp.com/api/v1/readAllUsers")
  .then((res) => res.json())
  .then((data) => console.log(data));

getUser;

function postUsers(data) {
  fetch("https://hetic-godson.herokuapp.com/api/v1/createUser", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
