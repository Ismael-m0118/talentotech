let repartio = false;
let cartas = [];

function repartir() {
    
    let tablero = document.getElementById("tablero");
    tablero.innerHTML="";
    const TOTAL_CARTAS = 10;
    for (let i = 0; i < TOTAL_CARTAS; i++) {
        let carta = document.createElement("img");
        let indice = Math.floor(Math.random() * 52) + 1;
        cartas.push(indice);
        carta.src = "imagenes/cartas/Carta" + indice + ".jpg";
        tablero.appendChild(carta);

    }
    const audio=new Audio("sonidos/repartir.mp3")
    audio.play().then(() => {
    window.alert("se han repartido las cartas");
});
repartio = true;
}

function verificar(){
     if(!repartio){
        window.alert("no se han repartido cartas");
     }
     else{
        contadores=new Array(13).fill(0);
       for(let i=0;i<cartas.length;i=i+1){
        let posicion=cartas[i]%13;
        if(posicion == 0){
            posicion=12
        }
        else{
            posicion--;
        }
        contadores[posicion]++;
       } 
       nombreCartas=["As","Dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","J","Q","K"];
    let mensaje="se encontraron los siguientes grupos: \n";
    grupos =["vacío","Non","par", "Terna" , "Cuarta" , "Quinta" ,"Sexta" ,"séptima" , "Octava" , "Novena" , "Décima"];
    
       for(let i= 0; i<contadores.length;i++){
        if(contadores[i]>= 2) {
       mensaje +=grupos[contadores[i]] + " de "+nombreCartas[i] + "\n";
       }
       }
        window.alert(mensaje)
     }
}