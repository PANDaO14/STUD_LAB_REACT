import { useParams } from 'react-router-dom';
import IAphorism from '../../../components/Aforism/IAphorism';
import Header from '../../../components/Header/Header';
import Aforism from '../../../components/Aforism/Aforism';
import { useState, useEffect } from "react";
import fetchAphorisms from '../../../components/Aforism/fetchAforisms';
import styles from '../../../components/Aforism/Aforisms.module.scss'

function TagQuotePage() {
    const [quotes, setQuotes] = useState<IAphorism[]>([]);
    const [activeLink, setActiveLink] = useState('/quotes/tag');
    const { tag } = useParams<{ tag: string }>();

    useEffect(() => {
        fetchAphorisms().then(setQuotes);
    }, []);

    const handleActiveLink = (link: string) => {
        setActiveLink(link);
        console.log(activeLink)
    }

    return (
        <div>
            <Header />
            <div className="container">
                <h1 className={styles.title}>{`All aphorisms with the tag: ${tag}`}</h1>
                <div className={styles.quotes}>
                    {quotes.filter((quote) => tag ? quote.tags.includes(tag) : '').map(quote => (
                        <Aforism key={quote._id} quote={quote} activeLink={activeLink} handleActiveLink={handleActiveLink} />
                    ))}
                </div>
            </div>
        </div >
    );
}

export default TagQuotePage;
