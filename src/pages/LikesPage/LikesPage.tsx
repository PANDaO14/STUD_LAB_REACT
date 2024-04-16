import { useState, useEffect } from 'react';
import Aforism from '../../components/Aforism/Aforism';
import IAphorism from '../../components/Aforism/IAphorism';
import styles from '../../components/Aforism/Aforisms.module.scss'
import Header from '../../components/Header/Header';

export default function LikesPage() {
    const [likes, setLikes] = useState<IAphorism[]>([]);
    const [activeLink, setActiveLink] = useState('/likes');

    const handleActiveLink = (link: string) => {
        setActiveLink(link);
    }

    useEffect(() => {
        const likedQuotes = localStorage.getItem('likedQuotes');
        if (likedQuotes) {
            setLikes(JSON.parse(likedQuotes));
        }
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.quotes}>
                    {likes.length ? (
                        likes.map(quote => (
                            <Aforism
                                key={quote._id}
                                quote={quote}
                                activeLink={activeLink}
                                handleActiveLink={handleActiveLink}
                            />
                        ))
                    ) : (
                        <div className={styles.quote}>
                            <div className={styles.inner__container}>
                                <p className={styles.warning}>Список лайков пуст.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
