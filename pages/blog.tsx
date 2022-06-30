import React from 'react'
import Header from '../components/Header'
import style from '../styles/Blogpage.module.scss'
import BlogCard from '../components/BlogCard'
import { getBlogPosts } from '../components/BlogPosts'
import { GetStaticProps } from 'next'

/**
 * Provides a page that lists all blog posts in the system.
 */
const BlogPage = () => {
  return (
    <>
      <Header active={'blog'} />
      <div className={style.bg}>
        <div className={style.container}>
          <h1>Blog</h1>
          {getBlogPosts().map((post) => (
            <BlogCard post={post} key={post.blogID} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} }
}

export default BlogPage
