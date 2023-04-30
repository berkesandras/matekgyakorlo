
export class AdditionQuiz {
    
    public addends: number[] = [];
    public correctAnswer: number = 0;

    constructor(
        numberOfAddends: number = 2,
        minimumValue: number = 1,
        maximumValue: number = 9999,
    ) {
        this.createAddends(numberOfAddends, minimumValue, maximumValue);
    }

    checkAnswer(answer: number) {
        return answer === this.addends.reduce((partialSum, a) => partialSum + a, 0);
    }

    private createAddends(
        numberOfAddends: number,
        minimumValue: number,
        maximumValue: number,
    ) {
        for (let i = 0; i < numberOfAddends; i++) {
            this.addends.push(Math.floor(Math.random() * maximumValue) + minimumValue + 1);
        }
    }
}

export class AdditionGame {

    public correctAnswers: number = 0;
    public completedRounds: number = 0;
    public currentQuiz?: AdditionQuiz;
    
    constructor(
        private rounds: number = 0,
    ) {
        this.currentQuiz = new AdditionQuiz();
    }

    nextRound() {
        this.completedRounds++;
        if (this.rounds === 0 || this.completedRounds < this.rounds) {
            this.currentQuiz = new AdditionQuiz();
            return true;
        }
        return false;
    }

    checkAnswer(answer: number) {
        if (!this.currentQuiz) {
            return false;
        }

        const isCorrect = this.currentQuiz.checkAnswer(answer);
        
        if (isCorrect) {
            this.correctAnswers++;
        }
        
        return isCorrect;
    }
}