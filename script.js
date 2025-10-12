document.addEventListener('DOMContentLoaded', () => {
    const surpriseButton = document.getElementById('surprise-button');
    const initialMessage = document.getElementById('initial-message');
    const surpriseContent = document.getElementById('surprise-content');

    // Function to handle the surprise reveal
    const revealSurprise = () => {
        // 1. Hide the initial message
        initialMessage.classList.add('hidden');

        // 2. Show the surprise content
        surpriseContent.classList.remove('hidden');

        // 3. Add a confetti effect or celebratory CSS class (optional, but fun)
        document.body.classList.add('celebrate');

        // 4. Start the heart animation loop
        // Note: The heart animation is primarily controlled by CSS, 
        // but we can make it reappear or change based on further logic if needed.
    };

    // Attach the event listener to the button
    surpriseButton.addEventListener('click', revealSurprise);
});