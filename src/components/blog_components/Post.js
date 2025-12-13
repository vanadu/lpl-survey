import React from 'react'
import {useState, useEffect} from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'
// !VA We don't need serialize here, it's in [slug].js and is only use in getStaticProps
// import { serialize } from 'next-mdx-remote/serialize'
// !VA Next packages
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'

import { FaFacebookSquare } from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'
// !VA Custom Components
import ButtonBackToPostListing from './ButtonBackToPostListing'
import ButtonNextPost from './ButtonNextPost'
import HeroImage from './HeroImage'
import ShareButtons from './ShareButtons'
import Youtube from '../blog_components/Youtube'
// import Pic from '../../../public/img-abtvet-stents.jpg'
import Disclaimer from './Disclaimer'

// !VA Style module
import * as styles from '../../styles/Blog.module.scss'

// const components = { Image, HeroImage, Disclaimer };
// !VA You don't have to include native Next components in the components object, just custom components
const components = { HeroImage, Disclaimer, Youtube, ShareButtons, Link };

const Post = ({ serializedContent }) => {
 
  const { frontmatter } = serializedContent
  const meta_title = `${frontmatter.meta_title}`
  const meta_description = `${frontmatter.meta_description}`
  const meta_canonical = `${frontmatter.meta_canonical}`
  // const post_head = `${styles.post_head}`
  // const post_subhead = `${styles.post_subhead}`
  // const post_h3 = `${styles.post_h3}`
  // const post_h4 = `${styles.post_h4}`
  // const post_date = `${styles.post_date}`


  // !VA 2024 Trying to get the blog styles into Blog.module.scss
  // const [post, setPost] = useState("");
  // const [postHead, setPostHead] = useState("");

  // !VA 2024
  useEffect(() => {
    // console.log('styles', styles)
  }, []);

  return (
    <MDXProvider components={{ 
      HeroImage,
      Disclaimer,
      Youtube,
      ShareButtons,
      Link,
      h1: props => <h1 {...props} className={styles.post_head} />,
      h2: props => <h2 {...props} className={styles.post_subhead} />,
      h3: props => <h1 {...props} className={styles.post_h3} />,
      h4: props => <h1 {...props} className={styles.post_h4} />,
      h5: props => <h5 {...props} className={styles.post_date} />,
      p: props => <p {...props} className={styles.post_text} />,
      ul: props => <ul {...props} className={styles.post_ul} />,
      li: props => <li {...props} className={styles.post_li} />,
    }}>

      <NextSeo 
        title={`${meta_title}`}
        description={`${meta_description}`}
        canonical={`${meta_canonical}`}
        />
      <div className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.header}>
            <div className={styles.header_content}>
              {/* <figure className={styles.header_figure}> */}
              {/* !VA 2024 The image of me and miss B doesn't belong here */}
              {/* <Image src={MeAndMissB} className={styles.header_figure_image} alt="Lar Par News Profile Image" /> */}
              {/* <figcaption className={styles.header_figure_caption}>Bee & Me 2015</figcaption> */}
              {/* </figure> */}
              {/* <div className={styles.header_text}>          */}
              <div className={styles.container_inline_block}>
                <h2 className={[styles.heading_head, styles.blog_heading_head].join(' ')}><span className={styles.blog_heading_head}>Laryngeal Paralysis/GOLPP News<span className="mobile-hide-inline"> &amp; Notes</span></span></h2>
                {/* <hr className={styles.rule_underline} /> */}
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className={styles.post_content}>
            <div className={styles.post_nav}>
              {/* <HeroImage src={Pic} /> */}
              <ButtonBackToPostListing />
              {/* <ButtonNextPost /> */}
            </div>
            {/* Unless you can figure out a way to get the MDX files to reference Blog.module.scss, the parent div of all the containers in the MDX files has to be in global.scss can cannot use style modules. Otherwise we can't reference CSS using the parent as specifier */}
            {/* <div className='post'> */}
            <div className={styles.post}>
              <MDXRemote {...serializedContent} components={components} />
            </div>
          </div>
        </div>
      </div>
    </MDXProvider>
  )
}

export default Post