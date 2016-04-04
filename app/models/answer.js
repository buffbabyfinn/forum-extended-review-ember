import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', {async: true}),
  body: DS.attr(),
  author: DS.attr(),
  date: DS.attr('date', { defaultValue() { return new Date(); }})
});
