
export class SubstractionQuiz {
    
    public numbers: number[] = [];

    constructor(
        numberOfNumbers: number = 2,
        minimumValue: number = 1,
        maximumValue: number = 9999,
    ) {
        this.createNumbers(numberOfNumbers, minimumValue, maximumValue);
    }

    checkAnswer(answer: number) {
        const result = Math.abs(this.numbers.reduce((partialSum, a) => a - partialSum, 0));
        return answer === result;
    }

    private createNumbers(
        numberOfNumbers: number,
        minimumValue: number,
        maximumValue: number,
    ) {
        for (let i = 0; i < numberOfNumbers; i++) {
            this.numbers.push(Math.floor(Math.random() * maximumValue) + minimumValue + 1);
        }

        this.numbers = this.numbers.sort((a, b) => b - a);
    }
}

export class SubstractionGame {

    public correctAnswers: number = 0;
    public completedRounds: number = 0;
    public currentQuiz?: SubstractionQuiz;
    
    constructor(
        private rounds: number = 0,
    ) {
        this.currentQuiz = new SubstractionQuiz();
    }

    nextRound() {
        this.completedRounds++;
        if (this.rounds === 0 || this.completedRounds < this.rounds) {
            this.currentQuiz = new SubstractionQuiz();
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