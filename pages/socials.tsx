import Header from "../components/Header";
import SocialBox, { SocialBoxProps } from "../components/SocialBox";
import style from "../styles/Socials.module.css";


const Socials = () => {

    const data: SocialBoxProps[] = [
        {
            url: "https://twitter.com/MathisBurger4",
            iconUrl: "/twitter.png"
        },
        {
            url: "https://instagram.com/mathis.bu",
            iconUrl: "/instagram.png"
        },
        {
            url: "https://github.com/MathisBurger",
            iconUrl: "/github.png"
        },
        {
            url: "https://www.linkedin.com/in/mathis-burger-93614222b/",
            iconUrl: "/linked-in.png"
        }
    ];


    return (
        <div style={{overflow: "hidden"}}>
            <Header active="socials" />
            <div className={style.container}>
                <h1>Socials</h1>
                <div className={style.box}>
                    {data.map(props => (
                        <SocialBox {...props} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Socials;