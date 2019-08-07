// =================================
// =menu-icon and navigation toggle=
// =================================
function change() {
  document.querySelector('.menu-icon').classList.toggle('active')
  document.querySelector('.navigation').classList.toggle('active')
}




// =================================
// ==========scroll-to-top==========
// =================================
window.onscroll = function () {
  let scroll_to_top = document.getElementById('scroll-to-top')

  if (document.documentElement.scrollTop > 200) {
    scroll_to_top.style.display = 'block'
  } else {
    scroll_to_top.style.display = 'none'
  }
}

// ================================
function scrollToTop() {
  document.documentElement.scrollTop = 0
}
