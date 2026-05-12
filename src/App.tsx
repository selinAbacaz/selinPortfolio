

import './App.css'
import '@glidejs/glide/dist/css/glide.core.min.css';
declare module "@glidejs/glide";
import SlideSection from './components/ui/slideSection'
import TitleHeader from './components/ui/titleHeader'
import AboutMeSection from './components/ui/aboutMeSection';
import TimeLineSection from './components/ui/timelineSection';
import ContactMeSection from './components/ui/contactMeSection';




function App() {




  
  return (
    <div className="bg-(--myDirtyAntique) relative" style={{width: "100vw", overflowX:"hidden"}}>

      <TitleHeader></TitleHeader>
      <AboutMeSection></AboutMeSection>
      <SlideSection></SlideSection>
      <TimeLineSection></TimeLineSection>
      <ContactMeSection></ContactMeSection>
    
    </div>
  )
}

export default App;
