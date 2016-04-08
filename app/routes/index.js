import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('question', {
      orderBy: 'category'
    });
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
