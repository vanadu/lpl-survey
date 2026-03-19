'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import IconBar from './IconBar';

import logo from '../../public/img-lpl-org-logo.png';
import styles from '../styles/Nav.module.scss';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/survey-mode', label: 'Survey' },
  { href: '/survey-faqs', label: 'FAQs' },
  { href: '/survey-share', label: 'Share' },
  { href: '/contribute', label: 'Contribute' },
  { href: 'https://larparlife.com/allabout', label: 'Lar Par Guide', guide: true },
];

export default function MainNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderNavLink = (item, onClick) => (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {item.label}
      {item.guide ? (
        <FaChevronRight className={styles.nav_dropdown_icon} />
      ) : null}
    </a>
  );

  return (
    <div className={styles.main_nav}>
      <button
        type="button"
        className={styles.menu_button}
        aria-expanded={open}
        aria-controls="mobile-site-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={toggleMenu}
      >
        <span className={`${styles.menu_bar} ${open ? styles.bar1_open : ''}`} />
        <span className={`${styles.menu_bar} ${open ? styles.bar2_open : ''}`} />
        <span className={`${styles.menu_bar} ${open ? styles.bar3_open : ''}`} />
      </button>

      <nav className={styles.desktop_nav} aria-label="Main navigation">
        <ul className={styles.desktop_nav_list}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.desktop_nav_item}>
              {renderNavLink(item)}
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`${styles.backdrop} ${open ? styles.backdrop_open : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`${styles.mobile_menu_bg} ${open ? styles.mobile_menu_bg_open : ''}`}
        aria-hidden="true"
      />

      <nav
        id="mobile-site-nav"
        className={`${styles.mobile_nav} ${open ? styles.mobile_nav_open : ''}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.mobile_nav_inner}>
          <div className={styles.mobile_nav_logo}>
            <a href="/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <Image
                src={logo}
                alt="LarParLife.org Logo"
                className={styles.mobile_nav_logo_img}
                priority
              />
            </a>
          </div>

          <ul className={styles.mobile_nav_list}>
            {navItems.map((item) => (
              <li key={item.href} className={styles.mobile_nav_item}>
                {renderNavLink(item, closeMenu)}
              </li>
            ))}
          </ul>

          <div className={styles.mobile_nav_iconbar}>
            <IconBar getClick={closeMenu} />
          </div>
        </div>
      </nav>
    </div>
  );
}