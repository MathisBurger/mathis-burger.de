import React from "react";
import {useRouter} from "next/router";
import Header from "../../components/Header";
import style from "../../styles/Blogpost.module.css";
import {findByBlogID} from "../../components/BlogPosts";

/**
 * The page that renders a blog post from scaffold.
 */
const BlogPost = () => {
    const router = useRouter();
    const {id} = router.query;
    const post = findByBlogID(parseInt(id as string, 10));
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
    )
};

/**
 * Loads the initial props on page reload
 */
BlogPost.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
}

export default BlogPost;
