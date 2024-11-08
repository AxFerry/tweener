import daikin from "./assets/daikin.png"
import mitsu from "./assets/mitsubishi.png"
import samsung from "./assets/samsung.png"
import arist from "./assets/Ariston.png"
import logo from "./assets/logo.png"
import "./style/Footer.css"




export const Footer = () =>{

    return(
        <div className="foot-wrap">
            <div className="foot-body">
            <div className="foot-info">
                <div className="foot-info-logo">
                    <img src={logo} className="foot-info-logo-img"/>
                </div>
                <div className="foot-info-body">
                    <p> Email : </p>
                    <p> Telefono : </p>
                    <p> N° partita iva  : </p>
                </div>

                
            </div>
            <div className="foot-collabs">
                
                <div className="foot-collab-card">
                    <img src={mitsu} className="foot-collab-img" />
                </div>
              
                <div className="foot-collab-card">
                <img src={samsung} className="foot-collab-img" />
                </div>
             
                <div className="foot-collab-card">
                <img src={arist} className="foot-collab-img" />
                </div>
                
                <div className="foot-collab-card">
                <img src={daikin} className="foot-collab-img" />
                </div>
            </div>
            </div>
            <div className="foot-close">
                
            </div>
        </div>
    )
}