import React from 'react'

import * as styles from '../../styles/Blog.module.scss'

const Youtube = ({ id }) => {
  // !VA The iframe styles are in globals.scss, the embed styles are in Blog.module.scss
  return (
    <div className={styles.youtube_embed}>
      <iframe
        className="aspect-video w-full"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  )
}

export default Youtube