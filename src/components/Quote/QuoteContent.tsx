import { useState, useEffect } from "react";
import Aphorism from "../Aforism/IAphorism";
import fetchAphorisms from "../Aforism/fetchAforisms";
import CategoryBtns from "./CategoryBtns/CategoryBtns";
import styles from './QuoteContent.module.scss';

export default function QuoteContent() {
    const [quotes, setQuotes] = useState<Aphorism[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchAphorisms().then(setQuotes);

        setLoading(false);
    }, []);


    const uniqueAuthors = Array.from(new Set(quotes.map((quote) => quote.author)));
    const uniqueTags = Array.from(new Set(quotes.flatMap((quote) => quote.tags)));

    return (
        <>
            {loading ? <h1 >Loading...</h1> :
                (<section className={styles.content}>
                    <div className="container">
                        <div className={styles.all__btns}>
                            <CategoryBtns category="Authors" buttons={uniqueAuthors} />
                            <CategoryBtns category="Tags" buttons={uniqueTags} />
                        </div>
                    </div>
                </section>)}
        </>
    )
}