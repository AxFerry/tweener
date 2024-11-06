import sfondo from "./assets/sfondo.jpg"
import logo from "./assets/log.png"
import "./style/Topbar.css"

export function TopBar(){


    return(
        <div className="top-wrap">
            <img  src={sfondo} id="topImage" />
            <div className="top-logo-wrap"><img src={logo} className="top-logo-image"/></div>
            <div className="top-title" >Tweener</div>
            <div className="top-slogan">La soluzione migliore per le vostre esigenze</div>


        </div>
    )
    

}