// const getUser = fetch(
//   "https://backend-parrainage.herokuapp.com/api/v1/readAllUsers"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//getUser;
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let lastName = document.getElementById("lastname");
  let firstName = document.getElementById("firstname");
  let email = document.getElementById("mail");
  let training = document.getElementById("training");

  let name = firstName.value.concat(" ", lastName.value);
  console.log(name);

  let data = {
    name: name,
    email: email.value,
    training: training.value,
  };

  const postUser = fetch(
    "https://backend-parrainage.herokuapp.com/api/v1/createUser",
    {
      method: "POST",
      body: data,
    }
  )
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
//   postUser;
});
