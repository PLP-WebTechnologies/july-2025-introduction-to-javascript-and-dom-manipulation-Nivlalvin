// Get DOM elements
const usernameInput = document.getElementById('username-input');
const greetButton = document.getElementById('greet-button');
const greetingMessage = document.getElementById('greeting-message');

const startCountdownBtn = document.getElementById('start-countdown-btn');
const countdownList = document.getElementById('countdown-list');

const textToChange = document.getElementById('text-to-change');
const changeTextBtn = document.getElementById('change-text-btn');
const toggleListBtn = document.getElementById('toggle-list-btn');
const toggableList = document.getElementById('toggable-list');

// Part 1 & 2: Variables, Conditionals & Functions
greetButton.addEventListener('click', () => {
    let username = usernameInput.value;

    if (username === '') {
        greetingMessage.textContent = 'Please enter your name!';
    } else {
        const message = generateGreeting(username);
        greetingMessage.textContent = message;
    }
});

/**
 * Generates a personalized greeting message.
 * @param {string} name - The name of the user.
 * @returns {string} The greeting message.
 */
function generateGreeting(name) {
    return `Hello, ${name}! Welcome to the world of JavaScript.`;
}

// Part 3: Loops
startCountdownBtn.addEventListener('click', () => {
    countdownList.innerHTML = ''; 

    for (let i = 5; i > 0; i--) {
        const listItem = document.createElement('li');
        listItem.textContent = `Counting down... ${i}`;
        countdownList.appendChild(listItem);
    }

    const finalItem = document.createElement('li');
    finalItem.textContent = 'Blast off!';
    countdownList.appendChild(finalItem);
});

// Part 4: DOM Manipulation
changeTextBtn.addEventListener('click', () => {
    textToChange.textContent = 'The text has been changed!';
});

toggleListBtn.addEventListener('click', () => {
    toggableList.classList.toggle('hidden');
});

const newListItem = document.createElement('li');
newListItem.textContent = 'This item was created dynamically!';
toggableList.appendChild(newListItem);