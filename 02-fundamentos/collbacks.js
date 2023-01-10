/*setTimeout(function () {
      console.log("Hola mundo")  
},1000)*/


const getUsuarioByID= (id,collback)=>{
  
 const usuario={
   id,
   nombre: "Frernando",
   edad:  38

 }
 setTimeout(() => {
    collback(usuario)
 }, 1500);

};

getUsuarioByID(27,(usuario)=>{

    console.log(usuario);
});








