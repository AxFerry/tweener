import { useState } from "react"
import ex1 from "./assets/esagono1.png"
import ex2 from "./assets/esagono2.png"
import ex3 from "./assets/esagono3.png"
import "./style/Services.css"
import { Link } from "react-router-dom"


export const Services = () => {

 
    return(
        <div className="service-wrap">
            <h2 className="service-wrap-title"> I Nostri servizi :</h2>
            <div className="service-card"  name="installazione" >
                <div className="service-card-img-wrap">
                    <img src={ex1} className="service-card-img" name="installazione"  />
                    <div className="service-card-text" > 
                    <Link to="/installazione"><h2>Installazione</h2></Link>
                    <div className="service-card-extra">
                    <Link to="/installazione"><p>Sopralluogo gratuito</p></Link>
                    <Link to="/installazione"><p>Monosplit , multisplit o canalizzati</p></Link>
                    <Link to="/installazione"><p>Supporto per le pratiche di detrazione</p></Link>
                    </div>
                </div>
                </div>
             
            </div>

            <div className="service-card" name="manutenzione" >
                <div className="service-card-img-wrap"
                name="manutenzione"  >
                    <img src={ex2} className="service-card-img" name="manutenzione"   />
                    <div className="service-card-text" > 
                    <Link to="/manutenzione"><h2>Manutenzione</h2></Link>
                    <div className="service-card-extra">
                    <Link to="/manutenzione"><p>Tecnici specializzati a vostra disposizione</p></Link>
                    <Link to="/manutenzione"><p>Soluzioni specifiche per le vostre esigenze</p></Link>
                    <Link to="/manutenzione"><p>Supporto per le pratiche di detrazione</p></Link>
                    </div>
                </div>
                </div>
               
            </div>

             
     </div>
       

    )
}