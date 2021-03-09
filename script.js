var topLeft = document.querySelector('#top-left')
var topRight = document.querySelector('#top-right')
var bottomRight = document.querySelector('#bottom-right')
var bottomLeft = document.querySelector('#bottom-left')
var border = document.querySelector('#border')


function changeTopLeft(){
  border.style.borderTopLeftRadius = `${topLeft.value || 0}%`
}

function changeTopRight(){
  border.style.borderTopRightRadius = `${topRight.value || 0}%`
}

function changeBottomRight(){
  border.style.borderBottomRightRadius = `${bottomRight.value || 0}%`
}

function changeBottomLeft(){
  border.style.borderBottomLeftRadius = `${bottomLeft.value || 0}%`
}

topLeft.addEventListener('keyup', changeTopLeft)
topRight.addEventListener('keyup', changeTopRight)
bottomRight.addEventListener('keyup', changeBottomRight)
bottomLeft.addEventListener('keyup', changeBottomLeft)
