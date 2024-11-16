import sfondo from "./assets/sfondo.png"
import logo from "./assets/log.png"
import "./style/Topbar.css"

export function TopBar(){


    return(
        <div className="top-wrap">
            <img  src={sfondo} id="topImage" className="top-wrap-img"/>
            <div className="top-logo-wrap"><img src={logo} className="top-logo-image"/></div>
            <div className="top-slogan">La soluzione migliore per le vostre esigenze</div>


        </div>
    )
    

}