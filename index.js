
// const persona={
//     nombre:'fran',
//     edad:15,
//     idDeveloper:true,
//     saludo:function(){
//         console.log('hols')
//     }
// }
// console.log(persona)


// persona.saludo()



// const persona2={
//     nombre:'miguel',
//     edad:15,
//     isDeveloper:false,
//     saludo:function(){
//         console.log('hola')
//     }
// }

// const creaPersona=(nombre,edad,isDeveloper)=>{
//     return {
//         nombre,
//         edad,
//         isDeveloper,
//         saludo:function(){
//             console.log('hols')
//         }
//     }
// }


// const creaPersona2=creaPersona('fran',15,true)

// console.log(creaPersona2)


class Estudiante{
    nombre;
    asignatura
    lista=["JavaScript","HTML","CSS"]
    constructor(nombre,asignatura){
        this.nombre=nombre,
        this.asignatura=asignatura

    }
obtenDatos(){
   console.log(`mi nombre es ${this.nombre} y soy un ${this.asignatura}`)
}


}


const estudiante=new Estudiante("fran","desarrollador")


estudiante.obtenDatos()

console.log(estudiante)




