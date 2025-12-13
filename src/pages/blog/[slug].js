
// !VA This is the page for dynamically creating the paths to the for the individual posts. First, we need to get the data with the getStaticPaths and getStaticProps functions
import React from 'react'
// !VA Moved the MDX imports to Post.js
// import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
// !VA Don't forget that these imports with generate and error because you can't just use them on the client side, you have to use them on the server side with getStaticPaths. Importing without using the function throws a compile error.
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// !VA You have to destructure out the marked methods from marked!
// import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import ButtonBackToPostListing from '../../components/blog_components/ButtonBackToPostListing'
import ButtonNextPost from '../../components/blog_components/ButtonNextPost'
import Post from '../../components/blog_components/Post'


// import * as styles from '../../styles/Blog.module.scss'

// !VA Date: 2024.03.29 next-seo replaces the Head component
import { NextSeo } from 'next-seo'


const components = { Image };


// !VA Once we have frontmatter, slug and content from the Get functions below, we can destructure out title, date, and cover_image 
const PostPage = ({ serializedContent, slug}) => {
  return (
    <>
      {/* <NextSeo 
        title="BLOB TITLE"
        description="BLOB This is the description BLOB"
        canonical="https://larparlife.com/"
      /> */}
      <Post serializedContent={serializedContent} slug={slug} />

    </>
  )

}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src/posts'))
  const paths = files.map((filename) => (
    {
    params: {
      slug: filename.split('.')[0],
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  // !VA markdown is the complete mdx file contents for the currently displayed blog post
  const markdown = fs.readFileSync(path.join('src/posts', slug + '.mdx'), 'utf-8')
  // !VA If parseFrontmatter is false, ALL the frontmatter appears as plain text with no formatting and the frontmatter property of serializedContent is not populated. If true, the frontmatter property of serializedContent receives the frontmatter of the mdx file, and the frontmatter is not included in the serializedContent object passed as props.
  const serializedContent = await serialize(markdown, {
    format: 'mdx',
    parseFrontmatter: true,
    scope: '', // we can supply variables to the mdx files via scope
    mdxOptions: {
      remarkPlugins: [], // plugins like syntax highlighters
      rehypePlugins: [],
    },
  })
  // !VA serialized content is the COMPILED JSX, i.e. the output of the mdx file processed by next-mdx-remote. This is the JSX that is actually rendered.
  return {
    props: {
      slug,
      serializedContent,
    },
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage