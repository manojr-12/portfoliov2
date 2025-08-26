import c_plus_plus from "../../assets/c_plus_plus.png";
import Image from "next/image";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { SiTypescript, SiChakraui, SiRabbitmq } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import {
  FaDartLang,
  FaPython,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaFlutter,
  FaGitAlt,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb, DiRedis } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";

export default function SkillSection() {
  return (
    <div className="skill-main pl-50 pt-50 pb-50">
      <div className="intro pt-100 ">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4="
          alt="icon"
          width={128}
          height={128}
        />
        <p>My Stack</p>
      </div>
      <div className="skill-grp mt-20 ml-30">
        <div className="skill-item p-10">
          <p className="skill-sub-heading">Technologies</p>
          <div className="skill-item-list pl-5">
            <IoLogoJavascript className="text-black" />
            <p className="pl-2">Javascript</p>
          </div>
          <div className="skill-item-list pl-5">
            <SiTypescript className="text-black" />
            <p className="pl-2">Typescript</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaDartLang className="text-black" />
            <p className="pl-2">Dart</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaPython className="text-black" />
            <p className="pl-2">Python</p>
          </div>
          <div className="skill-item-list pl-5">
            <Image className="h-6 w-6" src={c_plus_plus} alt="Logo" />
            <p className="pl-2">C++</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaHtml5 className="text-black" />
            <p className="pl-2">Html5</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaCss3 className="text-black" />
            <p className="pl-2">Css3</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaNodeJs className="text-black" />
            <p className="pl-2">NodeJs</p>
          </div>
        </div>
        <div className="skill-item p-10">
          <p className="skill-sub-heading">Libraries/Frameworks</p>
          <div className="skill-item-list pl-5">
            <FaReact className="text-black" />
            <p className="pl-2">React</p>
          </div>
          <div className="skill-item-list pl-5">
            <RiNextjsFill className="text-black" />
            <p className="pl-2">NextJs</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaAngular className="text-black" />
            <p className="pl-2">Angular</p>
          </div>
          <div className="skill-item-list pl-5">
            <RiTailwindCssFill className="text-black" />
            <p className="pl-2">TailwindCss</p>
          </div>
          <div className="skill-item-list pl-5">
            <SiChakraui className="text-black" />
            <p className="pl-2">Chakraui</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaFlutter className="text-black" />
            <p className="pl-2">Flutter</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaReact className="text-black" />
            <p className="pl-2">React Native</p>
          </div>
        </div>
        <div className="skill-item p-10">
          <p className="skill-sub-heading">Database/Tools</p>
          <div className="skill-item-list pl-5">
            <DiMongodb className="text-black" />
            <p className="pl-2">MongoDB</p>
          </div>
          <div className="skill-item-list pl-5">
            <TbFileTypeSql className="text-black" />
            <p className="pl-2">Sql</p>
          </div>
          <div className="skill-item-list pl-5">
            <DiRedis className="text-black" />
            <p className="pl-2">Redis</p>
          </div>
          <div className="skill-item-list pl-5">
            <FaGitAlt className="text-black" />
            <p className="pl-2">Git</p>
          </div>
          <div className="skill-item-list pl-5">
            <IoLogoVercel className="text-black" />
            <p className="pl-2">Vercel</p>
          </div>
          <div className="skill-item-list pl-5">
            <TbApi className="text-black" />
            <p className="pl-2">REST</p>
          </div>
          <div className="skill-item-list pl-5">
            <SiRabbitmq className="text-black" />
            <p className="pl-2">Rabbitmq</p>
          </div>
        </div>
      </div>
    </div>
  );
}
