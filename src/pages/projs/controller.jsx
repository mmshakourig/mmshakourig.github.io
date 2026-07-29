
import '../../styles/global.css';
import '../../styles/proj.css';
import { useEffect, useState } from 'react';

import { teamMembers, toolsMap, slideshowImages, reportLink} from '../../data/projs/controller';



function Controller() {
  

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  return (
    <section className="projects-page" aria-labelledby="projects-title">
      {/* create a grid of project cards with content from projectsContent */}

      <div className='p-header'>

        <div className='p-discript'>
          <h2 className='p-title'>Sim2Real RL Driving Agent</h2>
          <p>Bridging the gap between simulation and reality in autonomous driving</p>
        </div>

        <div className='p-team'>
          <h2 className='p-subtitle'>The Team</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <a 
                key={index}
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="member-link"
              >
                <img src={member.img} alt={member.name} className="member-img" />
                <span>{member.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className='p-tools'>
          <h2 className='p-subtitle'>Tools & Tech</h2>
          <div className='p-tools-list'>
            {Object.keys(toolsMap).map((tool, index) => {
              const ToolIcon = toolsMap[tool];
              return (
                <div key={index} className='project-tool-item'>
                  <ToolIcon className="tool-icon"/>
                  <span>{tool}</span>
                </div>
              );
            }
            )}
          </div>
        </div>


      </div>

      <div className='p-right'>
        <h2 className='p-gal'>Galary</h2>
        <div className="p-right slideshow-container">
          {slideshowImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Project slide ${index + 1}`}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>
        
      </div>

      <div className='project-report'>
        <h2 className='p-subtitle'>Detailed Report</h2>
        {/* don't allow the iframe to allow download */}
        <iframe
          title="Sim2Real Project Report"
          src={reportLink}
          // width="100%"
          // height="600px"
          scrolling="no"
        >
        </iframe>
        

        
      </div>


    </section>

  );
}

export default Controller;