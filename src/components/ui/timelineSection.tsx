import Timeline from "./timeline";
import "../../App.css"


export default function TimeLineSection(){

return(

<section id="timeline" className="myTimeline" style= {{flexDirection: "column"}}>
          <div id="FeaturedPortfolio" style={{top: 0, fontSize: "45px", color: "var(--myDarkGreen)", display: "flex", justifyContent: "center",marginTop: "30px", alignItems: "center" }}> My Timeline</div>
          <hr style={{color: "var(--myBrown)", backgroundColor:"var(--myBrown)", borderColor: "var(--myBrown)", height: "2px", marginBottom: "20px", width: "80%", margin: "0 auto 20px auto", display: "flex" }}></hr>
            <section className= "small" style={{ display: "flex", width: "94vw", height: "80vh", justifyContent: "center", alignItems: "flex-start", flexDirection: "row", gap: "20px", marginTop: "20px"}}>
              
              <Timeline></Timeline>
            </section>
        </section>


);

}