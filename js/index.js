let dolar
let peso

window.addEventListener('load', loading)

function loading(){
    let btnDolarucos = document.getElementById('dolarucos')
    btnDolarucos.addEventListener('click', MostrarDolares)

    let btnPesucos = document.getElementById('pesucos')
    btnPesucos.addEventListener('click', MostrarPesos)

    ocultarDolar()
    ocultarPeso()
}



//-------------------DOLARES--------------------------

function ocultarDolar(){
    let dol = document.getElementById('dolares')
    dol.style.display = 'none'
}

function MostrarDolares(){
    document.getElementById('dolares').style.display = 'block'  
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('pesos').style.display = 'none' 

    let btnBack = document.getElementById('btn-back')
    btnBack.addEventListener('click', reiniciar)

    let calcularOp = document.getElementById('btn-calcularD')
    calcularOp.addEventListener('click', calcularDolar)
}

function calcularDolar(){
    const valorEnDolar = 17.15
    let peso = document.getElementById('dolarUser').value
    let res = valorEnDolar * peso

    document.getElementById('resultado').innerHTML
     
    let sectionMsj = document.getElementById('resultado')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'La cantidad de convertir ' + peso + ' Dolares a Pesos es: $' + res + ' pesos'
    //se utiliza appendChild para agregar nuevos elementos a un documento existente o para mover un elemento de la página
    sectionMsj.appendChild(parrafo)
}

//--------------------PESOS--------------------------

function ocultarPeso(){
    //Funciona sin tener que asignarle una variable let ataque = document.getElementById('attack')
    document.getElementById('pesos').style.display = 'none'
}

function MostrarPesos(){
    document.getElementById('pesos').style.display = 'block'
    document.getElementById('inicio').style.display = 'none'
    document.getElementById('dolares').style.display = 'none'
    
    let btnBack = document.getElementById('btn-back1')
    btnBack.addEventListener('click', reiniciar)

    let calcular = document.getElementById('btn-calcular1')
    calcular.addEventListener('click', calcularPeso)
}

function calcularPeso(){

    const tasaCambio = 17.15
    let dolar = document.getElementById('pesoUser').value

    let res = dolar / tasaCambio 

    document.getElementById('resultado1').innerHTML
     
    let sectionMsj = document.getElementById('resultado1')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'La cantidad de convertir ' + dolar +  ' Pesos a Dolares es: $' + res + ' dolares'
    //se utiliza appendChild para agregar nuevos elementos a un documento existente o para mover un elemento de la página
    sectionMsj.appendChild(parrafo)
}

//----------------FUNCION REINICIAR-----------
function reiniciar(){
    location.reload()
}
