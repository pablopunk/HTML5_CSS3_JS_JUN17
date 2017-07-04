
function mouseMoving (event) {
  titleImageAnimated.style.backgroundPosition = event.pageX * -1 / 12 + 'px ' + event.pageY * -1 / 12 + 'px'
}

function resetBackground (event) {
  titleImageAnimated.style.backgroundPosition = 'center center'
}

var titleImageAnimated = document.getElementById('title-image-animated')
var titleAndCite = document.getElementById('title-and-cite-over-image-animated')

titleImageAnimated.addEventListener('mousemove', mouseMoving)
titleImageAnimated.addEventListener('mouseleave', resetBackground)
titleAndCite.addEventListener('mousemove', mouseMoving)
titleAndCite.addEventListener('mouseleave', resetBackground)
