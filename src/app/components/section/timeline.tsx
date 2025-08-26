import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ssn from "../../assests/ssn.png";
import sms from "../../assests/sms.png";
import google from "../../assests/google.png";
import gallabox from "../../assests/gallabox.png";
import Image from "next/image";
import Samsung from "../../assests/samsung.png";


export default function TimelineSection() {
  return (
    <div className="pl-50 pb-50">
      <div className="intro pt-50 ">
        <p>Timeline</p>
      </div>
      <div className="timeline pt-20">
        <div className="timeline-item">
          <div className="timeline-line"></div>
          <div className="timeline-circle">
            <div className="timeline-circle-item " />
            <p className="timeline-year">April 2019</p>
            <div className="timeline-info-item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-line"></div>
          <div className="timeline-circle ml-3 mr-3">
            <div className="timeline-circle-item " />
            <p className="timeline-year">April 2019</p>
            <div className="timeline-info-item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-line"></div>
          <div className="timeline-circle ml-3 mr-3">
            <div className="timeline-circle-item " />
            <p className="timeline-year">April 2019</p>
            <div className="timeline-info-item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-line"></div>
          <div className="timeline-circle ml-3 mr-3">
            <div className="timeline-circle-item " />
            <p className="timeline-year">April 2019</p>
            <div className="timeline-info-item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-line"></div>
          <div className="timeline-circle ml-3 mr-3">
            <div className="timeline-circle-item " />
            <p className="timeline-year">April 2019</p>
            <div className="timeline-info-item">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

