const cities = {
    'sao-paulo': {
        timezone: 'America/Sao_Paulo',
        coords: { lat: -23.5505, lon: -46.6333 }
    },
    'pittsburgh': {
        timezone: 'America/New_York',
        coords: { lat: 40.4406, lon: -79.9959 }
    },
    'utah': {
        timezone: 'America/Denver',
        coords: { lat: 40.7608, lon: -111.8910 }
    },
    'lisbon': {
        timezone: 'Europe/Lisbon',
        coords: { lat: 38.7223, lon: -9.1393 }
    }
};

const inspirationalContent = {
    positiveWords: [
        "Brilliant", "Resilient", "Unstoppable", "Extraordinary", "Magnificent",
        "Phenomenal", "Outstanding", "Remarkable", "Exceptional", "Masterful",
        "Innovative", "Visionary", "Empowered", "Limitless", "Triumphant",
        "Radiant", "Flourishing", "Tenacious", "Victorious", "Accomplished",
        "Enlightened", "Fearless", "Determined", "Passionate", "Authentic",
        "Inspiring", "Powerful", "Confident", "Focused", "Driven",
        "Luminous", "Invincible", "Unbeatable", "Spectacular", "Glorious",
        "Incredible", "Stellar", "Superb", "Excellent", "Magnificent",
        "Dynamic", "Energetic", "Vibrant", "Spirited", "Enthusiastic",
        "Resolute", "Steadfast", "Unwavering", "Dedicated", "Persevering",
        "Optimistic", "Courageous", "Valiant", "Dauntless", "Intrepid",
        "Resourceful", "Ingenious", "Creative", "Imaginative", "Inventive"
    ],
    stoicQuotes: [
        "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
        "Waste no more time arguing about what a good man should be. Be one. - Marcus Aurelius",
        "You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius",
        "The best revenge is not to be like your enemy. - Marcus Aurelius",
        "Very little is needed to make a happy life; it is all within yourself. - Marcus Aurelius",
        "What stands in the way becomes the way. - Marcus Aurelius",
        "He who fears death will never do anything worthy of a man who is alive. - Seneca",
        "Life is very short and anxious for those who forget the past, neglect the present, and fear the future. - Seneca",
        "We suffer more often in imagination than in reality. - Seneca",
        "The greatest power we have is the power of choice. - Epictetus",
        "First say to yourself what you would be; then do what you have to do. - Epictetus",
        "It's not what happens to you, but how you react to it that matters. - Epictetus",
        "No person has the power to have everything they want, but it is in their power not to want what they don't have. - Seneca",
        "The key is to keep company only with people who uplift you. - Epictetus",
        "Don't explain your philosophy. Embody it. - Epictetus",
        "The obstacle in the path becomes the path. - Marcus Aurelius",
        "The best way to avenge yourself is to not be like that. - Marcus Aurelius",
        "Accept whatever comes to you woven in the pattern of your destiny. - Marcus Aurelius",
        "The impediment to action advances action. What stands in the way becomes the way. - Marcus Aurelius",
        "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. - Marcus Aurelius",
        "You could leave life right now. Let that determine what you do and say and think. - Marcus Aurelius",
        "Reject your sense of injury and the injury itself disappears. - Marcus Aurelius",
        "The best revenge is to be unlike him who performed the injury. - Marcus Aurelius",
        "Nothing happens to anybody which he is not fitted by nature to bear. - Marcus Aurelius",
        "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too. - Marcus Aurelius",
        "Be tolerant with others and strict with yourself. - Marcus Aurelius",
        "The happiness of those who want to be popular depends on others; the happiness of those who seek pleasure fluctuates with moods outside their control. - Marcus Aurelius",
        "Choose not to be harmed — and you won't feel harmed. Don't feel harmed — and you haven't been. - Marcus Aurelius",
        "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own. - Marcus Aurelius",
        "Anger cannot be dishonest. - Marcus Aurelius"
    ],
    scienceFacts: [
        "Every atom in your body came from a star that exploded billions of years ago.",
        "The human brain can store up to 2.5 petabytes of information.",
        "Light travels at 299,792 kilometers per second in a vacuum.",
        "DNA contains approximately 3 billion base pairs in humans.",
        "Quantum entanglement allows particles to instantly share their physical states.",
        "The Milky Way galaxy contains approximately 100-400 billion stars.",
        "The average human body contains enough iron to make a 3-inch nail.",
        "Neutron stars can spin at up to 600 rotations per second.",
        "A teaspoon of a neutron star would weigh about 6 billion tons.",
        "The universe is approximately 13.8 billion years old.",
        "There are more possible iterations of a game of chess than atoms in the universe.",
        "The human body contains enough carbon to make around 900 pencils.",
        "Water can exist in three states at once at its triple point.",
        "Honeybees can recognize human faces.",
        "The speed of thought is approximately 120 meters per second.",
        "A day on Venus is longer than its year due to its slow rotation.",
        "The Great Wall of China is not visible from space with the naked eye.",
        "A single lightning bolt can heat the air around it to 50,000°F (27,760°C).",
        "The human body generates enough heat in 30 minutes to boil a half-gallon of water.",
        "Bananas are naturally slightly radioactive due to their potassium content.",
        "The Earth's core is as hot as the surface of the Sun: about 10,000°F (5,538°C).",
        "A single cloud can weigh more than a million pounds.",
        "The average person walks the equivalent of three times around the world in a lifetime.",
        "The human eye can distinguish approximately 10 million different colors.",
        "Sound travels about 4.3 times faster through water than through air.",
        "The longest recorded flight of a chicken is 13 seconds.",
        "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
        "A hummingbird's heart beats up to 1,260 times per minute.",
        "The moon has moonquakes caused by Earth's gravitational pull.",
        "The total weight of all ants on Earth outweighs the total weight of all humans.",
        "The human body sheds about 600,000 particles of skin every hour.",
        "A single gram of DNA can store up to 700 terabytes of data.",
        "The average person spends about 6 years of their life dreaming.",
        "The sun loses about 4 million tons of mass every second.",
        "There are more trees on Earth than stars in the Milky Way galaxy.",
        "The longest living cells in the body are brain cells, which can live an entire lifetime.",
        "A bolt of lightning is six times hotter than the surface of the sun.",
        "The average person produces enough saliva in their lifetime to fill two swimming pools.",
        "The fingerprints of koalas are so similar to human fingerprints that they can confuse crime scene investigators.",
        "The human heart creates enough pressure to squirt blood 30 feet.",
        "Astronauts grow up to 2 inches taller in space.",
        "The coldest temperature possible is -273.15°C, known as absolute zero.",
        "The fastest land animal relative to size is a mite, running at 322 body lengths per second.",
        "The average cumulus cloud weighs 1.1 million pounds.",
        "A day on Mars is almost exactly the same length as a day on Earth: 24 hours and 37 minutes.",
        "Octopuses have three hearts and blue blood.",
        "The average person will spend 6 months of their lifetime waiting at traffic lights.",
        "The Great Barrier Reef is the largest living structure on Earth.",
        "A teaspoon of soil contains more living organisms than there are people on Earth.",
        "The human brain processes images 60,000 times faster than text.",
        "The Eiffel Tower can grow up to 6 inches taller during summer.",
        "Polar bears are nearly undetectable by infrared cameras due to their insulation.",
        "A single sunflower can contain up to 2,000 seeds.",
        "The shortest war in history lasted 38 minutes between Britain and Zanzibar.",
        "The average person spends 2 weeks of their lifetime waiting for traffic lights to change.",
        "The smell of freshly cut grass is actually a plant distress call.",
        "The average person has about 100,000 hairs on their head.",
        "The Earth's core temperature is about the same as the surface of the Sun.",
        "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
        "The human body contains enough carbon to make around 900 pencils.",
        "The average person blinks about 5.2 million times a year.",
        "The speed of thought is approximately 120 meters per second.",
        "The human heart creates enough pressure to squirt blood 30 feet.",
        "The average person breathes about 23,000 times a day.",
        "The universe is expanding faster than the speed of light.",
        "The human brain has about 86 billion neurons.",
        "The average person spends 2 weeks of their lifetime waiting for traffic lights to change.",
        "The smell of freshly cut grass is actually a plant distress call.",
        "The average person has 70,000 thoughts per day.",
        "The world's deepest postbox is in Susami, Japan, 10 meters underwater.",
        "The most abundant element in the universe is hydrogen, making up 75% of all matter.",
        "A single bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "The human body generates about 25,000 BTUs of heat per day.",
        "The average person spends about 38,000 hours eating in their lifetime.",
        "The Earth's magnetic field reverses every 200,000 to 300,000 years.",
        "A teaspoonful of neutron star would weigh 6 billion tons.",
        "Honeybees never sleep.",
        "The Earth's core is as hot as the surface of the sun.",
        "A cloud can weigh more than a million pounds.",
        "An octopus has three hearts and nine brains.",
        "Sharks have existed longer than trees on Earth.",
        "Space smells like seared steak and hot metal.",
        "The human body generates enough heat in 30 minutes to boil half a gallon of water.",
        "A single lightning bolt can cook 100,000 pieces of toast.",
        "The average person walks the equivalent of three times around the world in a lifetime."
    ]
};

function updateTime() {
    const now = new Date();
    const clockContainers = document.querySelectorAll('.clock-container');
    const savedSettings = JSON.parse(localStorage.getItem('clockSettings') || '{}');

    clockContainers.forEach((container, index) => {
        const timezone = savedSettings[`timezone${index + 1}`] || container.id.replace('-', '/');
        const time = container.querySelector('.time');
        
        const options = {
            timeZone: timezone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        
        time.textContent = new Date(now).toLocaleTimeString('en-US', options);
    });
}

function updateInspiration() {
    const content = document.querySelector('.inspiration-content');
    
    // Randomly select content type
    const types = Object.keys(inspirationalContent);
    const selectedType = types[Math.floor(Math.random() * types.length)];
    
    // Get random content from selected type
    const items = inspirationalContent[selectedType];
    const selectedContent = items[Math.floor(Math.random() * items.length)];
    
    // Update display with fade effect
    content.style.opacity = '0';
    
    setTimeout(() => {
        // Add or remove single-word class based on content type
        if (selectedType === 'positiveWords') {
            content.classList.add('single-word');
        } else {
            content.classList.remove('single-word');
        }
        
        content.textContent = selectedContent;
        content.style.opacity = '1';
    }, 500);
}

// Heart animation
const heartButton = document.getElementById('heart-button');
const heartOverlay = document.getElementById('heart-overlay');
let heartTimeout;

function hideHeartOverlay() {
    heartOverlay.classList.remove('show');
    clearTimeout(heartTimeout);
}

heartButton.addEventListener('click', () => {
    heartOverlay.classList.add('show');
    clearTimeout(heartTimeout);
    heartTimeout = setTimeout(hideHeartOverlay, 3000);
});

// Add click handler to hide heart overlay when clicked
heartOverlay.addEventListener('click', hideHeartOverlay);

// Clock overlay animation
const clockOverlay = document.getElementById('clock-overlay');
let clockInterval;

function updateClockHands() {
    const now = new Date();
    const spTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    const hours = spTime.getHours();
    const minutes = spTime.getMinutes();
    const seconds = spTime.getSeconds();

    const hourDeg = (hours % 12 + minutes / 60) * 30;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

function showClockOverlay(message) {
    const clockOverlay = document.getElementById('clock-overlay');
    const clockText = clockOverlay.querySelector('.clock-text');
    
    // Update message
    clockText.textContent = message;
    
    // Show overlay
    clockOverlay.classList.add('show');
    
    // Start clock animation
    updateClockHands();
    clockInterval = setInterval(updateClockHands, 1000);
    
    // Play notification sound
    playNotificationSound();
}

function hideClockOverlay() {
    const clockOverlay = document.getElementById('clock-overlay');
    clockOverlay.classList.remove('show');
    clearInterval(clockInterval);
}

function playNotificationSound() {
    const audio = new Audio('data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=');
    audio.play();
}

// Alert functionality
function checkAlerts() {
    const now = new Date();
    // Convert to São Paulo time
    const spTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    const currentTime = spTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    
    const savedSettings = JSON.parse(localStorage.getItem('clockSettings') || '{}');
    
    // Check each alert
    for (let i = 1; i <= 4; i++) {
        const alertTime = savedSettings[`alert${i}Time`] || defaultAlerts[i-1]?.time || '';
        const alertEnabled = savedSettings[`alert${i}Enabled`] !== undefined ? savedSettings[`alert${i}Enabled`] : true;
        const alertMessage = savedSettings[`alert${i}Message`] || defaultAlerts[i-1]?.message || '';
        
        if (alertEnabled && alertTime === currentTime && alertMessage) {
            showClockOverlay(alertMessage);
        }
    }
}

// Default alerts
const defaultAlerts = [
    { time: '08:55', message: 'Good morning! Starting your day soon!' },
    { time: '09:00', message: 'Time to start the day!' },
    { time: '12:00', message: 'Lunch break! Take care of yourself!' },
    { time: '17:00', message: 'Great job today! Time to wrap up!' }
];

// Check for alerts every minute
setInterval(checkAlerts, 60000);

// Initial check
checkAlerts();

// Theme switching
let currentTheme = 0;
const totalThemes = 6; // Including default theme

document.getElementById('theme-toggle').addEventListener('click', () => {
    // Remove current theme class from body
    document.body.classList.remove(`theme-${currentTheme}`);
    
    // Move to next theme
    currentTheme = (currentTheme + 1) % totalThemes;
    
    // Add new theme class if not default theme (0)
    if (currentTheme !== 0) {
        document.body.classList.add(`theme-${currentTheme}`);
    }
});

// Update time every second
setInterval(updateTime, 1000);

// Update inspiration every 20 seconds
setInterval(updateInspiration, 20000);

// Initial updates
updateTime();
updateInspiration();

// Settings functionality
const settingsButton = document.getElementById('settings-button');
const settingsModal = document.getElementById('settings-modal');
const saveSettingsButton = document.getElementById('save-settings');
const closeSettingsButton = document.getElementById('close-settings');
const heartMessageInput = document.getElementById('heart-message');
const heartText = document.querySelector('#heart-overlay .heart span');

// Load saved settings from localStorage
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('clockSettings') || '{}');
    
    // Load timezone settings
    for (let i = 1; i <= 4; i++) {
        const select = document.getElementById(`timezone${i}`);
        const savedTimezone = savedSettings[`timezone${i}`];
        if (savedTimezone && select) {
            select.value = savedTimezone;
        }
    }
    
    // Load heart message
    const savedMessage = savedSettings.heartMessage || 'DANI';
    if (heartMessageInput) {
        heartMessageInput.value = savedMessage;
    }
    if (heartText) {
        heartText.textContent = savedMessage;
    }
    
    // Load alert settings
    for (let i = 1; i <= 4; i++) {
        const timeInput = document.getElementById(`alert${i}-time`);
        const messageInput = document.getElementById(`alert${i}-message`);
        const enabledInput = document.getElementById(`alert${i}-enabled`);
        
        if (timeInput && messageInput && enabledInput) {
            timeInput.value = savedSettings[`alert${i}Time`] || defaultAlerts[i-1]?.time || '';
            messageInput.value = savedSettings[`alert${i}Message`] || defaultAlerts[i-1]?.message || '';
            enabledInput.checked = savedSettings[`alert${i}Enabled`] !== undefined ? savedSettings[`alert${i}Enabled`] : true;
        }
    }
    
    // Update clock cities
    updateClockCities();
}

// Save settings to localStorage
function saveSettings() {
    const settings = {};
    
    // Save timezone settings
    for (let i = 1; i <= 4; i++) {
        const select = document.getElementById(`timezone${i}`);
        if (select) {
            settings[`timezone${i}`] = select.value;
        }
    }
    
    // Save heart message
    if (heartMessageInput) {
        settings.heartMessage = heartMessageInput.value.substring(0, 12);
    }
    
    // Save alert settings
    for (let i = 1; i <= 4; i++) {
        const timeInput = document.getElementById(`alert${i}-time`);
        const messageInput = document.getElementById(`alert${i}-message`);
        const enabledInput = document.getElementById(`alert${i}-enabled`);
        
        if (timeInput && messageInput && enabledInput) {
            settings[`alert${i}Time`] = timeInput.value;
            settings[`alert${i}Message`] = messageInput.value;
            settings[`alert${i}Enabled`] = enabledInput.checked;
        }
    }
    
    localStorage.setItem('clockSettings', JSON.stringify(settings));
    
    // Update UI
    if (heartText) {
        heartText.textContent = settings.heartMessage;
    }
    updateClockCities();
    settingsModal.classList.remove('show');
}

// Update clock cities based on settings
function updateClockCities() {
    const clockContainers = document.querySelectorAll('.clock-container');
    const savedSettings = JSON.parse(localStorage.getItem('clockSettings') || '{}');
    
    clockContainers.forEach((container, index) => {
        const timezone = savedSettings[`timezone${index + 1}`];
        if (timezone) {
            const select = document.getElementById(`timezone${index + 1}`);
            if (select) {
                const cityName = select.selectedOptions[0].text;
                const cityHeading = container.querySelector('h2');
                if (cityHeading) {
                    cityHeading.textContent = cityName;
                }
                container.id = timezone.toLowerCase().replace('/', '-');
            }
        }
    });
}

// Event listeners for settings
settingsButton.addEventListener('click', () => {
    settingsModal.classList.add('show');
    initializeTabs();
});

closeSettingsButton.addEventListener('click', () => {
    settingsModal.classList.remove('show');
});

saveSettingsButton.addEventListener('click', saveSettings);

// Close modal when clicking outside
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.classList.remove('show');
    }
});

// Load settings on page load
loadSettings();

// Tab switching functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Set initial state
    tabContents[0].classList.add('active');
    tabButtons[0].classList.add('active');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
        });
    });
}

// Add click event to dismiss overlay
document.getElementById('clock-overlay').addEventListener('click', hideClockOverlay);
