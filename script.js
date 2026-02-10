// Collection of happy words and messages for kids (use {name} as placeholder)
const happyMessages = [
    // Praise Messages
    { emoji: "🌟", word: "{name}, you are a SUPERSTAR!", category: "praise" },
    { emoji: "🦋", word: "{name} is BEAUTIFUL inside and out!", category: "praise" },
    { emoji: "🚀", word: "{name} can do ANYTHING!", category: "praise" },
    { emoji: "🌈", word: "{name} makes the world COLORFUL!", category: "praise" },
    { emoji: "💪", word: "{name} is SO STRONG!", category: "praise" },
    { emoji: "🎨", word: "{name} is SO CREATIVE!", category: "praise" },
    { emoji: "❤️", word: "{name} is LOVED!", category: "praise" },
    { emoji: "🌻", word: "{name} SHINES like the sun!", category: "praise" },
    { emoji: "🦁", word: "{name} is BRAVE like a lion!", category: "praise" },
    { emoji: "🎈", word: "{name} makes everyone HAPPY!", category: "praise" },
    { emoji: "⭐", word: "{name} is SPECIAL!", category: "praise" },
    { emoji: "🌺", word: "{name} is WONDERFUL!", category: "praise" },
    { emoji: "🎪", word: "{name} is FUN to be with!", category: "praise" },
    { emoji: "🏆", word: "{name} is a WINNER!", category: "praise" },
    { emoji: "💎", word: "{name} is a TREASURE!", category: "praise" },
    { emoji: "🦄", word: "{name} is MAGICAL!", category: "praise" },
    { emoji: "🎵", word: "{name}'s smile is MUSIC!", category: "praise" },
    { emoji: "🌙", word: "{name} is DREAMY!", category: "praise" },
    { emoji: "🍀", word: "{name} is SO LUCKY!", category: "praise" },
    { emoji: "🎁", word: "{name} is a GIFT!", category: "praise" },
    { emoji: "🌸", word: "{name} is GENTLE and KIND!", category: "praise" },
    { emoji: "⚡", word: "{name} has SUPER POWERS!", category: "praise" },
    { emoji: "🌊", word: "{name} is AWESOME!", category: "praise" },
    { emoji: "🍭", word: "{name} is SWEET!", category: "praise" },
    { emoji: "🦋", word: "{name} can FLY HIGH!", category: "praise" },
    { emoji: "🌠", word: "{name}'s dreams will come TRUE!", category: "praise" },
    { emoji: "🎭", word: "{name} is UNIQUE!", category: "praise" },
    { emoji: "🧸", word: "{name} gives the best HUGS!", category: "praise" },
    { emoji: "🎉", word: "Today is {name}'s day!", category: "praise" },
    { emoji: "🌞", word: "{name} brightens everyone's day!", category: "praise" },
    { emoji: "💝", word: "{name}'s heart is GOLDEN!", category: "praise" },
    { emoji: "🎨", word: "{name} is a MASTERPIECE!", category: "praise" },
    { emoji: "🌍", word: "{name} makes the world BETTER!", category: "praise" },
    { emoji: "🎸", word: "{name} is COOL!", category: "praise" },
    { emoji: "🍎", word: "{name} is SMART!", category: "praise" },
    { emoji: "🏅", word: "{name} is a CHAMPION!", category: "praise" },
    { emoji: "🎀", word: "{name} is PRECIOUS!", category: "praise" },
    { emoji: "🐬", word: "{name} is PLAYFUL and FUN!", category: "praise" },
    { emoji: "🌷", word: "{name} is GROWING every day!", category: "praise" },
    { emoji: "👑", word: "{name} is ROYALTY!", category: "praise" },
    { emoji: "🧠", word: "{name} is SO CLEVER!", category: "praise" },
    { emoji: "💫", word: "{name} is OUT OF THIS WORLD!", category: "praise" },
    { emoji: "🎖️", word: "{name} deserves a GOLD MEDAL!", category: "praise" },
    { emoji: "🦸", word: "{name} is a SUPERHERO!", category: "praise" },
    { emoji: "📚", word: "{name} is an AMAZING learner!", category: "praise" },
    { emoji: "🤝", word: "{name} is a GREAT friend!", category: "praise" },
    { emoji: "🎤", word: "{name}'s voice MATTERS!", category: "praise" },
    { emoji: "🧩", word: "{name} solves problems like a PRO!", category: "praise" },
    { emoji: "🌟", word: "{name} is UNSTOPPABLE!", category: "praise" },
    { emoji: "🎓", word: "{name} is SO INTELLIGENT!", category: "praise" },
    { emoji: "💡", word: "{name} has BRILLIANT ideas!", category: "praise" },
    { emoji: "🏰", word: "{name} can build ANYTHING!", category: "praise" },
    { emoji: "🦅", word: "{name} will SOAR HIGH!", category: "praise" },
    { emoji: "🎊", word: "Everyone is PROUD of {name}!", category: "praise" },
    { emoji: "🌻", word: "{name} is BLOOMING beautifully!", category: "praise" },
    { emoji: "⚽", word: "{name} is a TEAM PLAYER!", category: "praise" },
    { emoji: "🎹", word: "{name} is TALENTED!", category: "praise" },
    { emoji: "🔥", word: "{name} is ON FIRE today!", category: "praise" },
    { emoji: "🥇", word: "{name} is NUMBER ONE!", category: "praise" },
    { emoji: "🌈", word: "{name} brings JOY everywhere!", category: "praise" },
    { emoji: "💪", word: "{name} never gives up!", category: "praise" },
    { emoji: "🐝", word: "{name} works SO HARD!", category: "praise" },
    { emoji: "🎯", word: "{name} always does their BEST!", category: "praise" },
    { emoji: "🦋", word: "{name} is TRANSFORMING into greatness!", category: "praise" },
    { emoji: "🌺", word: "{name} is ONE OF A KIND!", category: "praise" },
    { emoji: "🚂", word: "{name} keeps going STRONG!", category: "praise" },
    { emoji: "🎨", word: "{name} has an AMAZING imagination!", category: "praise" },

    // Growth Mindset Messages
    { emoji: "🌱", word: "Mistakes help {name} LEARN and GROW!", category: "growth" },
    { emoji: "🧗", word: "{name} loves a good CHALLENGE!", category: "growth" },
    { emoji: "🎯", word: "{name} is getting BETTER every day!", category: "growth" },
    { emoji: "💭", word: "{name} says 'I can't do it YET!'", category: "growth" },
    { emoji: "🔧", word: "{name} finds ways to IMPROVE!", category: "growth" },
    { emoji: "📈", word: "{name}'s effort leads to SUCCESS!", category: "growth" },
    { emoji: "🌟", word: "{name} turns problems into OPPORTUNITIES!", category: "growth" },
    { emoji: "🚀", word: "Practice makes {name} STRONGER!", category: "growth" },
    { emoji: "🎓", word: "{name} is a LEARNING MACHINE!", category: "growth" },
    { emoji: "💪", word: "Hard work is {name}'s superpower!", category: "growth" },
    { emoji: "🧠", word: "{name}'s brain grows when they try hard things!", category: "growth" },
    { emoji: "🌈", word: "Every mistake makes {name} WISER!", category: "growth" },
    { emoji: "⭐", word: "{name} believes in themselves!", category: "growth" },
    { emoji: "🔑", word: "{name} never stops trying!", category: "growth" },
    { emoji: "🏔️", word: "{name} climbs mountains one step at a time!", category: "growth" },

    // Kindness Challenges
    { emoji: "💝", word: "{name} can make someone SMILE today!", category: "kindness" },
    { emoji: "🤗", word: "{name} can give a COMPLIMENT today!", category: "kindness" },
    { emoji: "🌻", word: "{name} can HELP a friend today!", category: "kindness" },
    { emoji: "💌", word: "{name} can write a NICE note today!", category: "kindness" },
    { emoji: "🎁", word: "{name} can SHARE something today!", category: "kindness" },
    { emoji: "👂", word: "{name} can be a good LISTENER today!", category: "kindness" },
    { emoji: "🤝", word: "{name} can include someone NEW today!", category: "kindness" },
    { emoji: "🌟", word: "{name} can say THANK YOU today!", category: "kindness" },
    { emoji: "💐", word: "{name} can spread KINDNESS everywhere!", category: "kindness" },
    { emoji: "🦸", word: "{name} is a KINDNESS superhero!", category: "kindness" },
    { emoji: "❤️", word: "{name}'s kindness makes the world BRIGHTER!", category: "kindness" },
    { emoji: "🌈", word: "{name} can be someone's RAINBOW today!", category: "kindness" },
    { emoji: "🎈", word: "{name} can cheer someone UP today!", category: "kindness" },
    { emoji: "🍪", word: "{name} can do something NICE today!", category: "kindness" },
    { emoji: "🌸", word: "{name}'s kindness blooms like FLOWERS!", category: "kindness" },

    // "I Can" Statements
    { emoji: "💪", word: "{name} can do HARD things!", category: "ican" },
    { emoji: "🎨", word: "{name} can CREATE amazing things!", category: "ican" },
    { emoji: "📖", word: "{name} can LEARN anything!", category: "ican" },
    { emoji: "🗣️", word: "{name} can speak up BRAVELY!", category: "ican" },
    { emoji: "🤔", word: "{name} can solve ANY problem!", category: "ican" },
    { emoji: "🎯", word: "{name} can reach their GOALS!", category: "ican" },
    { emoji: "🌟", word: "{name} can make GOOD choices!", category: "ican" },
    { emoji: "🤝", word: "{name} can be a GREAT friend!", category: "ican" },
    { emoji: "📝", word: "{name} can write WONDERFUL stories!", category: "ican" },
    { emoji: "🧮", word: "{name} can master MATH!", category: "ican" },
    { emoji: "🎵", word: "{name} can make MUSIC!", category: "ican" },
    { emoji: "🏃", word: "{name} can achieve ANYTHING!", category: "ican" },
    { emoji: "🌍", word: "{name} can change the WORLD!", category: "ican" },
    { emoji: "🔬", word: "{name} can discover NEW things!", category: "ican" },
    { emoji: "✨", word: "{name} can make DREAMS come true!", category: "ican" },

    // Calming & Mindfulness Messages
    { emoji: "🌸", word: "{name}, take a deep breath. You've got this!", category: "calm" },
    { emoji: "🌊", word: "{name} is calm like the OCEAN!", category: "calm" },
    { emoji: "☁️", word: "{name}, let worries float away like CLOUDS!", category: "calm" },
    { emoji: "🧘", word: "{name} is peaceful and RELAXED!", category: "calm" },
    { emoji: "🌙", word: "{name}, everything will be OKAY!", category: "calm" },
    { emoji: "💫", word: "{name} is safe and LOVED!", category: "calm" },
    { emoji: "🌈", word: "After the rain, {name} will see RAINBOWS!", category: "calm" },
    { emoji: "🍃", word: "{name} is light like a LEAF in the wind!", category: "calm" },
    { emoji: "⭐", word: "{name}, breathe in PEACE, breathe out WORRY!", category: "calm" },
    { emoji: "🌺", word: "{name} is stronger than any problem!", category: "calm" },
    { emoji: "🦋", word: "{name}, this feeling will PASS!", category: "calm" },
    { emoji: "🌻", word: "{name} can handle ANYTHING!", category: "calm" },
    { emoji: "💝", word: "{name} is doing GREAT!", category: "calm" },
    { emoji: "🐢", word: "{name}, it's okay to take it SLOW!", category: "calm" },
    { emoji: "🌟", word: "{name} is exactly where they need to BE!", category: "calm" },

    // Gratitude Prompts
    { emoji: "🙏", word: "{name} has so much to be THANKFUL for!", category: "gratitude" },
    { emoji: "❤️", word: "{name} is grateful for their FAMILY!", category: "gratitude" },
    { emoji: "🤝", word: "{name} is thankful for FRIENDS!", category: "gratitude" },
    { emoji: "🏠", word: "{name} appreciates their cozy HOME!", category: "gratitude" },
    { emoji: "🌞", word: "{name} is thankful for this BEAUTIFUL day!", category: "gratitude" },
    { emoji: "📚", word: "{name} is grateful for LEARNING!", category: "gratitude" },
    { emoji: "🍕", word: "{name} is thankful for yummy FOOD!", category: "gratitude" },
    { emoji: "🎮", word: "{name} appreciates FUN times!", category: "gratitude" },
    { emoji: "🐕", word: "{name} is grateful for ANIMALS!", category: "gratitude" },
    { emoji: "🌳", word: "{name} appreciates NATURE!", category: "gratitude" },
    { emoji: "💖", word: "{name} is thankful for LOVE!", category: "gratitude" },
    { emoji: "🎵", word: "{name} is grateful for MUSIC!", category: "gratitude" },
    { emoji: "📖", word: "{name} appreciates good BOOKS!", category: "gratitude" },
    { emoji: "🌈", word: "{name} is thankful for COLORS!", category: "gratitude" },
    { emoji: "😊", word: "{name} is grateful for HAPPINESS!", category: "gratitude" }
];

// Category labels for display
const categoryLabels = {
    all: "✨ All Messages",
    praise: "🌟 Praise",
    growth: "🌱 Growth Mindset",
    kindness: "💝 Kindness",
    ican: "💪 I Can!",
    calm: "🧘 Calm & Peace",
    gratitude: "🙏 Gratitude"
};

// Track app state
let lastIndex = -1;
let studentName = "Friend";
let currentCategory = "praise";
let favorites = [];
let streak = 0;
let lastVisitDate = null;
let soundEnabled = true;

// Sound effects (using Web Audio API for simple sounds)
let audioContext = null;

function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function playSound(type) {
    if (!soundEnabled) return;
    
    try {
        const ctx = getAudioContext();
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        if (type === 'magic') {
            // Happy magical sound
            oscillator.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
            gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.4);
        } else if (type === 'favorite') {
            // Sparkle sound
            oscillator.frequency.setValueAtTime(880, ctx.currentTime);
            oscillator.frequency.setValueAtTime(1100, ctx.currentTime + 0.05);
            gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.2);
        } else if (type === 'click') {
            // Simple click
            oscillator.frequency.setValueAtTime(600, ctx.currentTime);
            gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 0.1);
        }
    } catch (e) {
        // Audio not supported
    }
}

// Text-to-speech function with child/girl voice
function speakMessage(text) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;   // Natural pace for kids
        utterance.pitch = 1.8;  // High pitch for child/girl voice
        utterance.volume = 1;
        
        // Get all available voices
        const voices = speechSynthesis.getVoices();
        
        // Find a female/child voice - prioritize specific child-friendly voices
        let selectedVoice = null;
        
        // Priority list of female/child voices
        const voicePriority = [
            'Microsoft Zira',     // Windows female
            'Samantha',           // Mac female  
            'Karen',              // Australian female
            'Victoria',           // Mac female
            'Google UK English Female',
            'Google US English Female'
        ];
        
        // Try to find a voice from priority list
        for (const voiceName of voicePriority) {
            selectedVoice = voices.find(v => v.name.includes(voiceName));
            if (selectedVoice) break;
        }
        
        // Fallback: find any female English voice
        if (!selectedVoice) {
            selectedVoice = voices.find(v => 
                v.lang.startsWith('en') && 
                (v.name.toLowerCase().includes('female') || 
                 v.name.toLowerCase().includes('woman') ||
                 v.name.toLowerCase().includes('girl'))
            );
        }
        
        // Last fallback: any English voice (pitch will make it sound higher)
        if (!selectedVoice) {
            selectedVoice = voices.find(v => v.lang.startsWith('en'));
        }
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }
        
        speechSynthesis.speak(utterance);
    }
}

// Load saved data from localStorage
function loadSavedData() {
    try {
        favorites = JSON.parse(localStorage.getItem('happyWords_favorites')) || [];
        streak = parseInt(localStorage.getItem('happyWords_streak')) || 0;
        lastVisitDate = localStorage.getItem('happyWords_lastVisit');
        soundEnabled = localStorage.getItem('happyWords_sound') !== 'false';
        
        // Update streak
        updateStreak();
        
        // Update sound button state
        updateSoundButton();
    } catch (e) {
        console.log('Could not load saved data');
    }
}

// Save data to localStorage
function saveData() {
    try {
        localStorage.setItem('happyWords_favorites', JSON.stringify(favorites));
        localStorage.setItem('happyWords_streak', streak.toString());
        localStorage.setItem('happyWords_lastVisit', new Date().toDateString());
        localStorage.setItem('happyWords_sound', soundEnabled.toString());
    } catch (e) {
        console.log('Could not save data');
    }
}

// Update daily streak
function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (lastVisitDate === today) {
        // Already visited today, streak unchanged
    } else if (lastVisitDate === yesterday) {
        // Visited yesterday, increment streak
        streak++;
    } else if (lastVisitDate !== today) {
        // Missed a day or first visit, reset to 1
        streak = 1;
    }
    
    lastVisitDate = today;
    saveData();
    updateStreakDisplay();
}

// Update streak display
function updateStreakDisplay() {
    const streakElement = document.getElementById('streakCount');
    if (streakElement) {
        streakElement.textContent = streak;
    }
}

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
    document.getElementById('controlsContainer').classList.remove('hidden');
    document.getElementById('categoryFilter').classList.remove('hidden');

    playSound('magic');
    
    // Generate first happy word
    generateHappyWord();
}

function getFilteredMessages() {
    if (currentCategory === 'all') {
        return happyMessages;
    }
    return happyMessages.filter(m => m.category === currentCategory);
}

function generateHappyWord() {
    const wordDisplay = document.getElementById('wordDisplay');
    const emojiElement = document.getElementById('emoji');
    const wordElement = document.getElementById('word');
    const button = document.getElementById('magicButton');

    const filteredMessages = getFilteredMessages();
    
    // Get a random message (different from the last one)
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * filteredMessages.length);
    } while (randomIndex === lastIndex && filteredMessages.length > 1);
    
    lastIndex = randomIndex;
    const message = filteredMessages[randomIndex];

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
    
    // Store current message for favorites
    wordDisplay.dataset.currentMessage = JSON.stringify(message);

    // Update favorite button state
    updateFavoriteButton(message);

    // Add sparkle effect to button
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 100);

    playSound('magic');
    
    // Create confetti effect
    createConfetti();
}

function updateFavoriteButton(message) {
    const favBtn = document.getElementById('favoriteBtn');
    if (!favBtn) return;
    
    const isFavorite = favorites.some(f => f.word === message.word);
    favBtn.textContent = isFavorite ? '💖' : '🤍';
    favBtn.title = isFavorite ? 'Remove from favorites' : 'Add to favorites';
}

function toggleFavorite() {
    const wordDisplay = document.getElementById('wordDisplay');
    const message = JSON.parse(wordDisplay.dataset.currentMessage || '{}');
    
    if (!message.word) return;
    
    const existingIndex = favorites.findIndex(f => f.word === message.word);
    
    if (existingIndex >= 0) {
        favorites.splice(existingIndex, 1);
    } else {
        favorites.push(message);
        playSound('favorite');
    }
    
    updateFavoriteButton(message);
    saveData();
    updateFavoritesCount();
}

function updateFavoritesCount() {
    const countEl = document.getElementById('favoritesCount');
    if (countEl) {
        countEl.textContent = favorites.length;
    }
}

function speakCurrentMessage() {
    const wordElement = document.getElementById('word');
    if (wordElement) {
        playSound('click');
        speakMessage(wordElement.textContent);
    }
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    saveData();
    updateSoundButton();
    if (soundEnabled) {
        playSound('click');
    }
}

function updateSoundButton() {
    const soundBtn = document.getElementById('soundToggle');
    if (soundBtn) {
        soundBtn.textContent = soundEnabled ? '🔊' : '🔇';
        soundBtn.title = soundEnabled ? 'Sound On' : 'Sound Off';
    }
}

function setCategory(category) {
    currentCategory = category;
    lastIndex = -1; // Reset to allow any message
    
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    playSound('click');
    generateHappyWord();
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
    const controlsContainer = document.getElementById('controlsContainer');
    const categoryFilter = document.getElementById('categoryFilter');

    // Show name input, hide main app
    nameContainer.classList.remove('hidden');
    wordDisplay.classList.add('hidden');
    magicButton.classList.add('hidden');
    backButton.classList.add('hidden');
    if (controlsContainer) controlsContainer.classList.add('hidden');
    if (categoryFilter) categoryFilter.classList.add('hidden');

    // Focus on the input
    document.getElementById('studentName').focus();
    
    playSound('click');
}

function showFavorites() {
    if (favorites.length === 0) {
        alert('No favorites yet! Click the 🤍 heart to save messages you love!');
        return;
    }
    
    // Create a modal to show favorites
    const modal = document.createElement('div');
    modal.className = 'favorites-modal';
    modal.innerHTML = `
        <div class="favorites-content">
            <h2>💖 Your Favorites</h2>
            <div class="favorites-list">
                ${favorites.map((f, i) => `
                    <div class="favorite-item">
                        <span>${f.emoji} ${f.word.replace('{name}', studentName)}</span>
                        <button onclick="removeFavorite(${i})" class="remove-fav">✕</button>
                    </div>
                `).join('')}
            </div>
            <button onclick="closeFavoritesModal()" class="close-modal-btn">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
    playSound('click');
}

function removeFavorite(index) {
    favorites.splice(index, 1);
    saveData();
    updateFavoritesCount();
    closeFavoritesModal();
    if (favorites.length > 0) {
        showFavorites();
    }
}

function closeFavoritesModal() {
    const modal = document.querySelector('.favorites-modal');
    if (modal) {
        modal.remove();
    }
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

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    updateFavoritesCount();
    
    // Load voices for speech synthesis
    if ('speechSynthesis' in window) {
        speechSynthesis.getVoices();
    }
});
