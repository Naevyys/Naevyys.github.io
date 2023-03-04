import BSP1Report from "../reports/BSP1Report.pdf";
import BSP2Report from "../reports/BSP2Report.pdf";
import BSP3Report from "../reports/BSP3Report.pdf";
import BSP5Report from "../reports/BSP5Report.pdf";
import BSP6Report from "../reports/BSP6Report.pdf";

export const projectData = [
    {
        id: 6,
        title: "Learning Multimodal Information: Definition and Experimentation",
        sem: "Summer semester 2020/2021",
        tutor: "Prof. Dr. Nicolas Guelfi",
        description: "Modern AI systems become increasingly powerful tools, but there remain many tasks that humans perform much better. We suppose that the multimodal perception and interpretation of the world through our five senses significantly contributes to this superior performance of humans. Involving multiple modalities in the decision making process of an AI system would therefore have the potential of improving the accuracy of its predictions, and the research field of multimodal machine learning is focussing on this problem. This semester project aims to introduce the student to this research field.",
        tech: "Python, Tensorflow",
        video: "https://www.youtube.com/embed/4fZNTp0F2Po",
        report: BSP6Report,
    },
    {
        id: 5,
        title: "SmartSparks - A Crowdsourcing App for Organisations",
        sem: "Winter semester 2020/2021",
        tutor: "Prof. Dr. Steffen Rothkugel",
        description: "Crowdsourcing is a powerful and sometimes underestimated technique to gather data from the crowd. It can be used for instance in scientific research to gather necessary scientific data through or from the entire population, or within companies or groups of people to gather new ideas more efficiently. However, in the latter case, involving a large group of people in the common process of innovation is difficult for reasons such as lack of communication means between people and a large amount of ideas out of which the bests need to be selected. The aim of this project is to create a prototypical app which will help companies to perform crowdsourcing among their employees and eventually also their customers.",
        tech: "Flutter, Dart, Firebase",
        video: "https://www.youtube.com/embed/pR3tlKc97r0",
        report: BSP5Report,
    },
    {
        id: 3,
        title: "Explore Explainable AI with QT",
        sem: "Winter semester 2019/2020",
        tutor: "Amro Najjar (and Diego Agustin Ambrossio)",
        description: "Artificial intelligence is a wide and complex field of computer science, closely related to robotics. During this project, the student will program the university robot QT to play music according to the facial expression of the human in front of her, i.e. if the human looks sad, QT will play sad music, and if the human looks happy, the music should be happy too. Through this practice, the student will explore and work on the domains of Human-Robot Interaction and Explainable AI, which will allow her to describe and explain the QT’s behaviour with the human.",
        tech: "Python, ROS, OpenCV, QTrobot",
        video: "https://www.youtube.com/embed/pmO_8V1fKBk",
        report: BSP3Report,
    },
    {
        id: 2,
        title: "ObDrop - A Mobile Application using Augmented Reality",
        sem: "Summer semester 2018/2019",
        tutor: "Dr. Jean Botev",
        description: "Sharing georeferenced information between users is common to many mobile applications and services; far less common is the location-based sharing of virtual objects. In this project, the student will develop a prototypical, AR-based mobile application that enables users to interactively augment the real world with such objects, which are then shared with and visible to the other users.",
        tech: "Swift, ARKit, SQLite",
        video: "https://www.youtube.com/embed/fvfc3bBx0mA",
        report: BSP2Report,
    },
    {
        id: 1,
        title: "A Web-based Editing Interface for Georeferenced Data",
        sem: "Winter semester 2018/2019",
        tutor: "Dr. Jean Botev",
        description: "Georeferenced data is underlying many of the most exciting computer systems and services today. In this project, the student will explore how such data can be created and managed, using the latest APIs and standards for creating interactive, web-based applications such as HTML5. Aside from a taxonomy of the available technologies and platforms, the project shall result in a prototypical design and implementation for such a management interface.",
        tech: "HTML, CSS, JavaScript, Google Maps API",
        video: "https://www.youtube.com/embed/jrHapJGE4qg",
        report: BSP1Report,
    },
]