import React, { useState , useEffect } from "react";
import "./style/ContactUs.css"
import V from "./assets/V.png"
import house from "./assets/house.jpeg"



export const ContactUs = () =>{
 
    function confirmForm(){
        setCheck(!check)
        setVisible(!isVisible)
    }
    const[ wait , setWait ] = useState(5);
    const[ check , setCheck] = useState("no")
    const[ isVisible , setVisible ] = useState("no")
    const[ values , setValues] = useState({
        nome : "",
        cognome : "",
        email : "",
        telefono : "",
        paese : "",
        provincia : ""
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
        <div className="form-wrap-wrap">
        <div className="formWrap">
            <h2 data-check={check? "no": "ok"}>Per un sopralluogo gratuito contattaci o compila il form :</h2>
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
                <span className="imputspan">Cognome :</span>
               <input 
                name="cognome"
                placeholder="Cognome"
                id="cognomeImput"
                value={values.cognome}
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
                <div className="inputwrap">
                    <span className="imputspan">Provincia :</span>
                <input 
                name="provincia"
                placeholder="provincia"
                type="text"
                value={values.provincia}
                id="provinciaImput"
                className="form-inputs" 
                onChange={onChange}/>  
                </div>

                <button type="submit" id="subbtn"> Conferma</button>
            </form>
            <div className="confitm-div" data-visible = {isVisible? "no" : "yes"} style={{overflow : "hidden"}}>
                <img src={V} style={{
                    objectFit: "contain" ,
                    height: "50%" ,
                    width: "50%" }} />
               <div className="confirm-div-text">
                 <p>Richiesta effettuata con successo</p>
                <p> vi contatteremo appena possibile</p>
                <p>tornerai al form fra : {wait}</p></div>
                
            </div>
        </div>
        <div className="form-wrap-side">
          <img src={house} className="form-side-img" />
          <div className="form-side-text">
            <p className="form-side-p1">Contattaci per : </p>
            <p className="form-side-p2">Installazioni </p>
            <p className="form-side-p3">Manutenzioni </p>
            <p className="form-side-p4">Efficentamento energetico </p>
          </div>
         

        </div>
        </div>

    )
}