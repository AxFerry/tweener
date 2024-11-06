import { useState } from "react"
import ex1 from "./assets/esagono1.png"
import ex2 from "./assets/esagono2.png"
import ex3 from "./assets/esagono3.png"
import "./style/Services.css"

export const Services = () => {

 
    return(
        <div className="service-wrap">
            <h2 className="service-wrap-title"> I Nostri servizi :</h2>
            <div className="service-card"  name="installazione" >
                <div className="service-card-img-wrap">
                    <img src={ex1} className="service-card-img" name="installazione"  />
                    <div className="service-card-text" > 
                    <h2>Installazione</h2>
                    <div className="service-card-extra">
                        <p>Sopralluogo gratuito</p>
                        <p>Split singoli , multi o canalizzati</p>
                        <p>Supporto per le pratiche di detrazione</p>
                    </div>
                </div>
                </div>
             
            </div>

            <div className="service-card" name="manutenzione" >
                <div className="service-card-img-wrap"
                name="manutenzione"  >
                    <img src={ex2} className="service-card-img" name="manutenzione"   />
                    <div className="service-card-text" > 
                    <h2>Manutenzione</h2>
                    <div className="service-card-extra">
                        <p>Sopralluogo gratuito</p>
                        <p>Soluzioni specifiche per le vostre esigenze</p>
                        <p>Supporto per le pratiche di detrazione</p>
                    </div>
                </div>
                </div>
               
            </div>

            <div className="service-card" name="sostituzione"  >
                <div className="service-card-img-wrap">
                    <img src={ex3} className="service-card-img" name="sostituzione"  />
                    <div className="service-card-text" > 
                    <h2>Sostituzione</h2>
                    <div className="service-card-extra">
                        <p>Sopralluogo gratuito</p>
                        <p>Split singoli , multi o canalizzati</p>
                        <p>Supporto per le pratiche di detrazione</p>
                    </div>
                </div>
             
                </div>
            </div>
        </div>

    )
}