import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkQuestions: Ember.inject.service(),
  actions: {
    remove(index) {
      this.get('bookmarkQuestions').remove(index);
    }
  }
});
