let flname = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let submit = document.getElementById('submit');

function handleForm() {

    let err = [];
    let data = {};

    if (flname.value != '') {
        data.name = flname.value;
    } else {
        err.push("Full name is missing");
    }

    if (email.value != '') {
        if (email.value.includes('@') && email.value.includes('.')) {
            data.email = email.value;
        } else {
            err.push("Please enter a valid email");
        }
    } else {
        err.push("Email is missing");
    }

    if (message.value != '') {
        data.message = message.value;
    } else {
        err.push("Message is missing");
    }

    if (err.length === 0) {
        console.log("COLLECTED DATA");
        console.log(data);
      } else {
        console.log("ERRORS");
        console.log(err);
      }

}

submit.addEventListener('click', handleForm);
