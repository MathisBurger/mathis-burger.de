import React from "react";
import Header from "../components/Header";
import style from "../styles/Blogpage.module.css";
import BlogCard from "../components/BlogCard";
import {BlogPosts} from "../components/BlogPosts";

/**
 * Provides a page that lists all blog posts in the system.
 */
const BlogPage = () => {

    return (
        <>
            <Header active={"blog"} />
            <div className={style.bg}>
                <div className={style.container}>
                    <h1>Blog</h1>
                    {BlogPosts.map((post) => (
                        <BlogCard post={post} />
                    ))}
                </div>
            </div>
        </>
    )
};

export default BlogPage;
