import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  }

  actions: {
    save(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    }

    delete(question) {
      if(confirm('Are you sure you would like to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
