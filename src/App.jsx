import { useState } from "react"
import { Sidebar } from "./components/pages";
import { AppRouter } from "./router/AppRouter";

export const App = () => {




  return (
      <>
      <div className="flex">

        <Sidebar/>
        <AppRouter/>
      </div>
      </>
         
    
    )
} 
