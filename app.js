let peso = parseFloat(prompt("Introduce tu peso en kilogramos:"))
let talla = parseFloat(prompt("Introduce tu altura en metros:"))
let imc = peso / (talla*talla)

let containerDOM = document.getElementById("container")

/*
switch(imc){

    case(imc < 18.5):
        containerDOM.innerHTML=`
        <img src="./imagenes/Bajo de peso.jpg">
        <h1>Usted está bajo de peso</h1>
        `
        break;
    case(18.5 <= imc <= 24.9):
        containerDOM.innerHTML=`
        <img src="./imagenes/Normal.jpg">
        <h1>Usted tiene el peso normal</h1>
        `
        break;
    case(25 <= imc <= 29.9):
        containerDOM.innerHTML=`
        <img src="./imagenes/Sobrepeso.jpg">
        <h1>Usted está con sobre peso</h1>
        `
        break;
    default(imc >= 30):
        containerDOM.innerHTML=`
        <img src="./imagenes/Obeso.jpg">
        <h1>Usted está obeso</h1>
        `
        break;
}

*/
if(imc<=18.5)
{
    containerDOM.innerHTML=`
    <img src="./imagenes/Bajopeso.jpg">
    <h1>Usted está bajo de peso</h1>
    `
}else if(18.5<=imc && imc<=24.9)
        {
            containerDOM.innerHTML=`
            <img src="./imagenes/Normal.jpg">
            <h1>Usted tiene el peso normal</h1>
            `
            containerDOM.style.backgroundColor = "#e8d125";
        }else if(25 <= imc && imc<= 29.9)
                { 
                    containerDOM.innerHTML=`
                    <img src="./imagenes/Sobrepeso.jpg">
                    <h1>Usted está con sobre peso</h1>
                    `
                    containerDOM.style.backgroundColor = "#84e825";
                }else if(imc>=30)
                        {
                        containerDOM.innerHTML=`
                        <img src="./imagenes/Obeso.jpg">
                         <h1>Usted está obeso</h1>
                         `
                         containerDOM.style.backgroundColor = "#3425e8";
                        }           
    




