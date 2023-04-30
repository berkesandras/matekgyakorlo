import { useState } from "react";
import KeyboardNavigationAwareContainer from "../../common/components/KeyboardNavigationAwareContainer/KeyboardNavigationAwareContainer.component";
import NumberInput from "../../common/components/NumberInput/NumberInput.component";
import styles from "./Addition.module.css";
import useAdditionGame from "./hooks/useAdditionGame";

export default function AdditionPage() {

    const { 
        addends,
        checkAnswer,
        rounds,
        completedRounds,
        correctAnswers,
        startNextRound,
    } = useAdditionGame();

    const [ digits, setDigits ] = useState<number[]>([]);

    function updateDigit(position: number, value: number) {
        const newDigits = [...digits];
        newDigits[position] = value;
        setDigits(newDigits);
    }

    function checkAnswerOnEnter(e: any) {
        if (e.key === "Enter") {
            const answer = parseInt(digits.join(''), 10);
            checkAnswer(answer);
            startNextRound();
            setDigits([]);
        }
    }

    return (
        <div className={styles.root}>
            <h1>Írásbeli összeadás gyakorlása</h1>

            <div>
                Add össze a számokat úgy, mintha papíron számolnál. Jobbról balra haladj!
            </div>

            <div>
                <div>Forduló: {(completedRounds ? completedRounds + 1 : 1)} / {rounds}</div>
                <div>Helyes megoldások száma: {correctAnswers}</div>
            </div>

            <div className={styles.operationArea}>
                <div className={styles.numbers}>
                    <span>{addends && addends[0]}</span>
                </div>

                <div className={styles.plusSign}>+</div>

                <div className={styles.numbers}>
                    <span>{addends && addends[1]}</span>
                </div>

                <div className={styles.divider}></div>

                <KeyboardNavigationAwareContainer className={styles.numberInputs} onKeyDown={checkAnswerOnEnter}>
                    <NumberInput value={digits[0]} onChange={(value) => updateDigit(0, value || 0)} />
                    <NumberInput value={digits[1]} onChange={(value) => updateDigit(1, value || 0)} />
                    <NumberInput value={digits[2]} onChange={(value) => updateDigit(2, value || 0)} />
                    <NumberInput value={digits[3]} onChange={(value) => updateDigit(3, value || 0)} />
                    <NumberInput value={digits[4]} onChange={(value) => updateDigit(4, value || 0)} />
                    <NumberInput value={digits[5]} onChange={(value) => updateDigit(5, value || 0)} />
                </KeyboardNavigationAwareContainer>
            </div>
        </div>
    );
}