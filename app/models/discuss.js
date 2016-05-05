import Model from 'ember-data/model';
import DS from 'ember-data';


export default Model.extend({
  author: DS.attr(),
  authorImage: DS.attr(),
  product: DS.attr(),
  price: DS.attr(),
  comments: DS.hasMany('comment', {async: true}),
  category: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  notes: DS.attr(),
  rank: DS.attr(),
  date: DS.attr()
});
