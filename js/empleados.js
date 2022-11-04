//para cargar los datos del json
"use strict"
const btnJSON = document.getElementById("btn_json");
const lblResultado = document.getElementById("resultado");

btnJSON.addEventListenerA("click", function (e) {
    e.preventDefault();
    fetch("data/empleados.json")
    .then(res => {
        return res.json()
    })
    .then(personas => {
        console.clear();
        console.log(personas);
        let lista = "<ul>";
        personas.forEach(persona => {
            const {nombre, puesto, empresa} = persona
            lista +=`
            <li><b>Nombre:</b> ${nombre}, <b>puesto:</b> ${puesto},
            <b>empresa:</b> ${empresa}</li>
            `;
        });
        
        lista+="</ul>";
        lblResultado.innerHTML = lista;
    }).catch(error => console.log(error))
});