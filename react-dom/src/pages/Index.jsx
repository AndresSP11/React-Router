import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader(){
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: 'Codigo Con Juan'
        },
    ];
    /* ESTO ES LO QUE VA MOSTRR EN useLoaderData */
    return clientes
}

function Index(){
    const clientes=useLoaderData();
  return (
<>
    <div>
      <h1 className=" text-blue-500 text-4xl font-black">Clientes</h1>
        <p>Administra tus clientes</p>
    </div>
    
        { clientes.length>0 ? (<table className="w-full text-yellow-50">
            <thead className="bg-blue-600">
                <th>Nombre</th>
                <th>Informacion</th>
                <th>Actividades</th>
            </thead>
            <tbody className="bg-white text-black">
                {clientes.map(cliente=>(
                    <Cliente cliente={cliente}
                    key={cliente.id}></Cliente>
                ))}
            </tbody>
        </table>): (<p className="font-extrabold text-3xl mt-5 ">No existen clientes aún</p>)}
    
</>    
  )
}

export default Index
