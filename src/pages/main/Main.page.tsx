import styles from './Main.module.css';

export default function Main() {
    return (
        <div className={styles.root}>
            <a href="/osszeadas">
                <section className={styles.item}>
                    <div className={styles.itemIcon}>+</div>
                    <h1>Írásbeli összeadás</h1>
                </section>
            </a>
            
            <a href="/kivonas">
                <section className={styles.item}>
                    <div className={styles.itemIcon}>-</div>
                    <h1>Írásbeli kivonás</h1>
                </section>
            </a>
        </div>
    );
}