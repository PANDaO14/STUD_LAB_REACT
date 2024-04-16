import { Link } from 'react-router-dom';
import styles from './CategoryBtns.module.scss';

export default function CategoryBtns({ category, buttons }: { category: string, buttons: string[] }) {

    return (
        <>
            <div className={styles.category__btns}>
                <h1 className={styles.title}>{category}</h1>
                <div className={styles.btns}>
                    {buttons.map((button, index) => (
                        <Link to={`/quotes/${category}/${button}`} className={styles.link} key={index}>{button}</Link>
                    ))}
                </div>
            </div>

        </>
    )
}