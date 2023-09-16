import { Form, Link, redirect, useActionData, useLoaderData} from "react-router-dom"
import { obtenerCliente, actualizarCliente } from "../data/clientes"
import Formulario from "../components/Formulario"
import Error from "../components/Error"

export async function  loader({params}){
   const cliente= await obtenerCliente(params.clientesId)
   if(Object.values(cliente).length===0){
    throw new Response('',{
      status:404,
      statusText:'El cliente no fue encontrado'
    })
   }
    console.log(cliente)
    return cliente
  }

export async function action({request,params}){
  /* Recordar que request siempre es necesario cuando sse trata de la función action */
  /* Las 2 siguientes linesa de codigo son importantes para capturar el valor de lo ingresado.. */
  const formData= await request.formData();
  const datos=Object.fromEntries(formData);
  const errores=[];
  if(Object.values(datos).includes('')){
    errores.push("Introduce los campos Correctamente porfavor")
  }
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
      if(regex.test(email)){
        errores.push('El email no es valido')
      }
  if(Object.keys(errores).length>0){
    console.log(errores)
    return errores;
  }
  /* Se le agrega la función que realizará el llamado  */
  await actualizarCliente(params.clientesId,datos);
  
  return redirect('/')
}

function EditarCliente() {
  const cliente = useLoaderData();
  const errores=useActionData();
  return (
    <>
    <div>Nuevo Cliente</div>
      <div className='w-full flex justify-end'>
        <Link className='bg-blue-500 px-3 py-1 rounded-lg text-yellow-50 font-bold'
        to={'/'}>Volver </Link>
      </div>
      <div className='p-5 w-full bg-white border border-spacing-9 mt-10 rounded-lg shadow-xl'>
      <p>Formulario Aqui</p>
      <Form method='post' 
      action=''
      className='mt-10'
      >
        {errores?.length >0 && errores.map((error,i)=><Error key={i}>{error}</Error>)}
        <Formulario cliente={cliente}></Formulario>
        <input type="submit" className="w-full bg-blue-500 py-3 text-white font-bold rounded-xl hover:bg-blue-700 cursor-pointer" value={"Guardar Cambios"}/>
      </Form>
      </div></>
  )
}

export default EditarCliente
