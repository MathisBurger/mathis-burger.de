import React from 'react';
import Header from '../components/Header';
import style from '../styles/Blogpage.module.scss';
import BlogCard from '../components/BlogCard';
import { getBlogPosts } from '../components/BlogPosts';
import { GetStaticProps } from 'next';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';

/**
 * Provides a page that lists all blog posts in the system.
 */
const BlogPage = () => {
  return (
    <Wrapper>
      <Header active={'blog'} />
      <div className={style.bg}>
        <div className={style.container}>
          <h1>Blog</h1>
          {getBlogPosts().map((post) => (
            <BlogCard post={post} key={post.blogID} />
          ))}
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

export default BlogPage;
