import React, { useMemo } from 'react';
import Header from '../components/Header';
import style from '../styles/Blogpage.module.scss';
import BlogCard from '../components/BlogCard';
import { BlogPost, getBlogPosts } from '../components/BlogPosts';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import ClientOnly from '../components/ClientOnly';

/**
 * Provides a page that lists all blog posts in the system.
 */
const BlogPage = () => {
  const blogPosts = useMemo<BlogPost[]>(() => getBlogPosts(), []);

  return (
    <Wrapper>
      <Header active={'blog'} />
      <div className={style.bg}>
        <div className={style.container}>
          <h1>Blog</h1>
          <ClientOnly>
            {blogPosts.map((post) => (
              <BlogCard post={post} key={post.blogID} />
            ))}
          </ClientOnly>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default BlogPage;
