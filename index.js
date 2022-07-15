let ch1 = document.getElementsByTagName("h1")[0]
let bt_i = document.getElementsByClassName("bt-iniciar")
let bt_z = document.getElementsByClassName("bt-zerar")

let seg = 0
let min = 0
let hora = 0

function time(){
    
}

function iniciar(){
    setInterval(time, 1)
}

function zerar(){
    ch1.innerText = `00:00:00`
    numero = 0
    document.location.reload()//Recarrega a página que daí o cronômetro para
}




// if(hora<10 && min<10 && seg<10){
//     ch1.innerText = `0${hora}:0${min}:0${seg}`
//     seg++
// }else if(hora<10 && min<10 && seg<60){
//     ch1.innerText = `0${hora}:0${min}:${seg}`
//     seg++
// }else if(seg>=60 && seg<=3600){

//    min += 1
//    seg = seg%60

//    if(hora<10 && min<10 && seg<10){
//     ch1.innerText =`0${hora}:0${min}:0${seg}`
//     seg++
//     }else if(hora<10 && min<10 && seg>=10){
//         ch1.innerText =`0${hora}:0${min}:${seg}`
//         seg++
//     }else if(hora<10 && min>=10 && seg>=10){
//         ch1.innerText =`0${hora}:${min}:${seg}`
//         seg++
//     }else if(hora<10 && min>=10 && seg<10){
//         ch1.innerText =`0${hora}:${min}:0${seg}`
//         seg++
//     }else if(hora>=10 && min<10 && seg<10){
//         ch1.innerText =`${hora}:0${min}:0${seg}`
//         seg++
//     }else if(hora>=10 && min<10 && seg>=10){
//         ch1.innerText =`0${hora}:0${min}:${seg}`
//         seg++
//     }else if(hora>=10 && min>=10 && seg<10){
//         ch1.innerText =`${hora}:${min}:0${seg}`
//         seg++
//     }else{
//         ch1.innerText =`${hora}:${min}:${seg}`
//         seg++
//     }
// }else{
//     hora = hora + 1
//     min = seg%60
//     seg = seg%60
// }