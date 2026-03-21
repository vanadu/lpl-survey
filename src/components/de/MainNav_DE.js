'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import IconBar from './IconBar';

import logo from '../../public/img-lpl-org-logo.png';
import styles from '../styles/Nav.module.scss';

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
          <li className={styles.desktop_nav_item}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.desktop_nav_item}>
            <Link href="/survey-mode">Survey</Link>
          </li>

          <li className={styles.desktop_nav_item}>
            <Link href="/survey-faqs">FAQs</Link>
          </li>

          <li className={styles.desktop_nav_item}>
            <Link href="/survey-share">Share</Link>
          </li>

          <li className={styles.desktop_nav_item}>
            <Link href="/survey-donate">Contribute</Link>
          </li>

          <li className={styles.desktop_nav_item}>
            <a
              href="https://larparlife.com/allabout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lar Par Guide
              <FaChevronRight className={styles.nav_dropdown_icon} />
            </a>
          </li>
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
            <Link href="/" onClick={closeMenu}>
              <Image
                src={logo}
                alt="LarParLife.org Logo"
                className={styles.mobile_nav_logo_img}
                priority
              />
            </Link>
          </div>

          <ul className={styles.mobile_nav_list}>
            <li className={styles.mobile_nav_item}>
              <Link href="/" onClick={closeMenu}>Home</Link>
            </li>

            <li className={styles.mobile_nav_item}>
              <Link href="/survey-mode" onClick={closeMenu}>Survey</Link>
            </li>

            <li className={styles.mobile_nav_item}>
              <Link href="/survey-faqs" onClick={closeMenu}>FAQs</Link>
            </li>

            <li className={styles.mobile_nav_item}>
              <Link href="/survey-share" onClick={closeMenu}>Share</Link>
            </li>

            <li className={styles.mobile_nav_item}>
              <Link href="/survey-donate" onClick={closeMenu}>Contribute</Link>
            </li>

            <li className={styles.mobile_nav_item}>
              <a
                href="https://larparlife.com/allabout"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Lar Par Guide
                <FaChevronRight className={styles.nav_dropdown_icon} />
              </a>
            </li>
          </ul>

          <div className={styles.mobile_nav_iconbar}>
            <IconBar getClick={closeMenu} />
          </div>
        </div>
      </nav>
    </div>
  );
}