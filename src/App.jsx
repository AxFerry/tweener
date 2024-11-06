import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { Carousel } from './carousel'
import { TopBar } from './TopBar'
import { ContactUs } from "./ContactUs"
import { Footer } from "./footer"
import { Services } from "./Services"



export const App= () => {
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
      <ContactUs/>
     
      <Carousel />
      <Footer />
    
      </div>
      </>
  )
}


