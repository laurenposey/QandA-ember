import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        reply: this.get('reply'),
        visitor: this.get('visitor'),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
