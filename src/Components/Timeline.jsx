import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
const Timeline = () => {
  return (
    <VerticalTimeline>
     <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        style={{color:"gray"}}
        icon={<IoSchoolSharp />}
    >
        <h3 className="vertical-timeline-element-title">ENGINEERING STUDENT</h3>
        <h4 className="vertical-timeline-element-subtitle">GHANA, KUMASI</h4>
        <p>
        Computer Engineering, Software Engineering, Electronics
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(14 165 233)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="11/2023 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<MdOutlineWork />}
    >
        <h3 className="vertical-timeline-element-title">FORAGE INTERN ACCENTURE UK</h3>
        <h4 className="vertical-timeline-element-subtitle">REMOTE</h4>
        <p>
        Agile development methodologies, Waterfall methodologies, Scrum, Kanban, XP
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="12/2023 - 12/2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        style={{color:"gray"}}
        icon={<MdOutlineWork />}
    >
        <h3 className="vertical-timeline-element-title">FORAGE INTERN JP MORGAN</h3>
        <h4 className="vertical-timeline-element-subtitle">REMOTE</h4>
        <p>
        Data Structures and Algorithms, Object-Oriented Programming, Functional Programming
        </p>
    </VerticalTimelineElement>
</VerticalTimeline>

  );
};

export default Timeline;