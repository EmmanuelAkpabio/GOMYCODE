function submission() {
    // Get the form element
    var form = document.querySelector('form');
  
    // Add an event listener to the form submit button
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the input values
      var name = document.getElementsByName('name')[0].value;
      var password = document.getElementsByName('password')[0].value;
      var phone = document.getElementsByName('phone')[0].value;
  
      // Check if the name is less than 8 characters
      if (name.length < 8) {
        alert('Name too short, must be at least 8 characters');
        return;
      }
  
      // Check if the password contains a special character
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert('Invalid password, must contain at least one special character');
        return;
      }
  
      // Check if the phone number is 11 digits
      if (phone.length !== 11) {
        alert('Phone number must be 11 digits');
        return;
      }
  
      // If all validations pass, submit the form
      alert('Submitted successfully!');
      form.submit();
    });
  }
  