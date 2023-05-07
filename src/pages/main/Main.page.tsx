import styles from './Main.module.css';

export default function Main() {
    return (
        <div className={styles.root}>
            <a href="/osszeadas">
                <section className={styles.item}>
                    Írásbeli összeadás
                </section>
            </a>
            
            <a href="/kivonas">
                <section className={styles.item}>
                    Írásbeli kivonás
                </section>
            </a>
        </div>
    );
}