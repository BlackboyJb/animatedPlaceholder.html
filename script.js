const headerEL = document.getElementById('header')
const titleEL = document.getElementById('title')
const excerptEL = document.getElementById('excerpt')
const profileEL = document.getElementById('profile-img')
const nameEL = document.getElementById('name')
const dateEL = document.getElementById('date')

const animatedBG = document.querySelectorAll('.animated-bg')
const animatedtextBG = document.querySelectorAll('.animated-bg-text')


setInterval(getData, 2500)

function getData() {
    headerEL.innerHTML = '<img src="https://images.unsplash.com/photo-1694114935810-7714b7dc5db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" /> '
    titleEL.innerHTML = "Life is a Mystery"
    excerptEL.innerHTML = "Life is a  mystery because we dont know what is going to happen Next, so why do we make permanent decison based on Temporary basis"
    profileEL.innerHTML = '<img src = "https://randomuser.me/api/portraits/men/35.jpg" alt = "" > '
    nameEL.innerHTML = 'Manilo Turban'
    dateEL.innerHTML = ' Oct, 12, 2020'

    animatedBG.forEach(bg => bg.classList.remove('animated-bg'))
    animatedtextBG.forEach(bg => bg.classList.remove('animated-bg-text'))
}







