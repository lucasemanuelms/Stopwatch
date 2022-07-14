let ch1 = document.getElementsByTagName("h1")[0]
let bt_i = document.getElementsByClassName("bt-iniciar")
let bt_z = document.getElementsByClassName("bt-zerar")

let numero = 0
let min = 0
let seg = 0
let hora = 0

function time(){

    if(numero<10){
        ch1.innerText = `00:00:0${numero}`
        numero++
    }else if(numero<60){
        ch1.innerText = `00:00:${numero}`
        numero++
    }else if(numero>=60){
       min = Math.trunc(numero/60)//O Math.trunc despreza a parte decimal
       seg = numero%60

        if(min<10 && seg<10){
            ch1.innerText =`00:0${min}:0${seg}`
            numero++
        }else if(min<10 && seg>10){
            ch1.innerText =`00:0${min}:${seg}`
            numero++
        }else if(min>10 && seg<10){
            ch1.innerText =`00:${min}:0${seg}`
            numero++
        }else{
            ch1.innerText =`00:${min}:${seg}`
            numero++
        }
    }
    
}

function iniciar(){
    setInterval(time, 10)
}

function zerar(){
    ch1.innerText = `00:00:00`
    numero = 0
    document.location.reload()//Recarrega a página que daí o cronômetro para
}