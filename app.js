


let peso = parseFloat(prompt("Introduce tu peso en kilogramos:"))
let talla = parseFloat(prompt("Introduce tu altura en metros:"))
let imc = peso / (talla*talla);

//let historiPesos = [];
//historiPesos.push(imc);

let containerDOM = document.getElementById("container");
//let tablaDOM = document.getElementById("tabla")

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
        
        /*

        let ultimosCinco = historiPesos.slice(-5);
        //let tabla = document.getElementById("tabla");
        for (let j = 0; j < 5; j++) {
            let fila = `<tr><td>${i}</td><td>${ultimosCinco[j]}</td></tr>`;
            tablaDOM.innerHTML += fila;
            //ultimosCinco.push(imc);
        }
        





//alert(historiPesos);

//let pesosDOM = document.getElementById("historialPesos")

*/

