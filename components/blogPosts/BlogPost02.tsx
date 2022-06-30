import React from "react";
import style from "../../styles/post.style.module.scss";

const BlogPost02 = () => {

    return (
        <>
            <h1 className={style.heading}>What is symfony?</h1>
            <p className={style.paragraph}>
               Symfony is a web-framework like every other. But there is something special about it.
                In my career as an software engineer I used a ton of different frameworks. I used actix in rust,
                fiber in go, spring in java and many more. But they are all different from what makes symfony so special.
                Symfony provides his own bundles for nearly everything that can be used in web development.
                Symfony also provides an easy code syntax with dependency injection out of the box and some other features
                that are making it possible to make your project grow faster in progress.
            </p>
            <h1 className={style.heading}>Features that are improving the project</h1>
            <p className={style.paragraph}>
                There are some basic feature that are definitely making your code more readable if you are working
                with symfony. Firstly, it includes dependency injection out of the box. That means, you can write your
                dependencies once and you do not have to reinitialize them every time you want to work with them.
                They are running as containers and you can access them whenever you want in your application.
                Furthermore, symfony provides some phpunit features with additional packages provided by symfony itself.
                So you can work with the symfony test case and test everything that has to do with symfony itself.
                This feature helps to increase your test case coverage through easy integration of the unit tests.
                To go on with, implementing a frontend like React, Vue.js or just a static HTML page is very easy by using
                the provided webpack config and the webpack bundle for symfony that is also provided by the symfony group itself.
            </p>
            <h1 className={style.heading}>Database integration</h1>
            <p className={style.paragraph}>
                Implementing your database into your backend is one of the most complex and annoying things that have to
                be done. Creating migrations, data fixtures for testing and creating relations. All of that is very time
                consuming in other web frameworks. Symfony itself provides an easy to use database handler that is
                called doctrine. To use doctrine you have to provide an entity. It is just an php class with fields.
                Now you can define the behaviour and relations of the different entity-fields through annotations, which
                is very easy and readable. If you want to fetch data from the database, you can create a repository,
                which is an class, that provides some basic function for fetching data from the database, like findBy()
                or findOneBy(). You can easily extend this repository with your own functions by using doctrines QueryBuilder.
                Inserting new data is as easy as fetching data. There is an interface called ObjectManagerInterface.
                Just create a new Instance of your entity and set the fields like you want. After that you can persist
                your data through the ObjectManager with few lines of code. It is easy to read and easy to use.
                Furthermore doctrine provides an extra bundle for symfony that lets you create data fixtures for development.
                But the most amazing thing about symfony that is deep integrated into the symfony environment. You can easily
                create database migrations through a single symfony command and other symfony bundles are able to use
                your entities and repositories, because they are also using doctrine for databases. Therefore there are a
                lot of different bundles that are working with your database implementation. This is absolutely fantastic and
                I am missing this integration in other languages and frameworks like fiber for go or actix for rust.
                It is not as easy as in symfony to build a solid project with these languages and frameworks.
            </p>
            <h1 className={style.heading}>Debugging tools</h1>
            <p className={style.paragraph}>
                If your project grows, you will have more often to do with complex debugging sessions.
                Luckily, symfony provides also development bundles for debugging your symfony application.
                It provides a more detailed integration for xDebug, which is the common debugging server for php.
                Furthermore, symfony has the profiler bundle. It is an bundle that adds an toolbar to your webpage. It
                has very useful information like login information, caching and doctrine database queries. So it helps you
                a lot to understand what is going on under the hood and why your code might not work. But even if you
                are not using the symfony profiler, the development mode of symfony shows a good stack trace on your webpage,
                if something failed. Furthermore the page provides information about logs and exceptions that are thrown.
                So this might also help to debug your code faster that with other tools. Of course, there are also very
                well debugging tools for other languages like go or rust. But I have never seen such an complete debugging
                environment like the symfony debugging environment.
            </p>
            <h1 className={style.heading}>User authentication</h1>
            <p className={style.paragraph}>
              User authorization is one of the most annoying features to implement in your application. After you have done
                the decision what the of authorization you want to use, you have to search for packages that are providing
                this authorization, or you have to implement it yourself. Symfony itself provides a simple token authorization,
                which is not really complex or very secure, but easy to implement. Furthermore you can use your doctrine
                user entity. Symfony does things like password-hashing for you! Using a more complex algorithm for authorization
                like refresh token auth is also not a real problem. There are bundles that are implementing this behaviour.
                You can also use your doctrine entities for that. So you just have to install and configure the bundle as well
                as your endpoints for auth. It is done every quick and it is safe! So you do not have to think about how to implement
                a safe authorization. The symfony environment does the most things for you and the rest is being done by
                the bundles you are using. Therefore, implementing authorization in a symfony application is not complex and
                very easy in comparison to other languages or frameworks.
            </p>
            <h1 className={style.heading}>Useful features</h1>
            <p className={style.paragraph}>
                Have you ever thought about implementing your own commands for specific actions or translating your
                server responses? In the most languages and frameworks is this very complex, because it requires third-party
                dependencies or you have to implement it on your own. Not with symfony! Symfony provides a ton of useful features
                like these console commands and i18n-translation out of the box. Mailing is also no problem with symfony.
                Data validation, push notifications, queues, all these topics are no problem with symfony. And if symfony does
                not provide your feature out of the box, there will be a bundle that provides it. Symfony has such a large
                community, that there is no feature that has not been implemented before through a bundle.
            </p>
            <h1 className={style.heading}>Deployment</h1>
            <p className={style.paragraph}>
                Deploying a symfony application is as simple or complex as other applications. You need to
                have a webserver like apache2 or nginx. You also have to create a custom webserver configuration for
                symfony. But you are also have problems with hosting other application that are not built with php or symfony.
                Furthermore, using docker and symfony is very easy. So it is not a problem to build a container or something like that.
                The symfony CLI provides some very useful features for this case.
            </p>
            <h1 className={style.heading}>Performance</h1>
            <p className={style.paragraph}>
                An often discussed topic is the performance of an application. It can be very good, but if the performance
                is bad, nobody will use it. Symfony might not be the fastest web framework out there. It is also not the
                fastest php framework. But in comparison to nodeJS or python, it is blazing fast. It can hold up with
                spring for Java and scales very solid. So it has a solid performance and is very fast, but it is not
                one of the fastest frameworks out there.
            </p>
            <h1 className={style.heading}>Conclusion</h1>
            <p className={style.paragraph}>
                To put it in a nutshell, symfony is my favourite web-framework at the moment. It is fast, and the way I
                use it and the way it can be used is super intuitive. It provides so many cool features that I have
                much more fun developing software with it than using other frameworks or languages. Even if many people
                are hating php, symfony has a modern way of developing software and php is definitely not a bottleneck of this
                experience. Even through php8 there is a much more modern php version, so it makes the experience even better.
                So if you would ask me now, which web framework you should learn for 2022, my answer is crystal clear.<br />
                Symfony!
            </p>
        </>
    );
};


export default BlogPost02;
