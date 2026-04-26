import Hero from '@/components/sections/Hero';

// Remaining sections imported as we build them:
import About        from '@/components/sections/About';
import Projects     from '@/components/sections/Projects';
import Skills       from '@/components/sections/Skills';
import CurrentFocus from '@/components/sections/CurrentFocus';
import Contact      from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />        
      <Projects />     
      <Skills />       
      <CurrentFocus /> 
      <Contact />      
    </>
  );
}