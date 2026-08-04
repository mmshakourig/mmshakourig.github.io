import {SiPython, SiPytorch, SiRos, SiHuggingface, SiOpencv, SiNvidia} from "react-icons/si";
import { assetUrl, assetUrlWithFragment } from '../../utils/assetUrl';

export const toolsMap = {
  Python: SiPython,
  PyTorch: SiPytorch,
  ROS: SiRos,
  HuggingFace: SiHuggingface,
  OpenCV: SiOpencv,
  IsaacLab: SiNvidia
};

export const reportLink = assetUrlWithFragment('projects/rldriving.pdf', '#toolbar=0&navpanes=0&scrollbar=0&view=FitH');

export const slideshowImages = [
    assetUrl('projects/rccar1.jpg'),
    assetUrl('projects/robot1.jpg'),
    assetUrl('projects/robot2.jpg'),
  ];

export const projectDetails = {
  title: 'Sim2Real RL Driving Agent',
  date: 'Fall 2025 - Spring 2026',

  problem: 'Autonomous driving in the commercial sectors is a complex and challenging task that requires the integration of various technologies, including agent architectures, machine learning policies, and robotics. One of the main challenges in developing autonomous driving agents is the need for large amounts of data to train the underlying models. Collecting real-world data is time-consuming, expensive, and potentially dangerous. As such, training often heavily relies on simulated environments, which can introduce a gap between the simulated and real-world scenarios.',
  solution: 'To address this challenge, sponsored by Wayve Technologies Ltd., we developed a reinforcement learning (RL) sim2real platform that allows for policy training in simulation and deployment in real-world driving scenarios at an micro RC car 1:64 scale. The physical platform consists of multiple RC cars and any 3D track can be deployed on the platform for more realistic testing and training in the real world. The system also entails a manually controllable RC car that can interact with automated the RL agents.',
  image: assetUrl('projects/rccar1.jpg'),
};

export const teamMembers = [
  { name: "Sasan Ghasaei", linkedin: "https://www.linkedin.com/in/sasanghasaei/", img: assetUrl('dome.jpg') },
  { name: "William Gibbs", linkedin: "https://www.linkedin.com/in/william-gibbs-727620278/", img: assetUrl('dome.jpg') },
  { name: "Felipe Garavelli", linkedin: "https://www.linkedin.com/in/felipegaravelli/", img: assetUrl('dome.jpg') },
  { name: "Itai Boss", linkedin: "https://www.linkedin.com/in/itaiboss/", img: assetUrl('dome.jpg') },
  { name: "Mahdi Shakouri", linkedin: "https://www.linkedin.com/in/mmahdi-shakouri/", img: assetUrl('dome.jpg') },

  ]