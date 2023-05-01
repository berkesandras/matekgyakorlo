import { useCallback, useEffect, useState } from "react";
import { SubstractionGame } from "../substractionGame";

export default function useSubstractionGame() {

    let game: SubstractionGame;

    const [ numbers, setNumbers ] = useState<number[]>();
    const [ completedRounds, setCompletedRounds ] = useState<number>();
    const [ correctAnswers, setCorrectAnswers ] = useState<number>();
    const [ isGameOver, setGameOver ] = useState(false);

    useEffect(() => {
        game = new SubstractionGame();
        setNumbers(game.currentQuiz?.numbers);
        setCompletedRounds(0);
        setCorrectAnswers(0);
    }, []);

    const checkAnswer = useCallback((answer: number): boolean => {
        const isCorrect = game.checkAnswer(answer);
        if (isCorrect) {
            setCorrectAnswers(game.correctAnswers);
        }
        return !!isCorrect;
    }, []);

    const startNextRound = useCallback(() => {
        const hasMoreRound = game.nextRound();
        setCompletedRounds(game.completedRounds);
        if (hasMoreRound) {
            setNumbers(game.currentQuiz?.numbers);
        } else {
            setGameOver(true);
        }
    }, []);

    return {
        numbers,
        completedRounds,
        correctAnswers,
        isGameOver,
        checkAnswer,
        startNextRound,
    }
}