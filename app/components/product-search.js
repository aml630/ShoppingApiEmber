import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    productLookup() {
      var params = {
        product: this.get('product2')
      };
      this.set('product', '');

      this.sendAction('productLookup', params);
    }
  }
});
