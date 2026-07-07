import React from 'react';
import { Paper, IconButton, Typography, Box } from '@mui/material';

import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/navContent';
import { CloseIcon, MenuIcon } from './Icons';

import '../styles/Global.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
// import paper resume icon from mui
import DescriptionIcon from '@mui/icons-material/Description';


function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" end className="brand-mark" onClick={() => setMenuOpen(false)}>
            MM Shakouri
          </NavLink>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="menu-button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon className="menu-icon" /> : <MenuIcon className="menu-icon" />}
          </button>
        </div>
      </header>

      <div className={menuOpen ? 'drawer-backdrop is-visible' : 'drawer-backdrop'} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <aside id="mobile-drawer" className={menuOpen ? 'mobile-drawer is-open' : 'mobile-drawer'}>
        <div className="drawer-title">Menu</div>
        <nav className="drawer-nav" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'drawer-link is-active' : 'drawer-link')}
              onClick={() => setMenuOpen(false)}
            >
              <span className="drawer-index">0{index + 1}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        {/* make the box shorter */}
        <div className="footer-inner">
          <div className="footer-icons">
            <IconButton 
              href="https://www.linkedin.com/in/mmahdi-shakouri/" 
              target="_blank" 
              // use the smallest icon zi
              aria-label="LinkedIn"
              sx={{ color: 'var(--accent)', '&:hover': { opacity: 0.8 }, padding: 0, margin: 0, fontSize: 'inherit'}}
            >
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
            <IconButton 
              href="https://github.com/mmshakourig" 
              target="_blank" 
              aria-label="GitHub"
              sx={{ color: 'var(--accent)', '&:hover': { opacity: 0.8 }, padding: 0, margin: 0, fontSize: 'inherit'}}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
            <IconButton 
              href="mailto:mshakouri@bccrc.com" 
              aria-label="Contact"
              // make the icon smaller and remove padding
              sx={{ color: 'var(--accent)', '&:hover': { opacity: 0.8 }, padding: 0, margin: 0, fontSize: 'inherit'}}
            >
              <EmailIcon fontSize="inherit" />
            </IconButton>
            <IconButton 
              href="mailto:mshakouri@bccrc.com" 
              aria-label="Contact"
              // make the icon smaller and remove padding
              sx={{ color: 'var(--accent)', '&:hover': { opacity: 0.8 }, padding: 0, margin: 0, fontSize: 'inherit'}}
            >
              <DescriptionIcon fontSize="inherit" />
            </IconButton>

            
          </div>

          <Typography variant="body2" sx={{ color: 'var(--accent)', padding: '0.5rem', whiteSpace: 'nowrap', fontSize: 'inherit' }}>
              © 2026 MMahdi Shakouri
          </Typography>
          
        </div>

      </footer>
    </div>
  );
}

export default SiteLayout;



