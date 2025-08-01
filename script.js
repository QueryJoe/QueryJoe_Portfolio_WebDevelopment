const petBox = document.getElementById('petBox');
const petImage = document.getElementById('petImage');
const messageBox = document.getElementById('messageBox');

// List of messages and scores
const messages = [
  { text: "I'm really sorry! 😢", score: 1 },
  { text: "You mean the world to me ❤️", score: 2 },
  { text: "You're so cute when you're mad 🥰", score: 3 },
  { text: "Can I make it up to you? 💖", score: 4 },
  { text: "You’re my everything 🌸", score: 3 },
  { text: "Please forgive me 🐶", score: 1 },
  { text: "You always make me smile 😊", score: 2 },
];

// Map scores to image filenames
const petImages = {
  1: "cat_sad.jpg",
  2: "cat_angry.jpg",
  3: "cat_nerd.jpg",
  4: "cat_sad.jpg"
};

petBox.addEventListener('click', () => {
  // Add bounce effect
  petImage.classList.add('bounce');

  // Remove bounce effect after animation completes
  setTimeout(() => {
    petImage.classList.remove('bounce');
  }, 300);

  // Fade out message
  messageBox.style.opacity = 0;

  setTimeout(() => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    messageBox.textContent = random.text;

    // Change the pet image based on score
    const newImage = petImages[random.score] || 'pet_default.png';
    petImage.src = "/images/" + newImage;

    // Fade in message
    messageBox.style.opacity = 1;
  }, 400); // Wait for fade out before changing
});
