const ratingScreen = document.getElementById('rating-screen');
const thankYouScreen = document.getElementById('thank-you-screen');
const ratingResult = document.getElementById('rating-result');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('form');

const ratings = document.querySelectorAll('.ratings');

let ratingValue = ""

ratings.forEach(rating => {
  rating.addEventListener('click', function() {
    ratingValue = rating.value
    submitBtn.disabled = false;
  });
});

submitBtn.disabled = true;

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent instant submission

    // First, delay the screen change to allow the animation to play
    setTimeout(() => {
        ratingScreen.style.display = 'none'; // Hide rating screen
        thankYouScreen.style.display = 'flex'; // Show the thank you screen
        ratingResult.innerHTML = `You selected ${ratingValue} out of 5`; // Show rating result
    }, 300); // Match the animation duration (500ms)

    // Then, submit the form after the animation completes
    setTimeout(() => {
        form.submit(); // Now submit the form
    }, );
});

