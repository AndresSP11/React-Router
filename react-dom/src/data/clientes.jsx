/* Es una función asyncrona, para obtener clientes... vamos a utilizar digamos la url que se origina mediante primer o
que se tiene que correr el json para luego  */

export async function obtenerClientes(){
    const resultado=await fetch(`${import.meta.env.VITE_API_URL}`)
    const respuesta=await resultado.json();
    /* Esto es lo que se va obtener al llamr la función obtenerClientes()... */
    return respuesta
    
}