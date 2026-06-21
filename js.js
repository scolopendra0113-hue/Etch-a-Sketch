let container = document.querySelector(".container")

for (let i = 0; i < 256; i++) {
    let block = document.createElement("div")
    block.classList.add('block')
    container.appendChild(block)
}