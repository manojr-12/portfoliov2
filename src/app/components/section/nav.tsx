import ThemeToggle from "../theme-toggle";

export default function NavSection() {
  return (
    <div className="pl-50 pt-20 nav-bar intro-plain nav-wrapper">
      <a className="nav-bar-items" href="#projects">
        Projects
      </a>
      <a className="nav-bar-items" href="#about">
        About
      </a>
      <a className="nav-bar-items" href="#resume">
        Resume
      </a>
      <a className="nav-bar-items" href="#blogs">
        Blogs
      </a>
      <ThemeToggle />
    </div>
  );
}
