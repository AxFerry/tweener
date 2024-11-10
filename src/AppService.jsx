import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { TopBar } from './TopBar'
import { ServExpl } from "./ServExpl"
import { Footer } from "./footer"
import { Services } from "./Services"
import  { useLocalStorage} from "use-local-storage"



export const AppService = () => {
  
  const [isDark, setTheme] = useState(JSON.parse(localStorage.getItem("isDark") || false));

  useEffect(()=>{
    localStorage.setItem("isDark", JSON.stringify(isDark));
  },[isDark])
  


  return (
    <>
      <div data-theme={ isDark? "dark" : "light"}>
       <Navbar  
       isChecked={isDark}
       handleChange={()=> setTheme(!isDark)}
       />
       <TopBar />
       <Services />
       <ServExpl/>
     
      <Footer />
      </div>
      </>
  )
}


