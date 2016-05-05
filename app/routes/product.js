import Ember from 'ember';

export default Ember.Route.extend({
  firebase: Ember.inject.service(),



  model(params) {
    // debugger;
    return this.store.findRecord('discuss', params.discuss_id);
  },

  actions: {
    saveComment(params) {
      // var firebase = this.get('firebase');
      // console.log(firebase);
      var newComment = this.store.createRecord('comment', params);
      var discuss = params.discuss;
      discuss.get('comments').addObject(newComment);
      newComment.save().then(function () {
        return discuss.save();
      });
    },
    updateDiscuss(discuss, params){
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          discuss.set(key, params[key]);
        }
      });
      discuss.save();
      this.transitionTo('discuss', discuss);
    },
  }
});
