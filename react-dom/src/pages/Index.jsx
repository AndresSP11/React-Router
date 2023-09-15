import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

/* Funciòn especifica del loader, en el main recuerda que se hace el llamado correspondiente tambièn  */

export function loader(){
    return obtenerClientes();
}

function Index(){
    const clientes=useLoaderData();
  return (
<>
    <div>
      <h1 className=" text-blue-500 text-4xl font-black">Clientes</h1>
        <p>Administra tus clientes</p>
    </div>
    
        { clientes.length>0 ? (<table className="w-full text-yellow-50 rounded-xl">
            <thead className="bg-blue-600 rounded-xl">
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
