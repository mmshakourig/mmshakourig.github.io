import shirazFull from '../../assets/shiraz-full.webp';
// import profilePic from '../../assets/home/profilepic.jpg';
import {projectsContent} from '../data/projectsContent';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { Grid, IconButton } from '@mui/material';

import '../styles/global.css';
import '../styles/projects.css';





function ProjectsPage() {
  return (
    <section className="projects-page" aria-labelledby="projects-title">
      {/* create a grid of project cards with content from projectsContent */}
      <h3 className="hero-welcome"># Projects Gallery</h3>
      <div className="projects-grid">
      {projectsContent.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <header className="card-header">{project.date}</header>
            <div 
              className="card-body" 
              style={{ '--card-bg': `url(${project.image})` }}
            >
              <h3 className="card-title">{project.title}</h3>
            </div>
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

