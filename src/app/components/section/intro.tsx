import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import NavSection from "./nav";

export default function IntroSection() {
  return (
    <div className="intro-main">
      <NavSection />
      <div className="intro pl-50 pt-30">
        <p className="intro-plain">Hello! 👋🏼</p>
        <p>I'm Manoj R.</p>
        <p>A design-minded developer.</p>
        <p className="intro-plain pt-5"> Strike. Scream. Run.</p>
      </div>
      <div className="contact pt-20 pl-50">
        <FaGithub className="text-black contact-items w-32 h-32" />
        <FaLinkedin className="text-black contact-items w-32 h-32" />
        <FaWhatsapp className="text-black contact-items w-32 h-32" />
        <FaTelegramPlane className="text-black contact-items w-32 h-32" />
      </div>
    </div>
  );
}
