import fetch from "node-fetch";

function gerarUsuarios(quant){
     fetch(`https://json-server-onqo.onrender.com/tatuadores `)
     .then(function (response){
        return response.json();
     }) 
     .then(function (response){
        console.log(response);
     })                       
     .catch(function (error){
        console.log (error);
     }) ;
}
gerarUsuarios(3)
