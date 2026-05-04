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
        <Curtain />
        <section className="hero" style={{backgroundColor: "#EFD578"}}>
          <div className="photoPlaceholder">
            <img src={myPicture} alt='A picture of the author (Selin B) in a field' />
          </div>

          <div className="heroText">
            <h1 className="heading">
              Hello ! <span className="sparkle">✦</span>
            </h1>
            <p className="subheader">
              Im passionate about crafting clean, creative, and functional user interfaces that feel as good as they look !
            </p>
          </div>
          
        </section>
      </section>



);


}