const intl = Intl.DateTimeFormat(
    'sp-AR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
)

setInterval(() => {
    const hora = intl.format(new Date())
    const segundos = hora.second
    document.getElementById("container").innerHTML = `${hora}`
}, 1000)

const cont = document.querySelector(".container")
const back = document.querySelector(".body")
const extra = document.querySelector(".extra-info")

function cambiaColor() {
    cont.style.color = "black";
    cont.style.backgroundColor = "red";
    back.style.backgroundColor = "white";
    extra.style.color = "black";
    document.getElementById("extra").innerHTML = `YOU TOUCHED IT`
}