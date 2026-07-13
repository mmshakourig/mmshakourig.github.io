import shirazFull from '../../assets/shiraz-full.webp';
import profilePic from '../../assets/home/profilepic.jpg';
import { homeContent } from '../data/homeContent';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import { IconButton } from '@mui/material';

import '../styles/Global.css';
import '../styles/Home.css';


const socialIconMap = {
  linkedin: LinkedInIcon,
  email: EmailIcon,
  github: GitHubIcon,
  scholar: SchoolIcon,
  resume: DescriptionIcon,
  profile: CorporateFareIcon
};
const socialNameMap = {
  linkedin: 'LinkedIn',
  email: 'Email',
  github: 'GitHub',
  scholar: 'Scholar',
  resume: 'Resume',
  profile: 'Profile' // Add a name for the profile icon
};

function HomePage() {
  return (
    <section className="page home-page" aria-labelledby="home-title">
      
      <div className="hero-grid">

        <div className="hero-profile">
          <img className="profile-image" src={profilePic} alt="Portrait of Mahdi Shakouri" />
          <div className="profile-text-group">
            <h1 className="name-title">{homeContent.name}</h1>

            <p className="hero-title">{homeContent.titleLines[0]}</p>
            <p className="hero-title">{homeContent.titleLines[1]}</p>
            
          </div>
          <div className="hero-subtitle">
            <p>{homeContent.titleLines[2]}</p>
            <p>{homeContent.titleLines[3]}</p>
          </div>

          <div className="profile-icons">
            {homeContent.socials.map((social) => {
            const IconComponent = socialIconMap[social.icon];
            const socialText = socialNameMap[social.icon]; // Fetch the matching social text
            
            return (
              <IconButton
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                sx={{ 
                  color: 'var(--accent)', 
                  padding:'2px', // Added padding so box-shadow looks clean around text+icon
                  margin:0,
                  fontSize: 'inherit',
                  borderRadius: '4px', // Keeps the box-shadow cleanly squared/rounded
                  transition: 'all 0.2s ease-in-out', // Smooths out the hover effect
                  '&:hover': { 
                    opacity: 0.5, 
                    boxShadow: '0 0 10px var(--accent)',
                    backgroundColor: 'transparent' // Prevents the default MUI circle hover splash
                  } 
                }}
              >
                {/* Wrapper to align Icon and Text inline and centered together */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconComponent />
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--ink-1)' }}>{socialText}</span>
                </div>
              </IconButton>
            );
            })}
          </div>
          
        </div>
        
        <article className="hero-right">
          <h1 className="hero-welcome"># WELCOME!</h1>

          <div className="hero-intro">
            {homeContent.intro.map((paragraph, index) => (
              <p className="hero-about" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="hero-summary">
            <h3># Summary</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '2.5rem', lineHeight: '1.6', fontSize: 'inherit', color: 'var(--ink-1)' }}>
              {homeContent.summary.map((item, index) => (
                <li key={index}>{item} </li>
              ))}
            </ul>
          </div>
        </article>

      </div>

      <div className="transition-band" aria-hidden="true">
        <img src={shirazFull} alt="" />
      </div>

      <section className="highlights-section" aria-labelledby="highlights-title">
        <div className="section-header">
          <h3># Highlights</h3>
        </div>

      {/* change the grid from 4x2 to 3x2 */}
        <div className="highlights-grid">
          {homeContent.highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <p className="highlight-meta">
                <span>{item.number}</span>
                <span>{item.date}</span>
              </p>
              <h2>{item.title}</h2>
              <p className="hero-subtitle"> {item.sneakPeak} </p>
              <a href={item.href} className="card-link">
                <span>Open page</span>
                <ArrowOutwardIcon className="card-link-icon" />
              </a>
            </article>
          ))}
        </div>
      </section>


    </section>

    
  );
}

export default HomePage;

