import b_beige1 from "./assets/b_beige1.jpg"
import b_beige2 from "./assets/b_beige3.jpg"
import b_bianco from "./assets/b_bianco.jpg"
import b_bianco1 from "./assets/b_bianco1.jpg"
import b_verde from "./assets/b_verde.jpg"
import b_verde1 from "./assets/b_verde1.jpg"
import b_verde3 from "./assets/b_verde3.jpg"
import b_grigio from "./assets/b_grigio.jpg"
import b_rosso from "./assets/b_rosso.jpg"
import "./style/Carousel.css"
const IMAGES = [ b_beige1 , b_beige2 , b_bianco , b_bianco1 ,b_grigio, b_rosso ,b_verde ,b_verde1, b_verde3]
import { useState } from "react"
import { ArrowBigLeft } from "lucide-react"
import { ArrowBigRight } from "lucide-react"

export function Carousel (){
    const[imageIndex , setImageIndex] = useState(0)
    function showNext (){
        setImageIndex(Index => {
            if(Index == 0) {return IMAGES.length -1}
            return Index -1
        })
    
    }
    function showPrev (){
        setImageIndex(Index => {
            if(Index == IMAGES.length -1) {return 0}
            return Index +1
        })
    
    }
    

    return(
    
        <div className="imgwrap">
            
            <img src={ IMAGES[imageIndex]} className="slider-image"/>
            <button onClick={showPrev} className="img-slider-btn" style={{left:0}}><ArrowBigLeft ></ArrowBigLeft></button>
            <button onClick={showNext} className="img-slider-btn"style={{right:0}}><ArrowBigRight ></ArrowBigRight></button>
        </div>
    )
}