import logo from "./assests/logo.png";
import email from "../../assests/telegram_1.png";
import git from "../../assests/github_1.png";
import linkedin from "../../assests/linkedin_1.png";
import whatsapp from "../../assests/whatsapp_1.png";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

export default function IntroSection() {
  return (
    <div className="intro-main">
      <div className="pl-50 pt-20 nav-bar intro-plain">
        <div className="nav-bar-items">Projects</div>
        <div className="nav-bar-items">About</div>
        <div className="nav-bar-items">Resume</div>
        <div className="nav-bar-items">Blogs</div>
      </div>
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
