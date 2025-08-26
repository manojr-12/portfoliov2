"use client";
import { timelineData } from "@/app/data/timelineData";
import { AsyncImage } from "loadable-image";
import Image from "next/image";
import { Blur } from "transitions-kit";

export default function TimelineSection() {
  return (
    <div className="pl-50 pb-50">
      <div className="intro pt-10">
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4="
          alt="icon"
          width={128}
          height={128}
        />
        <p>Timeline</p>
      </div>
      <div className="timeline pt-20">
        {timelineData.map((data, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-line"></div>
            <div className="timeline-circle">
              <div className="timeline-circle-item " />
              <p className="timeline-year">{data.date}</p>
              <div className="timeline-info-item flex flex-col gap-3">
                <AsyncImage
                  src={data.img_url}
                  alt=""
                  className=""
                  style={{ height: data.img_height, width: data.img_width }}
                  Transition={Blur}
                />
                <p className="line-clamp-4">{data.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
