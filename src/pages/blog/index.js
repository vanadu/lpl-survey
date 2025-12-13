import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// !VA Date: 2024.04.01 Head replaced with NextSeo for meta tags
import Head from 'next/head'
// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'
// !VA Markdown Blog Imports
// !VA ---------------------
// !VA fs can't be imported into React. But next.js knows that in conjunction with getStaticProps the file system can be accessed.
import fs from 'fs'
// !VA We also need to use the path module to be able to navigate the local file system
import path from 'path'
import matter from 'gray-matter'
import PostListing from '../../components/blog_components/PostListing'
// !VA Icons
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import { MdMail } from 'react-icons/md'
import { FaPaw } from 'react-icons/fa'
import { FaArrowCircleRight } from 'react-icons/fa'
// !VA Import the sort function used in getStaticProps from the utility folder in the root
import {sortByDate} from '../../utility'
// !VA Components
// !VA Styles
import * as styles from '../../styles/Blog.module.scss'
import MeAndMissB from '../../../public/img-me-and-miss-b-2015.jpg'


const Blog = ({ posts}) => {
  // !VA Log out the posts exported from the getStaticProps function below 

  return (
    <>
      <NextSeo 
        title="News and Notes About Laryngeal Paralysis &amp; GOLPP in dogs"
        description="Topics of interest for people whose dogs suffer from laryngeal paralysis/GOLPP."
        canonical="https://larparlife.com/blog"
      />
      <section className={styles.section}>
        <div className={styles.section_content}>
          <div className={styles.header}>
            <div className={styles.header_content}>
              {/* !VA 2024 removed <figure className={styles.header_figure}> */}
              {/* !VA 2024 removed !VA 2024 The image of me and miss B doesn't belong here */}
              {/* <Image src={MeAndMissB} className={styles.header_figure_image} alt="Lar Par News Profile Image" /> */}
              {/* <figcaption className={styles.header_figure_caption}>Bee & Me 2015</figcaption> */}
              {/* </figure> */}
              {/* !VA 2024 removed <div className={styles.header_text}>          */}
              <div className={styles.container_inline_block}>
                <h1 className={[styles.heading_head, styles.blog_heading_head].join(' ')}><span className={styles.blog_heading_head}>Laryngeal Paralysis/GOLPP News<span className="mobile-hide-inline"> &amp; Notes</span></span></h1>
                {/* <hr className={styles.rule_underline} /> */}
              </div>
              {/* !VA 2024 removed </div> */}
            </div>
          </div>

          {/* !VA 2024 removed <div className={styles.subhead}> */}
          {/* !VA 2024 removed <h2 className={styles.subhead_text}>Articles</h2> */}
          {/* !VA 2024 removed <p className={styles.subhead_toggle} onClick={doStuff}>Show Images</p> */}
          {/* </div> */}
          <div className={styles.post_listings}>
            {posts.map((post, index) => (
              <PostListing post={post} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog

export async function getStaticProps() {
  // !VA use the fs module to get an array of the files in the posts folder
  const files = fs.readdirSync((path.join('src/posts')))
  // !VA When you log the files, it won't show in the browser, but will show in the terminal because this is server-side

  // !VA Get slug and front matter from posts array
  const posts = files.map(filename => {
    // !VA Create slug
    const slug = filename.replace('.mdx', '')
    // !VA Get frontmatter. readFileSync also comes from the fs module
    const markdownWithMeta = fs.readFileSync(path.join('src/posts', filename), 'utf-8')
    // !VA This logs out an object with the markdown including metadata, i.e. frontmatter to the terminal

    // !VA Now we wrap the post object in a matter object from the gray-matter package. Destructure out the data from the matter object and rename it 'frontmatter'. data is the metadata in the Markdown file.
    const { data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  // !VA Now, this logs out an array containing the slug and the frontmatter for each post to the terminal
  // !VA Now we're passing the posts object to the Home component via props, and sorting the posts using the sortByDate function in the utility folder. Note that sortByDate is in the index.js of the utility folder, so it's loaded by default and the filename doesn't have to be explicitly provided in the import
  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}