import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var params = {
        body: this.get('body'),
        author: this.get('author'),
        notes: this.get('notes'),
        answers: this.get('answers') ? this.get('answers') : ""
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
