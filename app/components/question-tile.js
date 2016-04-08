import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkQuestions: Ember.inject.service(),
  fullQuestion: Ember.computed('question.author', 'question.title', function() {
    return this.get('question.author') + " asks: " + this.get('question.title');
  }),

  actions: {
    add(question) {
      this.get('bookmarkQuestions').add(question);
    }
  }
});
