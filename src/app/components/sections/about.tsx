import Image from "next/image";
import aboutMe1 from "../../assets/about_me_1.jpg";
import aboutMe2 from "../../assets/about_me_2.jpg";

export default function AboutSection() {
  return (
    <section className="about-main section-shell pb-50 pt-30" id="about">
      <div className="intro pt-10">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4="
          alt="icon"
          width={128}
          height={128}
        />
        <p>About Me</p>
      </div>

      <div className="about-layout mt-16">
        <div className="about-text">
          <p className="about-title">Manoj Ravichandran</p>
          <p className="about-copy">
            I am a design-minded developer who enjoys building clean interfaces
            and useful digital products. I care about details, motion, and
            experiences that feel simple for users.
          </p>
          <p className="about-copy">
            Outside coding, I stay active and grounded through workouts, travel,
            and spending time in nature. I bring that same discipline and calm
            focus into every project I build.
          </p>
        </div>

        <div className="about-gallery">
          <Image src={aboutMe1} alt="Manoj in gym" className="about-image" />
          <Image src={aboutMe2} alt="Manoj outdoors" className="about-image" />
        </div>
      </div>
    </section>
  );
}
