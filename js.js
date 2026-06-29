let container = document.querySelector(".container")

//Глобально отслеживаем зажата ли кнопка
let isDrawing = false
window.addEventListener('mousedown', () => isDrawing = true)
window.addEventListener('mouseup', () => isDrawing = false)

function paint(el) {
    el.classList.add('active')
}


for (let i = 0; i < 256; i++) {
    //Создаем сетку из блоков
    let block = document.createElement("div")
    block.classList.add('block')

    //Красим блок если по нему нажали
    block.addEventListener('mousedown', () => paint(block))

    //Красим удерживая кнопку
    block.addEventListener('mouseenter', () => {
        if(isDrawing) {
            paint(block)
        }
    })

    container.appendChild(block)
}