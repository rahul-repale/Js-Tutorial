//Part 1 => random color

let button = document.querySelector('.button')
button.addEventListener('click', (e) => {
    const max = 99
    const min = 10
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * (max - min + 1)) + min}${Math.floor(Math.random() * (max - min + 1)) + min}${Math.floor(Math.random() * (max - min + 1)) + min}`
})


//Part 2 => search your favourite color

document.querySelector('input').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        document.body.style.backgroundColor = `${document.querySelector('input').value}`
    }
}) 