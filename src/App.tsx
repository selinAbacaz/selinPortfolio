

import './App.css'
import '@glidejs/glide/dist/css/glide.core.min.css';
declare module "@glidejs/glide";
import Footer from './components/Footer'
import {BottomClouds} from "../src/components/ui/bottomClouds"
import ContactForm from './components/ui/ContactForm'
import SlideSection from './components/ui/slideSection'
import TitleHeader from './components/ui/titleHeader'
import AboutMeSection from './components/ui/aboutMeSection';
import TimeLineSection from './components/ui/timelineSection';
import ContactMeSection from './components/ui/contactMeSection';




function App() {




  
  return (
    <div className="min-h-screen bg-(--myDirtyAntique) relative max-w-screen ">

      <TitleHeader></TitleHeader>
      <AboutMeSection></AboutMeSection>
      <SlideSection></SlideSection>
      <TimeLineSection></TimeLineSection>
      <ContactMeSection></ContactMeSection>
    
    </div>
  )
}

export default App;
