
import React from 'react'
import { useState, useRef } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { FaMinusSquare } from 'react-icons/fa'

// !VA Styles
import * as styles from '../styles/Light.module.scss'

// !VA Get the props from the child
const ShowMoreContent = ({
  title,
  anchor,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {

    // !VA This ref is the target of scrollIntoview
    const showmoreRef = useRef()
    // !VA Get the index and set the activeIndex POS to the index prop or to 0 depending on if the show more is open or closed.
    const handleSetIndex= (index) => {
      if (activeIndex !== index ) {
        setActiveIndex(index);
        // !VA Once the accordion content has expanded, we can move the top of the accordion container to the top of the screen with the scroll-margin set in the CSS. If you scrollIntoView before the accordion is expanded, the scroll operation will run first and then when the accordion opens it will scroll again to accommodate the new container.
        setTimeout(() => {
          showmoreRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300);
      } else {
        setActiveIndex(0);
      }
    }


    // !VA Update: I'm not sure anymore what showmore-open does. It's added to the classlist of showmore-trigger but I can't find it in any stylesheet. You could probably go ahead and remove this conditional
  return (
    <>
      <div 
        className={styles.showmore_container}
        ref={showmoreRef}
        >
        <div
          onClick={() => handleSetIndex(index, title, anchor)}
          className={styles.showmore}>
            <div 
              className={`${styles.showmore_trigger} ${index === activeIndex ? 'showmore-open' : ''}`}>
              {index === activeIndex ? 
                <div className={styles.showmore_link}>
                  <FaMinusSquare className={styles.showmore_icon} />
                  <h3 className={styles.showmore_title}>{title}</h3>
                </div> 
                :
                <div id={anchor} className={styles.showmore_link}>
                  <FaPlusSquare className={styles.showmore_icon} />
                  <h3 className={styles.showmore_title}>{title}</h3>
                </div>}
              </div>
          {activeIndex === index && (
            <div className={styles.showmore_content}>
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ShowMoreContent