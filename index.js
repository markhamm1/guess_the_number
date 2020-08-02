var app = new Vue({
  el: "#app",
  data: {
    message: "I'm thinking of a number between 1-100, can you guess what it is?",
    correctAnswer: "",
    userGuess: "",
    analyzedAnswer: false,
    userFeedback: ""
  },
  methods: {
    pickNumber: function () {
      this.correctAnswer = Math.floor(Math.random() * 100);
      console.log(this.correctAnswer);
    },
    analyzeGuess: function () {
      console.log(this.userGuess);
      if (this.userGuess == this.correctAnswer) {
        this.userFeedback = "You Win!";
      } else if (this.userGuess < this.correctAnswer) {
        this.userFeedback = "Too low";
      } else if (this.userGuess > this.correctAnswer) {
        this.userFeedback = "Too high";
      }
    }
  }
});