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
    

const getEmpleado= (id)=>{
   
     const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find((e)=> e.id === id) ?.nombre
       if (empleado) {
         resolve(empleado);
       }
       else reject(`no existe epmeado con id ${id}`);
    
    
    
    })
    return promesa;

  
   }



   const getSalario = (idS)=>{
    const promesa = new Promise((resolve, reject) => {
        
        const sal = salarios.find((e)=> e.id === idS) ?.salario

        if (sal) {
             
            resolve(sal);
        }
        
        else reject(`No existe u salario con ID ${idS}`)
       
    })
    return promesa;

   }


const id=10;

//getEmpleado(id)
//.then(empleado=>console.log(empleado))
//.catch(err=>console.log(err));


const idS=2;
//getSalario(idS)
//.then(sal=>console.log(sal))
//.catch(err=>console.log(err));

// PROMESAS EN CADENA//

let nombre;
getEmpleado(id)
.then (empleado=>{
nombre=empleado;
    return getSalario(idS);
})
.then (salario=>console.log("El empleado:",nombre,"tiene un salario de ",salario))
.catch(err=>console.log(err));