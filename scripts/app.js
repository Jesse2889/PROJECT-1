function init() {
  //  dom and game variables
  const grid = document.querySelector('.grid')
  const btn = document.querySelector('.start')
  const scoreDisplay = document.querySelector('.score')
  let squares = []
  let dir = null
  let pace = 500
  // eslint-disable-next-line prefer-const
  let timerId = null
  const width = 11
  let snake = [62, 61, 60]
  let score = 0 //score variable so the player can see their score 
 
  function newGrid() {
    Array(width * width).join('.').split('.').forEach(() => {
      // create 
      const square = document.createElement('div')
      square.classList.add('grid-item')
      //square.innerHTML = ind + '-' + ind % width
      squares.push(square)
      grid.appendChild(square)
    })
  }

  function addSnake() {
    console.log('snake added')
    snake.map(index => squares[index].classList.add('player'))
  }

  // addSnake()

  function removeSnake() {
    snake.map(index => squares[index].classList.remove('player'))
  }

  function apple() {
    const appleIndex = Math.floor(Math.random() * squares.length)
    squares[appleIndex].classList.add('apple')
  }
  // apple()
  console.log(squares[snake[0]])


  function snakeEatsApple() {
    if (squares[snake[0]].classList.contains('apple')) {
      squares[snake[0]].classList.remove('apple')
      //snake.push('2', '2','2')
      snake.unshift(snake[0])
      //console.log('apple')
      apple()
      score += 1150
      pace -= 100
      snakeMovement()
      scoreDisplay.innerHTML = score
    }

  }
  //function built to start game
  function startGame() {
    // grid.innerHTML = ''
    newGrid()
    addSnake()
    snakeMovement()
    
    apple()
    //we add the new interval for the new game - with the right page
    timerId = setInterval(snakeMovement, pace)
  }
  
  console.log(dir)
  // places player at the starting position when grid has finished building and the game is starting again
  //squares[snake].classList.add('player')
  //function built for the movment of the snake
  function snakeMovement() {
    //console.log(dir)
    console.log('snakeMove')
    if (dir === 'right') {
      console.log(dir)
      removeSnake()
      if (snake[0] % width === 10) {
        snake[0] -= 10
      }
      snake.pop()
      snake.unshift(snake[0] + 1)
      addSnake()
      //console.log(snake)
    }
    if (dir === 'left') {
      //console.log(dir)
      removeSnake()
      if (snake[0] % width === 0) {
        snake[0] += 9
      }

      snake.pop()
      snake.unshift(snake[0] - 1)
      addSnake()
      //console.log(snake)
    }
    if (dir === 'down') {
      //console.log(dir)
      removeSnake()
      if (snake[0] >= 110) {
        snake[0] -= 110
      }
      snake.pop()
      snake.unshift(snake[0] + width)
      addSnake()
    }
    if (dir === 'up') {
      //console.log(dir)
      removeSnake()
      if (snake[0] <= 10) {
        snake[0] += 110
      }
      snake.pop()
      snake.unshift(snake[0] - width)
      addSnake()
    }
    snakeEatsApple()
    hit()

    //snakeMovement()
  }
  startGame()
  console.log(squares)
  // snakeMovement()

  function hit() {
    if (snake.slice(1).includes(snake[0])) {
      console.log('hit')
      gameOver()
    }

  }

  function gameOver() {
    
    clearInterval(timerId)
    grid.innerHTML = ''
    grid.innerHTML = '<h2>GAME OVER! HIT START TO PLAY AGAIN</h2>'
    //reset()
    
  }

  function reset() {
    //clear the grid (including the squares array)
    clearInterval(timerId)
    grid.innerHTML = ''
    squares = []
    score = 0
    scoreDisplay.innerHTML = score
    pace = 500
    snake = [62, 61, 60]
    dir = null
    // removeSnake()
    //clear the interval from the previous game
    
    //create a new grid and add the food
    
    //inside of start game there is addSnake() and snakeMovement() functions
    startGame()

  }

  function handleKeyDown(e) {
    // console.log(dir)
    switch (e.keyCode) {
      case 39: if (dir !== 'left') dir = 'right'


        break
      case 37: if (dir !== 'right' && dir !== null) dir = 'left' //moveLeft()


        break
      case 40: if (dir !== 'up') dir = 'down'


        break
      case 38: if (dir !== 'down') dir = 'up'


        break
      default:
    }
  }

  console.log('current player index is', snake)

  // event handlers

  window.addEventListener('keydown', handleKeyDown)
  btn.addEventListener('click', reset)
}

window.addEventListener('DOMContentLoaded', init)