import IntroSection from "./components/section/intro";
import SkillSection from "./components/section/skills";
import TimelineSection from "./components/section/timeline";

export default function Home() {
  return (
    <div>
      <IntroSection />
      <SkillSection/>
      <TimelineSection/>
    </div>
  );
  
}
