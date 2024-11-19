import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";
import casa2 from "./assets/casa2.png"
import { Navbar } from "./Navbar";
import { ContactUs } from "./ContactUs";
import { Footer } from "./footer";
import { ContactBar } from './ContactBar'
import { TopBar } from "./TopBar";
import "./style/ServExpl.css"

export const AppManutenz= () => {
  
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
            <div className="expl-card-img-wrap"><img src={casa2} className="expl-card-img"/></div>
                <div className="expl-card-text">
                    <h2>Manutenzione</h2>
                    <p>La manutenzione regolare di climatizzatori e pompe di calore è essenziale per garantirne l’efficienza e prolungarne la durata nel tempo. Affidarsi a professionisti qualificati è fondamentale, poiché un intervento esperto consente di ottimizzare il funzionamento dell’impianto, prevenire guasti e ridurre il consumo energetico. I tecnici specializzati eseguono controlli accurati, pulizia dei filtri e verifica dei componenti, assicurando un servizio affidabile e sicuro. Solo una manutenzione adeguata permette di mantenere le performance elevate e ridurre i costi di gestione.</p>
                </div>
            </div>
        <ContactUs />
        <ContactBar />
        <Footer />
        </div>
        </>
    )
  }
  