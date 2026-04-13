import AboutSection from "./components/sections/about";
import FooterSection from "./components/sections/footer";
import IntroSection from "./components/sections/intro";
import BlogsSection from "./components/sections/posts";
import ProjectsSection from "./components/sections/projects";
import SkillSection from "./components/sections/skills";
import TimelineSection from "./components/sections/timeline";

export default function Home() {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <SkillSection />
      <TimelineSection />
      <ProjectsSection />
      <BlogsSection />
      <FooterSection />
    </div>
  );
}
