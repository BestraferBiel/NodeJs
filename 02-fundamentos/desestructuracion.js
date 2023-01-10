const deadpool={
nombre: "Wade ",
apellido:"Winston",
poder:"Regeneración",
 getNombre: function() {
  
  return `${this.nombre} ${this.apellido} ${this.poder}`  
 }
}

console.log(deadpool.getNombre());


/*const nombre= deadpool.nombre;
const apellido= deadpool.apellido;
const poder= deadpool.poder;*/

//Destructuracion ***************************
//const {nombre,apellido,poder}=deadpool;
//console.log(nombre,apellido,poder);

function imprimeHeroe({nombre,apellido,poder,edad=0}) {
    
    console.log(nombre,apellido,poder,edad);
}

imprimeHeroe(deadpool);
//Otro ejemplo
const superHeroes=["Batman","Superman","flash"];

const [p1,p2,p3]=superHeroes;
console.log(p1);