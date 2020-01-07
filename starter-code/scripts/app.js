function init() {
  //  dom variables
  const grid = document.querySelector('.grid')
  const squares = []
  let dir = null
  //const scoreDisplay = document.querySelector('.score') //will display the players score during in game play
  // game variables
  const width = 11
  let snake = [3, 2, 1]
  //let score = 0 //score variable so the player can see their score 
  //let snakeSize = 
  // loop as many times as width times the width to fill the grid
  Array(width * width).join('.').split('.').forEach(() => {
    // create 
    const square = document.createElement('div')
    square.classList.add('grid-item')
    squares.push(square)
    grid.appendChild(square)
  })

  function addSnake() {
    snake.map(index => squares[index].classList.add('player'))
  }
  addSnake()

  function removeSnake() {
    snake.map(index => squares[index].classList.remove('player'))
  }
  function apple() {
    const appleIndex = Math.floor(Math.random() * squares.length)
    squares[appleIndex].classList.add('apple')
  }
  apple()
  console.log(dir)
  // places player at the starting position when grid has finished building and the game is starting again
  //squares[snake].classList.add('player')

  function snakeMovement() {
    console.log(dir)
    if (dir === 'right') {
      console.log(dir)
      removeSnake()
      snake.pop()
      snake.unshift(snake[0] + 1)
      addSnake()
      console.log(snake)
    }
    if (dir === 'left') {
      console.log(dir)
      removeSnake()
      snake.pop()
      snake.unshift(snake[0] - 1)
      addSnake()
      console.log(snake)
    }
    if (dir === 'down') {
      console.log(dir)
      removeSnake()
      snake.pop()
      snake.unshift(snake[0] + 1)
    }
    if (dir === 'up') {
      console.log(dir)
      removeSnake()
      snake.pop()
      snake.unshift(snake[0] - 1)
    }
  }
  // snakeMovement()
  // let timerId = setInterval(snakeMovement, 500)

  function handleKeyDown(e) {
    // console.log(dir)
    switch (e.keyCode) {
      case 39: if (dir !== 'left') dir = 'right'
        snakeMovement()
        // console.log(dir)

        // if (snake % width < width - 1) {
        //   snake++
        //   setInterval(() => {
        //     console.log('snake has moved')
        //     console.log('move'())
        //   }, 1000)
        //   function moveright() { 
        //     snake.speedX += 1
        //   }
        // }
        break

      case 37: if (dir !== 'right') dir = 'left'
        snakeMovement()
        // if (snake % width > 0) {
        //   snake--
        //   setInterval(() => {
        //     console.log('snake has moved')
        //     console.log('move'())
        //   }, 1000)

        //   function moveleft() {
        //     snake.speedX -= 1
        //   }
        // }
        break
      case 40: if (dir !== 'up') dir = 'down'
        snakeMovement()
        // if (snake + width < width * width) {
        //   snake += width
        //   setInterval(() => {
        //     console.log('snake has moved')
        //     console.log('move'())
        //   }, 1000)
        //   function movedown() {
        //     snake.speedY += 1
        //   }
        // }
        break
      case 38: if (dir !== 'down') dir = 'up'
        snakeMovement()
        // if (snake - width >= 0) {
        //   snake -= width
        //   setInterval(() => {
        //     console.log('snake has moved')
        //     console.log('move'())
        //   }, 1000)
        //   function moveUp() {
        //     snake.speedY -= 1
        //   }
        // }

        break
      default:
    }
  }

  //squares.forEach(square => square.classList.remove('player'))
  //squares[snake].classList.add('player')
  console.log('current plauer index is', snake)


  window.addEventListener('keydown', handleKeyDown)
}

// event handlers

window.addEventListener('DOMContentLoaded', init)



// varaible = snake to move around the grid
//object of the game is to move through each square on the grid without hitting the walls (end of grid)
//player should be alerted if the snake hits the end of the grid with 'Game over' alert
//event listener also needs to be added as and when the player hits any end of the grid 
//snake will eat the food and increase in size which will increase its score
//to increase difficulty i want to add an if/else statement that increases speed once a certain score is attained
//will use the let variable (score) update the score of the game
//will use the const dom varibale (score dis[play to to show the score)
//framerate function can be used to move the snake around the screen at increasing speeds
//will use the this.speed() function in order to increase and decrease the speed of the snake
//A timer function will need to be added to the start of the game 
//in order to give the player a countdown to when the game starts
// may need to add a avriable/function/event listener that starts the countdown 
//once the keycode (37,38,39 or 40) is pressed game 
// function