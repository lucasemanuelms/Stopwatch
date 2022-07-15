let ch1 = document.getElementsByTagName("h1")[0]
let bt_i = document.getElementsByClassName("bt-iniciar")
let bt_z = document.getElementsByClassName("bt-zerar")

let seg = 0
let min = 0
let hora = 0
let interval

function doisDigitos(n){
    if(n<10){
        return `0${n}`
    }else{
        return n
    }
}

function time(){
    seg++
    if(seg==60){
        min++
        seg=0
        if(min==60){
            hora++
            min=0
        }
    }

    ch1.innerText = `${doisDigitos(hora)}:${doisDigitos(min)}:${doisDigitos(seg)}`

}

function iniciar(){
   interval = setInterval(time, 1)
}

function zerar(){
    clearInterval(interval)
    seg=0
    min=0
    hora=0
    ch1.innerText = `00:00:00`
}