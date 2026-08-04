import {projectsContent} from '../data/projectsContent';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { Grid, IconButton } from '@mui/material';

import { NavLink } from 'react-router-dom';

import '/src/styles/global.css';
import '/src/styles/projects.css';

import gal from '/assets/projects/galaxy1.png'
import rl from '/assets/projects/rccar1.jpg'
import rad from '/assets/projects/radio1.jpg'
import rob from '/assets/projects/robot1.jpg'
import mot from '/assets/projects/motor1.jpg'
import imi from '/assets/projects/imitate1.png'

export const slideshowImages = [
  gal, rl, rad, rob, mot, imi
  ];



function ProjectsPage() {
  return (
    <section className="projects-page" aria-labelledby="projects-title">
      {/* create a grid of project cards with content from projectsContent */}
      <h3 className="hero-welcome"># Projects Gallery</h3>
      <div className="projects-grid">
      {projectsContent.projects.map((project, index) => (
          
          <div className="project-card" key={index}>
            
            <header className="card-header">{project.date}</header>
            <NavLink
            // if the project.to is an external link, open it in a new tab and treat it 
            // as an external link, otherwise treat it as an internal link and use react-router-dom's NavLink
                to={project.to}
                target={project.to.startsWith('http') ? '_blank' : '_self'}
                className="card-body" 
                style={{ '--card-bg': `url(${slideshowImages[index]})` }}
              >
              
              <h3 className="card-title">{project.title}</h3>
              
              {/* add smthing that makes the card clickable and opens the project link in a new tab */}
              
              
            </NavLink>



            <footer className="card-footer">
              {/* <p className="card-date"></p> */}
              {/* <p className="card-description">{project.description}</p> */}
              <div className="card-skills">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill}</span>
                ))}
              </div>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
