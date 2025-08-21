function getRandomColor(){
    const letters = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}

function changeBackground(){
    document.body.style.backgroundColor = getRandomColor()
}

document.getElementById("change").addEventListener("click", changeBackground)


let counter = 0
const counterEl = document.getElementById("counter");

counterEl.innerText = counter;

function Add(){
    counter += 1
    counterEl.innerText = counter
}

function Sub(){
    counter-=1
    counterEl.innerText = counter
}

function restart(){
    counter = 0
    counterEl.innerText = counter
}

document.getElementById("counter").innerText
document.getElementById("add").addEventListener("click", Add)
document.getElementById("sub").addEventListener("click", Sub)
document.getElementById("Restart").addEventListener("click", restart)