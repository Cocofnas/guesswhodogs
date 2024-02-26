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
    Color: 'golden',
    Is: 'sitting',
    Accessories: ['sweater'],
    Other: ['good']
  },
  {
    name: 'Bobo',
    img: 'images/Bobo.jpg',
    Color: 'black and white',
    Is: 'running',
    Accessories: ['ball'],
    Other: ['puppy', 'good']
  },
  {
    name: 'Bonks',
    img: 'images/Bonks.jpg',
    Color: 'black and white',
    Is: [],
    Accessories: ['ball'],
    Other: ['good']
  },
  {
    name: 'Bouncy',
    img: 'images/Bouncy.jpg',
    Color: 'golden and white',
    Is: 'sitting',
    Accessories: ['sweater', 'hat'],
    Other: ['good']
  },
  {
    name: 'Champ',
    img: 'images/Champ.jpg',
    Color: 'grey',
    Is: 'sitting',
    Accessories: ['sweater'],
    Other: ['good']
  },
  {
    name: 'Chelsea',
    img: 'images/Chelsea.jpg',
    Color: 'brown and white',
    Is: 'lying down',
    Accessories: [],
    Other: ['good', 'puppy']
  },
  {
    name: 'Chili',
    img: 'images/Chili.jpg',
    Color: 'brown and white',
    Is: 'sitting',
    Accessories: [],
    Other: ['puppy']
  },
  {
    name: 'Coolio',
    img: 'images/Coolio.jpg',
    Color: 'black and grey',
    Is: 'sitting',
    Accessories: ['sunglasses'],
    Other: ['good']
  },
  {
    name: 'Corey',
    img: 'images/Corey.jpg',
    Color: 'white',
    Is: 'running',
    Accessories: [],
    Other: ['good']
  },
  {
    name: 'Fangs',
    img: 'images/Fangs.jpg',
    Color: 'brown and white',
    Is: 'lying down',
    Accessories: ['partyhat'],
    Other: ['good']
  },
  {
    name: 'Flora',
    img: 'images/Flora.jpg',
    Color: 'golden',
    Is: 'sitting',
    Accessories: ['flower'],
    Other: ['good', 'puppy']
  },
  {
    name: 'Fluffster',
    img: 'images/Fluffster.jpg',
    Color: 'golden and white',
    Is: 'sitting',
    Accessories: ['stuffed'],
    Other: ['good']
  },
  {
    name: 'Frenchie',
    img: 'images/Frenchie.jpg',
    Color: 'black and white',
    Is: 'running',
    Accessories: ['frisbee'],
    Other: ['good']
  },
  {
    name: 'Goldie',
    img: 'images/Goldie.jpg',
    Color: 'golden',
    Is: 'lying down',
    Accessories: [],
    Other: ['good']
  },
  {
    name: 'Gordo',
    img: 'images/Gordo.jpg',
    Color: 'golden',
    Is: 'sitting',
    Accessories: ['glasses'],
    Other: ['good']
  },
  {
    name: 'Grizzly',
    img: 'images/Grizzly.jpg',
    Color: 'white',
    Is: 'sitting',
    Accessories: ['partyhat'],
    Other: ['good']
  },
  {
    name: 'Happy',
    img: 'images/Happy.jpg',
    Color: 'golden',
    Is: 'sitting',
    Accessories: ['partyhat'],
    Other: ['good']
  },
  {
    name: 'Hipster',
    img: 'images/Hipster.jpg',
    Color: 'black',
    Is: 'sitting',
    Accessories: ['hat'],
    Other: ['good']
  },
  {
    name: 'James',
    img: 'images/James.jpg',
    Color: 'golden',
    Is: 'lying down',
    Accessories: ['sunglasses'],
    Other: ['good']
  },
  {
    name: 'Murphy',
    img: 'images/Murphy.jpg',
    Color: 'golden',
    Is: 'sitting',
    Accessories: [],
    Other: ['good', 'puppy']
  },
  {
    name: 'Oscar',
    img: 'images/Oscar.jpg',
    Color: 'golden',
    Is: 'running',
    Accessories: [],
    Other: ['good']
  },
  {
    name: 'Panda',
    img: 'images/Panda.jpg',
    Color: 'golden',
    Is: [],
    Accessories: ['stick'],
    Other: ['good']
  },
   
  {
    name: 'Peach',
    img: 'images/Peach.jpg',
    Color: 'white',
    Is: 'sitting',
    Accessories: ['partyhat'],
    Other: ['good']
  },
  {
    name: 'Pearl',
    img: 'images/Pearl.jpg',
    Color: 'golden',
    Is: 'sitting',
    Accessories: ['flower'],
    Other: ['good']
  },
  {
    name: 'Pugster',
    img: 'images/Pugster.jpg',
    Color: 'black and white',
    Is: 'sitting',
    Accessories: ['glasses'],
    Other: ['good']
  },
  {
    name: 'Sausage',
    img: 'images/Sausage.jpg',
    Color: 'black and brown',
    Is: [],
    Accessories: ['sunglasses'],
    Other: ['good']
  },
  {
    name: 'Snow',
    img: 'images/Snow.jpg',
    Color: 'white',
    Is: 'sitting',
    Accessories: ['confetti'],
    Other: ['good']
  },
  {
    name: 'Sparky',
    img: 'images/Sparky.jpg',
    Color: 'black and brown',
    Is: 'lying down',
    Accessories: ['stuffed'],
    Other: ['good']
  },
  {
    name: 'Spot',
    img: 'images/Spot.jpg',
    Color: 'black and white',
    Is: 'lying down',
    Accessories: ['stuffed'],
    Other: ['good']
  },
  {
    name: 'Stewart',
    img: 'images/Stewart.jpg',
    Color: 'golden',
    Is: 'sitting',
    Accessories: ['ball'],
    Other: ['good']
  },
  {
    name: 'Sweets',
    img: 'images/Sweets.jpg',
    Color: 'golden',
    Is: 'running',
    Accessories: [],
    Other: ['good', 'puppy']
  },
  {
    name: 'Tonks',
    img: 'images/Tonks.jpg',
    Color: 'grey',
    Is: 'sitting',
    Accessories: ['sweater', 'necklace'],
    Other: ['good']
  },
]

// Global variables
let secret;
let currentQuestion = {};
let charactersInPlay;


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
  console.log("questions:", questions);
  console.log("questions.options[questions.selectedIndex]:", questions.options[questions.selectedIndex]);
  
  const category = questions.options[questions.selectedIndex].parentNode.label; // Use parentNode.label to get the category label
  const value = questions.value;

  currentQuestion = {
    category: category,
    value: value.toLowerCase(),
  };
};


const checkQuestion = () => {
  const { category, value } = currentQuestion;

  // Check if the category exists in the secret object
  if (secret.hasOwnProperty(category)) {
    if (secret[category].includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else {
    console.error(`Category "${category}" does not exist in the secret object.`);
  }
};






const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;
 
  if (category === 'Accessories') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the dog has  ${value}! Keep all dogs with ${value}`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the dog doesn't wear ${value}! Remove all dogs with ${value}`);
    }
  } else if (category === 'Other') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the dog is a ${value}! Keep all dogs that is  a${value}`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the dog isn't a ${value}! Remove all dogs that isn't a ${value}`);
    }
  } else if (category === 'Color') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, dog has ${value} fur! Keep all dogs that have ${value} fur`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the dog doesn't have ${value} fur! Remove all the dogs with ${value} fur`);
    }
  } else if (category === 'Is') {
    if (keep) {
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
      alert(`Yes, the dog is ${value} eyes! Keep all dogs that are ${value}`);
    } else {
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
      alert(`No, the dog isn't ${value}! Remove all dogs that are ${value}`);
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
    const isCorrectGuess = personToConfirm === secret.name;
    if (confirm(`Do you want to guess on ${personToConfirm}?`)) {
      checkMyGuess(personToConfirm);
    }
  };

// If you confirm, this function is invoked
const winOrLose = ['You got it! Congratulations!', 'Close, but still so far. Try again.'];


// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
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
  generateBoard();
  start();
});

questions.addEventListener('change', selectQuestion);








