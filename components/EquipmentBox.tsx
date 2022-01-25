import style from "../styles/Equipment.module.css";

export interface EquipmentBoxProps {
    /**
     * The url to the product
     */
    productUrl: string;
    /**
     * The url to the product image
     */
    productImage: string;
    /**
     * The name of the element
     */
    name: string;
    /**
     * The description of the element
     */
    description: string;
    /**
     * The price of the product
     */
    productPrice: string;
}

/**
 * Displays an element of my equipment. 
 */
const EquipmentBox = ({productUrl, productImage, name, description, productPrice}: EquipmentBoxProps) => {

    const redirectUrl = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className={style.equipmentCard} onClick={() => redirectUrl(productUrl)}>
            <h2>{name}</h2>
            <div className={style.contentBox}>
                <img className={style.image} src={productImage} />
                <div className={style.description}>
                    {description}
                </div>
            </div>
            <p>{productPrice}</p>
        </div>
    );
}

export default EquipmentBox;