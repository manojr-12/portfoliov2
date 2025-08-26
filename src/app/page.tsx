import FooterSection from "./components/section/footer";
import IntroSection from "./components/section/intro";
import BlogsSection from "./components/section/posts";
import ProjectsSection from "./components/section/projects";
import SkillSection from "./components/section/skills";
import TimelineSection from "./components/section/timeline";

export default function Home() {
  return (
    <div>
      <IntroSection />
      <SkillSection />
      <TimelineSection />
      <ProjectsSection />
      <BlogsSection />
      <FooterSection />
    </div>
  );
}
