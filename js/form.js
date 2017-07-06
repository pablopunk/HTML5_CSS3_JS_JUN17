/* global alert */

var form = document.getElementsByTagName('form')[0]

var inputNombre = document.getElementById('nombre')
var inputApellidos = document.getElementById('apellidos')
var emailInput = document.getElementById('email')
var ejercitoInput = document.getElementById('ejercito')
var fechaInput = document.getElementById('fecha')
var submitButton = document.getElementById('enviar')

var misionInput = {
  mision1: document.getElementById('tipo_mision1'),
  mision2: document.getElementById('tipo_mision2'),
  mision3: document.getElementById('tipo_mision3')
}

var loadingIcon = document.createElement('i')
loadingIcon.classList.add('fa', 'fa-spinner', 'fa-spin')

form.addEventListener('submit', function (event) {
  if (!inputNombre.checkValidity()) {
    alert('Escribe tu nombre')
    inputNombre.focus()
    event.preventDefault()
    return false
  }

  if (!inputApellidos.checkValidity()) {
    alert('Escribe tus apellidos')
    inputApellidos.focus()
    event.preventDefault()
    return false
  }

  if (!emailInput.checkValidity()) {
    alert('Escribe tu email')
    emailInput.focus()
    event.preventDefault()
    return false
  }

  if (!misionInput.mision1.checkValidity()) {
    alert('Introduce el tipo de mision')
    event.preventDefault()
    return false
  }

  if (!ejercitoInput.checkValidity()) {
    alert('Escribe el tamaño del ejercito')
    ejercitoInput.focus()
    event.preventDefault()
    return false
  }

  if (!fechaInput.checkValidity()) {
    alert('Escribe la fecha')
    fechaInput.focus()
    event.preventDefault()
    return false
  }

  submitButton.setAttribute('disabled', '')
  submitButton.appendChild(loadingIcon)
  event.preventDefault()

  setTimeout(function () {
    submitButton.removeChild(loadingIcon)
    submitButton.removeAttribute('disabled')
  }, 1000)
})
