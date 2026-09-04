import {projectsContent} from '../data/projectsContent';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { Grid, IconButton } from '@mui/material';

import { NavLink } from 'react-router-dom';

import '../styles/global.css';
import '../styles/engphys.css';





function EngPhysPage() {
  return (
    <section className="engphys-page" aria-labelledby="engphys-title">
      {/* create a grid of project cards with content from projectsContent */}
      <h3 className="hero-welcome"># Engineering Physics</h3>
      
      <div className="e-contents">
      <h1> Work in progress ...</h1>

      <p className="hero-about">My vision for this page is to become a repository of course content and resources for the Engineering Physics program at UBC</p>

      </div>

    </section>
  );
}

export default EngPhysPage;
