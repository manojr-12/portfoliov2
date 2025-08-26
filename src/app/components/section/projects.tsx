"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxFill } from "react-icons/ri";
import bookmyspot from "../../assets/bookmyspot.png";
import link_p from "../../assets/link_p.png";
import nevernote from "../../assets/nevernote.png";
import xpense from "../../assets/xpense.png";
import xpense_1 from "../../assets/xpense_1.png";
import xpense_2 from "../../assets/xpense_2.png";
import { projectsData } from "@/app/data/projectsData";
import { AsyncImage } from "loadable-image";
import { Blur } from "transitions-kit";

export default function ProjectsSection() {
  return (
    <div className="pl-50 pb-50">
      <div className="intro pt-10">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4="
          alt="icon"
          width={128}
          height={128}
        />
        <p>Projects</p>
      </div>
      <div className="project-grp pt-20 pl-30">
        {projectsData.map((data, index) => (
          <div
            className="project-item mb-20 flex flex-row justify-between gap-12"
            key={index}
          >
            <div className="project-item-info">
              <p className="project-item-title">{data.title}</p>
              <p className="project-item-desp">{data.desp}</p>
              <div className="project-stack">
                {data.stack?.map((item, sindex) => (
                  <p className="project-stack-item" key={sindex}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="project-links mb-10 flex flex-row justify-center items-center">
                <FaGithub
                  className="project-link-g h-6 w-6 mr-5 cursor-pointer"
                  onClick={() => {}}
                />
                <RiShareBoxFill
                  className="project-link-l h-6 w-6 cursor-pointer"
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className="flex flex-row">
              {data.img_data?.map((imgData, img_index) => (
                <AsyncImage
                  key={img_index}
                  src={imgData.img_url}
                  alt="ddd"
                  className=""
                  style={{
                    height: imgData.img_height,
                    width: imgData.img_width,
                  }}
                  Transition={Blur}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
