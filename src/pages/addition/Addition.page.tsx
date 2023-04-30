import KeyboardNavigationAwareContainer from "../../common/components/KeyboardNavigationAwareContainer/KeyboardNavigationAwareContainer.component";
import NumberInput from "../../common/components/NumberInput/NumberInput.component";
import styles from "./Addition.module.css";

export default function AdditionPage() {

    const digits: number[] = [];

    function updateDigit(position: number, value: number) {
        digits[position] = value;
        
    }

    function checkAnswer(e: any) {
        if (e.key === "Enter") {
            console.log("The current answer is " + parseInt(digits.join(''), 10));
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

                <KeyboardNavigationAwareContainer className={styles.numberInputs} onKeyDown={checkAnswer}>
                    <NumberInput onChange={(value) => updateDigit(0, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(1, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(2, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(3, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(4, value || 0)} />
                    <NumberInput onChange={(value) => updateDigit(5, value || 0)} />
                </KeyboardNavigationAwareContainer>
            </div>
        </div>
    );
}