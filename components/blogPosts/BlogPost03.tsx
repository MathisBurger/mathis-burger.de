import React from 'react'
import style from '../../styles/post.style.module.scss'

const BlogPost03 = () => {
  return (
    <>
      <h1 className={style.heading}>Why Vue.js?</h1>
      <p className={style.paragraph}>
        Because I am a web developer, I like to experience new technologies,
        especially on the web. Therefore, I decided to try out Vue.js as my
        frontend in my next fullstack project. I just took my basic symfony
        backend and hooked it up with a clean Vue.js instance on the web.
        Normally, I am just using React as my web framework to go, but as I
        already said I like testing new frameworks on the web. Vue.js is one of
        the biggest web framework and I never worked with it since this project.
        Maybe that is the reason why it seemed very strange and complicated at
        first.
      </p>
      <h1 className={style.heading}>What design libary should I use?</h1>
      <p className={style.paragraph}>
        There are a ton of different design frameworks out there, that you can
        use for building fast and good looking frontends. Furthermore, you can
        also just use pure CSS or a compiled CSS language like SCSS. I dedided
        to use the <a href="https://vuetifyjs.com">Vuetify</a> libary for
        Vue.js, which provides some material design components out of the box as
        vue components. It is a bit confusing to use them if you used the
        original <a href="https://mui.com">Material UI</a> for React before,
        because some names or props of components are different in both
        libaries.
      </p>
      <h1 className={style.heading}>Setting up with webpack and symfony</h1>
      <p className={style.paragraph}>
        Because I used symofony as my backend I used webpack encore for
        compiling my frontend. But setting this up was quite difficult. This was
        very uncomfortable in comparision to my experience working with React.
        After I installed a new libary in Vue.js, I had to change my whole
        webpack config, because it requires some extra preprocessors.
        Furthermore, there is no webpack encore preset for Vue.js. So I had to
        configure everything myself. For people doing this their first this is
        very hard and bad. So I just prefer to use the React preset of webpack
        encore.
      </p>
      <h1 className={style.heading}>Development speed</h1>
      <p className={style.paragraph}>
        There is not really a difference between the speed of the development
        process, because all frontend frameworks are running on Javascript or
        Typescript. So the only hint is, to learn about framework specific
        technics. For example, in React I would use the children prop to render
        some components in another component. In Vue.js I have to use a system
        called slot. This was a bit confusing at the begining, but after working
        a little bit with it, it also felt familiar. But personally, I prefer
        the JSx syntax of React and all these other things in React like hooks
        or the context system. It could be just because I am more familiar using
        React, but also because the general structure of Vue.js confused me. So
        to see this from an objective view, there is no real differnce between
        working with Vue.js and React if we are talking about development speed.
        But for me myself, I am faster in working with React.
      </p>
      <h1 className={style.heading}>Conclusion</h1>
      <p className={style.paragraph}>
        To put in a nutshell, Vue.js is in general a nice framework to work with
        and I like the modern way of it. But I personally prefer the state
        management system and all these other specialties of React. But it could
        be, that I am working in the future again with Vue.js, but at the moment
        I will go on using React as my main web framework.
      </p>
    </>
  )
}

export default BlogPost03
