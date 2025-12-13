import React from 'react'

import * as styles from "../../styles/Blog.module.scss";

const Disclaimer = () => {
  return (
    <div className={styles.post_disclaimer}>
      <hr className={styles.post_disclaimer_hr}/>
      <p className={styles.post_disclaimer_text}><span className='semibold-italic'>DISCLAIMER: </span>The author of this post is not a veterinarian and the opinions stated herein are in no way intended to represent veterinary advice. Always confer with your veterinarian before taking any action that may affect the health and well-being of your companion animals.</p>
    </div>
  )
}

export default Disclaimer