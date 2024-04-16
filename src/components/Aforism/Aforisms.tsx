import { useState, useEffect } from "react";
import styles from './Aforisms.module.scss';
import fetchAphorisms from "./fetchAforisms";
import IAphorism from "./IAphorism";
import Aforism from "./Aforism";

export default function Aforisms() {
    const [quotes, setQuotes] = useState<IAphorism[]>([]);
    const [activeLink, setActiveLink] = useState('/quotes');

    useEffect(() => {
        fetchAphorisms().then(setQuotes);
    }, []);

    const handleActiveLink = (link: string) => {
        setActiveLink(link);
    }

    return (
        <>
            <div className="container">
                <div className={styles.quotes}>
                    {quotes.map((quote) => (
                        <Aforism key={quote._id} quote={quote} activeLink={activeLink} handleActiveLink={handleActiveLink} />
                    ))}
                </div>
            </div>
        </>
    )
}
