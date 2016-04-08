import Ember from 'ember';

export function formatTime(params/*, hash*/) {
  var time = params[0];
  return moment(time).format('hh:mm A');
}

export default Ember.Helper.helper(formatTime);
