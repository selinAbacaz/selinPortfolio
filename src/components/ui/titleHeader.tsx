import Header from "../Header";
import { CloudColumns } from "./clouds";
import Curtain from "./Curtain";
import myPicture from '../../images/MeField.jpg'
import "../../App.css"


export default function TitleHeader(){

return(

<section style={{width: "100%", height:"100%"}}>
        <Header />
        <CloudColumns />
        <div style={{ pointerEvents: "none" }}>
          <Curtain />
        </div>
        <section className="hero" style={{backgroundColor: "#EFD578"}}>
          <div className="photoPlaceholder">
            <img className="
    bg-(--myDarkGreen)/39
    shadow-md
    transition-transform duration-200
    hover:-translate-y-1
    hover:shadow-xl
    hover:shadow-[#5c350d5d]
    
  " src={myPicture} alt='A picture of the author (Selin B) in a field' />
          </div>

          <div className="heroText">
            <h1 className="heading">
              Hello ! <span className="sparkle">✦</span>
            </h1>
            <p className="subheading" style={{color: "var(--myYellow)", fontWeight: "100"}}>
              My name is Selin Bacaz,            
            </p>
            <p className="subheader">
              Im passionate about crafting clean, creative, and functional user interfaces that feel as good as they look !
            </p>
          </div>
          
        </section>
      </section>



);


}