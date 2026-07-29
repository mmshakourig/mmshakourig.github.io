import {projectsContent} from '../data/projectsContent';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { Grid, IconButton } from '@mui/material';

import { NavLink } from 'react-router-dom';

import '../styles/global.css';
import '../styles/reflections.css';






function ReflectionsPage() {
  return (
    <section className="reflections-page" aria-labelledby="reflections-title">
      {/* create a grid of project cards with content from projectsContent */}
      <h3 className="hero-welcome"># Reflections</h3>
      
      <div className="e-contents">
      <h2> Work in progress ...</h2>

      <p className="hero-about">My undergraduate degree in Engineering Physics has 
        
          provided me with a strong foundation in both engineering and physics principles. This unique combination of skills allows me to approach complex problems from multiple perspectives, making me a versatile and innovative engineer. </p>

      </div>

    </section>
  );
}

export default ReflectionsPage;
