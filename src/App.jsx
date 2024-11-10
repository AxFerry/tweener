import { useState , useEffect} from 'react'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { Carousel } from './carousel'
import { TopBar } from './TopBar'
import { ContactUs } from "./ContactUs"
import { Footer } from "./footer"
import { ServExpl } from './ServExpl'
import { Services } from "./Services"
import  { useLocalStorage} from "use-local-storage"



export const App= () => {
  
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
      <ContactUs />
      <Footer />
      </div>
      </>
  )
}


