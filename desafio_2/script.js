function updateTime(){
    blink()
    let time = new Date()

    let segundo = time.getSeconds()
    let minuto = time.getMinutes()
    let hora = time.getHours()

    let dia = time.getDate()
    let mes = time.getMonth()
    mes = pegarMes(mes)
    let ano = time.getFullYear()

    setarTextoPorId("segundos",segundo)
    setarTextoPorId("minutos",minuto)
    setarTextoPorId("horas",hora)
    setarTextoPorId("dia",dia)
    setarTextoPorId("mes",mes)
    setarTextoPorId("ano",ano)

    console.log(segundo)
    console.log(minuto)
    console.log(hora)
    console.log(dia)
    console.log(mes)
    console.log(ano)


}
function blink(){
    let pontinhos = document.querySelectorAll('.separacao')

    for(p of pontinhos){
        p.classList.toggle("blink")
    }
}

function setarTextoPorId(id,texto) {
    if(!isNaN(texto)){
        if(texto<10){
            texto = "0"+String(texto)
        }
    }

    document.getElementById(id).innerText=texto
}

function pegarMes(num){
    const monthNames = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    return monthNames[num]
}

function initTime(){
    setInterval(updateTime,500)

}