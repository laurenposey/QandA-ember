import Ember from 'ember';

export default Ember.Component.extend({
  questionObject: Ember.computed('question.content', 'question.user','question.notes', function() {
    return this.get('question.content') + 'Author: ' + this.get('question.user') + ' Notes:' + this.get('question.notes');
  }),
  favoriteQuestions: Ember.inject.service(),

  actions:{
    addToFav(question) {
      this.get('favoriteQuestions').add(question);
    }
  }

});
