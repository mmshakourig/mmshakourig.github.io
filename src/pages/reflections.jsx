
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { Grid, IconButton } from '@mui/material';
// import three dots icon
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { NavLink } from 'react-router-dom';

import '../styles/global.css';
import '../styles/reflections.css';


import { reflectionEntries } from '../data/reflectionsContent';



function ReflectionsPage() {
  return (
    <section className="reflections-page" aria-labelledby="reflections-title">
      {/* create a grid of project cards with content from projectsContent */}
      {/* <h3 className="hero-welcome"># Reflections</h3> */}
      
      {/* <h2> Work in progress ...</h2> */}


      <div className="ref-grid">

        <div className="r-sidebar">

          <h3 className="r-sidebar-title">Compendium</h3>

          {reflectionEntries.map((entry, index) => (
            <div className="r-cont-entry" key={index}>
              <span className="r-num">{entry.num}</span>
              <span className="r-title">{entry.title}</span>
              {/* <p className="r-sidebar-date">{entry.date}</p> */}
              </div>
          ))}

        <MoreVertIcon />

        </div>

        <div className="r-article">
        </div>
      

      </div>

    </section>
  );
}

export default ReflectionsPage;
