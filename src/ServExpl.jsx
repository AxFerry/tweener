import casa1 from "./assets/casa1.png"
import casa2 from "./assets/casa2.png"
import casa3 from "./assets/casa3.png"
import instal from "./assets/install.png"
import "./style/ServExpl.css"

export const ServExpl = () => {

 
    return(
        <div className="explain-wrap">
            <div className="expl-top">
                <div className="expl-top-img-wrap">
                <img src={instal} className="expl-top-img" />
                </div>
                <div className="expl-top-text">
                    <p>I nostri servizi comprendono l'installazione, la manutenzione e l'ottimizzazione di impianti di climatizzazione, pompe di calore, ventilazione assistita e riscaldamento a pavimento, tutti progettati per migliorare il comfort abitativo e garantire un'efficienza energetica elevata. Questi sistemi, oltre a riscaldare e raffreddare in modo preciso, riducono il consumo energetico e l’impatto ambientale. Offriamo soluzioni personalizzate che permettono di ottenere ambienti sani, confortevoli e sostenibili, con una notevole riduzione delle bollette e un miglioramento del benessere complessivo. La nostra esperienza garantisce interventi professionali e soluzioni innovative per ogni esigenza.</p>
                </div>
            </div>
            <div className="expl-card">
                <div className="expl-card-img-wrap"><img src={casa1} className="expl-card-img"/></div>
                <div className="expl-card-text">
                    <h2>Installazione</h2>
                    <p>L'installazione di climatizzatori e pompe di calore offre numerosi vantaggi per il comfort abitativo. Questi impianti non solo permettono di raffreddare in estate e riscaldare in inverno, ma migliorano anche l'efficienza energetica, riducendo i consumi rispetto ai sistemi tradizionali. Le pompe di calore, in particolare, utilizzano una tecnologia ecologica che sfrutta l'energia dall'aria esterna, contribuendo così alla sostenibilità e al risparmio a lungo termine. Un investimento che si ripaga rapidamente con il miglioramento del benessere indoor e la riduzione delle bollette energetiche.</p>
                </div>
            </div>

            <div className="expl-card">
            <div className="expl-card-img-wrap"><img src={casa2} className="expl-card-img"/></div>
                <div className="expl-card-text">
                    <h2>Manutenzione</h2>
                    <p>La manutenzione regolare di climatizzatori e pompe di calore è essenziale per garantirne l’efficienza e prolungarne la durata nel tempo. Affidarsi a professionisti qualificati è fondamentale, poiché un intervento esperto consente di ottimizzare il funzionamento dell’impianto, prevenire guasti e ridurre il consumo energetico. I tecnici specializzati eseguono controlli accurati, pulizia dei filtri e verifica dei componenti, assicurando un servizio affidabile e sicuro. Solo una manutenzione adeguata permette di mantenere le performance elevate e ridurre i costi di gestione.</p>
                </div>
            </div>

            <div className="expl-card">
            <div className="expl-card-img-wrap"><img src={casa3} className="expl-card-img"/></div>
                <div className="expl-card-text">
                    <h2>Efficentamento</h2>
                    <p>La ventilazione assistita e il riscaldamento a pavimento rappresentano soluzioni innovative per migliorare il comfort abitativo e l’efficienza energetica. La ventilazione meccanica controllata assicura un ricambio d'aria costante, mantenendo un ambiente salubre senza dispersione termica, mentre il riscaldamento a pavimento distribuisce il calore in modo uniforme, eliminando fastidiose correnti d'aria e riducendo i consumi energetici. Questi sistemi contribuiscono a un maggiore benessere, poiché mantengono temperature ottimali senza l'uso di impianti visibili, garantendo un ambiente confortevole, sano e a basso impatto ambientale.</p>
                </div>
            </div>
        </div>

    )
}