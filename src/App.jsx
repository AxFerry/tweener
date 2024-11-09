import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { Carousel } from './carousel'
import { TopBar } from './TopBar'
import { ContactUs } from "./ContactUs"
import { Footer } from "./footer"
import { ServExpl } from './ServExpl'
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
       <ServExpl/>
      <ContactUs/>
      <Carousel />
      <Footer />
      </div>
      </>
  )
}


