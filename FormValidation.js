console.log("this is a From Validation project");

let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Phone_Number = document.getElementById("Phone_Number");

let validEmail = false;
let validPhone = false;
let validUser = false;
$("#failure").hide();
$("#success").hide();

Name.addEventListener("blur", (e) => {
  console.log("name is blured");
  let regex = /^[a-zA-Z][\w\s]{2,20}[^0-9]$/;
  let str = Name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Name Successfully matched");
    Name.classList.remove("is-invalid");
    validUser = true;
  } else {
    console.log("Name not match");
    Name.classList.add("is-invalid");
    validUser = false;
  }
});

Email.addEventListener("blur", () => {
  console.log("email is blured");
  let regex = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){1,4}$/;
  let str = Email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Email successfully matched");
    Email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("Email not matched");
    Email.classList.add("is-invalid");
    validEmail = false;
  }
});

Phone_Number.addEventListener("blur", () => {
  console.log("phone_number is blured");
  let regex = /^[0-9]{10}$/;
  let str = Phone_Number.value;
  console.log(regex, str);

  if (regex.test(str)) {
    console.log("Number Successfully Matched");
    Phone_Number.classList.remove("is-invalid");
    validPhone = true;
  } else {
    console.log("Number not match");
    Phone_Number.classList.add("is-invalid");
    validPhone = false;
  }
});

let sumbit = document.getElementById("Submit");
sumbit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  console.log(validUser, validEmail, validPhone);
  if (validEmail && validUser && validPhone) {
    console.log("Phone, email and user are valid. Submitting the form");
    let success = document.getElementById("success");
    success.classList.add("show");
    $("#failure").hide();
    $("#success").show();
  } else {
    console.log("One of Phone, email or user are not valid.");
    let failure = document.getElementById("failure");
    failure.classList.add("show");
    $("#success").hide();
    $("#failure").show();
  }
});
