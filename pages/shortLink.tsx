import {NextPage} from "next";
import mapping from "../shortLinks.json"
import {useEffect, useState} from "react";


const ShortLink: NextPage = () => {


    const [hasNoShortId, setHasNoShortId] = useState<boolean>(false);

    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        if (!search.has("shortId")) {
            setHasNoShortId(true);
            return;
        }
        const shortID = search.get("shortId");
        // @ts-ignore
        for (const element of mapping.mapping) {
            if(shortID === element.id) {
                window.location.replace(element.url);
                return;
            }
        }
        setHasNoShortId(true);

    }, [mapping]);

    if (hasNoShortId) {
        return (
            <p>Invalid short ID.</p>
        );
    }


    return (
        <p>Loading...</p>
    );
}


export default ShortLink;