import Timeline from "./timeline";
import "../../App.css"


export default function TimeLineSection(){

return(

<section id="timeline" className="myTimeline" style= {{flexDirection: "column"}}>
          <div id="FeaturedPortfolio" style={{top: 0, fontSize: "4vw", color: "var(--myDarkGreen)", display: "flex", justifyContent: "center",marginTop: "2vw", alignItems: "center" }}> My Timeline</div>
          <hr style={{color: "var(--myBrown)", backgroundColor:"var(--myBrown)", borderColor: "var(--myBrown)", height: ".1vw", marginBottom: "1vw", width: "80%", margin: "0 auto 1vw auto", display: "flex" }}></hr>
            <section className= "small" style={{ display: "flex", width: "94vw", height: "80vh", justifyContent: "center", alignItems: "flex-start", flexDirection: "row", gap: "1vw", marginTop: "1.2vw"}}>
              
              <Timeline></Timeline>
            </section>
        </section>


);

}