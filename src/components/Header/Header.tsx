import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './Header.module.scss';

export default function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleActiveLink = (activeLink: string) => {
        setActiveLink(activeLink);
    }

    return (
        <>
            <header className={styles.header__page}>
                <div className="container">
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link className={activeLink === "/" ? styles.selected : styles.link} to="/" onClick={() => handleActiveLink('/')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link to="/quotes" className={activeLink === "/quotes" || activeLink.startsWith("/quotes/") ? styles.selected : styles.link} onClick={() => handleActiveLink('/quotes')}
                                >
                                    Quotes
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link to="/likes" className={activeLink === "/likes" || activeLink.startsWith("/likes/") ? styles.selected : styles.link} onClick={() => handleActiveLink('/likes')}
                                >
                                    Likes
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
