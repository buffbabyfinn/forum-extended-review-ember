import Ember from 'ember';

export default Ember.Component.extend({

  fullFormattedTimeStamp: Ember.computed('');

  actions: {
    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
