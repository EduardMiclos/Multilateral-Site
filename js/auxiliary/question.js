export default class Question{
    constructor(question, options, correctAnswer, imageUrl){
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
        this.imageUrl = imageUrl;
    }
}