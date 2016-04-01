import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
    questions: this.store.findAll('question'),
    answers: this.store.findAll('answer')
    });
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    deleteQuestion(question) {
      if(confirm('Are you sure you would like to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },

    updateQuestion(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
