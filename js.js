let container = document.querySelector(".container")

let side = 16



userGrid = document.querySelector(".userGrid")

userGrid.addEventListener('click', () => {
    let newGrid = prompt("Введите размер сетки")
    if (newGrid && !isNaN(newGrid) && newGrid > 0) {
        side = parseInt(newGrid)
        createGrid()
    }
})
    




function paint(el) {
    el.classList.add('active')
}

function createGrid(){
    container.innerHTML = ""

    let isDrawing = false
    container.addEventListener('mousedown', (event) => {
        isDrawing = true

        if (event.target.classList.contains('block')) {
            paint(event.target)
        }
    })
    window.addEventListener('mouseup', () => isDrawing = false)
    

    
    for (let i = 0; i < side * side; i++) {
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
}

createGrid()

