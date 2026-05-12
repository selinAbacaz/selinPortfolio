import './Header.css'
import example from "../images/resumeWebsite.pdf"
import { useState } from "react";


const linkStyle: React.CSSProperties = {
  display: "block",
  padding: "10px 16px",
  textDecoration: "none",
  
};

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
  
  <nav
  style={{
  position: 'fixed',
  top: '1vw',
  left: '50%',
  maxHeight: "5vw",
  minWidth: "max-content",
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(92, 52, 13, 0.85)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  color: 'AntiqueWhite',
  padding: '0.5rem 1.5rem',
  borderRadius: '60px',
  display: 'flex',
  justifyContent: "space-between",
  alignItems: 'center',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  zIndex: 9999
}}
>
  <a className= "button active"
    style={{
      
    
      fontSize: "1.6vw",
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
      color: "var(--myYellow)"
      
    }}
    href= {example} download= "SelinBacazResume"
    
  >
    Download my Resume
  </a>

  

  
  <a 
    className= "button"
    
    href="#aboutMe"
    style={{
        color: 'white',
        fontSize: "1.6vw",
        fontFamily: 'Inter',
        fontWeight: '400',
        textDecoration: 'none',
        
      }}>About Me</a>
  <a 

  className= "button"
  
  href="#FeaturedPortfolio"
  style={{
      color: 'white',
      fontSize: "1.6vw",
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
      
    }}>Projects</a>

  <div style={{ position: "relative", display: "inline-block" }}>
      
      <div
        className="button"
        onClick={() => setOpen(!open)}
        style={{
          color: "white",
          fontSize: "1.6vw",
          fontFamily: "Inter",
          fontWeight: "400",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        Find Me
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "120%",
            left: 0,
            backgroundColor: "var(--myDirtyAntique)",
            color: "var(--myBrown)",
            borderRadius: "12px",
            padding: "1vw 0",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            minWidth: "10vw",
            zIndex: 10,
          }}
        >
          <a
            href="https://github.com/selinAbacaz"
            target="_blank"
            style={linkStyle}
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/selin-bacaz"
            target="_blank"
            style={linkStyle}
          >
            LinkedIn
          </a>

          <a
            href="https://devpost.com/SelinBacaz?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            target="_blank"
            style={linkStyle}
          >
            DevPost
          </a>
          <a 
            
            href="#contactMe"
            style={linkStyle}
            >Contact Me</a>
        </div>
      )}
    </div>


</nav>
  )
}
