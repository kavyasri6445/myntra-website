// Get elements
const registerBtn = document.getElementById('registerBtn');
const popup = document.getElementById('registrationPopup');
const closePopup = document.getElementById('closePopup');
const registrationForm = document.getElementById('registrationForm');
const message = document.getElementById('message');

// Show popup
registerBtn.addEventListener('click', function() {
    popup.style.display = 'flex';
});

// Close popup
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Handle form submission
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (name && email && password) {
        // Ideally, send this data to a server here

        // Display a success message
        message.textContent = 'Registration successful!';
        message.style.color = 'green';

        // Clear the form
        registrationForm.reset();
    } else {
        // Display an error message
        message.textContent = 'Please fill in all fields.';
    }
});
