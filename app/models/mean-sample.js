import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  sampleDate: DS.attr('date'),
  probability: DS.attr('number'),
  candidate: DS.belongsTo('candidate'),
  formattedDate: Ember.computed('sampleDate', {
  	get() {
  		return moment(this.get('sampleDate')).format('YYYY-MM-DD');
  	}
  }),
});
