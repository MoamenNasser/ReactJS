# ReactJS Learning Journey 🚀

This repository contains my React learning revision and small projects as I work through various JavaScript and React concepts.

## About This Repository

This is my personal learning space where I practice and experiment with React and JavaScript concepts. The repository serves as:
- A revision hub for React fundamentals
````markdown
# ReactJS Learning Journey 🚀

This repository contains my React learning revision and small projects as I work through various JavaScript and React concepts.

## About This Repository

This is my personal learning space where I practice and experiment with React and JavaScript concepts. The repository serves as:
- A revision hub for React fundamentals
- A collection of small projects and exercises
- A place to document my learning progress
- Practice ground for modern JavaScript and React patterns

## Current Projects

### 🎯 GuessMyNumber_Game
A number guessing game that challenges players to guess a secret number between 1 and 20:
- **Random number generation** - Computer generates a secret number each game
- **Input validation** - Ensures user inputs are within valid range (1-20)
- **Score tracking system** - Players start with 20 points, lose points for wrong guesses
- **High score persistence** - Tracks the best score across game sessions
- **Interactive feedback** - Provides hints (too high/too low) and visual feedback
- **Game reset functionality** - "Again!" button to start a new game
- **Accessibility features** - Proper labels and ARIA attributes for screen readers

**Key features:**
- Clean, intuitive user interface
- Real-time score updates
- Color-coded feedback (green for correct, red for game over)
- Responsive design for different screen sizes

### 📁 MODAL_Window_Game
A JavaScript modal window implementation featuring:
- **Interactive modal windows** - Three buttons that trigger modal displays
- **DOM manipulation** - Practice with event listeners and class toggling
- **CSS styling** - Modern modal design with overlay effects
- **Responsive design** - Clean, user-friendly interface

### � PIG_Game
A classic two-player dice game implemented in vanilla JavaScript and DOM APIs.

Key features:
- Turn-based play for two players (Player 1 and Player 2).
- Roll the dice: players accumulate points for the current round until they roll a 1.
- Hold: save the current round score to the total score and pass the turn.
- First player to reach the winning score (default 100) wins.
- Visual dice images and simple animations.
- Score and turn state management using plain JavaScript.

Files included:
- `index.html` — Game layout and controls (roll, hold, new game).
- `script.js` — Game logic (roll, hold, score tracking, win detection).
- `style.css` — Styling for layout, active player highlight, and responsive tweaks.

How to play locally:
1. Open `PIG_Game/index.html` in your browser (double-click or use a live server).
2. Use the Roll button to roll the dice. If you roll a 1, your round ends and you lose the round points.
3. Use the Hold button to bank your round points into your total score and pass the turn.
4. First player to reach 100 points wins (changeable in the script).

Short tips and implementation notes:
- The dice images (`dice-1.png`–`dice-6.png`) are included in the `PIG_Game` folder and are swapped based on the random roll.
- The implementation favors clarity over brevity to aid learning — functions are small and well-commented.
- Try changing the starting score or winning score in `script.js` to experiment with the difficulty.

### �🔧 Revision
A React-focused project directory containing:
- **Webpack configuration** - Modern build setup for React development
- **Package management** - Dependencies for React ecosystem
- **Development environment** - Complete setup for React learning

**Technologies used:**
- HTML5
- CSS3
- Vanilla JavaScript
- DOM manipulation techniques
- Event handling and listeners
- Math.random() for game logic
- Local storage concepts (high score tracking)

## Learning Objectives

Through this repository, I'm focusing on:
- ✅ JavaScript fundamentals and ES6+ features
- ✅ DOM manipulation and event handling
- ✅ Game logic and algorithm implementation
- ✅ User input validation and error handling
- ✅ State management in vanilla JavaScript
- ✅ Score tracking and persistence concepts
- 🔄 React component architecture (upcoming)
- 🔄 State management and hooks (upcoming)
- 🔄 Modern development workflow (upcoming)

## Project Structure

```
ReactJS/
├── GuessMyNumber_Game/
│   ├── index.html      # Game interface and structure
│   ├── script.js       # Game logic and event handlers
│   ├── style.css       # Game styling and animations
│   ├── server.js       # Optional local server setup
│   └── .prettierrc     # Code formatting config
├── MODAL_Window_Game/
│   ├── index.html      # Modal interface structure
│   ├── script.js       # Modal functionality
│   ├── style.css       # Modal styling and effects
│   └── .prettierrc     # Code formatting config
├── PIG_Game/
│   ├── index.html      # Pig game layout and controls
│   ├── script.js       # Pig game logic (roll, hold, win detection)
│   ├── style.css       # Pig game styling and responsive tweaks
│   ├── dice-1.png..6.png # Dice face images
├── Revision/
│   ├── src/           # React source files
│   ├── package.json   # React dependencies
│   ├── webpack.config.js # Build configuration
│   └── ...           # Additional React setup files
└── README.md          # Project documentation
```

## Getting Started

To run any of the projects locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/MoamenNasser/ReactJS.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ReactJS/MODAL_Window_Game
   ```

3. Open `index.html` in your preferred browser or use a live server.

## Future Plans

As I continue my React learning journey, this repository will expand to include:
- React component-based projects
- State management examples
- Hook implementations
- API integration projects
- Advanced React patterns
- Testing implementations

## Connect & Follow

This repository represents my ongoing learning process. Feel free to explore the code, suggest improvements, or share your own learning experiences!

---

*Last updated: October 2025*
*Learning path: JavaScript → React → Advanced React Concepts*
```