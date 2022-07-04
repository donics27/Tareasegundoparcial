let pUrl = "https://jsonplaceholder.typicode.com/users" ;

fetch(pUrl)
.then( response => response.json())
.then ( json => {

let tbUser = document.querySelector("#usuarios");

let txtUsuario = "<tbody>" ;


if (json.length < 1){
    txtUsuario = txtUsuario + "<tr><td colspan='4'>no hay registros que mostrar</td></tr>"
} else {
    
    json.forEach(element => {
        txtUsuario = txtUsuario +  "<tr id='" + element.id + "' " + 
                                            "onclick='verDetalle(" + element.id + ")'><td>" + element.name + "</td>" + 
                                            "<td>" + element.username + "</td>" + 
                                            "<td>" + element.email + "</td>" +
                                            "<td>" + element.address.zipcode + "</td></tr>";
    });
}
    txtUsuario = txtUsuario + "</tbody>"
    tbUser.innerHTML = txtUsuario;

    })
.catch( error => console.log(error));



function verDetalle (objeto){

    let urlObj = pUrl + "/" + objeto;        
    
    fetch (urlObj)
    .then (resp => resp.json())
    .then (data => {      
        console.log(urlObj)
      let name = document.getElementById("nameDetalle");
      let user = document.getElementById("dorsalDetalle");
      let telf = document.getElementById("posicionDetalle");
      let webSite = document.getElementById("edadDetalle");
  
      
      dorsal.textContent = data.dorsal;
      edadDetalle.textContent = data.edad;
      edadDetalle.setAttribute('href', data.edadDetalle);
      name.textContent = data.name;
      posicion.textContent = data.posicion;

    })
}

