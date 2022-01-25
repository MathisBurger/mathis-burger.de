import EquipmentBox, { EquipmentBoxProps } from "../components/EquipmentBox";
import Header from "../components/Header";
import style from "../styles/Equipment.module.css";


const Equipment = () => {

    const DesktopPCEquipment: EquipmentBoxProps[] = [
        {
            productUrl: "https://www.amazon.de/AMD-Ryzen-2600-3-4-GHz-Cache-Speicher/dp/B07KBF8M98/",
            productImage: "https://m.media-amazon.com/images/I/51w5+YhkiRL._AC_SX679_.jpg",
            name: "AMD Ryzen 5 2600",
            description: "I decided for this processor, because it is a fast and cheap CPU. Furthermore, it was high end " +
                            "at the time I bourght it.",
            productPrice: "230€"
        },
        {
            productUrl: "https://www.amazon.de/MSI-B450M-Gaming-Micro-ATX-Mainboard/dp/B07FNMLBF9",
            productImage: "https://m.media-amazon.com/images/I/91Khe1DLUxL._AC_SL1500_.jpg",
            name: "MSI B450M Gaming Plus",
            description: "A good price-value mainboard that looks quite good.",
            productPrice: "80€"
        },
        {
            productUrl: "https://www.amazon.de/ASUS-Grafikkarte-Speicher-DIsplayPort-TUF-GTX1660TI-O6G-EVO-GAMING/dp/B09C8YJZH5",
            productImage: "https://m.media-amazon.com/images/I/81sLDXzZ7NL._AC_SL1500_.jpg",
            name: "Nvidia GTX 1660 Ti",
            description: "A mid range graphicscard that does not support Ray Tracing natively, but uses an emulation " +
            "that comes quite close to the native performance",
            productPrice: "510€"
        },
        {
            productUrl: "https://www.amazon.de/Corsair-Vengeance-Performance-Arbeitsspeicher-Optimised/dp/B082DGZJ9C",
            productImage: "https://m.media-amazon.com/images/I/81cGtM0c+UL._AC_SL1500_.jpg",
            name: "Corsair Vengence RGB Pro (2x 16GB)",
            description: "description required",
            productPrice: "150€"
        },
        {
            productUrl: "https://www.amazon.de/dp/B07CGGNX7S",
            productImage: "https://m.media-amazon.com/images/I/71+bgzGWY5S._AC_SL1500_.jpg",
            name: "Samsung 970 Evo",
            description: "Description required",
            productPrice: "80€"
        },
        {
            productUrl: "https://www.amazon.de/dp/B07D99KFPK/",
            productImage: "https://m.media-amazon.com/images/I/611G76QSilL._AC_SL1000_.jpg",
            name: "Segate Barracuda 1TB",
            description: "Description required",
            productPrice: "45€"
        }
    ];

    const Extras: EquipmentBoxProps[] = [
        {
            productUrl: "https://www.amazon.de/Corsair-Profile-Rapidfire-Mechanische-Tastatur/dp/B07HX65JHB",
            productImage: "https://m.media-amazon.com/images/I/815kMpGZ7qL._AC_SL1500_.jpg",
            name: "Corsair K70 Mk2",
            description: "Description required",
            productPrice: "190€"
        },
        {
            productUrl: "https://www.amazon.de/Logitech-programmierbare-PC-Computermaus-Balance-Tuning-EU-Verpackung/dp/B07GS6ZB7T",
            productImage: "https://m.media-amazon.com/images/I/51CZVcH3IPL._AC_SL1000_.jpg",
            name: "Logitech G502 Hero",
            description: "Description required",
            productPrice: "50€"
        },
        {
            productUrl: "https://www.amazon.de/Samsung-T35F-IPS-Monitor-1080p-Randlos/dp/B08SW5C9PF",
            productImage: "https://m.media-amazon.com/images/I/71ZgrfNbCNL._AC_SL1500_.jpg",
            name: "Samsung monitor",
            description: "Description required",
            productPrice: "165€"
        }
    ];

    const Software: EquipmentBoxProps[] = [
        {
            productUrl: "https://jetbrains.com",
            productImage: "https://jetbrains.com/favicon.ico",
            name: "Jetbrains",
            description: "Description required",
            productPrice: ""
        }
    ]

    return (
        <div style={{overflow: "hidden"}}>
            <Header active={"equipment"} />
            <div className={style.container}>
                <h1>Equipment</h1>
                <h3>Desktop PC</h3>
                <div className={style.equipmentBox}>
                    {DesktopPCEquipment.map(props => (
                        <EquipmentBox {...props} />
                    ))}
                </div>
                <h3>Periphery</h3>
                <div className={style.equipmentBox}>
                    {Extras.map(props => (
                        <EquipmentBox {...props} />
                    ))}
                </div>
                <h3>Software</h3>
                <div className={style.equipmentBox}>
                    {Software.map(props => (
                        <EquipmentBox {...props} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Equipment;