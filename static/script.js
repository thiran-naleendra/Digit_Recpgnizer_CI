document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Display loading spinner
    document.getElementById('loading-spinner').style.display = 'inline-block';

    // Get image file
    var fileInput = document.getElementById('image');
    var imageFile = fileInput.files[0];

    // Prepare form data
    var formData = new FormData();
    formData.append('image', imageFile);

    // Send AJAX request
    fetch('/predict', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Hide loading spinner
            document.getElementById('loading-spinner').style.display = 'none';

            // Display result or error message
            if (data.digit !== undefined) {
                document.getElementById('predicted-digit').textContent = 'The predicted digit is: ' + data.digit;
                document.getElementById('error-message').textContent = '';
            } else if (data.error_message !== undefined) {
                document.getElementById('predicted-digit').textContent = '';
                document.getElementById('error-message').textContent = data.error_message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('loading-spinner').style.display = 'none';
            document.getElementById('predicted-digit').textContent = '';
            document.getElementById('error-message').textContent = 'An error occurred during the prediction. Please try again.';
        });
});