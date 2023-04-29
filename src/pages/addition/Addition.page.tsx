import NumberInput from "../../common/components/NumberInput/NumberInput.component";
import styles from "./Addition.module.css";

export default function AdditionPage() {

    const digits: number[] = [];

    function updateDigit(position: number, value: number) {
        digits[position] = value;
        // console.log(parseInt(digits.join(''), 10));
    }

    function handleKeyPressOnInputContainer(e: any) {
        e.preventDefault();

        if (e.key === "ArrowLeft") {
            console.log("Left key pressed.");
        }
        if (e.key === "ArrowRight") {
            console.log("Right key pressed.");
        }
    }

    return (
        <div className={styles.root}>
            <h1>Írásbeli összeadás gyakorlása</h1>

            <div>
                Add össze a számokat úgy, mintha papíron számolnál. Jobbról balra haladj!
            </div>

            <div className={styles.operationArea}>
                <div className={styles.numbers}>
                    <span>768</span>
                </div>

                <div className={styles.plusSign}>+</div>

                <div className={styles.numbers}>
                    <span>56</span>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.numberInputs} tabIndex={0} onKeyUp={handleKeyPressOnInputContainer}>
                    <NumberInput onChange={(value) => updateDigit(5, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(4, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(3, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(2, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(1, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(0, value || 0)} />
                </div>
            </div>
        </div>
    );
}