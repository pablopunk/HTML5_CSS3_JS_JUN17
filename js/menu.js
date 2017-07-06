
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

  deleteClass(navbarItems, 'active')
  this.classList.add('active')

  if (hrefSplit.length === 2) {
    event.preventDefault()
    scrollToElement(getSectionElementForId(hrefSplit.pop()))
  }
}

function deleteClass (items, className) {
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove(className)
  }
}

function globalOffset (element) {
  var top = 0
  do {
    top += element.offsetTop || 0
    element = element.offsetParent
  } while (element)
  return top - 50
}

var previous

function changeMenuStyle (event) {
  var pageOffset = window.pageYOffset
  var selector = ''

  if (pageOffset < offsetQuienSoy) {
    if (!previous || previous !== 1) {
      previous = 1
    } else if (previous === 1) {
      return
    }
    deleteClass(navbarItems, 'active')
    selector = 'a[href="#"]'
  } else if (pageOffset >= offsetQuienSoy && pageOffset < offsetEquipo) {
    if (!previous || previous !== 2) {
      previous = 2
    } else if (previous === 2) {
      return
    }
    deleteClass(navbarItems, 'active')
    selector = 'a[href="#quien-soy"]'
  } else if (pageOffset >= offsetEquipo && pageOffset < offsetTransporte) {
    if (!previous || previous !== 3) {
      previous = 3
    } else if (previous === 3) {
      return
    }
    deleteClass(navbarItems, 'active')
    selector = 'a[href="#equipo"]'
  } else {
    if (!previous || previous !== 4) {
      previous = 4
    } else if (previous === 4) {
      return
    }
    deleteClass(navbarItems, 'active')
    selector = 'a[href="#transporte"]'
  }

  document.querySelector(selector).parentNode.classList.add('active')
}

var navbarItems = document.getElementsByClassName('navbar-item')
var offsetQuienSoy = globalOffset(document.getElementById('quien-soy'))
var offsetEquipo = globalOffset(document.getElementById('equipo'))
var offsetTransporte = globalOffset(document.getElementById('transporte'))
var navbar = document.getElementsByClassName('navbar')[0]

for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener('click', navbarItemClicked)
}

window.addEventListener('scroll', changeMenuStyle)
