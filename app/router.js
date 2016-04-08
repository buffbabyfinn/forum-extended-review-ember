import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('question', {path: '/question/:question_id'});
  this.route('category', {path: 'category/:question_category'});
});

export default Router;
