import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  probability: DS.attr('number'),
  meanSamples: DS.hasMany('mean-sample'),
  isTrump: Ember.computed('name', {
  	get() {
  		return this.get('name') === 'Donald Trump';
  	}
  }),
  percentProbability: Ember.computed('probability', {
    get() {
      return Math.round(this.get('probability') * 1000) / 10;
    }
  }),
  viable: Ember.computed('probability', {
    get() {
      return this.get('probability') > 0.01;
    }
  })
});
