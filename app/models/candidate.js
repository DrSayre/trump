import DS from 'ember-data';
import Ember from 'ember'

export default DS.Model.extend({
  name: DS.attr('string'),
  probability: DS.attr('number'),
  isTrump: Ember.computed('name', {
  	get() {
  		return this.get('name') === 'Donald Trump';
  	}
  }),
  percentProbability: Ember.computed('probability', {
    get() {
      return Math.round(this.get('probability') * 1000) / 10;
    }
  })
});
