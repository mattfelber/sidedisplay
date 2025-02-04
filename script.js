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
        "The average person has 70,000 thoughts per day.",
        "The world's deepest postbox is in Susami, Japan, 10 meters underwater.",
        "The most abundant element in the universe is hydrogen, making up 75% of all matter.",
        "A single bolt of lightning contains enough energy to toast 100,000 slices of bread.",
        "A day on Mercury is twice as long as its year.",
        "The human body contains enough phosphorus to make about 2,200 match heads.",
        "Cows have best friends and get stressed when separated.",
        "The average person blinks about 15-20 times per minute.",
        "The Sahara Desert can experience frost and snow.",
        "Butterflies taste with their feet.",
        "A single human hair can hold the weight of a hanging apple.",
        "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
        "The tongue is the strongest muscle in the human body relative to its size.",
        "Sharks have existed longer than trees on Earth.",
        "The moon is moving away from Earth at about 3.8 centimeters per year.",
        "A single sneeze can travel up to 100 miles per hour.",
        "The human skeleton renews itself completely every 10 years.",
        "Elephants are the only mammals that can't jump.",
        "The average cloud weighs around 1.1 million pounds.",
        "A human's sense of smell is more sensitive than a dog's during certain times of the day.",
        "The longest recorded echo lasted 75 seconds.",
        "The average person spends 2 years of their life on the phone.",
        "A single raindrop falls at an average speed of 17 miles per hour.",
        "The Earth's core is hotter than the surface of the sun.",
        "Honey never spoils. Archaeologists have found 3000-year-old honey still preserved.",
        "Humans share 50% of their DNA with bananas.",
        "The average person walks the equivalent of five times around the equator in a lifetime.",
        "The human brain generates enough electricity to power a small light bulb.",
        "A single lightning strike can reach temperatures of 53,000 degrees Fahrenheit.",
        "The longest living cells in the body are in the brain.",
        "The universe contains more stars than grains of sand on all Earth's beaches.",
        "A day on Venus is longer than its year.",
        "The average person produces enough saliva in their lifetime to fill two swimming pools.",
        "The human eye can distinguish about 10 million different colors.",
        "The speed of light is approximately 186,282 miles per second.",
        "The average person has over 1,460 dreams a year.",
        "The human body contains enough iron to make a 3-inch nail.",
        "A bee must visit about 2 million flowers to make one pound of honey.",
        "The average person spends 6 years of their life dreaming.",
        "The Earth's atmosphere extends more than 620 miles above the surface.",
        "A single teaspoon of a neutron star would weigh 6 billion tons.",
        "The human brain processes images 60,000 times faster than text.",
        "The average person walks about 65,000 miles in their lifetime.",
        "The Milky Way galaxy is moving through space at 1.3 million miles per hour.",
        "A single human brain generates more electrical impulses in a day than all the world's telephones combined.",
        "The longest recorded flight of a chicken is 13 seconds.",
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

    for (const [cityId, cityInfo] of Object.entries(cities)) {
        const cityTime = now.toLocaleTimeString('en-US', {
            timeZone: cityInfo.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        
        const timeElement = document.querySelector(`#${cityId} .time`);
        if (timeElement) {
            timeElement.textContent = cityTime;
        }
    }
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
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');

    const hourDeg = (hour * 30) + (minute * 0.5);
    const minuteDeg = minute * 6;
    const secondDeg = second * 6;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

function showClockOverlay() {
    const now = new Date();
    const spTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    const hours = spTime.getHours();
    const minutes = spTime.getMinutes();

    // Set appropriate message
    const periodText = document.querySelector('.period-text');
    if (hours === 8 && minutes === 55) {
        periodText.textContent = "Morning Session Starting";
    } else if (hours === 16 && minutes === 0) {
        periodText.textContent = "Lunch Break Check-In";
    } else if (hours === 16 && minutes === 55) {
        periodText.textContent = "Afternoon Session";
    } else if (hours === 18 && minutes === 55) {
        periodText.textContent = "Session Ending";
    }

    clockOverlay.classList.add('show');
    updateClockHands();
    clockInterval = setInterval(updateClockHands, 1000);
}

function hideClockOverlay() {
    clockOverlay.classList.remove('show');
    clearInterval(clockInterval);
}

function checkTime() {
    const now = new Date();
    // Convert to São Paulo time
    const spTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
    const hours = spTime.getHours();
    const minutes = spTime.getMinutes();

    // Define notification times (24-hour format)
    const notificationTimes = [
        { hours: 8, minutes: 55 },   // Morning Session Starting
        { hours: 16, minutes: 0 },   // Lunch Break Check-In
        { hours: 16, minutes: 55 },  // Afternoon Session
        { hours: 18, minutes: 55 }   // Session Ending
    ];

    // Check if current time matches any notification time
    const shouldNotify = notificationTimes.some(time => 
        time.hours === hours && time.minutes === minutes
    );

    if (shouldNotify) {
        showClockOverlay();
    }
}

clockOverlay.addEventListener('click', hideClockOverlay);

// Check time every minute
setInterval(checkTime, 60000);
// Initial check
checkTime();

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
