import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { TopBar } from './TopBar'
import { ServExpl } from "./ServExpl"
import { Footer } from "./footer"
import { Services } from "./Services"



export const AppService = () => {
  const [isDark, setTheme] = useState(false);

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


