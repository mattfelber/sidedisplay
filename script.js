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
        "Inspiring", "Powerful", "Confident", "Focused", "Driven"
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
        "The more quiet and solitary, the nearer to wisdom. - Marcus Aurelius",
        "To live a good life: We have the potential for it. If we learn to be indifferent to what makes no difference. - Marcus Aurelius",
        "The soul becomes dyed with the color of its thoughts. - Marcus Aurelius",
        "Time is like a river of passing events, and strong is its current. - Marcus Aurelius",
        "Accept the things to which fate binds you, and love the people with whom fate brings you together. - Marcus Aurelius",
        "How much time he gains who does not look to see what his neighbor says or does. - Marcus Aurelius",
        "External things are not the problem. It's your assessment of them. Which you can erase right now. - Marcus Aurelius",
        "If it is not right, do not do it; if it is not true, do not say it. - Marcus Aurelius",
        "Begin each day by telling yourself: Today I shall be meeting with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness. - Marcus Aurelius",
        "The best answer to anger is silence. - Marcus Aurelius",
        "True happiness is to enjoy the present without anxious dependence upon the future. - Seneca",
        "Difficulties strengthen the mind, as labor does the body. - Seneca",
        "If a man knows not which port he sails, no wind is favorable. - Seneca",
        "While we wait for life, life passes. - Seneca",
        "Sometimes even to live is an act of courage. - Seneca",
        "The wise man looks at death with the same eyes he looks at life. - Marcus Aurelius",
        "Our life is what our thoughts make it. - Marcus Aurelius",
        "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. - Marcus Aurelius",
        "When you arise in the morning, think of what a precious privilege it is to be alive. - Marcus Aurelius",
        "You could leave life right now. Let that determine what you do and say and think. - Marcus Aurelius",
        "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look. - Marcus Aurelius",
        "The art of living is more like wrestling than dancing. - Marcus Aurelius",
        "Never let the future disturb you. You will meet it with the same weapons of reason. - Marcus Aurelius",
        "The universe is change; our life is what our thoughts make it. - Marcus Aurelius",
        "Do every act of your life as though it were the last act of your life. - Marcus Aurelius",
        "The mind adapts and converts to its own purposes the obstacle to our acting. - Marcus Aurelius",
        "Associate with people who are likely to improve you. - Seneca",
        "As long as you live, keep learning how to live. - Seneca",
        "Life is long if you know how to use it. - Seneca",
        "It is not the man who has too little, but the man who craves more, that is poor. - Seneca",
        "He who is brave is free. - Seneca",
        "Only time can heal what reason cannot. - Seneca",
        "The greatest obstacle to living is expectancy. - Seneca",
        "Luck is what happens when preparation meets opportunity. - Seneca",
        "All cruelty springs from weakness. - Seneca",
        "First learn to be a good person, then focus on being a wise person. - Epictetus",
        "If you want to improve, be content to be thought foolish and stupid. - Epictetus",
        "Only the educated are free. - Epictetus",
        "No man is free who is not master of himself. - Epictetus",
        "Don't seek to have events happen as you wish, but wish them to happen as they do happen. - Epictetus",
        "The key is to keep company only with people who uplift you. - Epictetus",
        "Wealth consists not in having great possessions, but in having few wants. - Epictetus",
        "It's not what happens to you, but how you react to it that matters. - Epictetus",
        "Make the best use of what is in your power, and take the rest as it happens. - Epictetus",
        "Freedom is the only worthy goal in life. - Epictetus",
        "The first and greatest victory is to conquer yourself. - Plato",
        "The unexamined life is not worth living. - Socrates",
        "Know thyself. - Socrates",
        "Strong minds discuss ideas, average minds discuss events, weak minds discuss people. - Socrates",
        "Wonder is the beginning of wisdom. - Socrates",
        "To find yourself, think for yourself. - Socrates",
        "Be kind, for everyone you meet is fighting a hard battle. - Plato",
        "Good actions give strength to ourselves and inspire good actions in others. - Plato",
        "Wise men speak because they have something to say; fools speak because they have to say something. - Plato",
        "Excellence is not a gift, but a skill that takes practice. - Plato",
        "The beginning is the most important part of the work. - Plato",
        "Never discourage anyone who continually makes progress, no matter how slow. - Plato",
        "Opinion is the medium between knowledge and ignorance. - Plato",
        "Life must be lived as play. - Plato",
        "Love is a serious mental disease. - Plato",
        "Music gives a soul to the universe, wings to the mind, flight to the imagination. - Plato",
        "Character is destiny. - Heraclitus",
        "No man ever steps in the same river twice. - Heraclitus",
        "The only constant in life is change. - Heraclitus",
        "Day by day, what you choose, what you think, and what you do is who you become. - Heraclitus",
        "Much learning does not teach understanding. - Heraclitus",
        "Your character is your destiny. - Heraclitus",
        "The content of your character is your choice. - Epictetus",
        "First say to yourself what you would be, then do what you have to do. - Epictetus",
        "Any person capable of angering you becomes your master. - Epictetus",
        "No great thing is created suddenly. - Epictetus",
        "It's not what happens to you, but how you react to it that matters. - Epictetus",
        "Circumstances don't make the man, they only reveal him to himself. - Epictetus",
        "He who laughs at himself never runs out of things to laugh at. - Epictetus",
        "If you want to improve, be content to be thought foolish and stupid. - Epictetus",
        "The greater the difficulty, the more glory in surmounting it. - Epictetus",
        "Nothing great is created suddenly, any more than a bunch of grapes or a fig. - Epictetus",
        "Practice yourself, for heaven's sake, in little things; and thence proceed to greater. - Epictetus",
        "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will. - Epictetus",
        "A ship should not ride on a single anchor, nor life on a single hope. - Epictetus",
        "Seek not the good in external things; seek it in yourselves. - Epictetus",
        "No man is free who is not master of himself. - Epictetus",
        "It is impossible for a man to learn what he thinks he already knows. - Epictetus",
        "Don't explain your philosophy. Embody it. - Epictetus",
        "The key is to keep company only with people who uplift you. - Epictetus",
        "Man is not worried by real problems so much as by his imagined anxieties about real problems. - Epictetus",
        "If anyone tells you that a certain person speaks ill of you, do not make excuses about what is said of you but answer, 'He was ignorant of my other faults, else he would have not mentioned these alone.' - Epictetus",
        "The essence of philosophy is that a man should so live that his happiness shall depend as little as possible on external things. - Epictetus",
        "Don't seek to have events happen as you wish, but wish them to happen as they do happen, and all will be well with you. - Epictetus",
        "Wealth consists not in having great possessions, but in having few wants. - Epictetus",
        "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has. - Epictetus",
        "If you would be a reader, read; if a writer, write. - Epictetus",
        "The greater the difficulty, the more glory in surmounting it. - Epictetus",
        "It is not death that a man should fear, but rather he should fear never beginning to live. - Marcus Aurelius",
        "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
        "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. - Marcus Aurelius",
        "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love. - Marcus Aurelius",
        "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart. - Marcus Aurelius",
        "The best revenge is to be unlike him who performed the injury. - Marcus Aurelius",
        "The soul becomes dyed with the color of its thoughts. - Marcus Aurelius",
        "Waste no more time arguing about what a good man should be. Be one. - Marcus Aurelius",
        "Very little is needed to make a happy life; it is all within yourself, in your way of thinking. - Marcus Aurelius",
        "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane. - Marcus Aurelius",
        "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are. - Marcus Aurelius",
        "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look. - Marcus Aurelius",
        "The art of living is more like wrestling than dancing. - Marcus Aurelius",
        "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. - Marcus Aurelius",
        "The universe is change; our life is what our thoughts make it. - Marcus Aurelius"
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
        "The Earth's magnetic field reverses every 200,000 to 300,000 years."
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

function checkAlertTime() {
    const now = new Date();
    const spOptions = { timeZone: 'America/Sao_Paulo', hour12: false };
    const spTime = new Date(now.toLocaleString('en-US', spOptions));
    const spHour = spTime.getHours();
    const spMinute = spTime.getMinutes();

    const alertTimes = [9, 16, 17, 19];
    
    if (alertTimes.includes(spHour) && spMinute === 0) {
        showAlert();
    }
}

function showAlert() {
    const alert = document.getElementById('alert');
    alert.classList.remove('hidden');
    
    setTimeout(() => {
        alert.classList.add('hidden');
    }, 5 * 60 * 1000); // 5 minutes
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
let notificationTimeout;

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

    // Auto-hide after 30 seconds if not clicked
    notificationTimeout = setTimeout(hideClockOverlay, 30000);
}

function hideClockOverlay() {
    clockOverlay.classList.remove('show');
    clearInterval(clockInterval);
    clearTimeout(notificationTimeout);
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

// Check for alerts every minute
setInterval(checkAlertTime, 60 * 1000);

// Update inspiration every 20 seconds
setInterval(updateInspiration, 20000);

// Initial updates
updateTime();
updateInspiration();
