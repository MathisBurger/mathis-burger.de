import React from "react";
import style from "../styles/Blogpage.module.css";
import Link from "next/link";
import {BlogPost} from "./BlogPosts";

export interface BlogCardProps {
    post: BlogPost;
}
/**
 * A basic card that displays all data for the given blog entry.
 */
const BlogCard = ({post}: BlogCardProps) => {

    return (
        <Link href={`/blog/${post.blogID}`}>
            <div className={style.blogElement}>
                <img src={post.imageSrc} className={style.image} alt="blog-img" />
                <div className={style.rightGrid}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            </div>
        </Link>
    )
};

export default BlogCard;
