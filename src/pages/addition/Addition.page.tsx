import NumberInput from "../../common/components/NumberInput/NumberInput.component";
import styles from "./Addition.module.css";

export default function AdditionPage() {

    return (
        <div className={styles.root}>
            <h1>Írásbeli összeadás gyakorlása</h1>

            <div>
                Add össze a számokat úgy, mintha papíron számolnál. Jobbról balra haladj!
            </div>

            <div className={styles.operationArea}>
                <div className={styles.numbers}>
                    <span>1234</span>
                </div>

                <div className={styles.plusSign}>+</div>

                <div className={styles.numbers}>
                    <span>22345</span>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.inputs}>
                    <NumberInput />
                </div>
            </div>
        </div>
    );
}