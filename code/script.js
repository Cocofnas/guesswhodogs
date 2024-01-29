// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOutButton = document.getElementById('filter')
const wOL = document.getElementById('winOrLose')
const wOLtext = document.getElementById('winOrLoseText')
const playAgain = document.getElementById('playAgain')




// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Barksalot',
    img: 'images/Barksalot.jpg',
    color: 'golden',
    Is: 'sitting',
    Accessories: ['sweater'],
    Other: ['good']
  },
  {
    name: 'Bobo',
    img: 'images/Bobo.jpg',
    color: 'black and white',
    Is: 'running',
    Accessories: ['ball'],
    Other: ['puppy', 'good']
  },
  {
    name: 'Bonks',
    img: 'images/Bonks.jpg',
    color: 'black and white',
    Is: [],
    Accessories: ['ball'],
    Other: ['good']
  },
  {
    name: 'Bouncy',
    img: 'images/Bouncy.jpg',
    color: 'golden and white',
    Is: 'sitting',
    Accessories: ['sweater', 'hat'],
    Other: ['good']
  },
  {
    name: 'Champ',
    img: 'images/Champ.jpg',
    color: 'grey',
    Is: 'sitting',
    Accessories: ['sweater'],
    Other: ['good']
  },
  {
    name: 'Chelsea',
    img: 'images/Chelsea.jpg',
    color: 'brown and white',
    Is: 'lying',
    Accessories: [],
    Other: ['good', 'puppy']
  },
  {
    name: 'Chili',
    img: 'images/Chili.jpg',
    color: 'brown and white',
    Is: 'sitting',
    Accessories: [],
    Other: ['puppy']
  },
  {
    name: 'Coolio',
    img: 'images/Coolio.jpg',
    color: 'black and grey',
    Is: 'sitting',
    Accessories: ['sunglasses'],
    Other: ['good']
  },
  {
    name: 'Corey',
    img: 'images/Corey.jpg',
    color: 'white',
    Is: 'running',
    Accessories: [],
    Other: ['good']
  },
  {
    name: 'Fangs',
    img: 'images/Fangs.jpg',
    color: 'brown and white',
    Is: 'lying',
    Accessories: ['partyhat'],
    Other: ['good']
  },
  {
    name: 'Flora',
    img: 'images/Flora.jpg',
    color: 'golden',
    Is: 'sitting',
    Accessories: ['flower'],
    Other: ['good', 'puppy']
  },
  {
    name: 'Fluffster',
    img: 'images/Fluffster.jpg',
    color: 'golden and white',
    Is: 'sitting',
    Accessories: ['stuffed'],
    Other: ['good']
  },
  {
    name: 'Frenchie',
    img: 'images/Frenchie.jpg',
    color: 'black and white',
    Is: 'running',
    Accessories: ['frisbee'],
    Other: []
  },
  {
    name: 'Goldie',
    img: 'images/Goldie.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Gordo',
    img: 'images/Gordo.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Grizzly',
    img: 'images/Grizzly.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Happy',
    img: 'images/Happy.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Hipster',
    img: 'images/Hipster.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'James',
    img: 'images/James.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Murphy',
    img: 'images/Murphy.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Oscar',
    img: 'images/Oscar.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Panda',
    img: 'images/Panda.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
   
  {
    name: 'Peach',
    img: 'images/Peach.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Pearl',
    img: 'images/Pearl.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Pugster',
    img: 'images/Pugster.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Sausage',
    img: 'images/Sausage.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Snow',
    img: 'images/Snow.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Sparky',
    img: 'images/Sparky.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Spot',
    img: 'images/Spot.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Stewart',
    img: 'images/Stewart.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Sweets',
    img: 'images/Sweets.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
  {
    name: 'Tonks',
    img: 'images/Tonks.jpg',
    color: 'hidden',
    Is: 'hidden',
    Accessories: ['glasses', 'hat'],
    Other: []
  },
]

// Global variables
let secret;
let currentQuestion;
let charactersInPlay;
let guessCounter = 0; // Guess counter
let startTime; // Start time for the timer
let playerName = ''; // Player n


// Draw the game board
const generateBoard = () => {
  board.innerHTML = '';
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
    <div class="card">
      <p>${person.name}</p>
      <img src=${person.img} alt=${person.name}>
      <div class="guess">
        <span>Guess on ${person.name}?</span>
        <button class="filled-button small" onclick="Guess('${person.name}')">Guess</button>
      </div>
    </div>
  `;
});
};


// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecretPerson = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
  currentQuestion = {}; 
};

// This function to start (and restart) the game
const start = () => {
  guessCounter = 0; // Reset guess counter
  startTime = Date.now(); // Start timer
  playerName = prompt("Please enter your name:", "Enter name here"); // Get player name
  charactersInPlay = CHARACTERS;
  board.innerHTML -= winOrLose[0] || winOrLose[1];
  questions.selectedIndex = 0;
  setSecretPerson();
  currentQuestion = {};
  generateBoard();
  wOL.style.display = 'none';
}

const restart = () => {
  charactersInPlay = CHARACTERS; 
  setSecretPerson(); 
  currentQuestion = {}; 
  generateBoard(); 
};

// setting the currentQuestion object when you select something in the dropdown

const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label;
  const value = questions.value;

  currentQuestion = {
    category: category.toLowerCase(),
    value: value.toLowerCase(),
  };
};

const checkQuestion = () => {
  const { category, value } = currentQuestion;

  if (secret[category].includes(value)) {
    filterCharacters(true);
  } else {
    filterCharacters(false);
  }
};


const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
 
  if (category === 'accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the person wears ${value}! Keep all people that wear ${value}`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the person doesn't wear ${value}! Remove all people that wear ${value}`);
    }
  } else if (category === 'other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the person is a ${value}! Keep all people that is a ${value}`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the person isn't a ${value}! Remove all people that is a ${value}`);
    }
  } else if (category === 'hair') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, person has ${value} hair! Keep all people that have ${value} hair`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the person doesn't have ${value} hair! Remove all the people with ${value} hair`);
    }
  } else if (category === 'eyes') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the person has ${value} eyes! Keep all people that have ${value} eyes`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the person doesn't have ${value} eyes! Remove all the people with ${value} eyes`);
    }
  }

  // After filtering, update the game board
  generateBoard();
};

  // Determine what is the category
  // filter by category to keep or remove based on the keep variable.

       // Invoke a function to redraw the board with the remaining people.

// when clicking guess, the player first have to confirm that they want to make a guess.

  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
  const Guess = (personToConfirm) => {
    guessCounter++; // Increment guess counter
    const isCorrectGuess = personToConfirm === secret.name;
    if (confirm(`Do you want to guess on ${personToConfirm}?`)) {
      checkMyGuess(personToConfirm);
    }
  };

// If you confirm, this function is invoked
const winOrLose = ['You got it! Congratulations!', 'Close, but still so far. Try again.'];

// ... (your existing code)

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  const endTime = Date.now(); // End time for the timer
  const gameTime = (endTime - startTime) / 1000; // Calculate game time in seconds
  alert(`${playerName}, your game time: ${gameTime} seconds, guesses: ${guessCounter}`);

  if (personToCheck === secret.name) {
    wOLtext.textContent = winOrLose[0];
  } else {
    wOLtext.textContent = winOrLose[1];
  }
  wOL.style.display = 'inline-block'; 

  if (charactersInPlay.length === 0) {
    restart();
    return;
  }

};

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', () => {
  start(); 
});

findOutButton.addEventListener("click", () => {
  checkQuestion();
});

questions.addEventListener('change', () => {selectQuestion();
});

playAgain.addEventListener('click', () => {
  start(); 
  generateBoard();
});



document.addEventListener('DOMContentLoaded', () => {
  start()
  });

document.addEventListener('DOMContentLoaded', () => {
  generateBoard();
});

questions.addEventListener('change', selectQuestion);








