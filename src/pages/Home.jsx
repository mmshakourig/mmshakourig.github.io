import shirazFull from '../../assets/shiraz-full.webp';
import profilePic from '../../assets/home/profilepic.jpg';
import { homeContent } from '../data/homeContent';
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ScholarIcon
} from '../components/Icons';

import '../styles/Global.css';
import '../styles/Home.css';



const socialIconMap = {
  linkedin: LinkedInIcon,
  email: MailIcon,
  github: GitHubIcon,
  scholar: ScholarIcon
};

function HomePage() {
  return (
    <section className="page home-page" aria-labelledby="home-title">
      <div className="hero-grid">
        <aside className="hero-left">
          
          <img className="profile-image" src={profilePic} alt="Portrait of Mahdi Shakouri" />
        <h1 id="home-title">{homeContent.name}</h1>
          <p className="hero-title-line">{homeContent.titleLines[0]}</p>
          <p className="hero-title-line">{homeContent.titleLines[1]}</p>
        </aside>
      </div>

      <div className="transition-band" aria-hidden="true">
        <img src={shirazFull} alt="" />
      </div>

      <section className="highlights-section" aria-labelledby="highlights-title">
        
      </section>


    </section>

    
  );
}

export default HomePage;

