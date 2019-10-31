
var Alimentar =function() {

  return new Promise(function(resolve, reject){//Utilização da Promisse em códigos assíncrono, o resolve para resolver ação, o rejectquando uma ação não é resolvida.
    var jantarpronto = true;
  
    if(jantarpronto) {
        resolve('Comer');
    } else {
     
      reject('Esperar');
    }
  
   
  });

}


Alimentar()// .then ação foi resolvida, o.catch a ação não foi resolvida algum erro aconteceu
.then(function (response) {
  console.log(response);

})
.catch(function(error){
  console.log(console.error);
 
  });
