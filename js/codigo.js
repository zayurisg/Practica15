function calcula_distacia(){
    var distancia1= 778000000;
    var distancia2= 1429000000;
    var altura=5.636;
    var recorrido1= distancia1/altura;
    var recorrido2= distancia2/altura;
    var d=document.getElementById("resultadoA");
    d.innerHTML='a) ' +recorrido1+ ' veces ' + ' b) ' + recorrido2 + ' veces';
    }