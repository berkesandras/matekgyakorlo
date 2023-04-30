import { useCallback, useEffect, useState } from "react";
import { AdditionGame } from "../additionGame";

export default function useAdditionGame() {

    let game: AdditionGame;

    const [ addends, setAddends ] = useState<number[]>();
    const [ rounds, setRounds ] = useState<number>();
    const [ completedRounds, setCompletedRounds ] = useState<number>();
    const [ correctAnswers, setCorrectAnswers ] = useState<number>();
    const [ isGameOver, setGameOver ] = useState(false);

    useEffect(() => {
        game = new AdditionGame(10);
        setAddends(game.currentQuiz?.addends);
        setRounds(10);
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
            setAddends(game.currentQuiz?.addends);
        } else {
            setGameOver(true);
        }
    }, []);

    return {
        addends,
        rounds,
        completedRounds,
        correctAnswers,
        isGameOver,
        checkAnswer,
        startNextRound,
    }
}