import BlogPost01 from './blogPosts/BlogPost01';
import BlogPost02 from './blogPosts/BlogPost02';
import BlogPost03 from './blogPosts/BlogPost03';

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
    imageSrc:
      'https://www.shoutmeloud.com/wp-content/uploads/2020/12/Your-First-Blog-Post-1024x576.jpg',
    title: 'First blog post',
    description: 'The initial blog post',
    blogID: 1,
    contentComponent: BlogPost01(),
  },
  {
    imageSrc:
      'https://repository-images.githubusercontent.com/458058/af6a9d00-9374-11e9-887c-917673d9fe68',
    title: 'Why symfony is the only reason to learn PHP',
    description:
      'Have you ever thought about learning PHP just without any reason? You just wanted to learn it,' +
      ' because you heard that php is superior for webdevs?' +
      'So now I will show you the only web-framework you should learn php for, because symfony is the most' +
      'intuitive and superior framework for developers in 2022.',
    blogID: 2,
    contentComponent: BlogPost02(),
  },
  {
    imageSrc: 'https://miro.medium.com/max/850/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg',
    title: 'My personal experience working with Vue.js',
    description:
      'I used Vue.js as the frontend framework of my latest project SimpleInventory. ' +
      'Now I want to share my experience on Vue.js with you. ',
    blogID: 3,
    contentComponent: BlogPost03(),
  },
];

/**
 * Sorts all blog posts by their ID. The latest blog post
 * is on array position one.
 *
 * @returns All blog posts
 */
export const getBlogPosts = () => {
  return BlogPosts.reverse();
};

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
};
