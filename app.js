const board = document.querySelector('#board')
const colors = ['#fe59c2', '#04d9ff', '#bc13fe', '#ffea19', '#c8ff00', '#7df9ff', '#39ff14', '#ff073a', '#fe019a', '#5555ff']

const SQUARE_COUNT = 1088;

for(let i = 0; i < SQUARE_COUNT; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}

const setColor = (element) => {
    const randColor = getRandomColor(colors)
    element.style.backgroundColor = `${randColor}`
    element.style.boxShadow = `0 0 2px ${randColor}, 0 0 10px ${randColor}, 0 0 20px ${randColor}`
}

const removeColor = (element) => {
    element.style.backgroundColor = `#1d1d1d`
    element.style.boxShadow = `0 0 2px #000`
}

const getRandomColor = (colors) => {
    let indexOfColor = Math.floor(Math.random() * colors.length)
    return colors[indexOfColor]
}