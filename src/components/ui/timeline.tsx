type TimelineItem = {
  year: string;
  color: string;
  items: string[];
};

const timelineData: TimelineItem[] = [
  { year: "2026", color: "#E89A9A", items: ["Working as research assistant at Sensify Labs, creating a dashboard for professors to identify struggling students", "Continued working as illustrator at The Review until graduation", "Participated in Henhacks and created OneMansTrash", "Awarded Computer & Information Sciences Undergraduate Honorable Mention Student"] },
  { year: "2025", color: "#E87A3C", items: ["Summer Fellows researching how LLMS can be used to give feedback on student assignments", "Created Goldfish Brain and GardenPlotPlanner", "Continued work on Dyslexease as Senior Project", "Participated in Henhacks and created HealthSync"] },
  { year: "2024", color: "#B7C400", items: ["Became a TA for CISC275, Introduction to Software Engineering", "Started my illustration internship with The Review","Won second place at Henhacks for best accessibility Hack with Dyslexease","Added an interactive media minor", "Created Career Chef"  ] },
  { year: "2022", color: "#F2A623", items: ["Started going to University of Delaware as a Computer Science BA","Then changed my Major to a Computer Science BS","Added a game design minor","Participated in Henhacks and created UDiversity"] },
];

export default function Timeline() {
  return (
    <div style={{marginLeft:"5vw",}}>
      
      {/* TOP DOT */}
      <div style={{ display: "flex", marginLeft: "5vw" }}>
        <div
          style={{
            width: "120px",
            borderRight: "3px solid #6B4F3A",
            display: "flex",
            
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--myBrown)",
              transform: "translateX(50%)",
            }}
          />
        </div>
      </div>

      {/* ROWS */}
      {timelineData.map((entry, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            minHeight: "32vh",
            marginLeft: "5vw",
          }}
        >
          {/* LEFT SIDE (line + year + ONE dot) */}
          <div
  style={{
    width: "120px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRight: "3px solid #6B4F3A",
    paddingRight: "10px",
    position: "relative", 
  }}
>
  
  <div
    style={{
      position: "absolute",
      top: "50%",                 
      transform: "translateY(-50%)",
      right: "60px",             
      fontSize: "28px",
      color: "var(--myBrown)",
    }}
  >
    {entry.year}
  </div>

  {/* DOT */}
  <div
    style={{
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      backgroundColor: entry.color,
      transform: "translateX(80%)",
    }}
  />
</div>

          {/* RIGHT SIDE */}
          <div
            style={{
              marginLeft: "80px",
              backgroundColor: "#C6C47A",
              borderRadius: "25px",
              padding: "20px",
              width: "70%",
              display: "flex",
              alignItems: "center",
              height: "30vh",
              marginTop:"3vh",
            }}
          >
            <ul style={{ margin: 0, fontSize: "20px", color: "var(--myBrown)", listStyleType:"disc", marginLeft:"5vw" }}>
              {entry.items.map((text, i) => (
                <li key={i} style={{marginBottom: "2vh",}}>{text}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* BOTTOM DOT */}
      <div style={{ display: "flex", marginLeft: "5vw" }}>
        <div
          style={{
            width: "120px",
            borderRight: "3px solid #6B4F3A",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "var(--myBrown)",
              transform: "translateX(50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}