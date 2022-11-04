//este codigo ya funciona xd
//Creamos los eventos
"use strict"
const btnTXT = document.getElementById("btn_txt");
const lblResultado = document.getElementById("resultado");
const btnJSON = document.getElementById("btn_json");
const btnAPI = document.getElementById("btn_api");
//const {post_url, author} = imagen;

btnTXT.addEventListener("click", function (e) {
    e.preventDefault();
    const url = "data/datos.txt";
    fetch(url)
    .then(respuesta => {
        console.clear();
        console.log(respuesta);
        console.log(respuesta.status);
        console.log(respuesta.statusText);
        console.log(respuesta.url);
        console.log(respuesta.type);
        return respuesta.text()
    })
    .then(personas => lblResultado.innerHTML = personas)
    .catch(error => console.log(error)
    )
})

//Para cargar los datos del JSON

btnJSON.addEventListener("click", function (e) {
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
            lista += `
            <li><b>Nombre:</b> ${nombre}, <b>Puesto:</b> ${puesto}
            ,<b>empresa:</b> ${empresa}</li>
            `;
        });
        lista += "</ul>";
        lblResultado.innerHTML = lista;
    }).catch(error => console.log(error))
});

//Para cargar los datos de un REST API
btnAPI.addEventListener("click", function (e) {
    e.preventDefault();
    fetch("https://picsum.photos/list")
    .then(res => res.json())
    .then(imagenes => {
        let lista = "<ul>";
        imagenes.forEach(imagen => {
            lista += `
            <li>
            <a target="_blank" href="${imagen.post_url}">Ver imagen</a>
                <b>Autor:</b> ${imagen.author}
            </li>
            `;
        });
        lista += "</ul>";
        lblResultado.innerHTML = lista;
    })
    .catch(error => console.log(error));
});