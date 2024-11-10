import { Carousel } from "./carousel";
import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";
import { Footer } from "./footer";
import { ContactUs } from "./ContactUs";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
export const AppGallery= () => {
  
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
         <Carousel/>
        <ContactUs />
        <Footer />
        </div>
        </>
    )
  }
  