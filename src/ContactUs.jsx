import { useState } from "react";
import "./style/ContactUs.css"
import V from "./assets/V.png"



export const ContactUs = () =>{
 
    function confirmForm(){
        setCheck(!check)
        setVisible(!isVisible)
    }
    const[ check , setCheck] = useState("no")
    const[ isVisible , setVisible ] = useState("no")
    const[ values , setValues] = useState({
        nome : "",
        email : "",
        telefono : "",
        paese : ""
    })
 
    const onChange = (e) =>{        
        setValues({...values,[e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        let checks = 0;
      if(values.nome == "" ){  
        alert("please enter a name")
      }else checks++
      if(values.email == "" && values.telefono.length !== 10 ){
        alert("please enter a valid number")
      } else checks++
      if(values.paese == "" ){
        alert("please enter a city")
      }else checks++
      if(checks == 3){
        console.log(values)

        confirmForm()
   
        
      }
        
    }

    return (
        
        <div className="formWrap">
            <h2 data-check={check? "no": "ok"}>Richiedi un sopralluogo gratuito :</h2>
            <form data-check={check? "no": "ok"} onSubmit={handleSubmit}>
                     
              <div className="inputwrap">
                <span className="imputspan">Nome :</span>
               <input 
                name="nome"
                placeholder="Nome"
                id="nomeImput"
                value={values.name}
                type="text"
                className="form-inputs" 
                onChange={onChange}/>
               </div>

               <div className="inputwrap">
                <span className="imputspan"> Email :</span>
                <input 
                name="email"
                placeholder="e-mail"
                type="text"
                value={values.email}
                id="emailImput"
                className="form-inputs" 
                onChange={onChange}/>
                </div>

                <div className="inputwrap">
                    <span className="imputspan">Telefono :</span>
                <input 
                name="telefono"
                value={values.phone}
                placeholder="telefono"
                type="text"
                id="telefonoImput"
                className="form-inputs"
                onChange={onChange} />
                </div>

                <div className="inputwrap">
                    <span className="imputspan">Paese :</span>
                <input 
                name="paese"
                placeholder="paese"
                type="text"
                value={values.data}
                id="paeseImput"
                className="form-inputs" 
                onChange={onChange}/>  
                </div>

                <button type="submit" id="subbtn"> Conferma</button>
            </form>
            <div className="confitm-div" data-visible = {isVisible? "no" : "yes"} style={{overflow : "hidden"}}>
                <img src={V} style={{
                    objectFit: "contain" ,
                    height: "100%" ,
                    width: "100%" }}/>
               <div className="confirm-div-text">
                 <p>Richiesta effettuata con successo</p>
                <p> vi contatteremo appena possibile</p></div>
            </div>
        </div>

    )
}