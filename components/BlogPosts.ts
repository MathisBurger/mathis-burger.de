import BlogPost01 from "./blogPosts/BlogPost01";

export interface BlogPost {
    /**
     * the src of the image
     */
    imageSrc: string;
    /**
     * The title pf the blog post
     */
    title: string;
    /**
     * The description of the blog post
     */
    description: string;
    /**
     * The ID of the blog post
     */
    blogID: number;

    /**
     * A component that contains the blog data
     */
    contentComponent?: JSX.Element;
}

/**
 * All blog posts in the system
 */
export const BlogPosts: BlogPost[] = [
    {
        imageSrc: "https://www.shoutmeloud.com/wp-content/uploads/2020/12/Your-First-Blog-Post-1024x576.jpg",
        title: "First blog post",
        description: "The initial blog post",
        blogID: 1,
        contentComponent: BlogPost01()
    }
];

/**
 * Searches for blog posts with the given blogID
 *
 * @param id The id of the searched blog post
 */
export const findByBlogID = (id: number): BlogPost | null => {
    let element: BlogPost | null = null;
    BlogPosts.forEach((post) => {
        if (post.blogID === id) {
            element = post;
        }
    });
    return element;
}
