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
       else reject(`no existe empleado con id ${id}`);
    
    
    
    })
    return promesa;

  
   }



   const getSalario = (id)=>{
    const promesa = new Promise((resolve, reject) => {
        
        const sal = salarios.find((e)=> e.id === id) ?.salario

        if (sal) {
             
            resolve(sal);
        }
        
        else reject(`No existe un salario con ID ${id}`)
       
    })
    return promesa;

   }


   const id= 7;


   const getInfoUsuario = async(id)=>{
     try {

     const empleado= await getEmpleado(id);
     const salario=await getSalario(id);
     return `El salario del empleado ${empleado} es de ${salario} euros`;
        
     } catch (error) {
        return  error;
     }
     

   }



   getInfoUsuario(id)
   .then((msg)=>{console.log(msg)})
   .catch((error)=>{console.log(error)});