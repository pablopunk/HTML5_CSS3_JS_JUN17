
function scrollToElement (el) {
  var jump = el.getBoundingClientRect().top * 0.1
  document.body.scrollTop += jump

  if (!el.lastJump || el.lastJump > Math.abs(jump)) {
    el.lastJump = Math.abs(jump)
    setTimeout(function () {
      scrollToElement(el)
    }, 10)
  } else {
    el.lastJump = null
  }
}

function getSectionElementForId (id) {
  if (!id) {
    return document.getElementsByTagName('header')[0]
  }
  return document.getElementById(id)
}

function navbarItemClicked (event) {
  var hrefSplit = event.target.href.split('#')
  if (hrefSplit.length === 2) {
    event.preventDefault()
    scrollToElement(getSectionElementForId(hrefSplit.pop()))
  }
}

var navbarItems = document.getElementsByClassName('navbar-item')

for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener('click', navbarItemClicked)
}
