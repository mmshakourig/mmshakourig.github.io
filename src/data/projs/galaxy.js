import {SiOctave, SiPytorch, SiRos, SiHuggingface, SiOpencv, SiNvidia} from "react-icons/si";
import {TbMathIntegral, TbMathIntegralX} from "react-icons/tb";
import {MdAutoGraph} from "react-icons/md";
import {AiTwotoneBoxPlot} from "react-icons/ai";
import { assetUrl, assetUrlWithFragment } from '../../utils/assetUrl';

export const toolsMap = {
  Octave: SiOctave,
  RK4: TbMathIntegral,
  'Numerical Analysis': MdAutoGraph,
  'Finite Difference Analysis': TbMathIntegralX,
  'Matplotlib': AiTwotoneBoxPlot,

};


export const reportLink = assetUrlWithFragment('projects/galaxy/galaxy.pdf', '#toolbar=0&navpanes=0&scrollbar=0&view=FitH');

export const slideshowImages = [
    assetUrl('projects/galaxy/doubleGalaxy_3.gif'),
    assetUrl('projects/galaxy/convergance1stOrd2core.png'),
    assetUrl('projects/galaxy/doubleGalaxy_2.gif'),
    assetUrl('projects/galaxy/doubleGalaxy_15_5.png'),
    assetUrl('projects/galaxy/doubleGalaxy_6.gif'),
    assetUrl('projects/galaxy/doubleGalaxy_10.png'),
  ];

export const projectDetails = {
  title: 'Toomre Galactic Collision Simulation',
  date: 'Fall 2025 - Spring 2026',
  problem: 'A simulation of galaxy collisions using N-body physics and visualization techniques.',
  solution: 'The problem of simulating galaxy collisions is a complex one, as it involves modeling the gravitational interactions between a large number of stars and other celestial bodies. Traditional methods of simulating these interactions can be computationally expensive and time-consuming, making it difficult to accurately model the dynamics of galaxy collisions over long periods of time.',
  image: assetUrl('projects/rccar1.jpg'),
};

export const teamMembers = [
   { name: "Mahdi Shakouri", linkedin: "https://www.linkedin.com/in/mmahdi-shakouri/", img: assetUrl('dome.jpg') },

  ]