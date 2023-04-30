import { useEffect, useRef, useState } from "react";
import KeyboardNavigationAwareContainer from "../../common/components/KeyboardNavigationAwareContainer/KeyboardNavigationAwareContainer.component";
import NumberInput from "../../common/components/NumberInput/NumberInput.component";
import styles from "./Addition.module.css";
import useAdditionGame from "./hooks/useAdditionGame";

export default function AdditionPage() {

    const { 
        addends,
        checkAnswer,
        completedRounds,
        correctAnswers,
        startNextRound,
    } = useAdditionGame();

    const [ digits, setDigits ] = useState<number[]>([]);

    const lastDigit = useRef(null);

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
            setInitialFocus();
        }
    }

    function setInitialFocus() {
        (lastDigit.current as unknown as HTMLElement).focus();
    }

    useEffect(() => {
        setInitialFocus();
    }, []);

    return (
        <div className={styles.root}>
            <h1>Írásbeli összeadás</h1>

            <div>
                Add össze a számokat úgy, mintha papíron számolnál. Jobbról balra haladj!
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
                    <NumberInput value={digits[5]} onChange={(value) => updateDigit(5, value || 0)} ref={lastDigit} />
                </KeyboardNavigationAwareContainer>
            </div>

            <div className={styles.score}>
                <div>Pont: {correctAnswers} / {(completedRounds ? completedRounds : 0)}</div>
            </div>
        </div>
    );
}