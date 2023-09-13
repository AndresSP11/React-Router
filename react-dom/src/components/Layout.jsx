import { Outlet,Link,useLocation } from "react-router-dom"


const Layout = () => {
    const location=useLocation()
  return (
    <div className=' md:flex md:min-h-screen'>
      <aside className=' md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>CRM-Clientes</h2>
        <nav>
        <Link to="/" className={`${location.pathname=='/' ? 'text-blue-500':'text-yellow-50'} block   font-semibold mt-3 hover:text-blue-400`}>Clientes</Link>
            <Link to="/clientes/nuevos" className={`${location.pathname=='/clientes/nuevos' ? 'text-blue-300':'text-yellow-50'} block   font-semibold mt-3 hover:text-blue-400`}>Nuevos Clientes</Link>
           
        </nav>
      </aside>
      <main className=' md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Layout
