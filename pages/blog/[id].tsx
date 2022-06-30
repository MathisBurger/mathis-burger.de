import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Header from "../../components/Header";
import style from "../../styles/Blogpost.module.scss";
import {BlogPost as BlogPostType, BlogPosts, findByBlogID} from "../../components/BlogPosts";
import {GetStaticPaths, GetStaticProps} from "next";

/**
 * The page that renders a blog post from scaffold.
 */
const BlogPost = () => {
    const router = useRouter();
    const {id} = router.query;
    const [post, setPost] = useState<BlogPostType | null>(null);

    useEffect(() => {
        setPost(findByBlogID(parseInt(id as string, 10)));
    }, []);

    if (post) {
        return (
            <>
                <Header active="blog" />
                <div className={style.container}>
                    <img src={post.imageSrc} alt="post-image" className={style.image} />
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                    {post.contentComponent}
                </div>
            </>
        );
    }
    return <Header active="blog" />;
};



export const getStaticPaths: GetStaticPaths = async () => {
    const ids = [];
    BlogPosts.forEach((post) => {
        ids.push('' + post.blogID);
    })
    const paths = ids.map(id => ({
        params: { id },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
    return {props: {}};
}

export default BlogPost;
