// Collection of happy words and messages for kids (use {name} as placeholder)
const happyMessages = [
    { emoji: "🌟", word: "{name}, you are a SUPERSTAR!" },
    { emoji: "🦋", word: "{name} is BEAUTIFUL inside and out!" },
    { emoji: "🚀", word: "{name} can do ANYTHING!" },
    { emoji: "🌈", word: "{name} makes the world COLORFUL!" },
    { emoji: "💪", word: "{name} is SO STRONG!" },
    { emoji: "🎨", word: "{name} is SO CREATIVE!" },
    { emoji: "❤️", word: "{name} is LOVED!" },
    { emoji: "🌻", word: "{name} SHINES like the sun!" },
    { emoji: "🦁", word: "{name} is BRAVE like a lion!" },
    { emoji: "🎈", word: "{name} makes everyone HAPPY!" },
    { emoji: "⭐", word: "{name} is SPECIAL!" },
    { emoji: "🌺", word: "{name} is WONDERFUL!" },
    { emoji: "🎪", word: "{name} is FUN to be with!" },
    { emoji: "🏆", word: "{name} is a WINNER!" },
    { emoji: "💎", word: "{name} is a TREASURE!" },
    { emoji: "🦄", word: "{name} is MAGICAL!" },
    { emoji: "🎵", word: "{name}'s smile is MUSIC!" },
    { emoji: "🌙", word: "{name} is DREAMY!" },
    { emoji: "🍀", word: "{name} is SO LUCKY!" },
    { emoji: "🎁", word: "{name} is a GIFT!" },
    { emoji: "🌸", word: "{name} is GENTLE and KIND!" },
    { emoji: "⚡", word: "{name} has SUPER POWERS!" },
    { emoji: "🎯", word: "{name} is FOCUSED!" },
    { emoji: "🌊", word: "{name} is AWESOME!" },
    { emoji: "🍭", word: "{name} is SWEET!" },
    { emoji: "🦋", word: "{name} can FLY HIGH!" },
    { emoji: "🌠", word: "{name}'s dreams will come TRUE!" },
    { emoji: "🎭", word: "{name} is UNIQUE!" },
    { emoji: "🧸", word: "{name} gives the best HUGS!" },
    { emoji: "🎉", word: "Today is {name}'s day!" },
    { emoji: "🌞", word: "{name} brightens everyone's day!" },
    { emoji: "💝", word: "{name}'s heart is GOLDEN!" },
    { emoji: "🎨", word: "{name} is a MASTERPIECE!" },
    { emoji: "🌍", word: "{name} makes the world BETTER!" },
    { emoji: "🎸", word: "{name} is COOL!" },
    { emoji: "🍎", word: "{name} is SMART!" },
    { emoji: "🏅", word: "{name} is a CHAMPION!" },
    { emoji: "🎀", word: "{name} is PRECIOUS!" },
    { emoji: "🐬", word: "{name} is PLAYFUL and FUN!" },
    { emoji: "🌷", word: "{name} is GROWING every day!" }
];

// Track the last index to avoid repeating the same message twice
let lastIndex = -1;
let studentName = "Friend";

function startApp() {
    const nameInput = document.getElementById('studentName');
    const nameContainer = document.getElementById('nameContainer');
    const wordDisplay = document.getElementById('wordDisplay');
    const magicButton = document.getElementById('magicButton');

    // Get the name or use default
    studentName = nameInput.value.trim() || "Friend";
    // Capitalize first letter
    studentName = studentName.charAt(0).toUpperCase() + studentName.slice(1);

    // Hide name input, show the main app
    nameContainer.classList.add('hidden');
    wordDisplay.classList.remove('hidden');
    magicButton.classList.remove('hidden');
    document.getElementById('backButton').classList.remove('hidden');

    // Generate first happy word
    generateHappyWord();
}

function generateHappyWord() {
    const wordDisplay = document.getElementById('wordDisplay');
    const emojiElement = document.getElementById('emoji');
    const wordElement = document.getElementById('word');
    const button = document.getElementById('magicButton');

    // Get a random message (different from the last one)
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * happyMessages.length);
    } while (randomIndex === lastIndex && happyMessages.length > 1);
    
    lastIndex = randomIndex;
    const message = happyMessages[randomIndex];

    // Replace {name} placeholder with actual name
    const personalizedWord = message.word.replace('{name}', studentName);

    // Add pop animation
    wordDisplay.classList.remove('pop');
    // Trigger reflow to restart animation
    void wordDisplay.offsetWidth;
    wordDisplay.classList.add('pop');

    // Update content
    emojiElement.textContent = message.emoji;
    wordElement.textContent = personalizedWord;

    // Add sparkle effect to button
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 100);

    // Create confetti effect
    createConfetti();
}

function createConfetti() {
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#1dd1a1', '#ffeaa7'];
    const container = document.querySelector('.container');

    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${50 + (Math.random() - 0.5) * 30}%;
            top: 50%;
            animation: confettiFall ${1 + Math.random()}s ease-out forwards;
        `;

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
}

// Add confetti animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(200px) rotate(720deg) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function goBack() {
    const nameContainer = document.getElementById('nameContainer');
    const wordDisplay = document.getElementById('wordDisplay');
    const magicButton = document.getElementById('magicButton');
    const backButton = document.getElementById('backButton');

    // Show name input, hide main app
    nameContainer.classList.remove('hidden');
    wordDisplay.classList.add('hidden');
    magicButton.classList.add('hidden');
    backButton.classList.add('hidden');

    // Focus on the input
    document.getElementById('studentName').focus();
}

// Allow Enter key to start app from name input
document.addEventListener('keydown', (e) => {
    const nameContainer = document.getElementById('nameContainer');
    const isNameInputVisible = !nameContainer.classList.contains('hidden');

    if (e.code === 'Enter') {
        e.preventDefault();
        if (isNameInputVisible) {
            startApp();
        } else {
            generateHappyWord();
        }
    } else if (e.code === 'Space' && !isNameInputVisible) {
        e.preventDefault();
        generateHappyWord();
    }
});
