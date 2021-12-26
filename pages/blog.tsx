import React from "react";
import Header from "../components/Header";
import style from "../styles/Blogpage.module.css";
import BlogCard from "../components/BlogCard";
import {BlogPosts} from "../components/BlogPosts";
import {GetStaticProps} from "next";

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
                    {BlogPosts.reverse().map((post) => (
                        <BlogCard post={post} />
                    ))}
                </div>
            </div>
        </>
    )
};

export const getStaticProps: GetStaticProps = async context => {
    return {props: {}};
}

export default BlogPage;
