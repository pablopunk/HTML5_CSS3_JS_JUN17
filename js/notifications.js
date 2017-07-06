/* global Notification, mozNotification, webkitNotification, alert */

var notification = Notification || mozNotification || webkitNotification

if (!notification) {
  alert('No soportado')
}

function sendNotification (msg, body) {
  if (body) {
    var options = { body: body }
  }
  notification.requestPermission(function (perm) {
    if (perm === 'granted') {
      var n = new Notification(msg, options)
    }
  })
}
