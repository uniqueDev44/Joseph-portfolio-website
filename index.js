const menuToggle = document.querySelector('.js-menu-toggle')
const cancelBar = document.querySelector('.js-cancel-menu')
const navigation = document.querySelector('.js-navigation')



menuToggle.addEventListener('click', () => {
  navigation.classList.add('active')
  menuToggle.classList.add('hidden')
  cancelBar.classList.add('show')
})

cancelBar.addEventListener('click', () => {
  navigation.classList.remove('active')
  menuToggle.classList.remove('hidden')
  cancelBar.classList.remove('show')
})

// Close menu when clicking a link
document.querySelectorAll('.js-navigation a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('active')
    menuToggle.classList.remove('hidden')
    cancelBar.classList.remove('show')
  })
})