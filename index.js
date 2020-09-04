const openModalBtn = document.querySelector("#openModalBtn");
const modalWrapper = document.querySelector(".modal-wrapper");
const closeBtn = document.querySelector("#closeBtn");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const birthdate = document.querySelector("#birthdate");
const education = document.querySelector("#education");
const genderRadion = document.getElementById("male");
const modal = document.querySelector(".modal");
const mess = document.querySelector("#mess");
let arr = [];

function validateForm() {
  const valid = document.forms["myForm"]["name"].value;
  if (valid === "") {
    name.className = "invalid";
    document.getElementById("demo").innerHTML = "This field is required";
    return false;
  }
  return true;
};


openModalBtn.addEventListener("click", function (event) {
  if (validateForm()) {
    const nameValue = name.value;
    const ageValue = age.value;
    const birthdateValue = birthdate.value;
    const educationValue = education.value;
    const gender = genderRadion.checked ? "male" : "female";
    event.preventDefault();
    modalWrapper.style.display = "block";

    arr.push(nameValue);
    arr.push(ageValue);
    arr.push(birthdateValue);
    arr.push(educationValue);
    arr.push(gender);

    arr.forEach((item) => {
      mess.innerHTML += ` ${item}`
    })
  }
  else {
    validateForm();
  }
});

closeBtn.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});




