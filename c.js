let datosNombre = prompt("ingrese su nombre");
let datosEdad = parseInt(prompt(`hola ${datosNombre}, ingrese su edad`)); 
let aviso = alert("la maquina contara si escribe`siga`, para que pare escriba basta`basta`");
let pregunta = prompt("escriba`siga` o `basta`");
let añoInicio = 2023;
let compilado = [];
let amplitud = 0;
let guardarPerfil;
let nuevoPerfil;
let nuevoPerfil2;
let filtrados;
let buscadorDeNombre;

//esta funcion toma el prompt de año y de  le datosEdad, luego le suma uno a cada y devuelve un alert

class DatosBase {
    constructor(nombre, edad,) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
function buscaMayores(){
    filtrados = compilado.filter((item) => item.edad <= 18);
    console.log = (filtrados);
}

function crearPerfil(){
    compilado.push(new DatosBase(datosNombre, datosEdad));
    alert(`NOMBRE: ${compilado[amplitud].nombre} EDAD:¨${compilado[amplitud].edad}`);
}

function tarea(){
    for (let i = 1; i <= 40; i++) {
        let resultado = datosEdad++;
        let añoDespues = añoInicio++;
        alert(`usted tendrá ${resultado} en el ${añoDespues}`);
        let preguntaDos = prompt("escriba`siga` o `basta`");
         if(preguntaDos == ("basta")){
            alert(`usted tendrá ${datosEdad-1} años, en el año ${añoDespues}`);
            break;
         }
      }
}

//acá estan todas las interacciones con el usuario
if (pregunta == ("siga")){
    tarea();
}else{
    alert(`usted tiene ${datosEdad} años, en el ${año}`);
}
 
guardarPerfil = prompt(`desea impprimir su perfil en la página?`);

if(guardarPerfil == "si"){
crearPerfil();
}

nuevoPerfil = prompt(`quieres hacer un nuevo perfil?`);

if(nuevoPerfil == "si"){
    añoInicio = 2023;
    datosNombre = prompt("ingrese su nombre");
    datosEdad = parseInt(prompt(`hola ${datosNombre}, ingrese su edad`)); 
    aviso = alert("la maquina contara si escribe`siga`, para que pare escriba basta`basta`");
    amplitud = 1;
    tarea(añoInicio);
    crearPerfil(amplitud);
}

nuevoPerfil2 = prompt(`quieres hacer un nuevo perfil?`);

if(nuevoPerfil2 == "si"){
    añoInicio = 2023;
    datosNombre = prompt("ingrese su nombre");
    datosEdad = parseInt(prompt(`hola ${datosNombre}, ingrese su edad`)); 
    aviso = alert("la maquina contara si escribe`siga`, para que pare escriba basta`basta`");
    amplitud = 2;
    tarea(añoInicio);
    crearPerfil(amplitud);
}

//parte en la que 

buscadorDeNombre = prompt("ingrese nombre que quiere buscar, (los resultados aparecen por consola)");

const buscaNombre = compilado.filter((el) => el.nombre.includes(buscadorDeNombre));
console.log(buscaNombre);
