import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        body: this.get('body') ? this.get('body'): "",
        author: this.get('author') ? this.get('author'): "",
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
