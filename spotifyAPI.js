let uri="https://accounts.spotify.com/api/token";

let dato1="grant_type=client_credentials";

let dato2="client_id=e89eff21bf1d40b99e49d98782ceed76";

let dato3="client_secret=c53c029403b74c2c8e8d4fed97d53df8";


let parametrosPOST={
    method:"POST",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    },
    body:`${dato1}&${dato2}&${dato3}`
}


fetch(uri, parametrosPOST)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    obtenertoken(respuesta)
})
.catch(function(error){
    console.log(error)
})

function obtenertoken(respuesta){
    let token=respuesta.token_type+" "+respuesta.access_token
    obtenercanciones(token)
}



function obtenercanciones(token){
    let uri="https://api.spotify.com/v1/artists/7uaIm6Pw7xplS8Dy06V6pT/top-tracks?market=us";

    let parametrosEnvio = {
        method: "GET",
        headers: {
            Authorization: token
        }
    }

    fetch(uri, parametrosEnvio)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks[1].popularity)
    pintarDatos(respuesta)   
})
.catch(function(error){
    console.log(error)
})
}



function pintarDatos(datos){

    let fila=document.getElementById("fila")

    datos.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)

        //crear un div que sirve de columna con js

        let columna = document.createElement("div")
        columna.classList.add("col")

        //crear un div que sirve de trjeta 
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //crear un img trjeta 
        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.src=cancion.preview_url
        audio.setAttribute("controls", "controls")

        //Crear div para popularidad
        popularidad=cancion.popularity
        let p = document.createElement("div")
        let content = document.createTextNode("popularidad")
        let content2=document.createTextNode(popularidad)
        p.appendChild(content)
        p.setAttribute("class", "p")

        if(popularidad<25)
        {
            let estrella1=document.createElement("img")
            estrella1.src="img/star.png"
            p.appendChild(estrella1)
            p.appendChild(content2)
        }
        else
        {
            if(popularidad<29&&popularidad>25)
            {
                let estrella1=document.createElement("img"),
                estrella2=document.createElement("img")
                estrella1.src="img/star.png"
                estrella2.src="img/star.png"
                p.appendChild(estrella1)
                p.appendChild(estrella2)
                p.appendChild(content2)
            }
            else
            {
                if(popularidad>27&&popularidad<=33)
                {
                    let estrella1=document.createElement("img"),
                    estrella2=document.createElement("img"),
                    estrella3=document.createElement("img")
                    estrella1.src="img/star.png"
                    estrella2.src="img/star.png"
                    estrella3.src="img/star.png"
                    p.appendChild(estrella1)
                    p.appendChild(estrella2)
                    p.appendChild(estrella3)
                    p.appendChild(content2)
                }
                else
                {
                    if(popularidad>33&&popularidad<40)
                    {
                        let estrella1=document.createElement("img"),
                        estrella2=document.createElement("img"),
                        estrella3=document.createElement("img"),
                        estrella4=document.createElement("img")
                        estrella1.src="img/star.png"
                        estrella2.src="img/star.png"
                        estrella3.src="img/star.png"
                        estrella4.src="img/star.png"
                        p.appendChild(estrella1)
                        p.appendChild(estrella2)
                        p.appendChild(estrella3)
                        p.appendChild(estrella4)
                        p.appendChild(content2)
                    }
                    else
                    {
                        if(popularidad>=45)
                        {
                            let estrella1=document.createElement("img"),
                            estrella2=document.createElement("img"),
                            estrella3=document.createElement("img"),
                            estrella4=document.createElement("img"),
                            estrella5=document.createElement("img")
                            estrella1.src="img/star.png"
                            estrella2.src="img/star.png"
                            estrella3.src="img/star.png"
                            estrella4.src="img/star.png"
                            estrella5.src="img/star.png"
                            p.appendChild(estrella1)
                            p.appendChild(estrella2)
                            p.appendChild(estrella3)
                            p.appendChild(estrella4)
                            p.appendChild(estrella5)
                            p.appendChild(content2)
                        }
                    }
                }
            }
        }
        

        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        tarjeta.appendChild(p)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}