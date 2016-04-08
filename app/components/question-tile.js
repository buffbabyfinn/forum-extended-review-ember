import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkQuestions: Ember.inject.service(),

  actions: {
    add(question) {
      this.get('bookmarkQuestions').add(question);
    }
  }
});
