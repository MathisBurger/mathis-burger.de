import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import style from '../../styles/Blogpost.module.scss';
import {
  BlogPost as BlogPostType,
  BlogPosts,
  findByBlogID,
} from '../../components/BlogPosts';
import { GetStaticPaths, GetStaticProps } from 'next';
import useLocalStorage from '../../hooks/useLocalStorage';
import IntImg from '../../components/IntImg';
import Footer from "../../components/Footer";

/**
 * The page that renders a blog post from scaffold.
 */
const BlogPost = () => {
  const router = useRouter();
  const [theme, setTheme] = useLocalStorage('color-theme', 'white');
  const { id } = router.query;
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    setPost(findByBlogID(parseInt(id as string, 10)));
  }, [id]);

  const changeTheme = () => setTheme(theme === 'white' ? 'dark' : 'white');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#161616';
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  }, [theme]);

  if (post) {
    return (
      <>
        <Header active="blog" />
        <div
          className={`${style.container} ${theme === 'dark' ? style.dark : ''}`}
        >
          <IntImg src={post.imageSrc} className={style.image} />
          <button onClick={changeTheme}>Change Color Scheme</button>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <p>Posted at: {post.postedAt}</p>
          {post.contentComponent}
        </div>
        <Footer />
      </>
    );
  }
  return <Header active="blog" />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = [];
  BlogPosts.forEach((post) => {
    ids.push('' + post.blogID);
  });
  const paths = ids.map((id) => ({
    params: { id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};

export default BlogPost;
