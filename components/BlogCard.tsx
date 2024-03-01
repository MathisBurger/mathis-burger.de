import React from 'react';
import style from '../styles/Blogpage.module.scss';
import { BlogPost } from './BlogPosts';
import {useRouter} from "next/navigation";

export interface BlogCardProps {
  post: BlogPost;
}
/**
 * A basic card that displays all data for the given blog entry.
 */
const BlogCard = ({ post }: BlogCardProps) => {

  const router = useRouter();

  return (
      <div className={style.blogElement} onClick={() => router.push(`/blog/${post.blogID}`)}>
        <img src={post.imageSrc} className={style.image} alt="blog-img" />
        <div className={style.rightGrid}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </div>
  );
};

export default BlogCard;
