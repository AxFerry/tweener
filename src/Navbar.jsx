import { FileText } from "lucide-react"
import logo from "./assets/log.png"
import "./style/Navbar.css"
export const Navbar = ({handleChange , isChecked}) =>{

    
  
    return(
        <nav className="navbar">
            <div className="logowrap">
                <img src={logo} className="logoimg" />
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/works">Gallery</a>
                <a href="/service">Contact</a>
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
