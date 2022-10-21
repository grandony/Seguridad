import { Route, Routes } from "react-router-dom"
import { Empresas, Inicio, Kardex, Personal } from "../components/pages"

export const AppRouter = () => {
  return (
    <>
    <Routes>
          <Route path="empresas" element={<Empresas/>} />
          <Route path="inicio" element={<Inicio/>} />
          <Route path="kardex" element={<Kardex/>} />
          <Route path="personal" element={<Personal/>} />
    </Routes>
    </>
  
  
  )
}
