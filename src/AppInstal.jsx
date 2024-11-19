
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";
import casa1 from "./assets/casa1.png"
import { Navbar } from "./Navbar";
import { ContactUs } from "./ContactUs";
import { Footer } from "./footer";
import { TopBar } from "./TopBar";
import { ContactBar } from './ContactBar'
import "./style/ServExpl.css"

export const AppInstal= () => {
  
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
         <div className="expl-card">
                <div className="expl-card-img-wrap"><img src={casa1} className="expl-card-img"/></div>
                <div className="expl-card-text">
                    <h2>Installazione</h2>
                    <p>L'installazione di climatizzatori e pompe di calore offre numerosi vantaggi per il comfort abitativo. Questi impianti non solo permettono di raffreddare in estate e riscaldare in inverno, ma migliorano anche l'efficienza energetica, riducendo i consumi rispetto ai sistemi tradizionali. Le pompe di calore, in particolare, utilizzano una tecnologia ecologica che sfrutta l'energia dall'aria esterna, contribuendo così alla sostenibilità e al risparmio a lungo termine. Un investimento che si ripaga rapidamente con il miglioramento del benessere indoor e la riduzione delle bollette energetiche.</p>
                </div>
            </div>
        <ContactUs />
        <ContactBar />
        <Footer />
        </div>
        </>
    )
  }
  