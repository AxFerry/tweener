import fb from "./assets/facebook_icon.png"
import wa from "./assets/whatsapp_icon.png"
import mu from "./assets/email_icon.png"
import ig from "./assets/instagram_icon.png"
import "./style/ContactBar.css"


export const ContactBar = () =>{

    return(
        <div className="contact-bar-wrap">
            <div className="contact-bar-card" >
                <a href=""><img src={fb} className="contact-bar-img"/></a>

            </div>
            <div className="contact-bar-card" >
                <a href=""><img src={ig} className="contact-bar-img"/></a>

            </div>
            <div className="contact-bar-card" >
                <a href="https://wa.me/3407677470"><img src={wa} className="contact-bar-img"/></a>

            </div>
            <div className="contact-bar-card" >
                <a href="mailto:gigimail123@gmail.com"><img src={mu} className="contact-bar-img"/></a>

            </div>
        </div>



    )}