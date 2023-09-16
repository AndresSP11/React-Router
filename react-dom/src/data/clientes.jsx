/* Es una función asyncrona, para obtener clientes... vamos a utilizar digamos la url que se origina mediante primer o
que se tiene que correr el json para luego  */

export async function obtenerClientes(){
    const resultado=await fetch(`${import.meta.env.VITE_API_URL}`)
    const respuesta=await resultado.json();
    /* Esto es lo que se va obtener al llamr la función obtenerClientes()... */
    return respuesta
}

export async function obtenerCliente(id){
    const resultado=await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const respuesta=await resultado.json();
    /* Esto es lo que se va obtener al llamr la función obtenerClientes()... */
    return respuesta
}

export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL,{
            method:'POST',
            body:JSON.stringify(datos),
            headers:{
                'Content-Type':'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}
export async function actualizarCliente(id,datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:'PUT',
            body:JSON.stringify(datos),
            headers:{
                'Content-Type':'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method:'DELETE',
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}