const buttons = document.querySelectorAll('.button')
const body = document.body
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        body.style.backgroundColor = `${e.target.id}`
    })
})