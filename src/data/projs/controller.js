
import {GiElectric} from "react-icons/gi";
import {TbCircuitMotor} from "react-icons/tb";


export const toolsMap = {
  'Circuit Design': GiElectric,
  'Servo' : TbCircuitMotor
};

export const reportLink = "assets/projects/controller/final.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH";

export const slideshowImages = [
    'assets/projects/controller/motor2.jpg',
    'assets/projects/controller/labelled.png',
    'assets/projects/controller/entire.png',
  ];

export const projectDetails = {
  title: 'Closed-Loop Motor Speed Controller',
  date: 'Fall 2025 - Spring 2026',

  problem: 'The need for a closed-loop motor speed controller that can maintain a constant speed under varying load conditions.',
  solution: 'A closed-loop control system was designed and implemented to regulate the speed of a DC motor using an 8-bit D-LATCH, Digital-to-Analog Converter (DAC), and an operational amplifier (OP-AMP). Without any external disturbances, ensuring it maintains a constant speed despite changes in load. The system uses feedback from an encoder to adjust the motor\'s input voltage in real-time.',
  image: 'assets/projects/rccar1.jpg',
};

export const teamMembers = [
  { name: "Mahdi Shakouri", linkedin: "https://www.linkedin.com/in/mmahdi-shakouri/", img:"assets/dome.jpg" },

  ]