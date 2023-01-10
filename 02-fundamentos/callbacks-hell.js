const empleados = [

{
    id:1,
    nombre:"Gabriel"

},

{
    id:2,
    nombre:"Roberto"

},
{
    id:3,
    nombre:"Juan Carlos"

}

];

const salarios = [

    {
        id:1,
       salario: 2000
    
    },
    
    {
        id:2,
        salario:2500
    
    },
   
];


const getEmpleado= (id,callback)=>{
    
    const empleado = empleados.find((e)=> e.id === id)
  
    if (empleado )  {
     callback (null,empleado);
   }
  
   else {
    
callback (`Empleado con id ${id}  no existe`);
   }

}
 getEmpleado(1,(err,empleado)=>{
if (err) {
    console.log("ERROR!!!!");
    return console.log(err);
}
    console.log("EL Empleado Existe");
    console.log(empleado);
 })


 const getSalario= (id)=>{
    
    const sal = salarios.find((e)=> e.id === id)
     if (sal) {
        return sal;
     }
     else if (sal === undefined ) {
        console.log("No hay ningun salario con ese ID")
     } 
}




console.log(getSalario(3));

