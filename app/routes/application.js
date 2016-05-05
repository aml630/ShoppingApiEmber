
import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('discuss');
  // },
  actions: {
    accessDenied() {
      this.transitionTo('/');
    },
    navLookup(params) {
      this.transitionTo('results', params.product);
    }
  }
});
