document.getElementById('startButton').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('powerOffButton').classList.remove('hidden');
});

document.getElementById('powerOffButton').addEventListener('click', function() {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        alert('Powering Off...'); // Show alert after fade out
        document.body.style.display = 'none'; // Hide the application
    }, 1000); // Wait for fade out to complete
});