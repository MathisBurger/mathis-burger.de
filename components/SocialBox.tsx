import style from '../styles/Socials.module.scss';
import IntImg from "./IntImg";

export interface SocialBoxProps {
  /**
   * The url that the box redirects to
   */
  url: string;
  /**
   * The url of the icon
   */
  iconUrl: string;
}

/**
 * A box that displays all social data of a user
 */
const SocialBox = ({ url, iconUrl }: SocialBoxProps) => {
  const redirectUrl = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  };

  return (
    <div className={style.elementBox} onClick={() => redirectUrl(url)}>
      <IntImg src={iconUrl} />
    </div>
  );
};

export default SocialBox;
