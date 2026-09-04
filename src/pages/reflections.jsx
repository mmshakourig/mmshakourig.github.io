
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
              <div className="r-num">{entry.num}</div>
              <span className="r-title">{entry.title}</span>
              {/* <p className="r-sidebar-date">{entry.date}</p> */}
              </div>
          ))}

        <MoreVertIcon />

        </div>

        
        <div className="r-article">
          <div className="article-header">
            <div className="article-meta">
              <span>{reflectionEntries[0].num}</span>
              <span>{reflectionEntries[0].date}</span>
            </div>
            <h2 className="article-title">{reflectionEntries[0].title}</h2>
          </div>
          <div >
            {reflectionEntries[0].body.map((paragraph, index) => (
              <p className="hero-about" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="article-footer">
              <IconButton aria-label="previous reflection" style={{ fontSize: 'inherit' }}>
                <ArrowBackIcon />
                <span>Previous</span>
              </IconButton>
              <IconButton aria-label="next reflection" style={{ fontSize: 'inherit' }}>
                <span>Next</span>
                <ArrowForwardIcon />
              </IconButton>
          </div>
        </div>
      

      </div>

    </section>
  );
}

export default ReflectionsPage;
