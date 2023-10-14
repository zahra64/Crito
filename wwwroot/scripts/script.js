
// Function to validate form fields on keyup
document.getElementById('name').addEventListener('keyup', function () {
    validateNameOnKeyUp(this);
});

document.getElementById('email').addEventListener('keyup', function () {
    validateEmailOnKeyUp(this);
});

document.getElementById('message').addEventListener('keyup', function () {
    validateMessageOnKeyUp(this);
});

// Function to validate the form before submission
function validateForm() {
  
    validateNameOnKeyUp(document.getElementById('name'));
    validateEmailOnKeyUp(document.getElementById('email'));
    validateMessageOnKeyUp(document.getElementById('message'));

    // Use jQuery Validate to trigger client-side validation
    var form = $('form');
    if (form.valid()) {
        return true; // Proceed with form submission if validation passes
    }
    return false; // Prevent form submission if validation fails
}


function validateNameOnKeyUp(input) {
    var name = input.value;
    var nameValidationMessage = document.getElementById('name').nextElementSibling;

    if (name.length < 2) {
        nameValidationMessage.innerText = 'Name must be at least 2 characters.';
    } else {
        nameValidationMessage.innerText = '';
    }
}


function validateEmailOnKeyUp(input) {
    var email = input.value;
    var emailValidationMessage = document.getElementById('email').nextElementSibling;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(email)) {
        emailValidationMessage.innerText = 'Invalid email address.';
    } else {
        emailValidationMessage.innerText = '';
    }
}


function validateMessageOnKeyUp(input) {
    var message = input.value;
    var messageValidationMessage = document.getElementById('message').nextElementSibling;

    if (message.length < 4) {
        messageValidationMessage.innerText = 'Message must be at least 4 characters.';
    } else {
        messageValidationMessage.innerText = '';
    }
}