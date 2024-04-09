(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{8332:function(e,o,t){"use strict";t.d(o,{Ji:function(){return h},u3:function(){return r}});var a=t(5893);t(7294);var n=t(5803),s=t.n(n);let i=[{imageSrc:"https://www.shoutmeloud.com/wp-content/uploads/2020/12/Your-First-Blog-Post-1024x576.jpg",title:"First blog post",description:"The initial blog post",blogID:1,contentComponent:(0,a.jsx)("p",{className:s().paragraph,children:"This is my first blog post here on this site. It has no real content and just shows, that the post system works without any issues."}),postedAt:"12/26/2021"},{imageSrc:"https://repository-images.githubusercontent.com/458058/af6a9d00-9374-11e9-887c-917673d9fe68",title:"Why symfony is the only reason to learn PHP",description:"Have you ever thought about learning PHP just without any reason? You just wanted to learn it, because you heard that php is superior for webdevs?So now I will show you the only web-framework you should learn php for, because symfony is the mostintuitive and superior framework for developers in 2022.",blogID:2,contentComponent:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:s().heading,children:"What is symfony?"}),(0,a.jsx)("p",{className:s().paragraph,children:"Symfony is a web-framework like every other. But there is something special about it. In my career as an software engineer I used a ton of different frameworks. I used actix in rust, fiber in go, spring in java and many more. But they are all different from what makes symfony so special. Symfony provides his own bundles for nearly everything that can be used in web development. Symfony also provides an easy code syntax with dependency injection out of the box and some other features that are making it possible to make your project grow faster in progress."}),(0,a.jsx)("h1",{className:s().heading,children:"Features that are improving the project"}),(0,a.jsx)("p",{className:s().paragraph,children:"There are some basic feature that are definitely making your code more readable if you are working with symfony. Firstly, it includes dependency injection out of the box. That means, you can write your dependencies once and you do not have to reinitialize them every time you want to work with them. They are running as containers and you can access them whenever you want in your application. Furthermore, symfony provides some phpunit features with additional packages provided by symfony itself. So you can work with the symfony test case and test everything that has to do with symfony itself. This feature helps to increase your test case coverage through easy integration of the unit tests. To go on with, implementing a frontend like React, Vue.js or just a static HTML page is very easy by using the provided webpack config and the webpack bundle for symfony that is also provided by the symfony group itself."}),(0,a.jsx)("h1",{className:s().heading,children:"Database integration"}),(0,a.jsx)("p",{className:s().paragraph,children:"Implementing your database into your backend is one of the most complex and annoying things that have to be done. Creating migrations, data fixtures for testing and creating relations. All of that is very time consuming in other web frameworks. Symfony itself provides an easy to use database handler that is called doctrine. To use doctrine you have to provide an entity. It is just an php class with fields. Now you can define the behaviour and relations of the different entity-fields through annotations, which is very easy and readable. If you want to fetch data from the database, you can create a repository, which is an class, that provides some basic function for fetching data from the database, like findBy() or findOneBy(). You can easily extend this repository with your own functions by using doctrines QueryBuilder. Inserting new data is as easy as fetching data. There is an interface called ObjectManagerInterface. Just create a new Instance of your entity and set the fields like you want. After that you can persist your data through the ObjectManager with few lines of code. It is easy to read and easy to use. Furthermore doctrine provides an extra bundle for symfony that lets you create data fixtures for development. But the most amazing thing about symfony that is deep integrated into the symfony environment. You can easily create database migrations through a single symfony command and other symfony bundles are able to use your entities and repositories, because they are also using doctrine for databases. Therefore there are a lot of different bundles that are working with your database implementation. This is absolutely fantastic and I am missing this integration in other languages and frameworks like fiber for go or actix for rust. It is not as easy as in symfony to build a solid project with these languages and frameworks."}),(0,a.jsx)("h1",{className:s().heading,children:"Debugging tools"}),(0,a.jsx)("p",{className:s().paragraph,children:"If your project grows, you will have more often to do with complex debugging sessions. Luckily, symfony provides also development bundles for debugging your symfony application. It provides a more detailed integration for xDebug, which is the common debugging server for php. Furthermore, symfony has the profiler bundle. It is an bundle that adds an toolbar to your webpage. It has very useful information like login information, caching and doctrine database queries. So it helps you a lot to understand what is going on under the hood and why your code might not work. But even if you are not using the symfony profiler, the development mode of symfony shows a good stack trace on your webpage, if something failed. Furthermore the page provides information about logs and exceptions that are thrown. So this might also help to debug your code faster that with other tools. Of course, there are also very well debugging tools for other languages like go or rust. But I have never seen such an complete debugging environment like the symfony debugging environment."}),(0,a.jsx)("h1",{className:s().heading,children:"User authentication"}),(0,a.jsx)("p",{className:s().paragraph,children:"User authorization is one of the most annoying features to implement in your application. After you have done the decision what the of authorization you want to use, you have to search for packages that are providing this authorization, or you have to implement it yourself. Symfony itself provides a simple token authorization, which is not really complex or very secure, but easy to implement. Furthermore you can use your doctrine user entity. Symfony does things like password-hashing for you! Using a more complex algorithm for authorization like refresh token auth is also not a real problem. There are bundles that are implementing this behaviour. You can also use your doctrine entities for that. So you just have to install and configure the bundle as well as your endpoints for auth. It is done every quick and it is safe! So you do not have to think about how to implement a safe authorization. The symfony environment does the most things for you and the rest is being done by the bundles you are using. Therefore, implementing authorization in a symfony application is not complex and very easy in comparison to other languages or frameworks."}),(0,a.jsx)("h1",{className:s().heading,children:"Useful features"}),(0,a.jsx)("p",{className:s().paragraph,children:"Have you ever thought about implementing your own commands for specific actions or translating your server responses? In the most languages and frameworks is this very complex, because it requires third-party dependencies or you have to implement it on your own. Not with symfony! Symfony provides a ton of useful features like these console commands and i18n-translation out of the box. Mailing is also no problem with symfony. Data validation, push notifications, queues, all these topics are no problem with symfony. And if symfony does not provide your feature out of the box, there will be a bundle that provides it. Symfony has such a large community, that there is no feature that has not been implemented before through a bundle."}),(0,a.jsx)("h1",{className:s().heading,children:"Deployment"}),(0,a.jsx)("p",{className:s().paragraph,children:"Deploying a symfony application is as simple or complex as other applications. You need to have a webserver like apache2 or nginx. You also have to create a custom webserver configuration for symfony. But you are also have problems with hosting other application that are not built with php or symfony. Furthermore, using docker and symfony is very easy. So it is not a problem to build a container or something like that. The symfony CLI provides some very useful features for this case."}),(0,a.jsx)("h1",{className:s().heading,children:"Performance"}),(0,a.jsx)("p",{className:s().paragraph,children:"An often discussed topic is the performance of an application. It can be very good, but if the performance is bad, nobody will use it. Symfony might not be the fastest web framework out there. It is also not the fastest php framework. But in comparison to nodeJS or python, it is blazing fast. It can hold up with spring for Java and scales very solid. So it has a solid performance and is very fast, but it is not one of the fastest frameworks out there."}),(0,a.jsx)("h1",{className:s().heading,children:"Conclusion"}),(0,a.jsxs)("p",{className:s().paragraph,children:["To put it in a nutshell, symfony is my favourite web-framework at the moment. It is fast, and the way I use it and the way it can be used is super intuitive. It provides so many cool features that I have much more fun developing software with it than using other frameworks or languages. Even if many people are hating php, symfony has a modern way of developing software and php is definitely not a bottleneck of this experience. Even through php8 there is a much more modern php version, so it makes the experience even better. So if you would ask me now, which web framework you should learn for 2022, my answer is crystal clear.",(0,a.jsx)("br",{}),"Symfony!"]})]}),postedAt:"12/26/2021"},{imageSrc:"https://miro.medium.com/max/850/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg",title:"My personal experience working with Vue.js",description:"I used Vue.js as the frontend framework of my latest project SimpleInventory. Now I want to share my experience on Vue.js with you. ",blogID:3,contentComponent:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:s().heading,children:"Why Vue.js?"}),(0,a.jsx)("p",{className:s().paragraph,children:"Because I am a web developer, I like to experience new technologies, especially on the web. Therefore, I decided to try out Vue.js as my frontend in my next fullstack project. I just took my basic symfony backend and hooked it up with a clean Vue.js instance on the web. Normally, I am just using React as my web framework to go, but as I already said I like testing new frameworks on the web. Vue.js is one of the biggest web framework and I never worked with it since this project. Maybe that is the reason why it seemed very strange and complicated at first."}),(0,a.jsx)("h1",{className:s().heading,children:"What design libary should I use?"}),(0,a.jsxs)("p",{className:s().paragraph,children:["There are a ton of different design frameworks out there, that you can use for building fast and good looking frontends. Furthermore, you can also just use pure CSS or a compiled CSS language like SCSS. I dedided to use the ",(0,a.jsx)("a",{href:"https://vuetifyjs.com",children:"Vuetify"})," libary for Vue.js, which provides some material design components out of the box as vue components. It is a bit confusing to use them if you used the original ",(0,a.jsx)("a",{href:"https://mui.com",children:"Material UI"})," for React before, because some names or props of components are different in both libaries."]}),(0,a.jsx)("h1",{className:s().heading,children:"Setting up with webpack and symfony"}),(0,a.jsx)("p",{className:s().paragraph,children:"Because I used symofony as my backend I used webpack encore for compiling my frontend. But setting this up was quite difficult. This was very uncomfortable in comparision to my experience working with React. After I installed a new libary in Vue.js, I had to change my whole webpack config, because it requires some extra preprocessors. Furthermore, there is no webpack encore preset for Vue.js. So I had to configure everything myself. For people doing this their first this is very hard and bad. So I just prefer to use the React preset of webpack encore."}),(0,a.jsx)("h1",{className:s().heading,children:"Development speed"}),(0,a.jsx)("p",{className:s().paragraph,children:"There is not really a difference between the speed of the development process, because all frontend frameworks are running on Javascript or Typescript. So the only hint is, to learn about framework specific technics. For example, in React I would use the children prop to render some components in another component. In Vue.js I have to use a system called slot. This was a bit confusing at the begining, but after working a little bit with it, it also felt familiar. But personally, I prefer the JSx syntax of React and all these other things in React like hooks or the context system. It could be just because I am more familiar using React, but also because the general structure of Vue.js confused me. So to see this from an objective view, there is no real differnce between working with Vue.js and React if we are talking about development speed. But for me myself, I am faster in working with React."}),(0,a.jsx)("h1",{className:s().heading,children:"Conclusion"}),(0,a.jsx)("p",{className:s().paragraph,children:"To put in a nutshell, Vue.js is in general a nice framework to work with and I like the modern way of it. But I personally prefer the state management system and all these other specialties of React. But it could be, that I am working in the future again with Vue.js, but at the moment I will go on using React as my main web framework."})]}),postedAt:"01/20/2022"}],r=()=>i.sort((e,o)=>e.blogID<o.blogID?1:-1),h=e=>{let o=null;return i.forEach(t=>{t.blogID===e&&(o=t)}),o}},4356:function(e,o,t){"use strict";var a=t(5893);t(7294);var n=t(5110),s=t.n(n),i=t(1664),r=t.n(i);o.Z=()=>(0,a.jsxs)("footer",{className:s().footerContainer,children:[(0,a.jsx)("p",{children:"\xa92024 Mathis Burger"}),(0,a.jsx)("div",{className:s().extraLinks,children:(0,a.jsx)(r(),{href:"/impressum",style:{textDecoration:"none"},children:(0,a.jsx)("p",{children:"Impressum"})})})]})},9603:function(e,o,t){"use strict";var a=t(5893),n=t(7294),s=t(8888),i=t.n(s),r=t(2814),h=t(1436),l=t(1163),c=t(9259);o.Z=e=>{let{active:o}=e,t=(0,l.useRouter)(),[s,d]=(0,n.useState)({display:"block"});(0,n.useEffect)(()=>{let e=localStorage.getItem("header-dropdown");null!==e&&""!==e&&d(JSON.parse(e))},[]);let u=(e,o)=>{document.body.clientWidth<680&&("block"===o.display?(e({display:"none"}),localStorage.setItem("header-dropdown",JSON.stringify({display:"none"}))):(e({display:"block"}),localStorage.setItem("header-dropdown",JSON.stringify({display:"block"}))))};return(0,a.jsxs)("div",{className:i().container,children:[(0,a.jsx)("div",{className:i().imgBox,children:(0,a.jsx)(c.Z,{src:"/me4.jpeg",width:60,height:60})}),(0,a.jsx)(r.G,{className:i().dropdown,onClick:()=>u(d,s),icon:h.xiG}),(0,a.jsx)("div",{className:"".concat(i().linkBox," ").concat("block"===s.display?i().openDropdown:""),children:[{name:"home",label:"Home",link:"/"},{name:"projects",label:"Projects",link:"/projects"},{name:"cv",label:"CV",link:"/cv"},{name:"socials",label:"Socials",link:"/socials"},{name:"blog",label:"Blog",link:"/blog"}].map(e=>(0,a.jsx)("div",{className:"".concat(i().navBox," ").concat(o===e.name?i().active:""),style:s,onClick:()=>{u(d,s),t.push(e.link)},children:e.label},e.link))})]})}},9259:function(e,o,t){"use strict";var a=t(5893),n=t(5675),s=t.n(n);o.Z=e=>{let{src:o,className:t,width:n,height:i}=e;return(0,a.jsx)(s(),{src:o,alt:"",width:null!=n?n:0,height:null!=n?n:0,className:t})}},5110:function(e){e.exports={footerContainer:"Footer_footerContainer__GApQA",extraLinks:"Footer_extraLinks__aYkL9"}},8888:function(e){e.exports={container:"Header_container__dGdkP",imgBox:"Header_imgBox__TROub",navBox:"Header_navBox__lnN3f",active:"Header_active__jUUlL",dropdown:"Header_dropdown__ATh9A",linkBox:"Header_linkBox__Cm2j2",openDropdown:"Header_openDropdown__retVH",dropdownAnimation:"Header_dropdownAnimation__pD4KU",closeDropdown:"Header_closeDropdown__UQRKt",animateNavBoxHover:"Header_animateNavBoxHover__ZlUcU"}},5803:function(e){e.exports={paragraph:"post_style_paragraph__QSh43",heading:"post_style_heading__xD6Mg"}}}]);