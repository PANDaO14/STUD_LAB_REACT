import { useState, useEffect } from 'react';
import styles from './LikeButton.module.scss';
import IAphorism from '../Aforism/IAphorism';

type LikeButtonParams = {
    quote: IAphorism,
};

export default function LikeButton({ quote }: LikeButtonParams) {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const likedQuotes = JSON.parse(localStorage.getItem('likedQuotes') || '[]');
        setLiked(likedQuotes.some((q: IAphorism) => q._id === quote._id));
    }, [quote]);

    const handleLike = () => {
        let likedQuotes = JSON.parse(localStorage.getItem('likedQuotes') || '[]');
        if (!liked) {
            likedQuotes.push(quote);
        } else {
            likedQuotes = likedQuotes.filter((q: IAphorism) => q._id !== quote._id);
            if (window.location.pathname === '/likes') {
                window.location.reload();
            }
        }
        localStorage.setItem('likedQuotes', JSON.stringify(likedQuotes));
        setLiked(!liked);
    };

    return (
        <button className={styles.like__btn} onClick={handleLike}>
            {liked ? '❤️' : '🤍'}
        </button>
    );
}
