/* global alert */

function launchFullScreen (event) {
  (
    event.target.requestFullScreen ||
    event.target.mozRequestFullScreen ||
    event.target.webkitRequestFullScreen ||
    event.target.msRequestFullScreen ||
    function () { alert('Fullscreen not supported') }
  )
  .bind(event.target)()

  event.target.play()
}

document.getElementById('video').addEventListener('click', launchFullScreen)
