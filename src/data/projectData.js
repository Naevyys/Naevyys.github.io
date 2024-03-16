import masterthesisimg from "../images/project_images/master_thesis.png"
import semesterprojectmathis from "../images/project_images/semester_project_mathis.png"
import courseprojectml from "../images/project_images/course_project_ml.png"

import BSP1Report from "../reports/BSP1Report.pdf";
import BSP2Report from "../reports/BSP2Report.pdf";
import BSP3Report from "../reports/BSP3Report.pdf";
import BSP5Report from "../reports/BSP5Report.pdf";
import BSP6Report from "../reports/BSP6Report.pdf";

export const MasterProjectData = [
    {
        title: "Towards Better Understanding of Positional Bias in Transformer-based Language Models",
        subtitle: "Master's Thesis",
        place: "ALFA group, Computer Science and Artificial Intelligence Laboratory, MIT",
        supervisor:  "Dr. Erik Hemberg, Dr. Léo Laugier, Prof. Karl Aberer",
        summary: "Characterization of positional bias in transformer-based Large Language Models (LLMs), and development of a mitigation technique against it at the LLM design level. Worked with a retrieval-augmented generation task where the order in which two contexts are provided to the LLM should be irrelevant. The proposed technique was benchmarked on GPT-2 small and LLaMA 2 7B to quantify the amount of positional bias mitigated. Using mechanistic interpretability approaches on internal activations of GPT-2 small, internal mechanisms and components affected by the mitigation technique were reverse-engineered. Some of these components were identified to be involved in positional bias, providing transparency on its origins through component activations.",
        tech: "Transformer-based Large Language Models, Mechanistic Interpretability, Python, Pytorch, TransformerLens",
        src: masterthesisimg,
        alt: "Mechanisms identified to be involved in positional bias.",
        legend: "Attention heads were probed using a mechanistic interpretability approach and attention heads that strongly change behavior with vs. without the mitigation technique against positional bias were identified. These heads and their effects formed mechanisms which were classifed into two classes: those influencing the first context provided and those influencing the second one. There is a strong disfavoring mechanism operating on the second context, and a weaker favoring mechanism on the first context. Another interesting observation is that components and connections in the two mechanisms are majoritarily distinct.",
    },
    {
        title: "A Reinforcement Learning Model to Replicate Mice Behavior",
        subtitle: "Semester Project",
        place: "Mathis Laboratory for Motor Control, EPFL Campus Biotech",
        supervisor:  "Dr. Thomas Sainsbury, Prof. Mackenzie Mathis",
        summary: "Trained reinforcement learning agents in Unity to realistically reproduce the behavior or laboratory mice playing virtual reality games. Aims to compare mice brain learning pathways with RL agents neural networks learning pathways, and reduce animal experiments by using models instead.",
        tech: "Reinforcement Learning, Python, Pytorch, Stable Baselines3, C#, Unity",
        src: semesterprojectmathis,
        alt: "Virtual mice agents trajectories obtained when solving the VR task during each training block: decision, perturbation and washout.",
        legend: "Virtual mice agents were trained to perform the same VR task as lab mice. During first training block called decision, the agent chooses to run to either of two targets. It receives the same reward for going to any of the two targets, meaning it ends up choosing one favourite target at random -> the decision. During the second phase, the reward of the favourite target is removed, and the reward of the other target is doubled -> the perturbation. The agent will as a consequence change its favorite target. In the washout phase, both targets are back to the same reward, and one can observe that the change of favourite target persists.",
    },
    {
        title: "Dimensionality Reduction on Spiking Neuron Networks Data",
        subtitle: "Semester Project",
        place: "Blue Brain Project, EPFL Campus Biotech",
        supervisor:  "Dr. Armando Romani",
        summary: "Developped an automated pipeline of dimensionality reduction, clustering and advanced visualisation techniques to extract spatial and temporal patterns in the behavior of simulated spiking neuron networks.",
        tech: "Dimensionality Reduction, Clustering, Python, Scikit-learn, NEURON, HPC, Matplotlib, Seaborn"
    },
    {
        title: "An Attention-based U-Net Model for Road Segmentation",
        subtitle: "Course Project",
        place: "Machine Learning course, EPFL",
        supervisor:  "-",
        summary: "Implemented an attention-based U-Net variant named TransUNet to perform a road segmentation task on satellite images.",
        tech: "Machine Learning, CNN, Data augmentation, Python, Tensorflow",
        src: courseprojectml,
        alt: "Segmentation results obtained on the left image using U-Net (top) and TransUNet (bottom).",
        legend: "Segmentation results obtained on the left image using a standard U-Net (top) and TransUNet (bottom).",
    },
]  // Note: No picture for BBP cause NDA

export const projectData = [
    {
        id: 6,
        title: "Learning Multimodal Information: Definition and Experimentation",
        sem: "Summer semester 2020/2021",
        tutor: "Prof. Nicolas Guelfi",
        description: "Modern AI systems become increasingly powerful tools, but there remain many tasks that humans perform much better. We suppose that the multimodal perception and interpretation of the world through our five senses significantly contributes to this superior performance of humans. Involving multiple modalities in the decision making process of an AI system would therefore have the potential of improving the accuracy of its predictions, and the research field of multimodal machine learning is focussing on this problem. This semester project aims to introduce the student to this research field.",
        tech: "Python, Tensorflow",
        video: "https://www.youtube.com/embed/4fZNTp0F2Po",
        report: BSP6Report,
    },
    {
        id: 5,
        title: "SmartSparks - A Crowdsourcing App for Organisations",
        sem: "Winter semester 2020/2021",
        tutor: "Prof. Steffen Rothkugel",
        description: "Crowdsourcing is a powerful and sometimes underestimated technique to gather data from the crowd. It can be used for instance in scientific research to gather necessary scientific data through or from the entire population, or within companies or groups of people to gather new ideas more efficiently. However, in the latter case, involving a large group of people in the common process of innovation is difficult for reasons such as lack of communication means between people and a large amount of ideas out of which the bests need to be selected. The aim of this project is to create a prototypical app which will help companies to perform crowdsourcing among their employees and eventually also their customers.",
        tech: "Flutter, Dart, Firebase",
        video: "https://www.youtube.com/embed/pR3tlKc97r0",
        report: BSP5Report,
    },
    {
        id: 3,
        title: "Explore Explainable AI with QT",
        sem: "Winter semester 2019/2020",
        tutor: "Dr. Amro Najjar, Dr. Diego Agustin Ambrossio",
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