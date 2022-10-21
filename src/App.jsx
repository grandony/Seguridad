import { useState } from "react"

export const App = () => {


  const [open, setOpen] = useState(true);
  const Menus = [
    {title: "Inicio", src:"user"},
    {title: "Empresas", src:"building-office-2"},
    {title: "Personal", src:"user-group"},
    {title: "Kardex", src:"clipboard-document-list"},
  ]


  return (
      <>

      <div className="flex">

        <div className={` ${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}
        >
          
          <img 
            src="./src/heroicons/20/solid/chevron-left.svg"  
            className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple bg-white ${!open && "rotate-180"}`}
            onClick={()=> setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center ">
            <img 
              src="./src/img/logo-1.png" 
              alt="" 
              className={`cursor-pointer duration-500 w-10`}
            />
            <h1 
            className={`text-white origin-left font-medium text-xl duration-300 ${!open && "hidden" } `}
            >
              Electrosur S.A.
            </h1>

          </div>
            <ul className="pt-6">
              {Menus.map((menu, index)=>(
                <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                  <img 
                    src={`./src/heroicons/20/solid/${menu.src}.svg`} 
                    alt="" 
                    className="text-white bg-white rounded-full p-1"  
                  />
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200 text-lg`}
                  >{menu.title}</span>
                </li>
              ) )}
            </ul>
          
        </div>

        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>Area de trabajo T_T pipipi</h1>
        </div>
      
      </div>
      </>
         
    
    )
} 
