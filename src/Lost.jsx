import { Link } from "react-router-dom"
export const Lost = () =>{

    return(
        <div className="lost-wrap">
            <img src="" alt="" />
            <div className="lost text"> Pagina non trovata </div>
            <Link to='/'>Home</Link>
            <Link to='/service'> Servizi</Link>
        </div>
    )
}