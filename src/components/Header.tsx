import './Header.css'
import example from "../images/resumeWebsite.pdf"


export default function Header() {
  return (
  
  <nav
  style={{
  position: 'fixed',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(92, 52, 13, 0.85)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  color: 'AntiqueWhite',
  padding: '0.5rem 1.5rem',
  borderRadius: '60px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '25px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  zIndex: 9999
}}
>
  <a className= "button active"
    style={{
      
    
      fontSize: 22,
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
  
  href="#FeaturedPortfolio"
  style={{
      color: 'white',
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
      
    }}>Projects</a>

  <div
  className= "button"
    
    style={{
      color: 'white',
      fontSize: 22,
      fontFamily: 'Inter',
      fontWeight: '400',
      textDecoration: 'none',
    }}
  >
    Find Me
  </div>


</nav>
  )
}
