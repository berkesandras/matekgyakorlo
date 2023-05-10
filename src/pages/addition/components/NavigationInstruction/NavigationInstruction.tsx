import styles from "./NavigationInstruction.module.css";

export default function NavigationInstruction() {

    return (
        <div className={styles.root}>
            <h2>Irányítás:</h2>
            <div>
                <span className={styles.instructionsSymbol}>↑ ↓</span>: szám növelése/csökkentése
            </div>
            <div>
                <span className={styles.instructionsText}>0-9</span>: szám beírása
            </div>
            <div>
                <span className={styles.instructionsSymbol}>← →</span>: helyiérték léptetése
            </div>
            <div>
                <span className={styles.instructionsText}>Enter</span>: eredmény ellenőrzése
            </div>
        </div>
    );
}