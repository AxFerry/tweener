import { FileText } from "lucide-react"
import logo from "./assets/log.png"
import "./style/Navbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
export const Navbar = ({handleChange , isChecked}) =>{
    const [showMenu , setShowMenu]= useState(false)
    function showMenuBar(){
        setShowMenu(!showMenu);

    }
    
  
  
    return(
        <nav className="navbar">
            <div className="logowrap">
                <img src={logo} className="logoimg" onClick={showMenuBar}/>
            </div>
            <div className="links" data-menu={showMenu? true : false}>
                <Link to='/'>Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/service">Servizi</Link>
                <Link to="/contact">Contattaci</Link>
                
            </div>
            
           <div className="wrapswitch">
            <input type="checkbox" 
                id="check"
                className="switch"
                onChange={handleChange}
                checked={isChecked}/>

                <label htmlFor="check"></label>
            </div>
            
            
        </nav>
    )
}
