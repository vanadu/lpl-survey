import React from 'react'
import {useState, useEffect} from 'react'
import Link from 'next/link'
// !VA 2024 Testing out a  
import {useRouter} from 'next/router'
import {usePathname} from 'next/navigation'



// !VA React Icons
import { LuArrowUpWideNarrow } from "react-icons/lu";
import { MdReadMore } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineGridView } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { TfiBackRight } from "react-icons/tfi";

// !VA Background image for guide dropdown menu, senior black lab
import Image from 'next/image'
import GuideBG from '../../public/bricks/img-brick-11.webp'

// !VA 2024
import { GuidenavContext } from '@/components/Contexts'

// !VA Style modules
import * as styles from '../styles/Light.module.scss'

const GuideNav = () => {

  const router = useRouter()
  const pathname = usePathname()

  // const [previousUrl, setPreviousUrl] = useState(null);


  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     setPreviousUrl(router.asPath); 
  //   };

  //   router.events.on('routeChangeStart', handleRouteChange);

  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange);
  //   };
  // }, [router]);



  
  const doOnClick = () => {
    /* !VA  IT IS POSSIBLE to exit the site and go somewhere else using router.back() but it is very unlikely, because router.back will almost always drive to the landing page or the /patients page, on which there is no back button and no way to go back further in the router stack. You'd have to exit the site, go to another site's url, then manually go to one of the Guide pages with a back button, and then click it. Who is going to do that? Having said that, the best way to do it would be to find the destination of the router.back and if it's not a Guide page, cancel the route change. BUT there's no easy way to do that. I'd have to build a history manually and navigate using useRouter without using router.back...what a pain it the ass that would be! Putting this on ice for how and moving on...*/
    // console.log('clicked');
    // console.log('previousUrl', previousUrl)
    // setPreviousUrl(pathname)
    router.back()
    console.log(pathname);
  }

  return (
    <>
      <div className={styles.guide_nav}>
        <div className={styles.guide_nav_items}>

          <div className={styles.dropdown} tabindex="1">
            <i className={styles.db2} tabindex="1"></i>
            <a className={styles.dropbtn}>Lar Par <span className="mobile-hide-inline">Guide</span> Topics</a>
            {/* About item */}
            <div className={styles.dropdown_content}>
              <div 
                style={{
                  backgroundImage: `url(${GuideBG.src})`,
                }}
                className={styles.dropdown_content_bg}>
              </div>

              <i className={styles.db3} tabindex="1"></i>
              <div className={styles.guide_menu_item_block}>
                <Link href='/patients' 
                  className={styles.mi}>
                  <h2 className={styles.guide_menu_item_text}>About LarPar</h2>
                </Link>
                <h3 className={styles.guide_menu_item_subtext}>Everything you need to know about laryngeal paralysis & GOLPP in dogs</h3>
              </div>
              {/* Treatment item */}
              <div className={styles.guide_menu_item_block}>
                <Link href='/patients/treatment' 
                  className={styles.mi}>
                  <h2 className={styles.guide_menu_item_text}>Treatment Options</h2>
                </Link>
                <h3 className={styles.guide_menu_item_subtext}>Treatment options for laryngeal paralysis &&nbsp;GOLPP</h3>
              </div>
              {/* Research and Info item */}
              <div className={styles.guide_menu_item_block}>
                <Link href='/patients/links' 
                  className={styles.mi}>
                  <h2 className={styles.guide_menu_item_text}>Research &amp; Info</h2>
                </Link>
                <h3 className={styles.guide_menu_item_subtext}>Links to research and veterinary websites</h3>
              </div>
              {/* DVMs item */}
              <div className={styles.guide_menu_item_block}>
                <Link href='/dvms' 
                  className={styles.mi}>
                  <h2 className={styles.guide_menu_item_text}>Stent Info for DVMs</h2>
                </Link>
                <h3 className={styles.guide_menu_item_subtext}>Information for DVMs about the stent procedure for Lar Par</h3>
              </div>
              {/* News and Notes item */}
              <div className={styles.guide_menu_item_block}>
                <Link href='/blog' 
                  className={styles.mi}>
                  <h2 className={styles.guide_menu_item_text}>Lar Par News &amp; Notes</h2>
                </Link>
                <h3 className={styles.guide_menu_item_subtext}>News and information from the world of laryngeal paralysis in dogs</h3>
              </div>
              {/* Contact & Community */}
              <div className={styles.guide_menu_item_block}>
                <Link href='/social' 
                  className={styles.mi}>
                  <h2 className={styles.guide_menu_item_text}>Contact &amp; Community</h2>
                </Link>
                <h3 className={styles.guide_menu_item_subtext}>Ways to contact us and join the international Lar Par community</h3>
              </div>

            </div>
          </div>


          {/* can't use a Link component of course, because the href drives to a different page before the router.back is called */}
          <div className={styles.guide_nav_back}>
            <div
              onClick={doOnClick}
              className={styles.guide_nav_back_link}>
                <TfiBackRight 
                  className={styles.guide_nav_back_icon}
                />
                Previous Topic 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideNav