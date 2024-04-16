import { Link } from "react-router-dom";
import styles from './Aforisms.module.scss';
import IAphorism from './IAphorism';
import LikeButton from "../LikeButton/LikeButton";

type AforismParams = {
    quote: IAphorism,
    activeLink: string,
    handleActiveLink: (activeLink: string) => void,
};

export default function Aforism({ quote, activeLink, handleActiveLink }: AforismParams) {
    return (
        <>
            <div className={styles.quote}>
                <div className={styles.inner__container} key={quote._id}>
                    <p className={styles.content}>{quote.content}</p>
                    <p className={styles.author}>{`@ ${quote.author}`}</p>
                    <p className={styles.tags}>{`tags: ${quote.tags}`}</p>
                    <div className={styles.parameters}>
                        <LikeButton quote={quote} />
                        {activeLink === '/quotes' || activeLink === '/likes' ? <Link className={styles.link} to={`/quotes/authors/${quote.author}`} onClick={() => handleActiveLink('/quotes/author')}>Подробнее</Link> : null}
                    </div>
                </div>
            </div>
        </>
    )
}
