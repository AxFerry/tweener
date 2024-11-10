import { Link } from "react-router-dom"
export const Lost = () =>{


        const [isDark, setTheme] = useState(JSON.parse(localStorage.getItem("isDark") || false));
  
        useEffect(()=>{
          localStorage.setItem("isDark", JSON.stringify(isDark));
        },[isDark])
      
        return (
            <div data-theme={ isDark? "dark" : "light"}>
                <div className="lost-wrap">
               <img src="" alt="" />
               <div className="lost text"> Pagina non trovata </div>
               <p><Link to='/'>Home</Link></p>
               <p><Link to='/service'> Servizi</Link></p>
               <p><Link to='/gallery'> Foto</Link></p>
               
           </div>
        </div>
        )
    
}